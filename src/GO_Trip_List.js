
window.Seed = (function () {
  const stations = [
    {
       "stop_id": "YO",
       "stop_name": "York University GO",
       "stop_lat": 43.778839,
       "stop_lon": -79.483532,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "WR",
       "stop_name": "West Harbour GO",
       "stop_lat": 43.26745,
       "stop_lon": -79.869441,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WHBR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "WH",
       "stop_name": "Whitby GO",
       "stop_lat": 43.86484,
       "stop_lon": -78.93818,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WHGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "WE",
       "stop_name": "Weston GO",
       "stop_lat": 43.70022,
       "stop_lon": -79.514671,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WSGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "USBT",
       "stop_name": "Union Station Bus Terminal",
       "stop_lat": 43.6456261,
       "stop_lon": -79.3783951,
       "zone_id": "02",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=USBT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "UN",
       "stop_name": "Union Station",
       "stop_lat": 43.645195,
       "stop_lon": -79.3806,
       "zone_id": "02",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=USTN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "UI",
       "stop_name": "Unionville GO",
       "stop_lat": 43.851689,
       "stop_lon": -79.314332,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=UVGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "ST",
       "stop_name": "Stouffville GO",
       "stop_lat": 43.970924,
       "stop_lon": -79.249989,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SVGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "SR",
       "stop_name": "Streetsville GO",
       "stop_lat": 43.575584,
       "stop_lon": -79.70882,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "SCTH",
       "stop_name": "St. Catharines GO",
       "stop_lat": 43.1476135,
       "stop_lon": -79.2549057,
       "zone_id": "83_P",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CAGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "SC",
       "stop_name": "Scarborough GO",
       "stop_lat": 43.716945,
       "stop_lon": -79.254722,
       "zone_id": "06",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SCGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "RU",
       "stop_name": "Rutherford GO",
       "stop_lat": 43.838487,
       "stop_lon": -79.498819,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "RO",
       "stop_name": "Rouge Hill GO",
       "stop_lat": 43.780375,
       "stop_lon": -79.130646,
       "zone_id": "09",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ROGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "RI",
       "stop_name": "Richmond Hill GO",
       "stop_lat": 43.874307,
       "stop_lon": -79.426167,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RHGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "PO",
       "stop_name": "Port Credit GO",
       "stop_lat": 43.555999,
       "stop_lon": -79.586881,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PCGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "PIN",
       "stop_name": "Pickering GO",
       "stop_lat": 43.831576,
       "stop_lon": -79.084594,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "PA",
       "stop_name": "Pearson Airport Terminal 1",
       "stop_lat": 43.6821671,
       "stop_lon": -79.6132584,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AIRP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "OS",
       "stop_name": "Oshawa GO",
       "stop_lat": 43.871004,
       "stop_lon": -78.884807,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OSGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "OR",
       "stop_name": "Oriole GO",
       "stop_lat": 43.765518,
       "stop_lon": -79.364275,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ORGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "OL",
       "stop_name": "Old Cummer GO",
       "stop_lat": 43.793703,
       "stop_lon": -79.371403,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CMGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "OA",
       "stop_name": "Oakville GO",
       "stop_lat": 43.455594,
       "stop_lon": -79.682242,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "NI",
       "stop_name": "Niagara Falls GO",
       "stop_lat": 43.108882,
       "stop_lon": -79.063319,
       "zone_id": "84_P",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NFGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "NE",
       "stop_name": "Newmarket GO",
       "stop_lat": 44.060426,
       "stop_lon": -79.459289,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NMGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MR",
       "stop_name": "Markham GO",
       "stop_lat": 43.882691,
       "stop_lon": -79.262469,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MP",
       "stop_name": "Maple GO",
       "stop_lat": 43.859481,
       "stop_lon": -79.506984,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MAGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MO",
       "stop_name": "Mount Pleasant GO",
       "stop_lat": 43.6749763,
       "stop_lon": -79.8221817,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MPGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "ML",
       "stop_name": "Milton GO",
       "stop_lat": 43.52364,
       "stop_lon": -79.867172,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MNGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MK",
       "stop_name": "Milliken GO",
       "stop_lat": 43.823227,
       "stop_lon": -79.301785,
       "zone_id": 70,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MIGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MJ",
       "stop_name": "Mount Joy GO",
       "stop_lat": 43.900521,
       "stop_lon": -79.26313,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MJGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MI",
       "stop_name": "Mimico GO",
       "stop_lat": 43.616411,
       "stop_lon": -79.497762,
       "zone_id": "03",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MMGO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "ME",
       "stop_name": "Meadowvale GO",
       "stop_lat": 43.597566,
       "stop_lon": -79.754328,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MDGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "MA",
       "stop_name": "Malton GO",
       "stop_lat": 43.705153,
       "stop_lon": -79.63823,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MTGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "LS",
       "stop_name": "Lisgar GO",
       "stop_lat": 43.590791,
       "stop_lon": -79.788539,
       "zone_id": 23,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LGGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "LO",
       "stop_name": "Long Branch GO",
       "stop_lat": 43.591317,
       "stop_lon": -79.546149,
       "zone_id": "03",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LBGO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "LI",
       "stop_name": "Lincolnville GO",
       "stop_lat": 43.995416,
       "stop_lon": -79.233457,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LCGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "LA",
       "stop_name": "Langstaff GO",
       "stop_lat": 43.838546,
       "stop_lon": -79.423139,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LNGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "KP",
       "stop_name": "Kipling GO",
       "stop_lat": 43.636955,
       "stop_lon": -79.536287,
       "zone_id": "03",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KPGO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "KI",
       "stop_name": "Kitchener GO",
       "stop_lat": 43.455686,
       "stop_lon": -80.49313,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KITC",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "KE",
       "stop_name": "Kennedy GO",
       "stop_lat": 43.733045,
       "stop_lon": -79.262706,
       "zone_id": 77,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KDGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "KC",
       "stop_name": "King City GO",
       "stop_lat": 43.920037,
       "stop_lon": -79.526886,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KGGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "HA",
       "stop_name": "Hamilton GO Centre",
       "stop_lat": 43.253284,
       "stop_lon": -79.869192,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HMGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "GU",
       "stop_name": "Guildwood GO",
       "stop_lat": 43.755272,
       "stop_lon": -79.198252,
       "zone_id": "08",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "GO",
       "stop_name": "Gormley GO",
       "stop_lat": 43.941617,
       "stop_lon": -79.399033,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GORL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "GL",
       "stop_name": "Guelph Central GO",
       "stop_lat": 43.544353,
       "stop_lon": -80.246917,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GUEP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "GE",
       "stop_name": "Georgetown GO",
       "stop_lat": 43.655373,
       "stop_lon": -79.919054,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GEGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "EX",
       "stop_name": "Exhibition GO",
       "stop_lat": 43.635549,
       "stop_lon": -79.418927,
       "zone_id": "02",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EXGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "ET",
       "stop_name": "Etobicoke North GO",
       "stop_lat": 43.706172,
       "stop_lon": -79.563506,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ETGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "ER",
       "stop_name": "Erindale GO",
       "stop_lat": 43.567235,
       "stop_lon": -79.668506,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ERGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "EG",
       "stop_name": "Eglinton GO",
       "stop_lat": 43.739621,
       "stop_lon": -79.23231,
       "zone_id": "06",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EGGO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "EA",
       "stop_name": "East Gwillimbury GO",
       "stop_lat": 44.077996,
       "stop_lon": -79.455776,
       "zone_id": 44,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GWIL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "DW",
       "stop_name": "Downsview Park GO",
       "stop_lat": 43.7536333,
       "stop_lon": -79.47835,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DWPK",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "DI",
       "stop_name": "Dixie GO",
       "stop_lat": 43.608022,
       "stop_lon": -79.577762,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DXGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "DA",
       "stop_name": "Danforth GO",
       "stop_lat": 43.686462,
       "stop_lon": -79.300358,
       "zone_id": "06",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DAGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "CO",
       "stop_name": "Cooksville GO",
       "stop_lat": 43.582973,
       "stop_lon": -79.623695,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "CL",
       "stop_name": "Clarkson GO",
       "stop_lat": 43.513127,
       "stop_lon": -79.633206,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CLGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "CE",
       "stop_name": "Centennial GO",
       "stop_lat": 43.873601,
       "stop_lon": -79.289211,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CEGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BU",
       "stop_name": "Burlington GO",
       "stop_lat": 43.341265,
       "stop_lon": -79.809141,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BR",
       "stop_name": "Brampton GO",
       "stop_lat": 43.6869087,
       "stop_lon": -79.7628632,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BO",
       "stop_name": "Bronte GO",
       "stop_lat": 43.416774,
       "stop_lon": -79.722294,
       "zone_id": 14,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BTGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BL",
       "stop_name": "Bloor GO",
       "stop_lat": 43.656928,
       "stop_lon": -79.450192,
       "zone_id": "01",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BE",
       "stop_name": "Bramalea GO",
       "stop_lat": 43.7022591,
       "stop_lon": -79.6887512,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BLGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BD",
       "stop_name": "Bradford GO",
       "stop_lat": 44.116513,
       "stop_lon": -79.555394,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BDGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "BA",
       "stop_name": "Barrie South GO",
       "stop_lat": 44.35112,
       "stop_lon": -79.627441,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BSGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AU",
       "stop_name": "Aurora GO",
       "stop_lat": 44.000758,
       "stop_lon": -79.459725,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AP",
       "stop_name": "Appleby GO",
       "stop_lat": 43.379429,
       "stop_lon": -79.760991,
       "zone_id": 15,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=APGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AL",
       "stop_name": "Aldershot GO",
       "stop_lat": 43.313385,
       "stop_lon": -79.855659,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ALGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AJ",
       "stop_name": "Ajax GO",
       "stop_lat": 43.847766,
       "stop_lon": -79.041372,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AJGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AG",
       "stop_name": "Agincourt GO",
       "stop_lat": 43.78611,
       "stop_lon": -79.284385,
       "zone_id": "07",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AGGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AD",
       "stop_name": "Allandale Waterfront GO",
       "stop_lat": 44.374139,
       "stop_lon": -79.687858,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ADGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "AC",
       "stop_name": "Acton GO",
       "stop_lat": 43.6338043,
       "stop_lon": -80.034111,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ATGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08040",
       "stop_name": "Bronte Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.4457626,
       "stop_lon": -79.7920151,
       "zone_id": 14,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "08039",
       "stop_name": "Regional Rd. 25 @ Hwy. 401 Park & Ride",
       "stop_lat": 43.5274849,
       "stop_lon": -79.9038162,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MLPR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "08032",
       "stop_name": "Bramalea Bus Terminal",
       "stop_lat": 43.7186356,
       "stop_lon": -79.7205734,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BLTT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "08030",
       "stop_name": "Williams Pkwy. @ Hwy. 410 Park & Ride",
       "stop_lat": 43.716526,
       "stop_lon": -79.7513046,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WILL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08029",
       "stop_name": "University of Toronto Scarborough",
       "stop_lat": 43.7843628,
       "stop_lon": -79.1851273,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08025",
       "stop_name": "Trafalgar Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.5061531,
       "stop_lon": -79.7453842,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OAKT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "08024",
       "stop_name": "Trafalgar Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.5061531,
       "stop_lon": -79.7453842,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "08021",
       "stop_name": "Hwy. 2 @ Hwy. 35/115 Park & Ride",
       "stop_lat": 43.9128494,
       "stop_lon": -78.6129303,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08020",
       "stop_name": "Hwy. 2 @ Hwy. 35/115 Park & Ride",
       "stop_lat": 43.9128494,
       "stop_lon": -78.6129303,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NCPR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08012",
       "stop_name": "Malton GO Bus",
       "stop_lat": 43.705143,
       "stop_lon": -79.637825,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08006",
       "stop_name": "Bradford GO Bus",
       "stop_lat": 44.116654,
       "stop_lon": -79.555752,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "08002",
       "stop_name": "Allandale Waterfront GO Bus",
       "stop_lat": 44.373817,
       "stop_lon": -79.689441,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02700",
       "stop_name": "Trafalgar Rd. @ Dundas St.",
       "stop_lat": 43.4879119435482,
       "stop_lon": -79.7199831176779,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02699",
       "stop_name": "Hwy. 10 @ Travelled Rd.",
       "stop_lat": 43.8573969935826,
       "stop_lon": -79.9922485935605,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02698",
       "stop_name": "Victoria St. E. @ S Blair St",
       "stop_lat": 43.8654558761237,
       "stop_lon": -78.9209973861173,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02697",
       "stop_name": "Victoria St E. @ S Blair St.",
       "stop_lat": 43.865347246294,
       "stop_lon": -78.9209650743573,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02696",
       "stop_name": "Guelph St. @ Hall Rd.",
       "stop_lat": 43.6486902942996,
       "stop_lon": -79.8765444720472,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02694",
       "stop_name": "Bayview Ave. @ St. John's Sideroad",
       "stop_lat": 44.023461599752,
       "stop_lon": -79.447692060068,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02693",
       "stop_name": "Bayview Ave. @ St. John's Sideroad",
       "stop_lat": 44.0237239494145,
       "stop_lon": -79.4481818236578,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02692",
       "stop_name": "Bayview Ave. @ Mulock Dr.",
       "stop_lat": 44.041044495598,
       "stop_lon": -79.4517586529434,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02691",
       "stop_name": "Bayview Ave. @ Mulock Dr.",
       "stop_lat": 44.0414415652058,
       "stop_lon": -79.4521589476021,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02690",
       "stop_name": "Prospect St. @ Pearson St.",
       "stop_lat": 44.0493428055642,
       "stop_lon": -79.4528843805226,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02689",
       "stop_name": "Prospect St. @ Pearson St.",
       "stop_lat": 44.0496186238697,
       "stop_lon": -79.453040727793,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02688",
       "stop_name": "Burton Ave. @ Granville St.",
       "stop_lat": 44.3716585556774,
       "stop_lon": -79.6905053283274,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02687",
       "stop_name": "Burton Ave. @ Granville St.",
       "stop_lat": 44.3716444485243,
       "stop_lon": -79.6911595701255,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02686",
       "stop_name": "York University",
       "stop_lat": 43.7742901633018,
       "stop_lon": -79.5003907735091,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02685",
       "stop_name": "Simcoe St. @ Britannia Ave.",
       "stop_lat": 43.9562798332303,
       "stop_lon": -78.8999931679409,
       "zone_id": 88,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02684",
       "stop_name": "Simcoe St. @ Britannia Ave.",
       "stop_lat": 43.9558385161942,
       "stop_lon": -78.8994952290358,
       "zone_id": 88,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02683",
       "stop_name": "Green Lane E. @ Yonge St.",
       "stop_lat": 44.073913,
       "stop_lon": -79.481138,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02682",
       "stop_name": "Queen St. @ Mill St.",
       "stop_lat": 43.8809995812407,
       "stop_lon": -79.7400896488493,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02681",
       "stop_name": "Queen St. @ Hickman St.",
       "stop_lat": 43.881289458911,
       "stop_lon": -79.7407395455473,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02680",
       "stop_name": "Bramalea Rd. @ Balmoral Dr.",
       "stop_lat": 43.7154679735916,
       "stop_lon": -79.7054676815027,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02679",
       "stop_name": "Wellington St. E. @ Hwy. 404 Park & Ride",
       "stop_lat": 44.0128734711053,
       "stop_lon": -79.4082292526746,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02678",
       "stop_name": "Gordon St. @ Clair Rd.",
       "stop_lat": 43.5003866753456,
       "stop_lon": -80.1893148019381,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02677",
       "stop_name": "Gordon St. @ Clair Rd.",
       "stop_lat": 43.5002316951943,
       "stop_lon": -80.1886650066085,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02676",
       "stop_name": "Dundas St. @ Halls Rd.",
       "stop_lat": 43.8710634547294,
       "stop_lon": -78.9813988024596,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02675",
       "stop_name": "Dundas St. @ Halls Rd.",
       "stop_lat": 43.8713052332062,
       "stop_lon": -78.981120567689,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02674",
       "stop_name": "Hwy 407 Bus Terminal",
       "stop_lat": 43.7830713234851,
       "stop_lon": -79.5244458372792,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=407T",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02673",
       "stop_name": "Hwy 407 Bus Terminal",
       "stop_lat": 43.7830465622674,
       "stop_lon": -79.5232260682288,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=407T",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02672",
       "stop_name": "Dundas St. @ Hwy. 412 Park & Ride",
       "stop_lat": 43.8769486590634,
       "stop_lon": -78.9812249498338,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DUNA",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02664",
       "stop_name": "City Centre Dr. @ Duke of York Blvd.",
       "stop_lat": 43.5892029044241,
       "stop_lon": -79.6427464480046,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02663",
       "stop_name": "City Centre Dr. @ Robert Speck Pkwy.",
       "stop_lat": 43.594225540709,
       "stop_lon": -79.6392787304937,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02662",
       "stop_name": "City Centre Dr. @ Robert Speck Pkwy.",
       "stop_lat": 43.5947480853453,
       "stop_lon": -79.6397587842478,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02661",
       "stop_name": "Renforth Transitway Station",
       "stop_lat": 43.662995090205,
       "stop_lon": -79.5911181123626,
       "zone_id": 25,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RENT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02660",
       "stop_name": "Renforth Transitway Station",
       "stop_lat": 43.6630754344014,
       "stop_lon": -79.591281189024,
       "zone_id": 25,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RENT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02659",
       "stop_name": "Dixie Transitway Station",
       "stop_lat": 43.6300128947218,
       "stop_lon": -79.6146254772841,
       "zone_id": 25,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DIXI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02658",
       "stop_name": "Dixie Transitway Station",
       "stop_lat": 43.6300478663032,
       "stop_lon": -79.6146878930147,
       "zone_id": 25,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DIXI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02655",
       "stop_name": "Hurontario St. @ Fairview Rd.",
       "stop_lat": 43.5875907610701,
       "stop_lon": -79.6265046670912,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02654",
       "stop_name": "Hurontario St. @ Elm Dr.",
       "stop_lat": 43.5908331882659,
       "stop_lon": -79.6310144279684,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02653",
       "stop_name": "Hwy. 10 @ Buena Vista Dr.",
       "stop_lat": 43.9218485290721,
       "stop_lon": -80.0830587693037,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02652",
       "stop_name": "West Harbour GO",
       "stop_lat": 43.2660685497468,
       "stop_lon": -79.8659978056508,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02651",
       "stop_name": "Military Trail. @ Pan Am Dr.",
       "stop_lat": 43.7877954094493,
       "stop_lon": -79.1904190458541,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02650",
       "stop_name": "Military Trail. @ Pan Am Dr.",
       "stop_lat": 43.7878560204119,
       "stop_lon": -79.1908919809448,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02649",
       "stop_name": "Victoria St. @ King St.",
       "stop_lat": 43.4536442075418,
       "stop_lon": -80.4975713205815,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02648",
       "stop_name": "Victoria St. @ King St.",
       "stop_lat": 43.452607682658,
       "stop_lon": -80.498158338438,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02647",
       "stop_name": "Trafalgar Rd. @ Dundas St. E.",
       "stop_lat": 43.4877993708847,
       "stop_lon": -79.7192931589981,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02646",
       "stop_name": "Niagara College",
       "stop_lat": 43.1524845920884,
       "stop_lon": -79.166533938966,
       "zone_id": 84,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NIAC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02645",
       "stop_name": "Main St. @ Baker Hill Blvd.",
       "stop_lat": 43.9653991754335,
       "stop_lon": -79.2742792341716,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02644",
       "stop_name": "Main St. @ Ringwood Dr.",
       "stop_lat": 43.9650310025184,
       "stop_lon": -79.2749393391483,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02643",
       "stop_name": "Cambridge Centre Terminal",
       "stop_lat": 43.3928337,
       "stop_lon": -80.3223343,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CAMC",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02642",
       "stop_name": "Cambridge Centre Terminal",
       "stop_lat": 43.3929367,
       "stop_lon": -80.3230209,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CAMC",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02641",
       "stop_name": "Regional Rd 25. @ Britannia Rd.",
       "stop_lat": 43.4867163829386,
       "stop_lon": -79.8344502041188,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02640",
       "stop_name": "Regional Rd 25. @ Britannia Rd.",
       "stop_lat": 43.4867945085456,
       "stop_lon": -79.8351362856758,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02639",
       "stop_name": "Green Ln. E. @ Yonge St.",
       "stop_lat": 44.07297,
       "stop_lon": -79.48391,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02637",
       "stop_name": "Davis Dr. @ Superior St. (Newmarket GO).",
       "stop_lat": 44.0594444,
       "stop_lon": -79.4590073,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02636",
       "stop_name": "Winston Churchill Transitway Station",
       "stop_lat": 43.5417557,
       "stop_lon": -79.7129898,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WICH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02635",
       "stop_name": "Winston Churchill Transitway Station",
       "stop_lat": 43.5419006,
       "stop_lon": -79.7131805,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WICH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02634",
       "stop_name": "Davis Dr. @ Superior St. (Newmarket GO).",
       "stop_lat": 44.0596123,
       "stop_lon": -79.4592438,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02633",
       "stop_name": "Mountainview Rd. N. @ Maple Ave.",
       "stop_lat": 43.6563339,
       "stop_lon": -79.9114151,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02632",
       "stop_name": "Yonge St. @ Weldrick Rd. E.",
       "stop_lat": 43.8606033,
       "stop_lon": -79.4346237,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02631",
       "stop_name": "Hwy. 7A @ 6th Line",
       "stop_lat": 44.0956688,
       "stop_lon": -78.9611511,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02629",
       "stop_name": "Gormley GO",
       "stop_lat": 43.9409103,
       "stop_lon": -79.3985214,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02628",
       "stop_name": "Kingston Rd. @ Brock Rd.",
       "stop_lat": 43.8478546,
       "stop_lon": -79.0743408,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02627",
       "stop_name": "Brock Rd. S. @ Gilmour Rd.",
       "stop_lat": 43.466629,
       "stop_lon": -80.1415634,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02626",
       "stop_name": "Brock Rd. S. @ Gilmour Rd.",
       "stop_lat": 43.4668732,
       "stop_lon": -80.1422806,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02625",
       "stop_name": "Kitchener Bus Terminal",
       "stop_lat": 43.4494133,
       "stop_lon": -80.4932022,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KITB",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02623",
       "stop_name": "Winchester Rd. W. @ Lake Ridge Rd.",
       "stop_lat": 43.9403648,
       "stop_lon": -79.0159454,
       "zone_id": 87,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02622",
       "stop_name": "Bond St.E. @ Claymore Cr.",
       "stop_lat": 43.9045258,
       "stop_lon": -78.8424835,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02621",
       "stop_name": "Ontario St. @ QEW (Beamsville) Park & Ride",
       "stop_lat": 43.1881676,
       "stop_lon": -79.4759598,
       "zone_id": 82,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OQPR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02620",
       "stop_name": "McMaster Innovation Park",
       "stop_lat": 43.2564278,
       "stop_lon": -79.9013138,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MMIP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02619",
       "stop_name": "McMaster Innovation Park",
       "stop_lat": 43.2570114,
       "stop_lon": -79.9015045,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MMIP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02617",
       "stop_name": "Brantford Bus Terminal",
       "stop_lat": 43.1403084,
       "stop_lon": -80.2649918,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRFT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02616",
       "stop_name": "Colborne St. E. @ Park Ave.",
       "stop_lat": 43.1390533,
       "stop_lon": -80.2543106,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02615",
       "stop_name": "Dalhousie St. @ Park Ave.",
       "stop_lat": 43.1400795,
       "stop_lon": -80.2549591,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02614",
       "stop_name": "Colborne St E. @ Kiwanis Way",
       "stop_lat": 43.1404762,
       "stop_lon": -80.2400513,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02613",
       "stop_name": "Colborne St. E. @ Puleston St.",
       "stop_lat": 43.1405792,
       "stop_lon": -80.2406311,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02612",
       "stop_name": "Wayne Gretzky Pkwy. @ Chatham St.",
       "stop_lat": 43.144886,
       "stop_lon": -80.2353592,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02611",
       "stop_name": "Wayne Gretzky Pkwy. @ Chatham St.",
       "stop_lat": 43.1449928,
       "stop_lon": -80.2356873,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02610",
       "stop_name": "Wayne Gretzky Pkwy. @ Elgin St.",
       "stop_lat": 43.1499977,
       "stop_lon": -80.2378159,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02609",
       "stop_name": "Wayne Gretzky Pkwy. @ Elgin St.",
       "stop_lat": 43.1501236,
       "stop_lon": -80.2375336,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02608",
       "stop_name": "Wayne Gretzky Pkwy. @ Henry St.",
       "stop_lat": 43.1544113,
       "stop_lon": -80.2391205,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WGHS",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02607",
       "stop_name": "Wayne Gretzky Pwky. @ Henry St.",
       "stop_lat": 43.1545525,
       "stop_lon": -80.2395554,
       "zone_id": 85,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WGHS",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02606",
       "stop_name": "Hespeler Rd. @ Eagle St. N.",
       "stop_lat": 43.4074974,
       "stop_lon": -80.328125,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02605",
       "stop_name": "Hespeler Rd. @ Pinebush Rd.",
       "stop_lat": 43.4089508,
       "stop_lon": -80.3281174,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HEPI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02604",
       "stop_name": "Hespeler Rd. @ Can-Amera Pkwy.",
       "stop_lat": 43.3853798,
       "stop_lon": -80.3209915,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02603",
       "stop_name": "Hespeler Rd. @ Can-Amera Pkwy.",
       "stop_lat": 43.3865395,
       "stop_lon": -80.3210831,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02602",
       "stop_name": "Hespeler Rd. @ Coronation Blvd.",
       "stop_lat": 43.3736229,
       "stop_lon": -80.3187637,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02601",
       "stop_name": "Water St. @ Dundas St.",
       "stop_lat": 43.3730087,
       "stop_lon": -80.3182831,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02600",
       "stop_name": "Cambridge Bus Terminal",
       "stop_lat": 43.3576508,
       "stop_lon": -80.3135376,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CBBT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02598",
       "stop_name": "6700 Millcreek Dr. @ Aquitaine Ave.",
       "stop_lat": 43.5951157,
       "stop_lon": -79.7525024,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02597",
       "stop_name": "6715 Millcreek Dr. @ Aquitaine Ave. (Millcreek Business Centre)",
       "stop_lat": 43.5951004,
       "stop_lon": -79.7512894,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02596",
       "stop_name": "Yonge St. @ Davis Dr. (Upper Canada Mall)",
       "stop_lat": 44.0550804,
       "stop_lon": -79.4807053,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02595",
       "stop_name": "Yonge St. @ Line 11",
       "stop_lat": 44.1623192,
       "stop_lon": -79.5767288,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02594",
       "stop_name": "Yonge St. @ Line 11",
       "stop_lat": 44.16325,
       "stop_lon": -79.5767746,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02593",
       "stop_name": "Yonge St. @ Line 13",
       "stop_lat": 44.1866646,
       "stop_lon": -79.5825729,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02592",
       "stop_name": "Yonge St. @ Line 13",
       "stop_lat": 44.1873474,
       "stop_lon": -79.5825195,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02589",
       "stop_name": "Yonge St. @ William Roe Blvd.",
       "stop_lat": 44.0404587,
       "stop_lon": -79.4767838,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02587",
       "stop_name": "Dupont Meadow Place @ Mississauga Rd.",
       "stop_lat": 43.6081848,
       "stop_lon": -79.7510834,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02586",
       "stop_name": "Financial Dr. @ Syntex Crt.",
       "stop_lat": 43.6110306,
       "stop_lon": -79.7488174,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SYFI",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02581",
       "stop_name": "Albert St. S. @ Jones St.",
       "stop_lat": 44.2612915,
       "stop_lon": -79.0663376,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SUND",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02580",
       "stop_name": "Major Mackenzie Dr. E. @ Cedar Ave.",
       "stop_lat": 43.8734169,
       "stop_lon": -79.4278793,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02579",
       "stop_name": "Major Mackenzie Dr. E. @ Cedar Ave.",
       "stop_lat": 43.8731232,
       "stop_lon": -79.4284439,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02577",
       "stop_name": "Yonge St. @ 4th Line (Churchill Community Centre)",
       "stop_lat": 44.2538338,
       "stop_lon": -79.6016998,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CHIL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02576",
       "stop_name": "Kingston Rd. @ Fairport Rd.",
       "stop_lat": 43.8238487,
       "stop_lon": -79.1063309,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=FAIR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02575",
       "stop_name": "Markham Rd. @ Castlemore Ave.",
       "stop_lat": 43.9040985,
       "stop_lon": -79.2667618,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02574",
       "stop_name": "Markham Rd. @ Castlemore Ave.",
       "stop_lat": 43.9044647,
       "stop_lon": -79.2672577,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02573",
       "stop_name": "Victoria St. @ Thickson Rd. (Thickson Ridge Power Centre)",
       "stop_lat": 43.8673973,
       "stop_lon": -78.8993225,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02572",
       "stop_name": "Victoria St. @ Thickson Rd. (Thickson Ridge Power Centre)",
       "stop_lat": 43.86726,
       "stop_lon": -78.9002914,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02571",
       "stop_name": "Kingston Rd. @ Glenanna Rd.",
       "stop_lat": 43.8386154,
       "stop_lon": -79.0863266,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GLEN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02570",
       "stop_name": "Yonge St. @ Greenfield Ave.",
       "stop_lat": 43.7635994,
       "stop_lon": -79.4113083,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02569",
       "stop_name": "Brock Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.912816,
       "stop_lon": -79.095858,
       "zone_id": 86,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BROU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02568",
       "stop_name": "Yonge St. @ Sheppard Ave.",
       "stop_lat": 43.7613983,
       "stop_lon": -79.4107361,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SHEP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02567",
       "stop_name": "Hurontario St. @ Old School Rd.",
       "stop_lat": 43.753563,
       "stop_lon": -79.851234,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02546",
       "stop_name": "Hurontario St. @ Old School Rd.",
       "stop_lat": 43.753716,
       "stop_lon": -79.851891,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02545",
       "stop_name": "Markham Rd. @ Edward Jeffreys Ave.",
       "stop_lat": 43.895947,
       "stop_lon": -79.264854,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02544",
       "stop_name": "Markham Rd. @ Edward Jeffreys Ave.",
       "stop_lat": 43.896362,
       "stop_lon": -79.265251,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02543",
       "stop_name": "Simcoe St. N. @ Parkwood Crt.",
       "stop_lat": 43.905807,
       "stop_lon": -78.867111,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02542",
       "stop_name": "Simcoe St. N. @ Parkwood Crt.",
       "stop_lat": 43.905533,
       "stop_lon": -78.867271,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02541",
       "stop_name": "Morningside Ave. @ Tams Rd.",
       "stop_lat": 43.791924,
       "stop_lon": -79.195305,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02540",
       "stop_name": "Morningside Ave. @ Tams Rd.",
       "stop_lat": 43.792179,
       "stop_lon": -79.19574,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02539",
       "stop_name": "Brock Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.912816,
       "stop_lon": -79.095858,
       "zone_id": 86,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BROU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02538",
       "stop_name": "Davis Dr. @ Hwy. 404 Park & Ride",
       "stop_lat": 44.0676956,
       "stop_lon": -79.4215164,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=N404",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02537",
       "stop_name": "Barrie St. @ Doctors Lane",
       "stop_lat": 44.115643,
       "stop_lon": -79.565002,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02535",
       "stop_name": "Hwy. 50 @ Ebenezer Rd.",
       "stop_lat": 43.777973,
       "stop_lon": -79.654884,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02534",
       "stop_name": "Hwy. 50 @ Ebenezer Rd.",
       "stop_lat": 43.779167,
       "stop_lon": -79.655106,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02533",
       "stop_name": "Hwy. 50 @ Queen St. E.",
       "stop_lat": 43.768192,
       "stop_lon": -79.648849,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02532",
       "stop_name": "King St. W. @ Scugog St.",
       "stop_lat": 43.9128571,
       "stop_lon": -78.6923294,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02529",
       "stop_name": "Square One",
       "stop_lat": 43.5951881,
       "stop_lon": -79.6492691,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=S1TM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02528",
       "stop_name": "Mountainview Rd. N. @ Maple Ave.",
       "stop_lat": 43.6555405,
       "stop_lon": -79.9107971,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02523",
       "stop_name": "Queensville Sdrd. @ Hwy. 404 Park & Ride",
       "stop_lat": 44.1420212,
       "stop_lon": -79.4405518,
       "zone_id": 45,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=Q404",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02522",
       "stop_name": "Woodbine Ave. @ Hwy. 404 Park & Ride",
       "stop_lat": 44.1918488,
       "stop_lon": -79.4372101,
       "zone_id": 46,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=W404",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02521",
       "stop_name": "Wellington St. E. @ Mary St.",
       "stop_lat": 44.0031967,
       "stop_lon": -79.451149,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02520",
       "stop_name": "Wellington St. E. @ John West Way",
       "stop_lat": 44.0035057,
       "stop_lon": -79.4506836,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02519",
       "stop_name": "Guelph Central GO Bus",
       "stop_lat": 43.544932,
       "stop_lon": -80.246388,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GUEP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02518",
       "stop_name": "MacDonell St. @ Carden St. (Guelph Central GO)",
       "stop_lat": 43.5463142,
       "stop_lon": -80.2452316,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02513",
       "stop_name": "Blind Line @ College Ave.",
       "stop_lat": 43.9221954,
       "stop_lon": -80.1162033,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02512",
       "stop_name": "Blind Line @ Hansen Blvd.",
       "stop_lat": 43.9247589,
       "stop_lon": -80.1168442,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02511",
       "stop_name": "Queen St. E. @ West Dr.",
       "stop_lat": 43.7095222,
       "stop_lon": -79.733696,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02508",
       "stop_name": "Derry Rd. W. @ Ninth Line",
       "stop_lat": 43.574543,
       "stop_lon": -79.78685,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DR9L",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02507",
       "stop_name": "Islington Ave. @ Turning Leaf Dr.",
       "stop_lat": 43.8186493,
       "stop_lon": -79.6024704,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02506",
       "stop_name": "Islington Ave. @ Turning Leaf Dr.",
       "stop_lat": 43.8187294,
       "stop_lon": -79.6032486,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02505",
       "stop_name": "Hwy. 35 @ Hwy. 115 Park & Ride",
       "stop_lat": 44.064003,
       "stop_lon": -78.6258087,
       "zone_id": 28,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=H35N",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02504",
       "stop_name": "Peterborough Rd. 10 @ Hwy. 115 Park & Ride",
       "stop_lat": 44.1872025,
       "stop_lon": -78.4643936,
       "zone_id": 29,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CAVC",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02503",
       "stop_name": "Crawford Dr. @ Harper Rd. Park & Ride",
       "stop_lat": 44.2678642,
       "stop_lon": -78.3492737,
       "zone_id": 30,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PTBS",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02502",
       "stop_name": "Peterborough Bus Terminal",
       "stop_lat": 44.3045998,
       "stop_lon": -78.3224182,
       "zone_id": 30,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PETB",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02501",
       "stop_name": "Trent University",
       "stop_lat": 44.3569412,
       "stop_lon": -78.2870331,
       "zone_id": 30,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=TRTU",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02414",
       "stop_name": "City Centre Dr. @ Mercer St.",
       "stop_lat": 43.5895958,
       "stop_lon": -79.6420135,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02413",
       "stop_name": "Georgetown GO Bus",
       "stop_lat": 43.6560287,
       "stop_lon": -79.9186783,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GEGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02412",
       "stop_name": "Main St. S. @ Ridge Rd.",
       "stop_lat": 43.61085,
       "stop_lon": -80.13266,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02408",
       "stop_name": "Niagara Falls Bus Terminal",
       "stop_lat": 43.1085358,
       "stop_lon": -79.0636063,
       "zone_id": 84,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NIFT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02407",
       "stop_name": "Scarborough Centre Bus Terminal",
       "stop_lat": 43.7746925,
       "stop_lon": -79.2563095,
       "zone_id": "07",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SCAR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02406",
       "stop_name": "Casablanca Blvd. @ QEW Park & Ride",
       "stop_lat": 43.2047997,
       "stop_lon": -79.5964279,
       "zone_id": 81,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GRBY",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02405",
       "stop_name": "Stanley Ave. @ Hwy. 420 Park & Ride",
       "stop_lat": 43.0964737,
       "stop_lon": -79.0854797,
       "zone_id": 84,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NFST",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02404",
       "stop_name": "Stanley Ave. @ Hwy. 420 Park & Ride",
       "stop_lat": 43.097271,
       "stop_lon": -79.0852356,
       "zone_id": 84,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NFST",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02402",
       "stop_name": "St. Catharines Fairview Mall",
       "stop_lat": 43.178627,
       "stop_lon": -79.2452545,
       "zone_id": 83,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STFM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02216",
       "stop_name": "Erin Mills Transitway",
       "stop_lat": 43.5522194,
       "stop_lon": -79.7003632,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EMTW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02215",
       "stop_name": "Erin Mills Transitway Station",
       "stop_lat": 43.552124,
       "stop_lon": -79.7004547,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EMTW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02214",
       "stop_name": "Erin Mills Transitway Station",
       "stop_lat": 43.5520363,
       "stop_lon": -79.7003021,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EMTW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02213",
       "stop_name": "Erin Mills Transitway Station",
       "stop_lat": 43.552124,
       "stop_lon": -79.7004547,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EMTW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02210",
       "stop_name": "Erin Mills Transitway Station",
       "stop_lat": 43.5520363,
       "stop_lon": -79.7003021,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=EMTW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02209",
       "stop_name": "Renforth Dr. @ Convair Dr.",
       "stop_lat": 43.6723671,
       "stop_lon": -79.5936432,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02208",
       "stop_name": "Renforth Dr. @ Convair Dr.",
       "stop_lat": 43.6720657,
       "stop_lon": -79.5930939,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02202",
       "stop_name": "Yonge St. @ Victoria St.",
       "stop_lat": 44.3249016,
       "stop_lon": -79.6195755,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STRD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02199",
       "stop_name": "Islington Ave. @ Kellam St.",
       "stop_lat": 43.8441849,
       "stop_lon": -79.6284332,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02198",
       "stop_name": "Yonge St. @ Wellington St. W.",
       "stop_lat": 44.0001755,
       "stop_lon": -79.4677811,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02194",
       "stop_name": "Main St. @ Westlawn Cres.",
       "stop_lat": 43.9685707,
       "stop_lon": -79.2601318,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02193",
       "stop_name": "Main St. @ Weldon Rd.",
       "stop_lat": 43.9682426,
       "stop_lon": -79.2604752,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02192",
       "stop_name": "Main St. @ Sandale Rd.",
       "stop_lat": 43.9662666,
       "stop_lon": -79.2703018,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02191",
       "stop_name": "Main St. @ Sandiford Dr.",
       "stop_lat": 43.9659386,
       "stop_lon": -79.2708511,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02190",
       "stop_name": "Hwy. 48 @ Hoover Park Dr.",
       "stop_lat": 43.9569321,
       "stop_lon": -79.2795105,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02189",
       "stop_name": "Hwy. 48 @ Hoover Park Dr.",
       "stop_lat": 43.9565964,
       "stop_lon": -79.2791214,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02186",
       "stop_name": "Kitchener GO Bus",
       "stop_lat": 43.455573,
       "stop_lon": -80.492543,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02185",
       "stop_name": "Main St. W. @ Haddon Ave. S.",
       "stop_lat": 43.258091,
       "stop_lon": -79.91185,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02184",
       "stop_name": "Sportsworld Dr. @ Hwy. 8 Park & Ride",
       "stop_lat": 43.4099274,
       "stop_lon": -80.3925095,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SPWD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02178",
       "stop_name": "Main St. @ Tenth Line",
       "stop_lat": 43.9750862,
       "stop_lon": -79.2313843,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02177",
       "stop_name": "Main St. @ Tenth Line",
       "stop_lat": 43.9745674,
       "stop_lon": -79.2321472,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02176",
       "stop_name": "Keele St. @ Peak Point Blvd.",
       "stop_lat": 43.8872604,
       "stop_lon": -79.5200119,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02175",
       "stop_name": "Keele St. @ Peak Point Blvd.",
       "stop_lat": 43.8868027,
       "stop_lon": -79.5196609,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02174",
       "stop_name": "Williams Pkwy. @ Hwy. 410 Park & Ride",
       "stop_lat": 43.716526,
       "stop_lon": -79.7513046,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WILL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02173",
       "stop_name": "Keele St. @ Kirby Rd.",
       "stop_lat": 43.8918114,
       "stop_lon": -79.5210342,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02172",
       "stop_name": "Keele St. @ Kirby Rd.",
       "stop_lat": 43.8916321,
       "stop_lon": -79.5207977,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02171",
       "stop_name": "Tenth Line @ Sleepy Hollow Ln.",
       "stop_lat": 44.0002556,
       "stop_lon": -79.2371979,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02170",
       "stop_name": "Tenth Line @ Sleepy Hollow Ln.",
       "stop_lat": 44.0000153,
       "stop_lon": -79.2369232,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02163",
       "stop_name": "Trafalgar Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.5061531,
       "stop_lon": -79.7453842,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OAKT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02162",
       "stop_name": "Hwy. 2 @ Hwy. 35/115 Park & Ride",
       "stop_lat": 43.9128494,
       "stop_lon": -78.6129303,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NCPR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02160",
       "stop_name": "Bradford GO Bus",
       "stop_lat": 44.116654,
       "stop_lon": -79.555752,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BDGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02159",
       "stop_name": "Keele St. @ Church St.",
       "stop_lat": 43.852829,
       "stop_lon": -79.5120239,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02158",
       "stop_name": "Major Mackenzie Dr. E. @ Keele St.",
       "stop_lat": 43.8550568,
       "stop_lon": -79.5116119,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02157",
       "stop_name": "Maple GO Bus",
       "stop_lat": 43.859853,
       "stop_lon": -79.505926,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MAGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02156",
       "stop_name": "King St. E. @ Charles St. E.",
       "stop_lat": 43.4378624,
       "stop_lon": -80.461853,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02155",
       "stop_name": "King St. E. @ Montgomery Rd.",
       "stop_lat": 43.4375038,
       "stop_lon": -80.4602432,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02153",
       "stop_name": "Wilfrid Laurier University",
       "stop_lat": 43.4752655,
       "stop_lon": -80.5272827,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WLLR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02151",
       "stop_name": "Regional Rd. 25 @ Hwy. 401 Park & Ride",
       "stop_lat": 43.5274849,
       "stop_lon": -79.9038162,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MLPR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02150",
       "stop_name": "Cambridge Smart Centre",
       "stop_lat": 43.4117165,
       "stop_lon": -80.3236008,
       "zone_id": 26,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CAMB",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02148",
       "stop_name": "Wilfrid Laurier University",
       "stop_lat": 43.4751816,
       "stop_lon": -80.5279999,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WLLR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02147",
       "stop_name": "University of Waterloo",
       "stop_lat": 43.4731293,
       "stop_lon": -80.541687,
       "zone_id": 27,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WUNI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02145",
       "stop_name": "Yonge St. @ London Rd.",
       "stop_lat": 44.0641289,
       "stop_lon": -79.4824982,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02144",
       "stop_name": "YMCA Blvd. @ Kennedy Rd.",
       "stop_lat": 43.8535728,
       "stop_lon": -79.3085709,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02141",
       "stop_name": "YMCA Blvd. @ Kennedy Rd.",
       "stop_lat": 43.8532639,
       "stop_lon": -79.3093185,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02140",
       "stop_name": "Rutherford Rd. @ Forest Fountain Dr.",
       "stop_lat": 43.8144073,
       "stop_lon": -79.6113205,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02139",
       "stop_name": "Keele St. @ Barrhill Rd.",
       "stop_lat": 43.8502159,
       "stop_lon": -79.5112076,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02138",
       "stop_name": "Hwy. 27 @ Milani Blvd.",
       "stop_lat": 43.7846947,
       "stop_lon": -79.6246338,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02135",
       "stop_name": "Yonge St. @ Eagle St. W.",
       "stop_lat": 44.0456009,
       "stop_lon": -79.4783859,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02134",
       "stop_name": "York Region Administrative Centre",
       "stop_lat": 44.0478592,
       "stop_lon": -79.4789276,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02133",
       "stop_name": "Eagle St. W. @ Yonge St.",
       "stop_lat": 44.0453224,
       "stop_lon": -79.4791794,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02132",
       "stop_name": "Eagle St. @ Peevers Cr.",
       "stop_lat": 44.0464249,
       "stop_lon": -79.4842606,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02131",
       "stop_name": "Eagle St. @ Millard Ave.",
       "stop_lat": 44.0499763,
       "stop_lon": -79.4844894,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02127",
       "stop_name": "Yonge St. @ Clark Ave. E.",
       "stop_lat": 43.8069839,
       "stop_lon": -79.4221497,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02126",
       "stop_name": "Main St. @ Stouffer St.",
       "stop_lat": 43.9733505,
       "stop_lon": -79.2380981,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02118",
       "stop_name": "Yonge St. @ Mortonvale Dr.",
       "stop_lat": 44.1003456,
       "stop_lon": -79.4911728,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02117",
       "stop_name": "Tenth Line @ Aintree Dr.",
       "stop_lat": 43.9778366,
       "stop_lon": -79.2319031,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02116",
       "stop_name": "Queen St. N. @ Columbia Way",
       "stop_lat": 43.8915863,
       "stop_lon": -79.754982,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOCL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02113",
       "stop_name": "Hwy. 48 @ 16th Ave.",
       "stop_lat": 43.8920631,
       "stop_lon": -79.2641983,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02112",
       "stop_name": "Main St. N. @ 16th Ave.",
       "stop_lat": 43.8919067,
       "stop_lon": -79.2639542,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02111",
       "stop_name": "Bullock Dr. @ Laidlaw Blvd.",
       "stop_lat": 43.8744316,
       "stop_lon": -79.2800446,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02110",
       "stop_name": "Bullock Dr. @ Laidlaw Blvd.",
       "stop_lat": 43.874855,
       "stop_lon": -79.2794647,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02109",
       "stop_name": "Bullock Dr. @ McCowan Rd.",
       "stop_lat": 43.8729172,
       "stop_lon": -79.2848587,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02108",
       "stop_name": "Bullock Dr. @ McCowan Rd.",
       "stop_lat": 43.8728409,
       "stop_lon": -79.2855911,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02107",
       "stop_name": "Upper Canada Mall",
       "stop_lat": 44.0579948,
       "stop_lon": -79.4808884,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02105",
       "stop_name": "Yonge St. @ Green Ln. W. (Green Lane Centre)",
       "stop_lat": 44.0712051,
       "stop_lon": -79.4845886,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02104",
       "stop_name": "Yonge St. @ Green Ln. E. (Silver City)",
       "stop_lat": 44.0705605,
       "stop_lon": -79.4841385,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02103",
       "stop_name": "15800 Yonge St. @ Saint John's Sideroad",
       "stop_lat": 44.0137749,
       "stop_lon": -79.4710922,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02102",
       "stop_name": "15800 Yonge St. @ Saint John's Sideroad",
       "stop_lat": 44.0138626,
       "stop_lon": -79.4708405,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02101",
       "stop_name": "Yonge St. @ Spruce Ave.",
       "stop_lat": 43.8511429,
       "stop_lon": -79.4323959,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02100",
       "stop_name": "Yonge St. @ Yongehurst Dr.",
       "stop_lat": 43.8627815,
       "stop_lon": -79.4354706,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02094",
       "stop_name": "Yonge St. @ Valhalla Crt.",
       "stop_lat": 44.0064583,
       "stop_lon": -79.4693451,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02093",
       "stop_name": "Yonge St. @ Valhalla Crt.",
       "stop_lat": 44.0061722,
       "stop_lon": -79.468895,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02092",
       "stop_name": "Yonge St. @ Uplands Ave.",
       "stop_lat": 43.8269348,
       "stop_lon": -79.4267807,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02088",
       "stop_name": "Yonge St. @ Thornhill Ave.",
       "stop_lat": 43.8253212,
       "stop_lon": -79.4267273,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02084",
       "stop_name": "Yonge St. @ St. John's Sideroad",
       "stop_lat": 44.019352,
       "stop_lon": -79.472023,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02083",
       "stop_name": "Yonge St. @ St. John's Sideroad",
       "stop_lat": 44.0184898,
       "stop_lon": -79.4722061,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02081",
       "stop_name": "Yonge St. @ Scott Dr.",
       "stop_lat": 43.8467216,
       "stop_lon": -79.4316711,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02080",
       "stop_name": "Yonge St. @ Sawmill Valley Dr.",
       "stop_lat": 44.0332527,
       "stop_lon": -79.4755478,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02079",
       "stop_name": "Yonge St. @ Royal Orchard Blvd.",
       "stop_lat": 43.8227158,
       "stop_lon": -79.4257965,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02078",
       "stop_name": "Yonge St. @ Royal Orchard Blvd.",
       "stop_lat": 43.8223343,
       "stop_lon": -79.426033,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02072",
       "stop_name": "Yonge St. @ Observatory Ln.",
       "stop_lat": 43.8581696,
       "stop_lon": -79.4340744,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02071",
       "stop_name": "Yonge St. @ Oak Ave.",
       "stop_lat": 43.8500443,
       "stop_lon": -79.4324112,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02069",
       "stop_name": "Yonge St. @ Northern Heights Dr.",
       "stop_lat": 43.849144,
       "stop_lon": -79.4318695,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02068",
       "stop_name": "Yonge St. @ North St.",
       "stop_lat": 44.0976105,
       "stop_lon": -79.4905701,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02067",
       "stop_name": "Yonge St. @ North St.",
       "stop_lat": 44.0978394,
       "stop_lon": -79.4906998,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02061",
       "stop_name": "Yonge St. @ Mulock Dr.",
       "stop_lat": 44.0358086,
       "stop_lon": -79.4761047,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02060",
       "stop_name": "Yonge St. @ Mulock Dr.",
       "stop_lat": 44.0367699,
       "stop_lon": -79.4759674,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02059",
       "stop_name": "Yonge St. @ Millard Ave. W.",
       "stop_lat": 44.0513725,
       "stop_lon": -79.4797592,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02058",
       "stop_name": "Yonge St. @ Meadowview Ave.",
       "stop_lat": 43.8020096,
       "stop_lon": -79.4213104,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02057",
       "stop_name": "Yonge St. @ May Ave.",
       "stop_lat": 43.8640823,
       "stop_lon": -79.4357605,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02056",
       "stop_name": "Yonge St. @ May Ave.",
       "stop_lat": 43.8639069,
       "stop_lon": -79.435379,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02055",
       "stop_name": "Yonge St. @ Mark St.",
       "stop_lat": 44.0040436,
       "stop_lon": -79.4685364,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02052",
       "stop_name": "Yonge St. @ Major Mackenzie Dr. E.",
       "stop_lat": 43.8708229,
       "stop_lon": -79.4369049,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02046",
       "stop_name": "Yonge St. @ Kingston Rd.",
       "stop_lat": 44.0609932,
       "stop_lon": -79.4816971,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02043",
       "stop_name": "Yonge St. @ John St.",
       "stop_lat": 43.8139114,
       "stop_lon": -79.4238434,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02042",
       "stop_name": "Yonge St. @ Thornridge Dr.",
       "stop_lat": 43.8135796,
       "stop_lon": -79.4240112,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02041",
       "stop_name": "Yonge St. @ Joe Persechini Dr.",
       "stop_lat": 44.0269051,
       "stop_lon": -79.4741211,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02036",
       "stop_name": "Yonge St. @ Hwy. 407",
       "stop_lat": 43.8365974,
       "stop_lon": -79.4293518,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02035",
       "stop_name": "Yonge St. @ Hopkins St.",
       "stop_lat": 43.8696709,
       "stop_lon": -79.4370117,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02034",
       "stop_name": "Yonge St. @ Hwy. 407",
       "stop_lat": 43.8368607,
       "stop_lon": -79.4290314,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02033",
       "stop_name": "Yonge St. @ High Tech Rd.",
       "stop_lat": 43.8415108,
       "stop_lon": -79.4304962,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02032",
       "stop_name": "Yonge St. @ High Tech Rd.",
       "stop_lat": 43.8413315,
       "stop_lon": -79.4300156,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02029",
       "stop_name": "Yonge St. @ Harding Blvd. W.",
       "stop_lat": 43.8667831,
       "stop_lon": -79.4363785,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02028",
       "stop_name": "Yonge St. @ Harding Blvd.",
       "stop_lat": 43.8663788,
       "stop_lon": -79.4359741,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02027",
       "stop_name": "Yonge St. @ Green Ln. E.",
       "stop_lat": 44.0726738,
       "stop_lon": -79.4845963,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02024",
       "stop_name": "Yonge St. @ Glen Cameron Rd.",
       "stop_lat": 43.8051033,
       "stop_lon": -79.4217148,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02023",
       "stop_name": "Yonge St. @ Glen Cameron Rd.",
       "stop_lat": 43.8057404,
       "stop_lon": -79.4222031,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02021",
       "stop_name": "Yonge St. @ Garden Ave.",
       "stop_lat": 43.8384552,
       "stop_lon": -79.4297791,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02019",
       "stop_name": "Yonge St. @ Elmwood Ave.",
       "stop_lat": 43.8692818,
       "stop_lon": -79.4366684,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02018",
       "stop_name": "Yonge St. @ Elgin St.",
       "stop_lat": 43.810688,
       "stop_lon": -79.4231033,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02015",
       "stop_name": "Yonge St. @ Edgar Ave.",
       "stop_lat": 43.8484573,
       "stop_lon": -79.4321365,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02012",
       "stop_name": "Yonge St. @ Doncaster Ave.",
       "stop_lat": 43.8016968,
       "stop_lon": -79.4208908,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02010",
       "stop_name": "Yonge St. @ Dawson Manor Blvd.",
       "stop_lat": 44.0614586,
       "stop_lon": -79.4821243,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02005",
       "stop_name": "Yonge St. @ Clearmeadow Blvd.",
       "stop_lat": 44.0404968,
       "stop_lon": -79.4771194,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "02004",
       "stop_name": "Yonge St. @ Clark Ave. W.",
       "stop_lat": 43.807312,
       "stop_lon": -79.4226227,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "02003",
       "stop_name": "Yonge St. @ Clarissa Dr.",
       "stop_lat": 43.8620453,
       "stop_lon": -79.4350204,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01998",
       "stop_name": "Yonge St. @ Centre St.",
       "stop_lat": 43.8164711,
       "stop_lon": -79.4247208,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01997",
       "stop_name": "Yonge St. @ Bunker Rd.",
       "stop_lat": 43.8288956,
       "stop_lon": -79.4272919,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01996",
       "stop_name": "Yonge St. @ Bunker Rd.",
       "stop_lat": 43.8289528,
       "stop_lon": -79.4275894,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01994",
       "stop_name": "Yonge St. @ Bristol Rd.",
       "stop_lat": 44.0678329,
       "stop_lon": -79.4833374,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01993",
       "stop_name": "Yonge St. @ Bonshaw Ave.",
       "stop_lat": 44.0646324,
       "stop_lon": -79.4830322,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01988",
       "stop_name": "Yonge St. @ Beresford Dr.",
       "stop_lat": 43.8440056,
       "stop_lon": -79.430687,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01987",
       "stop_name": "Yonge St. @ Bay Thorn Dr.",
       "stop_lat": 43.8248672,
       "stop_lon": -79.4262924,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01986",
       "stop_name": "Yonge St. @ Bantry Ave.",
       "stop_lat": 43.846859,
       "stop_lon": -79.4313583,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01984",
       "stop_name": "Yonge St. @ Maple St.",
       "stop_lat": 44.0034065,
       "stop_lon": -79.4686279,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01982",
       "stop_name": "Yonge St. @ Aspenwood Dr.",
       "stop_lat": 44.0681725,
       "stop_lon": -79.4838028,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01979",
       "stop_name": "Yonge St. @ Carrville Rd.",
       "stop_lat": 43.8532715,
       "stop_lon": -79.4332428,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01974",
       "stop_name": "Toll Rd. @ Oriole Dr.",
       "stop_lat": 44.1052742,
       "stop_lon": -79.5132294,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01973",
       "stop_name": "Toll Rd. @ Oriole Dr.",
       "stop_lat": 44.1051941,
       "stop_lon": -79.5132675,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01972",
       "stop_name": "Toll Rd. @ Centennial Ave.",
       "stop_lat": 44.103157,
       "stop_lon": -79.5050201,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01971",
       "stop_name": "Toll Rd. @ Centennial Ave.",
       "stop_lat": 44.1031227,
       "stop_lon": -79.505188,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01970",
       "stop_name": "Toll Rd. @ Bradford St.",
       "stop_lat": 44.1004219,
       "stop_lon": -79.4975357,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01969",
       "stop_name": "Toll Rd. @ Bradford St.",
       "stop_lat": 44.1004066,
       "stop_lon": -79.4977875,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01939",
       "stop_name": "Rutherford Rd. @ Forest Fountain Dr.",
       "stop_lat": 43.8147736,
       "stop_lon": -79.6108627,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01938",
       "stop_name": "Rutherford Rd. @ Clarence St.",
       "stop_lat": 43.8155441,
       "stop_lon": -79.606163,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01937",
       "stop_name": "Rutherford Rd. @ Clarence St.",
       "stop_lat": 43.8159866,
       "stop_lon": -79.6056671,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01926",
       "stop_name": "Main St. @ Stouffer St.",
       "stop_lat": 43.9731178,
       "stop_lon": -79.2386246,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01925",
       "stop_name": "Main St. @ Market St.",
       "stop_lat": 43.9712067,
       "stop_lon": -79.2472229,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01924",
       "stop_name": "Main St. @ Church St. N.",
       "stop_lat": 43.9717598,
       "stop_lon": -79.2452011,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01905",
       "stop_name": "Langstaff Rd. E. @ Bayview Ave.",
       "stop_lat": 43.8346367,
       "stop_lon": -79.4062042,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01904",
       "stop_name": "King St. W. @ Nobleview Dr.",
       "stop_lat": 43.8985062,
       "stop_lon": -79.6691742,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01903",
       "stop_name": "King Rd. W. @ Chinook Dr.",
       "stop_lat": 43.9010963,
       "stop_lon": -79.6572723,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01902",
       "stop_name": "King Rd. W. @ Henry Gate",
       "stop_lat": 43.9003258,
       "stop_lon": -79.6608887,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01896",
       "stop_name": "King Rd. W. @ Nobleview Dr.",
       "stop_lat": 43.8985329,
       "stop_lon": -79.6698685,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01894",
       "stop_name": "King Rd. W. @ Henry Gate",
       "stop_lat": 43.9005394,
       "stop_lon": -79.6607132,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01891",
       "stop_name": "King Rd. W. @ Chinook Dr.",
       "stop_lat": 43.9012756,
       "stop_lon": -79.6573181,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01888",
       "stop_name": "Keele St. @ Teston Rd.",
       "stop_lat": 43.8732071,
       "stop_lon": -79.5163879,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01887",
       "stop_name": "Keele St. @ Teston Rd.",
       "stop_lat": 43.8736916,
       "stop_lon": -79.5169067,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01886",
       "stop_name": "Keele St. @ Snidercroft Rd.",
       "stop_lat": 43.7891464,
       "stop_lon": -79.4969025,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=VASN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01882",
       "stop_name": "Keele St. @ Great Gulf Dr.",
       "stop_lat": 43.7887955,
       "stop_lon": -79.4963379,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=VASN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01878",
       "stop_name": "Keele St. @ Drummond Dr.",
       "stop_lat": 43.8680077,
       "stop_lon": -79.5155106,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01877",
       "stop_name": "Keele St. @ Drummond Dr.",
       "stop_lat": 43.8673172,
       "stop_lon": -79.5149994,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01876",
       "stop_name": "Islington Ave. @ Tuscan Woods Trail",
       "stop_lat": 43.8290787,
       "stop_lon": -79.6116409,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01875",
       "stop_name": "Islington Ave. @ Tuscan Woods Trail",
       "stop_lat": 43.8291779,
       "stop_lon": -79.6123199,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01874",
       "stop_name": "Islington Ave. @ Sunset Ridge",
       "stop_lat": 43.8303375,
       "stop_lon": -79.6145554,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01873",
       "stop_name": "Islington Ave. @ Spring Berry Gate",
       "stop_lat": 43.8301239,
       "stop_lon": -79.6133041,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01872",
       "stop_name": "Islington Ave. @ Sonoma Blvd.",
       "stop_lat": 43.8216629,
       "stop_lon": -79.6066055,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01871",
       "stop_name": "Islington Ave. @ Sonoma Blvd.",
       "stop_lat": 43.8219757,
       "stop_lon": -79.6071548,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01870",
       "stop_name": "Islington Ave. @ Sevilla Blvd.",
       "stop_lat": 43.8360825,
       "stop_lon": -79.6212387,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01869",
       "stop_name": "Islington Ave. @ Rushworth Cr.",
       "stop_lat": 43.8390388,
       "stop_lon": -79.6236649,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01868",
       "stop_name": "Islington Ave. @ Pennon Rd.",
       "stop_lat": 43.8393974,
       "stop_lon": -79.6242371,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01867",
       "stop_name": "Islington Ave. @ Napa Valley Ave.",
       "stop_lat": 43.8259888,
       "stop_lon": -79.6091156,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01866",
       "stop_name": "Islington Ave. @ Napa Valley Ave.",
       "stop_lat": 43.82628,
       "stop_lon": -79.60961,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01865",
       "stop_name": "Islington Ave. @ Major Mackenzie Dr. W.",
       "stop_lat": 43.8319588,
       "stop_lon": -79.6166992,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01864",
       "stop_name": "Islington Ave. @ Major Mackenzie Dr. W.",
       "stop_lat": 43.8320732,
       "stop_lon": -79.6173172,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01863",
       "stop_name": "Islington Ave. @ Sevilla Blvd.",
       "stop_lat": 43.8362427,
       "stop_lon": -79.6218262,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01862",
       "stop_name": "Davis Dr. W. @ Yonge St.",
       "stop_lat": 44.0546494,
       "stop_lon": -79.4805374,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01861",
       "stop_name": "Hwy. 7 @ Swansea Rd.",
       "stop_lat": 43.8641014,
       "stop_lon": -79.2980042,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01860",
       "stop_name": "Hwy. 7 @ Swansea Rd.",
       "stop_lat": 43.8637314,
       "stop_lon": -79.2985458,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01849",
       "stop_name": "Hwy. 27 @ Zenway Blvd.",
       "stop_lat": 43.7775612,
       "stop_lon": -79.6227722,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01848",
       "stop_name": "Hwy. 27 @ West Royal Gate Blvd.",
       "stop_lat": 43.7696152,
       "stop_lon": -79.6209183,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01847",
       "stop_name": "Hwy. 27 @ Steeles Ave. W.",
       "stop_lat": 43.7557335,
       "stop_lon": -79.6145325,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01844",
       "stop_name": "Hwy. 27 @ Rutherford Rd.",
       "stop_lat": 43.8108902,
       "stop_lon": -79.6288223,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01843",
       "stop_name": "Hwy. 27 @ Rutherford Rd.",
       "stop_lat": 43.8102303,
       "stop_lon": -79.6291199,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01842",
       "stop_name": "Hwy. 27 @ Royalpark Way",
       "stop_lat": 43.8062439,
       "stop_lon": -79.6287918,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01841",
       "stop_name": "Hwy. 27 @ Royalpark Way",
       "stop_lat": 43.806591,
       "stop_lon": -79.6290436,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01840",
       "stop_name": "Hwy. 27 @ Royal Gate Blvd.",
       "stop_lat": 43.7693748,
       "stop_lon": -79.6203918,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01839",
       "stop_name": "Regional Rd. 27 @ Parkview Ave.",
       "stop_lat": 43.8999825,
       "stop_lon": -79.6521072,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01838",
       "stop_name": "Hwy. 27 @ Nickel Gate",
       "stop_lat": 43.7880249,
       "stop_lon": -79.625145,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01836",
       "stop_name": "Hwy. 27 @ Medallion Blvd.",
       "stop_lat": 43.7838211,
       "stop_lon": -79.6240082,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01835",
       "stop_name": "Hwy. 27 @ Martin Grove Rd.",
       "stop_lat": 43.7998466,
       "stop_lon": -79.6281586,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01834",
       "stop_name": "Hwy. 27 @ Martin Grove Rd.",
       "stop_lat": 43.8002815,
       "stop_lon": -79.6286316,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01833",
       "stop_name": "Hwy. 27 @ Langstaff Rd.",
       "stop_lat": 43.7925262,
       "stop_lon": -79.6262512,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01832",
       "stop_name": "Hwy. 27 @ Langstaff Rd.",
       "stop_lat": 43.791729,
       "stop_lon": -79.6263275,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01831",
       "stop_name": "Hwy. 27 @ Hwy. 7",
       "stop_lat": 43.7729149,
       "stop_lon": -79.6213531,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01830",
       "stop_name": "Hwy. 27 @ Hwy. 7",
       "stop_lat": 43.77357,
       "stop_lon": -79.62184,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01829",
       "stop_name": "Hwy. 27 @ Forest Heights Blvd.",
       "stop_lat": 43.8513947,
       "stop_lon": -79.6389084,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01828",
       "stop_name": "Hwy. 27 @ Forest Heights Blvd.",
       "stop_lat": 43.8513451,
       "stop_lon": -79.6385956,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01827",
       "stop_name": "Regional Rd. 27 @ Parkview Ave.",
       "stop_lat": 43.8999748,
       "stop_lon": -79.6522675,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01826",
       "stop_name": "Hwy. 27 @ Ashbridge Circle",
       "stop_lat": 43.7770576,
       "stop_lon": -79.6222916,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01825",
       "stop_name": "Yonge St. @ Old Yonge St.",
       "stop_lat": 44.082943,
       "stop_lon": -79.4870758,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01822",
       "stop_name": "Davis Dr. @ Patterson St.",
       "stop_lat": 44.0620232,
       "stop_lon": -79.4491348,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01819",
       "stop_name": "Davis Dr. @ Lundy's Ln.",
       "stop_lat": 44.0608406,
       "stop_lon": -79.4540863,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01816",
       "stop_name": "Davis Dr. @ Huron Heights Dr.",
       "stop_lat": 44.0628891,
       "stop_lon": -79.4451447,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01812",
       "stop_name": "Davis Dr. @ Ashton Rd.",
       "stop_lat": 44.0642853,
       "stop_lon": -79.4387512,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01807",
       "stop_name": "Bullock Dr. @ Hwy. 7",
       "stop_lat": 43.8656082,
       "stop_lon": -79.2921219,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01806",
       "stop_name": "Bullock Dr. @ Hwy. 7",
       "stop_lat": 43.8661575,
       "stop_lon": -79.2920685,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01805",
       "stop_name": "Bradford St. @ Yonge St.",
       "stop_lat": 44.101223,
       "stop_lon": -79.4919434,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01804",
       "stop_name": "Bradford St. @ Olive St.",
       "stop_lat": 44.1012955,
       "stop_lon": -79.49263,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01803",
       "stop_name": "Bayview Ave. @ Langstaff Rd. E.",
       "stop_lat": 43.8349037,
       "stop_lon": -79.4053802,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01802",
       "stop_name": "Tenth Line @ Aintree Dr.",
       "stop_lat": 43.978157,
       "stop_lon": -79.2320175,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01801",
       "stop_name": "Wellington St. E. @ Stronach Blvd.",
       "stop_lat": 44.0072441,
       "stop_lon": -79.4335251,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01800",
       "stop_name": "Wellington St. E. @ Mavrinac Blvd.",
       "stop_lat": 44.0076904,
       "stop_lon": -79.4332504,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01731",
       "stop_name": "Toronto St. S. @ Mill St.",
       "stop_lat": 44.1039429,
       "stop_lon": -79.1250305,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01730",
       "stop_name": "Toronto St. @ Elgin Park Dr.",
       "stop_lat": 44.0970039,
       "stop_lon": -79.1285248,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01729",
       "stop_name": "Trafalgar Rd. @ Leighland Ave.",
       "stop_lat": 43.4647789,
       "stop_lon": -79.6880264,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01728",
       "stop_name": "Trafalgar Rd. @ Rosegate Way",
       "stop_lat": 43.4822998,
       "stop_lon": -79.7117538,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01727",
       "stop_name": "Trafalgar Rd. @ White Oaks Blvd.",
       "stop_lat": 43.4666862,
       "stop_lon": -79.6899948,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01726",
       "stop_name": "Yonge St. @ Weldrick Rd. W.",
       "stop_lat": 43.8596649,
       "stop_lon": -79.4347382,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01725",
       "stop_name": "Main St. S. @ George St.",
       "stop_lat": 43.6511803,
       "stop_lon": -79.9285126,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01724",
       "stop_name": "Kipling Ave @ Belfield Rd",
       "stop_lat": 43.7050209,
       "stop_lon": -79.5638123,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01721",
       "stop_name": "Etobicoke North GO Bus",
       "stop_lat": 43.7066917,
       "stop_lon": -79.565712,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01720",
       "stop_name": "800 York St. @ Cityview Dr.",
       "stop_lat": 43.5589638,
       "stop_lon": -80.2147369,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01719",
       "stop_name": "Brock Rd. S. @ Old Brock Rd.",
       "stop_lat": 43.4719391,
       "stop_lon": -80.1498718,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01718",
       "stop_name": "Brock Rd. S. @ Maple Leaf Ln.",
       "stop_lat": 43.4715347,
       "stop_lon": -80.1500168,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01717",
       "stop_name": "Gordon St. @ Clairfields Dr. E.",
       "stop_lat": 43.504303,
       "stop_lon": -80.1934967,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01716",
       "stop_name": "Gordon St. @ Clairfields Dr. W.",
       "stop_lat": 43.5049019,
       "stop_lon": -80.1943359,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01715",
       "stop_name": "Gordon St. @ Arkell Rd.",
       "stop_lat": 43.5140228,
       "stop_lon": -80.199501,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01714",
       "stop_name": "Gordon St. @ Arkell Rd.",
       "stop_lat": 43.5137901,
       "stop_lon": -80.1998749,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01713",
       "stop_name": "Gordon St. @ Edinburgh Rd. S.",
       "stop_lat": 43.5166702,
       "stop_lon": -80.2031174,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01712",
       "stop_name": "Gordon St. @ Edinburgh Rd. S.",
       "stop_lat": 43.5163383,
       "stop_lon": -80.2033386,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01711",
       "stop_name": "Gordon St. @ Kortright Rd. E.",
       "stop_lat": 43.5224457,
       "stop_lon": -80.2131119,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01710",
       "stop_name": "Gordon St. @ Kortright Rd. W.",
       "stop_lat": 43.5221138,
       "stop_lon": -80.21315,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01709",
       "stop_name": "Gordon St. @ Stone Rd.",
       "stop_lat": 43.5270767,
       "stop_lon": -80.2252502,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01708",
       "stop_name": "Gordon St. @ Stone Rd.",
       "stop_lat": 43.5271797,
       "stop_lon": -80.2259216,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01707",
       "stop_name": "785 York Rd. @ Cityview Dr.",
       "stop_lat": 43.5588226,
       "stop_lon": -80.2142868,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01706",
       "stop_name": "Elizabeth St. @ Victoria Rd. S.",
       "stop_lat": 43.5553131,
       "stop_lon": -80.2293396,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01705",
       "stop_name": "Elizabeth St. @ Victoria Rd. S.",
       "stop_lat": 43.5554352,
       "stop_lon": -80.22966,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01704",
       "stop_name": "Elizabeth St. @ Stevenson St. S.",
       "stop_lat": 43.5527267,
       "stop_lon": -80.23526,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01703",
       "stop_name": "Elizabeth St. @ Stevenson St. S.",
       "stop_lat": 43.5534325,
       "stop_lon": -80.2346191,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01702",
       "stop_name": "Elizabeth St. @ Beaumont Cr.",
       "stop_lat": 43.5560417,
       "stop_lon": -80.2197418,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01701",
       "stop_name": "Elizabeth St. @ Beaumont Cr.",
       "stop_lat": 43.5557289,
       "stop_lon": -80.2199249,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01661",
       "stop_name": "Yonge St. @ Finch Ave.",
       "stop_lat": 43.7804375,
       "stop_lon": -79.4156036,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01660",
       "stop_name": "Yonge St. @ Empress Ave.",
       "stop_lat": 43.7691803,
       "stop_lon": -79.4126587,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01659",
       "stop_name": "Toronto St. S. @ Banff Rd.",
       "stop_lat": 44.0937347,
       "stop_lon": -79.1310883,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01658",
       "stop_name": "Toronto St. S. @ Banff Rd.",
       "stop_lat": 44.0940247,
       "stop_lon": -79.1305542,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01657",
       "stop_name": "Yonge St. @ William Carson Cr.",
       "stop_lat": 43.7471085,
       "stop_lon": -79.4072647,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01655",
       "stop_name": "Yonge St. @ Norton Ave.",
       "stop_lat": 43.7721901,
       "stop_lon": -79.4134216,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01654",
       "stop_name": "Yonge St. @ Ellerslie Ave.",
       "stop_lat": 43.7724152,
       "stop_lon": -79.4139328,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01653",
       "stop_name": "Yonge St. @ Elmwood Ave.",
       "stop_lat": 43.7664719,
       "stop_lon": -79.4120407,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01652",
       "stop_name": "Yonge St. @ Madawaska Ave.",
       "stop_lat": 43.7941246,
       "stop_lon": -79.4189682,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01651",
       "stop_name": "Yonge St. @ Kempford Blvd.",
       "stop_lat": 43.777153,
       "stop_lon": -79.4150925,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01650",
       "stop_name": "Yonge St. @ Northtown Way",
       "stop_lat": 43.7753067,
       "stop_lon": -79.4142609,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01648",
       "stop_name": "Yonge St. @ Glendora Ave.",
       "stop_lat": 43.7586899,
       "stop_lon": -79.4100418,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01647",
       "stop_name": "Yonge St. @ Florence Ave.",
       "stop_lat": 43.7582703,
       "stop_lon": -79.4102325,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01646",
       "stop_name": "Yonge St. @ Drewry Ave.",
       "stop_lat": 43.7871094,
       "stop_lon": -79.4175034,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01645",
       "stop_name": "Yonge St. @ Cummer Ave.",
       "stop_lat": 43.7875671,
       "stop_lon": -79.4172745,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01644",
       "stop_name": "Yonge St. @ Churchill Ave.",
       "stop_lat": 43.7741737,
       "stop_lon": -79.4143219,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01642",
       "stop_name": "Keele St. @ Steeles Ave. W.",
       "stop_lat": 43.7808113,
       "stop_lon": -79.4944382,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01641",
       "stop_name": "Keele St. @ Steeles Ave. W.",
       "stop_lat": 43.7810974,
       "stop_lon": -79.4941254,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01640",
       "stop_name": "Hwy. 27 @ Steeles Ave. W.",
       "stop_lat": 43.7550926,
       "stop_lon": -79.6137772,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01639",
       "stop_name": "Hwy. 27 @ Royal Crest Rd.",
       "stop_lat": 43.7498093,
       "stop_lon": -79.610733,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01638",
       "stop_name": "Hwy. 27 @ Royal Crest Rd.",
       "stop_lat": 43.7495422,
       "stop_lon": -79.610199,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01637",
       "stop_name": "Hwy. 27 @ Albion Rd.",
       "stop_lat": 43.7449951,
       "stop_lon": -79.6081314,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01636",
       "stop_name": "Hwy. 27 @ Albion Rd.",
       "stop_lat": 43.7432632,
       "stop_lon": -79.6070175,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01635",
       "stop_name": "Hwy. 27 @ Queens Plate Dr.",
       "stop_lat": 43.7225304,
       "stop_lon": -79.5978394,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01634",
       "stop_name": "Hwy. 27 @ Queens Plate Dr. (Woodbine Centre)",
       "stop_lat": 43.7222099,
       "stop_lon": -79.5981598,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01633",
       "stop_name": "Hwy. 27 @ Finch Ave. W.",
       "stop_lat": 43.7340088,
       "stop_lon": -79.6029129,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01632",
       "stop_name": "Hwy. 27 @ Finch Ave. W.",
       "stop_lat": 43.7344933,
       "stop_lon": -79.6034851,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01631",
       "stop_name": "Hwy. 27 @ Carrier Dr.",
       "stop_lat": 43.7390442,
       "stop_lon": -79.6051331,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01630",
       "stop_name": "Hwy. 27 @ Carrier Dr.",
       "stop_lat": 43.7392311,
       "stop_lon": -79.6056442,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01614",
       "stop_name": "Belfield Rd. @ Shaft Rd.",
       "stop_lat": 43.7040443,
       "stop_lon": -79.5665588,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01613",
       "stop_name": "Belfield Rd. @ Shaft Rd.",
       "stop_lat": 43.703907,
       "stop_lon": -79.5662384,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01612",
       "stop_name": "62 Belfield Rd. @ Shaft Rd.",
       "stop_lat": 43.7034035,
       "stop_lon": -79.5691986,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01611",
       "stop_name": "63 Belfield Rd. @ Shaft Rd.",
       "stop_lat": 43.703495,
       "stop_lon": -79.5693665,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01610",
       "stop_name": "Belfield Rd. @ Mcculloch Ave.",
       "stop_lat": 43.7026405,
       "stop_lon": -79.5729828,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01609",
       "stop_name": "Belfield Rd. @ Mcculloch Ave.",
       "stop_lat": 43.7024269,
       "stop_lon": -79.573288,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01608",
       "stop_name": "Belfield Rd. @ Martin Grove Rd.",
       "stop_lat": 43.7021408,
       "stop_lon": -79.5754166,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01607",
       "stop_name": "Belfield Rd. @ Martin Grove Rd.",
       "stop_lat": 43.7017059,
       "stop_lon": -79.5761719,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01604",
       "stop_name": "Belfield Rd. @ Iron St.",
       "stop_lat": 43.7008095,
       "stop_lon": -79.5808258,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01603",
       "stop_name": "Belfield Rd. @ Iron St.",
       "stop_lat": 43.7004929,
       "stop_lon": -79.5812912,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01602",
       "stop_name": "Belfield Rd. @ City View Dr.",
       "stop_lat": 43.6997261,
       "stop_lon": -79.58564,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01601",
       "stop_name": "Belfield Rd. @ City View Dr.",
       "stop_lat": 43.699543,
       "stop_lon": -79.5854187,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01546",
       "stop_name": "Yonge St. @ Big Bay Point Rd.",
       "stop_lat": 44.3565178,
       "stop_lon": -79.6470184,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01544",
       "stop_name": "Wellington St. E. @ First Commerce Dr.",
       "stop_lat": 44.0118065,
       "stop_lon": -79.4146194,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01543",
       "stop_name": "Wellington St. E. @ First Commerce Dr.",
       "stop_lat": 44.0122299,
       "stop_lon": -79.4139557,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01538",
       "stop_name": "Yonge St. @ Glenn Ave.",
       "stop_lat": 44.3280373,
       "stop_lon": -79.6202011,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01537",
       "stop_name": "Yonge St. @ Meadowland St.",
       "stop_lat": 44.2575531,
       "stop_lon": -79.6023865,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01536",
       "stop_name": "Yonge St. @ Madelaine Dr.",
       "stop_lat": 44.3546944,
       "stop_lon": -79.641861,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01535",
       "stop_name": "Yonge St. @ Lynn St.",
       "stop_lat": 44.3294563,
       "stop_lon": -79.6208115,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01534",
       "stop_name": "Yonge St. @ Lynn St.",
       "stop_lat": 44.3300591,
       "stop_lon": -79.6207199,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01533",
       "stop_name": "Yonge St. @ Little Ave.",
       "stop_lat": 44.3668938,
       "stop_lon": -79.663414,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01532",
       "stop_name": "Yonge St. @ Little Ave.",
       "stop_lat": 44.3664589,
       "stop_lon": -79.6624603,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01531",
       "stop_name": "Yonge St. @ Innisfil Beach Rd.",
       "stop_lat": 44.2993431,
       "stop_lon": -79.6134796,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01528",
       "stop_name": "Yonge St. @ Esther Dr.",
       "stop_lat": 44.3528137,
       "stop_lon": -79.6365738,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01527",
       "stop_name": "Yonge St. @ Esther Dr.",
       "stop_lat": 44.3527412,
       "stop_lon": -79.6358337,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01526",
       "stop_name": "Yonge St. @ Country Ln.",
       "stop_lat": 44.3517113,
       "stop_lon": -79.6335144,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01525",
       "stop_name": "Yonge St. @ Country Ln.",
       "stop_lat": 44.3516769,
       "stop_lon": -79.6328354,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01524",
       "stop_name": "Yonge St. @ Big Bay Point Rd.",
       "stop_lat": 44.356678,
       "stop_lon": -79.6467361,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01522",
       "stop_name": "Yonge St. @ Innisfil Beach Rd.",
       "stop_lat": 44.2995491,
       "stop_lon": -79.6132584,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01521",
       "stop_name": "Yonge St. @ Ashford Dr.",
       "stop_lat": 44.3546104,
       "stop_lon": -79.6410599,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01516",
       "stop_name": "Hwy. 11 @ Meadowland St.",
       "stop_lat": 44.2579079,
       "stop_lon": -79.6026535,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01515",
       "stop_name": "Holland St. E. @ Colborne St.",
       "stop_lat": 44.1152649,
       "stop_lon": -79.5600662,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRAD",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01514",
       "stop_name": "Holland St. E. @ Colborne St.",
       "stop_lat": 44.115345,
       "stop_lon": -79.5606918,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01508",
       "stop_name": "Burton Ave. @ Bayview Dr.",
       "stop_lat": 44.3711433,
       "stop_lon": -79.6843719,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01507",
       "stop_name": "Barrie St. @ Fletcher St.",
       "stop_lat": 44.1208191,
       "stop_lon": -79.5665207,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01506",
       "stop_name": "Barrie St. @ Britannia Ave.",
       "stop_lat": 44.1205559,
       "stop_lon": -79.5662613,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01505",
       "stop_name": "Barrie St. @ 8th Line",
       "stop_lat": 44.1266556,
       "stop_lon": -79.5680771,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01504",
       "stop_name": "Barrie St. @ 8th Line",
       "stop_lat": 44.1262932,
       "stop_lon": -79.5678711,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01488",
       "stop_name": "Hurontario St. @ Travelled Rd.",
       "stop_lat": 43.8550072,
       "stop_lon": -79.9889755,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01487",
       "stop_name": "Hurontario St. @ Travelled Rd.",
       "stop_lat": 43.8551598,
       "stop_lon": -79.9887848,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01483",
       "stop_name": "Winston Churchill Blvd. @ Vanderbilt Rd.",
       "stop_lat": 43.5848999,
       "stop_lon": -79.7667999,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01482",
       "stop_name": "Winston Churchill Blvd. @ Derry Rd. W.",
       "stop_lat": 43.5865669,
       "stop_lon": -79.7686844,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01481",
       "stop_name": "Derry Rd. W. @ Winston Churchill Blvd.",
       "stop_lat": 43.5877228,
       "stop_lon": -79.7712631,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01462",
       "stop_name": "Main St. N. @ Bovaird Dr. W.",
       "stop_lat": 43.7049713,
       "stop_lon": -79.7861862,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01459",
       "stop_name": "Steeles Ave. E. @ First Gulf Blvd.",
       "stop_lat": 43.6811714,
       "stop_lon": -79.7163315,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STET",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01455",
       "stop_name": "Erin Mills Pkwy. @ Vista Blvd.",
       "stop_lat": 43.5736008,
       "stop_lon": -79.7274475,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01454",
       "stop_name": "Main St. N. @ Williams Pkwy.",
       "stop_lat": 43.6986389,
       "stop_lon": -79.7768326,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01452",
       "stop_name": "Hurontario St. @ Sandalwood Pkwy. E.",
       "stop_lat": 43.7181053,
       "stop_lon": -79.8032684,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01451",
       "stop_name": "King St. E. @ Evans Ridge",
       "stop_lat": 43.8867188,
       "stop_lon": -79.7282181,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01448",
       "stop_name": "Mayfield Rd. @ Hwy. 50 Park & Ride",
       "stop_lat": 43.8466263,
       "stop_lon": -79.6971207,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=50PR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01447",
       "stop_name": "Erin Mills Pkwy. @ Banfield Rd.",
       "stop_lat": 43.567482,
       "stop_lon": -79.7188568,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01446",
       "stop_name": "Erin Mills Pkwy. @ McFarren Blvd.",
       "stop_lat": 43.5677757,
       "stop_lon": -79.7184906,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01445",
       "stop_name": "Eglinton Ave. W. @ Summersky Crt.",
       "stop_lat": 43.5625381,
       "stop_lon": -79.7030792,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01444",
       "stop_name": "Eglinton Ave. W. @ Credit Valley Rd.",
       "stop_lat": 43.5619164,
       "stop_lon": -79.7030182,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01441",
       "stop_name": "Trafalgar Rd. @ Burnhamthorpe Rd.",
       "stop_lat": 43.5017662,
       "stop_lon": -79.7387924,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01440",
       "stop_name": "Mississauga Rd. @ Royal Bank Dr.",
       "stop_lat": 43.6087875,
       "stop_lon": -79.7501144,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01439",
       "stop_name": "Mississauga Rd. @ Argentia Rd.",
       "stop_lat": 43.6013832,
       "stop_lon": -79.7402344,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01438",
       "stop_name": "Mississauga Rd. @ Dupont Meadow Place",
       "stop_lat": 43.6087685,
       "stop_lon": -79.7508469,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01436",
       "stop_name": "Streetsville GO Station Parking Lot",
       "stop_lat": 43.5774536,
       "stop_lon": -79.7130508,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01435",
       "stop_name": "Trafalgar Rd. @ Burnhamthorpe Rd.",
       "stop_lat": 43.5013275,
       "stop_lon": -79.7375031,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01426",
       "stop_name": "Main St. N. @ Vodden St. W.",
       "stop_lat": 43.6926956,
       "stop_lon": -79.7692566,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01410",
       "stop_name": "Regional Rd. 50 @ Cross Country Blvd.",
       "stop_lat": 43.8875618,
       "stop_lon": -79.7492142,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01409",
       "stop_name": "Regional Rd. 50 @ Bolton Heights Dr.",
       "stop_lat": 43.8874474,
       "stop_lon": -79.7487717,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01408",
       "stop_name": "Regional Rd. 50 @ Queensgate Blvd.",
       "stop_lat": 43.8690186,
       "stop_lon": -79.7237167,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOQU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01407",
       "stop_name": "Regional Rd. 50 @ Queensgate Blvd.",
       "stop_lat": 43.8689957,
       "stop_lon": -79.7231979,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOQU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01406",
       "stop_name": "Hwy. 50 @ McEwan Dr.",
       "stop_lat": 43.8615036,
       "stop_lon": -79.7133408,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01405",
       "stop_name": "Hwy. 50 @ McEwan Dr.",
       "stop_lat": 43.8615341,
       "stop_lon": -79.7127533,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01404",
       "stop_name": "Regional Rd. 50 @ George Bolton Pkwy.",
       "stop_lat": 43.8573799,
       "stop_lon": -79.707756,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01403",
       "stop_name": "Regional Rd. 50 @ George Bolton Pkwy.",
       "stop_lat": 43.8573532,
       "stop_lon": -79.7071075,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01402",
       "stop_name": "Regional Rd. 50 @ Countryside Dr.",
       "stop_lat": 43.8368378,
       "stop_lon": -79.6890564,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01400",
       "stop_name": "Regional Rd. 50 @ Castlemore Rd.",
       "stop_lat": 43.8032684,
       "stop_lon": -79.6695251,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01398",
       "stop_name": "Hwy. 50 @ Cottrelle Blvd.",
       "stop_lat": 43.78421,
       "stop_lon": -79.65847,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01394",
       "stop_name": "Albion Rd. @ Steeles Ave. W.",
       "stop_lat": 43.7499313,
       "stop_lon": -79.639595,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01393",
       "stop_name": "Albion Rd. @ Steeles Ave. W.",
       "stop_lat": 43.7503242,
       "stop_lon": -79.6393509,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01385",
       "stop_name": "Thomas St. @ Erin Mills Pkwy.",
       "stop_lat": 43.5702477,
       "stop_lon": -79.7223434,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01384",
       "stop_name": "Thomas St. @ Erin Mills Pkwy.",
       "stop_lat": 43.5701637,
       "stop_lon": -79.722023,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01374",
       "stop_name": "Steeles Ave. E. @ Kennedy Rd. S.",
       "stop_lat": 43.6751747,
       "stop_lon": -79.7234573,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01373",
       "stop_name": "Steeles Ave. E. @ Kennedy Rd. S.",
       "stop_lat": 43.6759148,
       "stop_lon": -79.7218475,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01363",
       "stop_name": "Rathburn Rd. W. @ Elora Dr.",
       "stop_lat": 43.5863609,
       "stop_lon": -79.6529465,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01362",
       "stop_name": "Rathburn Rd. W. @ Mavis Rd.",
       "stop_lat": 43.5833244,
       "stop_lon": -79.6550674,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01361",
       "stop_name": "Rathburn Rd. W. @ Mavis Rd.",
       "stop_lat": 43.5826874,
       "stop_lon": -79.6553574,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01360",
       "stop_name": "Rathburn Rd. W. @ Elora Dr.",
       "stop_lat": 43.5850639,
       "stop_lon": -79.6535568,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01359",
       "stop_name": "Rathburn Rd. W. @ Elora Dr.",
       "stop_lat": 43.5884743,
       "stop_lon": -79.6525726,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01358",
       "stop_name": "Rathburn Rd. W. @ Elora Dr.",
       "stop_lat": 43.5875092,
       "stop_lon": -79.6525726,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01357",
       "stop_name": "Rathburn Rd. W. @ Elora Dr.",
       "stop_lat": 43.5843239,
       "stop_lon": -79.6536331,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01356",
       "stop_name": "Rathburn Rd. W. @ Creditview Rd.",
       "stop_lat": 43.569828,
       "stop_lon": -79.6690521,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01354",
       "stop_name": "Queensgate Blvd. @ Sant Farm Dr.",
       "stop_lat": 43.875145,
       "stop_lon": -79.7143478,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01353",
       "stop_name": "Queensgate Blvd. @ Pembrook St.",
       "stop_lat": 43.8729973,
       "stop_lon": -79.7171097,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOQU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01352",
       "stop_name": "Queensgate Blvd. @ Pembrook St.",
       "stop_lat": 43.8726768,
       "stop_lon": -79.7172394,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01351",
       "stop_name": "Queensgate Blvd. @ Landsbridge St.",
       "stop_lat": 43.8748589,
       "stop_lon": -79.7144928,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01350",
       "stop_name": "Queensgate Blvd. @ Landsbridge St.",
       "stop_lat": 43.8705444,
       "stop_lon": -79.7214432,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01349",
       "stop_name": "Queen St. E. @ Laurelcrest St.",
       "stop_lat": 43.7084885,
       "stop_lon": -79.7353745,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01346",
       "stop_name": "Queen St. S. @ Shore St.",
       "stop_lat": 43.8749657,
       "stop_lon": -79.7319031,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01344",
       "stop_name": "Queen St. E. @ Rutherford Rd. N.",
       "stop_lat": 43.7016296,
       "stop_lon": -79.7429504,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01343",
       "stop_name": "Queen St. E. @ Rutherford Rd. S.",
       "stop_lat": 43.7015877,
       "stop_lon": -79.7425995,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01335",
       "stop_name": "Queen St. S. @ Downey Dr.",
       "stop_lat": 43.8749619,
       "stop_lon": -79.7316437,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01334",
       "stop_name": "Queen St. E. @ Centre St. N.",
       "stop_lat": 43.6910973,
       "stop_lon": -79.754631,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01327",
       "stop_name": "Millcreek Dr. @ Millrace Crt.",
       "stop_lat": 43.5925064,
       "stop_lon": -79.7460556,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01326",
       "stop_name": "Millcreek Dr. @ Millrace Crt.",
       "stop_lat": 43.5927086,
       "stop_lon": -79.7469559,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01325",
       "stop_name": "Millcreek Dr. @ Erin Mills Pkwy.",
       "stop_lat": 43.5904884,
       "stop_lon": -79.7418976,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01322",
       "stop_name": "Main St. N. @ Williams Pkwy.",
       "stop_lat": 43.6990433,
       "stop_lon": -79.7777634,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01321",
       "stop_name": "Main St. N. @ Vodden St. E.",
       "stop_lat": 43.6925087,
       "stop_lon": -79.7685547,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01317",
       "stop_name": "Main St. S. @ Nanwood Dr.",
       "stop_lat": 43.6763763,
       "stop_lon": -79.7472763,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01316",
       "stop_name": "Main St. S. @ Nanwood Dr.",
       "stop_lat": 43.6765976,
       "stop_lon": -79.7471695,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01314",
       "stop_name": "Main St. S. @ Harold St.",
       "stop_lat": 43.6797104,
       "stop_lon": -79.7517166,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01313",
       "stop_name": "Main St. S. @ Wellington St. E.",
       "stop_lat": 43.6844635,
       "stop_lon": -79.7582321,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01311",
       "stop_name": "Wellington St. W. @ George St. S.",
       "stop_lat": 43.6841316,
       "stop_lon": -79.7590332,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01308",
       "stop_name": "Main St. S. @ Elgin Dr.",
       "stop_lat": 43.6736908,
       "stop_lon": -79.743866,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01307",
       "stop_name": "Main St. S. @ Elgin Dr.",
       "stop_lat": 43.6734314,
       "stop_lon": -79.7431564,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01306",
       "stop_name": "Main St. S. @ Clarence St.",
       "stop_lat": 43.6800728,
       "stop_lon": -79.752037,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01299",
       "stop_name": "King St. E. @ Elm St.",
       "stop_lat": 43.8804588,
       "stop_lon": -79.7371292,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01298",
       "stop_name": "King St. E. @ Caledon / King Townline S.",
       "stop_lat": 43.8878136,
       "stop_lon": -79.7189941,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01297",
       "stop_name": "King St. E. @ Evans Ridge",
       "stop_lat": 43.8869095,
       "stop_lon": -79.7284775,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01296",
       "stop_name": "King St. E. @ Chapel Rd.",
       "stop_lat": 43.8802299,
       "stop_lon": -79.7376175,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01295",
       "stop_name": "King St. E. @ Caledon / King Townline S.",
       "stop_lat": 43.8879166,
       "stop_lon": -79.7194138,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01294",
       "stop_name": "Hwy. 10 @ Dufferin Rd.",
       "stop_lat": 43.9159317,
       "stop_lon": -80.0721436,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01292",
       "stop_name": "Hurontario St. @ Travelled Rd.",
       "stop_lat": 43.8571777,
       "stop_lon": -79.9916916,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01291",
       "stop_name": "Hurontario St. @ Terry St.",
       "stop_lat": 43.8870239,
       "stop_lon": -80.0324097,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01290",
       "stop_name": "Hurontario St. @ Terry St.",
       "stop_lat": 43.8870316,
       "stop_lon": -80.0319824,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01289",
       "stop_name": "Hurontario St. @ Olde Baseline Rd.",
       "stop_lat": 43.8008842,
       "stop_lon": -79.9158249,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01288",
       "stop_name": "Hurontario St. @ Olde Baseline Rd.",
       "stop_lat": 43.8009415,
       "stop_lon": -79.9153137,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01286",
       "stop_name": "Hurontario St. @ Mistywood Dr.",
       "stop_lat": 43.8640289,
       "stop_lon": -80.0011749,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01285",
       "stop_name": "Hurontario St. @ McCannell Ave.",
       "stop_lat": 43.9154625,
       "stop_lon": -80.0709457,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01284",
       "stop_name": "Hurontario St. @ Forks of The Credit Rd.",
       "stop_lat": 43.8327255,
       "stop_lon": -79.9588242,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01283",
       "stop_name": "Hurontario St. @ Forks of The Credit Rd.",
       "stop_lat": 43.8325996,
       "stop_lon": -79.9580383,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01282",
       "stop_name": "Hurontario St. @ Chester Dr.",
       "stop_lat": 43.8635445,
       "stop_lon": -80.0002823,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01281",
       "stop_name": "Hurontario St. @ Boston Mills Rd.",
       "stop_lat": 43.7933197,
       "stop_lon": -79.905365,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01280",
       "stop_name": "Hurontario St. @ Boston Mills Rd.",
       "stop_lat": 43.7932968,
       "stop_lon": -79.9048004,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01279",
       "stop_name": "Hwy. 10 @ 4th Ave.",
       "stop_lat": 43.9273758,
       "stop_lon": -80.0888596,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01276",
       "stop_name": "Hurontario St. @ Wanless Dr.",
       "stop_lat": 43.7261734,
       "stop_lon": -79.8145447,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01271",
       "stop_name": "Hurontario St. @ Sandalwood Pkwy. W.",
       "stop_lat": 43.7173424,
       "stop_lon": -79.8027267,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01261",
       "stop_name": "Hurontario St. @ Conservation Dr.",
       "stop_lat": 43.7256508,
       "stop_lon": -79.8135529,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01258",
       "stop_name": "Hurontario St. @ Bovaird Dr. W.",
       "stop_lat": 43.70655,
       "stop_lon": -79.78753,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01256",
       "stop_name": "Hansen Blvd. @ Scott Dr.",
       "stop_lat": 43.9273224,
       "stop_lon": -80.113327,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01255",
       "stop_name": "Hansen Blvd. @ Michael Dr.",
       "stop_lat": 43.9295616,
       "stop_lon": -80.1105499,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01249",
       "stop_name": "Finch Ave. @ Kenview Blvd. (Wild Water Kingdom)",
       "stop_lat": 43.7398796,
       "stop_lon": -79.6431732,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01248",
       "stop_name": "Finch Ave. @ Kenview Blvd.",
       "stop_lat": 43.7401047,
       "stop_lon": -79.6440582,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01247",
       "stop_name": "Erin Mills Pkwy. @ Erin Centre Blvd.",
       "stop_lat": 43.5623436,
       "stop_lon": -79.7118835,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01246",
       "stop_name": "Mississauga Rd. @ Argentia Rd.",
       "stop_lat": 43.6003456,
       "stop_lon": -79.7399902,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01245",
       "stop_name": "Erin Mills Pkwy. @ Windwood Dr.",
       "stop_lat": 43.5805435,
       "stop_lon": -79.7364044,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01244",
       "stop_name": "Erin Mills Pkwy. @ Wickham Rd.",
       "stop_lat": 43.5729256,
       "stop_lon": -79.7273483,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01243",
       "stop_name": "Erin Mills Pkwy. @ Millcreek Dr.",
       "stop_lat": 43.5906754,
       "stop_lon": -79.7408752,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01242",
       "stop_name": "Erin Mills Pkwy. @ Millcreek Dr.",
       "stop_lat": 43.5896568,
       "stop_lon": -79.7415771,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01241",
       "stop_name": "Erin Mills Pkwy. @ Credit Valley Rd. (Credit Valley Hospital)",
       "stop_lat": 43.5574188,
       "stop_lon": -79.7034225,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01240",
       "stop_name": "Erin Mills Pkwy. @ Erin Centre Blvd.",
       "stop_lat": 43.5623245,
       "stop_lon": -79.7112045,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01239",
       "stop_name": "Erin Mills Pkwy. @ Credit Valley Rd. (Credit Valley Hospital)",
       "stop_lat": 43.5564575,
       "stop_lon": -79.7013321,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01238",
       "stop_name": "Erin Mills Pkwy. @ Credit Valley Rd. (Credit Valley Hospital)",
       "stop_lat": 43.5567551,
       "stop_lon": -79.702858,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01237",
       "stop_name": "Erin Mills Pkwy. @ Britannia Rd. W.",
       "stop_lat": 43.5787163,
       "stop_lon": -79.7339401,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01236",
       "stop_name": "Erin Mills Pkwy. @ Battleford Rd.",
       "stop_lat": 43.5849304,
       "stop_lon": -79.742157,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01235",
       "stop_name": "Eglinton Ave. W. @ Mississauga Rd.",
       "stop_lat": 43.5688934,
       "stop_lon": -79.6957703,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01234",
       "stop_name": "Eglinton Ave. W. @ Mississauga Rd.",
       "stop_lat": 43.5683022,
       "stop_lon": -79.695961,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01230",
       "stop_name": "Duke of York Blvd. @ Princess Royal Dr.",
       "stop_lat": 43.5899925,
       "stop_lon": -79.6446991,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01204",
       "stop_name": "Derry Rd. W. @ Terragar Blvd.",
       "stop_lat": 43.5817947,
       "stop_lon": -79.7787247,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01203",
       "stop_name": "Derry Rd. W. @ Tenth Line W.",
       "stop_lat": 43.5840569,
       "stop_lon": -79.7763901,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01202",
       "stop_name": "Derry Rd. W. @ Tenth Line W.",
       "stop_lat": 43.5840263,
       "stop_lon": -79.7760086,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01200",
       "stop_name": "Derry Rd. W. @ Rosehurst Dr.",
       "stop_lat": 43.576725,
       "stop_lon": -79.7844009,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01198",
       "stop_name": "Derry Rd. W. @ Lisgar Dr.",
       "stop_lat": 43.5767136,
       "stop_lon": -79.7842407,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01197",
       "stop_name": "Derry Rd. W. @ Forest Park Dr.",
       "stop_lat": 43.5812836,
       "stop_lon": -79.7789993,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01196",
       "stop_name": "Derry Rd. W. @ Danton Promenade",
       "stop_lat": 43.5863571,
       "stop_lon": -79.7735062,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01195",
       "stop_name": "Derry Rd. W. @ Danton Promenade",
       "stop_lat": 43.5858917,
       "stop_lon": -79.7736511,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01193",
       "stop_name": "Derry Rd. W. @ Ninth Line",
       "stop_lat": 43.5746651,
       "stop_lon": -79.7863235,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DR9L",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01192",
       "stop_name": "Creditview Rd. @ Rathkeale Rd.",
       "stop_lat": 43.5761566,
       "stop_lon": -79.6826859,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01191",
       "stop_name": "Creditview Rd. @ Eglinton Ave.",
       "stop_lat": 43.577282,
       "stop_lon": -79.6845093,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01185",
       "stop_name": "Clark Blvd. @ Kings Cross Rd.",
       "stop_lat": 43.7183762,
       "stop_lon": -79.7130508,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01184",
       "stop_name": "Clark Blvd. @ Kings Cross Rd.",
       "stop_lat": 43.7190437,
       "stop_lon": -79.7124939,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01177",
       "stop_name": "Broadway @ Wellington St.",
       "stop_lat": 43.9202347,
       "stop_lon": -80.0920944,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01176",
       "stop_name": "Broadway @ Townline",
       "stop_lat": 43.9213676,
       "stop_lon": -80.0873718,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01174",
       "stop_name": "Broadway @ John St.",
       "stop_lat": 43.9187775,
       "stop_lon": -80.0992432,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01173",
       "stop_name": "Broadway @ Dawson Rd.",
       "stop_lat": 43.9168129,
       "stop_lon": -80.1082001,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01172",
       "stop_name": "Broadway @ Centre St.",
       "stop_lat": 43.9175949,
       "stop_lon": -80.1044159,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01171",
       "stop_name": "Broadway @ Banting Dr.",
       "stop_lat": 43.9158554,
       "stop_lon": -80.1123886,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01170",
       "stop_name": "Broadway @ 4th St.",
       "stop_lat": 43.9208946,
       "stop_lon": -80.0893478,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01165",
       "stop_name": "Bramalea Rd. @ Dearbourne Blvd.",
       "stop_lat": 43.7092781,
       "stop_lon": -79.6968994,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01161",
       "stop_name": "Bramalea Rd. @ Balmoral Dr.",
       "stop_lat": 43.7152138,
       "stop_lon": -79.7049255,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01160",
       "stop_name": "Bramalea Rd. @ Avondale Blvd.",
       "stop_lat": 43.7094116,
       "stop_lon": -79.6974106,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01153",
       "stop_name": "Bovaird Dr. W. @ Worthington Ave.",
       "stop_lat": 43.6813278,
       "stop_lon": -79.8141403,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01151",
       "stop_name": "Bovaird Dr. W. @ McLaughlin Rd.",
       "stop_lat": 43.6965752,
       "stop_lon": -79.7972107,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01150",
       "stop_name": "Bovaird Dr. W. @ McLaughlin Rd. N.",
       "stop_lat": 43.6961441,
       "stop_lon": -79.7971039,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01143",
       "stop_name": "Blind Line @ St. Andrews Dr.",
       "stop_lat": 43.919075,
       "stop_lon": -80.1154175,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01140",
       "stop_name": "Blind Line @ Banting Dr.",
       "stop_lat": 43.9170532,
       "stop_lon": -80.114975,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01139",
       "stop_name": "Aquitaine Ave. @ Millcreek Dr.",
       "stop_lat": 43.5927467,
       "stop_lon": -79.756218,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01138",
       "stop_name": "Aquitaine Ave. @ Millcreek Dr.",
       "stop_lat": 43.5933189,
       "stop_lon": -79.7559357,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01137",
       "stop_name": "Aquitaine Ave. @ Montevideo Rd.",
       "stop_lat": 43.5907898,
       "stop_lon": -79.7561111,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01136",
       "stop_name": "Aquitaine Ave. @ Montevideo Rd.",
       "stop_lat": 43.5898781,
       "stop_lon": -79.7560043,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01135",
       "stop_name": "Aquitaine Ave. @ Glen Erin Dr.",
       "stop_lat": 43.5866318,
       "stop_lon": -79.7586594,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01134",
       "stop_name": "Aquitaine Ave. @ Glen Erin Dr.",
       "stop_lat": 43.5867882,
       "stop_lon": -79.7581024,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01133",
       "stop_name": "Albion Vaughan Rd. @ King Vaughan Rd.",
       "stop_lat": 43.8706589,
       "stop_lon": -79.7085648,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01132",
       "stop_name": "Albion Vaughan Rd. @ Dovaston Gate",
       "stop_lat": 43.8711624,
       "stop_lon": -79.7091064,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01025",
       "stop_name": "Thompson Rd. S. @ Derry Rd. W.",
       "stop_lat": 43.5168037,
       "stop_lon": -79.8518219,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=THOM",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01024",
       "stop_name": "Thompson Rd. S. @ Derry Rd. W.",
       "stop_lat": 43.517498,
       "stop_lon": -79.8523712,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=THOM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01022",
       "stop_name": "Queen St. E. @ Kennedy Rd. N.",
       "stop_lat": 43.6954765,
       "stop_lon": -79.749939,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01021",
       "stop_name": "Queen St. E. @ Kennedy Rd. S.",
       "stop_lat": 43.696003,
       "stop_lon": -79.7488632,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01017",
       "stop_name": "Derry Rd. @ Thompson Rd. S.",
       "stop_lat": 43.5167885,
       "stop_lon": -79.8501892,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=THOM",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01016",
       "stop_name": "Derry Rd. @ Thompson Rd. S.",
       "stop_lat": 43.516552,
       "stop_lon": -79.8508148,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=THOM",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01014",
       "stop_name": "Main St. W. @ Summers Ln. (Hamilton City Hall)",
       "stop_lat": 43.2560577,
       "stop_lon": -79.8728027,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01013",
       "stop_name": "Main St. W. @ Poulette St.",
       "stop_lat": 43.2591286,
       "stop_lon": -79.8864059,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01012",
       "stop_name": "Main St. W. @ Ray St. S.",
       "stop_lat": 43.257885,
       "stop_lon": -79.8809128,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01011",
       "stop_name": "Main St. W. @ Pearl St. S.",
       "stop_lat": 43.2583809,
       "stop_lon": -79.8828964,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01010",
       "stop_name": "Main St. W. @ Paisley Ave. S.",
       "stop_lat": 43.2584991,
       "stop_lon": -79.9061661,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01009",
       "stop_name": "Main St. W. @ Macklin St. S.",
       "stop_lat": 43.2599144,
       "stop_lon": -79.8979721,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01008",
       "stop_name": "Main St. W. @ Dundurn St. S.",
       "stop_lat": 43.2598228,
       "stop_lon": -79.8895493,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01007",
       "stop_name": "Main St. W. @ Caroline St. S.",
       "stop_lat": 43.2570419,
       "stop_lon": -79.8766251,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01006",
       "stop_name": "King St. W. @ Summers Ln. (Hamilton Place)",
       "stop_lat": 43.2576485,
       "stop_lon": -79.8717346,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "01005",
       "stop_name": "King St. W. @ Strathcona Ave. N.",
       "stop_lat": 43.2614555,
       "stop_lon": -79.8850708,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01004",
       "stop_name": "King St. W. @ Pearl St. N.",
       "stop_lat": 43.2602654,
       "stop_lon": -79.8814011,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01003",
       "stop_name": "King St. W. @ Queen St. N.",
       "stop_lat": 43.2596283,
       "stop_lon": -79.8793945,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01002",
       "stop_name": "King St. E. @ Hughson St. N.",
       "stop_lat": 43.2562103,
       "stop_lon": -79.8672409,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "01001",
       "stop_name": "King St. W. @ Caroline St. N.",
       "stop_lat": 43.258461,
       "stop_lon": -79.8752441,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00992",
       "stop_name": "Hurontario St. @ Sir Lou Dr.",
       "stop_lat": 43.6612053,
       "stop_lon": -79.7271576,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00991",
       "stop_name": "Hurontario St. @ Ray Lawson Blvd.",
       "stop_lat": 43.658577,
       "stop_lon": -79.7236023,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00990",
       "stop_name": "Hurontario St. @ County Court Blvd.",
       "stop_lat": 43.6589584,
       "stop_lon": -79.7234879,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00989",
       "stop_name": "Hurontario St. @ County Court Blvd.",
       "stop_lat": 43.6621399,
       "stop_lon": -79.7277679,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00978",
       "stop_name": "Yonge St. @ County Rd. 89",
       "stop_lat": 44.2153625,
       "stop_lon": -79.5903854,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00977",
       "stop_name": "Yonge St. @ Shore Acres Dr.",
       "stop_lat": 44.2156067,
       "stop_lon": -79.5902023,
       "zone_id": 66,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00976",
       "stop_name": "Guelph St. @ Mountainview Rd. S.",
       "stop_lat": 43.6500969,
       "stop_lon": -79.9024353,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00975",
       "stop_name": "Guelph St. @ Maple Ave.",
       "stop_lat": 43.6509438,
       "stop_lon": -79.9177551,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00974",
       "stop_name": "Tenth Line @ Forsyth Farm Dr.",
       "stop_lat": 43.9830933,
       "stop_lon": -79.233284,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00972",
       "stop_name": "Kingston Rd. @ Walnut Ln.",
       "stop_lat": 43.8309517,
       "stop_lon": -79.0968323,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KIWA",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00971",
       "stop_name": "Kingston Rd. @ Walnut Ln.",
       "stop_lat": 43.8308105,
       "stop_lon": -79.0965042,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KIWA",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00970",
       "stop_name": "Durham Hwy. 2 @ Boswell Dr.",
       "stop_lat": 43.9092484,
       "stop_lon": -78.7148361,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00969",
       "stop_name": "Hwy. 50 @ Trade Valley Dr.",
       "stop_lat": 43.7921371,
       "stop_lon": -79.6624756,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00968",
       "stop_name": "Hwy 50 @ Bellchase Trail",
       "stop_lat": 43.7921333,
       "stop_lon": -79.6630402,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00966",
       "stop_name": "Tenth Line @ Forsyth Farm Dr.",
       "stop_lat": 43.9849205,
       "stop_lon": -79.2333984,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00965",
       "stop_name": "Tenth Line @ Norm Faulkner Dr.",
       "stop_lat": 43.9801979,
       "stop_lon": -79.2322922,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00964",
       "stop_name": "Tenth Line @ Hemlock Dr.",
       "stop_lat": 43.9804611,
       "stop_lon": -79.2326508,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00963",
       "stop_name": "Regional Rd. 50 @ Rutherford Rd.",
       "stop_lat": 43.8034859,
       "stop_lon": -79.6692581,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00962",
       "stop_name": "Hwy. 50 @ Langstaff Rd.",
       "stop_lat": 43.78563,
       "stop_lon": -79.65879,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00961",
       "stop_name": "Hwy. 7 @ Dunbar St.",
       "stop_lat": 43.6084785,
       "stop_lon": -80.1295776,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00960",
       "stop_name": "Hwy. 7 @ Dunbar St.",
       "stop_lat": 43.6094551,
       "stop_lon": -80.1306839,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00959",
       "stop_name": "10953 Hwy. 48 @ Elgin Mills Rd. E.",
       "stop_lat": 43.9326401,
       "stop_lon": -79.2737274,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00958",
       "stop_name": "10953 Hwy. 48 @ Elgin Mills Rd. E.",
       "stop_lat": 43.9325027,
       "stop_lon": -79.273407,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00957",
       "stop_name": "Louis Saint Laurent Ave. @ Regional Rd. 25",
       "stop_lat": 43.4963646,
       "stop_lon": -79.8475418,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00956",
       "stop_name": "Regional Rd. 25 @ Louis Saint Laurent Ave.",
       "stop_lat": 43.4966698,
       "stop_lon": -79.8483353,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00955",
       "stop_name": "Yonge St. @ Finch Ave. (Finch Terminal)",
       "stop_lat": 43.780365,
       "stop_lon": -79.4158859,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=FNCH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00953",
       "stop_name": "Trafalgar Rd. @ Oak Park Blvd.",
       "stop_lat": 43.4832001,
       "stop_lon": -79.7135086,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00951",
       "stop_name": "Hwy. 7A @ 6th Line",
       "stop_lat": 44.08641,
       "stop_lon": -78.97204,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00950",
       "stop_name": "Hwy. 7A @ 6th Line",
       "stop_lat": 44.08645,
       "stop_lon": -78.9722,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00949",
       "stop_name": "Brant St. @ Churchill Ave.",
       "stop_lat": 43.3397484,
       "stop_lon": -79.8196716,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00948",
       "stop_name": "Durham Rd. 57 @ Waverley Rd.",
       "stop_lat": 43.9002495,
       "stop_lon": -78.6930161,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00947",
       "stop_name": "Durham Rd. 57 @ Waverley Rd.",
       "stop_lat": 43.9004822,
       "stop_lon": -78.6928482,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00946",
       "stop_name": "Martin Rd. @ Aspen Springs Dr.",
       "stop_lat": 43.9068298,
       "stop_lon": -78.7001495,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00945",
       "stop_name": "Martin Rd. @ Aspen Springs Dr.",
       "stop_lat": 43.9070091,
       "stop_lon": -78.7005005,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00944",
       "stop_name": "Queen St. E. @ Centre St.",
       "stop_lat": 43.6904869,
       "stop_lon": -79.7548599,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00942",
       "stop_name": "Bovaird Dr. W. @ Lake Louise Dr.",
       "stop_lat": 43.6811218,
       "stop_lon": -79.8139801,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00939",
       "stop_name": "Sheridan College",
       "stop_lat": 43.4698067,
       "stop_lon": -79.6977158,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OKSH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00938",
       "stop_name": "King St. W. @ Temperance St.",
       "stop_lat": 43.9121895,
       "stop_lon": -78.6885605,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00936",
       "stop_name": "Stevenson Rd. S. @ Laval Dr.",
       "stop_lat": 43.8809128,
       "stop_lon": -78.8780136,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00934",
       "stop_name": "Bond St. E. @ Simcoe St. N.",
       "stop_lat": 43.8985748,
       "stop_lon": -78.8637772,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00933",
       "stop_name": "Drew Centre @ Thompson Rd. S.",
       "stop_lat": 43.5256042,
       "stop_lon": -79.8646851,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00932",
       "stop_name": "Drew Centre @ Thompson Rd. S.",
       "stop_lat": 43.5256195,
       "stop_lon": -79.8648529,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00931",
       "stop_name": "Derry Rd. @ Armstrong Blvd.",
       "stop_lat": 43.5208778,
       "stop_lon": -79.8457336,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00930",
       "stop_name": "Queen St. @ Tanners Dr.",
       "stop_lat": 43.6406593,
       "stop_lon": -80.0248184,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00929",
       "stop_name": "Queen St. @ Tanners Dr.",
       "stop_lat": 43.6400948,
       "stop_lon": -80.0251007,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00926",
       "stop_name": "Hwy. 7 @ Banting Rd.",
       "stop_lat": 43.6510315,
       "stop_lon": -79.9445801,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00924",
       "stop_name": "Guelph St. @ Mountainview Rd. N.",
       "stop_lat": 43.6503716,
       "stop_lon": -79.9031219,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00923",
       "stop_name": "Plains Rd. E. @ Saint Matthews Ave.",
       "stop_lat": 43.3098145,
       "stop_lon": -79.848465,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00922",
       "stop_name": "Plains Rd. E. @ Birchwood Ave.",
       "stop_lat": 43.3085098,
       "stop_lon": -79.8502426,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00921",
       "stop_name": "172 Plains Rd. E. @ White Oak Dr.",
       "stop_lat": 43.3108292,
       "stop_lon": -79.8471146,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00918",
       "stop_name": "Regional Rd. 25 @ Derry Rd. W.",
       "stop_lat": 43.506382,
       "stop_lon": -79.8611298,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00917",
       "stop_name": "Regional Rd. 25 @ Derry Rd. W.",
       "stop_lat": 43.5056381,
       "stop_lon": -79.8607559,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00916",
       "stop_name": "Derry Rd. @ Holly Ave.",
       "stop_lat": 43.5112762,
       "stop_lon": -79.8562088,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00915",
       "stop_name": "Derry Rd. @ Holly Ave.",
       "stop_lat": 43.5118408,
       "stop_lon": -79.8560486,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00914",
       "stop_name": "Young St. @ Peel St.",
       "stop_lat": 43.6341629,
       "stop_lon": -80.0328445,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00913",
       "stop_name": "Young St. @ Peel St.",
       "stop_lat": 43.6342812,
       "stop_lon": -80.0327072,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00912",
       "stop_name": "Waterdown Rd. @ Masonry Crt.",
       "stop_lat": 43.3087234,
       "stop_lon": -79.8554382,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00911",
       "stop_name": "Waterdown Rd. @ Masonry Crt.",
       "stop_lat": 43.3084755,
       "stop_lon": -79.8549042,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00910",
       "stop_name": "Trafalgar Rd. @ River Oaks Blvd. E.",
       "stop_lat": 43.4773788,
       "stop_lon": -79.7055664,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00907",
       "stop_name": "Trafalgar Rd. @ Lynwood Dr.",
       "stop_lat": 43.4673347,
       "stop_lon": -79.6915436,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00902",
       "stop_name": "Trafalgar Rd. @ Iroquois Shore Rd.",
       "stop_lat": 43.4648666,
       "stop_lon": -79.6877365,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00901",
       "stop_name": "Trafalgar Rd. @ Glenashton Dr.",
       "stop_lat": 43.480526,
       "stop_lon": -79.7098923,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00900",
       "stop_name": "Trafalgar Rd. @ Glenashton Dr.",
       "stop_lat": 43.4801941,
       "stop_lon": -79.7090683,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00897",
       "stop_name": "Trafalgar Rd. @ Briarhall Gate",
       "stop_lat": 43.4771309,
       "stop_lon": -79.7049179,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00896",
       "stop_name": "Thompson Rd. S. @ McCuaig Dr.",
       "stop_lat": 43.5222435,
       "stop_lon": -79.8590088,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00895",
       "stop_name": "Thompson Rd. S. @ McCuaig Dr.",
       "stop_lat": 43.5221252,
       "stop_lon": -79.8587494,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00894",
       "stop_name": "Thompson Rd. S. @ Laurier Ave.",
       "stop_lat": 43.5199051,
       "stop_lon": -79.8556519,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00893",
       "stop_name": "Thompson Rd. S. @ Laurier Ave.",
       "stop_lat": 43.52007,
       "stop_lon": -79.85619,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00892",
       "stop_name": "Thompson Rd. S. @ Childs Dr.",
       "stop_lat": 43.5239563,
       "stop_lon": -79.8612061,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00891",
       "stop_name": "Thompson Rd. S. @ Childs Dr.",
       "stop_lat": 43.5241127,
       "stop_lon": -79.8615265,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00890",
       "stop_name": "Queen St. @ Longfield Rd.",
       "stop_lat": 43.6351967,
       "stop_lon": -80.0305176,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00889",
       "stop_name": "Queen St. @ Churchill Rd. N.",
       "stop_lat": 43.6374321,
       "stop_lon": -80.0283279,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00888",
       "stop_name": "Queen St. @ Churchill Rd. S.",
       "stop_lat": 43.6370354,
       "stop_lon": -80.0284729,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00887",
       "stop_name": "Queen St. @ Acton Blvd.",
       "stop_lat": 43.63509,
       "stop_lon": -80.03091,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00886",
       "stop_name": "Plains Rd. E. @ Willowbrook Rd. (Maplehurst Public School)",
       "stop_lat": 43.3187675,
       "stop_lon": -79.8369522,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00885",
       "stop_name": "Plains Rd. E. @ Willowbrook Rd.",
       "stop_lat": 43.3171082,
       "stop_lon": -79.8393402,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00884",
       "stop_name": "Plains Rd. E. @ Waterdown Rd.",
       "stop_lat": 43.3070107,
       "stop_lon": -79.8525772,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00883",
       "stop_name": "Plains Rd. E. @ Lasalle Park Rd.",
       "stop_lat": 43.3069458,
       "stop_lon": -79.8521805,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00882",
       "stop_name": "175 Plains Rd. E. @ Saint Matthews Ave.",
       "stop_lat": 43.3109474,
       "stop_lon": -79.8473358,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00881",
       "stop_name": "481 Plains Rd. E. @ Sanford Dr.",
       "stop_lat": 43.3184242,
       "stop_lon": -79.8370361,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00880",
       "stop_name": "Plains Rd. E. @ King Rd.",
       "stop_lat": 43.3211784,
       "stop_lon": -79.833252,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00879",
       "stop_name": "Plains Rd. E. @ King Rd.",
       "stop_lat": 43.3222313,
       "stop_lon": -79.8323364,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00878",
       "stop_name": "Plains Rd. E. @ Gallagher Rd.",
       "stop_lat": 43.3127785,
       "stop_lon": -79.8449097,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00877",
       "stop_name": "Plains Rd. E. @ Francis Rd.",
       "stop_lat": 43.3246918,
       "stop_lon": -79.8290176,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00876",
       "stop_name": "Plains Rd. E. @ Francis Rd.",
       "stop_lat": 43.3239784,
       "stop_lon": -79.8296585,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00875",
       "stop_name": "Plains Rd. E. @ Falcon Blvd.",
       "stop_lat": 43.316925,
       "stop_lon": -79.8392181,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00874",
       "stop_name": "Plains Rd. E. @ Downsview Dr.",
       "stop_lat": 43.3153915,
       "stop_lon": -79.8414688,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00873",
       "stop_name": "Plains Rd. E. @ Downsview Dr.",
       "stop_lat": 43.3149147,
       "stop_lon": -79.8417358,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00872",
       "stop_name": "Plains Rd. E. @ Clearview Ave.",
       "stop_lat": 43.3090019,
       "stop_lon": -79.8499756,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00871",
       "stop_name": "Plains Rd. E. @ Cedarwood Place",
       "stop_lat": 43.3207474,
       "stop_lon": -79.8343353,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00870",
       "stop_name": "Plains Rd. E. @ Gallagher Rd.",
       "stop_lat": 43.3126945,
       "stop_lon": -79.8447876,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00868",
       "stop_name": "Mill St. E. @ Fellows St. (Acton GO)",
       "stop_lat": 43.633812,
       "stop_lon": -80.0369797,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00867",
       "stop_name": "Main St. N. @ School Ln.",
       "stop_lat": 43.6323853,
       "stop_lon": -80.04496,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00866",
       "stop_name": "Mill St. E. @ Elgin St. S.",
       "stop_lat": 43.6315536,
       "stop_lon": -80.0392075,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00865",
       "stop_name": "Mill St. E. @ Elgin St. N.",
       "stop_lat": 43.6317863,
       "stop_lon": -80.0392303,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00864",
       "stop_name": "Mill St. E. @ Fellows St. (Acton GO)",
       "stop_lat": 43.6337471,
       "stop_lon": -80.0368423,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00863",
       "stop_name": "Main St. E. @ Wilson Dr.",
       "stop_lat": 43.5234795,
       "stop_lon": -79.8721008,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00862",
       "stop_name": "Main St. E. @ Wilson Dr.",
       "stop_lat": 43.5229797,
       "stop_lon": -79.872345,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00861",
       "stop_name": "Main St. S. @ Bridge St.",
       "stop_lat": 43.6170883,
       "stop_lon": -80.1415176,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00860",
       "stop_name": "Main St. S. @ Valley Rd.",
       "stop_lat": 43.6163979,
       "stop_lon": -80.1408844,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00857",
       "stop_name": "Main St. E. @ Ontario St.",
       "stop_lat": 43.518795,
       "stop_lon": -79.8772278,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00856",
       "stop_name": "Main St. E. @ Ontario St.",
       "stop_lat": 43.5189781,
       "stop_lon": -79.8764572,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00854",
       "stop_name": "Main St. N. @ Moore Park Cres.",
       "stop_lat": 43.655117,
       "stop_lon": -79.9334869,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00853",
       "stop_name": "Main St. N. @ Moore Park Cres.",
       "stop_lat": 43.6549454,
       "stop_lon": -79.9335709,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00849",
       "stop_name": "Hwy. 7 @ Hyland Ave.",
       "stop_lat": 43.6539307,
       "stop_lon": -79.941452,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00848",
       "stop_name": "Hwy. 7 @ Bethel Rd.",
       "stop_lat": 43.6550446,
       "stop_lon": -79.940506,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00847",
       "stop_name": "Hwy. 7 @ Banting Rd.",
       "stop_lat": 43.6515427,
       "stop_lon": -79.9443207,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00846",
       "stop_name": "Main St. N. @ Elizabeth Dr.",
       "stop_lat": 43.6326408,
       "stop_lon": -80.0455246,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00845",
       "stop_name": "Guelph St. @ Lakeview Ave.",
       "stop_lat": 43.6329269,
       "stop_lon": -80.0497208,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00844",
       "stop_name": "279 Guelph St. @ Sinclair Ave.",
       "stop_lat": 43.6496773,
       "stop_lon": -79.8898468,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00842",
       "stop_name": "Guelph St. @ Sinclair Ave.",
       "stop_lat": 43.6499443,
       "stop_lon": -79.8935242,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00841",
       "stop_name": "Guelph St. @ Sinclair Ave.",
       "stop_lat": 43.6496468,
       "stop_lon": -79.8933182,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00839",
       "stop_name": "Guelph St. @ Noble St.",
       "stop_lat": 43.6471291,
       "stop_lon": -79.8579407,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00838",
       "stop_name": "324 Guelph St. @ Sinclair Ave.",
       "stop_lat": 43.6494904,
       "stop_lon": -79.8901596,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00837",
       "stop_name": "Guelph St. @ Mill St.",
       "stop_lat": 43.6512375,
       "stop_lon": -79.9233627,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00834",
       "stop_name": "Guelph St. @ Mill St.",
       "stop_lat": 43.6513214,
       "stop_lon": -79.9234467,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00833",
       "stop_name": "Guelph St. @ McFarlane Dr.",
       "stop_lat": 43.6489639,
       "stop_lon": -79.8769226,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00832",
       "stop_name": "Guelph St. @ Maple Ave.",
       "stop_lat": 43.6510811,
       "stop_lon": -79.9172134,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00830",
       "stop_name": "Guelph St. @ Lakeview Ave.",
       "stop_lat": 43.6330376,
       "stop_lon": -80.0496826,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00828",
       "stop_name": "Guelph St. @ Delrex Blvd.",
       "stop_lat": 43.6491737,
       "stop_lon": -79.8806686,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00827",
       "stop_name": "Guelph St. @ Delrex Blvd.",
       "stop_lat": 43.6489067,
       "stop_lon": -79.88134,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00824",
       "stop_name": "Guelph St. @ Armstrong Ave.",
       "stop_lat": 43.6494751,
       "stop_lon": -79.8849487,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00823",
       "stop_name": "Guelph St. @ Armstrong Ave.",
       "stop_lat": 43.6491852,
       "stop_lon": -79.8847427,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00822",
       "stop_name": "Guelph St. @ Noble St.",
       "stop_lat": 43.6469536,
       "stop_lon": -79.8575363,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00821",
       "stop_name": "Fairview St. @ Maple Ave.",
       "stop_lat": 43.3294373,
       "stop_lon": -79.8193436,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00820",
       "stop_name": "Fairview St. @ Maple Ave.",
       "stop_lat": 43.3287392,
       "stop_lon": -79.8214798,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00819",
       "stop_name": "Fairview St. @ Maple Ave.",
       "stop_lat": 43.3295403,
       "stop_lon": -79.8197861,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00816",
       "stop_name": "Derry Rd. @ Trudeau Dr.",
       "stop_lat": 43.5284157,
       "stop_lon": -79.8378067,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00815",
       "stop_name": "Derry Rd. @ Trudeau Dr.",
       "stop_lat": 43.5277672,
       "stop_lon": -79.8381882,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00814",
       "stop_name": "Derry Rd. @ Trafalgar Rd.",
       "stop_lat": 43.556057,
       "stop_lon": -79.8073883,
       "zone_id": 23,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00813",
       "stop_name": "Derry Rd. @ Trafalgar Rd.",
       "stop_lat": 43.5542793,
       "stop_lon": -79.8089676,
       "zone_id": 23,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00812",
       "stop_name": "Derry Rd. @ Miller Way",
       "stop_lat": 43.5185127,
       "stop_lon": -79.8486328,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00810",
       "stop_name": "Derry Rd. @ Miller Way",
       "stop_lat": 43.520977,
       "stop_lon": -79.8459167,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00809",
       "stop_name": "Derry Rd. @ James Snow Pkwy.",
       "stop_lat": 43.5310211,
       "stop_lon": -79.8351364,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00808",
       "stop_name": "Derry Rd. @ James Snow Pkwy.",
       "stop_lat": 43.5304413,
       "stop_lon": -79.8352661,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00807",
       "stop_name": "Derry Rd. @ Fourth Line",
       "stop_lat": 43.5258636,
       "stop_lon": -79.8403397,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00806",
       "stop_name": "Derry Rd. @ Fourth Line",
       "stop_lat": 43.5261955,
       "stop_lon": -79.8401794,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00804",
       "stop_name": "Brant St. @ Leighland Rd.",
       "stop_lat": 43.3391037,
       "stop_lon": -79.8182068,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00803",
       "stop_name": "Alma St. @ Fall St.",
       "stop_lat": 43.6138763,
       "stop_lon": -80.1490631,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00802",
       "stop_name": "Alma St. @ Fall St.",
       "stop_lat": 43.6140785,
       "stop_lon": -80.148674,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00801",
       "stop_name": "Main St. S. @ Frederick St.",
       "stop_lat": 43.6113472,
       "stop_lon": -80.1336594,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00738",
       "stop_name": "Hwy. 48 @ 19th Ave.",
       "stop_lat": 43.945339,
       "stop_lon": -79.277901,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00737",
       "stop_name": "Hwy. 48 @ 19th Ave.",
       "stop_lat": 43.945057,
       "stop_lon": -79.278046,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00736",
       "stop_name": "Finch Bus Terminal",
       "stop_lat": 43.7819481,
       "stop_lon": -79.4159088,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=FNCH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00735",
       "stop_name": "Simpson Ave. @ King St. E.",
       "stop_lat": 43.9112968,
       "stop_lon": -78.6749878,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00734",
       "stop_name": "King St. E. @ Simpson Ave.",
       "stop_lat": 43.9116249,
       "stop_lon": -78.6742783,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00732",
       "stop_name": "Main St. W. @ Longwood Rd. S.",
       "stop_lat": 43.2590866,
       "stop_lon": -79.901741,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MAIN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00731",
       "stop_name": "Yonge St. @ 16th Ave.",
       "stop_lat": 43.8536987,
       "stop_lon": -79.4329987,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00730",
       "stop_name": "Erin Mills Pkwy. @ Britannia Rd. W.",
       "stop_lat": 43.577713,
       "stop_lon": -79.7318649,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00729",
       "stop_name": "Kingston Rd. @ Salem Rd.",
       "stop_lat": 43.8634529,
       "stop_lon": -79.0167465,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00728",
       "stop_name": "Kingston Rd. @ Salem Rd.",
       "stop_lat": 43.8634377,
       "stop_lon": -79.0152206,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00727",
       "stop_name": "Liverpool Rd. @ Pickering Pkwy.",
       "stop_lat": 43.83309,
       "stop_lon": -79.08914,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LRPP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00726",
       "stop_name": "Liverpool Rd. @ Pickering Pkwy.",
       "stop_lat": 43.83299,
       "stop_lon": -79.0894,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LRPP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00723",
       "stop_name": "McCowan Rd. @ Triton Rd.",
       "stop_lat": 43.7755547,
       "stop_lon": -79.2528763,
       "zone_id": "07",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00722",
       "stop_name": "McCowan Rd. @ Progress Ave.",
       "stop_lat": 43.7764702,
       "stop_lon": -79.2527542,
       "zone_id": "07",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00721",
       "stop_name": "Simcoe St. @ Kellett St.",
       "stop_lat": 44.1103477,
       "stop_lon": -78.9502258,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00719",
       "stop_name": "Durham Hwy. 2 @ Durham Regional Rd. 42",
       "stop_lat": 43.9130058,
       "stop_lon": -78.6269608,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00718",
       "stop_name": "Durham Hwy. 2 @ Durham Regional Rd. 42",
       "stop_lat": 43.9128151,
       "stop_lon": -78.6273422,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00716",
       "stop_name": "Durham Rd. 2 @ Durham Rd. 57",
       "stop_lat": 43.911396,
       "stop_lon": -78.7018509,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00714",
       "stop_name": "Toronto St. @ Brock St.",
       "stop_lat": 44.1092377,
       "stop_lon": -79.1226883,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00713",
       "stop_name": "Winchester Rd. @ Thickson Rd.",
       "stop_lat": 43.9575119,
       "stop_lon": -78.9432297,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00712",
       "stop_name": "Winchester Rd. @ Thickson Rd.",
       "stop_lat": 43.9572487,
       "stop_lon": -78.9437485,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00711",
       "stop_name": "Winchester Rd. @ Queen St.",
       "stop_lat": 43.9554939,
       "stop_lon": -78.9526825,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00710",
       "stop_name": "Winchester Rd. @ Saint Thomas St.",
       "stop_lat": 43.9554024,
       "stop_lon": -78.9526443,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00709",
       "stop_name": "Winchester Rd. @ Simcoe St.",
       "stop_lat": 43.9549179,
       "stop_lon": -78.9552917,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00708",
       "stop_name": "Winchester Rd. @ Simcoe St.",
       "stop_lat": 43.954731,
       "stop_lon": -78.9558868,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00707",
       "stop_name": "Hwy. 7 E. @ Lake Ridge Rd.",
       "stop_lat": 43.9406357,
       "stop_lon": -79.0158386,
       "zone_id": 87,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00706",
       "stop_name": "Winchester Rd. @ Durham St.",
       "stop_lat": 43.9539108,
       "stop_lon": -78.9598923,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00705",
       "stop_name": "Winchester Rd. @ Chelmsford Dr.",
       "stop_lat": 43.9538612,
       "stop_lon": -78.9596176,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00704",
       "stop_name": "Winchester Rd. W. @ Baldwin St.",
       "stop_lat": 43.9526215,
       "stop_lon": -78.9648438,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00703",
       "stop_name": "Winchester Rd. @ Ashburn Rd.",
       "stop_lat": 43.9511795,
       "stop_lon": -78.9717331,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00702",
       "stop_name": "Winchester Rd. @ Ashburn Rd.",
       "stop_lat": 43.9506226,
       "stop_lon": -78.9728317,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00699",
       "stop_name": "Toronto St. @ Welwood Dr.",
       "stop_lat": 44.0890808,
       "stop_lon": -79.1344223,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00698",
       "stop_name": "Toronto St. S. @ Poplar St.",
       "stop_lat": 44.1068153,
       "stop_lon": -79.1233902,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00697",
       "stop_name": "Toronto St. S. @ Peel St.",
       "stop_lat": 44.1058197,
       "stop_lon": -79.1241226,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00696",
       "stop_name": "Toronto St. S. @ Mill St.",
       "stop_lat": 44.1044579,
       "stop_lon": -79.124939,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00695",
       "stop_name": "Toronto St. @ Elgin Park Dr.",
       "stop_lat": 44.0974541,
       "stop_lon": -79.1284714,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00694",
       "stop_name": "Toronto St. S. @ Campbell Dr.",
       "stop_lat": 44.1023788,
       "stop_lon": -79.1256332,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00693",
       "stop_name": "Toronto St. S. @ Campbell Dr.",
       "stop_lat": 44.10191,
       "stop_lon": -79.12558,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00692",
       "stop_name": "Toronto St. N. @ Albert St.",
       "stop_lat": 44.1093521,
       "stop_lon": -79.1225128,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00691",
       "stop_name": "Thickson Rd. @ Winchester Rd.",
       "stop_lat": 43.9575005,
       "stop_lon": -78.9436874,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00690",
       "stop_name": "Thickson Rd. @ Winchester Rd.",
       "stop_lat": 43.9582214,
       "stop_lon": -78.9437408,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00689",
       "stop_name": "Thickson Rd. @ Columbus Rd.",
       "stop_lat": 43.9728813,
       "stop_lon": -78.9502869,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00688",
       "stop_name": "Thickson Rd. @ Columbus Rd.",
       "stop_lat": 43.9731331,
       "stop_lon": -78.9503326,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00687",
       "stop_name": "Thickson Rd. @ Carnwith Dr.",
       "stop_lat": 43.9684601,
       "stop_lon": -78.9483719,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00686",
       "stop_name": "Thickson Rd. @ Carnwith Dr.",
       "stop_lat": 43.9678307,
       "stop_lon": -78.9479523,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00685",
       "stop_name": "Thickson Rd. @ Blackfriar Ave.",
       "stop_lat": 43.9620743,
       "stop_lon": -78.9456329,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00684",
       "stop_name": "Thickson Rd. @ Blackfriar Ave.",
       "stop_lat": 43.9618492,
       "stop_lon": -78.9452591,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00683",
       "stop_name": "Thickson Rd. @ Hwy. 12",
       "stop_lat": 43.9886971,
       "stop_lon": -78.9586563,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STVN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00682",
       "stop_name": "Thickson Rd. @ Hwy. 12",
       "stop_lat": 43.9888649,
       "stop_lon": -78.9585571,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STVN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00681",
       "stop_name": "Durham Hwy. 47 @ Goodwood Rd.",
       "stop_lat": 44.0337105,
       "stop_lon": -79.2021866,
       "zone_id": 75,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00680",
       "stop_name": "Stevenson Rd. @ King St. W.",
       "stop_lat": 43.8934097,
       "stop_lon": -78.8837051,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00679",
       "stop_name": "Stevenson Rd. S. @ Gibb St.",
       "stop_lat": 43.8861427,
       "stop_lon": -78.8803253,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00678",
       "stop_name": "Stevenson Rd. S. @ Gibb St.",
       "stop_lat": 43.8856468,
       "stop_lon": -78.8798828,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00677",
       "stop_name": "Stevenson Rd. S. @ Laval Dr.",
       "stop_lat": 43.8797913,
       "stop_lon": -78.8772049,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00675",
       "stop_name": "Simcoe St. E. @ Union St.",
       "stop_lat": 44.4279976,
       "stop_lon": -79.1488342,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00674",
       "stop_name": "Simcoe St. E. @ Union St.",
       "stop_lat": 44.4281197,
       "stop_lon": -79.1486282,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00671",
       "stop_name": "Simcoe St. @ Queen St.",
       "stop_lat": 44.1037521,
       "stop_lon": -78.9472961,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00670",
       "stop_name": "Simcoe St. @ Queen St.",
       "stop_lat": 44.103035,
       "stop_lon": -78.9469452,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00669",
       "stop_name": "665 Simcoe St. E. @ Madill St. S.",
       "stop_lat": 44.4266777,
       "stop_lon": -79.1428223,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00668",
       "stop_name": "672 Simcoe St. E. @ Madill St. N.",
       "stop_lat": 44.4268951,
       "stop_lon": -79.1430817,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00665",
       "stop_name": "Simcoe St. E. @ John St. S.",
       "stop_lat": 44.4291801,
       "stop_lon": -79.1521988,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00664",
       "stop_name": "Simcoe St. E. @ John St. S.",
       "stop_lat": 44.4291573,
       "stop_lon": -79.1525421,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00662",
       "stop_name": "Simcoe St. @ Beech St.",
       "stop_lat": 44.1101646,
       "stop_lon": -78.9499588,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00661",
       "stop_name": "Simcoe St. @ Balsam St.",
       "stop_lat": 44.1073189,
       "stop_lon": -78.9489212,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00660",
       "stop_name": "Simcoe St. @ Balsam St.",
       "stop_lat": 44.107399,
       "stop_lon": -78.9488068,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00657",
       "stop_name": "Scugog St. @ Old Simcoe Rd.",
       "stop_lat": 44.0978508,
       "stop_lon": -78.9550934,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00656",
       "stop_name": "Scugog St. @ Old Simcoe Rd.",
       "stop_lat": 44.0977287,
       "stop_lon": -78.955307,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00655",
       "stop_name": "Scugog St. @ High St.",
       "stop_lat": 44.1002121,
       "stop_lon": -78.9432068,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00654",
       "stop_name": "Scugog St. @ Arrow St.",
       "stop_lat": 44.0994339,
       "stop_lon": -78.9475174,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00653",
       "stop_name": "Scugog St. @ Arrow St.",
       "stop_lat": 44.0992775,
       "stop_lon": -78.9478226,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00652",
       "stop_name": "Scugog St. @ Simcoe St.",
       "stop_lat": 44.099968,
       "stop_lon": -78.9450989,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00651",
       "stop_name": "Concession 12 @ Sideroad 18A (Brock High School)",
       "stop_lat": 44.3438568,
       "stop_lon": -79.0672302,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00650",
       "stop_name": "Concession 12 @ Sideroad 18A (Brock High School)",
       "stop_lat": 44.3437309,
       "stop_lon": -79.0672836,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00649",
       "stop_name": "Reach St. @ Simcoe St.",
       "stop_lat": 44.1121788,
       "stop_lon": -78.951828,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=REAC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00648",
       "stop_name": "Reach St. @ Simcoe St.",
       "stop_lat": 44.112381,
       "stop_lon": -78.9516296,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00647",
       "stop_name": "Reach St. @ Sherrington Dr.",
       "stop_lat": 44.1102142,
       "stop_lon": -78.9618301,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00646",
       "stop_name": "Reach St. @ Sherrington Dr.",
       "stop_lat": 44.1100655,
       "stop_lon": -78.9619446,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00645",
       "stop_name": "Prince St. @ Liberty St. S.",
       "stop_lat": 43.9083099,
       "stop_lon": -78.6788559,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00634",
       "stop_name": "Kingston Rd. @ Whites Rd.",
       "stop_lat": 43.8194008,
       "stop_lon": -79.1146774,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00633",
       "stop_name": "Kingston Rd. @ Whites Rd.",
       "stop_lat": 43.8189011,
       "stop_lon": -79.1159744,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00623",
       "stop_name": "Kingston Rd. @ Rougemount Dr.",
       "stop_lat": 43.80911,
       "stop_lon": -79.12996,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00622",
       "stop_name": "Kingston Rd. @ Rougemount Dr.",
       "stop_lat": 43.8096542,
       "stop_lon": -79.129097,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00602",
       "stop_name": "King St. E. @ Wilson Rd.",
       "stop_lat": 43.9022102,
       "stop_lon": -78.8435135,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00600",
       "stop_name": "Durham Hwy. 2 @ Trulls Rd.",
       "stop_lat": 43.9107971,
       "stop_lon": -78.7887421,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00599",
       "stop_name": "King St. E. @ Townline Rd.",
       "stop_lat": 43.906498,
       "stop_lon": -78.8141861,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00598",
       "stop_name": "King St. E. @ Townline Rd.",
       "stop_lat": 43.9063759,
       "stop_lon": -78.8139725,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00595",
       "stop_name": "Durham Hwy. 2 @ Solina Rd.",
       "stop_lat": 43.9138107,
       "stop_lon": -78.7567444,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00594",
       "stop_name": "King St. W. @ Simcoe St. S.",
       "stop_lat": 43.8975906,
       "stop_lon": -78.8631134,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00593",
       "stop_name": "Durham Hwy. 2 @ Rundle Rd.",
       "stop_lat": 43.9137917,
       "stop_lon": -78.74617,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00592",
       "stop_name": "King St. E. @ Ritson Rd.",
       "stop_lat": 43.8998909,
       "stop_lon": -78.8532715,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00591",
       "stop_name": "Durham Hwy. 2 @ Prestonvale Rd.",
       "stop_lat": 43.9084435,
       "stop_lon": -78.7974091,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00590",
       "stop_name": "King St. W. @ Park Rd.",
       "stop_lat": 43.8953896,
       "stop_lon": -78.8726578,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00589",
       "stop_name": "King St. E. @ Mary St. N.",
       "stop_lat": 43.8983002,
       "stop_lon": -78.8600845,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00588",
       "stop_name": "King St. E. @ Kingsway College Dr.",
       "stop_lat": 43.905777,
       "stop_lon": -78.8217545,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00587",
       "stop_name": "King St. E. @ Keewatin St.",
       "stop_lat": 43.9059486,
       "stop_lon": -78.8276062,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00586",
       "stop_name": "King St. E. @ Keewatin St.",
       "stop_lat": 43.9057732,
       "stop_lon": -78.826767,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00585",
       "stop_name": "Durham Hwy. 2 @ Holt Rd.",
       "stop_lat": 43.9124832,
       "stop_lon": -78.7352753,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00584",
       "stop_name": "King St. E. @ Harmony Rd.",
       "stop_lat": 43.9042625,
       "stop_lon": -78.8349838,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00583",
       "stop_name": "King St. E. @ Harmony Rd.",
       "stop_lat": 43.9041786,
       "stop_lon": -78.8348083,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00582",
       "stop_name": "Durham Hwy. 2 @ Hancock Rd.",
       "stop_lat": 43.9134865,
       "stop_lon": -78.7674332,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00580",
       "stop_name": "King St. E. @ Grandview St. S.",
       "stop_lat": 43.9055748,
       "stop_lon": -78.8229294,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00579",
       "stop_name": "King St. E. @ Farewell St.",
       "stop_lat": 43.9030266,
       "stop_lon": -78.839592,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00578",
       "stop_name": "King St. E. @ Eastlawn St.",
       "stop_lat": 43.9061203,
       "stop_lon": -78.8167343,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00577",
       "stop_name": "King St. E. @ Drew St.",
       "stop_lat": 43.8991737,
       "stop_lon": -78.8563843,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00576",
       "stop_name": "King St. E. @ Centre St. N.",
       "stop_lat": 43.8971252,
       "stop_lon": -78.8651581,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KICT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00575",
       "stop_name": "King St. E. @ Central Park Blvd.",
       "stop_lat": 43.901001,
       "stop_lon": -78.848587,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00574",
       "stop_name": "Durham Hwy. 2 @ Centerfield Dr.",
       "stop_lat": 43.9074059,
       "stop_lon": -78.8039093,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00573",
       "stop_name": "King St. E. @ Athabaska St.",
       "stop_lat": 43.9060783,
       "stop_lon": -78.8187485,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00571",
       "stop_name": "Hwy. 7A @ Queen St.",
       "stop_lat": 44.0955772,
       "stop_lon": -78.9609909,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00569",
       "stop_name": "Hwy. 7A @ Rose St.",
       "stop_lat": 44.079731,
       "stop_lon": -78.9800873,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00568",
       "stop_name": "Hwy. 7A @ Brook St.",
       "stop_lat": 44.0796623,
       "stop_lon": -78.9803391,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00567",
       "stop_name": "Hwy. 7 & 12 @ Scugog 10th Line",
       "stop_lat": 44.13937,
       "stop_lon": -79.0095062,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00566",
       "stop_name": "Hwy. 7 & 12 @ Hwy. 7A",
       "stop_lat": 44.0747948,
       "stop_lon": -78.9814529,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00565",
       "stop_name": "Hwy. 7 & 12 @ Ontario St.",
       "stop_lat": 44.0170517,
       "stop_lon": -78.969429,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00564",
       "stop_name": "Hwy. 7 & 12 @ Jacobsen Blvd.",
       "stop_lat": 44.1878014,
       "stop_lon": -79.0309601,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00563",
       "stop_name": "Hwy. 7 & 12 @ Jacobsen Blvd.",
       "stop_lat": 44.1879311,
       "stop_lon": -79.0311584,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00562",
       "stop_name": "Hwy. 7 & 12 @ Jack St.",
       "stop_lat": 44.1480675,
       "stop_lon": -79.013092,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00561",
       "stop_name": "Hwy. 7 & 12 @ Goodwood Rd.",
       "stop_lat": 44.0748444,
       "stop_lon": -78.9817657,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00560",
       "stop_name": "Hwy. 7 & 12 @ Scugog 10th Line",
       "stop_lat": 44.139286,
       "stop_lon": -79.0097122,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00559",
       "stop_name": "Hwy. 7 & 12 @ Mud Lake Rd.",
       "stop_lat": 44.0193825,
       "stop_lon": -78.9690247,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00558",
       "stop_name": "Hwy. 7 & 12 @ Couves Ln.",
       "stop_lat": 44.1485939,
       "stop_lon": -79.0134583,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00554",
       "stop_name": "Toronto St. @ Welwood Dr.",
       "stop_lat": 44.0885963,
       "stop_lon": -79.1344528,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00553",
       "stop_name": "Durham Hwy. 47 @ Goodwood Rd.",
       "stop_lat": 44.0338898,
       "stop_lon": -79.2021637,
       "zone_id": 75,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GDWD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00550",
       "stop_name": "Durham Hwy. 2 @ Varcoe Rd.",
       "stop_lat": 43.9071846,
       "stop_lon": -78.8074951,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00549",
       "stop_name": "Durham Hwy. 2 @ Trulls Rd.",
       "stop_lat": 43.911026,
       "stop_lon": -78.7880707,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00547",
       "stop_name": "Durham Hwy. 2 @ Solina Rd.",
       "stop_lat": 43.9138412,
       "stop_lon": -78.7575531,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00544",
       "stop_name": "Durham Hwy. 2 @ Rundle Rd.",
       "stop_lat": 43.9139404,
       "stop_lon": -78.7460556,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00543",
       "stop_name": "King Ave. W. @ Rudell Rd.",
       "stop_lat": 43.9147644,
       "stop_lon": -78.6007919,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00541",
       "stop_name": "King St. W. @ Roenigk Dr.",
       "stop_lat": 43.9130325,
       "stop_lon": -78.6950607,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00540",
       "stop_name": "King St. W. @ Roenigk Dr.",
       "stop_lat": 43.9127769,
       "stop_lon": -78.6950073,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00539",
       "stop_name": "Durham Hwy. 2 @ Rickard Rd.",
       "stop_lat": 43.9124374,
       "stop_lon": -78.6391907,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00538",
       "stop_name": "Durham Hwy. 2 @ Prestonvale Rd.",
       "stop_lat": 43.9085884,
       "stop_lon": -78.7975388,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00537",
       "stop_name": "King St. E. @ Ontario St.",
       "stop_lat": 43.911026,
       "stop_lon": -78.6849518,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00536",
       "stop_name": "King St. E. @ Mearns Ave.",
       "stop_lat": 43.9125061,
       "stop_lon": -78.6700745,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00535",
       "stop_name": "King St. E. @ Mearns Ave.",
       "stop_lat": 43.9123039,
       "stop_lon": -78.6707916,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00534",
       "stop_name": "King St. W. @ Massey Dr.",
       "stop_lat": 43.9155502,
       "stop_lon": -78.5971603,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00533",
       "stop_name": "King St. W. @ Massey Dr.",
       "stop_lat": 43.9152832,
       "stop_lon": -78.5977402,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00532",
       "stop_name": "Durham Hwy. 2 @ Maple Grove Rd.",
       "stop_lat": 43.9108086,
       "stop_lon": -78.7239075,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00531",
       "stop_name": "Durham Hwy. 2 @ Maple Grove Rd.",
       "stop_lat": 43.9105034,
       "stop_lon": -78.7235413,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00530",
       "stop_name": "Durham Hwy. 2 @ Lambs Rd.",
       "stop_lat": 43.9112587,
       "stop_lon": -78.6584167,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00529",
       "stop_name": "Durham Hwy. 2 @ Lambs Rd.",
       "stop_lat": 43.9112358,
       "stop_lon": -78.6594772,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00526",
       "stop_name": "Durham Hwy. 2 @ Browview Rd.",
       "stop_lat": 43.9131012,
       "stop_lon": -78.6224365,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00525",
       "stop_name": "Durham Hwy. 2 @ Kurve Inn Rd.",
       "stop_lat": 43.9129677,
       "stop_lon": -78.6222305,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00524",
       "stop_name": "Durham Hwy. 2 @ Holt Rd.",
       "stop_lat": 43.9125023,
       "stop_lon": -78.7344131,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00523",
       "stop_name": "Durham Hwy. 2 @ Hancock Rd.",
       "stop_lat": 43.9136581,
       "stop_lon": -78.7682724,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00522",
       "stop_name": "King St. E. @ George St.",
       "stop_lat": 43.9115372,
       "stop_lon": -78.686203,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00521",
       "stop_name": "King St. E. @ Galbraith Cr.",
       "stop_lat": 43.9117889,
       "stop_lon": -78.6741791,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00520",
       "stop_name": "Durham Hwy. 2 @ Durham Rd. 57",
       "stop_lat": 43.9110336,
       "stop_lon": -78.7023163,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00519",
       "stop_name": "King St. E. @ Division St.",
       "stop_lat": 43.9116707,
       "stop_lon": -78.6874466,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00516",
       "stop_name": "Durham Hwy. 2 @ Clarington Blvd.",
       "stop_lat": 43.9095573,
       "stop_lon": -78.7080612,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00515",
       "stop_name": "Durham Hwy. 2 @ Centerfield Dr.",
       "stop_lat": 43.9076233,
       "stop_lon": -78.8034897,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00514",
       "stop_name": "Durham Hwy. 2 @ Bragg Rd.",
       "stop_lat": 43.9126205,
       "stop_lon": -78.6365585,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00513",
       "stop_name": "Durham Hwy. 2 @ Boswell Dr.",
       "stop_lat": 43.9097633,
       "stop_lon": -78.7169571,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00511",
       "stop_name": "Durham Hwy. 2 @ Bennett Rd.",
       "stop_lat": 43.9125595,
       "stop_lon": -78.6476517,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00510",
       "stop_name": "Durham Hwy. 2 @ Bennett Rd.",
       "stop_lat": 43.9123993,
       "stop_lon": -78.6490173,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00509",
       "stop_name": "King Ave. E. @ Beaver St. N.",
       "stop_lat": 43.9182739,
       "stop_lon": -78.585762,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NCSL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00508",
       "stop_name": "King Ave. W. @ North St.",
       "stop_lat": 43.9170036,
       "stop_lon": -78.5912476,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00507",
       "stop_name": "King Ave. W. @ Baldwin St.",
       "stop_lat": 43.9166145,
       "stop_lon": -78.5920181,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00462",
       "stop_name": "Clarington Blvd. @ Durham Hwy. 2",
       "stop_lat": 43.9084511,
       "stop_lon": -78.7072296,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00457",
       "stop_name": "Cameron St. W. @ Prince St.",
       "stop_lat": 44.348835,
       "stop_lon": -79.0445099,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00456",
       "stop_name": "Cameron St. W. @ Country Ln.",
       "stop_lat": 44.3490524,
       "stop_lon": -79.0439987,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00455",
       "stop_name": "Brock St. @ Woodlands Ave.",
       "stop_lat": 43.9083939,
       "stop_lon": -78.9546661,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00454",
       "stop_name": "Brock St. @ Whitburn St.",
       "stop_lat": 43.9092941,
       "stop_lon": -78.9551773,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00453",
       "stop_name": "Brock St. @ Wallace Dr.",
       "stop_lat": 43.8946342,
       "stop_lon": -78.9483948,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00452",
       "stop_name": "Brock St. S. @ Trent St. E.",
       "stop_lat": 43.8738136,
       "stop_lon": -78.9397202,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00451",
       "stop_name": "Brock St. S. @ Trent St. E.",
       "stop_lat": 43.8734322,
       "stop_lon": -78.939415,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00450",
       "stop_name": "Brock St. @ Timber Mill Ave.",
       "stop_lat": 43.9134331,
       "stop_lon": -78.9569473,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00449",
       "stop_name": "Brock St. @ Taunton Rd.",
       "stop_lat": 43.9150505,
       "stop_lon": -78.9573593,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00448",
       "stop_name": "Brock St. @ Manning Rd.",
       "stop_lat": 43.8916512,
       "stop_lon": -78.9472275,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00447",
       "stop_name": "Brock St. @ Rossland Rd.",
       "stop_lat": 43.8978348,
       "stop_lon": -78.9501266,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00446",
       "stop_name": "Brock St. @ Rossland Rd.",
       "stop_lat": 43.8969574,
       "stop_lon": -78.9493713,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00445",
       "stop_name": "Brock St. @ Palmerston Ave.",
       "stop_lat": 43.8950615,
       "stop_lon": -78.9486923,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00444",
       "stop_name": "814 Brock St. N. @ Starr Ave.",
       "stop_lat": 43.89042,
       "stop_lon": -78.94671,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00443",
       "stop_name": "Brock St. @ Manning Rd.",
       "stop_lat": 43.890522,
       "stop_lon": -78.9465408,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00442",
       "stop_name": "Brock St. N. @ McCartney Ave.",
       "stop_lat": 43.900795,
       "stop_lon": -78.9514923,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00441",
       "stop_name": "Brock St. @ Manning Rd.",
       "stop_lat": 43.892067,
       "stop_lon": -78.9473114,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00440",
       "stop_name": "Brock St. N. @ Kenneth Hobbs Ave.",
       "stop_lat": 43.9001732,
       "stop_lon": -78.9509659,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00439",
       "stop_name": "Brock St. N. @ Joy Thompson Ave.",
       "stop_lat": 43.9121628,
       "stop_lon": -78.9563065,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00438",
       "stop_name": "Brock St. @ James Rowe Dr.",
       "stop_lat": 43.9037704,
       "stop_lon": -78.9528503,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00437",
       "stop_name": "Brock St. @ Gilbert St.",
       "stop_lat": 43.8760452,
       "stop_lon": -78.9405518,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00436",
       "stop_name": "Brock St. @ Dryden Blvd.",
       "stop_lat": 43.902977,
       "stop_lon": -78.952301,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00435",
       "stop_name": "Brock St. @ Chestnut St.",
       "stop_lat": 43.884964,
       "stop_lon": -78.9443436,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00434",
       "stop_name": "Brock St. @ Chestnut St.",
       "stop_lat": 43.8852234,
       "stop_lon": -78.9442596,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00433",
       "stop_name": "Brock St. @ Burns St.",
       "stop_lat": 43.8712997,
       "stop_lon": -78.9386063,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00432",
       "stop_name": "Brock St. @ Burns St.",
       "stop_lat": 43.8710518,
       "stop_lon": -78.9382019,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00431",
       "stop_name": "Bond St. E. @ Ritson Rd. N.",
       "stop_lat": 43.9005089,
       "stop_lon": -78.8550873,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00430",
       "stop_name": "Bond St. E. @ Patricia Ave.",
       "stop_lat": 43.9026566,
       "stop_lon": -78.849968,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00429",
       "stop_name": "Bond St. W. @ Park Rd. N.",
       "stop_lat": 43.8962479,
       "stop_lon": -78.8746185,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00428",
       "stop_name": "Bond St. E. @ Mary St. N.",
       "stop_lat": 43.8992729,
       "stop_lon": -78.8607101,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00419",
       "stop_name": "Baldwin St. @ Winchester Rd. W.",
       "stop_lat": 43.9532204,
       "stop_lon": -78.9621048,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00418",
       "stop_name": "Baldwin St. @ Taunton Rd.",
       "stop_lat": 43.91611,
       "stop_lon": -78.95793,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00417",
       "stop_name": "Baldwin Ave. @ Sonley Dr.",
       "stop_lat": 43.9259758,
       "stop_lon": -78.9620514,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00416",
       "stop_name": "Baldwin St. @ Roybrook Ave.",
       "stop_lat": 43.9507942,
       "stop_lon": -78.9618759,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00415",
       "stop_name": "Baldwin St. @ Robmar St.",
       "stop_lat": 43.9352493,
       "stop_lon": -78.9610596,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00414",
       "stop_name": "Baldwin St. @ Robmar St.",
       "stop_lat": 43.9352798,
       "stop_lon": -78.9613113,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00413",
       "stop_name": "Baldwin St. @ Robert Attersley Dr.",
       "stop_lat": 43.9225807,
       "stop_lon": -78.9605255,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00412",
       "stop_name": "Baldwin St. @ Robert Attersley Dr.",
       "stop_lat": 43.9220695,
       "stop_lon": -78.9600449,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00411",
       "stop_name": "Baldwin St. @ Broadleaf Ave.",
       "stop_lat": 43.9181938,
       "stop_lon": -78.9583054,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00410",
       "stop_name": "Baldwin St. @ Broadleaf Ave.",
       "stop_lat": 43.9187431,
       "stop_lon": -78.9588623,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00409",
       "stop_name": "Baldwin St. S. @ Sleepy Hollow Place",
       "stop_lat": 43.9255257,
       "stop_lon": -78.9615326,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00408",
       "stop_name": "Albert St. S. @ Hwy. 7 & 12",
       "stop_lat": 44.2536545,
       "stop_lon": -79.0654526,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00407",
       "stop_name": "Albert St. S. @ Hwy. 7 & 12",
       "stop_lat": 44.2531013,
       "stop_lon": -79.0652847,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00402",
       "stop_name": "Durham Hwy. 2 @ Darlington Blvd.",
       "stop_lat": 43.9069023,
       "stop_lon": -78.8081512,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00401",
       "stop_name": "King Ave. E. @ Beaver St. S.",
       "stop_lat": 43.9180527,
       "stop_lon": -78.5859451,
       "zone_id": 97,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NCSL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00368",
       "stop_name": "Dundas St. @ Thickson Rd.",
       "stop_lat": 43.886425,
       "stop_lon": -78.9140778,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00367",
       "stop_name": "Kingston Rd. @ Westney Rd.",
       "stop_lat": 43.85742,
       "stop_lon": -79.04304,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WTNY",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00366",
       "stop_name": "Kingston Rd. @ Westney Rd.",
       "stop_lat": 43.8572845,
       "stop_lon": -79.0426102,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WTNY",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00365",
       "stop_name": "Kingston Rd. @ Brock Rd.",
       "stop_lat": 43.8479996,
       "stop_lon": -79.0733032,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00360",
       "stop_name": "Hwy. 27 @ Innovation Dr.",
       "stop_lat": 43.7887421,
       "stop_lon": -79.6257782,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00359",
       "stop_name": "Allandale Waterfront GO",
       "stop_lat": 44.373817,
       "stop_lon": -79.689441,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ADGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00358",
       "stop_name": "Centennial College",
       "stop_lat": 43.7854233,
       "stop_lon": -79.2290802,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CENT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00355",
       "stop_name": "Trafalgar Rd. @ Upper Middle Rd. E.",
       "stop_lat": 43.4749031,
       "stop_lon": -79.7014771,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00354",
       "stop_name": "Hurontario St. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.6521416,
       "stop_lon": -79.7108765,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=H407",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00352",
       "stop_name": "Lincolnville GO Bus",
       "stop_lat": 43.994805,
       "stop_lon": -79.233773,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LCGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00351",
       "stop_name": "Nash Rd. @ Barton St. Park & Ride",
       "stop_lat": 43.2398567,
       "stop_lon": -79.7700806,
       "zone_id": 80,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STON",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00350",
       "stop_name": "Richmond Hill Centre",
       "stop_lat": 43.8401451,
       "stop_lon": -79.4252853,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RHCT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00349",
       "stop_name": "Town Line @ Mill St. (Orangeville) Park & Ride",
       "stop_lat": 43.9135475,
       "stop_lon": -80.0906754,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ORPR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00347",
       "stop_name": "Queen St. S. @ Allan Dr.",
       "stop_lat": 43.8719978,
       "stop_lon": -79.7272873,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOAL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00346",
       "stop_name": "Queen St. S. @ Wilton Dr.",
       "stop_lat": 43.8719444,
       "stop_lon": -79.7277222,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOWI",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00345",
       "stop_name": "Barrie South GO Bus",
       "stop_lat": 44.351771,
       "stop_lon": -79.628335,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BSGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00344",
       "stop_name": "Kingston Rd. @ Church St.",
       "stop_lat": 43.8546715,
       "stop_lon": -79.0551224,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CHUR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00343",
       "stop_name": "Kingston Rd. @ Church St.",
       "stop_lat": 43.8541832,
       "stop_lon": -79.0567474,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CHUR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00342",
       "stop_name": "Dundas St. @ White Oaks Crt.",
       "stop_lat": 43.8749466,
       "stop_lon": -78.9636459,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WOAK",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00341",
       "stop_name": "Lisgar GO Bus",
       "stop_lat": 43.591504,
       "stop_lon": -79.788224,
       "zone_id": 23,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LGGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00340",
       "stop_name": "Hwy. 50 @ Queen St. E.",
       "stop_lat": 43.7673454,
       "stop_lon": -79.6489105,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=W507",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00339",
       "stop_name": "Regional Rd. 50 @ Nashville Rd.",
       "stop_lat": 43.8360138,
       "stop_lon": -79.6881485,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00338",
       "stop_name": "Hwy. 50 @ Columbia Way",
       "stop_lat": 43.8914528,
       "stop_lon": -79.7542267,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOCL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00337",
       "stop_name": "Brock Rd. @ McLean Rd. (Aberfoyle) Park & Ride",
       "stop_lat": 43.4609909,
       "stop_lon": -80.133667,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ABPR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00334",
       "stop_name": "Major Mackenzie Dr. @ Hwy. 400 Park & Ride",
       "stop_lat": 43.8460693,
       "stop_lon": -79.5503922,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=M400",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00333",
       "stop_name": "King  St. W. @ Stevenson Rd.",
       "stop_lat": 43.8933334,
       "stop_lon": -78.8819885,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STVN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00332",
       "stop_name": "Bond St. W. @ Stevenson Rd. N.",
       "stop_lat": 43.8938599,
       "stop_lon": -78.8843384,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STVN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00331",
       "stop_name": "Dundas St. @ Thickson Rd.",
       "stop_lat": 43.8865662,
       "stop_lon": -78.9120483,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=THCK",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00329",
       "stop_name": "Dundas St. @ Hopkins St.",
       "stop_lat": 43.8841171,
       "stop_lon": -78.9228897,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ADSN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00328",
       "stop_name": "Dundas St. @ Anderson St.",
       "stop_lat": 43.8844604,
       "stop_lon": -78.9221268,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ADSN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00327",
       "stop_name": "Dundas St. @ Garden St.",
       "stop_lat": 43.8822479,
       "stop_lon": -78.9310532,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GRDN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00326",
       "stop_name": "Dundas St. @ Garden St.",
       "stop_lat": 43.8823242,
       "stop_lon": -78.9318085,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GRDN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00325",
       "stop_name": "Dundas St. @ White Oaks Crt.",
       "stop_lat": 43.8750877,
       "stop_lon": -78.9639893,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WOAK",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00323",
       "stop_name": "Kingston Rd. @ Harwood Ave.",
       "stop_lat": 43.8611984,
       "stop_lon": -79.0252075,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HARW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00322",
       "stop_name": "Kingston Rd. @ Harwood Ave.",
       "stop_lat": 43.8612671,
       "stop_lon": -79.0265427,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HARW",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00314",
       "stop_name": "Kingston Rd. @ Glenanna Rd.",
       "stop_lat": 43.8381004,
       "stop_lon": -79.087471,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GLEN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00312",
       "stop_name": "Kingston Rd. @ Fairport Rd.",
       "stop_lat": 43.8234673,
       "stop_lon": -79.1067047,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=FAIR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00310",
       "stop_name": "McMaster University",
       "stop_lat": 43.2617264,
       "stop_lon": -79.9225693,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MCUV",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00307",
       "stop_name": "Wellington St. E. @ Hwy. 404 Park & Ride",
       "stop_lat": 44.0128479,
       "stop_lon": -79.4081802,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=A404",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00306",
       "stop_name": "Clarington Blvd. @ Durham Hwy. 2 (Bowmanville) Park & Ride",
       "stop_lat": 43.9078712,
       "stop_lon": -78.7046204,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOPR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00303",
       "stop_name": "Wellington St. E. @ Bayview Ave.",
       "stop_lat": 44.0047264,
       "stop_lon": -79.4445038,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00302",
       "stop_name": "Railway St. @ Albert St.",
       "stop_lat": 44.1095467,
       "stop_lon": -79.125206,
       "zone_id": 76,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=UXBA",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00300",
       "stop_name": "Yonge St. @ North York Blvd.",
       "stop_lat": 43.7668343,
       "stop_lon": -79.412468,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00299",
       "stop_name": "Yonge St. @ Elmhurst Ave.",
       "stop_lat": 43.7634468,
       "stop_lon": -79.4115524,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00297",
       "stop_name": "Wellington St. E. @ Bayview Ave.",
       "stop_lat": 44.0053253,
       "stop_lon": -79.4434891,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00296",
       "stop_name": "Mount Pleasant GO Bus",
       "stop_lat": 43.674976,
       "stop_lon": -79.822181,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MPGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00292",
       "stop_name": "Bovaird Dr. W. @ Hurontario St.",
       "stop_lat": 43.705513,
       "stop_lon": -79.7875595,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=10BO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00276",
       "stop_name": "East Gwillimbury GO Bus",
       "stop_lat": 44.078506,
       "stop_lon": -79.456539,
       "zone_id": 44,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GWIL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00273",
       "stop_name": "Queensgate Blvd. @ Queen St.",
       "stop_lat": 43.8700562,
       "stop_lon": -79.7222977,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00272",
       "stop_name": "Queensgate Blvd. @ Queen St.",
       "stop_lat": 43.8694229,
       "stop_lon": -79.7227402,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00271",
       "stop_name": "King St. E. @ Humber Lea Rd.",
       "stop_lat": 43.8823853,
       "stop_lon": -79.7344894,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOHU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00270",
       "stop_name": "King St. E. @ Humber Lea Rd.",
       "stop_lat": 43.8823891,
       "stop_lon": -79.7349701,
       "zone_id": 58,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BOHU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00269",
       "stop_name": "King Rd. @ Hwy. 27",
       "stop_lat": 43.9020309,
       "stop_lon": -79.6533432,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NOBL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00268",
       "stop_name": "King Rd. @ Hwy. 27",
       "stop_lat": 43.902195,
       "stop_lon": -79.6534348,
       "zone_id": 57,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NOBL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00267",
       "stop_name": "Islington Ave. @ Nashville Rd.",
       "stop_lat": 43.844368,
       "stop_lon": -79.6291428,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KLEI",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00264",
       "stop_name": "Bronte GO Bus",
       "stop_lat": 43.416275,
       "stop_lon": -79.724009,
       "zone_id": 14,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BTGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00263",
       "stop_name": "Appleby GO Bus",
       "stop_lat": 43.379261,
       "stop_lon": -79.760483,
       "zone_id": 15,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=APGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00261",
       "stop_name": "Rutherford Rd. @ Vaughan Mills Rd.",
       "stop_lat": 43.8135452,
       "stop_lon": -79.6160278,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WOOD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00260",
       "stop_name": "Rutherford Rd. @ Vaughan Mills Rd.",
       "stop_lat": 43.8132133,
       "stop_lon": -79.6167603,
       "zone_id": 56,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WOOD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00258",
       "stop_name": "Broadway @ Blind Line",
       "stop_lat": 43.9155502,
       "stop_lon": -80.1138382,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ORBL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00257",
       "stop_name": "Hansen Blvd. @ First St. (Orangeville Mall)",
       "stop_lat": 43.930336,
       "stop_lon": -80.1022568,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ORMA",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00255",
       "stop_name": "Hwy. 10 @ Buena Vista Dr.",
       "stop_lat": 43.921978,
       "stop_lon": -80.0827255,
       "zone_id": 43,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OR10",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00254",
       "stop_name": "Hurontario St. @ Charleston Side Rd.",
       "stop_lat": 43.8602753,
       "stop_lon": -79.99617,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CLDN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00253",
       "stop_name": "Hurontario St. @ Charleston Side Rd.",
       "stop_lat": 43.8601723,
       "stop_lon": -79.9954758,
       "zone_id": 42,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CLDN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00252",
       "stop_name": "Hurontario St. @ King St.",
       "stop_lat": 43.7734947,
       "stop_lon": -79.8786621,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=VICT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00251",
       "stop_name": "Hurontario St. @ King St.",
       "stop_lat": 43.7734184,
       "stop_lon": -79.8780365,
       "zone_id": 41,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=VICT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00250",
       "stop_name": "Hurontario St. @ Mayfield Rd.",
       "stop_lat": 43.7339287,
       "stop_lon": -79.8255081,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SNEL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00249",
       "stop_name": "Hurontario St. @ Mayfield Rd.",
       "stop_lat": 43.7334137,
       "stop_lon": -79.8244095,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SNEL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00248",
       "stop_name": "Hwy. 27 @ Rexdale Blvd. (Woodbine Racetrack)",
       "stop_lat": 43.7168999,
       "stop_lon": -79.5952301,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=27RX",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00247",
       "stop_name": "Hwy. 27 @ Rexdale Blvd. (Woodbine Racetrack)",
       "stop_lat": 43.7178192,
       "stop_lon": -79.596138,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=27RX",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00246",
       "stop_name": "Hwy. 27 @ Humber College Blvd.",
       "stop_lat": 43.7303085,
       "stop_lon": -79.6012726,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=27HU",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00245",
       "stop_name": "Hwy. 27 @ Humber College Blvd.",
       "stop_lat": 43.730999,
       "stop_lon": -79.6019287,
       "zone_id": "04",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=27HU",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00242",
       "stop_name": "Finch Ave. W. @ Darcel Ave.",
       "stop_lat": 43.7335091,
       "stop_lon": -79.6343002,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DRCL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00241",
       "stop_name": "Finch Ave. W. @ Longo Circle",
       "stop_lat": 43.7334518,
       "stop_lon": -79.6333313,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DRCL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00238",
       "stop_name": "Queen St. E. @ Dixie Rd.",
       "stop_lat": 43.7153816,
       "stop_lon": -79.7271194,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00237",
       "stop_name": "Queen St. E. @ Dixie Rd.",
       "stop_lat": 43.7142944,
       "stop_lon": -79.7290268,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00231",
       "stop_name": "Trinity Common Mall",
       "stop_lat": 43.7313271,
       "stop_lon": -79.7631531,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=TRCM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00228",
       "stop_name": "Malton GO Bus",
       "stop_lat": 43.705143,
       "stop_lon": -79.637825,
       "zone_id": 31,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MTGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00227",
       "stop_name": "Steeles Ave. E. @ Rutherford Rd. S.",
       "stop_lat": 43.68031,
       "stop_lon": -79.71787,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STET",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00225",
       "stop_name": "Bramalea Bus Terminal",
       "stop_lat": 43.7186356,
       "stop_lon": -79.7205734,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BLTT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00223",
       "stop_name": "Shopper's World",
       "stop_lat": 43.6675682,
       "stop_lon": -79.7358246,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SHOP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00222",
       "stop_name": "Shopper's World",
       "stop_lat": 43.6678429,
       "stop_lon": -79.7354813,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SHOP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00221",
       "stop_name": "Brampton Bus Terminal",
       "stop_lat": 43.6869087,
       "stop_lon": -79.7628632,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRPT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00217",
       "stop_name": "Bovaird Dr. W. @ Chinguacousy Rd.",
       "stop_lat": 43.6859589,
       "stop_lon": -79.8089981,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00216",
       "stop_name": "Bovaird Dr. W. @ Chinguacousy Rd.",
       "stop_lat": 43.6868248,
       "stop_lon": -79.8075638,
       "zone_id": 33,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00215",
       "stop_name": "Bovaird Dr. W. @ Mississauga Rd.",
       "stop_lat": 43.6660957,
       "stop_lon": -79.8306732,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=10BO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00214",
       "stop_name": "Bovaird Dr. W. @ Mississauga Rd.",
       "stop_lat": 43.665844,
       "stop_lon": -79.830719,
       "zone_id": 34,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00213",
       "stop_name": "Guelph St. @ King St.",
       "stop_lat": 43.6466408,
       "stop_lon": -79.8604736,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NORV",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00212",
       "stop_name": "Guelph St. @ King St.",
       "stop_lat": 43.6464195,
       "stop_lon": -79.8608932,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NORV",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00211",
       "stop_name": "Guelph St. @ Alcott Dr.",
       "stop_lat": 43.6500854,
       "stop_lon": -79.8976746,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GMKT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00210",
       "stop_name": "Georgetown Market",
       "stop_lat": 43.6499481,
       "stop_lon": -79.8984299,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GMKT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00207",
       "stop_name": "Main St. S. @ Cross St.",
       "stop_lat": 43.6506157,
       "stop_lon": -79.9274902,
       "zone_id": 35,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GTWN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00206",
       "stop_name": "Main St. N. @ St. Alban Dr.",
       "stop_lat": 43.6305199,
       "stop_lon": -80.0425568,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ACTN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00205",
       "stop_name": "Main St. N. @ Mill St. E.",
       "stop_lat": 43.6300278,
       "stop_lon": -80.04216,
       "zone_id": 37,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00204",
       "stop_name": "Alma St. @ Inkerman St.",
       "stop_lat": 43.6168976,
       "stop_lon": -80.1462097,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RKWD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00203",
       "stop_name": "Alma St. @ Inkerman St.",
       "stop_lat": 43.6168633,
       "stop_lon": -80.1464539,
       "zone_id": 38,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RKWD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00201",
       "stop_name": "University of Guelph",
       "stop_lat": 43.5293732,
       "stop_lon": -80.2252502,
       "zone_id": 39,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GUNI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00200",
       "stop_name": "Syntex Crt. @ Financial Dr.",
       "stop_lat": 43.6098404,
       "stop_lon": -79.7476349,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SYFI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00197",
       "stop_name": "Mississauga Rd. @ Mississauga Rd.",
       "stop_lat": 43.5983543,
       "stop_lon": -79.7387848,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ERIN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00196",
       "stop_name": "Erin Mills Pkwy. @ Turner Valley Rd.",
       "stop_lat": 43.5971031,
       "stop_lon": -79.7390289,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ERIN",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00194",
       "stop_name": "Milton GO Bus",
       "stop_lat": 43.523803,
       "stop_lon": -79.867178,
       "zone_id": 24,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MNGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00191",
       "stop_name": "Aquitaine Ave. @ Meadowvale Town Centre Circle",
       "stop_lat": 43.5847511,
       "stop_lon": -79.7606812,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MDTC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00190",
       "stop_name": "Aquitaine Ave. @ Formentera Ave. (Meadowvale Town Centre)",
       "stop_lat": 43.5842514,
       "stop_lon": -79.7617722,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MDTC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00189",
       "stop_name": "Erindale GO Bus",
       "stop_lat": 43.567861,
       "stop_lon": -79.667632,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ERGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00188",
       "stop_name": "Cooksville GO Bus",
       "stop_lat": 43.58207,
       "stop_lon": -79.623563,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00187",
       "stop_name": "Dixie GO Bus",
       "stop_lat": 43.608022,
       "stop_lon": -79.578347,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DXGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00182",
       "stop_name": "Port Credit GO Bus",
       "stop_lat": 43.555814,
       "stop_lon": -79.587088,
       "zone_id": 11,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PCGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00181",
       "stop_name": "Clarkson GO Bus",
       "stop_lat": 43.512831,
       "stop_lon": -79.633109,
       "zone_id": 12,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CLGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00180",
       "stop_name": "Aldershot GO Bus",
       "stop_lat": 43.313036,
       "stop_lon": -79.855903,
       "zone_id": 17,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=ALGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00178",
       "stop_name": "King St. W. @ Dundurn St. N.",
       "stop_lat": 43.2622643,
       "stop_lon": -79.8875809,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DUND",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00177",
       "stop_name": "Burlington GO",
       "stop_lat": 43.3404415392208,
       "stop_lon": -79.8094994945172,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00174",
       "stop_name": "Dundas St. @ Brock St.",
       "stop_lat": 43.8800888,
       "stop_lon": -78.9416351,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DUBR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00173",
       "stop_name": "Dundas St. @ Brock St.",
       "stop_lat": 43.8796501,
       "stop_lon": -78.9427185,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DUBR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00171",
       "stop_name": "Kingston Rd. @ Sheppard Ave. E.",
       "stop_lat": 43.7995529,
       "stop_lon": -79.1456985,
       "zone_id": 90,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PUNN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00170",
       "stop_name": "Kingston Rd. @ Port Union Rd.",
       "stop_lat": 43.7991524,
       "stop_lon": -79.145546,
       "zone_id": 90,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PUNN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00168",
       "stop_name": "Durham Hwy. 2 @ Courtice Rd.",
       "stop_lat": 43.9115486,
       "stop_lon": -78.7793884,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CRTC",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00167",
       "stop_name": "Durham Hwy. 2 @ Courtice Rd.",
       "stop_lat": 43.9120102,
       "stop_lon": -78.7776337,
       "zone_id": 95,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CRTC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00166",
       "stop_name": "Bond St. W. @ Centre St. N.",
       "stop_lat": 43.898056,
       "stop_lon": -78.8659744,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BDCN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00164",
       "stop_name": "Stevenson Rd. S. @ Cartier Ave.",
       "stop_lat": 43.8903389,
       "stop_lon": -78.88237,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OSCM",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00163",
       "stop_name": "Stevenson Rd. S. @ Cartier Ave.",
       "stop_lat": 43.8897095,
       "stop_lon": -78.8817673,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OSCM",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00161",
       "stop_name": "Ajax GO Bus",
       "stop_lat": 43.847547,
       "stop_lon": -79.041084,
       "zone_id": 92,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AJGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00159",
       "stop_name": "Oshawa GO",
       "stop_lat": 43.870909,
       "stop_lon": -78.88585,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OSGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00158",
       "stop_name": "King St. E. @ Liberty St.",
       "stop_lat": 43.9103699,
       "stop_lon": -78.6810532,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KILB",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00157",
       "stop_name": "King St. E. @ Liberty St.",
       "stop_lat": 43.9107056,
       "stop_lon": -78.6806183,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KILB",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00156",
       "stop_name": "Waverly Rd. @ Baseline Rd.",
       "stop_lat": 43.8978195,
       "stop_lon": -78.6911011,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00155",
       "stop_name": "Waverly Rd. @ Baseline Rd.",
       "stop_lat": 43.8975792,
       "stop_lon": -78.6905899,
       "zone_id": 96,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WVBL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00154",
       "stop_name": "Oshawa Bus Terminal",
       "stop_lat": 43.8978462,
       "stop_lon": -78.865593,
       "zone_id": 94,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OSHW",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00153",
       "stop_name": "University of Ontario Institute of Technology",
       "stop_lat": 43.9433594,
       "stop_lon": -78.8949661,
       "zone_id": 88,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=DURC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00148",
       "stop_name": "Streetsville GO Bus",
       "stop_lat": 43.575378,
       "stop_lon": -79.709271,
       "zone_id": 21,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00147",
       "stop_name": "Pickering GO Bus",
       "stop_lat": 43.830982,
       "stop_lon": -79.084571,
       "zone_id": 91,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00144",
       "stop_name": "University of Toronto Scarborough",
       "stop_lat": 43.7843628,
       "stop_lon": -79.1851273,
       "zone_id": 89,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SCCO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00142",
       "stop_name": "Scarborough Centre Bus Terminal",
       "stop_lat": 43.7748413,
       "stop_lon": -79.2563171,
       "zone_id": "07",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SCAR",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00141",
       "stop_name": "Hamilton GO Centre Bus",
       "stop_lat": 43.252945,
       "stop_lon": -79.869586,
       "zone_id": 18,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HMGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00139",
       "stop_name": "Dundas St. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.3892708,
       "stop_lon": -79.8287811,
       "zone_id": 16,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=D7CL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00138",
       "stop_name": "Bronte Rd. @ Hwy. 407 Park & Ride",
       "stop_lat": 43.4457626,
       "stop_lon": -79.7920151,
       "zone_id": 14,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=B7CL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00137",
       "stop_name": "Oakville GO Bus",
       "stop_lat": 43.455966,
       "stop_lon": -79.681676,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=OKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00136",
       "stop_name": "Trafalgar Rd. @ Upper Middle Rd. E.",
       "stop_lat": 43.4754295,
       "stop_lon": -79.7028046,
       "zone_id": 13,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00133",
       "stop_name": "Square One",
       "stop_lat": 43.5946693,
       "stop_lon": -79.6474915,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=S1TM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00132",
       "stop_name": "Square One",
       "stop_lat": 43.5945549,
       "stop_lon": -79.6475983,
       "zone_id": 20,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=S1TM",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00131",
       "stop_name": "Langstaff Rd. E. @ Yonge St.",
       "stop_lat": 43.8326988,
       "stop_lon": -79.427536,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00130",
       "stop_name": "Langstaff Rd. E. @ Yonge St.",
       "stop_lat": 43.8325882,
       "stop_lon": -79.4272537,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00129",
       "stop_name": "Meadowvale GO Bus",
       "stop_lat": 43.597499,
       "stop_lon": -79.754517,
       "zone_id": 22,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MDGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00128",
       "stop_name": "Unionville GO Bus",
       "stop_lat": 43.851935,
       "stop_lon": -79.313774,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=UVGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00127",
       "stop_name": "Bullock Dr. @ Austin Dr.",
       "stop_lat": 43.8673248,
       "stop_lon": -79.292511,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00126",
       "stop_name": "Bullock Dr. @ Austin Dr.",
       "stop_lat": 43.8676033,
       "stop_lon": -79.2930374,
       "zone_id": 71,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00125",
       "stop_name": "Bullock Drive @ McCowan Road (Centennial GO)",
       "stop_lat": 43.87161,
       "stop_lon": -79.28832,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CEGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00124",
       "stop_name": "Bullock Drive @ McCowan Road (Centennial GO)",
       "stop_lat": 43.8720551,
       "stop_lon": -79.2881393,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CEGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00123",
       "stop_name": "Main St. N. @ Ramona Blvd. (Markham GO)",
       "stop_lat": 43.8828239,
       "stop_lon": -79.2618408,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00122",
       "stop_name": "Main St. N. @ Station St. (Markham GO)",
       "stop_lat": 43.88255,
       "stop_lon": -79.26191,
       "zone_id": 72,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MKGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00121",
       "stop_name": "Mount Joy GO Bus",
       "stop_lat": 43.900455,
       "stop_lon": -79.263649,
       "zone_id": 73,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MJGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00118",
       "stop_name": "Main St. @ Edward St. (Stouffville GO)",
       "stop_lat": 43.97041,
       "stop_lon": -79.25075,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00117",
       "stop_name": "Main St. @ Edward St. (Stouffville GO)",
       "stop_lat": 43.9706841,
       "stop_lon": -79.2501831,
       "zone_id": 74,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SVGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00116",
       "stop_name": "Hwy. 47 @ Front St.",
       "stop_lat": 44.0369034,
       "stop_lon": -79.1964798,
       "zone_id": 75,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GDWD",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00115",
       "stop_name": "Hwy. 47 @ Front St.",
       "stop_lat": 44.0375214,
       "stop_lon": -79.1956329,
       "zone_id": 75,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=GDWD",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00096",
       "stop_name": "Barrie Transit Terminal",
       "stop_lat": 44.3881798,
       "stop_lon": -79.6908798,
       "zone_id": 69,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BARI",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00093",
       "stop_name": "Yonge St. @ Mapleview Dr. E.",
       "stop_lat": 44.3486099,
       "stop_lon": -79.6277084,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00092",
       "stop_name": "Yonge St. @ Mapleview Dr. E.",
       "stop_lat": 44.3481598,
       "stop_lon": -79.6270218,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00090",
       "stop_name": "Yonge St. @ Victoria St.",
       "stop_lat": 44.3241806,
       "stop_lon": -79.6191483,
       "zone_id": 68,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=STRD",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00087",
       "stop_name": "Yonge St. @ Killarney Beach Rd.",
       "stop_lat": 44.2514305,
       "stop_lon": -79.6007919,
       "zone_id": 67,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CHIL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00084",
       "stop_name": "Yonge St. @ Queen St.",
       "stop_lat": 44.0951653,
       "stop_lon": -79.4901352,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HLDG",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00083",
       "stop_name": "Yonge St. @ Mount Albert Rd.",
       "stop_lat": 44.0952721,
       "stop_lon": -79.4899673,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=HLDG",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00081",
       "stop_name": "Aurora GO Bus",
       "stop_lat": 43.999846,
       "stop_lon": -79.459435,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=AUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00079",
       "stop_name": "Yonge St. @ North York Blvd. (Mel Lastman Square)",
       "stop_lat": 43.7681007,
       "stop_lon": -79.4128571,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00074",
       "stop_name": "Yonge St. @ Steeles Ave. W.",
       "stop_lat": 43.7986336,
       "stop_lon": -79.4200897,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00073",
       "stop_name": "Yonge St. @ Steeles Ave. W.",
       "stop_lat": 43.7982216,
       "stop_lon": -79.4202805,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00068",
       "stop_name": "Yonge St. @ Wellington St. E.",
       "stop_lat": 44.0001221,
       "stop_lon": -79.4675293,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00066",
       "stop_name": "Yonge St. @ Batson Dr.",
       "stop_lat": 44.0088387,
       "stop_lon": -79.4696503,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00065",
       "stop_name": "Yonge St. @ Orchard Heights Blvd.",
       "stop_lat": 44.0083923,
       "stop_lon": -79.4698944,
       "zone_id": 63,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00064",
       "stop_name": "Yonge St. @ Savage Rd.",
       "stop_lat": 44.0326271,
       "stop_lon": -79.4750137,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00063",
       "stop_name": "Yonge St. @ Savage Rd.",
       "stop_lat": 44.0264473,
       "stop_lon": -79.4736099,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00062",
       "stop_name": "Richmond Hill GO Bus",
       "stop_lat": 43.875786,
       "stop_lon": -79.426228,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RHGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00061",
       "stop_name": "Langstaff Rd. E. @ Cedar Ave. (Langstaff GO)",
       "stop_lat": 43.83663,
       "stop_lon": -79.42024,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00060",
       "stop_name": "Langstaff Rd. E. @ Cedar Ave. (Langstaff GO)",
       "stop_lat": 43.836455,
       "stop_lon": -79.420243,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=LNGO",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00054",
       "stop_name": "Bramalea GO",
       "stop_lat": 43.70215,
       "stop_lon": -79.689512,
       "zone_id": 32,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BLGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00053",
       "stop_name": "Canada's Wonderland",
       "stop_lat": 43.84605,
       "stop_lon": -79.54039,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WNDR",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00051",
       "stop_name": "Brock St. @ Dundas St.",
       "stop_lat": 43.8799286,
       "stop_lon": -78.9423141,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=12MA",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00050",
       "stop_name": "Winchester Rd. @ Anderson St.",
       "stop_lat": 43.9564133,
       "stop_lon": -78.947403,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRKL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00049",
       "stop_name": "Hwy. 7 & 12 @ Myrtle Rd. W.",
       "stop_lat": 44.0092125,
       "stop_lon": -78.9661865,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MYRT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00047",
       "stop_name": "Reach St. @ Old Simcoe Rd.",
       "stop_lat": 44.1110764,
       "stop_lon": -78.9577103,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=REAC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00046",
       "stop_name": "Hwy. 7 & 12 @ Cragg Rd.",
       "stop_lat": 44.1520348,
       "stop_lon": -79.0150986,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BANK",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00044",
       "stop_name": "Cameron St. W. @ Ann St. S.",
       "stop_lat": 44.3495827,
       "stop_lon": -79.0402679,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=CANN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00043",
       "stop_name": "Simcoe St. @ Mara Rd.",
       "stop_lat": 44.4297562,
       "stop_lon": -79.1545715,
       "zone_id": 55,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BEAV",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00038",
       "stop_name": "Albert St. S. @ River St.",
       "stop_lat": 44.2626152,
       "stop_lon": -79.0662231,
       "zone_id": 54,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SUND",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00037",
       "stop_name": "Hwy. 7 & 12 @ Cragg Rd.",
       "stop_lat": 44.1518021,
       "stop_lon": -79.0146027,
       "zone_id": 53,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BANK",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00036",
       "stop_name": "Reach St. @ Old Simcoe Rd.",
       "stop_lat": 44.1109772,
       "stop_lon": -78.9576492,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=REAC",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00035",
       "stop_name": "Curt St. @ Water St.",
       "stop_lat": 44.102253,
       "stop_lon": -78.9384842,
       "zone_id": 52,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=PORT",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00034",
       "stop_name": "Hwy. 7 & 12 @ Myrtle Rd. E.",
       "stop_lat": 44.009201,
       "stop_lon": -78.9660034,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=MYRT",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00033",
       "stop_name": "Winchester Rd. @ Watford St.",
       "stop_lat": 43.9566841,
       "stop_lon": -78.9469223,
       "zone_id": 51,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRKL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00032",
       "stop_name": "Brock St. @ Dundas St.",
       "stop_lat": 43.8796806,
       "stop_lon": -78.9420319,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=12MA",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00031",
       "stop_name": "Whitby GO Bus",
       "stop_lat": 43.8653526,
       "stop_lon": -78.9379272,
       "zone_id": 93,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=WHGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00030",
       "stop_name": "Keele St. @ Burton Grove (King City GO)",
       "stop_lat": 43.9208336,
       "stop_lon": -79.5259781,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00029",
       "stop_name": "York University",
       "stop_lat": 43.7730637,
       "stop_lon": -79.5009308,
       "zone_id": 19,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YRKU",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00028",
       "stop_name": "Rutherford GO Bus",
       "stop_lat": 43.838582,
       "stop_lon": -79.498945,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=RUGO",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00027",
       "stop_name": "Keele St. @ Station Rd.(King City GO)",
       "stop_lat": 43.9203224,
       "stop_lon": -79.5260773,
       "zone_id": 62,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00025",
       "stop_name": "Barrie St. @ Holland St. W.",
       "stop_lat": 44.1146889,
       "stop_lon": -79.565094,
       "zone_id": 65,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=BRAD",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00022",
       "stop_name": "Keele St. @ Hwy. 401",
       "stop_lat": 43.7216759,
       "stop_lon": -79.4808273,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KEEL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00021",
       "stop_name": "Hwy. 9 @ Hwy. 400 Park & Ride",
       "stop_lat": 44.0275345,
       "stop_lon": -79.5959473,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=9400",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00020",
       "stop_name": "Hwy. 401 @ Keele St.",
       "stop_lat": 43.7232399,
       "stop_lon": -79.4819412,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=KEEL",
       "location_type": "0",
       "wheelchair_boarding": 2
    },
    {
       "stop_id": "00019",
       "stop_name": "Yorkdale Bus Terminal",
       "stop_lat": 43.7249374,
       "stop_lon": -79.4488754,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YKDL",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00015",
       "stop_name": "Yonge St. @ 16th Ave. (South Hill Shopping Centre)",
       "stop_lat": 43.8551788,
       "stop_lon": -79.4333191,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00014",
       "stop_name": "Yonge St. @ Langstaff Rd. E.",
       "stop_lat": 43.8323288,
       "stop_lon": -79.4280472,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YLAN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00013",
       "stop_name": "Finch Bus Terminal",
       "stop_lat": 43.7821732,
       "stop_lon": -79.4150925,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=FNCH",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00011",
       "stop_name": "York Mills Bus Terminal",
       "stop_lat": 43.745079,
       "stop_lon": -79.4064636,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YKML",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00008",
       "stop_name": "Yonge St. @ Sheppard Ave.",
       "stop_lat": 43.7615967,
       "stop_lon": -79.4111938,
       "zone_id": "05",
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=SHEP",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00006",
       "stop_name": "Yonge St. @ Hwy. 407",
       "stop_lat": 43.8319817,
       "stop_lon": -79.4283829,
       "zone_id": 60,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=YLAN",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00005",
       "stop_name": "Yonge St. @ Baif Blvd. (Hillcrest Mall)",
       "stop_lat": 43.8557549,
       "stop_lon": -79.433876,
       "zone_id": 61,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/citylocations.aspx",
       "location_type": "0",
       "wheelchair_boarding": 1
    },
    {
       "stop_id": "00001",
       "stop_name": "Newmarket GO Bus Terminal",
       "stop_lat": 44.0527344,
       "stop_lon": -79.4865799,
       "zone_id": 64,
       "stop_url": "http://www.gotransit.com/publicroot/en/travelling/stations.aspx?station=NMKT",
       "location_type": "0",
       "wheelchair_boarding": 1
    }
  ]

  return { stations: stations };
} ());