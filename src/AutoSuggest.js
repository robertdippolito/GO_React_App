import React, { Component } from 'react';
import 'semantic-ui/dist/semantic.css';
import AutoSuggest from 'react-autosuggest';

const theme = {
  input: {
    width: 'auto'
  },
  inputFocused: {
    outline: 'none'
  },
  inputOpen: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  suggestionsContainer: {
    display: 'none'
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    top: 51,
    width: 280,
    border: '1px solid #aaa',
    backgroundColor: '#fff',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 300,
    fontSize: 16,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    zIndex: 2
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  suggestion: {
    cursor: 'pointer',
    padding: '10px 20px'
  },
  suggestionHighlighted: {
    backgroundColor: '#ddd'
  }
}

const stations = [
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
];

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : stations.filter(station =>
    station.stop_name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.stop_name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div className='ui list'>
    {suggestion.stop_name}
  </div>
);

const renderInputComponent = inputProps => (
  <div className="ui icon input">
      <input type='text' {...inputProps}></input>
    <i className="search icon"></i>
  </div>
);

class myAutoSuggest extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.displayValue(newValue);
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

// Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for the closest station...',
      value,
      onChange: this.onChange,
    };

    return (
      <div className='ui input'>
        <AutoSuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
          renderInputComponent={renderInputComponent}
          theme={theme}
        />
      </div>
    );
  }
}

export default myAutoSuggest;
