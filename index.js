const request = require('request-promise-native').defaults({timeout: 9000});
const xlsx = require("xlsx");


const fetchExcelFile = (url) => {

    const options = {
        uri: url,
        encoding: null,
        rejectUnauthorized: false,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.11; rv:45.0) Gecko/20100101 Firefox/45.0'
        }
    };

    return request(options);
}

const parseExcelFile = (excelFile) => {

    const workbook = xlsx.read(excelFile);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonSheet = xlsx.utils.sheet_to_json(sheet, { range: 4 });

    const indexData = {
        name: sheet.B1.v,
        symbol: sheet.B2.v,
        date: sheet.B3.v.slice(6),
        companyList: [ ]
    };

    let date = new Date(indexData.date);
    let iso = date.toISOString();
    let dateString = `${iso.slice(5,7)}/${iso.slice(8,10)}/${iso.slice(0,4)}`;
    indexData.date = dateString;

    let rank = 0;

    for (let row of jsonSheet) {

        if ((row.Name !== undefined) && (row.Identifier !== undefined) && (row.Weight !== undefined)) {

            const companyInfo = {
                symbol: row.Ticker,
                name: row.Name,
                weight: Number(row.Weight)
            }

            if (!companyInfo.symbol.startsWith("CASH_")) {
                companyInfo.rank = ++rank;
                indexData.companyList.push(companyInfo);
            }
        }
    }

    return indexData;
}

const fetchIndexCompanies = async (url, fileName, count) => {

    let excelData = await fetchExcelFile(url);
    let indexData = parseExcelFile(excelData);

    if (indexData.companyList.length < count) {
        throw new Error(`${indexData.companyList.length} of ${count} companies found in ${fileName}`);
    }

    return indexData;
}

const getDowJones = () => {
    return fetchIndexCompanies(
        "https://www.ssga.com/library-content/products/fund-data/etfs/us/holdings-daily-us-en-dia.xlsx", 30);
}

const getSp500 = () => {
    return fetchIndexCompanies(
        "https://www.ssga.com/library-content/products/fund-data/etfs/us/holdings-daily-us-en-spy.xlsx", 500);
}

exports.getDowJones = getDowJones;
exports.getSp500 = getSp500;
