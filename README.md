# spdr
Companies in the S&amp;P 500 and Dow Jones indexes based on SPDR ETF portfolio holdings

## Install
```
$ npm install spdr --save
```

## Usage
```javascript
var spdr = require("spdr");

spdr.getSp500().then((companyList) => {
    console.log(JSON.stringify(companyList, null, 2));
}).catch((err) => {
    console.log("err: " + err.stack);
});

spdr.getDowJones().then((companyList) => {
    console.log(JSON.stringify(companyList, null, 2));
}).catch((err) => {
    console.log("err: " + err.stack);
});

/*
{
  "name": "SPDR® Dow Jones® Industrial Average ETF",
  "symbol": "DIA",
  "date": "05/07/2018",
  "companyList": [
    {
      "symbol": "BA",
      "name": "Boeing Company",
      "weight": "9.616715",
      "rank": 1
    },
    {
      "symbol": "GS",
      "name": "Goldman Sachs Group Inc.",
      "weight": "6.700599",
      "rank": 2
    },
    {
      "symbol": "UNH",
      "name": "UnitedHealth Group Incorporated",
      "weight": "6.603988",
      "rank": 3
    },
    {
      "symbol": "MMM",
      "name": "3M Company",
      "weight": "5.657091",
      "rank": 4
    },
    {
      "symbol": "AAPL",
      "name": "Apple Inc.",
      "weight": "5.230535",
      "rank": 5
    },
    {
      "symbol": "HD",
      "name": "Home Depot Inc.",
      "weight": "5.185338",
      "rank": 6
    },
    {
      "symbol": "MCD",
      "name": "McDonald's Corporation",
      "weight": "4.661041",
      "rank": 7
    },
    {
      "symbol": "CAT",
      "name": "Caterpillar Inc.",
      "weight": "4.232225",
      "rank": 8
    },
    {
      "symbol": "IBM",
      "name": "International Business Machines Corporation",
      "weight": "4.045784",
      "rank": 9
    },
    {
      "symbol": "V",
      "name": "Visa Inc. Class A",
      "weight": "3.651431",
      "rank": 10
    },
    {
      "symbol": "TRV",
      "name": "Travelers Companies Inc.",
      "weight": "3.643804",
      "rank": 11
    },
    {
      "symbol": "CVX",
      "name": "Chevron Corporation",
      "weight": "3.529397",
      "rank": 12
    },
    {
      "symbol": "JNJ",
      "name": "Johnson & Johnson",
      "weight": "3.491261",
      "rank": 13
    },
    {
      "symbol": "UTX",
      "name": "United Technologies Corporation",
      "weight": "3.414989",
      "rank": 14
    },
    {
      "symbol": "JPM",
      "name": "JPMorgan Chase & Co.",
      "weight": "3.089564",
      "rank": 15
    },
    {
      "symbol": "DIS",
      "name": "Walt Disney Company",
      "weight": "2.894930",
      "rank": 16
    },
    {
      "symbol": "AXP",
      "name": "American Express Company",
      "weight": "2.784760",
      "rank": 17
    },
    {
      "symbol": "MSFT",
      "name": "Microsoft Corporation",
      "weight": "2.718093",
      "rank": 18
    },
    {
      "symbol": "WMT",
      "name": "Walmart Inc.",
      "weight": "2.414419",
      "rank": 19
    },
    {
      "symbol": "XOM",
      "name": "Exxon Mobil Corporation",
      "weight": "2.196056",
      "rank": 20
    },
    {
      "symbol": "PG",
      "name": "Procter & Gamble Company",
      "weight": "2.033344",
      "rank": 21
    },
    {
      "symbol": "NKE",
      "name": "NIKE Inc. Class B",
      "weight": "1.958767",
      "rank": 22
    },
    {
      "symbol": "DWDP",
      "name": "DowDuPont Inc.",
      "weight": "1.833908",
      "rank": 23
    },
    {
      "symbol": "MRK",
      "name": "Merck & Co. Inc.",
      "weight": "1.620912",
      "rank": 24
    },
    {
      "symbol": "INTC",
      "name": "Intel Corporation",
      "weight": "1.506505",
      "rank": 25
    },
    {
      "symbol": "VZ",
      "name": "Verizon Communications Inc.",
      "weight": "1.348312",
      "rank": 26
    },
    {
      "symbol": "CSCO",
      "name": "Cisco Systems Inc.",
      "weight": "1.291815",
      "rank": 27
    },
    {
      "symbol": "KO",
      "name": "Coca-Cola Company",
      "weight": "1.190402",
      "rank": 28
    },
    {
      "symbol": "PFE",
      "name": "Pfizer Inc.",
      "weight": "0.986728",
      "rank": 29
    },
    {
      "symbol": "GE",
      "name": "General Electric Company",
      "weight": "0.397458",
      "rank": 30
    }
  ]
}
*/
```

## License
MIT license; see [LICENSE](./LICENSE).
