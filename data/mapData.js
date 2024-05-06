import applicationsData from "./applications.js"
const cityCoordinates = [
    {
        "state": "NY",
        "city": "New York",
        "lat": 40.6943,
        "lng": -73.9249
    },
    {
        "state": "CA",
        "city": "Los Angeles",
        "lat": 34.1141,
        "lng": -118.4068
    },
    {
        "state": "IL",
        "city": "Chicago",
        "lat": 41.8375,
        "lng": -87.6866
    },
    {
        "state": "FL",
        "city": "Miami",
        "lat": 25.784,
        "lng": -80.2101
    },
    {
        "state": "TX",
        "city": "Houston",
        "lat": 29.786,
        "lng": -95.3885
    },
    {
        "state": "TX",
        "city": "Dallas",
        "lat": 32.7935,
        "lng": -96.7667
    },
    {
        "state": "PA",
        "city": "Philadelphia",
        "lat": 40.0077,
        "lng": -75.1339
    },
    {
        "state": "GA",
        "city": "Atlanta",
        "lat": 33.7628,
        "lng": -84.422
    },
    {
        "state": "DC",
        "city": "Washington",
        "lat": 38.9047,
        "lng": -77.0163
    },
    {
        "state": "MA",
        "city": "Boston",
        "lat": 42.3188,
        "lng": -71.0852
    },
    {
        "state": "AZ",
        "city": "Phoenix",
        "lat": 33.5722,
        "lng": -112.0892
    },
    {
        "state": "MI",
        "city": "Detroit",
        "lat": 42.3834,
        "lng": -83.1024
    },
    {
        "state": "WA",
        "city": "Seattle",
        "lat": 47.6211,
        "lng": -122.3244
    },
    {
        "state": "CA",
        "city": "San Francisco",
        "lat": 37.7558,
        "lng": -122.4449
    },
    {
        "state": "CA",
        "city": "San Diego",
        "lat": 32.8313,
        "lng": -117.1222
    },
    {
        "state": "MN",
        "city": "Minneapolis",
        "lat": 44.9635,
        "lng": -93.2678
    },
    {
        "state": "FL",
        "city": "Tampa",
        "lat": 27.9945,
        "lng": -82.4447
    },
    {
        "state": "NY",
        "city": "Brooklyn",
        "lat": 40.6501,
        "lng": -73.9496
    },
    {
        "state": "CO",
        "city": "Denver",
        "lat": 39.762,
        "lng": -104.8758
    },
    {
        "state": "NY",
        "city": "Queens",
        "lat": 40.7498,
        "lng": -73.7976
    },
    {
        "state": "CA",
        "city": "Riverside",
        "lat": 33.9381,
        "lng": -117.3949
    },
    {
        "state": "NV",
        "city": "Las Vegas",
        "lat": 36.2333,
        "lng": -115.2654
    },
    {
        "state": "MD",
        "city": "Baltimore",
        "lat": 39.3051,
        "lng": -76.6144
    },
    {
        "state": "MO",
        "city": "St. Louis",
        "lat": 38.6359,
        "lng": -90.2451
    },
    {
        "state": "OR",
        "city": "Portland",
        "lat": 45.5371,
        "lng": -122.65
    },
    {
        "state": "TX",
        "city": "San Antonio",
        "lat": 29.4632,
        "lng": -98.5238
    },
    {
        "state": "CA",
        "city": "Sacramento",
        "lat": 38.5677,
        "lng": -121.4685
    },
    {
        "state": "TX",
        "city": "Austin",
        "lat": 30.3005,
        "lng": -97.7522
    },
    {
        "state": "FL",
        "city": "Orlando",
        "lat": 28.4773,
        "lng": -81.337
    },
    {
        "state": "PR",
        "city": "San Juan",
        "lat": 18.3985,
        "lng": -66.061
    },
    {
        "state": "CA",
        "city": "San Jose",
        "lat": 37.3012,
        "lng": -121.848
    },
    {
        "state": "PA",
        "city": "Pittsburgh",
        "lat": 40.4397,
        "lng": -79.9763
    },
    {
        "state": "IN",
        "city": "Indianapolis",
        "lat": 39.7771,
        "lng": -86.1458
    },
    {
        "state": "NY",
        "city": "Manhattan",
        "lat": 40.7834,
        "lng": -73.9662
    },
    {
        "state": "OH",
        "city": "Cincinnati",
        "lat": 39.1413,
        "lng": -84.506
    },
    {
        "state": "MO",
        "city": "Kansas City",
        "lat": 39.1238,
        "lng": -94.5541
    },
    {
        "state": "OH",
        "city": "Cleveland",
        "lat": 41.4764,
        "lng": -81.6805
    },
    {
        "state": "OH",
        "city": "Columbus",
        "lat": 39.9862,
        "lng": -82.9855
    },
    {
        "state": "NY",
        "city": "Bronx",
        "lat": 40.8501,
        "lng": -73.8662
    },
    {
        "state": "VA",
        "city": "Virginia Beach",
        "lat": 36.7335,
        "lng": -76.0435
    },
    {
        "state": "NC",
        "city": "Charlotte",
        "lat": 35.2083,
        "lng": -80.8303
    },
    {
        "state": "WI",
        "city": "Milwaukee",
        "lat": 43.0642,
        "lng": -87.9675
    },
    {
        "state": "RI",
        "city": "Providence",
        "lat": 41.823,
        "lng": -71.4187
    },
    {
        "state": "FL",
        "city": "Jacksonville",
        "lat": 30.3322,
        "lng": -81.6749
    },
    {
        "state": "TN",
        "city": "Nashville",
        "lat": 36.1715,
        "lng": -86.7842
    },
    {
        "state": "UT",
        "city": "Salt Lake City",
        "lat": 40.7776,
        "lng": -111.9311
    },
    {
        "state": "NC",
        "city": "Raleigh",
        "lat": 35.8324,
        "lng": -78.6429
    },
    {
        "state": "VA",
        "city": "Richmond",
        "lat": 37.5295,
        "lng": -77.4756
    },
    {
        "state": "TN",
        "city": "Memphis",
        "lat": 35.1087,
        "lng": -89.9663
    },
    {
        "state": "OK",
        "city": "Oklahoma City",
        "lat": 35.4676,
        "lng": -97.5136
    },
    {
        "state": "CT",
        "city": "Hartford",
        "lat": 41.7661,
        "lng": -72.6834
    },
    {
        "state": "KY",
        "city": "Louisville",
        "lat": 38.1663,
        "lng": -85.6485
    },
    {
        "state": "NY",
        "city": "Buffalo",
        "lat": 42.9018,
        "lng": -78.8487
    },
    {
        "state": "LA",
        "city": "New Orleans",
        "lat": 30.0687,
        "lng": -89.9288
    },
    {
        "state": "TX",
        "city": "Fort Worth",
        "lat": 32.7817,
        "lng": -97.3474
    },
    {
        "state": "CT",
        "city": "Bridgeport",
        "lat": 41.1918,
        "lng": -73.1954
    },
    {
        "state": "AZ",
        "city": "Tucson",
        "lat": 32.1541,
        "lng": -110.8787
    },
    {
        "state": "TX",
        "city": "El Paso",
        "lat": 31.8476,
        "lng": -106.43
    },
    {
        "state": "NE",
        "city": "Omaha",
        "lat": 41.2627,
        "lng": -96.0529
    },
    {
        "state": "TX",
        "city": "McAllen",
        "lat": 26.2252,
        "lng": -98.2467
    },
    {
        "state": "AL",
        "city": "Birmingham",
        "lat": 33.5279,
        "lng": -86.7971
    },
    {
        "state": "NM",
        "city": "Albuquerque",
        "lat": 35.1054,
        "lng": -106.6465
    },
    {
        "state": "OK",
        "city": "Tulsa",
        "lat": 36.1283,
        "lng": -95.9042
    },
    {
        "state": "CA",
        "city": "Fresno",
        "lat": 36.783,
        "lng": -119.7939
    },
    {
        "state": "SC",
        "city": "Charleston",
        "lat": 32.8168,
        "lng": -79.9687
    },
    {
        "state": "NY",
        "city": "Rochester",
        "lat": 43.168,
        "lng": -77.6162
    },
    {
        "state": "OH",
        "city": "Dayton",
        "lat": 39.7805,
        "lng": -84.2003
    },
    {
        "state": "FL",
        "city": "Cape Coral",
        "lat": 26.6443,
        "lng": -81.9957
    },
    {
        "state": "CA",
        "city": "Mission Viejo",
        "lat": 33.6096,
        "lng": -117.6551
    },
    {
        "state": "CO",
        "city": "Colorado Springs",
        "lat": 38.8674,
        "lng": -104.7605
    },
    {
        "state": "LA",
        "city": "Baton Rouge",
        "lat": 30.442,
        "lng": -91.1311
    },
    {
        "state": "PA",
        "city": "Allentown",
        "lat": 40.5961,
        "lng": -75.4756
    },
    {
        "state": "UT",
        "city": "Ogden",
        "lat": 41.2279,
        "lng": -111.9682
    },
    {
        "state": "UT",
        "city": "Provo",
        "lat": 40.2457,
        "lng": -111.6457
    },
    {
        "state": "TN",
        "city": "Knoxville",
        "lat": 35.9692,
        "lng": -83.9496
    },
    {
        "state": "MI",
        "city": "Grand Rapids",
        "lat": 42.9619,
        "lng": -85.6562
    },
    {
        "state": "SC",
        "city": "Columbia",
        "lat": 34.0378,
        "lng": -80.9036
    },
    {
        "state": "NY",
        "city": "Albany",
        "lat": 42.6664,
        "lng": -73.7987
    },
    {
        "state": "CA",
        "city": "Bakersfield",
        "lat": 35.3529,
        "lng": -119.0359
    },
    {
        "state": "CT",
        "city": "New Haven",
        "lat": 41.3113,
        "lng": -72.9246
    },
    {
        "state": "IA",
        "city": "Des Moines",
        "lat": 41.5725,
        "lng": -93.6105
    },
    {
        "state": "OH",
        "city": "Akron",
        "lat": 41.0798,
        "lng": -81.5219
    },
    {
        "state": "FL",
        "city": "Palm Bay",
        "lat": 27.9631,
        "lng": -80.6593
    },
    {
        "state": "CA",
        "city": "Concord",
        "lat": 37.9722,
        "lng": -122.0016
    },
    {
        "state": "KS",
        "city": "Wichita",
        "lat": 37.6895,
        "lng": -97.3443
    },
    {
        "state": "AZ",
        "city": "Mesa",
        "lat": 33.4015,
        "lng": -111.7178
    },
    {
        "state": "PA",
        "city": "Harrisburg",
        "lat": 40.2752,
        "lng": -76.8843
    },
    {
        "state": "NY",
        "city": "Staten Island",
        "lat": 40.5834,
        "lng": -74.1496
    },
    {
        "state": "OH",
        "city": "Toledo",
        "lat": 41.6638,
        "lng": -83.5827
    },
    {
        "state": "MA",
        "city": "Worcester",
        "lat": 42.2705,
        "lng": -71.8079
    },
    {
        "state": "CA",
        "city": "Long Beach",
        "lat": 33.7977,
        "lng": -118.167
    },
    {
        "state": "FL",
        "city": "Port St. Lucie",
        "lat": 27.2796,
        "lng": -80.3884
    },
    {
        "state": "AR",
        "city": "Little Rock",
        "lat": 34.7256,
        "lng": -92.3577
    },
    {
        "state": "NV",
        "city": "Reno",
        "lat": 39.5497,
        "lng": -119.8483
    },
    {
        "state": "WA",
        "city": "Spokane",
        "lat": 47.6671,
        "lng": -117.433
    },
    {
        "state": "WI",
        "city": "Madison",
        "lat": 43.0822,
        "lng": -89.393
    },
    {
        "state": "ID",
        "city": "Boise",
        "lat": 43.6005,
        "lng": -116.2308
    },
    {
        "state": "FL",
        "city": "Bonita Springs",
        "lat": 26.3558,
        "lng": -81.7859
    },
    {
        "state": "TX",
        "city": "Denton",
        "lat": 33.2175,
        "lng": -97.1418
    },
    {
        "state": "CA",
        "city": "Oakland",
        "lat": 37.7904,
        "lng": -122.2166
    },
    {
        "state": "MA",
        "city": "Springfield",
        "lat": 42.1155,
        "lng": -72.5395
    },
    {
        "state": "GA",
        "city": "Augusta",
        "lat": 33.3645,
        "lng": -82.0708
    },
    {
        "state": "FL",
        "city": "Kissimmee",
        "lat": 28.3041,
        "lng": -81.4169
    },
    {
        "state": "NC",
        "city": "Winston-Salem",
        "lat": 36.1029,
        "lng": -80.261
    },
    {
        "state": "CA",
        "city": "Stockton",
        "lat": 37.9765,
        "lng": -121.3109
    },
    {
        "state": "NY",
        "city": "Syracuse",
        "lat": 43.0407,
        "lng": -76.1437
    },
    {
        "state": "TN",
        "city": "Chattanooga",
        "lat": 35.066,
        "lng": -85.2481
    },
    {
        "state": "PA",
        "city": "Lancaster",
        "lat": 40.042,
        "lng": -76.3012
    },
    {
        "state": "SC",
        "city": "Greenville",
        "lat": 34.8354,
        "lng": -82.3646
    },
    {
        "state": "NC",
        "city": "Durham",
        "lat": 35.9792,
        "lng": -78.9022
    },
    {
        "state": "FL",
        "city": "Pensacola",
        "lat": 30.4413,
        "lng": -87.1911
    },
    {
        "state": "AR",
        "city": "Fayetteville",
        "lat": 36.0714,
        "lng": -94.1661
    },
    {
        "state": "TX",
        "city": "Arlington",
        "lat": 32.6998,
        "lng": -97.125
    },
    {
        "state": "CO",
        "city": "Aurora",
        "lat": 39.7083,
        "lng": -104.7237
    },
    {
        "state": "CA",
        "city": "Oxnard",
        "lat": 34.1964,
        "lng": -119.1815
    },
    {
        "state": "CA",
        "city": "Indio",
        "lat": 33.7346,
        "lng": -116.2346
    },
    {
        "state": "PA",
        "city": "Scranton",
        "lat": 41.4044,
        "lng": -75.6649
    },
    {
        "state": "CA",
        "city": "Victorville",
        "lat": 34.5277,
        "lng": -117.3536
    },
    {
        "state": "NJ",
        "city": "Trenton",
        "lat": 40.2237,
        "lng": -74.7641
    },
    {
        "state": "CA",
        "city": "Modesto",
        "lat": 37.6375,
        "lng": -121.0028
    },
    {
        "state": "AL",
        "city": "Huntsville",
        "lat": 34.6981,
        "lng": -86.6412
    },
    {
        "state": "HI",
        "city": "Honolulu",
        "lat": 21.3294,
        "lng": -157.846
    },
    {
        "state": "NC",
        "city": "Greensboro",
        "lat": 36.0956,
        "lng": -79.8271
    },
    {
        "state": "CA",
        "city": "Anaheim",
        "lat": 33.839,
        "lng": -117.8574
    },
    {
        "state": "TX",
        "city": "Corpus Christi",
        "lat": 27.7254,
        "lng": -97.3767
    },
    {
        "state": "IN",
        "city": "Fort Wayne",
        "lat": 41.0888,
        "lng": -85.1436
    },
    {
        "state": "CO",
        "city": "Fort Collins",
        "lat": 40.5477,
        "lng": -105.0656
    },
    {
        "state": "MS",
        "city": "Jackson",
        "lat": 32.3157,
        "lng": -90.2125
    },
    {
        "state": "SC",
        "city": "Myrtle Beach",
        "lat": 33.7094,
        "lng": -78.8844
    },
    {
        "state": "NC",
        "city": "Fayetteville",
        "lat": 35.085,
        "lng": -78.9772
    },
    {
        "state": "CA",
        "city": "Antioch",
        "lat": 37.9787,
        "lng": -121.796
    },
    {
        "state": "MI",
        "city": "Lansing",
        "lat": 42.7142,
        "lng": -84.5601
    },
    {
        "state": "KY",
        "city": "Lexington",
        "lat": 38.0423,
        "lng": -84.4587
    },
    {
        "state": "AL",
        "city": "Mobile",
        "lat": 30.6782,
        "lng": -88.1162
    },
    {
        "state": "OH",
        "city": "Youngstown",
        "lat": 41.0993,
        "lng": -80.6463
    },
    {
        "state": "NV",
        "city": "Henderson",
        "lat": 36.0133,
        "lng": -115.0381
    },
    {
        "state": "GA",
        "city": "Savannah",
        "lat": 32.0286,
        "lng": -81.1821
    },
    {
        "state": "NY",
        "city": "Poughkeepsie",
        "lat": 41.695,
        "lng": -73.9211
    },
    {
        "state": "CA",
        "city": "Santa Ana",
        "lat": 33.7367,
        "lng": -117.8819
    },
    {
        "state": "MI",
        "city": "Ann Arbor",
        "lat": 42.2759,
        "lng": -83.731
    },
    {
        "state": "MN",
        "city": "St. Paul",
        "lat": 44.9478,
        "lng": -93.1039
    },
    {
        "state": "NJ",
        "city": "Newark",
        "lat": 40.7245,
        "lng": -74.1725
    },
    {
        "state": "CA",
        "city": "Irvine",
        "lat": 33.6772,
        "lng": -117.7738
    },
    {
        "state": "CA",
        "city": "Santa Rosa",
        "lat": 38.4458,
        "lng": -122.7067
    },
    {
        "state": "OH",
        "city": "Canton",
        "lat": 40.8078,
        "lng": -81.3676
    },
    {
        "state": "NC",
        "city": "Asheville",
        "lat": 35.5707,
        "lng": -82.5537
    },
    {
        "state": "MI",
        "city": "Flint",
        "lat": 43.0236,
        "lng": -83.6921
    },
    {
        "state": "FL",
        "city": "Winter Haven",
        "lat": 28.0118,
        "lng": -81.7014
    },
    {
        "state": "AK",
        "city": "Anchorage",
        "lat": 61.1508,
        "lng": -149.1091
    },
    {
        "state": "NE",
        "city": "Lincoln",
        "lat": 40.8099,
        "lng": -96.6784
    },
    {
        "state": "NC",
        "city": "Concord",
        "lat": 35.3933,
        "lng": -80.6369
    },
    {
        "state": "NJ",
        "city": "Jersey City",
        "lat": 40.7184,
        "lng": -74.0686
    },
    {
        "state": "MO",
        "city": "Springfield",
        "lat": 37.1943,
        "lng": -93.2916
    },
    {
        "state": "TX",
        "city": "Plano",
        "lat": 33.0502,
        "lng": -96.7486
    },
    {
        "state": "LA",
        "city": "Shreveport",
        "lat": 32.4653,
        "lng": -93.7955
    },
    {
        "state": "IA",
        "city": "Davenport",
        "lat": 41.5565,
        "lng": -90.6053
    },
    {
        "state": "TX",
        "city": "Lubbock",
        "lat": 33.5657,
        "lng": -101.8879
    },
    {
        "state": "FL",
        "city": "Lakeland",
        "lat": 28.0557,
        "lng": -81.9545
    },
    {
        "state": "IN",
        "city": "South Bend",
        "lat": 41.6767,
        "lng": -86.2696
    },
    {
        "state": "CA",
        "city": "Chula Vista",
        "lat": 32.6281,
        "lng": -117.0144
    },
    {
        "state": "AZ",
        "city": "Chandler",
        "lat": 33.2825,
        "lng": -111.8514
    },
    {
        "state": "IL",
        "city": "Rockford",
        "lat": 42.2596,
        "lng": -89.064
    },
    {
        "state": "PA",
        "city": "Reading",
        "lat": 40.34,
        "lng": -75.9267
    },
    {
        "state": "OR",
        "city": "Eugene",
        "lat": 44.0564,
        "lng": -123.1174
    },
    {
        "state": "NC",
        "city": "Wilmington",
        "lat": 34.2099,
        "lng": -77.8866
    },
    {
        "state": "CA",
        "city": "Santa Clarita",
        "lat": 34.4175,
        "lng": -118.4964
    },
    {
        "state": "AZ",
        "city": "Gilbert",
        "lat": 33.31,
        "lng": -111.7463
    },
    {
        "state": "OR",
        "city": "Salem",
        "lat": 44.9233,
        "lng": -123.0244
    },
    {
        "state": "TX",
        "city": "Killeen",
        "lat": 31.0753,
        "lng": -97.7297
    },
    {
        "state": "IL",
        "city": "Round Lake Beach",
        "lat": 42.3791,
        "lng": -88.0811
    },
    {
        "state": "GA",
        "city": "Columbus",
        "lat": 32.51,
        "lng": -84.8771
    },
    {
        "state": "NV",
        "city": "North Las Vegas",
        "lat": 36.2883,
        "lng": -115.0888
    },
    {
        "state": "WA",
        "city": "Kennewick",
        "lat": 46.1978,
        "lng": -119.1732
    },
    {
        "state": "FL",
        "city": "St. Petersburg",
        "lat": 27.7931,
        "lng": -82.6652
    },
    {
        "state": "FL",
        "city": "Tallahassee",
        "lat": 30.4551,
        "lng": -84.2527
    },
    {
        "state": "TX",
        "city": "Laredo",
        "lat": 27.5625,
        "lng": -99.4874
    },
    {
        "state": "TX",
        "city": "Irving",
        "lat": 32.8583,
        "lng": -96.9702
    },
    {
        "state": "IL",
        "city": "Peoria",
        "lat": 40.752,
        "lng": -89.6154
    },
    {
        "state": "AL",
        "city": "Montgomery",
        "lat": 32.3482,
        "lng": -86.2668
    },
    {
        "state": "VA",
        "city": "Chesapeake",
        "lat": 36.6778,
        "lng": -76.3023
    },
    {
        "state": "AZ",
        "city": "Glendale",
        "lat": 33.5791,
        "lng": -112.2311
    },
    {
        "state": "PA",
        "city": "York",
        "lat": 39.9651,
        "lng": -76.7315
    },
    {
        "state": "NH",
        "city": "Nashua",
        "lat": 42.7491,
        "lng": -71.491
    },
    {
        "state": "TX",
        "city": "Garland",
        "lat": 32.91,
        "lng": -96.6304
    },
    {
        "state": "AZ",
        "city": "Scottsdale",
        "lat": 33.6872,
        "lng": -111.8651
    },
    {
        "state": "LA",
        "city": "Lafayette",
        "lat": 30.2082,
        "lng": -92.0325
    },
    {
        "state": "VA",
        "city": "Norfolk",
        "lat": 36.8945,
        "lng": -76.259
    },
    {
        "state": "VA",
        "city": "Arlington",
        "lat": 38.8786,
        "lng": -77.1011
    },
    {
        "state": "WI",
        "city": "Appleton",
        "lat": 44.278,
        "lng": -88.3892
    },
    {
        "state": "PR",
        "city": "Aguadilla",
        "lat": 18.4382,
        "lng": -67.1537
    },
    {
        "state": "SC",
        "city": "Rock Hill",
        "lat": 34.9415,
        "lng": -81.0241
    },
    {
        "state": "CA",
        "city": "Fremont",
        "lat": 37.5265,
        "lng": -121.9843
    },
    {
        "state": "ND",
        "city": "Fargo",
        "lat": 46.8651,
        "lng": -96.8292
    },
    {
        "state": "MS",
        "city": "Gulfport",
        "lat": 30.4274,
        "lng": -89.0704
    },
    {
        "state": "WA",
        "city": "Bremerton",
        "lat": 47.5436,
        "lng": -122.7121
    },
    {
        "state": "WI",
        "city": "Green Bay",
        "lat": 44.5148,
        "lng": -87.9895
    },
    {
        "state": "NV",
        "city": "Enterprise",
        "lat": 36.0091,
        "lng": -115.2278
    },
    {
        "state": "FL",
        "city": "Hialeah",
        "lat": 25.8696,
        "lng": -80.3045
    },
    {
        "state": "FL",
        "city": "Deltona",
        "lat": 28.905,
        "lng": -81.2137
    },
    {
        "state": "CA",
        "city": "San Bernardino",
        "lat": 34.1416,
        "lng": -117.2943
    },
    {
        "state": "FL",
        "city": "Gainesville",
        "lat": 29.6804,
        "lng": -82.3459
    },
    {
        "state": "NV",
        "city": "Spring Valley",
        "lat": 36.0952,
        "lng": -115.2636
    },
    {
        "state": "WA",
        "city": "Tacoma",
        "lat": 47.2431,
        "lng": -122.4531
    },
    {
        "state": "VA",
        "city": "Roanoke",
        "lat": 37.2785,
        "lng": -79.9581
    },
    {
        "state": "TX",
        "city": "Brownsville",
        "lat": 25.9975,
        "lng": -97.458
    },
    {
        "state": "TX",
        "city": "College Station",
        "lat": 30.5852,
        "lng": -96.2959
    },
    {
        "state": "WA",
        "city": "Olympia",
        "lat": 47.0417,
        "lng": -122.8959
    },
    {
        "state": "TN",
        "city": "Clarksville",
        "lat": 36.5692,
        "lng": -87.3413
    },
    {
        "state": "NY",
        "city": "Yonkers",
        "lat": 40.9466,
        "lng": -73.8673
    },
    {
        "state": "CA",
        "city": "Moreno Valley",
        "lat": 33.9244,
        "lng": -117.2045
    },
    {
        "state": "CA",
        "city": "Thousand Oaks",
        "lat": 34.1914,
        "lng": -118.8756
    },
    {
        "state": "ME",
        "city": "Portland",
        "lat": 43.6773,
        "lng": -70.2715
    },
    {
        "state": "CA",
        "city": "Fontana",
        "lat": 34.0968,
        "lng": -117.4599
    },
    {
        "state": "NC",
        "city": "Hickory",
        "lat": 35.741,
        "lng": -81.3223
    },
    {
        "state": "TX",
        "city": "Amarillo",
        "lat": 35.1984,
        "lng": -101.8316
    },
    {
        "state": "SD",
        "city": "Sioux Falls",
        "lat": 43.5396,
        "lng": -96.7311
    },
    {
        "state": "IN",
        "city": "Evansville",
        "lat": 37.9881,
        "lng": -87.5341
    },
    {
        "state": "WV",
        "city": "Huntington",
        "lat": 38.4109,
        "lng": -82.4345
    },
    {
        "state": "CT",
        "city": "Waterbury",
        "lat": 41.5582,
        "lng": -73.0361
    },
    {
        "state": "TX",
        "city": "Frisco",
        "lat": 33.156,
        "lng": -96.8216
    },
    {
        "state": "OH",
        "city": "Lorain",
        "lat": 41.4409,
        "lng": -82.184
    },
    {
        "state": "MI",
        "city": "Kalamazoo",
        "lat": 42.2749,
        "lng": -85.5882
    },
    {
        "state": "TX",
        "city": "Galveston",
        "lat": 29.2484,
        "lng": -94.8913
    },
    {
        "state": "SC",
        "city": "Spartanburg",
        "lat": 34.9442,
        "lng": -81.9251
    },
    {
        "state": "CA",
        "city": "Santa Barbara",
        "lat": 34.4285,
        "lng": -119.7202
    },
    {
        "state": "NV",
        "city": "Sunrise Manor",
        "lat": 36.1783,
        "lng": -115.0487
    },
    {
        "state": "CA",
        "city": "Huntington Beach",
        "lat": 33.696,
        "lng": -118.0018
    },
    {
        "state": "TX",
        "city": "Grand Prairie",
        "lat": 32.6871,
        "lng": -97.0208
    },
    {
        "state": "KS",
        "city": "Overland Park",
        "lat": 38.887,
        "lng": -94.687
    },
    {
        "state": "TX",
        "city": "McKinney",
        "lat": 33.2016,
        "lng": -96.667
    },
    {
        "state": "TX",
        "city": "Waco",
        "lat": 31.5599,
        "lng": -97.1882
    },
    {
        "state": "MD",
        "city": "Hagerstown",
        "lat": 39.6401,
        "lng": -77.7217
    },
    {
        "state": "CA",
        "city": "Glendale",
        "lat": 34.1819,
        "lng": -118.2468
    },
    {
        "state": "ID",
        "city": "Nampa",
        "lat": 43.5844,
        "lng": -116.5638
    },
    {
        "state": "AZ",
        "city": "Peoria",
        "lat": 33.7843,
        "lng": -112.2989
    },
    {
        "state": "IA",
        "city": "Cedar Rapids",
        "lat": 41.9662,
        "lng": -91.6783
    },
    {
        "state": "WA",
        "city": "Vancouver",
        "lat": 45.6366,
        "lng": -122.5967
    },
    {
        "state": "NV",
        "city": "Paradise",
        "lat": 36.0872,
        "lng": -115.1355
    },
    {
        "state": "FL",
        "city": "Ocala",
        "lat": 29.178,
        "lng": -82.1511
    },
    {
        "state": "PA",
        "city": "Erie",
        "lat": 42.1167,
        "lng": -80.0733
    },
    {
        "state": "VA",
        "city": "Newport News",
        "lat": 37.1051,
        "lng": -76.5185
    },
    {
        "state": "MD",
        "city": "Frederick",
        "lat": 39.4337,
        "lng": -77.4141
    },
    {
        "state": "TN",
        "city": "Murfreesboro",
        "lat": 35.849,
        "lng": -86.4121
    },
    {
        "state": "FL",
        "city": "Fort Lauderdale",
        "lat": 26.1412,
        "lng": -80.1464
    },
    {
        "state": "IL",
        "city": "Aurora",
        "lat": 41.7638,
        "lng": -88.2902
    },
    {
        "state": "AZ",
        "city": "Tempe",
        "lat": 33.3881,
        "lng": -111.9319
    },
    {
        "state": "CT",
        "city": "Danbury",
        "lat": 41.4015,
        "lng": -73.4709
    },
    {
        "state": "FL",
        "city": "Spring Hill",
        "lat": 28.4798,
        "lng": -82.53
    },
    {
        "state": "NC",
        "city": "Gastonia",
        "lat": 35.2494,
        "lng": -81.1854
    },
    {
        "state": "CA",
        "city": "Salinas",
        "lat": 36.6883,
        "lng": -121.6317
    },
    {
        "state": "VA",
        "city": "Fredericksburg",
        "lat": 38.2992,
        "lng": -77.4872
    },
    {
        "state": "CA",
        "city": "Ontario",
        "lat": 34.0393,
        "lng": -117.6064
    },
    {
        "state": "CA",
        "city": "Elk Grove",
        "lat": 38.4161,
        "lng": -121.3842
    },
    {
        "state": "GA",
        "city": "Gainesville",
        "lat": 34.2902,
        "lng": -83.8294
    },
    {
        "state": "NC",
        "city": "Cary",
        "lat": 35.7819,
        "lng": -78.8195
    },
    {
        "state": "CA",
        "city": "Rancho Cucamonga",
        "lat": 34.1247,
        "lng": -117.5667
    },
    {
        "state": "CA",
        "city": "Oceanside",
        "lat": 33.2247,
        "lng": -117.3083
    },
    {
        "state": "CA",
        "city": "Garden Grove",
        "lat": 33.7787,
        "lng": -117.9601
    },
    {
        "state": "CA",
        "city": "Lancaster",
        "lat": 34.6935,
        "lng": -118.1753
    },
    {
        "state": "CA",
        "city": "Hemet",
        "lat": 33.7341,
        "lng": -116.9969
    },
    {
        "state": "FL",
        "city": "Pembroke Pines",
        "lat": 26.0128,
        "lng": -80.3382
    },
    {
        "state": "FL",
        "city": "Panama City",
        "lat": 30.1995,
        "lng": -85.6003
    },
    {
        "state": "CA",
        "city": "Vallejo",
        "lat": 38.1125,
        "lng": -122.2342
    },
    {
        "state": "NH",
        "city": "Manchester",
        "lat": 42.9848,
        "lng": -71.4447
    },
    {
        "state": "OR",
        "city": "Medford",
        "lat": 42.3372,
        "lng": -122.854
    },
    {
        "state": "PR",
        "city": "Bayamon",
        "lat": 18.3794,
        "lng": -66.1635
    },
    {
        "state": "SC",
        "city": "Mauldin",
        "lat": 34.7821,
        "lng": -82.3032
    },
    {
        "state": "CA",
        "city": "Santa Cruz",
        "lat": 36.9789,
        "lng": -122.0346
    },
    {
        "state": "CA",
        "city": "Palmdale",
        "lat": 34.5944,
        "lng": -118.1057
    },
    {
        "state": "CT",
        "city": "Norwich",
        "lat": 41.5495,
        "lng": -72.0882
    },
    {
        "state": "MI",
        "city": "Muskegon",
        "lat": 43.2281,
        "lng": -86.2562
    },
    {
        "state": "FL",
        "city": "Leesburg",
        "lat": 28.7672,
        "lng": -81.8962
    },
    {
        "state": "NC",
        "city": "High Point",
        "lat": 35.991,
        "lng": -79.9937
    },
    {
        "state": "AL",
        "city": "Tuscaloosa",
        "lat": 33.2348,
        "lng": -87.5268
    },
    {
        "state": "CA",
        "city": "Visalia",
        "lat": 36.3276,
        "lng": -119.3269
    },
    {
        "state": "WA",
        "city": "Marysville",
        "lat": 48.0809,
        "lng": -122.1561
    },
    {
        "state": "CA",
        "city": "Merced",
        "lat": 37.3057,
        "lng": -120.4779
    },
    {
        "state": "CA",
        "city": "Hayward",
        "lat": 37.6328,
        "lng": -122.0766
    },
    {
        "state": "IN",
        "city": "Lafayette",
        "lat": 40.3991,
        "lng": -86.8593
    },
    {
        "state": "IL",
        "city": "Springfield",
        "lat": 39.7709,
        "lng": -89.654
    },
    {
        "state": "CA",
        "city": "Corona",
        "lat": 33.8616,
        "lng": -117.5649
    },
    {
        "state": "NJ",
        "city": "Paterson",
        "lat": 40.9147,
        "lng": -74.1624
    },
    {
        "state": "VA",
        "city": "Alexandria",
        "lat": 38.8185,
        "lng": -77.0861
    },
    {
        "state": "GA",
        "city": "Macon",
        "lat": 32.8065,
        "lng": -83.6974
    },
    {
        "state": "NY",
        "city": "Binghamton",
        "lat": 42.1014,
        "lng": -75.9093
    },
    {
        "state": "CO",
        "city": "Lakewood",
        "lat": 39.6977,
        "lng": -105.1172
    },
    {
        "state": "KS",
        "city": "Kansas City",
        "lat": 39.1235,
        "lng": -94.7443
    },
    {
        "state": "TX",
        "city": "Odessa",
        "lat": 31.8801,
        "lng": -102.3448
    },
    {
        "state": "CA",
        "city": "Sunnyvale",
        "lat": 37.3836,
        "lng": -122.0255
    },
    {
        "state": "MA",
        "city": "New Bedford",
        "lat": 41.6697,
        "lng": -70.9428
    },
    {
        "state": "FL",
        "city": "Hollywood",
        "lat": 26.0293,
        "lng": -80.1679
    },
    {
        "state": "MI",
        "city": "South Lyon",
        "lat": 42.4614,
        "lng": -83.6526
    },
    {
        "state": "CA",
        "city": "Escondido",
        "lat": 33.1348,
        "lng": -117.0723
    },
    {
        "state": "LA",
        "city": "Lake Charles",
        "lat": 30.201,
        "lng": -93.2111
    },
    {
        "state": "TX",
        "city": "Pasadena",
        "lat": 29.6575,
        "lng": -95.1498
    },
    {
        "state": "WA",
        "city": "Bellevue",
        "lat": 47.5951,
        "lng": -122.1535
    },
    {
        "state": "IL",
        "city": "Joliet",
        "lat": 41.5188,
        "lng": -88.1499
    },
    {
        "state": "IL",
        "city": "Champaign",
        "lat": 40.1142,
        "lng": -88.2737
    },
    {
        "state": "CA",
        "city": "Pomona",
        "lat": 34.0585,
        "lng": -117.7626
    },
    {
        "state": "CA",
        "city": "Fairfield",
        "lat": 38.2583,
        "lng": -122.0335
    },
    {
        "state": "TX",
        "city": "Mesquite",
        "lat": 32.7602,
        "lng": -96.5865
    },
    {
        "state": "IN",
        "city": "Elkhart",
        "lat": 41.6916,
        "lng": -85.9627
    },
    {
        "state": "IL",
        "city": "Naperville",
        "lat": 41.748,
        "lng": -88.1659
    },
    {
        "state": "UT",
        "city": "St. George",
        "lat": 37.0758,
        "lng": -113.5752
    },
    {
        "state": "CA",
        "city": "Roseville",
        "lat": 38.7703,
        "lng": -121.3196
    },
    {
        "state": "KS",
        "city": "Topeka",
        "lat": 39.0346,
        "lng": -95.6955
    },
    {
        "state": "NC",
        "city": "Burlington",
        "lat": 36.076,
        "lng": -79.4685
    },
    {
        "state": "GA",
        "city": "Warner Robins",
        "lat": 32.5961,
        "lng": -83.6527
    },
    {
        "state": "AZ",
        "city": "Surprise",
        "lat": 33.6815,
        "lng": -112.4515
    },
    {
        "state": "CA",
        "city": "Torrance",
        "lat": 33.8346,
        "lng": -118.3416
    },
    {
        "state": "CA",
        "city": "Santa Maria",
        "lat": 34.9333,
        "lng": -120.4431
    },
    {
        "state": "GA",
        "city": "Athens",
        "lat": 33.9508,
        "lng": -83.3689
    },
    {
        "state": "LA",
        "city": "Houma",
        "lat": 29.58,
        "lng": -90.7059
    },
    {
        "state": "MO",
        "city": "Columbia",
        "lat": 38.9472,
        "lng": -92.3268
    },
    {
        "state": "CA",
        "city": "Fullerton",
        "lat": 33.8841,
        "lng": -117.9279
    },
    {
        "state": "KS",
        "city": "Olathe",
        "lat": 38.8833,
        "lng": -94.82
    },
    {
        "state": "CO",
        "city": "Thornton",
        "lat": 39.9197,
        "lng": -104.9438
    },
    {
        "state": "CO",
        "city": "Greeley",
        "lat": 40.4152,
        "lng": -104.7706
    },
    {
        "state": "TX",
        "city": "Beaumont",
        "lat": 30.0849,
        "lng": -94.1451
    },
    {
        "state": "NM",
        "city": "Las Cruces",
        "lat": 32.3265,
        "lng": -106.7893
    },
    {
        "state": "TX",
        "city": "Midland",
        "lat": 32.0243,
        "lng": -102.1147
    },
    {
        "state": "LA",
        "city": "Metairie",
        "lat": 29.9977,
        "lng": -90.178
    },
    {
        "state": "PR",
        "city": "Carolina",
        "lat": 18.4054,
        "lng": -65.9792
    },
    {
        "state": "UT",
        "city": "West Valley City",
        "lat": 40.6886,
        "lng": -112.0123
    },
    {
        "state": "CA",
        "city": "Orange",
        "lat": 33.8038,
        "lng": -117.8218
    },
    {
        "state": "MI",
        "city": "Warren",
        "lat": 42.4934,
        "lng": -83.027
    },
    {
        "state": "CO",
        "city": "Grand Junction",
        "lat": 39.0877,
        "lng": -108.5673
    },
    {
        "state": "TX",
        "city": "Tyler",
        "lat": 32.3184,
        "lng": -95.3062
    },
    {
        "state": "CA",
        "city": "Pasadena",
        "lat": 34.1597,
        "lng": -118.139
    },
    {
        "state": "VA",
        "city": "Hampton",
        "lat": 37.0551,
        "lng": -76.363
    },
    {
        "state": "IL",
        "city": "Bloomington",
        "lat": 40.4757,
        "lng": -88.9703
    },
    {
        "state": "NJ",
        "city": "Elizabeth",
        "lat": 40.6658,
        "lng": -74.1913
    },
    {
        "state": "CT",
        "city": "Stamford",
        "lat": 41.1039,
        "lng": -73.5585
    },
    {
        "state": "AZ",
        "city": "Yuma",
        "lat": 32.5995,
        "lng": -114.5491
    },
    {
        "state": "WA",
        "city": "Kent",
        "lat": 47.3887,
        "lng": -122.2128
    },
    {
        "state": "FL",
        "city": "Miramar",
        "lat": 25.9773,
        "lng": -80.3351
    },
    {
        "state": "ID",
        "city": "Coeur d'Alene",
        "lat": 47.704,
        "lng": -116.7936
    },
    {
        "state": "FL",
        "city": "Coral Springs",
        "lat": 26.2702,
        "lng": -80.2591
    },
    {
        "state": "MI",
        "city": "Sterling Heights",
        "lat": 42.5809,
        "lng": -83.0305
    },
    {
        "state": "CA",
        "city": "Yuba City",
        "lat": 39.1357,
        "lng": -121.6383
    },
    {
        "state": "WA",
        "city": "Yakima",
        "lat": 46.5923,
        "lng": -120.5496
    },
    {
        "state": "TX",
        "city": "Carrollton",
        "lat": 32.989,
        "lng": -96.8999
    },
    {
        "state": "WI",
        "city": "Racine",
        "lat": 42.7274,
        "lng": -87.8135
    },
    {
        "state": "TN",
        "city": "Johnson City",
        "lat": 36.3406,
        "lng": -82.3806
    },
    {
        "state": "MT",
        "city": "Billings",
        "lat": 45.7891,
        "lng": -108.5526
    },
    {
        "state": "IA",
        "city": "Iowa City",
        "lat": 41.6559,
        "lng": -91.5303
    },
    {
        "state": "DE",
        "city": "Dover",
        "lat": 39.161,
        "lng": -75.5202
    },
    {
        "state": "WA",
        "city": "Bellingham",
        "lat": 48.7548,
        "lng": -122.469
    },
    {
        "state": "WV",
        "city": "Charleston",
        "lat": 38.3484,
        "lng": -81.6322
    },
    {
        "state": "VA",
        "city": "Lynchburg",
        "lat": 37.4003,
        "lng": -79.1909
    },
    {
        "state": "CA",
        "city": "Santa Clara",
        "lat": 37.3646,
        "lng": -121.968
    },
    {
        "state": "OK",
        "city": "Norman",
        "lat": 35.2335,
        "lng": -97.3471
    },
    {
        "state": "NC",
        "city": "Greenville",
        "lat": 35.5943,
        "lng": -77.376
    },
    {
        "state": "CA",
        "city": "Simi Valley",
        "lat": 34.2663,
        "lng": -118.749
    },
    {
        "state": "AR",
        "city": "Fort Smith",
        "lat": 35.3495,
        "lng": -94.3695
    },
    {
        "state": "TX",
        "city": "Abilene",
        "lat": 32.4543,
        "lng": -99.7384
    },
    {
        "state": "PR",
        "city": "Arecibo",
        "lat": 18.4491,
        "lng": -66.7387
    },
    {
        "state": "TX",
        "city": "Lewisville",
        "lat": 33.0454,
        "lng": -96.9815
    },
    {
        "state": "TX",
        "city": "Pearland",
        "lat": 29.5581,
        "lng": -95.3218
    },
    {
        "state": "FL",
        "city": "Lehigh Acres",
        "lat": 26.612,
        "lng": -81.6388
    },
    {
        "state": "WI",
        "city": "Kenosha",
        "lat": 42.5865,
        "lng": -87.8773
    },
    {
        "state": "CA",
        "city": "Seaside",
        "lat": 36.6224,
        "lng": -121.8199
    },
    {
        "state": "VT",
        "city": "Burlington",
        "lat": 44.4876,
        "lng": -73.2316
    },
    {
        "state": "CO",
        "city": "Arvada",
        "lat": 39.832,
        "lng": -105.151
    },
    {
        "state": "MD",
        "city": "Waldorf",
        "lat": 38.6085,
        "lng": -76.9194
    },
    {
        "state": "MO",
        "city": "Independence",
        "lat": 39.0871,
        "lng": -94.3501
    },
    {
        "state": "MN",
        "city": "Rochester",
        "lat": 44.0154,
        "lng": -92.478
    },
    {
        "state": "UT",
        "city": "Logan",
        "lat": 41.7399,
        "lng": -111.8422
    },
    {
        "state": "TX",
        "city": "Harlingen",
        "lat": 26.1916,
        "lng": -97.6977
    },
    {
        "state": "CA",
        "city": "Berkeley",
        "lat": 37.8722,
        "lng": -122.276
    },
    {
        "state": "CA",
        "city": "Clovis",
        "lat": 36.8278,
        "lng": -119.683
    },
    {
        "state": "TX",
        "city": "Round Rock",
        "lat": 30.527,
        "lng": -97.6642
    },
    {
        "state": "CO",
        "city": "Pueblo",
        "lat": 38.2701,
        "lng": -104.6114
    },
    {
        "state": "TX",
        "city": "Temple",
        "lat": 31.1068,
        "lng": -97.3891
    },
    {
        "state": "ID",
        "city": "Meridian",
        "lat": 43.6116,
        "lng": -116.3977
    },
    {
        "state": "MN",
        "city": "Duluth",
        "lat": 46.7756,
        "lng": -92.1393
    },
    {
        "state": "TX",
        "city": "The Woodlands",
        "lat": 30.1738,
        "lng": -95.5134
    },
    {
        "state": "CO",
        "city": "Boulder",
        "lat": 40.0248,
        "lng": -105.2524
    },
    {
        "state": "TX",
        "city": "Richardson",
        "lat": 32.9716,
        "lng": -96.7093
    },
    {
        "state": "MA",
        "city": "Cambridge",
        "lat": 42.3759,
        "lng": -71.1185
    },
    {
        "state": "FL",
        "city": "West Palm Beach",
        "lat": 26.7469,
        "lng": -80.132
    },
    {
        "state": "TX",
        "city": "Port Arthur",
        "lat": 29.8554,
        "lng": -93.9264
    },
    {
        "state": "CA",
        "city": "East Los Angeles",
        "lat": 34.0326,
        "lng": -118.1691
    },
    {
        "state": "CA",
        "city": "Redding",
        "lat": 40.5698,
        "lng": -122.365
    },
    {
        "state": "FL",
        "city": "Clearwater",
        "lat": 27.979,
        "lng": -82.7623
    },
    {
        "state": "LA",
        "city": "Monroe",
        "lat": 32.5185,
        "lng": -92.0774
    },
    {
        "state": "NY",
        "city": "Utica",
        "lat": 43.0962,
        "lng": -75.2261
    },
    {
        "state": "MN",
        "city": "St. Cloud",
        "lat": 45.534,
        "lng": -94.1718
    },
    {
        "state": "LA",
        "city": "Mandeville",
        "lat": 30.3751,
        "lng": -90.0904
    },
    {
        "state": "UT",
        "city": "West Jordan",
        "lat": 40.6024,
        "lng": -112.0008
    },
    {
        "state": "SC",
        "city": "North Charleston",
        "lat": 32.9067,
        "lng": -80.0722
    },
    {
        "state": "CA",
        "city": "Richmond",
        "lat": 37.9477,
        "lng": -122.3389
    },
    {
        "state": "CO",
        "city": "Westminster",
        "lat": 39.8837,
        "lng": -105.0624
    },
    {
        "state": "MI",
        "city": "Saginaw",
        "lat": 43.4199,
        "lng": -83.9501
    },
    {
        "state": "HI",
        "city": "Kailua",
        "lat": 21.392,
        "lng": -157.7396
    },
    {
        "state": "FL",
        "city": "Brandon",
        "lat": 27.9367,
        "lng": -82.3
    },
    {
        "state": "PR",
        "city": "Ponce",
        "lat": 18.0127,
        "lng": -66.6212
    },
    {
        "state": "CA",
        "city": "Carlsbad",
        "lat": 33.1246,
        "lng": -117.2834
    },
    {
        "state": "MA",
        "city": "Lowell",
        "lat": 42.6389,
        "lng": -71.3217
    },
    {
        "state": "OK",
        "city": "Broken Arrow",
        "lat": 36.038,
        "lng": -95.7806
    },
    {
        "state": "IL",
        "city": "Elgin",
        "lat": 42.0383,
        "lng": -88.324
    },
    {
        "state": "OR",
        "city": "Gresham",
        "lat": 45.5021,
        "lng": -122.4413
    },
    {
        "state": "TX",
        "city": "League City",
        "lat": 29.4874,
        "lng": -95.1087
    },
    {
        "state": "CA",
        "city": "Downey",
        "lat": 33.9379,
        "lng": -118.1311
    },
    {
        "state": "IA",
        "city": "Waterloo",
        "lat": 42.4918,
        "lng": -92.3522
    },
    {
        "state": "CA",
        "city": "Murrieta",
        "lat": 33.5719,
        "lng": -117.1909
    },
    {
        "state": "MA",
        "city": "Leominster",
        "lat": 42.5209,
        "lng": -71.7717
    },
    {
        "state": "TX",
        "city": "Longview",
        "lat": 32.5193,
        "lng": -94.7622
    },
    {
        "state": "NC",
        "city": "Jacksonville",
        "lat": 34.7289,
        "lng": -77.3941
    },
    {
        "state": "FL",
        "city": "Pompano Beach",
        "lat": 26.2428,
        "lng": -80.1312
    },
    {
        "state": "OR",
        "city": "Bend",
        "lat": 44.0563,
        "lng": -121.3095
    },
    {
        "state": "FL",
        "city": "Miami Gardens",
        "lat": 25.9433,
        "lng": -80.2426
    },
    {
        "state": "CA",
        "city": "Costa Mesa",
        "lat": 33.6667,
        "lng": -117.9135
    },
    {
        "state": "IA",
        "city": "Sioux City",
        "lat": 42.4959,
        "lng": -96.3901
    },
    {
        "state": "WA",
        "city": "Everett",
        "lat": 47.9525,
        "lng": -122.1669
    },
    {
        "state": "CA",
        "city": "Gilroy",
        "lat": 37.0046,
        "lng": -121.5854
    },
    {
        "state": "CA",
        "city": "San Buenaventura",
        "lat": 34.2741,
        "lng": -119.2314
    },
    {
        "state": "CA",
        "city": "Temecula",
        "lat": 33.4928,
        "lng": -117.1315
    },
    {
        "state": "TX",
        "city": "Sugar Land",
        "lat": 29.5935,
        "lng": -95.6358
    },
    {
        "state": "CA",
        "city": "Chico",
        "lat": 39.7578,
        "lng": -121.8161
    },
    {
        "state": "WI",
        "city": "Eau Claire",
        "lat": 44.8197,
        "lng": -91.4948
    },
    {
        "state": "CA",
        "city": "El Monte",
        "lat": 34.0739,
        "lng": -118.0291
    },
    {
        "state": "ID",
        "city": "Idaho Falls",
        "lat": 43.4871,
        "lng": -112.0362
    },
    {
        "state": "MI",
        "city": "Dearborn",
        "lat": 42.3127,
        "lng": -83.213
    },
    {
        "state": "IN",
        "city": "Bloomington",
        "lat": 39.1637,
        "lng": -86.5257
    },
    {
        "state": "CA",
        "city": "West Covina",
        "lat": 34.0555,
        "lng": -117.9113
    },
    {
        "state": "NV",
        "city": "Sparks",
        "lat": 39.5736,
        "lng": -119.7161
    },
    {
        "state": "GA",
        "city": "South Fulton",
        "lat": 33.6273,
        "lng": -84.58
    },
    {
        "state": "CO",
        "city": "Centennial",
        "lat": 39.5926,
        "lng": -104.8673
    },
    {
        "state": "GA",
        "city": "Sandy Springs",
        "lat": 33.9366,
        "lng": -84.3703
    },
    {
        "state": "CA",
        "city": "Inglewood",
        "lat": 33.9566,
        "lng": -118.3444
    },
    {
        "state": "OR",
        "city": "Hillsboro",
        "lat": 45.5273,
        "lng": -122.936
    },
    {
        "state": "MD",
        "city": "Columbia",
        "lat": 39.2004,
        "lng": -76.859
    },
    {
        "state": "CA",
        "city": "Burbank",
        "lat": 34.1879,
        "lng": -118.3235
    },
    {
        "state": "FL",
        "city": "Davie",
        "lat": 26.0789,
        "lng": -80.287
    },
    {
        "state": "CA",
        "city": "El Cajon",
        "lat": 32.8017,
        "lng": -116.9604
    },
    {
        "state": "CA",
        "city": "Jurupa Valley",
        "lat": 34.001,
        "lng": -117.4706
    },
    {
        "state": "TX",
        "city": "Allen",
        "lat": 33.1088,
        "lng": -96.6735
    },
    {
        "state": "AL",
        "city": "Auburn",
        "lat": 32.6087,
        "lng": -85.4903
    },
    {
        "state": "WA",
        "city": "Renton",
        "lat": 47.4784,
        "lng": -122.1918
    },
    {
        "state": "MI",
        "city": "Holland",
        "lat": 42.7677,
        "lng": -86.0984
    },
    {
        "state": "MA",
        "city": "Brockton",
        "lat": 42.0821,
        "lng": -71.0242
    },
    {
        "state": "NM",
        "city": "Rio Rancho",
        "lat": 35.2873,
        "lng": -106.6982
    },
    {
        "state": "CA",
        "city": "San Mateo",
        "lat": 37.5522,
        "lng": -122.3121
    },
    {
        "state": "CA",
        "city": "Rialto",
        "lat": 34.1175,
        "lng": -117.3892
    },
    {
        "state": "WA",
        "city": "Spokane Valley",
        "lat": 47.6626,
        "lng": -117.2346
    },
    {
        "state": "VA",
        "city": "Charlottesville",
        "lat": 38.0375,
        "lng": -78.4855
    },
    {
        "state": "CA",
        "city": "Menifee",
        "lat": 33.6909,
        "lng": -117.1849
    },
    {
        "state": "CA",
        "city": "Daly City",
        "lat": 37.6862,
        "lng": -122.4685
    },
    {
        "state": "TX",
        "city": "Wichita Falls",
        "lat": 33.9072,
        "lng": -98.5291
    },
    {
        "state": "FL",
        "city": "Riverview",
        "lat": 27.8227,
        "lng": -82.3023
    },
    {
        "state": "CA",
        "city": "Norwalk",
        "lat": 33.9069,
        "lng": -118.0829
    },
    {
        "state": "MO",
        "city": "Lee's Summit",
        "lat": 38.9171,
        "lng": -94.3816
    },
    {
        "state": "CO",
        "city": "Longmont",
        "lat": 40.1686,
        "lng": -105.1005
    },
    {
        "state": "CA",
        "city": "Vacaville",
        "lat": 38.3587,
        "lng": -121.9673
    },
    {
        "state": "CO",
        "city": "Highlands Ranch",
        "lat": 39.5419,
        "lng": -104.9708
    },
    {
        "state": "TN",
        "city": "Kingsport",
        "lat": 36.5224,
        "lng": -82.5454
    },
    {
        "state": "AZ",
        "city": "San Tan Valley",
        "lat": 33.1786,
        "lng": -111.5629
    },
    {
        "state": "MA",
        "city": "Quincy",
        "lat": 42.2506,
        "lng": -71.0187
    },
    {
        "state": "TX",
        "city": "Edinburg",
        "lat": 26.3196,
        "lng": -98.1597
    },
    {
        "state": "MA",
        "city": "Lynn",
        "lat": 42.4781,
        "lng": -70.9664
    },
    {
        "state": "TX",
        "city": "San Angelo",
        "lat": 31.4424,
        "lng": -100.4504
    },
    {
        "state": "CA",
        "city": "Hesperia",
        "lat": 34.3975,
        "lng": -117.3147
    },
    {
        "state": "KY",
        "city": "Bowling Green",
        "lat": 36.9716,
        "lng": -86.4378
    },
    {
        "state": "WA",
        "city": "Federal Way",
        "lat": 47.3091,
        "lng": -122.3358
    },
    {
        "state": "IN",
        "city": "Carmel",
        "lat": 39.965,
        "lng": -86.146
    },
    {
        "state": "ND",
        "city": "Bismarck",
        "lat": 46.8143,
        "lng": -100.7694
    },
    {
        "state": "IN",
        "city": "Fishers",
        "lat": 39.9588,
        "lng": -85.9659
    },
    {
        "state": "CO",
        "city": "Lafayette",
        "lat": 39.9946,
        "lng": -105.0998
    },
    {
        "state": "CA",
        "city": "Vista",
        "lat": 33.1896,
        "lng": -117.2386
    },
    {
        "state": "FL",
        "city": "Boca Raton",
        "lat": 26.3752,
        "lng": -80.108
    },
    {
        "state": "FL",
        "city": "St. Augustine",
        "lat": 29.8976,
        "lng": -81.31
    },
    {
        "state": "OR",
        "city": "Beaverton",
        "lat": 45.4779,
        "lng": -122.8168
    },
    {
        "state": "AZ",
        "city": "Goodyear",
        "lat": 33.2614,
        "lng": -112.3622
    },
    {
        "state": "VA",
        "city": "Portsmouth",
        "lat": 36.8468,
        "lng": -76.354
    },
    {
        "state": "UT",
        "city": "Orem",
        "lat": 40.2981,
        "lng": -111.6994
    },
    {
        "state": "FL",
        "city": "Sunrise",
        "lat": 26.1547,
        "lng": -80.2997
    },
    {
        "state": "NH",
        "city": "Portsmouth",
        "lat": 43.058,
        "lng": -70.7826
    },
    {
        "state": "CA",
        "city": "Arden-Arcade",
        "lat": 38.6017,
        "lng": -121.3845
    },
    {
        "state": "KS",
        "city": "Lawrence",
        "lat": 38.9597,
        "lng": -95.2642
    },
    {
        "state": "UT",
        "city": "Sandy",
        "lat": 40.5709,
        "lng": -111.8506
    },
    {
        "state": "LA",
        "city": "Slidell",
        "lat": 30.2887,
        "lng": -89.7828
    },
    {
        "state": "AZ",
        "city": "Buckeye",
        "lat": 33.4314,
        "lng": -112.6429
    },
    {
        "state": "MI",
        "city": "Livonia",
        "lat": 42.3972,
        "lng": -83.3733
    },
    {
        "state": "VA",
        "city": "Williamsburg",
        "lat": 37.2693,
        "lng": -76.7076
    },
    {
        "state": "VA",
        "city": "Suffolk",
        "lat": 36.6953,
        "lng": -76.6398
    },
    {
        "state": "CA",
        "city": "Compton",
        "lat": 33.893,
        "lng": -118.2274
    },
    {
        "state": "WI",
        "city": "La Crosse",
        "lat": 43.8241,
        "lng": -91.2268
    },
    {
        "state": "OK",
        "city": "Edmond",
        "lat": 35.6689,
        "lng": -97.416
    },
    {
        "state": "CA",
        "city": "Carson",
        "lat": 33.8374,
        "lng": -118.2559
    },
    {
        "state": "CA",
        "city": "San Marcos",
        "lat": 33.135,
        "lng": -117.1743
    },
    {
        "state": "CA",
        "city": "Tracy",
        "lat": 37.7269,
        "lng": -121.4523
    },
    {
        "state": "AZ",
        "city": "Prescott Valley",
        "lat": 34.598,
        "lng": -112.3185
    },
    {
        "state": "OH",
        "city": "Middletown",
        "lat": 39.5033,
        "lng": -84.3659
    },
    {
        "state": "MA",
        "city": "Fall River",
        "lat": 41.7136,
        "lng": -71.1015
    },
    {
        "state": "PR",
        "city": "San German",
        "lat": 18.0827,
        "lng": -67.046
    },
    {
        "state": "NM",
        "city": "Santa Fe",
        "lat": 35.6619,
        "lng": -105.9819
    },
    {
        "state": "FL",
        "city": "Plantation",
        "lat": 26.1259,
        "lng": -80.2617
    },
    {
        "state": "PR",
        "city": "Mayaguez",
        "lat": 18.2003,
        "lng": -67.1397
    },
    {
        "state": "TX",
        "city": "New Braunfels",
        "lat": 29.6994,
        "lng": -98.1148
    },
    {
        "state": "GA",
        "city": "Roswell",
        "lat": 34.0391,
        "lng": -84.3513
    },
    {
        "state": "TX",
        "city": "Conroe",
        "lat": 30.3238,
        "lng": -95.4824
    },
    {
        "state": "CA",
        "city": "South Gate",
        "lat": 33.9447,
        "lng": -118.1926
    },
    {
        "state": "CA",
        "city": "Santa Monica",
        "lat": 34.0235,
        "lng": -118.481
    },
    {
        "state": "WA",
        "city": "Kirkland",
        "lat": 47.697,
        "lng": -122.2057
    },
    {
        "state": "AL",
        "city": "Hoover",
        "lat": 33.3763,
        "lng": -86.8068
    },
    {
        "state": "MO",
        "city": "O'Fallon",
        "lat": 38.785,
        "lng": -90.7175
    },
    {
        "state": "FL",
        "city": "Alafaya",
        "lat": 28.528,
        "lng": -81.1868
    },
    {
        "state": "FL",
        "city": "Palm Coast",
        "lat": 29.5389,
        "lng": -81.2457
    },
    {
        "state": "CT",
        "city": "Norwalk",
        "lat": 41.1144,
        "lng": -73.4215
    },
    {
        "state": "OK",
        "city": "Lawton",
        "lat": 34.6175,
        "lng": -98.4202
    },
    {
        "state": "CA",
        "city": "Chino",
        "lat": 33.9836,
        "lng": -117.6654
    },
    {
        "state": "SC",
        "city": "Mount Pleasant",
        "lat": 32.8537,
        "lng": -79.8203
    },
    {
        "state": "CA",
        "city": "Manteca",
        "lat": 37.7927,
        "lng": -121.2264
    },
    {
        "state": "CA",
        "city": "Westminster",
        "lat": 33.7523,
        "lng": -117.9938
    },
    {
        "state": "SC",
        "city": "Florence",
        "lat": 34.178,
        "lng": -79.7898
    },
    {
        "state": "MO",
        "city": "Joplin",
        "lat": 37.0757,
        "lng": -94.5018
    },
    {
        "state": "MD",
        "city": "Germantown",
        "lat": 39.1755,
        "lng": -77.2643
    },
    {
        "state": "CA",
        "city": "San Leandro",
        "lat": 37.7074,
        "lng": -122.1599
    },
    {
        "state": "FL",
        "city": "Town 'n' Country",
        "lat": 28.0106,
        "lng": -82.5763
    },
    {
        "state": "NJ",
        "city": "Clifton",
        "lat": 40.863,
        "lng": -74.1575
    },
    {
        "state": "IL",
        "city": "Waukegan",
        "lat": 42.3698,
        "lng": -87.8716
    },
    {
        "state": "MN",
        "city": "Bloomington",
        "lat": 44.8306,
        "lng": -93.3151
    },
    {
        "state": "AZ",
        "city": "Avondale",
        "lat": 33.3873,
        "lng": -112.3235
    },
    {
        "state": "TX",
        "city": "Atascocita",
        "lat": 29.9777,
        "lng": -95.1953
    },
    {
        "state": "MT",
        "city": "Missoula",
        "lat": 46.8751,
        "lng": -114.0214
    },
    {
        "state": "FL",
        "city": "Fort Myers",
        "lat": 26.6194,
        "lng": -81.8302
    },
    {
        "state": "MA",
        "city": "Newton",
        "lat": 42.3316,
        "lng": -71.2085
    },
    {
        "state": "MA",
        "city": "Lawrence",
        "lat": 42.7002,
        "lng": -71.1626
    },
    {
        "state": "IN",
        "city": "Muncie",
        "lat": 40.1989,
        "lng": -85.395
    },
    {
        "state": "SD",
        "city": "Rapid City",
        "lat": 44.0716,
        "lng": -103.2204
    },
    {
        "state": "MI",
        "city": "Troy",
        "lat": 42.5817,
        "lng": -83.1457
    },
    {
        "state": "CA",
        "city": "Livermore",
        "lat": 37.6868,
        "lng": -121.7607
    },
    {
        "state": "CA",
        "city": "Citrus Heights",
        "lat": 38.6948,
        "lng": -121.288
    },
    {
        "state": "CA",
        "city": "Hawthorne",
        "lat": 33.9147,
        "lng": -118.3476
    },
    {
        "state": "VA",
        "city": "Winchester",
        "lat": 39.1735,
        "lng": -78.1746
    },
    {
        "state": "AR",
        "city": "Springdale",
        "lat": 36.1901,
        "lng": -94.1574
    },
    {
        "state": "CA",
        "city": "Whittier",
        "lat": 33.9678,
        "lng": -118.0188
    },
    {
        "state": "FL",
        "city": "Deerfield Beach",
        "lat": 26.305,
        "lng": -80.1277
    },
    {
        "state": "IL",
        "city": "Decatur",
        "lat": 39.8557,
        "lng": -88.9342
    },
    {
        "state": "CA",
        "city": "San Ramon",
        "lat": 37.7624,
        "lng": -121.9365
    },
    {
        "state": "NJ",
        "city": "Vineland",
        "lat": 39.4653,
        "lng": -74.9981
    },
    {
        "state": "TX",
        "city": "Mission",
        "lat": 26.2039,
        "lng": -98.3256
    },
    {
        "state": "WA",
        "city": "Auburn",
        "lat": 47.3039,
        "lng": -122.2108
    },
    {
        "state": "CA",
        "city": "Lake Forest",
        "lat": 33.6605,
        "lng": -117.6714
    },
    {
        "state": "CA",
        "city": "Newport Beach",
        "lat": 33.6151,
        "lng": -117.8668
    },
    {
        "state": "FL",
        "city": "Melbourne",
        "lat": 28.1086,
        "lng": -80.6627
    },
    {
        "state": "MN",
        "city": "Brooklyn Park",
        "lat": 45.1112,
        "lng": -93.3505
    },
    {
        "state": "TX",
        "city": "Bryan",
        "lat": 30.665,
        "lng": -96.3807
    },
    {
        "state": "MI",
        "city": "Westland",
        "lat": 42.3192,
        "lng": -83.3805
    },
    {
        "state": "CA",
        "city": "Napa",
        "lat": 38.2975,
        "lng": -122.301
    },
    {
        "state": "TX",
        "city": "Baytown",
        "lat": 29.7587,
        "lng": -94.9671
    },
    {
        "state": "IL",
        "city": "Cicero",
        "lat": 41.8445,
        "lng": -87.7593
    },
    {
        "state": "IN",
        "city": "Anderson",
        "lat": 40.0891,
        "lng": -85.6892
    },
    {
        "state": "TN",
        "city": "Franklin",
        "lat": 35.92,
        "lng": -86.8516
    },
    {
        "state": "MI",
        "city": "Farmington Hills",
        "lat": 42.486,
        "lng": -83.3771
    },
    {
        "state": "CA",
        "city": "Buena Park",
        "lat": 33.8572,
        "lng": -118.0046
    },
    {
        "state": "GA",
        "city": "Albany",
        "lat": 31.5776,
        "lng": -84.1762
    },
    {
        "state": "FL",
        "city": "Pine Hills",
        "lat": 28.5818,
        "lng": -81.4692
    },
    {
        "state": "PA",
        "city": "State College",
        "lat": 40.7909,
        "lng": -77.8567
    },
    {
        "state": "CA",
        "city": "Redwood City",
        "lat": 37.5025,
        "lng": -122.2253
    },
    {
        "state": "RI",
        "city": "Warwick",
        "lat": 41.7062,
        "lng": -71.4334
    },
    {
        "state": "MI",
        "city": "Jackson",
        "lat": 42.2431,
        "lng": -84.4038
    },
    {
        "state": "RI",
        "city": "Cranston",
        "lat": 41.7658,
        "lng": -71.4858
    },
    {
        "state": "FL",
        "city": "Largo",
        "lat": 27.9088,
        "lng": -82.7712
    },
    {
        "state": "FL",
        "city": "Miami Beach",
        "lat": 25.8171,
        "lng": -80.1396
    },
    {
        "state": "CA",
        "city": "Alhambra",
        "lat": 34.084,
        "lng": -118.1355
    },
    {
        "state": "GA",
        "city": "Johns Creek",
        "lat": 34.0333,
        "lng": -84.2027
    },
    {
        "state": "CA",
        "city": "Mountain View",
        "lat": 37.4001,
        "lng": -122.0796
    },
    {
        "state": "MD",
        "city": "Salisbury",
        "lat": 38.3756,
        "lng": -75.5865
    },
    {
        "state": "WV",
        "city": "Morgantown",
        "lat": 39.6383,
        "lng": -79.9464
    },
    {
        "state": "MD",
        "city": "Silver Spring",
        "lat": 39.0028,
        "lng": -77.0207
    },
    {
        "state": "UT",
        "city": "Layton",
        "lat": 41.077,
        "lng": -111.962
    },
    {
        "state": "OH",
        "city": "Springfield",
        "lat": 39.93,
        "lng": -83.7959
    },
    {
        "state": "CA",
        "city": "Lakewood",
        "lat": 33.8471,
        "lng": -118.1222
    },
    {
        "state": "AL",
        "city": "Florence",
        "lat": 34.8303,
        "lng": -87.6655
    },
    {
        "state": "CA",
        "city": "Folsom",
        "lat": 38.6668,
        "lng": -121.1422
    },
    {
        "state": "CA",
        "city": "Madera",
        "lat": 36.963,
        "lng": -120.0778
    },
    {
        "state": "NY",
        "city": "New Rochelle",
        "lat": 40.9304,
        "lng": -73.7836
    },
    {
        "state": "OH",
        "city": "Parma",
        "lat": 41.3843,
        "lng": -81.7286
    },
    {
        "state": "IN",
        "city": "Terre Haute",
        "lat": 39.466,
        "lng": -87.3751
    },
    {
        "state": "MA",
        "city": "Somerville",
        "lat": 42.3908,
        "lng": -71.1014
    },
    {
        "state": "AZ",
        "city": "Flagstaff",
        "lat": 35.1872,
        "lng": -111.6194
    },
    {
        "state": "FL",
        "city": "Boynton Beach",
        "lat": 26.5281,
        "lng": -80.0811
    },
    {
        "state": "FL",
        "city": "Homestead",
        "lat": 25.4665,
        "lng": -80.4472
    },
    {
        "state": "OH",
        "city": "Newark",
        "lat": 40.0706,
        "lng": -82.425
    },
    {
        "state": "MN",
        "city": "Plymouth",
        "lat": 45.0225,
        "lng": -93.4617
    },
    {
        "state": "AL",
        "city": "Anniston",
        "lat": 33.6712,
        "lng": -85.8135
    },
    {
        "state": "TX",
        "city": "Texarkana",
        "lat": 33.45,
        "lng": -94.0847
    },
    {
        "state": "CA",
        "city": "Tustin",
        "lat": 33.7311,
        "lng": -117.8107
    },
    {
        "state": "TX",
        "city": "Pharr",
        "lat": 26.1685,
        "lng": -98.1904
    },
    {
        "state": "MI",
        "city": "Port Huron",
        "lat": 42.9821,
        "lng": -82.4388
    },
    {
        "state": "CA",
        "city": "Turlock",
        "lat": 37.5053,
        "lng": -120.8588
    },
    {
        "state": "CA",
        "city": "Rancho Cordova",
        "lat": 38.5737,
        "lng": -121.2527
    },
    {
        "state": "FL",
        "city": "The Villages",
        "lat": 28.9034,
        "lng": -81.9887
    },
    {
        "state": "CA",
        "city": "Milpitas",
        "lat": 37.4336,
        "lng": -121.8921
    },
    {
        "state": "CA",
        "city": "Perris",
        "lat": 33.7898,
        "lng": -117.2233
    },
    {
        "state": "CA",
        "city": "Upland",
        "lat": 34.1178,
        "lng": -117.6604
    },
    {
        "state": "IL",
        "city": "Alton",
        "lat": 38.9037,
        "lng": -90.152
    },
    {
        "state": "CA",
        "city": "Pleasanton",
        "lat": 37.6663,
        "lng": -121.8805
    },
    {
        "state": "FL",
        "city": "Kendall",
        "lat": 25.6697,
        "lng": -80.3556
    },
    {
        "state": "AR",
        "city": "Jonesboro",
        "lat": 35.8212,
        "lng": -90.6791
    },
    {
        "state": "CA",
        "city": "Bellflower",
        "lat": 33.888,
        "lng": -118.1271
    },
    {
        "state": "MI",
        "city": "Battle Creek",
        "lat": 42.2985,
        "lng": -85.2296
    },
    {
        "state": "CA",
        "city": "Chino Hills",
        "lat": 33.9508,
        "lng": -117.7254
    },
    {
        "state": "WY",
        "city": "Cheyenne",
        "lat": 41.135,
        "lng": -104.7902
    },
    {
        "state": "PA",
        "city": "Lebanon",
        "lat": 40.3412,
        "lng": -76.4228
    },
    {
        "state": "CA",
        "city": "Carmichael",
        "lat": 38.6318,
        "lng": -121.3263
    },
    {
        "state": "UT",
        "city": "South Jordan",
        "lat": 40.557,
        "lng": -111.9784
    },
    {
        "state": "CA",
        "city": "Davis",
        "lat": 38.5553,
        "lng": -121.737
    },
    {
        "state": "KY",
        "city": "Elizabethtown",
        "lat": 37.7031,
        "lng": -85.8773
    },
    {
        "state": "IL",
        "city": "Schaumburg",
        "lat": 42.0308,
        "lng": -88.0838
    },
    {
        "state": "CA",
        "city": "Alameda",
        "lat": 37.7668,
        "lng": -122.267
    },
    {
        "state": "IN",
        "city": "Hammond",
        "lat": 41.6168,
        "lng": -87.4909
    },
    {
        "state": "WA",
        "city": "Pasco",
        "lat": 46.2506,
        "lng": -119.1305
    },
    {
        "state": "IL",
        "city": "Evanston",
        "lat": 42.0464,
        "lng": -87.6943
    },
    {
        "state": "UT",
        "city": "Lehi",
        "lat": 40.4136,
        "lng": -111.8725
    },
    {
        "state": "LA",
        "city": "Alexandria",
        "lat": 31.2923,
        "lng": -92.4702
    },
    {
        "state": "FL",
        "city": "North Port",
        "lat": 27.0576,
        "lng": -82.1977
    },
    {
        "state": "IL",
        "city": "Arlington Heights",
        "lat": 42.0955,
        "lng": -87.9826
    },
    {
        "state": "CA",
        "city": "Camarillo",
        "lat": 34.223,
        "lng": -119.0321
    },
    {
        "state": "MI",
        "city": "Wyoming",
        "lat": 42.8908,
        "lng": -85.7066
    },
    {
        "state": "TX",
        "city": "Flower Mound",
        "lat": 33.0343,
        "lng": -97.1146
    },
    {
        "state": "PA",
        "city": "Bethlehem",
        "lat": 40.6266,
        "lng": -75.3679
    },
    {
        "state": "MS",
        "city": "Hattiesburg",
        "lat": 31.3074,
        "lng": -89.317
    },
    {
        "state": "CO",
        "city": "Loveland",
        "lat": 40.4166,
        "lng": -105.0623
    },
    {
        "state": "CA",
        "city": "Pittsburg",
        "lat": 38.0182,
        "lng": -121.8965
    },
    {
        "state": "TX",
        "city": "Cedar Park",
        "lat": 30.5105,
        "lng": -97.8197
    },
    {
        "state": "WA",
        "city": "Wenatchee",
        "lat": 47.436,
        "lng": -120.3295
    },
    {
        "state": "MI",
        "city": "Southfield",
        "lat": 42.4765,
        "lng": -83.2605
    },
    {
        "state": "MI",
        "city": "Rochester Hills",
        "lat": 42.6645,
        "lng": -83.1563
    },
    {
        "state": "LA",
        "city": "Hammond",
        "lat": 30.5061,
        "lng": -90.4563
    },
    {
        "state": "GA",
        "city": "Valdosta",
        "lat": 30.8502,
        "lng": -83.2788
    },
    {
        "state": "KY",
        "city": "Owensboro",
        "lat": 37.7575,
        "lng": -87.1172
    },
    {
        "state": "CA",
        "city": "Apple Valley",
        "lat": 34.5352,
        "lng": -117.2109
    },
    {
        "state": "MN",
        "city": "Woodbury",
        "lat": 44.9057,
        "lng": -92.923
    },
    {
        "state": "RI",
        "city": "Pawtucket",
        "lat": 41.8744,
        "lng": -71.3743
    },
    {
        "state": "MO",
        "city": "St. Joseph",
        "lat": 39.7598,
        "lng": -94.821
    },
    {
        "state": "FL",
        "city": "Doral",
        "lat": 25.8152,
        "lng": -80.3565
    },
    {
        "state": "NH",
        "city": "Dover",
        "lat": 43.1887,
        "lng": -70.8845
    },
    {
        "state": "TX",
        "city": "Missouri City",
        "lat": 29.563,
        "lng": -95.5365
    },
    {
        "state": "NY",
        "city": "Saratoga Springs",
        "lat": 43.0674,
        "lng": -73.7775
    },
    {
        "state": "ID",
        "city": "Pocatello",
        "lat": 42.8724,
        "lng": -112.4647
    },
    {
        "state": "WI",
        "city": "Oshkosh",
        "lat": 44.0227,
        "lng": -88.5619
    },
    {
        "state": "CT",
        "city": "New Britain",
        "lat": 41.6759,
        "lng": -72.7862
    },
    {
        "state": "CO",
        "city": "Castle Rock",
        "lat": 39.3763,
        "lng": -104.8535
    },
    {
        "state": "FL",
        "city": "Lauderhill",
        "lat": 26.1605,
        "lng": -80.2241
    },
    {
        "state": "CO",
        "city": "Broomfield",
        "lat": 39.9542,
        "lng": -105.0526
    },
    {
        "state": "VA",
        "city": "Dale City",
        "lat": 38.6473,
        "lng": -77.3459
    },
    {
        "state": "IL",
        "city": "Bolingbrook",
        "lat": 41.6901,
        "lng": -88.1021
    },
    {
        "state": "WA",
        "city": "Redmond",
        "lat": 47.6763,
        "lng": -122.1169
    },
    {
        "state": "PR",
        "city": "Caguas",
        "lat": 18.2319,
        "lng": -66.0388
    },
    {
        "state": "TX",
        "city": "Mansfield",
        "lat": 32.569,
        "lng": -97.1213
    },
    {
        "state": "MD",
        "city": "Ellicott City",
        "lat": 39.2774,
        "lng": -76.8345
    },
    {
        "state": "WI",
        "city": "Sheboygan",
        "lat": 43.7403,
        "lng": -87.7316
    },
    {
        "state": "OH",
        "city": "Mansfield",
        "lat": 40.7656,
        "lng": -82.5275
    },
    {
        "state": "NY",
        "city": "Glens Falls",
        "lat": 43.3109,
        "lng": -73.6458
    },
    {
        "state": "FL",
        "city": "Daytona Beach",
        "lat": 29.1995,
        "lng": -81.0982
    },
    {
        "state": "CA",
        "city": "Lodi",
        "lat": 38.1218,
        "lng": -121.2932
    },
    {
        "state": "CA",
        "city": "Redlands",
        "lat": 34.0512,
        "lng": -117.1712
    },
    {
        "state": "VA",
        "city": "Harrisonburg",
        "lat": 38.4362,
        "lng": -78.8735
    },
    {
        "state": "AL",
        "city": "Dothan",
        "lat": 31.2336,
        "lng": -85.407
    },
    {
        "state": "TN",
        "city": "Cleveland",
        "lat": 35.1817,
        "lng": -84.8707
    },
    {
        "state": "TN",
        "city": "Jackson",
        "lat": 35.6538,
        "lng": -88.8354
    },
    {
        "state": "NY",
        "city": "Mount Vernon",
        "lat": 40.9136,
        "lng": -73.8291
    },
    {
        "state": "VA",
        "city": "Centreville",
        "lat": 38.839,
        "lng": -77.4389
    },
    {
        "state": "PA",
        "city": "Altoona",
        "lat": 40.5082,
        "lng": -78.4007
    },
    {
        "state": "MA",
        "city": "Framingham",
        "lat": 42.3085,
        "lng": -71.4368
    },
    {
        "state": "NJ",
        "city": "Camden",
        "lat": 39.9361,
        "lng": -75.1073
    },
    {
        "state": "TX",
        "city": "Georgetown",
        "lat": 30.666,
        "lng": -97.6966
    },
    {
        "state": "CA",
        "city": "Baldwin Park",
        "lat": 34.0829,
        "lng": -117.9722
    },
    {
        "state": "CA",
        "city": "Rocklin",
        "lat": 38.8075,
        "lng": -121.2489
    },
    {
        "state": "CA",
        "city": "Porterville",
        "lat": 36.0643,
        "lng": -119.0338
    },
    {
        "state": "FL",
        "city": "Tamarac",
        "lat": 26.2056,
        "lng": -80.2539
    },
    {
        "state": "MD",
        "city": "Glen Burnie",
        "lat": 39.156,
        "lng": -76.6071
    },
    {
        "state": "VA",
        "city": "Blacksburg",
        "lat": 37.23,
        "lng": -80.4279
    },
    {
        "state": "WI",
        "city": "Wausau",
        "lat": 44.962,
        "lng": -89.6459
    },
    {
        "state": "SC",
        "city": "Sumter",
        "lat": 33.9392,
        "lng": -80.393
    },
    {
        "state": "WI",
        "city": "Janesville",
        "lat": 42.6854,
        "lng": -89.0135
    },
    {
        "state": "GA",
        "city": "Brunswick",
        "lat": 31.1449,
        "lng": -81.4746
    },
    {
        "state": "CA",
        "city": "Dublin",
        "lat": 37.7161,
        "lng": -121.8963
    },
    {
        "state": "DE",
        "city": "Wilmington",
        "lat": 39.7415,
        "lng": -75.5416
    },
    {
        "state": "WI",
        "city": "Waukesha",
        "lat": 43.0087,
        "lng": -88.2464
    },
    {
        "state": "AK",
        "city": "Fairbanks",
        "lat": 64.8353,
        "lng": -147.6533
    },
    {
        "state": "MN",
        "city": "Lakeville",
        "lat": 44.6774,
        "lng": -93.252
    },
    {
        "state": "MO",
        "city": "St. Charles",
        "lat": 38.7954,
        "lng": -90.5157
    },
    {
        "state": "CA",
        "city": "Redondo Beach",
        "lat": 33.8577,
        "lng": -118.3765
    },
    {
        "state": "TN",
        "city": "Spring Hill",
        "lat": 35.7437,
        "lng": -86.9116
    },
    {
        "state": "NJ",
        "city": "Bayonne",
        "lat": 40.6668,
        "lng": -74.1158
    },
    {
        "state": "ND",
        "city": "Grand Forks",
        "lat": 47.9214,
        "lng": -97.0884
    },
    {
        "state": "IN",
        "city": "Noblesville",
        "lat": 40.0355,
        "lng": -86.0042
    },
    {
        "state": "PR",
        "city": "Guaynabo",
        "lat": 18.3832,
        "lng": -66.1134
    },
    {
        "state": "CA",
        "city": "El Paso de Robles",
        "lat": 35.6394,
        "lng": -120.656
    },
    {
        "state": "TX",
        "city": "North Richland Hills",
        "lat": 32.8604,
        "lng": -97.218
    },
    {
        "state": "MN",
        "city": "Maple Grove",
        "lat": 45.1089,
        "lng": -93.4626
    },
    {
        "state": "NJ",
        "city": "Passaic",
        "lat": 40.8574,
        "lng": -74.1282
    },
    {
        "state": "MN",
        "city": "Blaine",
        "lat": 45.1696,
        "lng": -93.2077
    },
    {
        "state": "CA",
        "city": "Lake Elsinore",
        "lat": 33.6847,
        "lng": -117.3344
    },
    {
        "state": "AR",
        "city": "Rogers",
        "lat": 36.317,
        "lng": -94.1531
    },
    {
        "state": "AZ",
        "city": "Casas Adobes",
        "lat": 32.3423,
        "lng": -111.0113
    },
    {
        "state": "TX",
        "city": "Sherman",
        "lat": 33.6273,
        "lng": -96.6221
    },
    {
        "state": "CA",
        "city": "Walnut Creek",
        "lat": 37.9024,
        "lng": -122.0399
    },
    {
        "state": "AR",
        "city": "Conway",
        "lat": 35.0753,
        "lng": -92.4692
    },
    {
        "state": "CA",
        "city": "Eastvale",
        "lat": 33.9617,
        "lng": -117.5803
    },
    {
        "state": "CA",
        "city": "Union City",
        "lat": 37.6032,
        "lng": -122.0181
    },
    {
        "state": "IN",
        "city": "Michigan City",
        "lat": 41.7092,
        "lng": -86.869
    },
    {
        "state": "FL",
        "city": "Poinciana",
        "lat": 28.1217,
        "lng": -81.4821
    },
    {
        "state": "CA",
        "city": "Tulare",
        "lat": 36.1995,
        "lng": -119.34
    },
    {
        "state": "IN",
        "city": "Gary",
        "lat": 41.5905,
        "lng": -87.3473
    },
    {
        "state": "MD",
        "city": "Gaithersburg",
        "lat": 39.1346,
        "lng": -77.2131
    },
    {
        "state": "NJ",
        "city": "East Orange",
        "lat": 40.7651,
        "lng": -74.2117
    },
    {
        "state": "FL",
        "city": "Wesley Chapel",
        "lat": 28.2106,
        "lng": -82.3238
    },
    {
        "state": "IA",
        "city": "West Des Moines",
        "lat": 41.5521,
        "lng": -93.7806
    },
    {
        "state": "GA",
        "city": "Dalton",
        "lat": 34.769,
        "lng": -84.972
    },
    {
        "state": "IA",
        "city": "Dubuque",
        "lat": 42.5002,
        "lng": -90.707
    },
    {
        "state": "NY",
        "city": "Schenectady",
        "lat": 42.8025,
        "lng": -73.9275
    },
    {
        "state": "IA",
        "city": "Ankeny",
        "lat": 41.7288,
        "lng": -93.6031
    },
    {
        "state": "AZ",
        "city": "Maricopa",
        "lat": 33.0408,
        "lng": -112.0011
    },
    {
        "state": "MN",
        "city": "Eagan",
        "lat": 44.817,
        "lng": -93.1638
    },
    {
        "state": "CA",
        "city": "Hanford",
        "lat": 36.3274,
        "lng": -119.6549
    },
    {
        "state": "TN",
        "city": "Bristol",
        "lat": 36.5572,
        "lng": -82.2154
    },
    {
        "state": "CA",
        "city": "Yorba Linda",
        "lat": 33.889,
        "lng": -117.7714
    },
    {
        "state": "FL",
        "city": "Weston",
        "lat": 26.1006,
        "lng": -80.4054
    },
    {
        "state": "CA",
        "city": "Watsonville",
        "lat": 36.9206,
        "lng": -121.7708
    },
    {
        "state": "CA",
        "city": "Palo Alto",
        "lat": 37.3905,
        "lng": -122.1468
    },
    {
        "state": "WA",
        "city": "South Hill",
        "lat": 47.1198,
        "lng": -122.2853
    },
    {
        "state": "KS",
        "city": "Shawnee",
        "lat": 39.0158,
        "lng": -94.8076
    },
    {
        "state": "TX",
        "city": "San Marcos",
        "lat": 29.8734,
        "lng": -97.9356
    },
    {
        "state": "MT",
        "city": "Great Falls",
        "lat": 47.5022,
        "lng": -111.2996
    },
    {
        "state": "MA",
        "city": "Haverhill",
        "lat": 42.7838,
        "lng": -71.0871
    },
    {
        "state": "NJ",
        "city": "Union City",
        "lat": 40.7675,
        "lng": -74.0323
    },
    {
        "state": "IL",
        "city": "Palatine",
        "lat": 42.118,
        "lng": -88.043
    },
    {
        "state": "WA",
        "city": "Longview",
        "lat": 46.1461,
        "lng": -122.963
    },
    {
        "state": "OR",
        "city": "Corvallis",
        "lat": 44.5698,
        "lng": -123.2779
    },
    {
        "state": "MD",
        "city": "Rockville",
        "lat": 39.0834,
        "lng": -77.1553
    },
    {
        "state": "IL",
        "city": "Skokie",
        "lat": 42.036,
        "lng": -87.74
    },
    {
        "state": "WA",
        "city": "Mount Vernon",
        "lat": 48.4203,
        "lng": -122.3115
    },
    {
        "state": "WY",
        "city": "Casper",
        "lat": 42.842,
        "lng": -106.3208
    },
    {
        "state": "IA",
        "city": "Ames",
        "lat": 42.0256,
        "lng": -93.6217
    },
    {
        "state": "FL",
        "city": "Delray Beach",
        "lat": 26.455,
        "lng": -80.0905
    },
    {
        "state": "WA",
        "city": "Sammamish",
        "lat": 47.6017,
        "lng": -122.0416
    },
    {
        "state": "CA",
        "city": "Lynwood",
        "lat": 33.924,
        "lng": -118.2016
    },
    {
        "state": "MD",
        "city": "Dundalk",
        "lat": 39.2704,
        "lng": -76.4942
    },
    {
        "state": "MD",
        "city": "Bethesda",
        "lat": 38.9866,
        "lng": -77.1188
    },
    {
        "state": "TN",
        "city": "Morristown",
        "lat": 36.2043,
        "lng": -83.3001
    },
    {
        "state": "PR",
        "city": "Juana Diaz",
        "lat": 18.0532,
        "lng": -66.5044
    },
    {
        "state": "IL",
        "city": "Kankakee",
        "lat": 41.102,
        "lng": -87.8643
    },
    {
        "state": "PR",
        "city": "Fajardo",
        "lat": 18.3331,
        "lng": -65.6589
    },
    {
        "state": "GA",
        "city": "Alpharetta",
        "lat": 34.0704,
        "lng": -84.2738
    },
    {
        "state": "MI",
        "city": "Novi",
        "lat": 42.4786,
        "lng": -83.4893
    },
    {
        "state": "LA",
        "city": "Kenner",
        "lat": 30.0109,
        "lng": -90.2549
    },
    {
        "state": "MI",
        "city": "Bay City",
        "lat": 43.5902,
        "lng": -83.8887
    },
    {
        "state": "TX",
        "city": "Victoria",
        "lat": 28.8287,
        "lng": -96.9849
    },
    {
        "state": "CA",
        "city": "South San Francisco",
        "lat": 37.6538,
        "lng": -122.4196
    },
    {
        "state": "NC",
        "city": "Apex",
        "lat": 35.7237,
        "lng": -78.8743
    },
    {
        "state": "WV",
        "city": "Parkersburg",
        "lat": 39.2623,
        "lng": -81.542
    },
    {
        "state": "MA",
        "city": "Malden",
        "lat": 42.4305,
        "lng": -71.0576
    },
    {
        "state": "CA",
        "city": "Castro Valley",
        "lat": 37.7088,
        "lng": -122.0626
    },
    {
        "state": "MT",
        "city": "Bozeman",
        "lat": 45.6833,
        "lng": -111.0558
    },
    {
        "state": "NY",
        "city": "Brentwood",
        "lat": 40.7839,
        "lng": -73.2522
    },
    {
        "state": "MA",
        "city": "Waltham",
        "lat": 42.3889,
        "lng": -71.2423
    },
    {
        "state": "TX",
        "city": "Pflugerville",
        "lat": 30.4515,
        "lng": -97.6018
    },
    {
        "state": "AR",
        "city": "North Little Rock",
        "lat": 34.7807,
        "lng": -92.2371
    },
    {
        "state": "CA",
        "city": "Brentwood",
        "lat": 37.9356,
        "lng": -121.719
    },
    {
        "state": "CA",
        "city": "Laguna Niguel",
        "lat": 33.5275,
        "lng": -117.705
    },
    {
        "state": "CA",
        "city": "San Clemente",
        "lat": 33.4499,
        "lng": -117.6102
    },
    {
        "state": "MN",
        "city": "Burnsville",
        "lat": 44.7648,
        "lng": -93.2793
    },
    {
        "state": "TX",
        "city": "Spring",
        "lat": 30.0613,
        "lng": -95.383
    },
    {
        "state": "FL",
        "city": "Port Charlotte",
        "lat": 26.9918,
        "lng": -82.114
    },
    {
        "state": "MN",
        "city": "Eden Prairie",
        "lat": 44.8488,
        "lng": -93.4595
    },
    {
        "state": "IN",
        "city": "Greenwood",
        "lat": 39.6019,
        "lng": -86.1073
    },
    {
        "state": "UT",
        "city": "Millcreek",
        "lat": 40.6892,
        "lng": -111.8292
    },
    {
        "state": "NE",
        "city": "Bellevue",
        "lat": 41.1485,
        "lng": -95.939
    },
    {
        "state": "MN",
        "city": "Coon Rapids",
        "lat": 45.1755,
        "lng": -93.3094
    },
    {
        "state": "TX",
        "city": "Rowlett",
        "lat": 32.9155,
        "lng": -96.5489
    },
    {
        "state": "OH",
        "city": "Hamilton",
        "lat": 39.3939,
        "lng": -84.5653
    },
    {
        "state": "WA",
        "city": "Lakewood",
        "lat": 47.1628,
        "lng": -122.5299
    },
    {
        "state": "CA",
        "city": "Florence-Graham",
        "lat": 33.9682,
        "lng": -118.2447
    },
    {
        "state": "CO",
        "city": "Commerce City",
        "lat": 39.8641,
        "lng": -104.843
    },
    {
        "state": "LA",
        "city": "Bossier City",
        "lat": 32.5224,
        "lng": -93.6668
    },
    {
        "state": "MI",
        "city": "Taylor",
        "lat": 42.226,
        "lng": -83.2688
    },
    {
        "state": "CA",
        "city": "La Habra",
        "lat": 33.9282,
        "lng": -117.9515
    },
    {
        "state": "FL",
        "city": "Port Orange",
        "lat": 29.1085,
        "lng": -81.0137
    },
    {
        "state": "OK",
        "city": "Moore",
        "lat": 35.3293,
        "lng": -97.4757
    },
    {
        "state": "IA",
        "city": "Council Bluffs",
        "lat": 41.2369,
        "lng": -95.8516
    },
    {
        "state": "TX",
        "city": "Leander",
        "lat": 30.5728,
        "lng": -97.8618
    },
    {
        "state": "MI",
        "city": "Dearborn Heights",
        "lat": 42.3164,
        "lng": -83.2769
    },
    {
        "state": "VA",
        "city": "Reston",
        "lat": 38.9497,
        "lng": -77.3461
    },
    {
        "state": "CA",
        "city": "Montebello",
        "lat": 34.0155,
        "lng": -118.1108
    },
    {
        "state": "MI",
        "city": "Pontiac",
        "lat": 42.6493,
        "lng": -83.2878
    },
    {
        "state": "CA",
        "city": "Encinitas",
        "lat": 33.0492,
        "lng": -117.261
    },
    {
        "state": "AZ",
        "city": "Queen Creek",
        "lat": 33.2454,
        "lng": -111.6173
    },
    {
        "state": "MA",
        "city": "Medford",
        "lat": 42.4234,
        "lng": -71.1087
    },
    {
        "state": "OR",
        "city": "Springfield",
        "lat": 44.0538,
        "lng": -122.9811
    },
    {
        "state": "TN",
        "city": "Hendersonville",
        "lat": 36.3063,
        "lng": -86.5997
    },
    {
        "state": "FL",
        "city": "Palm Harbor",
        "lat": 28.0847,
        "lng": -82.7481
    },
    {
        "state": "CA",
        "city": "Pico Rivera",
        "lat": 33.9901,
        "lng": -118.0888
    },
    {
        "state": "GA",
        "city": "Marietta",
        "lat": 33.9533,
        "lng": -84.5422
    },
    {
        "state": "FL",
        "city": "Wellington",
        "lat": 26.6461,
        "lng": -80.2699
    },
    {
        "state": "FL",
        "city": "Sanford",
        "lat": 28.7891,
        "lng": -81.2757
    },
    {
        "state": "CA",
        "city": "Woodland",
        "lat": 38.6712,
        "lng": -121.75
    },
    {
        "state": "ID",
        "city": "Caldwell",
        "lat": 43.6453,
        "lng": -116.6594
    },
    {
        "state": "NC",
        "city": "Huntersville",
        "lat": 35.406,
        "lng": -80.8716
    },
    {
        "state": "CT",
        "city": "Bristol",
        "lat": 41.6812,
        "lng": -72.9407
    },
    {
        "state": "FL",
        "city": "Jupiter",
        "lat": 26.92,
        "lng": -80.1128
    },
    {
        "state": "CA",
        "city": "San Rafael",
        "lat": 37.9905,
        "lng": -122.5221
    },
    {
        "state": "CA",
        "city": "La Mesa",
        "lat": 32.7703,
        "lng": -117.0204
    },
    {
        "state": "WA",
        "city": "Richland",
        "lat": 46.2824,
        "lng": -119.2939
    },
    {
        "state": "MA",
        "city": "Revere",
        "lat": 42.4189,
        "lng": -71.004
    },
    {
        "state": "CT",
        "city": "Meriden",
        "lat": 41.5369,
        "lng": -72.7946
    },
    {
        "state": "CA",
        "city": "Monterey Park",
        "lat": 34.0497,
        "lng": -118.1326
    },
    {
        "state": "CA",
        "city": "Gardena",
        "lat": 33.8943,
        "lng": -118.3072
    },
    {
        "state": "TX",
        "city": "Euless",
        "lat": 32.8508,
        "lng": -97.08
    },
    {
        "state": "IL",
        "city": "Des Plaines",
        "lat": 42.0345,
        "lng": -87.9008
    },
    {
        "state": "WI",
        "city": "West Allis",
        "lat": 43.0068,
        "lng": -88.0296
    },
    {
        "state": "FL",
        "city": "North Miami",
        "lat": 25.9008,
        "lng": -80.1686
    },
    {
        "state": "FL",
        "city": "St. Cloud",
        "lat": 28.2363,
        "lng": -81.2779
    },
    {
        "state": "FL",
        "city": "The Hammocks",
        "lat": 25.67,
        "lng": -80.4482
    },
    {
        "state": "CA",
        "city": "Cupertino",
        "lat": 37.3168,
        "lng": -122.0466
    },
    {
        "state": "UT",
        "city": "Taylorsville",
        "lat": 40.6569,
        "lng": -111.9493
    },
    {
        "state": "CA",
        "city": "Petaluma",
        "lat": 38.2423,
        "lng": -122.6266
    },
    {
        "state": "IN",
        "city": "Kokomo",
        "lat": 40.464,
        "lng": -86.1277
    },
    {
        "state": "CA",
        "city": "Santee",
        "lat": 32.8554,
        "lng": -116.9851
    },
    {
        "state": "GA",
        "city": "Stonecrest",
        "lat": 33.6842,
        "lng": -84.1372
    },
    {
        "state": "MA",
        "city": "Taunton",
        "lat": 41.9036,
        "lng": -71.0943
    },
    {
        "state": "NY",
        "city": "White Plains",
        "lat": 41.022,
        "lng": -73.7547
    },
    {
        "state": "FL",
        "city": "Palm Beach Gardens",
        "lat": 26.8466,
        "lng": -80.1679
    },
    {
        "state": "NC",
        "city": "Chapel Hill",
        "lat": 35.9271,
        "lng": -79.0391
    },
    {
        "state": "NJ",
        "city": "Hoboken",
        "lat": 40.7452,
        "lng": -74.0281
    },
    {
        "state": "CO",
        "city": "Parker",
        "lat": 39.5084,
        "lng": -104.7753
    },
    {
        "state": "MO",
        "city": "Blue Springs",
        "lat": 39.0124,
        "lng": -94.2721
    },
    {
        "state": "WA",
        "city": "Shoreline",
        "lat": 47.7564,
        "lng": -122.3426
    },
    {
        "state": "MI",
        "city": "St. Clair Shores",
        "lat": 42.4925,
        "lng": -82.8961
    },
    {
        "state": "FL",
        "city": "Horizon West",
        "lat": 28.4417,
        "lng": -81.6146
    },
    {
        "state": "FL",
        "city": "Margate",
        "lat": 26.2466,
        "lng": -80.2119
    },
    {
        "state": "IL",
        "city": "Orland Park",
        "lat": 41.6075,
        "lng": -87.8619
    },
    {
        "state": "NV",
        "city": "Carson City",
        "lat": 39.1511,
        "lng": -119.7476
    },
    {
        "state": "OK",
        "city": "Midwest City",
        "lat": 35.463,
        "lng": -97.371
    },
    {
        "state": "MI",
        "city": "Royal Oak",
        "lat": 42.5084,
        "lng": -83.1539
    },
    {
        "state": "MD",
        "city": "Bowie",
        "lat": 38.9549,
        "lng": -76.7406
    },
    {
        "state": "OH",
        "city": "Kettering",
        "lat": 39.6956,
        "lng": -84.1494
    },
    {
        "state": "MO",
        "city": "St. Peters",
        "lat": 38.7825,
        "lng": -90.6061
    },
    {
        "state": "IL",
        "city": "Oak Lawn",
        "lat": 41.7139,
        "lng": -87.7528
    },
    {
        "state": "MD",
        "city": "Towson",
        "lat": 39.3944,
        "lng": -76.619
    },
    {
        "state": "FL",
        "city": "Coconut Creek",
        "lat": 26.2803,
        "lng": -80.1842
    },
    {
        "state": "AL",
        "city": "Decatur",
        "lat": 34.5731,
        "lng": -86.9905
    },
    {
        "state": "KS",
        "city": "Lenexa",
        "lat": 38.9609,
        "lng": -94.8018
    },
    {
        "state": "TN",
        "city": "Bartlett",
        "lat": 35.2337,
        "lng": -89.8195
    },
    {
        "state": "CA",
        "city": "South Whittier",
        "lat": 33.9336,
        "lng": -118.0312
    },
    {
        "state": "AZ",
        "city": "Lake Havasu City",
        "lat": 34.5006,
        "lng": -114.3113
    },
    {
        "state": "MD",
        "city": "Bel Air South",
        "lat": 39.5022,
        "lng": -76.3113
    },
    {
        "state": "FL",
        "city": "Fountainebleau",
        "lat": 25.7723,
        "lng": -80.346
    },
    {
        "state": "TX",
        "city": "Wylie",
        "lat": 33.0362,
        "lng": -96.5161
    },
    {
        "state": "AL",
        "city": "Madison",
        "lat": 34.7114,
        "lng": -86.7626
    },
    {
        "state": "GA",
        "city": "Brookhaven",
        "lat": 33.8743,
        "lng": -84.3314
    },
    {
        "state": "CA",
        "city": "Highland",
        "lat": 34.1113,
        "lng": -117.165
    },
    {
        "state": "CA",
        "city": "Fountain Valley",
        "lat": 33.7105,
        "lng": -117.9514
    },
    {
        "state": "IL",
        "city": "Berwyn",
        "lat": 41.8433,
        "lng": -87.7909
    },
    {
        "state": "MD",
        "city": "Severn",
        "lat": 39.1355,
        "lng": -76.6956
    },
    {
        "state": "OR",
        "city": "Albany",
        "lat": 44.6272,
        "lng": -123.0965
    },
    {
        "state": "CA",
        "city": "National City",
        "lat": 32.6654,
        "lng": -117.0983
    },
    {
        "state": "WA",
        "city": "Lacey",
        "lat": 47.0462,
        "lng": -122.7933
    },
    {
        "state": "IL",
        "city": "Mount Prospect",
        "lat": 42.0641,
        "lng": -87.9375
    },
    {
        "state": "CA",
        "city": "Arcadia",
        "lat": 34.1342,
        "lng": -118.0373
    },
    {
        "state": "TX",
        "city": "DeSoto",
        "lat": 32.5992,
        "lng": -96.8633
    },
    {
        "state": "GA",
        "city": "Smyrna",
        "lat": 33.8633,
        "lng": -84.5168
    },
    {
        "state": "FL",
        "city": "Bradenton",
        "lat": 27.4901,
        "lng": -82.5757
    },
    {
        "state": "NJ",
        "city": "New Brunswick",
        "lat": 40.487,
        "lng": -74.445
    },
    {
        "state": "MN",
        "city": "Apple Valley",
        "lat": 44.7457,
        "lng": -93.2004
    },
    {
        "state": "IL",
        "city": "Tinley Park",
        "lat": 41.567,
        "lng": -87.8049
    },
    {
        "state": "FL",
        "city": "Sarasota",
        "lat": 27.3387,
        "lng": -82.5432
    },
    {
        "state": "CA",
        "city": "Hacienda Heights",
        "lat": 33.997,
        "lng": -117.9727
    },
    {
        "state": "MA",
        "city": "Chicopee",
        "lat": 42.1764,
        "lng": -72.5719
    },
    {
        "state": "CT",
        "city": "West Haven",
        "lat": 41.2739,
        "lng": -72.9672
    },
    {
        "state": "UT",
        "city": "Herriman",
        "lat": 40.4899,
        "lng": -112.017
    },
    {
        "state": "NJ",
        "city": "Perth Amboy",
        "lat": 40.5202,
        "lng": -74.2724
    },
    {
        "state": "AZ",
        "city": "Casa Grande",
        "lat": 32.9069,
        "lng": -111.7624
    },
    {
        "state": "OR",
        "city": "Tigard",
        "lat": 45.4237,
        "lng": -122.7845
    },
    {
        "state": "FL",
        "city": "Apopka",
        "lat": 28.7015,
        "lng": -81.5316
    },
    {
        "state": "MS",
        "city": "Southaven",
        "lat": 34.9514,
        "lng": -89.9786
    },
    {
        "state": "CA",
        "city": "Huntington Park",
        "lat": 33.98,
        "lng": -118.2167
    },
    {
        "state": "CA",
        "city": "Diamond Bar",
        "lat": 33.9992,
        "lng": -117.8161
    },
    {
        "state": "AR",
        "city": "Bentonville",
        "lat": 36.3547,
        "lng": -94.2305
    },
    {
        "state": "CA",
        "city": "Yucaipa",
        "lat": 34.0336,
        "lng": -117.0429
    },
    {
        "state": "NJ",
        "city": "Plainfield",
        "lat": 40.6154,
        "lng": -74.4157
    },
    {
        "state": "KS",
        "city": "Manhattan",
        "lat": 39.1886,
        "lng": -96.6048
    },
    {
        "state": "MD",
        "city": "Aspen Hill",
        "lat": 39.0927,
        "lng": -77.0826
    },
    {
        "state": "NC",
        "city": "Rocky Mount",
        "lat": 35.9685,
        "lng": -77.804
    },
    {
        "state": "MA",
        "city": "Peabody",
        "lat": 42.5335,
        "lng": -70.9725
    },
    {
        "state": "CA",
        "city": "West Sacramento",
        "lat": 38.5557,
        "lng": -121.5505
    },
    {
        "state": "CA",
        "city": "San Jacinto",
        "lat": 33.797,
        "lng": -116.9916
    },
    {
        "state": "MI",
        "city": "Kentwood",
        "lat": 42.8852,
        "lng": -85.5926
    },
    {
        "state": "CA",
        "city": "Colton",
        "lat": 34.0538,
        "lng": -117.3255
    },
    {
        "state": "IL",
        "city": "Oak Park",
        "lat": 41.8872,
        "lng": -87.7899
    },
    {
        "state": "FL",
        "city": "Westchester",
        "lat": 25.7471,
        "lng": -80.3523
    },
    {
        "state": "TN",
        "city": "Smyrna",
        "lat": 35.9687,
        "lng": -86.5264
    },
    {
        "state": "IL",
        "city": "Wheaton",
        "lat": 41.8561,
        "lng": -88.1085
    },
    {
        "state": "CA",
        "city": "Beaumont",
        "lat": 33.9076,
        "lng": -116.9766
    },
    {
        "state": "OR",
        "city": "Aloha",
        "lat": 45.492,
        "lng": -122.8725
    },
    {
        "state": "MN",
        "city": "Minnetonka",
        "lat": 44.9322,
        "lng": -93.4598
    },
    {
        "state": "FL",
        "city": "Pinellas Park",
        "lat": 27.8589,
        "lng": -82.7078
    },
    {
        "state": "NC",
        "city": "Kannapolis",
        "lat": 35.4764,
        "lng": -80.6408
    },
    {
        "state": "CA",
        "city": "Paramount",
        "lat": 33.8977,
        "lng": -118.1651
    },
    {
        "state": "TX",
        "city": "Texas City",
        "lat": 29.4154,
        "lng": -94.9682
    },
    {
        "state": "CA",
        "city": "Novato",
        "lat": 38.092,
        "lng": -122.5575
    },
    {
        "state": "MN",
        "city": "Edina",
        "lat": 44.8914,
        "lng": -93.3602
    },
    {
        "state": "IL",
        "city": "Normal",
        "lat": 40.5217,
        "lng": -88.9884
    },
    {
        "state": "FL",
        "city": "Tamiami",
        "lat": 25.7556,
        "lng": -80.4016
    },
    {
        "state": "NE",
        "city": "Grand Island",
        "lat": 40.9218,
        "lng": -98.3586
    },
    {
        "state": "MA",
        "city": "Methuen Town",
        "lat": 42.734,
        "lng": -71.1889
    },
    {
        "state": "OH",
        "city": "Elyria",
        "lat": 41.376,
        "lng": -82.106
    },
    {
        "state": "MD",
        "city": "Wheaton",
        "lat": 39.0492,
        "lng": -77.0573
    },
    {
        "state": "FL",
        "city": "Kendale Lakes",
        "lat": 25.7081,
        "lng": -80.4078
    },
    {
        "state": "AZ",
        "city": "Marana",
        "lat": 32.4355,
        "lng": -111.1558
    },
    {
        "state": "NJ",
        "city": "West New York",
        "lat": 40.7857,
        "lng": -74.0094
    },
    {
        "state": "ID",
        "city": "Twin Falls",
        "lat": 42.5645,
        "lng": -114.4613
    },
    {
        "state": "MO",
        "city": "Florissant",
        "lat": 38.7996,
        "lng": -90.3269
    },
    {
        "state": "CA",
        "city": "Glendora",
        "lat": 34.1449,
        "lng": -117.8467
    },
    {
        "state": "CA",
        "city": "Cathedral City",
        "lat": 33.8362,
        "lng": -116.4642
    },
    {
        "state": "CA",
        "city": "Aliso Viejo",
        "lat": 33.5792,
        "lng": -117.7289
    },
    {
        "state": "CA",
        "city": "Placentia",
        "lat": 33.8807,
        "lng": -117.8553
    },
    {
        "state": "IL",
        "city": "Hoffman Estates",
        "lat": 42.064,
        "lng": -88.1468
    },
    {
        "state": "WA",
        "city": "Burien",
        "lat": 47.4762,
        "lng": -122.3394
    },
    {
        "state": "GA",
        "city": "Dunwoody",
        "lat": 33.9418,
        "lng": -84.3122
    },
    {
        "state": "CA",
        "city": "Palm Desert",
        "lat": 33.7378,
        "lng": -116.3695
    },
    {
        "state": "NY",
        "city": "Troy",
        "lat": 42.7354,
        "lng": -73.6751
    },
    {
        "state": "TN",
        "city": "Collierville",
        "lat": 35.047,
        "lng": -89.6987
    },
    {
        "state": "PA",
        "city": "Levittown",
        "lat": 40.1533,
        "lng": -74.8531
    },
    {
        "state": "CA",
        "city": "Rosemead",
        "lat": 34.0689,
        "lng": -118.0823
    },
    {
        "state": "FL",
        "city": "Country Club",
        "lat": 25.9407,
        "lng": -80.3102
    },
    {
        "state": "OK",
        "city": "Enid",
        "lat": 36.4063,
        "lng": -97.87
    },
    {
        "state": "OH",
        "city": "Cuyahoga Falls",
        "lat": 41.1641,
        "lng": -81.5207
    },
    {
        "state": "IN",
        "city": "Mishawaka",
        "lat": 41.6742,
        "lng": -86.1666
    },
    {
        "state": "IN",
        "city": "Columbus",
        "lat": 39.2093,
        "lng": -85.9183
    },
    {
        "state": "SC",
        "city": "Summerville",
        "lat": 33.0016,
        "lng": -80.1799
    },
    {
        "state": "NY",
        "city": "Levittown",
        "lat": 40.7241,
        "lng": -73.5125
    },
    {
        "state": "TX",
        "city": "Grapevine",
        "lat": 32.9343,
        "lng": -97.0742
    },
    {
        "state": "CA",
        "city": "Covina",
        "lat": 34.0903,
        "lng": -117.8818
    },
    {
        "state": "CT",
        "city": "Milford city ",
        "lat": 41.2255,
        "lng": -73.0625
    },
    {
        "state": "UT",
        "city": "Draper",
        "lat": 40.4957,
        "lng": -111.8605
    },
    {
        "state": "OH",
        "city": "Lakewood",
        "lat": 41.4822,
        "lng": -81.8008
    },
    {
        "state": "AZ",
        "city": "Catalina Foothills",
        "lat": 32.3046,
        "lng": -110.8838
    },
    {
        "state": "CA",
        "city": "Delano",
        "lat": 35.7662,
        "lng": -119.2635
    },
    {
        "state": "CA",
        "city": "Lincoln",
        "lat": 38.8774,
        "lng": -121.2937
    },
    {
        "state": "UT",
        "city": "Murray",
        "lat": 40.6498,
        "lng": -111.8874
    },
    {
        "state": "NC",
        "city": "Mooresville",
        "lat": 35.5847,
        "lng": -80.8266
    },
    {
        "state": "IL",
        "city": "Downers Grove",
        "lat": 41.7949,
        "lng": -88.0172
    },
    {
        "state": "CA",
        "city": "Florin",
        "lat": 38.4832,
        "lng": -121.4043
    },
    {
        "state": "CA",
        "city": "Cypress",
        "lat": 33.8171,
        "lng": -118.0386
    },
    {
        "state": "IN",
        "city": "Jeffersonville",
        "lat": 38.3376,
        "lng": -85.7026
    },
    {
        "state": "MD",
        "city": "North Bethesda",
        "lat": 39.0393,
        "lng": -77.1191
    },
    {
        "state": "CA",
        "city": "Azusa",
        "lat": 34.1386,
        "lng": -117.9124
    },
    {
        "state": "FL",
        "city": "Coral Gables",
        "lat": 25.7037,
        "lng": -80.2715
    },
    {
        "state": "MO",
        "city": "Chesterfield",
        "lat": 38.6589,
        "lng": -90.5803
    },
    {
        "state": "VA",
        "city": "McLean",
        "lat": 38.9436,
        "lng": -77.1943
    },
    {
        "state": "MN",
        "city": "St. Louis Park",
        "lat": 44.9488,
        "lng": -93.3649
    },
    {
        "state": "HI",
        "city": "East Honolulu",
        "lat": 21.2975,
        "lng": -157.7211
    },
    {
        "state": "TX",
        "city": "Bedford",
        "lat": 32.8464,
        "lng": -97.135
    },
    {
        "state": "OH",
        "city": "Euclid",
        "lat": 41.5903,
        "lng": -81.5188
    },
    {
        "state": "IN",
        "city": "Lawrence",
        "lat": 39.8674,
        "lng": -85.9904
    },
    {
        "state": "CA",
        "city": "Ceres",
        "lat": 37.5952,
        "lng": -120.962
    },
    {
        "state": "FL",
        "city": "University",
        "lat": 28.0771,
        "lng": -82.4335
    },
    {
        "state": "MS",
        "city": "Biloxi",
        "lat": 30.4426,
        "lng": -88.9514
    },
    {
        "state": "CA",
        "city": "El Dorado Hills",
        "lat": 38.675,
        "lng": -121.049
    },
    {
        "state": "CA",
        "city": "Cerritos",
        "lat": 33.8678,
        "lng": -118.0686
    },
    {
        "state": "TX",
        "city": "Burleson",
        "lat": 32.517,
        "lng": -97.3344
    },
    {
        "state": "MI",
        "city": "Portage",
        "lat": 42.2,
        "lng": -85.5906
    },
    {
        "state": "OH",
        "city": "Dublin",
        "lat": 40.1112,
        "lng": -83.1454
    },
    {
        "state": "CA",
        "city": "Poway",
        "lat": 32.9871,
        "lng": -117.0201
    },
    {
        "state": "TX",
        "city": "Cedar Hill",
        "lat": 32.581,
        "lng": -96.9591
    },
    {
        "state": "MA",
        "city": "Everett",
        "lat": 42.4064,
        "lng": -71.0545
    },
    {
        "state": "OK",
        "city": "Stillwater",
        "lat": 36.1317,
        "lng": -97.0742
    },
    {
        "state": "FL",
        "city": "Titusville",
        "lat": 28.5727,
        "lng": -80.8193
    },
    {
        "state": "NY",
        "city": "Niagara Falls",
        "lat": 43.0921,
        "lng": -79.0147
    },
    {
        "state": "TX",
        "city": "Kyle",
        "lat": 29.9932,
        "lng": -97.8852
    },
    {
        "state": "VA",
        "city": "Leesburg",
        "lat": 39.1057,
        "lng": -77.5544
    },
    {
        "state": "IN",
        "city": "Westfield",
        "lat": 40.0341,
        "lng": -86.1529
    },
    {
        "state": "TX",
        "city": "Little Elm",
        "lat": 33.1858,
        "lng": -96.9295
    },
    {
        "state": "CT",
        "city": "Middletown",
        "lat": 41.5476,
        "lng": -72.6549
    },
    {
        "state": "CA",
        "city": "North Highlands",
        "lat": 38.6713,
        "lng": -121.3721
    },
    {
        "state": "VA",
        "city": "Tuckahoe",
        "lat": 37.5878,
        "lng": -77.5858
    },
    {
        "state": "NC",
        "city": "Wake Forest",
        "lat": 35.9632,
        "lng": -78.514
    },
    {
        "state": "ND",
        "city": "Minot",
        "lat": 48.2375,
        "lng": -101.278
    },
    {
        "state": "NM",
        "city": "Roswell",
        "lat": 33.373,
        "lng": -104.5294
    },
    {
        "state": "WI",
        "city": "Wauwatosa",
        "lat": 43.0616,
        "lng": -88.0347
    },
    {
        "state": "WA",
        "city": "Bothell",
        "lat": 47.7735,
        "lng": -122.2044
    },
    {
        "state": "IL",
        "city": "Glenview",
        "lat": 42.0825,
        "lng": -87.8214
    },
    {
        "state": "TX",
        "city": "Rockwall",
        "lat": 32.9169,
        "lng": -96.4374
    },
    {
        "state": "NC",
        "city": "Wilson",
        "lat": 35.7311,
        "lng": -77.9284
    },
    {
        "state": "CA",
        "city": "Rancho Santa Margarita",
        "lat": 33.6318,
        "lng": -117.5988
    },
    {
        "state": "CA",
        "city": "La Mirada",
        "lat": 33.9025,
        "lng": -118.0093
    },
    {
        "state": "CA",
        "city": "Antelope",
        "lat": 38.7153,
        "lng": -121.361
    },
    {
        "state": "HI",
        "city": "Hilo",
        "lat": 19.6883,
        "lng": -155.0863
    },
    {
        "state": "CA",
        "city": "San Luis Obispo",
        "lat": 35.2669,
        "lng": -120.669
    },
    {
        "state": "MI",
        "city": "Roseville",
        "lat": 42.5074,
        "lng": -82.9369
    },
    {
        "state": "CA",
        "city": "Newark",
        "lat": 37.5201,
        "lng": -122.0307
    },
    {
        "state": "OH",
        "city": "Mentor",
        "lat": 41.6893,
        "lng": -81.3362
    },
    {
        "state": "FL",
        "city": "Ocoee",
        "lat": 28.5796,
        "lng": -81.5332
    },
    {
        "state": "CA",
        "city": "Rowland Heights",
        "lat": 33.9716,
        "lng": -117.8912
    },
    {
        "state": "FL",
        "city": "Fort Pierce",
        "lat": 27.4255,
        "lng": -80.3431
    },
    {
        "state": "CA",
        "city": "Brea",
        "lat": 33.9254,
        "lng": -117.8655
    },
    {
        "state": "AZ",
        "city": "Oro Valley",
        "lat": 32.4208,
        "lng": -110.9767
    },
    {
        "state": "RI",
        "city": "East Providence",
        "lat": 41.8065,
        "lng": -71.3565
    },
    {
        "state": "HI",
        "city": "Pearl City",
        "lat": 21.4031,
        "lng": -157.9566
    },
    {
        "state": "KS",
        "city": "Salina",
        "lat": 38.8136,
        "lng": -97.6143
    },
    {
        "state": "OH",
        "city": "Beavercreek",
        "lat": 39.731,
        "lng": -84.0624
    },
    {
        "state": "FL",
        "city": "Winter Garden",
        "lat": 28.5421,
        "lng": -81.5967
    },
    {
        "state": "MD",
        "city": "Potomac",
        "lat": 39.0141,
        "lng": -77.1943
    },
    {
        "state": "NM",
        "city": "Farmington",
        "lat": 36.7555,
        "lng": -108.1823
    },
    {
        "state": "MA",
        "city": "Attleboro",
        "lat": 41.9311,
        "lng": -71.295
    },
    {
        "state": "TX",
        "city": "Huntsville",
        "lat": 30.7009,
        "lng": -95.5567
    },
    {
        "state": "OH",
        "city": "Strongsville",
        "lat": 41.3128,
        "lng": -81.8313
    },
    {
        "state": "UT",
        "city": "Eagle Mountain",
        "lat": 40.3137,
        "lng": -112.0114
    },
    {
        "state": "AZ",
        "city": "Prescott",
        "lat": 34.5849,
        "lng": -112.4473
    },
    {
        "state": "MS",
        "city": "Olive Branch",
        "lat": 34.961,
        "lng": -89.8469
    },
    {
        "state": "SC",
        "city": "Goose Creek",
        "lat": 32.9927,
        "lng": -80.0055
    },
    {
        "state": "NJ",
        "city": "Sicklerville",
        "lat": 39.7452,
        "lng": -74.9934
    },
    {
        "state": "FL",
        "city": "Altamonte Springs",
        "lat": 28.6615,
        "lng": -81.3953
    },
    {
        "state": "TX",
        "city": "Haltom City",
        "lat": 32.8176,
        "lng": -97.2707
    },
    {
        "state": "NJ",
        "city": "Hackensack",
        "lat": 40.8891,
        "lng": -74.0462
    },
    {
        "state": "IL",
        "city": "Elmhurst",
        "lat": 41.8973,
        "lng": -87.9432
    },
    {
        "state": "IA",
        "city": "Urbandale",
        "lat": 41.639,
        "lng": -93.7812
    },
    {
        "state": "CA",
        "city": "Los Banos",
        "lat": 37.063,
        "lng": -120.8406
    },
    {
        "state": "CO",
        "city": "Littleton",
        "lat": 39.5915,
        "lng": -105.0188
    },
    {
        "state": "VA",
        "city": "Ashburn",
        "lat": 39.0277,
        "lng": -77.4714
    },
    {
        "state": "MI",
        "city": "East Lansing",
        "lat": 42.748,
        "lng": -84.4836
    },
    {
        "state": "UT",
        "city": "Bountiful",
        "lat": 40.8721,
        "lng": -111.8647
    },
    {
        "state": "TX",
        "city": "Keller",
        "lat": 32.9335,
        "lng": -97.2256
    },
    {
        "state": "CA",
        "city": "Morgan Hill",
        "lat": 37.1325,
        "lng": -121.6419
    },
    {
        "state": "AZ",
        "city": "Sierra Vista",
        "lat": 31.563,
        "lng": -110.3153
    },
    {
        "state": "NJ",
        "city": "Sayreville",
        "lat": 40.4656,
        "lng": -74.3237
    },
    {
        "state": "MD",
        "city": "Odenton",
        "lat": 39.0661,
        "lng": -76.6938
    },
    {
        "state": "OH",
        "city": "Cleveland Heights",
        "lat": 41.5113,
        "lng": -81.5636
    },
    {
        "state": "TN",
        "city": "Gallatin",
        "lat": 36.3782,
        "lng": -86.4698
    },
    {
        "state": "IL",
        "city": "Plainfield",
        "lat": 41.6207,
        "lng": -88.2253
    },
    {
        "state": "CA",
        "city": "Palm Springs",
        "lat": 33.8017,
        "lng": -116.5382
    },
    {
        "state": "UT",
        "city": "Riverton",
        "lat": 40.5176,
        "lng": -111.9636
    },
    {
        "state": "IN",
        "city": "West Lafayette",
        "lat": 40.4432,
        "lng": -86.9238
    },
    {
        "state": "TN",
        "city": "Brentwood",
        "lat": 35.9918,
        "lng": -86.7758
    },
    {
        "state": "FL",
        "city": "Cutler Bay",
        "lat": 25.5765,
        "lng": -80.3356
    },
    {
        "state": "VA",
        "city": "Lake Ridge",
        "lat": 38.6847,
        "lng": -77.3066
    },
    {
        "state": "NV",
        "city": "Whitney",
        "lat": 36.1008,
        "lng": -115.0379
    },
    {
        "state": "NV",
        "city": "Pahrump",
        "lat": 36.2235,
        "lng": -115.9974
    },
    {
        "state": "FL",
        "city": "North Lauderdale",
        "lat": 26.2113,
        "lng": -80.2209
    },
    {
        "state": "OH",
        "city": "Fairfield",
        "lat": 39.3301,
        "lng": -84.5409
    },
    {
        "state": "MO",
        "city": "Wentzville",
        "lat": 38.8153,
        "lng": -90.8669
    },
    {
        "state": "MA",
        "city": "Salem",
        "lat": 42.5129,
        "lng": -70.9021
    },
    {
        "state": "WI",
        "city": "Fond du Lac",
        "lat": 43.7718,
        "lng": -88.4397
    },
    {
        "state": "CA",
        "city": "Rohnert Park",
        "lat": 38.3479,
        "lng": -122.6965
    },
    {
        "state": "MN",
        "city": "Mankato",
        "lat": 44.1715,
        "lng": -93.9772
    },
    {
        "state": "MN",
        "city": "Moorhead",
        "lat": 46.8673,
        "lng": -96.7461
    },
    {
        "state": "TX",
        "city": "The Colony",
        "lat": 33.0925,
        "lng": -96.8976
    },
    {
        "state": "VA",
        "city": "Burke",
        "lat": 38.7773,
        "lng": -77.2633
    },
    {
        "state": "NY",
        "city": "Freeport",
        "lat": 40.6515,
        "lng": -73.585
    },
    {
        "state": "CA",
        "city": "El Centro",
        "lat": 32.7865,
        "lng": -115.5595
    },
    {
        "state": "MN",
        "city": "Shakopee",
        "lat": 44.7745,
        "lng": -93.4772
    },
    {
        "state": "PA",
        "city": "Wilkes-Barre",
        "lat": 41.2469,
        "lng": -75.876
    },
    {
        "state": "CA",
        "city": "Lompoc",
        "lat": 34.6618,
        "lng": -120.4714
    },
    {
        "state": "NY",
        "city": "Hicksville",
        "lat": 40.7637,
        "lng": -73.5245
    },
    {
        "state": "FL",
        "city": "Oakland Park",
        "lat": 26.178,
        "lng": -80.1528
    },
    {
        "state": "IL",
        "city": "Lombard",
        "lat": 41.8741,
        "lng": -88.0157
    },
    {
        "state": "NH",
        "city": "Concord",
        "lat": 43.2305,
        "lng": -71.5595
    },
    {
        "state": "MA",
        "city": "Pittsfield",
        "lat": 42.4517,
        "lng": -73.2605
    },
    {
        "state": "FL",
        "city": "Greenacres",
        "lat": 26.627,
        "lng": -80.1371
    },
    {
        "state": "CA",
        "city": "Oakley",
        "lat": 37.9929,
        "lng": -121.6952
    },
    {
        "state": "NJ",
        "city": "Linden",
        "lat": 40.6251,
        "lng": -74.2383
    },
    {
        "state": "CA",
        "city": "Campbell",
        "lat": 37.2802,
        "lng": -121.9539
    },
    {
        "state": "CA",
        "city": "Danville",
        "lat": 37.8121,
        "lng": -121.9698
    },
    {
        "state": "FL",
        "city": "North Miami Beach",
        "lat": 25.9302,
        "lng": -80.1659
    },
    {
        "state": "FL",
        "city": "Clermont",
        "lat": 28.5325,
        "lng": -81.7208
    },
    {
        "state": "CA",
        "city": "San Bruno",
        "lat": 37.6256,
        "lng": -122.4313
    },
    {
        "state": "TX",
        "city": "Channelview",
        "lat": 29.7914,
        "lng": -95.1144
    },
    {
        "state": "PR",
        "city": "Trujillo Alto",
        "lat": 18.3599,
        "lng": -66.0096
    },
    {
        "state": "FL",
        "city": "Ormond Beach",
        "lat": 29.2985,
        "lng": -81.1014
    },
    {
        "state": "OH",
        "city": "Huber Heights",
        "lat": 39.8595,
        "lng": -84.113
    },
    {
        "state": "RI",
        "city": "Woonsocket",
        "lat": 42.001,
        "lng": -71.4993
    },
    {
        "state": "IL",
        "city": "Buffalo Grove",
        "lat": 42.1675,
        "lng": -87.9615
    },
    {
        "state": "NY",
        "city": "West Babylon",
        "lat": 40.7129,
        "lng": -73.3585
    },
    {
        "state": "MD",
        "city": "Catonsville",
        "lat": 39.2646,
        "lng": -76.7424
    },
    {
        "state": "CA",
        "city": "Altadena",
        "lat": 34.1927,
        "lng": -118.1346
    },
    {
        "state": "WA",
        "city": "Edmonds",
        "lat": 47.8115,
        "lng": -122.3533
    },
    {
        "state": "VA",
        "city": "Linton Hall",
        "lat": 38.7551,
        "lng": -77.575
    },
    {
        "state": "UT",
        "city": "Spanish Fork",
        "lat": 40.1101,
        "lng": -111.6405
    },
    {
        "state": "GA",
        "city": "Newnan",
        "lat": 33.3767,
        "lng": -84.7761
    },
    {
        "state": "CA",
        "city": "Vineyard",
        "lat": 38.474,
        "lng": -121.324
    },
    {
        "state": "MO",
        "city": "Jefferson City",
        "lat": 38.5676,
        "lng": -92.1759
    },
    {
        "state": "VA",
        "city": "Manassas",
        "lat": 38.7479,
        "lng": -77.4838
    },
    {
        "state": "VA",
        "city": "Woodbridge",
        "lat": 38.6409,
        "lng": -77.258
    },
    {
        "state": "WA",
        "city": "Puyallup",
        "lat": 47.1793,
        "lng": -122.2902
    },
    {
        "state": "TX",
        "city": "Schertz",
        "lat": 29.565,
        "lng": -98.2535
    },
    {
        "state": "TX",
        "city": "Coppell",
        "lat": 32.9639,
        "lng": -96.9903
    },
    {
        "state": "VA",
        "city": "Danville",
        "lat": 36.5831,
        "lng": -79.4088
    },
    {
        "state": "FL",
        "city": "North Fort Myers",
        "lat": 26.7244,
        "lng": -81.8485
    },
    {
        "state": "TN",
        "city": "Columbia",
        "lat": 35.6238,
        "lng": -87.0484
    },
    {
        "state": "IL",
        "city": "Moline",
        "lat": 41.4821,
        "lng": -90.492
    },
    {
        "state": "MA",
        "city": "Beverly",
        "lat": 42.5681,
        "lng": -70.8627
    },
    {
        "state": "MI",
        "city": "Midland",
        "lat": 43.6241,
        "lng": -84.2319
    },
    {
        "state": "VA",
        "city": "Annandale",
        "lat": 38.8324,
        "lng": -77.196
    },
    {
        "state": "CA",
        "city": "Coachella",
        "lat": 33.6905,
        "lng": -116.143
    },
    {
        "state": "MD",
        "city": "Woodlawn",
        "lat": 39.3054,
        "lng": -76.7489
    },
    {
        "state": "FL",
        "city": "Meadow Woods",
        "lat": 28.3698,
        "lng": -81.3467
    },
    {
        "state": "NY",
        "city": "Coram",
        "lat": 40.8812,
        "lng": -73.0059
    },
    {
        "state": "IL",
        "city": "Belleville",
        "lat": 38.5164,
        "lng": -89.99
    },
    {
        "state": "GA",
        "city": "Peachtree Corners",
        "lat": 33.967,
        "lng": -84.232
    },
    {
        "state": "CA",
        "city": "Hollister",
        "lat": 36.8555,
        "lng": -121.3986
    },
    {
        "state": "NC",
        "city": "Holly Springs",
        "lat": 35.6526,
        "lng": -78.8399
    },
    {
        "state": "OH",
        "city": "Delaware",
        "lat": 40.2851,
        "lng": -83.0741
    },
    {
        "state": "CA",
        "city": "Rancho Palos Verdes",
        "lat": 33.7554,
        "lng": -118.3634
    },
    {
        "state": "TX",
        "city": "Waxahachie",
        "lat": 32.4035,
        "lng": -96.8446
    },
    {
        "state": "GA",
        "city": "Mableton",
        "lat": 33.8133,
        "lng": -84.5655
    },
    {
        "state": "MA",
        "city": "Fitchburg",
        "lat": 42.5912,
        "lng": -71.8156
    },
    {
        "state": "AZ",
        "city": "Bullhead City",
        "lat": 35.1205,
        "lng": -114.5461
    },
    {
        "state": "OH",
        "city": "Grove City",
        "lat": 39.8654,
        "lng": -83.069
    },
    {
        "state": "MN",
        "city": "Maplewood",
        "lat": 44.9842,
        "lng": -93.0247
    },
    {
        "state": "IA",
        "city": "Marion",
        "lat": 42.0451,
        "lng": -91.585
    },
    {
        "state": "MA",
        "city": "Marlborough",
        "lat": 42.3494,
        "lng": -71.5468
    },
    {
        "state": "WI",
        "city": "Brookfield",
        "lat": 43.064,
        "lng": -88.1231
    },
    {
        "state": "CA",
        "city": "French Valley",
        "lat": 33.5999,
        "lng": -117.1069
    },
    {
        "state": "CT",
        "city": "Shelton",
        "lat": 41.306,
        "lng": -73.1383
    },
    {
        "state": "AR",
        "city": "Pine Bluff",
        "lat": 34.2116,
        "lng": -92.0173
    },
    {
        "state": "NJ",
        "city": "Kearny",
        "lat": 40.7528,
        "lng": -74.1202
    },
    {
        "state": "FL",
        "city": "Hallandale Beach",
        "lat": 25.9854,
        "lng": -80.1423
    },
    {
        "state": "TN",
        "city": "Germantown",
        "lat": 35.0829,
        "lng": -89.7824
    },
    {
        "state": "GA",
        "city": "Milton",
        "lat": 34.1353,
        "lng": -84.3139
    },
    {
        "state": "MA",
        "city": "Woburn",
        "lat": 42.4869,
        "lng": -71.1543
    },
    {
        "state": "TX",
        "city": "Lancaster",
        "lat": 32.5922,
        "lng": -96.7739
    },
    {
        "state": "OH",
        "city": "Reynoldsburg",
        "lat": 39.9588,
        "lng": -82.7943
    },
    {
        "state": "KY",
        "city": "Covington",
        "lat": 39.0334,
        "lng": -84.5166
    },
    {
        "state": "TX",
        "city": "Friendswood",
        "lat": 29.511,
        "lng": -95.1981
    },
    {
        "state": "TX",
        "city": "Weslaco",
        "lat": 26.1599,
        "lng": -97.9877
    },
    {
        "state": "FL",
        "city": "Land O' Lakes",
        "lat": 28.2075,
        "lng": -82.4476
    },
    {
        "state": "MD",
        "city": "Essex",
        "lat": 39.3021,
        "lng": -76.4449
    },
    {
        "state": "IL",
        "city": "Bartlett",
        "lat": 41.9804,
        "lng": -88.2071
    },
    {
        "state": "MA",
        "city": "Westfield",
        "lat": 42.1382,
        "lng": -72.7561
    },
    {
        "state": "MD",
        "city": "Annapolis",
        "lat": 38.9706,
        "lng": -76.5047
    },
    {
        "state": "IL",
        "city": "DeKalb",
        "lat": 41.9314,
        "lng": -88.7481
    },
    {
        "state": "IA",
        "city": "Cedar Falls",
        "lat": 42.5195,
        "lng": -92.4536
    },
    {
        "state": "OH",
        "city": "Lancaster",
        "lat": 39.7248,
        "lng": -82.6049
    },
    {
        "state": "CO",
        "city": "Brighton",
        "lat": 39.9716,
        "lng": -104.7963
    },
    {
        "state": "IL",
        "city": "Crystal Lake",
        "lat": 42.2333,
        "lng": -88.3351
    },
    {
        "state": "OR",
        "city": "Lake Oswego",
        "lat": 45.4129,
        "lng": -122.7004
    },
    {
        "state": "MD",
        "city": "Severna Park",
        "lat": 39.087,
        "lng": -76.5687
    },
    {
        "state": "OH",
        "city": "Findlay",
        "lat": 41.0469,
        "lng": -83.6379
    },
    {
        "state": "UT",
        "city": "Saratoga Springs",
        "lat": 40.345,
        "lng": -111.9154
    },
    {
        "state": "WI",
        "city": "New Berlin",
        "lat": 42.9726,
        "lng": -88.1291
    },
    {
        "state": "CA",
        "city": "Culver City",
        "lat": 34.0058,
        "lng": -118.3968
    },
    {
        "state": "NC",
        "city": "Indian Trail",
        "lat": 35.0699,
        "lng": -80.6452
    },
    {
        "state": "TX",
        "city": "Duncanville",
        "lat": 32.646,
        "lng": -96.9127
    },
    {
        "state": "NY",
        "city": "Valley Stream",
        "lat": 40.6647,
        "lng": -73.7043
    },
    {
        "state": "MD",
        "city": "Clinton",
        "lat": 38.7499,
        "lng": -76.9063
    },
    {
        "state": "FL",
        "city": "The Acreage",
        "lat": 26.774,
        "lng": -80.2779
    },
    {
        "state": "IL",
        "city": "Romeoville",
        "lat": 41.6318,
        "lng": -88.0997
    },
    {
        "state": "TX",
        "city": "Hurst",
        "lat": 32.8353,
        "lng": -97.1809
    },
    {
        "state": "ID",
        "city": "Post Falls",
        "lat": 47.7213,
        "lng": -116.9384
    },
    {
        "state": "KS",
        "city": "Hutchinson",
        "lat": 38.0671,
        "lng": -97.9081
    },
    {
        "state": "MA",
        "city": "Chelsea",
        "lat": 42.3959,
        "lng": -71.0325
    },
    {
        "state": "HI",
        "city": "Waipahu",
        "lat": 21.3859,
        "lng": -158.0101
    },
    {
        "state": "WA",
        "city": "Lynnwood",
        "lat": 47.8284,
        "lng": -122.3033
    },
    {
        "state": "MI",
        "city": "Lincoln Park",
        "lat": 42.2432,
        "lng": -83.1811
    },
    {
        "state": "NJ",
        "city": "Fort Lee",
        "lat": 40.8509,
        "lng": -73.9713
    },
    {
        "state": "MO",
        "city": "Cape Girardeau",
        "lat": 37.3109,
        "lng": -89.5597
    },
    {
        "state": "NM",
        "city": "Hobbs",
        "lat": 32.7281,
        "lng": -103.16
    },
    {
        "state": "IL",
        "city": "Carol Stream",
        "lat": 41.9181,
        "lng": -88.1307
    },
    {
        "state": "FL",
        "city": "Plant City",
        "lat": 28.014,
        "lng": -82.1201
    },
    {
        "state": "FL",
        "city": "Aventura",
        "lat": 25.9566,
        "lng": -80.1371
    },
    {
        "state": "TN",
        "city": "Lebanon",
        "lat": 36.204,
        "lng": -86.3481
    },
    {
        "state": "IL",
        "city": "Streamwood",
        "lat": 42.0209,
        "lng": -88.1779
    },
    {
        "state": "FL",
        "city": "Oviedo",
        "lat": 28.658,
        "lng": -81.1872
    },
    {
        "state": "TN",
        "city": "Mount Juliet",
        "lat": 36.199,
        "lng": -86.5115
    },
    {
        "state": "IL",
        "city": "Quincy",
        "lat": 39.9336,
        "lng": -91.3799
    },
    {
        "state": "WA",
        "city": "Issaquah",
        "lat": 47.5439,
        "lng": -122.0471
    },
    {
        "state": "WA",
        "city": "Parkland",
        "lat": 47.1417,
        "lng": -122.4376
    },
    {
        "state": "IL",
        "city": "Park Ridge",
        "lat": 42.0125,
        "lng": -87.8436
    },
    {
        "state": "MN",
        "city": "Cottage Grove",
        "lat": 44.8161,
        "lng": -92.9274
    },
    {
        "state": "CA",
        "city": "Bell Gardens",
        "lat": 33.9663,
        "lng": -118.155
    },
    {
        "state": "CA",
        "city": "San Gabriel",
        "lat": 34.0949,
        "lng": -118.099
    },
    {
        "state": "OH",
        "city": "Warren",
        "lat": 41.239,
        "lng": -80.8174
    },
    {
        "state": "CO",
        "city": "Security-Widefield",
        "lat": 38.7489,
        "lng": -104.7142
    },
    {
        "state": "OR",
        "city": "Grants Pass",
        "lat": 42.4333,
        "lng": -123.3317
    },
    {
        "state": "OR",
        "city": "Keizer",
        "lat": 45.0028,
        "lng": -123.0243
    },
    {
        "state": "UT",
        "city": "Roy",
        "lat": 41.1714,
        "lng": -112.0485
    },
    {
        "state": "IA",
        "city": "Bettendorf",
        "lat": 41.5657,
        "lng": -90.4765
    },
    {
        "state": "OH",
        "city": "Westerville",
        "lat": 40.1241,
        "lng": -82.921
    },
    {
        "state": "FL",
        "city": "Royal Palm Beach",
        "lat": 26.7038,
        "lng": -80.2241
    },
    {
        "state": "AZ",
        "city": "Apache Junction",
        "lat": 33.3985,
        "lng": -111.535
    },
    {
        "state": "FL",
        "city": "Navarre",
        "lat": 30.4174,
        "lng": -86.8907
    },
    {
        "state": "IL",
        "city": "Wheeling",
        "lat": 42.1308,
        "lng": -87.924
    },
    {
        "state": "WA",
        "city": "Lake Stevens",
        "lat": 48.0024,
        "lng": -122.0953
    },
    {
        "state": "ID",
        "city": "Rexburg",
        "lat": 43.8226,
        "lng": -111.7919
    },
    {
        "state": "IL",
        "city": "Urbana",
        "lat": 40.1107,
        "lng": -88.1973
    },
    {
        "state": "TX",
        "city": "Rosenberg",
        "lat": 29.5456,
        "lng": -95.8223
    },
    {
        "state": "ND",
        "city": "West Fargo",
        "lat": 46.8573,
        "lng": -96.9057
    },
    {
        "state": "CA",
        "city": "La Presa",
        "lat": 32.711,
        "lng": -117.0027
    },
    {
        "state": "WI",
        "city": "Menomonee Falls",
        "lat": 43.1487,
        "lng": -88.1227
    },
    {
        "state": "AL",
        "city": "Vestavia Hills",
        "lat": 33.4518,
        "lng": -86.7437
    },
    {
        "state": "CA",
        "city": "Calexico",
        "lat": 32.6849,
        "lng": -115.4944
    },
    {
        "state": "FL",
        "city": "Valrico",
        "lat": 27.9193,
        "lng": -82.2293
    },
    {
        "state": "TN",
        "city": "La Vergne",
        "lat": 36.02,
        "lng": -86.5586
    },
    {
        "state": "NJ",
        "city": "Atlantic City",
        "lat": 39.3797,
        "lng": -74.4527
    },
    {
        "state": "NM",
        "city": "Clovis",
        "lat": 34.4376,
        "lng": -103.1923
    },
    {
        "state": "GA",
        "city": "Peachtree City",
        "lat": 33.3942,
        "lng": -84.571
    },
    {
        "state": "AL",
        "city": "Phenix City",
        "lat": 32.4585,
        "lng": -85.0253
    },
    {
        "state": "FL",
        "city": "DeLand",
        "lat": 29.0225,
        "lng": -81.2875
    },
    {
        "state": "VA",
        "city": "Mechanicsville",
        "lat": 37.6263,
        "lng": -77.3561
    },
    {
        "state": "CA",
        "city": "Stanton",
        "lat": 33.8003,
        "lng": -117.9935
    },
    {
        "state": "MA",
        "city": "Holyoke",
        "lat": 42.2125,
        "lng": -72.6411
    },
    {
        "state": "FL",
        "city": "Winter Springs",
        "lat": 28.6889,
        "lng": -81.2703
    },
    {
        "state": "OK",
        "city": "Owasso",
        "lat": 36.2878,
        "lng": -95.8311
    },
    {
        "state": "AL",
        "city": "Prattville",
        "lat": 32.4597,
        "lng": -86.4573
    },
    {
        "state": "GA",
        "city": "East Point",
        "lat": 33.6696,
        "lng": -84.4701
    },
    {
        "state": "CA",
        "city": "Pacifica",
        "lat": 37.6113,
        "lng": -122.4782
    },
    {
        "state": "AR",
        "city": "Hot Springs",
        "lat": 34.4892,
        "lng": -93.0501
    },
    {
        "state": "CA",
        "city": "Adelanto",
        "lat": 34.5814,
        "lng": -117.4397
    },
    {
        "state": "FL",
        "city": "Princeton",
        "lat": 25.5396,
        "lng": -80.3971
    },
    {
        "state": "CO",
        "city": "Northglenn",
        "lat": 39.9108,
        "lng": -104.9783
    },
    {
        "state": "MS",
        "city": "Tupelo",
        "lat": 34.2692,
        "lng": -88.7318
    },
    {
        "state": "CA",
        "city": "La Quinta",
        "lat": 33.6536,
        "lng": -116.2785
    },
    {
        "state": "NY",
        "city": "Elmont",
        "lat": 40.7033,
        "lng": -73.7078
    },
    {
        "state": "TX",
        "city": "Mission Bend",
        "lat": 29.6948,
        "lng": -95.6658
    },
    {
        "state": "CA",
        "city": "Montclair",
        "lat": 34.0715,
        "lng": -117.6981
    },
    {
        "state": "CA",
        "city": "La Puente",
        "lat": 34.0323,
        "lng": -117.9533
    },
    {
        "state": "IL",
        "city": "Carpentersville",
        "lat": 42.1227,
        "lng": -88.2896
    },
    {
        "state": "AZ",
        "city": "Sun City",
        "lat": 33.6165,
        "lng": -112.2819
    },
    {
        "state": "IN",
        "city": "Portage",
        "lat": 41.5856,
        "lng": -87.1797
    },
    {
        "state": "SC",
        "city": "Hilton Head Island",
        "lat": 32.1896,
        "lng": -80.7499
    },
    {
        "state": "FL",
        "city": "Riviera Beach",
        "lat": 26.7813,
        "lng": -80.0741
    },
    {
        "state": "CA",
        "city": "Monrovia",
        "lat": 34.165,
        "lng": -117.9921
    },
    {
        "state": "CA",
        "city": "Foothill Farms",
        "lat": 38.6867,
        "lng": -121.3475
    },
    {
        "state": "GA",
        "city": "Rome",
        "lat": 34.2662,
        "lng": -85.1863
    },
    {
        "state": "NM",
        "city": "South Valley",
        "lat": 35.0093,
        "lng": -106.6819
    },
    {
        "state": "IN",
        "city": "New Albany",
        "lat": 38.309,
        "lng": -85.8234
    },
    {
        "state": "ME",
        "city": "Lewiston",
        "lat": 44.0915,
        "lng": -70.1681
    },
    {
        "state": "NV",
        "city": "Winchester",
        "lat": 36.1365,
        "lng": -115.137
    },
    {
        "state": "WI",
        "city": "Greenfield",
        "lat": 42.9619,
        "lng": -88.0052
    },
    {
        "state": "KY",
        "city": "Georgetown",
        "lat": 38.2247,
        "lng": -84.5487
    },
    {
        "state": "GA",
        "city": "Evans",
        "lat": 33.5619,
        "lng": -82.1351
    },
    {
        "state": "UT",
        "city": "Pleasant Grove",
        "lat": 40.3716,
        "lng": -111.7412
    },
    {
        "state": "OR",
        "city": "Oregon City",
        "lat": 45.3418,
        "lng": -122.5924
    },
    {
        "state": "OK",
        "city": "Bartlesville",
        "lat": 36.7365,
        "lng": -95.9456
    },
    {
        "state": "IL",
        "city": "Rock Island",
        "lat": 41.4699,
        "lng": -90.5827
    },
    {
        "state": "IL",
        "city": "Hanover Park",
        "lat": 41.9818,
        "lng": -88.1446
    },
    {
        "state": "KS",
        "city": "Leavenworth",
        "lat": 39.3239,
        "lng": -94.924
    },
    {
        "state": "CA",
        "city": "Martinez",
        "lat": 37.9985,
        "lng": -122.1161
    },
    {
        "state": "SC",
        "city": "Greer",
        "lat": 34.933,
        "lng": -82.2313
    },
    {
        "state": "GA",
        "city": "Tucker",
        "lat": 33.8436,
        "lng": -84.2024
    },
    {
        "state": "FL",
        "city": "Richmond West",
        "lat": 25.6105,
        "lng": -80.4297
    },
    {
        "state": "OK",
        "city": "Muskogee",
        "lat": 35.7432,
        "lng": -95.3567
    },
    {
        "state": "CA",
        "city": "Claremont",
        "lat": 34.1259,
        "lng": -117.7153
    },
    {
        "state": "UT",
        "city": "Kearns",
        "lat": 40.6519,
        "lng": -112.0095
    },
    {
        "state": "NY",
        "city": "East Meadow",
        "lat": 40.7197,
        "lng": -73.5604
    },
    {
        "state": "CA",
        "city": "Wildomar",
        "lat": 33.6173,
        "lng": -117.2582
    },
    {
        "state": "MN",
        "city": "Richfield",
        "lat": 44.8763,
        "lng": -93.2829
    },
    {
        "state": "FL",
        "city": "Estero",
        "lat": 26.4276,
        "lng": -81.7951
    },
    {
        "state": "WI",
        "city": "Beloit",
        "lat": 42.523,
        "lng": -89.0184
    },
    {
        "state": "VA",
        "city": "Oakton",
        "lat": 38.8887,
        "lng": -77.3016
    },
    {
        "state": "NY",
        "city": "Central Islip",
        "lat": 40.7836,
        "lng": -73.1945
    },
    {
        "state": "WI",
        "city": "Franklin",
        "lat": 42.8854,
        "lng": -88.0104
    },
    {
        "state": "OH",
        "city": "Upper Arlington",
        "lat": 40.0272,
        "lng": -83.0704
    },
    {
        "state": "TX",
        "city": "Copperas Cove",
        "lat": 31.1192,
        "lng": -97.914
    },
    {
        "state": "UT",
        "city": "Tooele",
        "lat": 40.5393,
        "lng": -112.3082
    },
    {
        "state": "WI",
        "city": "Oak Creek",
        "lat": 42.8803,
        "lng": -87.9009
    },
    {
        "state": "MD",
        "city": "Randallstown",
        "lat": 39.3723,
        "lng": -76.8024
    },
    {
        "state": "IN",
        "city": "Merrillville",
        "lat": 41.4728,
        "lng": -87.3196
    },
    {
        "state": "CA",
        "city": "Temple City",
        "lat": 34.1022,
        "lng": -118.0579
    },
    {
        "state": "FL",
        "city": "Carrollwood",
        "lat": 28.0577,
        "lng": -82.5148
    },
    {
        "state": "OH",
        "city": "Hilliard",
        "lat": 40.0353,
        "lng": -83.1578
    },
    {
        "state": "FL",
        "city": "Dunedin",
        "lat": 28.0329,
        "lng": -82.7862
    },
    {
        "state": "CA",
        "city": "Moorpark",
        "lat": 34.2861,
        "lng": -118.8768
    },
    {
        "state": "MN",
        "city": "Roseville",
        "lat": 45.0155,
        "lng": -93.1545
    },
    {
        "state": "FL",
        "city": "Egypt Lake-Leto",
        "lat": 28.0177,
        "lng": -82.5062
    },
    {
        "state": "TX",
        "city": "Farmers Branch",
        "lat": 32.9272,
        "lng": -96.8804
    },
    {
        "state": "OH",
        "city": "Marion",
        "lat": 40.5973,
        "lng": -83.1227
    },
    {
        "state": "FL",
        "city": "Lauderdale Lakes",
        "lat": 26.1682,
        "lng": -80.2017
    },
    {
        "state": "MD",
        "city": "Chillum",
        "lat": 38.9666,
        "lng": -76.9791
    },
    {
        "state": "CA",
        "city": "Orangevale",
        "lat": 38.6881,
        "lng": -121.2209
    },
    {
        "state": "WI",
        "city": "Sun Prairie",
        "lat": 43.1825,
        "lng": -89.2362
    },
    {
        "state": "UT",
        "city": "Cedar City",
        "lat": 37.6834,
        "lng": -113.0956
    },
    {
        "state": "TX",
        "city": "La Porte",
        "lat": 29.6689,
        "lng": -95.0484
    },
    {
        "state": "NY",
        "city": "Commack",
        "lat": 40.8435,
        "lng": -73.2833
    },
    {
        "state": "PA",
        "city": "Norristown",
        "lat": 40.1225,
        "lng": -75.3398
    },
    {
        "state": "IL",
        "city": "Calumet City",
        "lat": 41.6134,
        "lng": -87.5505
    },
    {
        "state": "FL",
        "city": "South Miami Heights",
        "lat": 25.5886,
        "lng": -80.3862
    },
    {
        "state": "IL",
        "city": "Addison",
        "lat": 41.9313,
        "lng": -88.0085
    },
    {
        "state": "MN",
        "city": "Inver Grove Heights",
        "lat": 44.8247,
        "lng": -93.0596
    },
    {
        "state": "AZ",
        "city": "El Mirage",
        "lat": 33.5905,
        "lng": -112.3271
    },
    {
        "state": "IN",
        "city": "Richmond",
        "lat": 39.8318,
        "lng": -84.8905
    },
    {
        "state": "UT",
        "city": "Midvale",
        "lat": 40.6148,
        "lng": -111.8927
    },
    {
        "state": "FL",
        "city": "Kendall West",
        "lat": 25.7065,
        "lng": -80.4388
    },
    {
        "state": "OH",
        "city": "Lima",
        "lat": 40.741,
        "lng": -84.112
    },
    {
        "state": "OH",
        "city": "Gahanna",
        "lat": 40.0251,
        "lng": -82.8637
    },
    {
        "state": "MD",
        "city": "Olney",
        "lat": 39.1465,
        "lng": -77.0715
    },
    {
        "state": "CT",
        "city": "Torrington",
        "lat": 41.8349,
        "lng": -73.1282
    },
    {
        "state": "HI",
        "city": "Kaneohe",
        "lat": 21.4062,
        "lng": -157.7904
    },
    {
        "state": "OH",
        "city": "North Ridgeville",
        "lat": 41.3852,
        "lng": -82.0195
    },
    {
        "state": "TX",
        "city": "San Juan",
        "lat": 26.1903,
        "lng": -98.152
    },
    {
        "state": "TX",
        "city": "Midlothian",
        "lat": 32.4669,
        "lng": -96.989
    },
    {
        "state": "NC",
        "city": "Salisbury",
        "lat": 35.6658,
        "lng": -80.4905
    },
    {
        "state": "TX",
        "city": "Socorro",
        "lat": 31.6383,
        "lng": -106.2601
    },
    {
        "state": "NC",
        "city": "Fuquay-Varina",
        "lat": 35.5953,
        "lng": -78.7778
    },
    {
        "state": "MO",
        "city": "Oakville",
        "lat": 38.4479,
        "lng": -90.3199
    },
    {
        "state": "CA",
        "city": "West Hollywood",
        "lat": 34.0883,
        "lng": -118.3719
    },
    {
        "state": "CA",
        "city": "Westmont",
        "lat": 33.9417,
        "lng": -118.3018
    },
    {
        "state": "FL",
        "city": "Fruit Cove",
        "lat": 30.0972,
        "lng": -81.6175
    },
    {
        "state": "AR",
        "city": "Benton",
        "lat": 34.5776,
        "lng": -92.5713
    },
    {
        "state": "OH",
        "city": "Brunswick",
        "lat": 41.2465,
        "lng": -81.8198
    },
    {
        "state": "MO",
        "city": "Wildwood",
        "lat": 38.58,
        "lng": -90.6698
    },
    {
        "state": "GA",
        "city": "Douglasville",
        "lat": 33.7384,
        "lng": -84.7054
    },
    {
        "state": "UT",
        "city": "Springville",
        "lat": 40.1638,
        "lng": -111.6205
    },
    {
        "state": "AZ",
        "city": "San Luis",
        "lat": 32.4911,
        "lng": -114.7089
    },
    {
        "state": "MA",
        "city": "Watertown Town",
        "lat": 42.37,
        "lng": -71.1774
    },
    {
        "state": "GA",
        "city": "Woodstock",
        "lat": 34.1026,
        "lng": -84.5091
    },
    {
        "state": "VA",
        "city": "Fair Oaks",
        "lat": 38.8653,
        "lng": -77.3586
    },
    {
        "state": "CA",
        "city": "Manhattan Beach",
        "lat": 33.8894,
        "lng": -118.3967
    },
    {
        "state": "CA",
        "city": "San Juan Capistrano",
        "lat": 33.5008,
        "lng": -117.6544
    },
    {
        "state": "IN",
        "city": "Plainfield",
        "lat": 39.6954,
        "lng": -86.3716
    },
    {
        "state": "MD",
        "city": "Owings Mills",
        "lat": 39.4115,
        "lng": -76.7913
    },
    {
        "state": "MS",
        "city": "Meridian",
        "lat": 32.3846,
        "lng": -88.6896
    },
    {
        "state": "TN",
        "city": "Cookeville",
        "lat": 36.1482,
        "lng": -85.5109
    },
    {
        "state": "IL",
        "city": "Northbrook",
        "lat": 42.1292,
        "lng": -87.8352
    },
    {
        "state": "NJ",
        "city": "Fair Lawn",
        "lat": 40.9359,
        "lng": -74.1177
    },
    {
        "state": "NC",
        "city": "Monroe",
        "lat": 35.0063,
        "lng": -80.5596
    },
    {
        "state": "KY",
        "city": "Richmond",
        "lat": 37.7307,
        "lng": -84.2925
    },
    {
        "state": "MO",
        "city": "University City",
        "lat": 38.6657,
        "lng": -90.3315
    },
    {
        "state": "FL",
        "city": "Parkland",
        "lat": 26.3219,
        "lng": -80.2533
    },
    {
        "state": "IL",
        "city": "Oswego",
        "lat": 41.6834,
        "lng": -88.3372
    },
    {
        "state": "CA",
        "city": "Oildale",
        "lat": 35.4293,
        "lng": -119.0306
    },
    {
        "state": "WA",
        "city": "Graham",
        "lat": 47.0322,
        "lng": -122.2827
    },
    {
        "state": "OH",
        "city": "Mason",
        "lat": 39.3571,
        "lng": -84.3023
    },
    {
        "state": "MD",
        "city": "Montgomery Village",
        "lat": 39.1788,
        "lng": -77.1954
    },
    {
        "state": "NY",
        "city": "Long Beach",
        "lat": 40.5887,
        "lng": -73.666
    },
    {
        "state": "GA",
        "city": "Hinesville",
        "lat": 31.8248,
        "lng": -81.6137
    },
    {
        "state": "FL",
        "city": "Golden Glades",
        "lat": 25.9129,
        "lng": -80.2013
    },
    {
        "state": "TX",
        "city": "Del Rio",
        "lat": 29.3708,
        "lng": -100.8801
    },
    {
        "state": "IN",
        "city": "Goshen",
        "lat": 41.5743,
        "lng": -85.8309
    },
    {
        "state": "WA",
        "city": "University Place",
        "lat": 47.2147,
        "lng": -122.5461
    },
    {
        "state": "MT",
        "city": "Butte",
        "lat": 45.902,
        "lng": -112.6571
    },
    {
        "state": "NY",
        "city": "Huntington Station",
        "lat": 40.8446,
        "lng": -73.405
    },
    {
        "state": "CA",
        "city": "Pleasant Hill",
        "lat": 37.9539,
        "lng": -122.0759
    },
    {
        "state": "WI",
        "city": "Manitowoc",
        "lat": 44.0991,
        "lng": -87.6812
    },
    {
        "state": "OH",
        "city": "Fairborn",
        "lat": 39.801,
        "lng": -84.0094
    },
    {
        "state": "CA",
        "city": "San Dimas",
        "lat": 34.1082,
        "lng": -117.809
    },
    {
        "state": "OH",
        "city": "Stow",
        "lat": 41.1765,
        "lng": -81.4344
    },
    {
        "state": "OR",
        "city": "McMinnville",
        "lat": 45.211,
        "lng": -123.1918
    },
    {
        "state": "MD",
        "city": "College Park",
        "lat": 38.996,
        "lng": -76.9337
    },
    {
        "state": "NY",
        "city": "Kiryas Joel",
        "lat": 41.3411,
        "lng": -74.1667
    },
    {
        "state": "FL",
        "city": "Lakewood Ranch",
        "lat": 27.4185,
        "lng": -82.3948
    },
    {
        "state": "CO",
        "city": "Pueblo West",
        "lat": 38.3465,
        "lng": -104.7246
    },
    {
        "state": "FL",
        "city": "Merritt Island",
        "lat": 28.3139,
        "lng": -80.6708
    },
    {
        "state": "ID",
        "city": "Lewiston",
        "lat": 46.3934,
        "lng": -116.9933
    },
    {
        "state": "TX",
        "city": "Timberwood Park",
        "lat": 29.6995,
        "lng": -98.4838
    },
    {
        "state": "AZ",
        "city": "Sahuarita",
        "lat": 31.9323,
        "lng": -110.9654
    },
    {
        "state": "CO",
        "city": "Dakota Ridge",
        "lat": 39.6192,
        "lng": -105.1344
    },
    {
        "state": "LA",
        "city": "Prairieville",
        "lat": 30.3151,
        "lng": -90.9571
    },
    {
        "state": "OR",
        "city": "Redmond",
        "lat": 44.2612,
        "lng": -121.181
    },
    {
        "state": "TX",
        "city": "Lufkin",
        "lat": 31.3217,
        "lng": -94.7277
    },
    {
        "state": "MD",
        "city": "Pikesville",
        "lat": 39.3893,
        "lng": -76.702
    },
    {
        "state": "MI",
        "city": "Eastpointe",
        "lat": 42.4657,
        "lng": -82.9461
    },
    {
        "state": "TX",
        "city": "Deer Park",
        "lat": 29.6898,
        "lng": -95.1151
    },
    {
        "state": "FL",
        "city": "Cooper City",
        "lat": 26.0463,
        "lng": -80.2862
    },
    {
        "state": "OH",
        "city": "Westlake",
        "lat": 41.4524,
        "lng": -81.9294
    },
    {
        "state": "IL",
        "city": "Woodridge",
        "lat": 41.737,
        "lng": -88.0409
    },
    {
        "state": "WA",
        "city": "Spanaway",
        "lat": 47.0979,
        "lng": -122.4233
    },
    {
        "state": "IN",
        "city": "Valparaiso",
        "lat": 41.4783,
        "lng": -87.0506
    },
    {
        "state": "UT",
        "city": "American Fork",
        "lat": 40.3783,
        "lng": -111.7953
    },
    {
        "state": "CO",
        "city": "Windsor",
        "lat": 40.469,
        "lng": -104.9198
    },
    {
        "state": "AL",
        "city": "Gadsden",
        "lat": 34.0086,
        "lng": -86.0157
    },
    {
        "state": "WA",
        "city": "Walla Walla",
        "lat": 46.0671,
        "lng": -118.3368
    },
    {
        "state": "NY",
        "city": "New City",
        "lat": 41.1542,
        "lng": -73.9912
    },
    {
        "state": "NE",
        "city": "Kearney",
        "lat": 40.7011,
        "lng": -99.0833
    },
    {
        "state": "KS",
        "city": "Leawood",
        "lat": 38.9075,
        "lng": -94.6258
    },
    {
        "state": "NY",
        "city": "Baldwin",
        "lat": 40.6511,
        "lng": -73.6075
    },
    {
        "state": "GA",
        "city": "Martinez",
        "lat": 33.5209,
        "lng": -82.0985
    },
    {
        "state": "IN",
        "city": "Crown Point",
        "lat": 41.4143,
        "lng": -87.3457
    },
    {
        "state": "CA",
        "city": "Fallbrook",
        "lat": 33.3693,
        "lng": -117.2259
    },
    {
        "state": "CO",
        "city": "Englewood",
        "lat": 39.6468,
        "lng": -104.9942
    },
    {
        "state": "FL",
        "city": "East Lake",
        "lat": 28.1206,
        "lng": -82.6868
    },
    {
        "state": "NC",
        "city": "Goldsboro",
        "lat": 35.3778,
        "lng": -77.9717
    },
    {
        "state": "CO",
        "city": "Ken Caryl",
        "lat": 39.577,
        "lng": -105.1144
    },
    {
        "state": "GA",
        "city": "Canton",
        "lat": 34.2467,
        "lng": -84.4897
    },
    {
        "state": "FL",
        "city": "West Little River",
        "lat": 25.8571,
        "lng": -80.2367
    },
    {
        "state": "AL",
        "city": "Alabaster",
        "lat": 33.2198,
        "lng": -86.8225
    },
    {
        "state": "CA",
        "city": "Bell",
        "lat": 33.9801,
        "lng": -118.1798
    },
    {
        "state": "GA",
        "city": "Kennesaw",
        "lat": 34.026,
        "lng": -84.6177
    },
    {
        "state": "VA",
        "city": "South Riding",
        "lat": 38.912,
        "lng": -77.5132
    },
    {
        "state": "CA",
        "city": "Menlo Park",
        "lat": 37.4685,
        "lng": -122.1673
    },
    {
        "state": "FL",
        "city": "Buenaventura Lakes",
        "lat": 28.3349,
        "lng": -81.3539
    },
    {
        "state": "PA",
        "city": "Bethel Park",
        "lat": 40.3238,
        "lng": -80.0364
    },
    {
        "state": "VA",
        "city": "Petersburg",
        "lat": 37.2043,
        "lng": -77.3913
    },
    {
        "state": "UT",
        "city": "Cottonwood Heights",
        "lat": 40.6137,
        "lng": -111.8144
    },
    {
        "state": "CA",
        "city": "Foster City",
        "lat": 37.5553,
        "lng": -122.2659
    },
    {
        "state": "NY",
        "city": "Uniondale",
        "lat": 40.7176,
        "lng": -73.5947
    },
    {
        "state": "GA",
        "city": "Statesboro",
        "lat": 32.4375,
        "lng": -81.7751
    },
    {
        "state": "WY",
        "city": "Gillette",
        "lat": 44.2752,
        "lng": -105.4982
    },
    {
        "state": "MN",
        "city": "Brooklyn Center",
        "lat": 45.0681,
        "lng": -93.3162
    },
    {
        "state": "CA",
        "city": "Los Gatos",
        "lat": 37.2304,
        "lng": -121.9562
    },
    {
        "state": "IL",
        "city": "Glendale Heights",
        "lat": 41.9196,
        "lng": -88.0785
    },
    {
        "state": "AZ",
        "city": "Kingman",
        "lat": 35.217,
        "lng": -114.0105
    },
    {
        "state": "PA",
        "city": "Chester",
        "lat": 39.8456,
        "lng": -75.3718
    },
    {
        "state": "TX",
        "city": "Harker Heights",
        "lat": 31.0572,
        "lng": -97.6446
    },
    {
        "state": "CA",
        "city": "Dana Point",
        "lat": 33.4733,
        "lng": -117.6967
    },
    {
        "state": "NY",
        "city": "Spring Valley",
        "lat": 41.1151,
        "lng": -74.0486
    },
    {
        "state": "UT",
        "city": "Syracuse",
        "lat": 41.0859,
        "lng": -112.0698
    },
    {
        "state": "IL",
        "city": "St. Charles",
        "lat": 41.9193,
        "lng": -88.3109
    },
    {
        "state": "CA",
        "city": "Fair Oaks",
        "lat": 38.6504,
        "lng": -121.2496
    },
    {
        "state": "AR",
        "city": "Sherwood",
        "lat": 34.8507,
        "lng": -92.2029
    },
    {
        "state": "UT",
        "city": "Kaysville",
        "lat": 41.029,
        "lng": -111.9456
    },
    {
        "state": "WA",
        "city": "Des Moines",
        "lat": 47.3914,
        "lng": -122.3156
    },
    {
        "state": "CA",
        "city": "Goleta",
        "lat": 34.4361,
        "lng": -119.8594
    },
    {
        "state": "TX",
        "city": "Cibolo",
        "lat": 29.5634,
        "lng": -98.2115
    },
    {
        "state": "MN",
        "city": "Andover",
        "lat": 45.2571,
        "lng": -93.3265
    },
    {
        "state": "NH",
        "city": "Rochester",
        "lat": 43.299,
        "lng": -70.9787
    },
    {
        "state": "MT",
        "city": "Helena",
        "lat": 46.5965,
        "lng": -112.0202
    },
    {
        "state": "IL",
        "city": "Elk Grove Village",
        "lat": 42.0064,
        "lng": -87.9921
    },
    {
        "state": "CA",
        "city": "Spring Valley",
        "lat": 32.7317,
        "lng": -116.9766
    },
    {
        "state": "NJ",
        "city": "Garfield",
        "lat": 40.8791,
        "lng": -74.1085
    },
    {
        "state": "FL",
        "city": "Ferry Pass",
        "lat": 30.5205,
        "lng": -87.1899
    },
    {
        "state": "MN",
        "city": "Savage",
        "lat": 44.7545,
        "lng": -93.3632
    },
    {
        "state": "CA",
        "city": "Beverly Hills",
        "lat": 34.0786,
        "lng": -118.4021
    },
    {
        "state": "CA",
        "city": "Desert Hot Springs",
        "lat": 33.955,
        "lng": -116.5429
    },
    {
        "state": "UT",
        "city": "Clearfield",
        "lat": 41.103,
        "lng": -112.0238
    },
    {
        "state": "CO",
        "city": "Wheat Ridge",
        "lat": 39.7728,
        "lng": -105.1028
    },
    {
        "state": "OH",
        "city": "North Olmsted",
        "lat": 41.4149,
        "lng": -81.919
    },
    {
        "state": "OH",
        "city": "Massillon",
        "lat": 40.7838,
        "lng": -81.5254
    },
    {
        "state": "TX",
        "city": "Weatherford",
        "lat": 32.7536,
        "lng": -97.7723
    },
    {
        "state": "MD",
        "city": "Pasadena",
        "lat": 39.1552,
        "lng": -76.5537
    },
    {
        "state": "TX",
        "city": "Nacogdoches",
        "lat": 31.6134,
        "lng": -94.6528
    },
    {
        "state": "AK",
        "city": "Juneau",
        "lat": 58.4546,
        "lng": -134.1739
    },
    {
        "state": "IL",
        "city": "O'Fallon",
        "lat": 38.5974,
        "lng": -89.9148
    },
    {
        "state": "IL",
        "city": "Pekin",
        "lat": 40.5678,
        "lng": -89.6251
    },
    {
        "state": "KY",
        "city": "Florence",
        "lat": 38.9899,
        "lng": -84.6471
    },
    {
        "state": "TX",
        "city": "Canyon Lake",
        "lat": 29.8761,
        "lng": -98.2611
    },
    {
        "state": "NY",
        "city": "Rome",
        "lat": 43.226,
        "lng": -75.4909
    },
    {
        "state": "SC",
        "city": "Aiken",
        "lat": 33.5303,
        "lng": -81.7271
    },
    {
        "state": "LA",
        "city": "Marrero",
        "lat": 29.8871,
        "lng": -90.1126
    },
    {
        "state": "WA",
        "city": "Pullman",
        "lat": 46.7336,
        "lng": -117.168
    },
    {
        "state": "NY",
        "city": "Franklin Square",
        "lat": 40.7002,
        "lng": -73.6775
    },
    {
        "state": "NJ",
        "city": "Long Branch",
        "lat": 40.2965,
        "lng": -73.9915
    },
    {
        "state": "CA",
        "city": "San Pablo",
        "lat": 37.9629,
        "lng": -122.3426
    },
    {
        "state": "NY",
        "city": "Centereach",
        "lat": 40.8681,
        "lng": -73.0821
    },
    {
        "state": "TN",
        "city": "Maryville",
        "lat": 35.7468,
        "lng": -83.9789
    },
    {
        "state": "TX",
        "city": "Cleburne",
        "lat": 32.3568,
        "lng": -97.4151
    },
    {
        "state": "CA",
        "city": "Atwater",
        "lat": 37.3529,
        "lng": -120.5959
    },
    {
        "state": "NM",
        "city": "Carlsbad",
        "lat": 32.401,
        "lng": -104.2388
    },
    {
        "state": "GA",
        "city": "Duluth",
        "lat": 34.0053,
        "lng": -84.1492
    },
    {
        "state": "WY",
        "city": "Laramie",
        "lat": 41.3099,
        "lng": -105.6085
    },
    {
        "state": "ME",
        "city": "Bangor",
        "lat": 44.8323,
        "lng": -68.7906
    },
    {
        "state": "FL",
        "city": "Dania Beach",
        "lat": 26.0593,
        "lng": -80.1637
    },
    {
        "state": "NC",
        "city": "Garner",
        "lat": 35.6936,
        "lng": -78.6181
    },
    {
        "state": "WI",
        "city": "West Bend",
        "lat": 43.4173,
        "lng": -88.1818
    },
    {
        "state": "CT",
        "city": "Naugatuck",
        "lat": 41.489,
        "lng": -73.0518
    },
    {
        "state": "IL",
        "city": "Mundelein",
        "lat": 42.2693,
        "lng": -88.0102
    },
    {
        "state": "UT",
        "city": "Holladay",
        "lat": 40.66,
        "lng": -111.8226
    },
    {
        "state": "CA",
        "city": "Lawndale",
        "lat": 33.8884,
        "lng": -118.3531
    },
    {
        "state": "FL",
        "city": "Lake Magdalene",
        "lat": 28.0875,
        "lng": -82.4791
    },
    {
        "state": "TN",
        "city": "Oak Ridge",
        "lat": 35.9639,
        "lng": -84.2938
    },
    {
        "state": "MD",
        "city": "Milford Mill",
        "lat": 39.3444,
        "lng": -76.7668
    },
    {
        "state": "TX",
        "city": "Prosper",
        "lat": 33.2394,
        "lng": -96.8087
    },
    {
        "state": "NY",
        "city": "Oceanside",
        "lat": 40.6328,
        "lng": -73.6364
    },
    {
        "state": "NC",
        "city": "Cornelius",
        "lat": 35.4724,
        "lng": -80.8813
    },
    {
        "state": "OK",
        "city": "Shawnee",
        "lat": 35.3531,
        "lng": -96.9647
    },
    {
        "state": "NC",
        "city": "New Bern",
        "lat": 35.0955,
        "lng": -77.0723
    },
    {
        "state": "AL",
        "city": "Opelika",
        "lat": 32.6612,
        "lng": -85.3769
    },
    {
        "state": "NY",
        "city": "Ithaca",
        "lat": 42.4442,
        "lng": -76.5032
    },
    {
        "state": "KY",
        "city": "Nicholasville",
        "lat": 37.8906,
        "lng": -84.5668
    },
    {
        "state": "GA",
        "city": "Redan",
        "lat": 33.7394,
        "lng": -84.1644
    },
    {
        "state": "MD",
        "city": "Bel Air North",
        "lat": 39.5543,
        "lng": -76.3732
    },
    {
        "state": "NY",
        "city": "Port Chester",
        "lat": 41.0051,
        "lng": -73.668
    },
    {
        "state": "CA",
        "city": "La Verne",
        "lat": 34.1207,
        "lng": -117.7703
    },
    {
        "state": "GA",
        "city": "LaGrange",
        "lat": 33.0274,
        "lng": -85.0384
    },
    {
        "state": "CA",
        "city": "Laguna Hills",
        "lat": 33.5918,
        "lng": -117.6991
    },
    {
        "state": "MD",
        "city": "Middle River",
        "lat": 39.3436,
        "lng": -76.4253
    },
    {
        "state": "CA",
        "city": "Orcutt",
        "lat": 34.8691,
        "lng": -120.4222
    },
    {
        "state": "CA",
        "city": "Los Altos",
        "lat": 37.3684,
        "lng": -122.0965
    },
    {
        "state": "VA",
        "city": "West Falls Church",
        "lat": 38.8648,
        "lng": -77.1878
    },
    {
        "state": "OH",
        "city": "North Royalton",
        "lat": 41.3138,
        "lng": -81.745
    },
    {
        "state": "VA",
        "city": "Sterling",
        "lat": 39.0052,
        "lng": -77.405
    },
    {
        "state": "KY",
        "city": "Hopkinsville",
        "lat": 36.8381,
        "lng": -87.4775
    },
    {
        "state": "VA",
        "city": "Springfield",
        "lat": 38.781,
        "lng": -77.1839
    },
    {
        "state": "NM",
        "city": "Alamogordo",
        "lat": 32.8837,
        "lng": -105.9625
    },
    {
        "state": "CA",
        "city": "Burlingame",
        "lat": 37.5859,
        "lng": -122.3667
    },
    {
        "state": "OR",
        "city": "Bethany",
        "lat": 45.5614,
        "lng": -122.837
    },
    {
        "state": "FL",
        "city": "Lakeside",
        "lat": 30.1356,
        "lng": -81.7674
    },
    {
        "state": "MO",
        "city": "Ballwin",
        "lat": 38.595,
        "lng": -90.55
    },
    {
        "state": "WA",
        "city": "SeaTac",
        "lat": 47.4444,
        "lng": -122.2986
    },
    {
        "state": "TX",
        "city": "West Odessa",
        "lat": 31.8389,
        "lng": -102.5003
    },
    {
        "state": "IL",
        "city": "North Chicago",
        "lat": 42.3172,
        "lng": -87.8595
    },
    {
        "state": "NJ",
        "city": "Westfield",
        "lat": 40.6516,
        "lng": -74.3432
    },
    {
        "state": "IN",
        "city": "Zionsville",
        "lat": 39.9897,
        "lng": -86.3182
    },
    {
        "state": "CA",
        "city": "Santa Paula",
        "lat": 34.3545,
        "lng": -119.0656
    },
    {
        "state": "TX",
        "city": "Southlake",
        "lat": 32.9545,
        "lng": -97.1503
    },
    {
        "state": "CA",
        "city": "Saratoga",
        "lat": 37.2684,
        "lng": -122.0263
    },
    {
        "state": "AL",
        "city": "Northport",
        "lat": 33.2586,
        "lng": -87.5993
    },
    {
        "state": "DE",
        "city": "Newark",
        "lat": 39.6776,
        "lng": -75.7576
    },
    {
        "state": "IL",
        "city": "Niles",
        "lat": 42.0278,
        "lng": -87.8099
    },
    {
        "state": "ID",
        "city": "Eagle",
        "lat": 43.7223,
        "lng": -116.3866
    },
    {
        "state": "IL",
        "city": "Gurnee",
        "lat": 42.3708,
        "lng": -87.9392
    },
    {
        "state": "FL",
        "city": "Miami Lakes",
        "lat": 25.9125,
        "lng": -80.3214
    },
    {
        "state": "NY",
        "city": "Bay Shore",
        "lat": 40.7288,
        "lng": -73.2495
    },
    {
        "state": "MD",
        "city": "Parkville",
        "lat": 39.3832,
        "lng": -76.5519
    },
    {
        "state": "CA",
        "city": "San Carlos",
        "lat": 37.4982,
        "lng": -122.2677
    },
    {
        "state": "NY",
        "city": "North Tonawanda",
        "lat": 43.0457,
        "lng": -78.8659
    },
    {
        "state": "GA",
        "city": "Lawrenceville",
        "lat": 33.9523,
        "lng": -83.9932
    },
    {
        "state": "NJ",
        "city": "Princeton",
        "lat": 40.3562,
        "lng": -74.6693
    },
    {
        "state": "FL",
        "city": "New Smyrna Beach",
        "lat": 29.0249,
        "lng": -80.9652
    },
    {
        "state": "CO",
        "city": "Erie",
        "lat": 40.0404,
        "lng": -105.0399
    },
    {
        "state": "OH",
        "city": "Austintown",
        "lat": 41.0932,
        "lng": -80.7405
    },
    {
        "state": "NC",
        "city": "Sanford",
        "lat": 35.4875,
        "lng": -79.177
    },
    {
        "state": "MD",
        "city": "Eldersburg",
        "lat": 39.4041,
        "lng": -76.9528
    },
    {
        "state": "TX",
        "city": "Seguin",
        "lat": 29.5891,
        "lng": -97.9676
    },
    {
        "state": "MO",
        "city": "Liberty",
        "lat": 39.2394,
        "lng": -94.4191
    },
    {
        "state": "AR",
        "city": "Bella Vista",
        "lat": 36.4667,
        "lng": -94.2707
    },
    {
        "state": "AZ",
        "city": "Drexel Heights",
        "lat": 32.1453,
        "lng": -111.048
    },
    {
        "state": "IL",
        "city": "Highland Park",
        "lat": 42.1823,
        "lng": -87.8104
    },
    {
        "state": "NY",
        "city": "Middletown",
        "lat": 41.4459,
        "lng": -74.4236
    },
    {
        "state": "OH",
        "city": "Bowling Green",
        "lat": 41.3776,
        "lng": -83.6495
    },
    {
        "state": "IN",
        "city": "Granger",
        "lat": 41.7374,
        "lng": -86.1348
    },
    {
        "state": "CA",
        "city": "Monterey",
        "lat": 36.5919,
        "lng": -121.8808
    },
    {
        "state": "FL",
        "city": "Winter Park",
        "lat": 28.5989,
        "lng": -81.3442
    },
    {
        "state": "CA",
        "city": "East Niles",
        "lat": 35.3683,
        "lng": -118.9225
    },
    {
        "state": "GA",
        "city": "Chamblee",
        "lat": 33.8842,
        "lng": -84.3007
    },
    {
        "state": "FL",
        "city": "Vero Beach South",
        "lat": 27.6132,
        "lng": -80.4163
    },
    {
        "state": "MI",
        "city": "Southgate",
        "lat": 42.2047,
        "lng": -83.2057
    },
    {
        "state": "CA",
        "city": "Banning",
        "lat": 33.946,
        "lng": -116.8992
    },
    {
        "state": "IL",
        "city": "Galesburg",
        "lat": 40.9506,
        "lng": -90.3763
    },
    {
        "state": "IL",
        "city": "Algonquin",
        "lat": 42.1629,
        "lng": -88.3159
    },
    {
        "state": "MA",
        "city": "Gloucester",
        "lat": 42.626,
        "lng": -70.6897
    },
    {
        "state": "WI",
        "city": "Fitchburg",
        "lat": 42.9859,
        "lng": -89.4255
    },
    {
        "state": "FL",
        "city": "Fleming Island",
        "lat": 30.0988,
        "lng": -81.7124
    },
    {
        "state": "MO",
        "city": "Raytown",
        "lat": 38.9944,
        "lng": -94.4641
    },
    {
        "state": "CA",
        "city": "San Lorenzo",
        "lat": 37.6733,
        "lng": -122.1332
    },
    {
        "state": "CA",
        "city": "Atascadero",
        "lat": 35.4827,
        "lng": -120.6858
    },
    {
        "state": "NC",
        "city": "Morrisville",
        "lat": 35.8368,
        "lng": -78.8348
    },
    {
        "state": "MN",
        "city": "Fridley",
        "lat": 45.0841,
        "lng": -93.2595
    },
    {
        "state": "NV",
        "city": "Summerlin South",
        "lat": 36.1242,
        "lng": -115.3324
    },
    {
        "state": "AR",
        "city": "Paragould",
        "lat": 36.0555,
        "lng": -90.5149
    },
    {
        "state": "PA",
        "city": "Hazleton",
        "lat": 40.9505,
        "lng": -75.9725
    },
    {
        "state": "NJ",
        "city": "Rahway",
        "lat": 40.6077,
        "lng": -74.2807
    },
    {
        "state": "CA",
        "city": "Lathrop",
        "lat": 37.809,
        "lng": -121.3131
    },
    {
        "state": "NC",
        "city": "Matthews",
        "lat": 35.1195,
        "lng": -80.7101
    },
    {
        "state": "MD",
        "city": "Laurel",
        "lat": 39.0949,
        "lng": -76.8622
    },
    {
        "state": "IN",
        "city": "Schererville",
        "lat": 41.4861,
        "lng": -87.4442
    },
    {
        "state": "IN",
        "city": "Hobart",
        "lat": 41.514,
        "lng": -87.2729
    },
    {
        "state": "MI",
        "city": "Burton",
        "lat": 42.9974,
        "lng": -83.6175
    },
    {
        "state": "CA",
        "city": "Eastern Goleta Valley",
        "lat": 34.4448,
        "lng": -119.7879
    },
    {
        "state": "CA",
        "city": "East Palo Alto",
        "lat": 37.4671,
        "lng": -122.1352
    },
    {
        "state": "LA",
        "city": "Central",
        "lat": 30.5593,
        "lng": -91.0369
    },
    {
        "state": "TX",
        "city": "Hutto",
        "lat": 30.5396,
        "lng": -97.544
    },
    {
        "state": "CO",
        "city": "Fountain",
        "lat": 38.6886,
        "lng": -104.6829
    },
    {
        "state": "OH",
        "city": "Garfield Heights",
        "lat": 41.4199,
        "lng": -81.6038
    },
    {
        "state": "MI",
        "city": "Oak Park",
        "lat": 42.4649,
        "lng": -83.1824
    },
    {
        "state": "MS",
        "city": "Greenville",
        "lat": 33.385,
        "lng": -91.0514
    },
    {
        "state": "MA",
        "city": "Melrose",
        "lat": 42.4556,
        "lng": -71.059
    },
    {
        "state": "AR",
        "city": "Texarkana",
        "lat": 33.436,
        "lng": -93.9959
    },
    {
        "state": "FL",
        "city": "Golden Gate",
        "lat": 26.1844,
        "lng": -81.7031
    },
    {
        "state": "IN",
        "city": "Brownsburg",
        "lat": 39.8337,
        "lng": -86.383
    },
    {
        "state": "SC",
        "city": "Bluffton",
        "lat": 32.2135,
        "lng": -80.9316
    },
    {
        "state": "MD",
        "city": "Crofton",
        "lat": 39.0144,
        "lng": -76.68
    },
    {
        "state": "MD",
        "city": "Carney",
        "lat": 39.405,
        "lng": -76.5235
    },
    {
        "state": "CA",
        "city": "Suisun City",
        "lat": 38.2473,
        "lng": -122.0091
    },
    {
        "state": "SC",
        "city": "Anderson",
        "lat": 34.5211,
        "lng": -82.6478
    },
    {
        "state": "AR",
        "city": "Jacksonville",
        "lat": 34.8807,
        "lng": -92.1304
    },
    {
        "state": "MO",
        "city": "Kirkwood",
        "lat": 38.5788,
        "lng": -90.4203
    },
    {
        "state": "FL",
        "city": "Sun City Center",
        "lat": 27.715,
        "lng": -82.3569
    },
    {
        "state": "UT",
        "city": "Magna",
        "lat": 40.7634,
        "lng": -112.1599
    },
    {
        "state": "FL",
        "city": "Oakleaf Plantation",
        "lat": 30.1689,
        "lng": -81.8337
    },
    {
        "state": "MD",
        "city": "Perry Hall",
        "lat": 39.4068,
        "lng": -76.478
    },
    {
        "state": "FL",
        "city": "East Lake-Orient Park",
        "lat": 27.997,
        "lng": -82.3653
    },
    {
        "state": "PA",
        "city": "Drexel Hill",
        "lat": 39.9495,
        "lng": -75.3038
    },
    {
        "state": "WA",
        "city": "Orchards",
        "lat": 45.689,
        "lng": -122.5306
    },
    {
        "state": "UT",
        "city": "Washington",
        "lat": 37.1303,
        "lng": -113.4878
    },
    {
        "state": "OH",
        "city": "Shaker Heights",
        "lat": 41.4744,
        "lng": -81.5496
    },
    {
        "state": "GA",
        "city": "McDonough",
        "lat": 33.4397,
        "lng": -84.1505
    },
    {
        "state": "IL",
        "city": "Burbank",
        "lat": 41.7444,
        "lng": -87.7686
    },
    {
        "state": "NJ",
        "city": "Englewood",
        "lat": 40.8917,
        "lng": -73.9736
    },
    {
        "state": "IL",
        "city": "Danville",
        "lat": 40.1426,
        "lng": -87.6111
    },
    {
        "state": "FL",
        "city": "Casselberry",
        "lat": 28.6624,
        "lng": -81.3217
    },
    {
        "state": "MO",
        "city": "Mehlville",
        "lat": 38.5018,
        "lng": -90.3149
    },
    {
        "state": "IL",
        "city": "Lake in the Hills",
        "lat": 42.1913,
        "lng": -88.3477
    },
    {
        "state": "LA",
        "city": "Laplace",
        "lat": 30.0731,
        "lng": -90.4758
    },
    {
        "state": "AR",
        "city": "Russellville",
        "lat": 35.2762,
        "lng": -93.1383
    },
    {
        "state": "TX",
        "city": "Greenville",
        "lat": 33.1116,
        "lng": -96.1099
    },
    {
        "state": "FL",
        "city": "Haines City",
        "lat": 28.1102,
        "lng": -81.6157
    },
    {
        "state": "PA",
        "city": "Easton",
        "lat": 40.6858,
        "lng": -75.2209
    },
    {
        "state": "FL",
        "city": "Ruskin",
        "lat": 27.7065,
        "lng": -82.4209
    },
    {
        "state": "GA",
        "city": "Stockbridge",
        "lat": 33.5254,
        "lng": -84.2295
    },
    {
        "state": "KY",
        "city": "Jeffersontown",
        "lat": 38.2049,
        "lng": -85.5701
    },
    {
        "state": "OK",
        "city": "Bixby",
        "lat": 35.9454,
        "lng": -95.8776
    },
    {
        "state": "KY",
        "city": "Independence",
        "lat": 38.951,
        "lng": -84.5492
    },
    {
        "state": "NY",
        "city": "Harrison",
        "lat": 41.0236,
        "lng": -73.7193
    },
    {
        "state": "IL",
        "city": "Lansing",
        "lat": 41.5648,
        "lng": -87.5462
    },
    {
        "state": "NY",
        "city": "Jamestown",
        "lat": 42.0976,
        "lng": -79.2367
    },
    {
        "state": "NC",
        "city": "Statesville",
        "lat": 35.7842,
        "lng": -80.8713
    },
    {
        "state": "MI",
        "city": "Madison Heights",
        "lat": 42.5073,
        "lng": -83.1034
    },
    {
        "state": "PA",
        "city": "Monroeville",
        "lat": 40.4262,
        "lng": -79.7605
    },
    {
        "state": "AL",
        "city": "Enterprise",
        "lat": 31.3275,
        "lng": -85.8463
    },
    {
        "state": "KY",
        "city": "Frankfort",
        "lat": 38.1924,
        "lng": -84.8643
    },
    {
        "state": "MD",
        "city": "South Laurel",
        "lat": 39.0603,
        "lng": -76.8456
    },
    {
        "state": "MI",
        "city": "Forest Hills",
        "lat": 42.9577,
        "lng": -85.4895
    },
    {
        "state": "VA",
        "city": "Short Pump",
        "lat": 37.6549,
        "lng": -77.6201
    },
    {
        "state": "MI",
        "city": "Allen Park",
        "lat": 42.2595,
        "lng": -83.2107
    },
    {
        "state": "SD",
        "city": "Aberdeen",
        "lat": 45.4649,
        "lng": -98.4686
    },
    {
        "state": "LA",
        "city": "New Iberia",
        "lat": 30.0049,
        "lng": -91.8202
    },
    {
        "state": "MD",
        "city": "Clarksburg",
        "lat": 39.2246,
        "lng": -77.2659
    },
    {
        "state": "IL",
        "city": "Glen Ellyn",
        "lat": 41.8666,
        "lng": -88.0629
    },
    {
        "state": "NY",
        "city": "Monsey",
        "lat": 41.1181,
        "lng": -74.0682
    },
    {
        "state": "MA",
        "city": "Northampton",
        "lat": 42.3266,
        "lng": -72.6745
    },
    {
        "state": "CA",
        "city": "Temescal Valley",
        "lat": 33.7581,
        "lng": -117.4677
    },
    {
        "state": "NJ",
        "city": "Bergenfield",
        "lat": 40.9236,
        "lng": -73.9982
    },
    {
        "state": "CA",
        "city": "Walnut",
        "lat": 34.0334,
        "lng": -117.8593
    },
    {
        "state": "TX",
        "city": "Eagle Pass",
        "lat": 28.7125,
        "lng": -100.484
    },
    {
        "state": "KY",
        "city": "Henderson",
        "lat": 37.8397,
        "lng": -87.5798
    },
    {
        "state": "NY",
        "city": "Glen Cove",
        "lat": 40.8709,
        "lng": -73.6287
    },
    {
        "state": "CA",
        "city": "Ridgecrest",
        "lat": 35.6308,
        "lng": -117.6622
    },
    {
        "state": "MO",
        "city": "Maryland Heights",
        "lat": 38.7189,
        "lng": -90.4749
    },
    {
        "state": "TX",
        "city": "Converse",
        "lat": 29.5091,
        "lng": -98.3084
    },
    {
        "state": "MN",
        "city": "Oakdale",
        "lat": 44.9876,
        "lng": -92.9641
    },
    {
        "state": "CA",
        "city": "Twentynine Palms",
        "lat": 34.1478,
        "lng": -116.0659
    },
    {
        "state": "TX",
        "city": "Lake Jackson",
        "lat": 29.0516,
        "lng": -95.4521
    },
    {
        "state": "KS",
        "city": "Garden City",
        "lat": 37.9753,
        "lng": -100.8527
    },
    {
        "state": "WA",
        "city": "Maple Valley",
        "lat": 47.3659,
        "lng": -122.0368
    },
    {
        "state": "AL",
        "city": "Daphne",
        "lat": 30.6263,
        "lng": -87.8816
    },
    {
        "state": "MI",
        "city": "Hamtramck",
        "lat": 42.3954,
        "lng": -83.0559
    },
    {
        "state": "TX",
        "city": "Sachse",
        "lat": 32.9726,
        "lng": -96.5793
    },
    {
        "state": "CA",
        "city": "Belmont",
        "lat": 37.5154,
        "lng": -122.2953
    },
    {
        "state": "FL",
        "city": "Rockledge",
        "lat": 28.3203,
        "lng": -80.736
    },
    {
        "state": "OR",
        "city": "Tualatin",
        "lat": 45.3772,
        "lng": -122.7748
    },
    {
        "state": "IL",
        "city": "Wilmette",
        "lat": 42.0771,
        "lng": -87.7282
    },
    {
        "state": "ND",
        "city": "Williston",
        "lat": 48.1814,
        "lng": -103.6364
    },
    {
        "state": "MN",
        "city": "Ramsey",
        "lat": 45.2617,
        "lng": -93.4494
    },
    {
        "state": "MN",
        "city": "Chaska",
        "lat": 44.8164,
        "lng": -93.6091
    },
    {
        "state": "PA",
        "city": "Williamsport",
        "lat": 41.2399,
        "lng": -77.037
    },
    {
        "state": "FL",
        "city": "Immokalee",
        "lat": 26.4253,
        "lng": -81.4251
    },
    {
        "state": "KS",
        "city": "Dodge City",
        "lat": 37.7611,
        "lng": -100.0182
    },
    {
        "state": "MS",
        "city": "Clinton",
        "lat": 32.354,
        "lng": -90.3403
    },
    {
        "state": "IL",
        "city": "Huntley",
        "lat": 42.1599,
        "lng": -88.433
    },
    {
        "state": "WI",
        "city": "Mount Pleasant",
        "lat": 42.7129,
        "lng": -87.8876
    },
    {
        "state": "VA",
        "city": "Tysons",
        "lat": 38.9215,
        "lng": -77.2273
    },
    {
        "state": "MD",
        "city": "Reisterstown",
        "lat": 39.455,
        "lng": -76.814
    },
    {
        "state": "MN",
        "city": "Prior Lake",
        "lat": 44.7246,
        "lng": -93.4419
    },
    {
        "state": "CT",
        "city": "New London",
        "lat": 41.3502,
        "lng": -72.1022
    },
    {
        "state": "MS",
        "city": "Madison",
        "lat": 32.4738,
        "lng": -90.13
    },
    {
        "state": "AL",
        "city": "Homewood",
        "lat": 33.4619,
        "lng": -86.809
    },
    {
        "state": "AZ",
        "city": "Fortuna Foothills",
        "lat": 32.6616,
        "lng": -114.3974
    },
    {
        "state": "IN",
        "city": "Marion",
        "lat": 40.5497,
        "lng": -85.6604
    },
    {
        "state": "NJ",
        "city": "Millville",
        "lat": 39.3903,
        "lng": -75.0561
    },
    {
        "state": "IA",
        "city": "Marshalltown",
        "lat": 42.0343,
        "lng": -92.9068
    },
    {
        "state": "IL",
        "city": "McHenry",
        "lat": 42.3387,
        "lng": -88.2932
    },
    {
        "state": "CA",
        "city": "Lemon Grove",
        "lat": 32.7331,
        "lng": -117.0344
    },
    {
        "state": "FL",
        "city": "Crestview",
        "lat": 30.7477,
        "lng": -86.5785
    },
    {
        "state": "HI",
        "city": "Mililani Town",
        "lat": 21.4465,
        "lng": -158.0147
    },
    {
        "state": "IL",
        "city": "Chicago Heights",
        "lat": 41.51,
        "lng": -87.6345
    },
    {
        "state": "OH",
        "city": "Kent",
        "lat": 41.149,
        "lng": -81.361
    },
    {
        "state": "OH",
        "city": "Green",
        "lat": 40.9483,
        "lng": -81.4757
    },
    {
        "state": "TX",
        "city": "Alvin",
        "lat": 29.3872,
        "lng": -95.2938
    },
    {
        "state": "TX",
        "city": "Balch Springs",
        "lat": 32.7194,
        "lng": -96.6151
    },
    {
        "state": "WI",
        "city": "Neenah",
        "lat": 44.1669,
        "lng": -88.4767
    },
    {
        "state": "NY",
        "city": "Deer Park",
        "lat": 40.7623,
        "lng": -73.3218
    },
    {
        "state": "MD",
        "city": "Ilchester",
        "lat": 39.2187,
        "lng": -76.7683
    },
    {
        "state": "IA",
        "city": "Mason City",
        "lat": 43.1487,
        "lng": -93.1997
    },
    {
        "state": "FL",
        "city": "Citrus Park",
        "lat": 28.073,
        "lng": -82.5628
    },
    {
        "state": "MS",
        "city": "Pearl",
        "lat": 32.273,
        "lng": -90.0918
    },
    {
        "state": "IL",
        "city": "New Lenox",
        "lat": 41.5095,
        "lng": -87.9703
    },
    {
        "state": "HI",
        "city": "Kahului",
        "lat": 20.8715,
        "lng": -156.4603
    },
    {
        "state": "NE",
        "city": "Fremont",
        "lat": 41.4395,
        "lng": -96.4873
    },
    {
        "state": "NY",
        "city": "Holbrook",
        "lat": 40.7944,
        "lng": -73.07
    },
    {
        "state": "MI",
        "city": "Garden City",
        "lat": 42.3244,
        "lng": -83.3412
    },
    {
        "state": "IL",
        "city": "Oak Forest",
        "lat": 41.6054,
        "lng": -87.7527
    },
    {
        "state": "HI",
        "city": "Ewa Gentry",
        "lat": 21.3344,
        "lng": -158.0262
    },
    {
        "state": "NY",
        "city": "West Islip",
        "lat": 40.7041,
        "lng": -73.2954
    },
    {
        "state": "NC",
        "city": "Kernersville",
        "lat": 36.1065,
        "lng": -80.0842
    },
    {
        "state": "OR",
        "city": "West Linn",
        "lat": 45.367,
        "lng": -122.6399
    },
    {
        "state": "NY",
        "city": "Lindenhurst",
        "lat": 40.6858,
        "lng": -73.371
    },
    {
        "state": "NC",
        "city": "Thomasville",
        "lat": 35.8813,
        "lng": -80.0807
    },
    {
        "state": "NC",
        "city": "Asheboro",
        "lat": 35.7158,
        "lng": -79.8127
    },
    {
        "state": "MD",
        "city": "Lochearn",
        "lat": 39.3461,
        "lng": -76.7307
    },
    {
        "state": "CA",
        "city": "Benicia",
        "lat": 38.0725,
        "lng": -122.1526
    },
    {
        "state": "FL",
        "city": "Leisure City",
        "lat": 25.4935,
        "lng": -80.4363
    },
    {
        "state": "PA",
        "city": "Plum",
        "lat": 40.5024,
        "lng": -79.7495
    },
    {
        "state": "IL",
        "city": "Granite City",
        "lat": 38.7296,
        "lng": -90.1268
    },
    {
        "state": "OH",
        "city": "Wooster",
        "lat": 40.8172,
        "lng": -81.9336
    },
    {
        "state": "MO",
        "city": "Gladstone",
        "lat": 39.2134,
        "lng": -94.5592
    },
    {
        "state": "CA",
        "city": "Lemoore",
        "lat": 36.2949,
        "lng": -119.7983
    },
    {
        "state": "WV",
        "city": "Wheeling",
        "lat": 40.0752,
        "lng": -80.6951
    },
    {
        "state": "GA",
        "city": "Union City",
        "lat": 33.5942,
        "lng": -84.5629
    },
    {
        "state": "KY",
        "city": "Paducah",
        "lat": 37.0711,
        "lng": -88.644
    },
    {
        "state": "MN",
        "city": "Shoreview",
        "lat": 45.0842,
        "lng": -93.1358
    },
    {
        "state": "NC",
        "city": "Clayton",
        "lat": 35.659,
        "lng": -78.4498
    },
    {
        "state": "FL",
        "city": "Temple Terrace",
        "lat": 28.0436,
        "lng": -82.3773
    },
    {
        "state": "FL",
        "city": "Ives Estates",
        "lat": 25.9632,
        "lng": -80.183
    },
    {
        "state": "FL",
        "city": "West Melbourne",
        "lat": 28.0694,
        "lng": -80.6736
    },
    {
        "state": "IL",
        "city": "Vernon Hills",
        "lat": 42.234,
        "lng": -87.9608
    },
    {
        "state": "FL",
        "city": "Palm Springs",
        "lat": 26.6348,
        "lng": -80.0969
    },
    {
        "state": "NY",
        "city": "Auburn",
        "lat": 42.9338,
        "lng": -76.5685
    },
    {
        "state": "ME",
        "city": "South Portland",
        "lat": 43.631,
        "lng": -70.2895
    },
    {
        "state": "MS",
        "city": "Horn Lake",
        "lat": 34.9512,
        "lng": -90.0501
    },
    {
        "state": "AZ",
        "city": "Sun City West",
        "lat": 33.6695,
        "lng": -112.3573
    },
    {
        "state": "IL",
        "city": "Edwardsville",
        "lat": 38.7922,
        "lng": -89.9874
    },
    {
        "state": "GA",
        "city": "Carrollton",
        "lat": 33.5818,
        "lng": -85.0838
    },
    {
        "state": "NY",
        "city": "Plainview",
        "lat": 40.7832,
        "lng": -73.4732
    },
    {
        "state": "CA",
        "city": "South Pasadena",
        "lat": 34.1103,
        "lng": -118.1573
    },
    {
        "state": "NJ",
        "city": "Paramus",
        "lat": 40.9455,
        "lng": -74.0712
    },
    {
        "state": "WI",
        "city": "Superior",
        "lat": 46.6941,
        "lng": -92.0823
    },
    {
        "state": "CA",
        "city": "Sanger",
        "lat": 36.699,
        "lng": -119.5575
    },
    {
        "state": "AR",
        "city": "Cabot",
        "lat": 34.9766,
        "lng": -92.0274
    },
    {
        "state": "NC",
        "city": "Mint Hill",
        "lat": 35.1783,
        "lng": -80.6528
    },
    {
        "state": "CA",
        "city": "Eureka",
        "lat": 40.7943,
        "lng": -124.1564
    },
    {
        "state": "CA",
        "city": "Brawley",
        "lat": 32.9783,
        "lng": -115.5287
    },
    {
        "state": "NY",
        "city": "Shirley",
        "lat": 40.7936,
        "lng": -72.8748
    },
    {
        "state": "OH",
        "city": "Troy",
        "lat": 40.0437,
        "lng": -84.2186
    },
    {
        "state": "NY",
        "city": "Elmira",
        "lat": 42.0938,
        "lng": -76.8097
    },
    {
        "state": "FL",
        "city": "Apollo Beach",
        "lat": 27.7618,
        "lng": -82.4003
    },
    {
        "state": "MN",
        "city": "Owatonna",
        "lat": 44.0912,
        "lng": -93.2312
    },
    {
        "state": "WA",
        "city": "Camas",
        "lat": 45.6005,
        "lng": -122.4304
    },
    {
        "state": "IN",
        "city": "East Chicago",
        "lat": 41.6469,
        "lng": -87.4545
    },
    {
        "state": "IL",
        "city": "Batavia",
        "lat": 41.8479,
        "lng": -88.3109
    },
    {
        "state": "CA",
        "city": "Windsor",
        "lat": 38.5422,
        "lng": -122.8089
    },
    {
        "state": "CA",
        "city": "Wasco",
        "lat": 35.5938,
        "lng": -119.3671
    },
    {
        "state": "UT",
        "city": "South Salt Lake",
        "lat": 40.7057,
        "lng": -111.8986
    },
    {
        "state": "FL",
        "city": "Wright",
        "lat": 30.4445,
        "lng": -86.6419
    },
    {
        "state": "GA",
        "city": "Pooler",
        "lat": 32.1043,
        "lng": -81.2569
    },
    {
        "state": "OR",
        "city": "Woodburn",
        "lat": 45.1472,
        "lng": -122.8603
    },
    {
        "state": "AL",
        "city": "Athens",
        "lat": 34.7843,
        "lng": -86.9503
    },
    {
        "state": "OR",
        "city": "Forest Grove",
        "lat": 45.5243,
        "lng": -123.1097
    },
    {
        "state": "CA",
        "city": "Imperial Beach",
        "lat": 32.5693,
        "lng": -117.118
    },
    {
        "state": "MN",
        "city": "Austin",
        "lat": 43.6721,
        "lng": -92.9784
    },
    {
        "state": "IL",
        "city": "Lockport",
        "lat": 41.5906,
        "lng": -88.0293
    },
    {
        "state": "LA",
        "city": "Terrytown",
        "lat": 29.9014,
        "lng": -90.0279
    },
    {
        "state": "OH",
        "city": "Medina",
        "lat": 41.1358,
        "lng": -81.8695
    },
    {
        "state": "IL",
        "city": "Woodstock",
        "lat": 42.3096,
        "lng": -88.4353
    },
    {
        "state": "MN",
        "city": "Winona",
        "lat": 44.0505,
        "lng": -91.6684
    },
    {
        "state": "FL",
        "city": "Northdale",
        "lat": 28.1058,
        "lng": -82.5263
    },
    {
        "state": "FL",
        "city": "Key West",
        "lat": 24.5642,
        "lng": -81.7775
    },
    {
        "state": "IN",
        "city": "Franklin",
        "lat": 39.4948,
        "lng": -86.0544
    },
    {
        "state": "FL",
        "city": "Keystone",
        "lat": 28.1312,
        "lng": -82.5999
    },
    {
        "state": "NJ",
        "city": "Ridgewood",
        "lat": 40.9821,
        "lng": -74.1127
    },
    {
        "state": "CA",
        "city": "Hercules",
        "lat": 38.0064,
        "lng": -122.2564
    },
    {
        "state": "SC",
        "city": "Fort Mill",
        "lat": 35.0061,
        "lng": -80.9389
    },
    {
        "state": "VA",
        "city": "Cave Spring",
        "lat": 37.2254,
        "lng": -80.0072
    },
    {
        "state": "MN",
        "city": "Rosemount",
        "lat": 44.7466,
        "lng": -93.0661
    },
    {
        "state": "OR",
        "city": "Wilsonville",
        "lat": 45.3109,
        "lng": -122.7702
    },
    {
        "state": "MD",
        "city": "Fairland",
        "lat": 39.0803,
        "lng": -76.9527
    },
    {
        "state": "NJ",
        "city": "Lodi",
        "lat": 40.8784,
        "lng": -74.0814
    },
    {
        "state": "FL",
        "city": "Palm City",
        "lat": 27.1735,
        "lng": -80.2862
    },
    {
        "state": "TX",
        "city": "Big Spring",
        "lat": 32.2389,
        "lng": -101.4799
    },
    {
        "state": "CO",
        "city": "Columbine",
        "lat": 39.5879,
        "lng": -105.0694
    },
    {
        "state": "MN",
        "city": "Elk River",
        "lat": 45.3314,
        "lng": -93.567
    },
    {
        "state": "MO",
        "city": "Grandview",
        "lat": 38.8802,
        "lng": -94.5227
    },
    {
        "state": "AL",
        "city": "Bessemer",
        "lat": 33.3712,
        "lng": -86.9728
    },
    {
        "state": "NE",
        "city": "Norfolk",
        "lat": 42.0324,
        "lng": -97.4217
    },
    {
        "state": "TX",
        "city": "Colleyville",
        "lat": 32.8913,
        "lng": -97.1486
    },
    {
        "state": "OK",
        "city": "Jenks",
        "lat": 35.9981,
        "lng": -95.9736
    },
    {
        "state": "CA",
        "city": "El Cerrito",
        "lat": 37.9196,
        "lng": -122.3025
    },
    {
        "state": "MN",
        "city": "Chanhassen",
        "lat": 44.8546,
        "lng": -93.5621
    },
    {
        "state": "MD",
        "city": "Suitland",
        "lat": 38.8492,
        "lng": -76.9225
    },
    {
        "state": "MI",
        "city": "Inkster",
        "lat": 42.2935,
        "lng": -83.3148
    },
    {
        "state": "MD",
        "city": "Fort Washington",
        "lat": 38.7339,
        "lng": -77.0069
    },
    {
        "state": "OH",
        "city": "Marysville",
        "lat": 40.2279,
        "lng": -83.3595
    },
    {
        "state": "NY",
        "city": "Rockville Centre",
        "lat": 40.6643,
        "lng": -73.6383
    },
    {
        "state": "AZ",
        "city": "Florence",
        "lat": 33.059,
        "lng": -111.4209
    },
    {
        "state": "FL",
        "city": "Palm River-Clair Mel",
        "lat": 27.9239,
        "lng": -82.3791
    },
    {
        "state": "MS",
        "city": "Oxford",
        "lat": 34.3627,
        "lng": -89.5336
    },
    {
        "state": "FL",
        "city": "Venice",
        "lat": 27.1184,
        "lng": -82.4137
    },
    {
        "state": "FL",
        "city": "Pace",
        "lat": 30.6188,
        "lng": -87.1667
    },
    {
        "state": "IL",
        "city": "West Chicago",
        "lat": 41.896,
        "lng": -88.2253
    },
    {
        "state": "AL",
        "city": "Trussville",
        "lat": 33.6405,
        "lng": -86.5815
    },
    {
        "state": "WA",
        "city": "Tumwater",
        "lat": 46.9891,
        "lng": -122.9175
    },
    {
        "state": "ID",
        "city": "Moscow",
        "lat": 46.7308,
        "lng": -116.9986
    },
    {
        "state": "VA",
        "city": "Staunton",
        "lat": 38.1593,
        "lng": -79.0611
    },
    {
        "state": "KS",
        "city": "Derby",
        "lat": 37.5571,
        "lng": -97.2551
    },
    {
        "state": "WI",
        "city": "Stevens Point",
        "lat": 44.5241,
        "lng": -89.5507
    },
    {
        "state": "MI",
        "city": "Okemos",
        "lat": 42.7057,
        "lng": -84.4135
    },
    {
        "state": "NJ",
        "city": "Cliffside Park",
        "lat": 40.8222,
        "lng": -73.9879
    },
    {
        "state": "OH",
        "city": "Xenia",
        "lat": 39.6829,
        "lng": -83.9413
    },
    {
        "state": "TX",
        "city": "Fort Hood",
        "lat": 31.1357,
        "lng": -97.7834
    },
    {
        "state": "MT",
        "city": "Kalispell",
        "lat": 48.2153,
        "lng": -114.3274
    },
    {
        "state": "FL",
        "city": "South Bradenton",
        "lat": 27.4612,
        "lng": -82.5822
    },
    {
        "state": "WA",
        "city": "Mercer Island",
        "lat": 47.5661,
        "lng": -122.232
    },
    {
        "state": "FL",
        "city": "Silver Springs Shores",
        "lat": 29.1126,
        "lng": -82.0149
    },
    {
        "state": "CA",
        "city": "West Whittier-Los Nietos",
        "lat": 33.9759,
        "lng": -118.0689
    },
    {
        "state": "NY",
        "city": "Peekskill",
        "lat": 41.2884,
        "lng": -73.9227
    },
    {
        "state": "IL",
        "city": "Belvidere",
        "lat": 42.2543,
        "lng": -88.8649
    },
    {
        "state": "OR",
        "city": "Newberg",
        "lat": 45.3075,
        "lng": -122.9601
    },
    {
        "state": "MI",
        "city": "Holt",
        "lat": 42.6416,
        "lng": -84.5308
    },
    {
        "state": "WI",
        "city": "De Pere",
        "lat": 44.4308,
        "lng": -88.0785
    },
    {
        "state": "VA",
        "city": "Salem",
        "lat": 37.2864,
        "lng": -80.0555
    },
    {
        "state": "IA",
        "city": "Ottumwa",
        "lat": 41.0195,
        "lng": -92.4186
    },
    {
        "state": "FL",
        "city": "Tarpon Springs",
        "lat": 28.1493,
        "lng": -82.7623
    },
    {
        "state": "CA",
        "city": "Galt",
        "lat": 38.2698,
        "lng": -121.3004
    },
    {
        "state": "MO",
        "city": "Hazelwood",
        "lat": 38.7931,
        "lng": -90.3899
    },
    {
        "state": "CA",
        "city": "Norco",
        "lat": 33.9252,
        "lng": -117.5498
    },
    {
        "state": "CA",
        "city": "Lafayette",
        "lat": 37.8919,
        "lng": -122.1189
    },
    {
        "state": "WA",
        "city": "Mill Creek East",
        "lat": 47.8361,
        "lng": -122.1877
    },
    {
        "state": "WI",
        "city": "Caledonia",
        "lat": 42.7986,
        "lng": -87.8762
    },
    {
        "state": "TX",
        "city": "Forney",
        "lat": 32.744,
        "lng": -96.4529
    },
    {
        "state": "FL",
        "city": "Sebastian",
        "lat": 27.7822,
        "lng": -80.4819
    },
    {
        "state": "TX",
        "city": "Kingsville",
        "lat": 27.5094,
        "lng": -97.861
    },
    {
        "state": "MD",
        "city": "Elkridge",
        "lat": 39.1941,
        "lng": -76.7428
    },
    {
        "state": "CA",
        "city": "Reedley",
        "lat": 36.5988,
        "lng": -119.4471
    },
    {
        "state": "CA",
        "city": "Barstow",
        "lat": 34.8661,
        "lng": -117.0471
    },
    {
        "state": "OH",
        "city": "Avon Lake",
        "lat": 41.4944,
        "lng": -82.0159
    },
    {
        "state": "MI",
        "city": "Allendale",
        "lat": 42.9845,
        "lng": -85.9499
    },
    {
        "state": "TX",
        "city": "University Park",
        "lat": 32.8506,
        "lng": -96.7937
    },
    {
        "state": "FL",
        "city": "Fish Hawk",
        "lat": 27.8511,
        "lng": -82.2164
    },
    {
        "state": "IL",
        "city": "Melrose Park",
        "lat": 41.903,
        "lng": -87.8636
    },
    {
        "state": "MI",
        "city": "Walker",
        "lat": 42.9853,
        "lng": -85.7446
    },
    {
        "state": "OH",
        "city": "Barberton",
        "lat": 41.0095,
        "lng": -81.6037
    },
    {
        "state": "NJ",
        "city": "Carteret",
        "lat": 40.5849,
        "lng": -74.2284
    },
    {
        "state": "WA",
        "city": "Moses Lake",
        "lat": 47.1279,
        "lng": -119.2759
    },
    {
        "state": "MS",
        "city": "Brandon",
        "lat": 32.2778,
        "lng": -89.9896
    },
    {
        "state": "CA",
        "city": "North Tustin",
        "lat": 33.7636,
        "lng": -117.7947
    },
    {
        "state": "SC",
        "city": "Conway",
        "lat": 33.8401,
        "lng": -79.0431
    },
    {
        "state": "MD",
        "city": "Edgewood",
        "lat": 39.419,
        "lng": -76.2964
    },
    {
        "state": "ND",
        "city": "Dickinson",
        "lat": 46.8918,
        "lng": -102.7925
    },
    {
        "state": "TX",
        "city": "Corsicana",
        "lat": 32.0824,
        "lng": -96.4665
    },
    {
        "state": "WI",
        "city": "Mequon",
        "lat": 43.2352,
        "lng": -87.9839
    },
    {
        "state": "NE",
        "city": "Hastings",
        "lat": 40.5961,
        "lng": -98.39
    },
    {
        "state": "RI",
        "city": "Newport",
        "lat": 41.4801,
        "lng": -71.3203
    },
    {
        "state": "WI",
        "city": "Muskego",
        "lat": 42.886,
        "lng": -88.1291
    },
    {
        "state": "MI",
        "city": "Romulus",
        "lat": 42.2237,
        "lng": -83.366
    },
    {
        "state": "CA",
        "city": "Seal Beach",
        "lat": 33.7542,
        "lng": -118.0714
    },
    {
        "state": "IA",
        "city": "Waukee",
        "lat": 41.5985,
        "lng": -93.8869
    },
    {
        "state": "CA",
        "city": "Maywood",
        "lat": 33.9886,
        "lng": -118.1877
    },
    {
        "state": "MI",
        "city": "Norton Shores",
        "lat": 43.1621,
        "lng": -86.2519
    },
    {
        "state": "OH",
        "city": "Sandusky",
        "lat": 41.4468,
        "lng": -82.7024
    },
    {
        "state": "GA",
        "city": "Sugar Hill",
        "lat": 34.108,
        "lng": -84.0558
    },
    {
        "state": "IL",
        "city": "Morton Grove",
        "lat": 42.0423,
        "lng": -87.789
    },
    {
        "state": "FL",
        "city": "Westchase",
        "lat": 28.0597,
        "lng": -82.611
    },
    {
        "state": "CA",
        "city": "Loma Linda",
        "lat": 34.045,
        "lng": -117.2498
    },
    {
        "state": "TX",
        "city": "Denison",
        "lat": 33.7672,
        "lng": -96.5808
    },
    {
        "state": "NY",
        "city": "Watertown",
        "lat": 43.9734,
        "lng": -75.9094
    },
    {
        "state": "MI",
        "city": "Wyandotte",
        "lat": 42.2113,
        "lng": -83.1558
    },
    {
        "state": "OH",
        "city": "Perrysburg",
        "lat": 41.5377,
        "lng": -83.6413
    },
    {
        "state": "IA",
        "city": "Fort Dodge",
        "lat": 42.5098,
        "lng": -94.1751
    },
    {
        "state": "ID",
        "city": "Kuna",
        "lat": 43.488,
        "lng": -116.3933
    },
    {
        "state": "MD",
        "city": "Arnold",
        "lat": 39.0437,
        "lng": -76.4974
    },
    {
        "state": "SC",
        "city": "Carolina Forest",
        "lat": 33.7651,
        "lng": -78.913
    },
    {
        "state": "OH",
        "city": "Avon",
        "lat": 41.4485,
        "lng": -82.0187
    },
    {
        "state": "CA",
        "city": "Riverbank",
        "lat": 37.726,
        "lng": -120.9433
    },
    {
        "state": "VA",
        "city": "Bailey's Crossroads",
        "lat": 38.8477,
        "lng": -77.1305
    },
    {
        "state": "OK",
        "city": "Ardmore",
        "lat": 34.1949,
        "lng": -97.1256
    },
    {
        "state": "CA",
        "city": "Soledad",
        "lat": 36.4432,
        "lng": -121.3426
    },
    {
        "state": "OH",
        "city": "Zanesville",
        "lat": 39.9565,
        "lng": -82.0132
    },
    {
        "state": "TX",
        "city": "San Benito",
        "lat": 26.1298,
        "lng": -97.644
    },
    {
        "state": "WA",
        "city": "Frederickson",
        "lat": 47.0916,
        "lng": -122.3603
    },
    {
        "state": "NY",
        "city": "Medford",
        "lat": 40.822,
        "lng": -72.9859
    },
    {
        "state": "TX",
        "city": "Cloverleaf",
        "lat": 29.7882,
        "lng": -95.1724
    },
    {
        "state": "FL",
        "city": "Lutz",
        "lat": 28.1396,
        "lng": -82.4467
    },
    {
        "state": "CA",
        "city": "Dinuba",
        "lat": 36.5453,
        "lng": -119.3987
    },
    {
        "state": "MD",
        "city": "North Potomac",
        "lat": 39.0955,
        "lng": -77.2373
    },
    {
        "state": "WA",
        "city": "Bainbridge Island",
        "lat": 47.6439,
        "lng": -122.5434
    },
    {
        "state": "NY",
        "city": "Dix Hills",
        "lat": 40.8033,
        "lng": -73.3375
    },
    {
        "state": "MD",
        "city": "Greenbelt",
        "lat": 38.9953,
        "lng": -76.8885
    },
    {
        "state": "FL",
        "city": "Bayonet Point",
        "lat": 28.3254,
        "lng": -82.6834
    },
    {
        "state": "MS",
        "city": "Ridgeland",
        "lat": 32.4236,
        "lng": -90.1481
    },
    {
        "state": "FL",
        "city": "Coral Terrace",
        "lat": 25.7464,
        "lng": -80.3049
    },
    {
        "state": "MI",
        "city": "Auburn Hills",
        "lat": 42.6735,
        "lng": -83.2448
    },
    {
        "state": "CA",
        "city": "Selma",
        "lat": 36.5715,
        "lng": -119.6143
    },
    {
        "state": "TX",
        "city": "Paris",
        "lat": 33.6688,
        "lng": -95.546
    },
    {
        "state": "IL",
        "city": "Zion",
        "lat": 42.4603,
        "lng": -87.8511
    },
    {
        "state": "IA",
        "city": "Clinton",
        "lat": 41.8435,
        "lng": -90.2412
    },
    {
        "state": "OH",
        "city": "Centerville",
        "lat": 39.6339,
        "lng": -84.1449
    },
    {
        "state": "IL",
        "city": "Homer Glen",
        "lat": 41.6043,
        "lng": -87.9497
    },
    {
        "state": "OH",
        "city": "Riverside",
        "lat": 39.7835,
        "lng": -84.1219
    },
    {
        "state": "FL",
        "city": "Oak Ridge",
        "lat": 28.4727,
        "lng": -81.4169
    },
    {
        "state": "NC",
        "city": "Leland",
        "lat": 34.2042,
        "lng": -78.0279
    },
    {
        "state": "SC",
        "city": "Socastee",
        "lat": 33.6871,
        "lng": -79.0086
    },
    {
        "state": "UT",
        "city": "Farmington",
        "lat": 40.9845,
        "lng": -111.9065
    },
    {
        "state": "WA",
        "city": "Oak Harbor",
        "lat": 48.2964,
        "lng": -122.6333
    },
    {
        "state": "VA",
        "city": "Herndon",
        "lat": 38.9699,
        "lng": -77.3867
    },
    {
        "state": "OK",
        "city": "Ponca City",
        "lat": 36.7235,
        "lng": -97.0677
    },
    {
        "state": "MD",
        "city": "Landover",
        "lat": 38.9241,
        "lng": -76.8875
    },
    {
        "state": "SC",
        "city": "North Augusta",
        "lat": 33.5214,
        "lng": -81.9547
    },
    {
        "state": "PA",
        "city": "King of Prussia",
        "lat": 40.0963,
        "lng": -75.3821
    },
    {
        "state": "GA",
        "city": "Decatur",
        "lat": 33.7711,
        "lng": -84.2963
    },
    {
        "state": "MN",
        "city": "Faribault",
        "lat": 44.2996,
        "lng": -93.2789
    },
    {
        "state": "MD",
        "city": "North Laurel",
        "lat": 39.1285,
        "lng": -76.8476
    },
    {
        "state": "CA",
        "city": "Bay Point",
        "lat": 38.0329,
        "lng": -121.9615
    },
    {
        "state": "OR",
        "city": "Happy Valley",
        "lat": 45.4358,
        "lng": -122.5081
    },
    {
        "state": "FL",
        "city": "Port St. John",
        "lat": 28.4757,
        "lng": -80.8104
    },
    {
        "state": "TX",
        "city": "Benbrook",
        "lat": 32.6788,
        "lng": -97.4637
    },
    {
        "state": "AR",
        "city": "West Memphis",
        "lat": 35.153,
        "lng": -90.1996
    },
    {
        "state": "TX",
        "city": "Kerrville",
        "lat": 30.0398,
        "lng": -99.132
    },
    {
        "state": "MD",
        "city": "Ballenger Creek",
        "lat": 39.3807,
        "lng": -77.4206
    },
    {
        "state": "CA",
        "city": "Ladera Ranch",
        "lat": 33.5492,
        "lng": -117.6417
    },
    {
        "state": "MN",
        "city": "White Bear Lake",
        "lat": 45.0656,
        "lng": -93.015
    },
    {
        "state": "IL",
        "city": "Collinsville",
        "lat": 38.677,
        "lng": -90.0063
    },
    {
        "state": "IL",
        "city": "Elmwood Park",
        "lat": 41.9225,
        "lng": -87.8163
    },
    {
        "state": "MS",
        "city": "Starkville",
        "lat": 33.4608,
        "lng": -88.8297
    },
    {
        "state": "NJ",
        "city": "South Plainfield",
        "lat": 40.5748,
        "lng": -74.4152
    },
    {
        "state": "IL",
        "city": "Westmont",
        "lat": 41.7948,
        "lng": -87.9742
    },
    {
        "state": "FL",
        "city": "Wekiwa Springs",
        "lat": 28.6984,
        "lng": -81.4251
    },
    {
        "state": "FL",
        "city": "Palmetto Bay",
        "lat": 25.6219,
        "lng": -80.3221
    },
    {
        "state": "NJ",
        "city": "Somerset",
        "lat": 40.5083,
        "lng": -74.501
    },
    {
        "state": "VA",
        "city": "Fairfax",
        "lat": 38.8531,
        "lng": -77.2997
    },
    {
        "state": "MO",
        "city": "Belton",
        "lat": 38.8192,
        "lng": -94.5335
    },
    {
        "state": "WA",
        "city": "North Lynnwood",
        "lat": 47.8533,
        "lng": -122.2762
    },
    {
        "state": "AL",
        "city": "Pelham",
        "lat": 33.3114,
        "lng": -86.7573
    },
    {
        "state": "OK",
        "city": "Yukon",
        "lat": 35.5201,
        "lng": -97.7639
    },
    {
        "state": "SC",
        "city": "Simpsonville",
        "lat": 34.7287,
        "lng": -82.2569
    },
    {
        "state": "KS",
        "city": "Emporia",
        "lat": 38.4028,
        "lng": -96.1932
    },
    {
        "state": "TX",
        "city": "Saginaw",
        "lat": 32.8657,
        "lng": -97.3654
    },
    {
        "state": "FL",
        "city": "Bloomingdale",
        "lat": 27.8784,
        "lng": -82.2624
    },
    {
        "state": "OH",
        "city": "Wadsworth",
        "lat": 41.0279,
        "lng": -81.7323
    },
    {
        "state": "IL",
        "city": "Rolling Meadows",
        "lat": 42.0747,
        "lng": -88.0252
    },
    {
        "state": "OH",
        "city": "Solon",
        "lat": 41.3865,
        "lng": -81.44
    },
    {
        "state": "ND",
        "city": "Mandan",
        "lat": 46.829,
        "lng": -100.887
    },
    {
        "state": "ME",
        "city": "Auburn",
        "lat": 44.0851,
        "lng": -70.2492
    },
    {
        "state": "FL",
        "city": "Bellview",
        "lat": 30.462,
        "lng": -87.312
    },
    {
        "state": "NE",
        "city": "Columbus",
        "lat": 41.4366,
        "lng": -97.3565
    },
    {
        "state": "FL",
        "city": "Jasmine Estates",
        "lat": 28.293,
        "lng": -82.6907
    },
    {
        "state": "NY",
        "city": "Kingston",
        "lat": 41.9295,
        "lng": -73.9968
    },
    {
        "state": "NE",
        "city": "Papillion",
        "lat": 41.1511,
        "lng": -96.0665
    },
    {
        "state": "IA",
        "city": "Burlington",
        "lat": 40.8071,
        "lng": -91.1247
    },
    {
        "state": "CA",
        "city": "San Fernando",
        "lat": 34.2886,
        "lng": -118.4362
    },
    {
        "state": "MS",
        "city": "Columbus",
        "lat": 33.5088,
        "lng": -88.4096
    },
    {
        "state": "IL",
        "city": "Freeport",
        "lat": 42.2891,
        "lng": -89.6346
    },
    {
        "state": "IA",
        "city": "Johnston",
        "lat": 41.691,
        "lng": -93.7234
    },
    {
        "state": "CA",
        "city": "Rosemont",
        "lat": 38.5478,
        "lng": -121.3553
    },
    {
        "state": "IL",
        "city": "South Elgin",
        "lat": 41.9906,
        "lng": -88.3135
    },
    {
        "state": "MO",
        "city": "Webster Groves",
        "lat": 38.5866,
        "lng": -90.3544
    },
    {
        "state": "OH",
        "city": "Willoughby",
        "lat": 41.6459,
        "lng": -81.4084
    },
    {
        "state": "TN",
        "city": "Farragut",
        "lat": 35.8731,
        "lng": -84.1821
    },
    {
        "state": "IN",
        "city": "Highland",
        "lat": 41.5483,
        "lng": -87.4588
    },
    {
        "state": "AZ",
        "city": "Fountain Hills",
        "lat": 33.6073,
        "lng": -111.7398
    },
    {
        "state": "IN",
        "city": "Munster",
        "lat": 41.5468,
        "lng": -87.504
    },
    {
        "state": "MI",
        "city": "Waverly",
        "lat": 42.7401,
        "lng": -84.6354
    },
    {
        "state": "CA",
        "city": "Patterson",
        "lat": 37.4758,
        "lng": -121.1536
    },
    {
        "state": "TN",
        "city": "Shelbyville",
        "lat": 35.4987,
        "lng": -86.4517
    },
    {
        "state": "IA",
        "city": "Muscatine",
        "lat": 41.4195,
        "lng": -91.068
    },
    {
        "state": "IN",
        "city": "Greenfield",
        "lat": 39.7937,
        "lng": -85.7738
    },
    {
        "state": "MN",
        "city": "Champlin",
        "lat": 45.1702,
        "lng": -93.3903
    },
    {
        "state": "SC",
        "city": "Lexington",
        "lat": 33.989,
        "lng": -81.2202
    },
    {
        "state": "OR",
        "city": "Roseburg",
        "lat": 43.2231,
        "lng": -123.352
    },
    {
        "state": "WA",
        "city": "Kenmore",
        "lat": 47.7516,
        "lng": -122.2489
    },
    {
        "state": "TX",
        "city": "Fresno",
        "lat": 29.5357,
        "lng": -95.4696
    },
    {
        "state": "CA",
        "city": "Mountain House",
        "lat": 37.7673,
        "lng": -121.5449
    },
    {
        "state": "FL",
        "city": "Jacksonville Beach",
        "lat": 30.2782,
        "lng": -81.4045
    },
    {
        "state": "DE",
        "city": "Middletown",
        "lat": 39.445,
        "lng": -75.7183
    },
    {
        "state": "SD",
        "city": "Brookings",
        "lat": 44.3022,
        "lng": -96.7859
    },
    {
        "state": "MO",
        "city": "Nixa",
        "lat": 37.0453,
        "lng": -93.2959
    },
    {
        "state": "TX",
        "city": "Watauga",
        "lat": 32.8719,
        "lng": -97.2515
    },
    {
        "state": "TX",
        "city": "Marshall",
        "lat": 32.537,
        "lng": -94.3515
    },
    {
        "state": "IL",
        "city": "Lisle",
        "lat": 41.7918,
        "lng": -88.0888
    },
    {
        "state": "KS",
        "city": "Gardner",
        "lat": 38.8122,
        "lng": -94.9275
    },
    {
        "state": "MN",
        "city": "Farmington",
        "lat": 44.6572,
        "lng": -93.1687
    },
    {
        "state": "GA",
        "city": "Griffin",
        "lat": 33.2418,
        "lng": -84.2748
    },
    {
        "state": "OH",
        "city": "Maple Heights",
        "lat": 41.4094,
        "lng": -81.5625
    },
    {
        "state": "NY",
        "city": "Copiague",
        "lat": 40.6707,
        "lng": -73.3922
    },
    {
        "state": "PR",
        "city": "Vega Baja",
        "lat": 18.4406,
        "lng": -66.3997
    },
    {
        "state": "AR",
        "city": "Van Buren",
        "lat": 35.4483,
        "lng": -94.3528
    },
    {
        "state": "UT",
        "city": "Clinton",
        "lat": 41.1395,
        "lng": -112.0656
    },
    {
        "state": "IL",
        "city": "Maywood",
        "lat": 41.8798,
        "lng": -87.8442
    },
    {
        "state": "VA",
        "city": "West Springfield",
        "lat": 38.7771,
        "lng": -77.2268
    },
    {
        "state": "WY",
        "city": "Rock Springs",
        "lat": 41.5947,
        "lng": -109.2209
    },
    {
        "state": "PA",
        "city": "Pottstown",
        "lat": 40.2508,
        "lng": -75.6445
    },
    {
        "state": "NE",
        "city": "North Platte",
        "lat": 41.1263,
        "lng": -100.7641
    },
    {
        "state": "MD",
        "city": "Camp Springs",
        "lat": 38.8052,
        "lng": -76.9199
    },
    {
        "state": "CA",
        "city": "Linda",
        "lat": 39.1241,
        "lng": -121.5421
    },
    {
        "state": "WA",
        "city": "Martha Lake",
        "lat": 47.8479,
        "lng": -122.2327
    },
    {
        "state": "MD",
        "city": "Cockeysville",
        "lat": 39.4804,
        "lng": -76.6294
    },
    {
        "state": "WA",
        "city": "Cottage Lake",
        "lat": 47.7466,
        "lng": -122.0755
    },
    {
        "state": "MO",
        "city": "Raymore",
        "lat": 38.8029,
        "lng": -94.4583
    },
    {
        "state": "OH",
        "city": "Pickerington",
        "lat": 39.889,
        "lng": -82.7678
    },
    {
        "state": "WA",
        "city": "Union Hill-Novelty Hill",
        "lat": 47.6788,
        "lng": -122.0284
    },
    {
        "state": "WA",
        "city": "Eastmont",
        "lat": 47.8968,
        "lng": -122.1818
    },
    {
        "state": "CA",
        "city": "Ashland",
        "lat": 37.6942,
        "lng": -122.1159
    },
    {
        "state": "MN",
        "city": "New Brighton",
        "lat": 45.0658,
        "lng": -93.206
    },
    {
        "state": "FL",
        "city": "Edgewater",
        "lat": 28.9594,
        "lng": -80.9406
    },
    {
        "state": "TX",
        "city": "Belton",
        "lat": 31.0525,
        "lng": -97.479
    },
    {
        "state": "SC",
        "city": "Easley",
        "lat": 34.8188,
        "lng": -82.5827
    },
    {
        "state": "OH",
        "city": "Trotwood",
        "lat": 39.7926,
        "lng": -84.3165
    },
    {
        "state": "CA",
        "city": "Oakdale",
        "lat": 37.7618,
        "lng": -120.8468
    },
    {
        "state": "FL",
        "city": "Liberty Triangle",
        "lat": 29.076,
        "lng": -82.2191
    },
    {
        "state": "VA",
        "city": "Chantilly",
        "lat": 38.8868,
        "lng": -77.4453
    },
    {
        "state": "CA",
        "city": "Calabasas",
        "lat": 34.1375,
        "lng": -118.6689
    },
    {
        "state": "GA",
        "city": "Cartersville",
        "lat": 34.1644,
        "lng": -84.8009
    },
    {
        "state": "FL",
        "city": "Eustis",
        "lat": 28.8563,
        "lng": -81.6771
    },
    {
        "state": "DE",
        "city": "Bear",
        "lat": 39.6189,
        "lng": -75.6808
    },
    {
        "state": "VA",
        "city": "Chester",
        "lat": 37.3531,
        "lng": -77.4342
    },
    {
        "state": "PR",
        "city": "Catano",
        "lat": 18.4375,
        "lng": -66.144
    },
    {
        "state": "CA",
        "city": "Bloomington",
        "lat": 34.0601,
        "lng": -117.4013
    },
    {
        "state": "VA",
        "city": "Hopewell",
        "lat": 37.2915,
        "lng": -77.2985
    },
    {
        "state": "NV",
        "city": "Fernley",
        "lat": 39.5627,
        "lng": -119.1906
    },
    {
        "state": "NJ",
        "city": "Glassboro",
        "lat": 39.7014,
        "lng": -75.1113
    },
    {
        "state": "OH",
        "city": "Hudson",
        "lat": 41.2399,
        "lng": -81.4408
    },
    {
        "state": "SC",
        "city": "Taylors",
        "lat": 34.9157,
        "lng": -82.3124
    },
    {
        "state": "KY",
        "city": "Radcliff",
        "lat": 37.8204,
        "lng": -85.9365
    },
    {
        "state": "WI",
        "city": "Watertown",
        "lat": 43.1893,
        "lng": -88.7285
    },
    {
        "state": "FL",
        "city": "Brent",
        "lat": 30.4727,
        "lng": -87.2495
    },
    {
        "state": "VA",
        "city": "Woodlawn",
        "lat": 38.7332,
        "lng": -77.1149
    },
    {
        "state": "AR",
        "city": "Searcy",
        "lat": 35.2418,
        "lng": -91.7351
    },
    {
        "state": "MN",
        "city": "Crystal",
        "lat": 45.0377,
        "lng": -93.3599
    },
    {
        "state": "FL",
        "city": "Nocatee",
        "lat": 30.0927,
        "lng": -81.4095
    },
    {
        "state": "VA",
        "city": "Christiansburg",
        "lat": 37.1406,
        "lng": -80.4036
    },
    {
        "state": "CA",
        "city": "Laguna Beach",
        "lat": 33.5455,
        "lng": -117.7613
    },
    {
        "state": "IL",
        "city": "Loves Park",
        "lat": 42.3364,
        "lng": -88.9975
    },
    {
        "state": "IL",
        "city": "Blue Island",
        "lat": 41.6578,
        "lng": -87.6811
    },
    {
        "state": "KS",
        "city": "Prairie Village",
        "lat": 38.9874,
        "lng": -94.6362
    },
    {
        "state": "NH",
        "city": "Keene",
        "lat": 42.9494,
        "lng": -72.2998
    },
    {
        "state": "NY",
        "city": "Garden City",
        "lat": 40.7266,
        "lng": -73.6447
    },
    {
        "state": "IL",
        "city": "Roselle",
        "lat": 41.9809,
        "lng": -88.0861
    },
    {
        "state": "IL",
        "city": "Machesney Park",
        "lat": 42.3666,
        "lng": -89.0266
    },
    {
        "state": "TX",
        "city": "Katy",
        "lat": 29.7905,
        "lng": -95.8353
    },
    {
        "state": "CA",
        "city": "Millbrae",
        "lat": 37.5994,
        "lng": -122.4023
    },
    {
        "state": "FL",
        "city": "Hialeah Gardens",
        "lat": 25.8878,
        "lng": -80.3569
    },
    {
        "state": "CA",
        "city": "Corcoran",
        "lat": 36.0841,
        "lng": -119.5613
    },
    {
        "state": "VA",
        "city": "Brambleton",
        "lat": 38.9803,
        "lng": -77.5323
    },
    {
        "state": "TX",
        "city": "Pecan Grove",
        "lat": 29.6235,
        "lng": -95.733
    },
    {
        "state": "NV",
        "city": "Sun Valley",
        "lat": 39.6104,
        "lng": -119.777
    },
    {
        "state": "OK",
        "city": "Duncan",
        "lat": 34.5408,
        "lng": -97.9215
    },
    {
        "state": "IL",
        "city": "Villa Park",
        "lat": 41.8865,
        "lng": -87.9779
    },
    {
        "state": "KS",
        "city": "Junction City",
        "lat": 39.0277,
        "lng": -96.8508
    },
    {
        "state": "SD",
        "city": "Watertown",
        "lat": 44.9094,
        "lng": -97.1532
    },
    {
        "state": "WA",
        "city": "Hazel Dell",
        "lat": 45.6797,
        "lng": -122.6553
    },
    {
        "state": "AZ",
        "city": "Anthem",
        "lat": 33.856,
        "lng": -112.1168
    },
    {
        "state": "FL",
        "city": "The Crossings",
        "lat": 25.6708,
        "lng": -80.4018
    },
    {
        "state": "GA",
        "city": "Candler-McAfee",
        "lat": 33.7267,
        "lng": -84.2723
    },
    {
        "state": "HI",
        "city": "Kapolei",
        "lat": 21.3399,
        "lng": -158.0677
    },
    {
        "state": "PA",
        "city": "Allison Park",
        "lat": 40.573,
        "lng": -79.9603
    },
    {
        "state": "OH",
        "city": "Athens",
        "lat": 39.327,
        "lng": -82.0987
    },
    {
        "state": "NJ",
        "city": "North Plainfield",
        "lat": 40.6209,
        "lng": -74.4386
    },
    {
        "state": "CA",
        "city": "Cudahy",
        "lat": 33.9631,
        "lng": -118.183
    },
    {
        "state": "CA",
        "city": "East San Gabriel",
        "lat": 34.1157,
        "lng": -118.0791
    },
    {
        "state": "AL",
        "city": "Fairhope",
        "lat": 30.5209,
        "lng": -87.8813
    },
    {
        "state": "WA",
        "city": "Bonney Lake",
        "lat": 47.1791,
        "lng": -122.17
    },
    {
        "state": "NJ",
        "city": "Summit",
        "lat": 40.7154,
        "lng": -74.3647
    },
    {
        "state": "IL",
        "city": "East Peoria",
        "lat": 40.6736,
        "lng": -89.5419
    },
    {
        "state": "FL",
        "city": "Florida Ridge",
        "lat": 27.5805,
        "lng": -80.3848
    },
    {
        "state": "TX",
        "city": "Horizon City",
        "lat": 31.6799,
        "lng": -106.1903
    },
    {
        "state": "SC",
        "city": "Greenwood",
        "lat": 34.1947,
        "lng": -82.1542
    },
    {
        "state": "VA",
        "city": "Cherry Hill",
        "lat": 38.5696,
        "lng": -77.2895
    },
    {
        "state": "TX",
        "city": "Corinth",
        "lat": 33.1434,
        "lng": -97.0682
    },
    {
        "state": "NJ",
        "city": "Roselle",
        "lat": 40.6527,
        "lng": -74.2599
    },
    {
        "state": "IA",
        "city": "Coralville",
        "lat": 41.699,
        "lng": -91.5967
    },
    {
        "state": "CA",
        "city": "Willowbrook",
        "lat": 33.9209,
        "lng": -118.2356
    },
    {
        "state": "ME",
        "city": "Biddeford",
        "lat": 43.4673,
        "lng": -70.4511
    },
    {
        "state": "IL",
        "city": "Bloomingdale",
        "lat": 41.9497,
        "lng": -88.0895
    },
    {
        "state": "AL",
        "city": "Albertville",
        "lat": 34.2633,
        "lng": -86.2108
    },
    {
        "state": "CA",
        "city": "Rancho San Diego",
        "lat": 32.7624,
        "lng": -116.9197
    },
    {
        "state": "IN",
        "city": "La Porte",
        "lat": 41.6069,
        "lng": -86.7142
    },
    {
        "state": "RI",
        "city": "Central Falls",
        "lat": 41.8901,
        "lng": -71.3934
    },
    {
        "state": "VA",
        "city": "Waynesboro",
        "lat": 38.0674,
        "lng": -78.9014
    },
    {
        "state": "GA",
        "city": "Acworth",
        "lat": 34.0566,
        "lng": -84.6716
    },
    {
        "state": "FL",
        "city": "DeBary",
        "lat": 28.8815,
        "lng": -81.324
    },
    {
        "state": "LA",
        "city": "Ruston",
        "lat": 32.5328,
        "lng": -92.6363
    },
    {
        "state": "TX",
        "city": "Brushy Creek",
        "lat": 30.5128,
        "lng": -97.7386
    },
    {
        "state": "AL",
        "city": "Mountain Brook",
        "lat": 33.4871,
        "lng": -86.74
    },
    {
        "state": "CA",
        "city": "Marina",
        "lat": 36.681,
        "lng": -121.7892
    },
    {
        "state": "HI",
        "city": "Kihei",
        "lat": 20.7653,
        "lng": -156.4454
    },
    {
        "state": "CA",
        "city": "West Carson",
        "lat": 33.8229,
        "lng": -118.2931
    },
    {
        "state": "WA",
        "city": "Silver Firs",
        "lat": 47.8635,
        "lng": -122.1497
    },
    {
        "state": "FL",
        "city": "Sunny Isles Beach",
        "lat": 25.9385,
        "lng": -80.1246
    },
    {
        "state": "LA",
        "city": "Chalmette",
        "lat": 29.9438,
        "lng": -89.966
    },
    {
        "state": "VA",
        "city": "McNair",
        "lat": 38.9513,
        "lng": -77.4115
    },
    {
        "state": "CA",
        "city": "Granite Bay",
        "lat": 38.7601,
        "lng": -121.1714
    },
    {
        "state": "FL",
        "city": "Ensley",
        "lat": 30.5259,
        "lng": -87.2733
    },
    {
        "state": "MN",
        "city": "Golden Valley",
        "lat": 44.9901,
        "lng": -93.3591
    },
    {
        "state": "CA",
        "city": "West Rancho Dominguez",
        "lat": 33.9057,
        "lng": -118.2683
    },
    {
        "state": "FL",
        "city": "World Golf Village",
        "lat": 29.9654,
        "lng": -81.4896
    },
    {
        "state": "CA",
        "city": "Ramona",
        "lat": 33.0474,
        "lng": -116.8766
    },
    {
        "state": "CO",
        "city": "Evans",
        "lat": 40.366,
        "lng": -104.739
    },
    {
        "state": "IN",
        "city": "Clarksville",
        "lat": 38.322,
        "lng": -85.7673
    },
    {
        "state": "VA",
        "city": "Montclair",
        "lat": 38.6111,
        "lng": -77.34
    },
    {
        "state": "CA",
        "city": "West Puente Valley",
        "lat": 34.0513,
        "lng": -117.9681
    },
    {
        "state": "MN",
        "city": "Hastings",
        "lat": 44.7318,
        "lng": -92.8538
    },
    {
        "state": "OH",
        "city": "Oxford",
        "lat": 39.5061,
        "lng": -84.7446
    },
    {
        "state": "VA",
        "city": "Lorton",
        "lat": 38.6983,
        "lng": -77.2164
    },
    {
        "state": "TN",
        "city": "East Ridge",
        "lat": 34.9973,
        "lng": -85.2285
    },
    {
        "state": "IL",
        "city": "Carbondale",
        "lat": 37.7221,
        "lng": -89.2237
    },
    {
        "state": "OK",
        "city": "Sapulpa",
        "lat": 36.0091,
        "lng": -96.1003
    },
    {
        "state": "AL",
        "city": "Oxford",
        "lat": 33.5967,
        "lng": -85.8687
    },
    {
        "state": "OH",
        "city": "Chillicothe",
        "lat": 39.3393,
        "lng": -82.9939
    },
    {
        "state": "ME",
        "city": "Sanford",
        "lat": 43.4244,
        "lng": -70.7573
    },
    {
        "state": "IL",
        "city": "Darien",
        "lat": 41.7448,
        "lng": -87.9822
    },
    {
        "state": "CA",
        "city": "Valinda",
        "lat": 34.04,
        "lng": -117.93
    },
    {
        "state": "PA",
        "city": "Chambersburg",
        "lat": 39.9315,
        "lng": -77.6556
    },
    {
        "state": "SC",
        "city": "St. Andrews",
        "lat": 34.051,
        "lng": -81.1057
    },
    {
        "state": "MS",
        "city": "Pascagoula",
        "lat": 30.3666,
        "lng": -88.5506
    },
    {
        "state": "UT",
        "city": "North Salt Lake",
        "lat": 40.8439,
        "lng": -111.9187
    },
    {
        "state": "NJ",
        "city": "Hillsborough",
        "lat": 40.5069,
        "lng": -74.6523
    },
    {
        "state": "WI",
        "city": "Middleton",
        "lat": 43.1064,
        "lng": -89.5059
    },
    {
        "state": "PA",
        "city": "New Castle",
        "lat": 40.9956,
        "lng": -80.3458
    },
    {
        "state": "CA",
        "city": "Port Hueneme",
        "lat": 34.1618,
        "lng": -119.2036
    },
    {
        "state": "NY",
        "city": "Massapequa",
        "lat": 40.6676,
        "lng": -73.4706
    },
    {
        "state": "MI",
        "city": "Mount Pleasant",
        "lat": 43.5966,
        "lng": -84.7759
    },
    {
        "state": "MN",
        "city": "Columbia Heights",
        "lat": 45.0484,
        "lng": -93.2472
    },
    {
        "state": "OR",
        "city": "Hayesville",
        "lat": 44.9793,
        "lng": -122.9738
    },
    {
        "state": "NJ",
        "city": "Parsippany",
        "lat": 40.8645,
        "lng": -74.4135
    },
    {
        "state": "OR",
        "city": "Klamath Falls",
        "lat": 42.2195,
        "lng": -121.7754
    },
    {
        "state": "IN",
        "city": "Avon",
        "lat": 39.7601,
        "lng": -86.3916
    },
    {
        "state": "MD",
        "city": "Langley Park",
        "lat": 38.9897,
        "lng": -76.9808
    },
    {
        "state": "WA",
        "city": "Silverdale",
        "lat": 47.6663,
        "lng": -122.6828
    },
    {
        "state": "MO",
        "city": "Sedalia",
        "lat": 38.7059,
        "lng": -93.234
    },
    {
        "state": "CA",
        "city": "Lakeside",
        "lat": 32.856,
        "lng": -116.904
    },
    {
        "state": "NY",
        "city": "Selden",
        "lat": 40.8714,
        "lng": -73.0466
    },
    {
        "state": "OH",
        "city": "South Euclid",
        "lat": 41.524,
        "lng": -81.5245
    },
    {
        "state": "MI",
        "city": "Birmingham",
        "lat": 42.5446,
        "lng": -83.2166
    },
    {
        "state": "NC",
        "city": "Shelby",
        "lat": 35.2904,
        "lng": -81.5451
    },
    {
        "state": "CA",
        "city": "Yucca Valley",
        "lat": 34.1234,
        "lng": -116.4216
    },
    {
        "state": "CA",
        "city": "Duarte",
        "lat": 34.161,
        "lng": -117.9504
    },
    {
        "state": "OK",
        "city": "Del City",
        "lat": 35.4483,
        "lng": -97.4408
    },
    {
        "state": "NM",
        "city": "Gallup",
        "lat": 35.5182,
        "lng": -108.7431
    },
    {
        "state": "CA",
        "city": "American Canyon",
        "lat": 38.1796,
        "lng": -122.2583
    },
    {
        "state": "MN",
        "city": "New Hope",
        "lat": 45.0375,
        "lng": -93.3869
    },
    {
        "state": "OH",
        "city": "Alliance",
        "lat": 40.9107,
        "lng": -81.1189
    },
    {
        "state": "WA",
        "city": "Tukwila",
        "lat": 47.475,
        "lng": -122.2728
    },
    {
        "state": "TX",
        "city": "Fulshear",
        "lat": 29.693,
        "lng": -95.8804
    },
    {
        "state": "OH",
        "city": "Rocky River",
        "lat": 41.4702,
        "lng": -81.8525
    },
    {
        "state": "HI",
        "city": "Mililani Mauka",
        "lat": 21.4756,
        "lng": -157.9948
    },
    {
        "state": "KY",
        "city": "Ashland",
        "lat": 38.4592,
        "lng": -82.6448
    },
    {
        "state": "UT",
        "city": "Payson",
        "lat": 40.0355,
        "lng": -111.739
    },
    {
        "state": "MN",
        "city": "Lino Lakes",
        "lat": 45.1679,
        "lng": -93.083
    },
    {
        "state": "TX",
        "city": "Celina",
        "lat": 33.3154,
        "lng": -96.7941
    },
    {
        "state": "FL",
        "city": "Holiday",
        "lat": 28.1864,
        "lng": -82.7429
    },
    {
        "state": "LA",
        "city": "Harvey",
        "lat": 29.8876,
        "lng": -90.0666
    },
    {
        "state": "TX",
        "city": "Dickinson",
        "lat": 29.4548,
        "lng": -95.0589
    },
    {
        "state": "NJ",
        "city": "Secaucus",
        "lat": 40.781,
        "lng": -74.0659
    },
    {
        "state": "MO",
        "city": "Ozark",
        "lat": 37.0365,
        "lng": -93.2158
    },
    {
        "state": "NY",
        "city": "East Patchogue",
        "lat": 40.7704,
        "lng": -72.9817
    },
    {
        "state": "AZ",
        "city": "Rio Rico",
        "lat": 31.4957,
        "lng": -110.9885
    },
    {
        "state": "CO",
        "city": "Four Square Mile",
        "lat": 39.6808,
        "lng": -104.888
    },
    {
        "state": "OR",
        "city": "Ashland",
        "lat": 42.1905,
        "lng": -122.6992
    },
    {
        "state": "IL",
        "city": "Geneva",
        "lat": 41.8833,
        "lng": -88.3242
    },
    {
        "state": "WI",
        "city": "Pleasant Prairie",
        "lat": 42.5266,
        "lng": -87.8895
    },
    {
        "state": "IN",
        "city": "Seymour",
        "lat": 38.9476,
        "lng": -85.8911
    },
    {
        "state": "WA",
        "city": "Mukilteo",
        "lat": 47.9096,
        "lng": -122.3035
    },
    {
        "state": "WA",
        "city": "Mountlake Terrace",
        "lat": 47.7921,
        "lng": -122.3077
    },
    {
        "state": "CA",
        "city": "South Lake Tahoe",
        "lat": 38.9393,
        "lng": -119.9828
    },
    {
        "state": "NJ",
        "city": "Lindenwold",
        "lat": 39.8173,
        "lng": -74.9898
    },
    {
        "state": "MS",
        "city": "Vicksburg",
        "lat": 32.3173,
        "lng": -90.8868
    },
    {
        "state": "CA",
        "city": "Winter Gardens",
        "lat": 32.8376,
        "lng": -116.9268
    },
    {
        "state": "IL",
        "city": "South Holland",
        "lat": 41.5977,
        "lng": -87.6022
    },
    {
        "state": "LA",
        "city": "Sulphur",
        "lat": 30.2286,
        "lng": -93.3566
    },
    {
        "state": "IL",
        "city": "Dolton",
        "lat": 41.6284,
        "lng": -87.5979
    },
    {
        "state": "NC",
        "city": "Clemmons",
        "lat": 36.0319,
        "lng": -80.3861
    },
    {
        "state": "GA",
        "city": "Perry",
        "lat": 32.472,
        "lng": -83.7283
    },
    {
        "state": "IL",
        "city": "Yorkville",
        "lat": 41.6563,
        "lng": -88.4507
    },
    {
        "state": "PA",
        "city": "Baldwin",
        "lat": 40.369,
        "lng": -79.9669
    },
    {
        "state": "NJ",
        "city": "Elmwood Park",
        "lat": 40.9049,
        "lng": -74.1201
    },
    {
        "state": "FL",
        "city": "West Pensacola",
        "lat": 30.4263,
        "lng": -87.2679
    },
    {
        "state": "NC",
        "city": "Carrboro",
        "lat": 35.9259,
        "lng": -79.0878
    },
    {
        "state": "GA",
        "city": "Suwanee",
        "lat": 34.0508,
        "lng": -84.0686
    },
    {
        "state": "FL",
        "city": "Lealman",
        "lat": 27.8197,
        "lng": -82.6847
    },
    {
        "state": "VA",
        "city": "Rose Hill",
        "lat": 38.7872,
        "lng": -77.1085
    },
    {
        "state": "OR",
        "city": "Milwaukie",
        "lat": 45.4445,
        "lng": -122.6219
    },
    {
        "state": "LA",
        "city": "Bayou Cane",
        "lat": 29.6243,
        "lng": -90.751
    },
    {
        "state": "AL",
        "city": "Foley",
        "lat": 30.3983,
        "lng": -87.665
    },
    {
        "state": "KS",
        "city": "Hays",
        "lat": 38.8821,
        "lng": -99.3221
    },
    {
        "state": "TN",
        "city": "Tullahoma",
        "lat": 35.3721,
        "lng": -86.2172
    },
    {
        "state": "MA",
        "city": "Gardner",
        "lat": 42.5845,
        "lng": -71.9868
    },
    {
        "state": "NY",
        "city": "North Bellmore",
        "lat": 40.6904,
        "lng": -73.539
    },
    {
        "state": "UT",
        "city": "North Ogden",
        "lat": 41.3123,
        "lng": -111.9584
    },
    {
        "state": "HI",
        "city": "Makakilo",
        "lat": 21.3591,
        "lng": -158.0813
    },
    {
        "state": "IL",
        "city": "Park Forest",
        "lat": 41.4817,
        "lng": -87.6867
    },
    {
        "state": "AL",
        "city": "Helena",
        "lat": 33.2837,
        "lng": -86.8791
    },
    {
        "state": "SC",
        "city": "Wade Hampton",
        "lat": 34.8821,
        "lng": -82.3336
    },
    {
        "state": "TX",
        "city": "Stephenville",
        "lat": 32.2147,
        "lng": -98.2205
    },
    {
        "state": "MN",
        "city": "Willmar",
        "lat": 45.1216,
        "lng": -95.0569
    },
    {
        "state": "NY",
        "city": "Merrick",
        "lat": 40.6515,
        "lng": -73.5535
    },
    {
        "state": "OH",
        "city": "Lebanon",
        "lat": 39.4254,
        "lng": -84.2133
    },
    {
        "state": "NY",
        "city": "Mineola",
        "lat": 40.747,
        "lng": -73.6394
    },
    {
        "state": "IL",
        "city": "East Moline",
        "lat": 41.5199,
        "lng": -90.3879
    },
    {
        "state": "AZ",
        "city": "Green Valley",
        "lat": 31.8393,
        "lng": -111.0009
    },
    {
        "state": "CO",
        "city": "Louisville",
        "lat": 39.971,
        "lng": -105.1441
    },
    {
        "state": "FL",
        "city": "Fort Walton Beach",
        "lat": 30.4255,
        "lng": -86.6222
    },
    {
        "state": "WA",
        "city": "Five Corners",
        "lat": 45.6883,
        "lng": -122.5738
    },
    {
        "state": "GA",
        "city": "Snellville",
        "lat": 33.8562,
        "lng": -84.0038
    },
    {
        "state": "WA",
        "city": "Battle Ground",
        "lat": 45.7766,
        "lng": -122.5413
    },
    {
        "state": "WI",
        "city": "Germantown",
        "lat": 43.2343,
        "lng": -88.1217
    },
    {
        "state": "TX",
        "city": "Murphy",
        "lat": 33.0186,
        "lng": -96.6105
    },
    {
        "state": "MD",
        "city": "Hyattsville",
        "lat": 38.9613,
        "lng": -76.9548
    },
    {
        "state": "PA",
        "city": "Carlisle",
        "lat": 40.2,
        "lng": -77.2034
    },
    {
        "state": "MO",
        "city": "Arnold",
        "lat": 38.4297,
        "lng": -90.3733
    },
    {
        "state": "MN",
        "city": "West St. Paul",
        "lat": 44.9018,
        "lng": -93.0858
    },
    {
        "state": "PA",
        "city": "Murrysville",
        "lat": 40.4456,
        "lng": -79.6554
    },
    {
        "state": "WA",
        "city": "Covington",
        "lat": 47.3667,
        "lng": -122.1045
    },
    {
        "state": "NY",
        "city": "Lockport",
        "lat": 43.1698,
        "lng": -78.6956
    },
    {
        "state": "IL",
        "city": "Grayslake",
        "lat": 42.3405,
        "lng": -88.0338
    },
    {
        "state": "WA",
        "city": "Mill Creek",
        "lat": 47.8631,
        "lng": -122.2037
    },
    {
        "state": "AR",
        "city": "Bryant",
        "lat": 34.6152,
        "lng": -92.4914
    },
    {
        "state": "SC",
        "city": "Hanahan",
        "lat": 32.9302,
        "lng": -80.0027
    },
    {
        "state": "IN",
        "city": "St. John",
        "lat": 41.4429,
        "lng": -87.4697
    },
    {
        "state": "TX",
        "city": "Ennis",
        "lat": 32.3254,
        "lng": -96.6347
    },
    {
        "state": "OH",
        "city": "Parma Heights",
        "lat": 41.3865,
        "lng": -81.7637
    },
    {
        "state": "CA",
        "city": "Lennox",
        "lat": 33.938,
        "lng": -118.3586
    },
    {
        "state": "WI",
        "city": "South Milwaukee",
        "lat": 42.912,
        "lng": -87.8627
    },
    {
        "state": "MI",
        "city": "Marquette",
        "lat": 46.544,
        "lng": -87.4082
    },
    {
        "state": "NC",
        "city": "Waxhaw",
        "lat": 34.9363,
        "lng": -80.7439
    },
    {
        "state": "CA",
        "city": "Lomita",
        "lat": 33.7933,
        "lng": -118.3175
    },
    {
        "state": "NV",
        "city": "Mesquite",
        "lat": 36.8032,
        "lng": -114.133
    },
    {
        "state": "CA",
        "city": "Rosamond",
        "lat": 34.8658,
        "lng": -118.2155
    },
    {
        "state": "IL",
        "city": "Montgomery",
        "lat": 41.7237,
        "lng": -88.3633
    },
    {
        "state": "OK",
        "city": "Bethany",
        "lat": 35.5071,
        "lng": -97.6418
    },
    {
        "state": "KS",
        "city": "Pittsburg",
        "lat": 37.4129,
        "lng": -94.6985
    },
    {
        "state": "UT",
        "city": "Hurricane",
        "lat": 37.1487,
        "lng": -113.3517
    },
    {
        "state": "MI",
        "city": "Adrian",
        "lat": 41.8994,
        "lng": -84.0447
    },
    {
        "state": "MN",
        "city": "South St. Paul",
        "lat": 44.8877,
        "lng": -93.0411
    },
    {
        "state": "NY",
        "city": "Nanuet",
        "lat": 41.0957,
        "lng": -74.0155
    },
    {
        "state": "CA",
        "city": "Mead Valley",
        "lat": 33.8333,
        "lng": -117.2852
    },
    {
        "state": "NJ",
        "city": "Pleasantville",
        "lat": 39.39,
        "lng": -74.5169
    },
    {
        "state": "IL",
        "city": "Libertyville",
        "lat": 42.287,
        "lng": -87.967
    },
    {
        "state": "MN",
        "city": "Forest Lake",
        "lat": 45.2536,
        "lng": -92.9582
    },
    {
        "state": "WA",
        "city": "Bothell West",
        "lat": 47.8056,
        "lng": -122.2401
    },
    {
        "state": "OK",
        "city": "Mustang",
        "lat": 35.3917,
        "lng": -97.7246
    },
    {
        "state": "MN",
        "city": "Northfield",
        "lat": 44.455,
        "lng": -93.1698
    },
    {
        "state": "NV",
        "city": "Elko",
        "lat": 40.8381,
        "lng": -115.7678
    },
    {
        "state": "CA",
        "city": "Stevenson Ranch",
        "lat": 34.3894,
        "lng": -118.5883
    },
    {
        "state": "CO",
        "city": "Golden",
        "lat": 39.7406,
        "lng": -105.2118
    },
    {
        "state": "MN",
        "city": "Otsego",
        "lat": 45.266,
        "lng": -93.6201
    },
    {
        "state": "ME",
        "city": "Saco",
        "lat": 43.539,
        "lng": -70.4624
    },
    {
        "state": "OH",
        "city": "Piqua",
        "lat": 40.1506,
        "lng": -84.2441
    },
    {
        "state": "CA",
        "city": "Imperial",
        "lat": 32.839,
        "lng": -115.572
    },
    {
        "state": "NY",
        "city": "Hauppauge",
        "lat": 40.8211,
        "lng": -73.2109
    },
    {
        "state": "MI",
        "city": "Monroe",
        "lat": 41.9155,
        "lng": -83.3849
    },
    {
        "state": "CO",
        "city": "Montrose",
        "lat": 38.4689,
        "lng": -107.859
    },
    {
        "state": "NY",
        "city": "West Hempstead",
        "lat": 40.6959,
        "lng": -73.6507
    },
    {
        "state": "IA",
        "city": "North Liberty",
        "lat": 41.7438,
        "lng": -91.6112
    },
    {
        "state": "MO",
        "city": "Old Jamestown",
        "lat": 38.8394,
        "lng": -90.2847
    },
    {
        "state": "OH",
        "city": "Painesville",
        "lat": 41.724,
        "lng": -81.2536
    },
    {
        "state": "CA",
        "city": "La Canada Flintridge",
        "lat": 34.2097,
        "lng": -118.2002
    },
    {
        "state": "OH",
        "city": "Sidney",
        "lat": 40.2891,
        "lng": -84.1667
    },
    {
        "state": "OR",
        "city": "Altamont",
        "lat": 42.198,
        "lng": -121.7248
    },
    {
        "state": "ME",
        "city": "Westbrook",
        "lat": 43.6954,
        "lng": -70.3539
    },
    {
        "state": "NY",
        "city": "North Amityville",
        "lat": 40.7005,
        "lng": -73.4119
    },
    {
        "state": "WA",
        "city": "Salmon Creek",
        "lat": 45.7099,
        "lng": -122.6632
    },
    {
        "state": "NY",
        "city": "Lynbrook",
        "lat": 40.6579,
        "lng": -73.6742
    },
    {
        "state": "NY",
        "city": "East Northport",
        "lat": 40.8791,
        "lng": -73.3233
    },
    {
        "state": "OR",
        "city": "Sherwood",
        "lat": 45.3594,
        "lng": -122.8427
    },
    {
        "state": "FL",
        "city": "Marion Oaks",
        "lat": 29.0011,
        "lng": -82.1953
    },
    {
        "state": "CA",
        "city": "Oroville",
        "lat": 39.4999,
        "lng": -121.5634
    },
    {
        "state": "WA",
        "city": "Arlington",
        "lat": 48.1701,
        "lng": -122.1442
    },
    {
        "state": "CA",
        "city": "East Hemet",
        "lat": 33.7301,
        "lng": -116.941
    },
    {
        "state": "IL",
        "city": "Frankfort",
        "lat": 41.4892,
        "lng": -87.8363
    },
    {
        "state": "VT",
        "city": "South Burlington",
        "lat": 44.4622,
        "lng": -73.2202
    },
    {
        "state": "NJ",
        "city": "Palisades Park",
        "lat": 40.8472,
        "lng": -73.9966
    },
    {
        "state": "MI",
        "city": "Ypsilanti",
        "lat": 42.244,
        "lng": -83.6208
    },
    {
        "state": "CA",
        "city": "Shafter",
        "lat": 35.4794,
        "lng": -119.2013
    },
    {
        "state": "FL",
        "city": "Midway",
        "lat": 30.4169,
        "lng": -87.0229
    },
    {
        "state": "MD",
        "city": "Arbutus",
        "lat": 39.2428,
        "lng": -76.6922
    },
    {
        "state": "TX",
        "city": "Portland",
        "lat": 27.8942,
        "lng": -97.3278
    },
    {
        "state": "OH",
        "city": "Mayfield Heights",
        "lat": 41.5174,
        "lng": -81.4534
    },
    {
        "state": "NJ",
        "city": "Morristown",
        "lat": 40.7967,
        "lng": -74.4772
    },
    {
        "state": "TX",
        "city": "Plainview",
        "lat": 34.1911,
        "lng": -101.7235
    },
    {
        "state": "VA",
        "city": "Culpeper",
        "lat": 38.4704,
        "lng": -78.0001
    },
    {
        "state": "MD",
        "city": "Westminster",
        "lat": 39.5796,
        "lng": -77.0067
    },
    {
        "state": "VA",
        "city": "Buckhall",
        "lat": 38.7239,
        "lng": -77.4476
    },
    {
        "state": "CA",
        "city": "La Crescenta-Montrose",
        "lat": 34.2322,
        "lng": -118.2353
    },
    {
        "state": "CA",
        "city": "Agoura Hills",
        "lat": 34.151,
        "lng": -118.7609
    },
    {
        "state": "MD",
        "city": "Rosedale",
        "lat": 39.3266,
        "lng": -76.5084
    },
    {
        "state": "CA",
        "city": "Casa de Oro-Mount Helix",
        "lat": 32.764,
        "lng": -116.9688
    },
    {
        "state": "VA",
        "city": "Meadowbrook",
        "lat": 37.4301,
        "lng": -77.474
    },
    {
        "state": "OH",
        "city": "Whitehall",
        "lat": 39.9682,
        "lng": -82.8833
    },
    {
        "state": "IL",
        "city": "Harvey",
        "lat": 41.6076,
        "lng": -87.652
    },
    {
        "state": "CA",
        "city": "Albany",
        "lat": 37.8897,
        "lng": -122.3018
    },
    {
        "state": "MO",
        "city": "Rolla",
        "lat": 37.9459,
        "lng": -91.7607
    },
    {
        "state": "WI",
        "city": "Howard",
        "lat": 44.5703,
        "lng": -88.0928
    },
    {
        "state": "IA",
        "city": "Altoona",
        "lat": 41.6483,
        "lng": -93.4783
    },
    {
        "state": "WA",
        "city": "Port Angeles",
        "lat": 48.1141,
        "lng": -123.4565
    },
    {
        "state": "OH",
        "city": "Forest Park",
        "lat": 39.2861,
        "lng": -84.5258
    },
    {
        "state": "OK",
        "city": "Sand Springs",
        "lat": 36.1353,
        "lng": -96.1283
    },
    {
        "state": "VA",
        "city": "Merrifield",
        "lat": 38.8731,
        "lng": -77.2426
    },
    {
        "state": "MO",
        "city": "Affton",
        "lat": 38.5499,
        "lng": -90.3264
    },
    {
        "state": "NY",
        "city": "Plattsburgh",
        "lat": 44.6951,
        "lng": -73.4563
    },
    {
        "state": "OH",
        "city": "Oregon",
        "lat": 41.6524,
        "lng": -83.4321
    },
    {
        "state": "FL",
        "city": "Hunters Creek",
        "lat": 28.361,
        "lng": -81.4358
    },
    {
        "state": "IL",
        "city": "Mokena",
        "lat": 41.5327,
        "lng": -87.8781
    },
    {
        "state": "IL",
        "city": "Crest Hill",
        "lat": 41.5723,
        "lng": -88.1124
    },
    {
        "state": "OH",
        "city": "Miamisburg",
        "lat": 39.6322,
        "lng": -84.2724
    },
    {
        "state": "IL",
        "city": "Homewood",
        "lat": 41.5591,
        "lng": -87.661
    },
    {
        "state": "OH",
        "city": "Broadview Heights",
        "lat": 41.3196,
        "lng": -81.6779
    },
    {
        "state": "VA",
        "city": "Lincolnia",
        "lat": 38.8158,
        "lng": -77.1543
    },
    {
        "state": "TX",
        "city": "Alamo",
        "lat": 26.181,
        "lng": -98.1177
    },
    {
        "state": "TX",
        "city": "Universal City",
        "lat": 29.5521,
        "lng": -98.3074
    },
    {
        "state": "FL",
        "city": "Palm Valley",
        "lat": 30.2011,
        "lng": -81.3948
    },
    {
        "state": "NY",
        "city": "Lackawanna",
        "lat": 42.8182,
        "lng": -78.8325
    },
    {
        "state": "AZ",
        "city": "Nogales",
        "lat": 31.3624,
        "lng": -110.9336
    },
    {
        "state": "IL",
        "city": "Lake Zurich",
        "lat": 42.1956,
        "lng": -88.087
    },
    {
        "state": "IL",
        "city": "Evergreen Park",
        "lat": 41.7213,
        "lng": -87.7013
    },
    {
        "state": "OK",
        "city": "Claremore",
        "lat": 36.3146,
        "lng": -95.6095
    },
    {
        "state": "MD",
        "city": "Beltsville",
        "lat": 39.0394,
        "lng": -76.9211
    },
    {
        "state": "NC",
        "city": "Kinston",
        "lat": 35.2747,
        "lng": -77.5939
    },
    {
        "state": "CA",
        "city": "South El Monte",
        "lat": 34.0493,
        "lng": -118.0484
    },
    {
        "state": "IN",
        "city": "Shelbyville",
        "lat": 39.5352,
        "lng": -85.7793
    },
    {
        "state": "WA",
        "city": "Monroe",
        "lat": 47.8595,
        "lng": -121.9851
    },
    {
        "state": "GA",
        "city": "Forest Park",
        "lat": 33.6209,
        "lng": -84.359
    },
    {
        "state": "CA",
        "city": "Arvin",
        "lat": 35.1944,
        "lng": -118.8306
    },
    {
        "state": "FL",
        "city": "Punta Gorda",
        "lat": 26.8941,
        "lng": -82.0513
    },
    {
        "state": "UT",
        "city": "Brigham City",
        "lat": 41.5035,
        "lng": -112.0453
    },
    {
        "state": "NY",
        "city": "Holtsville",
        "lat": 40.8124,
        "lng": -73.0447
    },
    {
        "state": "NC",
        "city": "Lexington",
        "lat": 35.8018,
        "lng": -80.2682
    },
    {
        "state": "KY",
        "city": "Erlanger",
        "lat": 39.0109,
        "lng": -84.5864
    },
    {
        "state": "CA",
        "city": "Hermosa Beach",
        "lat": 33.8653,
        "lng": -118.3962
    },
    {
        "state": "NY",
        "city": "East Massapequa",
        "lat": 40.6742,
        "lng": -73.4359
    },
    {
        "state": "PA",
        "city": "West Mifflin",
        "lat": 40.3581,
        "lng": -79.9073
    },
    {
        "state": "CA",
        "city": "Orinda",
        "lat": 37.8808,
        "lng": -122.179
    },
    {
        "state": "NJ",
        "city": "Hawthorne",
        "lat": 40.9579,
        "lng": -74.1582
    },
    {
        "state": "TX",
        "city": "Angleton",
        "lat": 29.1721,
        "lng": -95.4293
    },
    {
        "state": "CO",
        "city": "Clifton",
        "lat": 39.0764,
        "lng": -108.4605
    },
    {
        "state": "IL",
        "city": "Lake Forest",
        "lat": 42.238,
        "lng": -87.8596
    },
    {
        "state": "KY",
        "city": "Madisonville",
        "lat": 37.3409,
        "lng": -87.5034
    },
    {
        "state": "FL",
        "city": "Bartow",
        "lat": 27.8868,
        "lng": -81.8214
    },
    {
        "state": "FL",
        "city": "Lynn Haven",
        "lat": 30.2337,
        "lng": -85.637
    },
    {
        "state": "LA",
        "city": "Zachary",
        "lat": 30.6643,
        "lng": -91.1634
    },
    {
        "state": "FL",
        "city": "Sweetwater",
        "lat": 25.7785,
        "lng": -80.376
    },
    {
        "state": "MN",
        "city": "Sartell",
        "lat": 45.6188,
        "lng": -94.2206
    },
    {
        "state": "FL",
        "city": "Englewood",
        "lat": 26.9717,
        "lng": -82.3524
    },
    {
        "state": "CA",
        "city": "Prunedale",
        "lat": 36.8064,
        "lng": -121.6555
    },
    {
        "state": "MD",
        "city": "Seabrook",
        "lat": 38.9802,
        "lng": -76.8502
    },
    {
        "state": "NC",
        "city": "Boone",
        "lat": 36.2111,
        "lng": -81.6669
    },
    {
        "state": "AL",
        "city": "Prichard",
        "lat": 30.7735,
        "lng": -88.1301
    },
    {
        "state": "IL",
        "city": "Brookfield",
        "lat": 41.8245,
        "lng": -87.847
    },
    {
        "state": "MO",
        "city": "Warrensburg",
        "lat": 38.7627,
        "lng": -93.726
    },
    {
        "state": "MN",
        "city": "Stillwater",
        "lat": 45.0573,
        "lng": -92.8313
    },
    {
        "state": "FL",
        "city": "Naples",
        "lat": 26.1504,
        "lng": -81.7936
    },
    {
        "state": "OH",
        "city": "Twinsburg",
        "lat": 41.322,
        "lng": -81.4451
    },
    {
        "state": "VA",
        "city": "Sudley",
        "lat": 38.7878,
        "lng": -77.4961
    },
    {
        "state": "FL",
        "city": "Seminole",
        "lat": 27.8435,
        "lng": -82.784
    },
    {
        "state": "MI",
        "city": "Cutlerville",
        "lat": 42.8403,
        "lng": -85.6734
    },
    {
        "state": "OH",
        "city": "Ashland",
        "lat": 40.8668,
        "lng": -82.3156
    },
    {
        "state": "UT",
        "city": "Highland",
        "lat": 40.4276,
        "lng": -111.7957
    },
    {
        "state": "OR",
        "city": "Hermiston",
        "lat": 45.8326,
        "lng": -119.2854
    },
    {
        "state": "FL",
        "city": "Maitland",
        "lat": 28.6295,
        "lng": -81.3718
    },
    {
        "state": "MI",
        "city": "Ferndale",
        "lat": 42.4592,
        "lng": -83.1313
    },
    {
        "state": "CO",
        "city": "Sherrelwood",
        "lat": 39.839,
        "lng": -105.0014
    },
    {
        "state": "CA",
        "city": "Valle Vista",
        "lat": 33.7436,
        "lng": -116.8871
    },
    {
        "state": "FL",
        "city": "Groveland",
        "lat": 28.6098,
        "lng": -81.8246
    },
    {
        "state": "NY",
        "city": "Roosevelt",
        "lat": 40.6797,
        "lng": -73.5837
    },
    {
        "state": "TX",
        "city": "Orange",
        "lat": 30.1226,
        "lng": -93.7607
    },
    {
        "state": "OH",
        "city": "Springboro",
        "lat": 39.5615,
        "lng": -84.2348
    },
    {
        "state": "NJ",
        "city": "Harrison",
        "lat": 40.7431,
        "lng": -74.1531
    },
    {
        "state": "AR",
        "city": "Maumelle",
        "lat": 34.8522,
        "lng": -92.4
    },
    {
        "state": "AK",
        "city": "Badger",
        "lat": 64.8006,
        "lng": -147.3877
    },
    {
        "state": "NJ",
        "city": "Tinton Falls",
        "lat": 40.2708,
        "lng": -74.0949
    },
    {
        "state": "CA",
        "city": "Rosedale",
        "lat": 35.3886,
        "lng": -119.2058
    },
    {
        "state": "IL",
        "city": "Deerfield",
        "lat": 42.1654,
        "lng": -87.8516
    },
    {
        "state": "OR",
        "city": "Cedar Mill",
        "lat": 45.5355,
        "lng": -122.8006
    },
    {
        "state": "CO",
        "city": "Durango",
        "lat": 37.2659,
        "lng": -107.8781
    },
    {
        "state": "NC",
        "city": "Knightdale",
        "lat": 35.7911,
        "lng": -78.4966
    },
    {
        "state": "OR",
        "city": "Central Point",
        "lat": 42.3764,
        "lng": -122.9111
    },
    {
        "state": "VA",
        "city": "Midlothian",
        "lat": 37.4856,
        "lng": -77.6522
    },
    {
        "state": "OH",
        "city": "White Oak",
        "lat": 39.2106,
        "lng": -84.606
    },
    {
        "state": "NC",
        "city": "Lumberton",
        "lat": 34.6312,
        "lng": -79.0186
    },
    {
        "state": "KS",
        "city": "Liberal",
        "lat": 37.0466,
        "lng": -100.9295
    },
    {
        "state": "MI",
        "city": "Haslett",
        "lat": 42.7525,
        "lng": -84.402
    },
    {
        "state": "FL",
        "city": "Tavares",
        "lat": 28.792,
        "lng": -81.7352
    },
    {
        "state": "KY",
        "city": "Winchester",
        "lat": 38.0018,
        "lng": -84.1908
    },
    {
        "state": "FL",
        "city": "Cocoa",
        "lat": 28.382,
        "lng": -80.7675
    },
    {
        "state": "CA",
        "city": "Dixon",
        "lat": 38.4469,
        "lng": -121.825
    },
    {
        "state": "OH",
        "city": "Sylvania",
        "lat": 41.71,
        "lng": -83.7092
    },
    {
        "state": "MD",
        "city": "Cumberland",
        "lat": 39.6515,
        "lng": -78.7584
    },
    {
        "state": "CO",
        "city": "Cimarron Hills",
        "lat": 38.8597,
        "lng": -104.6995
    },
    {
        "state": "NJ",
        "city": "Point Pleasant",
        "lat": 40.0772,
        "lng": -74.0702
    },
    {
        "state": "OH",
        "city": "Norwood",
        "lat": 39.1605,
        "lng": -84.4535
    },
    {
        "state": "NY",
        "city": "North Valley Stream",
        "lat": 40.684,
        "lng": -73.7077
    },
    {
        "state": "PA",
        "city": "West Chester",
        "lat": 39.9601,
        "lng": -75.6058
    },
    {
        "state": "GA",
        "city": "Fayetteville",
        "lat": 33.4501,
        "lng": -84.471
    },
    {
        "state": "TX",
        "city": "Fate",
        "lat": 32.943,
        "lng": -96.3858
    },
    {
        "state": "MS",
        "city": "Gautier",
        "lat": 30.4106,
        "lng": -88.6568
    },
    {
        "state": "WA",
        "city": "Ellensburg",
        "lat": 46.9999,
        "lng": -120.5475
    },
    {
        "state": "CA",
        "city": "Greenfield",
        "lat": 36.3242,
        "lng": -121.2428
    },
    {
        "state": "WV",
        "city": "Weirton",
        "lat": 40.406,
        "lng": -80.5671
    },
    {
        "state": "CT",
        "city": "Ansonia",
        "lat": 41.3443,
        "lng": -73.0689
    },
    {
        "state": "WI",
        "city": "Fox Crossing",
        "lat": 44.2228,
        "lng": -88.4763
    },
    {
        "state": "CA",
        "city": "Pinole",
        "lat": 37.9931,
        "lng": -122.2833
    },
    {
        "state": "ME",
        "city": "Augusta",
        "lat": 44.3341,
        "lng": -69.7319
    },
    {
        "state": "NC",
        "city": "Harrisburg",
        "lat": 35.3125,
        "lng": -80.6485
    },
    {
        "state": "VA",
        "city": "Franklin Farm",
        "lat": 38.9133,
        "lng": -77.3969
    },
    {
        "state": "IL",
        "city": "Matteson",
        "lat": 41.5095,
        "lng": -87.7468
    },
    {
        "state": "FL",
        "city": "San Carlos Park",
        "lat": 26.4765,
        "lng": -81.8193
    },
    {
        "state": "MD",
        "city": "Lake Shore",
        "lat": 39.103,
        "lng": -76.4876
    },
    {
        "state": "CA",
        "city": "Coronado",
        "lat": 32.6649,
        "lng": -117.1604
    },
    {
        "state": "IL",
        "city": "Alsip",
        "lat": 41.6701,
        "lng": -87.7368
    },
    {
        "state": "TX",
        "city": "Cinco Ranch",
        "lat": 29.7395,
        "lng": -95.7607
    },
    {
        "state": "SC",
        "city": "North Myrtle Beach",
        "lat": 33.8232,
        "lng": -78.7082
    },
    {
        "state": "CA",
        "city": "Santa Fe Springs",
        "lat": 33.9329,
        "lng": -118.0625
    },
    {
        "state": "NY",
        "city": "Ronkonkoma",
        "lat": 40.8037,
        "lng": -73.1246
    },
    {
        "state": "WI",
        "city": "Onalaska",
        "lat": 43.8883,
        "lng": -91.2075
    },
    {
        "state": "TX",
        "city": "Lakeway",
        "lat": 30.3544,
        "lng": -97.9864
    },
    {
        "state": "FL",
        "city": "Bradfordville",
        "lat": 30.5735,
        "lng": -84.2055
    },
    {
        "state": "MO",
        "city": "Republic",
        "lat": 37.1452,
        "lng": -93.4446
    },
    {
        "state": "TX",
        "city": "Brownwood",
        "lat": 31.7127,
        "lng": -98.9767
    },
    {
        "state": "WY",
        "city": "Sheridan",
        "lat": 44.7961,
        "lng": -106.9642
    },
    {
        "state": "NY",
        "city": "Syosset",
        "lat": 40.8157,
        "lng": -73.502
    },
    {
        "state": "IL",
        "city": "East St. Louis",
        "lat": 38.6155,
        "lng": -90.1304
    },
    {
        "state": "WI",
        "city": "Marshfield",
        "lat": 44.6627,
        "lng": -90.1728
    },
    {
        "state": "WI",
        "city": "Wisconsin Rapids",
        "lat": 44.3927,
        "lng": -89.8265
    },
    {
        "state": "TN",
        "city": "Springfield",
        "lat": 36.4949,
        "lng": -86.8711
    },
    {
        "state": "CA",
        "city": "Chowchilla",
        "lat": 37.1095,
        "lng": -120.2349
    },
    {
        "state": "OK",
        "city": "Durant",
        "lat": 33.9949,
        "lng": -96.3923
    },
    {
        "state": "NJ",
        "city": "Rutherford",
        "lat": 40.8203,
        "lng": -74.1057
    },
    {
        "state": "MN",
        "city": "Hopkins",
        "lat": 44.9259,
        "lng": -93.4056
    },
    {
        "state": "FL",
        "city": "Bayshore Gardens",
        "lat": 27.4345,
        "lng": -82.5793
    },
    {
        "state": "GA",
        "city": "Thomasville",
        "lat": 30.8394,
        "lng": -83.9782
    },
    {
        "state": "TX",
        "city": "Palestine",
        "lat": 31.7544,
        "lng": -95.6471
    },
    {
        "state": "CT",
        "city": "Wallingford Center",
        "lat": 41.4499,
        "lng": -72.8189
    },
    {
        "state": "PA",
        "city": "Lansdale",
        "lat": 40.2417,
        "lng": -75.2812
    },
    {
        "state": "PA",
        "city": "Phoenixville",
        "lat": 40.1359,
        "lng": -75.5201
    },
    {
        "state": "FL",
        "city": "Country Walk",
        "lat": 25.633,
        "lng": -80.4353
    },
    {
        "state": "CA",
        "city": "South San Jose Hills",
        "lat": 34.0123,
        "lng": -117.9043
    },
    {
        "state": "OK",
        "city": "Altus",
        "lat": 34.6565,
        "lng": -99.3061
    },
    {
        "state": "IL",
        "city": "Ottawa",
        "lat": 41.3555,
        "lng": -88.8261
    },
    {
        "state": "MO",
        "city": "Creve Coeur",
        "lat": 38.662,
        "lng": -90.443
    },
    {
        "state": "WV",
        "city": "Martinsburg",
        "lat": 39.4582,
        "lng": -77.9776
    },
    {
        "state": "IL",
        "city": "Round Lake",
        "lat": 42.3435,
        "lng": -88.1059
    },
    {
        "state": "IL",
        "city": "Bensenville",
        "lat": 41.9579,
        "lng": -87.9442
    },
    {
        "state": "FL",
        "city": "Trinity",
        "lat": 28.1809,
        "lng": -82.6582
    },
    {
        "state": "TX",
        "city": "Seagoville",
        "lat": 32.653,
        "lng": -96.5456
    },
    {
        "state": "AR",
        "city": "Centerton",
        "lat": 36.3566,
        "lng": -94.2971
    },
    {
        "state": "MN",
        "city": "St. Michael",
        "lat": 45.2014,
        "lng": -93.692
    },
    {
        "state": "CA",
        "city": "Castaic",
        "lat": 34.4818,
        "lng": -118.6316
    },
    {
        "state": "AK",
        "city": "Knik-Fairview",
        "lat": 61.5082,
        "lng": -149.6252
    },
    {
        "state": "WA",
        "city": "Fairwood",
        "lat": 47.4467,
        "lng": -122.143
    },
    {
        "state": "IL",
        "city": "Bellwood",
        "lat": 41.8829,
        "lng": -87.8762
    },
    {
        "state": "MO",
        "city": "Concord",
        "lat": 38.5117,
        "lng": -90.3574
    },
    {
        "state": "SC",
        "city": "Five Forks",
        "lat": 34.8069,
        "lng": -82.2271
    },
    {
        "state": "NJ",
        "city": "Preakness",
        "lat": 40.9382,
        "lng": -74.2242
    },
    {
        "state": "OR",
        "city": "Lebanon",
        "lat": 44.5317,
        "lng": -122.9071
    },
    {
        "state": "TX",
        "city": "Anna",
        "lat": 33.3472,
        "lng": -96.5508
    },
    {
        "state": "NJ",
        "city": "Colonia",
        "lat": 40.5926,
        "lng": -74.3148
    },
    {
        "state": "IA",
        "city": "Clive",
        "lat": 41.6147,
        "lng": -93.798
    },
    {
        "state": "NC",
        "city": "Elizabeth City",
        "lat": 36.2942,
        "lng": -76.236
    },
    {
        "state": "TX",
        "city": "Nederland",
        "lat": 29.9707,
        "lng": -94.0015
    },
    {
        "state": "GA",
        "city": "Kingsland",
        "lat": 30.8194,
        "lng": -81.7216
    },
    {
        "state": "LA",
        "city": "Shenandoah",
        "lat": 30.4019,
        "lng": -91.002
    },
    {
        "state": "OH",
        "city": "Berea",
        "lat": 41.3696,
        "lng": -81.8641
    },
    {
        "state": "MO",
        "city": "Ferguson",
        "lat": 38.749,
        "lng": -90.295
    },
    {
        "state": "CA",
        "city": "Arcata",
        "lat": 40.8615,
        "lng": -124.0758
    },
    {
        "state": "KS",
        "city": "Newton",
        "lat": 38.0368,
        "lng": -97.3449
    },
    {
        "state": "MD",
        "city": "Parole",
        "lat": 38.9863,
        "lng": -76.5518
    },
    {
        "state": "NY",
        "city": "Melville",
        "lat": 40.7824,
        "lng": -73.4088
    },
    {
        "state": "MD",
        "city": "Oxon Hill",
        "lat": 38.7884,
        "lng": -76.9727
    },
    {
        "state": "NJ",
        "city": "Iselin",
        "lat": 40.5697,
        "lng": -74.3172
    },
    {
        "state": "OH",
        "city": "Brook Park",
        "lat": 41.4036,
        "lng": -81.8219
    },
    {
        "state": "GA",
        "city": "St. Marys",
        "lat": 30.7567,
        "lng": -81.5722
    },
    {
        "state": "TX",
        "city": "Alton",
        "lat": 26.2884,
        "lng": -98.3098
    },
    {
        "state": "VA",
        "city": "Laurel",
        "lat": 37.6375,
        "lng": -77.5062
    },
    {
        "state": "TX",
        "city": "Boerne",
        "lat": 29.7847,
        "lng": -98.7292
    },
    {
        "state": "TX",
        "city": "La Marque",
        "lat": 29.3683,
        "lng": -94.9941
    },
    {
        "state": "TX",
        "city": "Princeton",
        "lat": 33.1778,
        "lng": -96.5044
    },
    {
        "state": "CA",
        "city": "Arroyo Grande",
        "lat": 35.1241,
        "lng": -120.5845
    },
    {
        "state": "MN",
        "city": "Albert Lea",
        "lat": 43.6548,
        "lng": -93.3643
    },
    {
        "state": "AL",
        "city": "Cullman",
        "lat": 34.1775,
        "lng": -86.8407
    },
    {
        "state": "PA",
        "city": "Johnstown",
        "lat": 40.326,
        "lng": -78.9194
    },
    {
        "state": "NJ",
        "city": "Dover",
        "lat": 40.8859,
        "lng": -74.5597
    },
    {
        "state": "AZ",
        "city": "New River",
        "lat": 33.8835,
        "lng": -112.0858
    },
    {
        "state": "MI",
        "city": "Trenton",
        "lat": 42.1394,
        "lng": -83.1929
    },
    {
        "state": "MS",
        "city": "Ocean Springs",
        "lat": 30.4082,
        "lng": -88.7861
    },
    {
        "state": "GA",
        "city": "Winder",
        "lat": 33.9917,
        "lng": -83.7218
    },
    {
        "state": "OH",
        "city": "Tallmadge",
        "lat": 41.1023,
        "lng": -81.4216
    },
    {
        "state": "WV",
        "city": "Fairmont",
        "lat": 39.4768,
        "lng": -80.1491
    },
    {
        "state": "NY",
        "city": "North Babylon",
        "lat": 40.7314,
        "lng": -73.3248
    },
    {
        "state": "TX",
        "city": "Crowley",
        "lat": 32.5781,
        "lng": -97.3585
    },
    {
        "state": "NY",
        "city": "North Bay Shore",
        "lat": 40.7602,
        "lng": -73.2617
    },
    {
        "state": "IL",
        "city": "Franklin Park",
        "lat": 41.9361,
        "lng": -87.8794
    },
    {
        "state": "MA",
        "city": "Newburyport",
        "lat": 42.8124,
        "lng": -70.8878
    },
    {
        "state": "MD",
        "city": "Redland",
        "lat": 39.1339,
        "lng": -77.1464
    },
    {
        "state": "MD",
        "city": "Maryland City",
        "lat": 39.1016,
        "lng": -76.8051
    },
    {
        "state": "NY",
        "city": "Lake Ronkonkoma",
        "lat": 40.8297,
        "lng": -73.1128
    },
    {
        "state": "UT",
        "city": "West Haven",
        "lat": 41.2083,
        "lng": -112.0541
    },
    {
        "state": "MD",
        "city": "Calverton",
        "lat": 39.0578,
        "lng": -76.9488
    },
    {
        "state": "NC",
        "city": "Lenoir",
        "lat": 35.9094,
        "lng": -81.5249
    },
    {
        "state": "FL",
        "city": "Panama City Beach",
        "lat": 30.237,
        "lng": -85.8776
    },
    {
        "state": "FL",
        "city": "Pinecrest",
        "lat": 25.665,
        "lng": -80.3042
    },
    {
        "state": "IL",
        "city": "Palos Hills",
        "lat": 41.6986,
        "lng": -87.8266
    },
    {
        "state": "CA",
        "city": "Phelan",
        "lat": 34.4398,
        "lng": -117.5248
    },
    {
        "state": "KY",
        "city": "Burlington",
        "lat": 39.0223,
        "lng": -84.7217
    },
    {
        "state": "NY",
        "city": "Amsterdam",
        "lat": 42.942,
        "lng": -74.1906
    },
    {
        "state": "MO",
        "city": "Manchester",
        "lat": 38.583,
        "lng": -90.5064
    },
    {
        "state": "WA",
        "city": "Centralia",
        "lat": 46.7223,
        "lng": -122.9696
    },
    {
        "state": "NJ",
        "city": "Ocean Acres",
        "lat": 39.743,
        "lng": -74.2805
    },
    {
        "state": "VA",
        "city": "Kingstowne",
        "lat": 38.7625,
        "lng": -77.1444
    },
    {
        "state": "NY",
        "city": "North Massapequa",
        "lat": 40.7031,
        "lng": -73.4678
    },
    {
        "state": "WI",
        "city": "Oconomowoc",
        "lat": 43.0996,
        "lng": -88.4948
    },
    {
        "state": "OH",
        "city": "Steubenville",
        "lat": 40.3653,
        "lng": -80.6519
    },
    {
        "state": "IL",
        "city": "Sycamore",
        "lat": 41.9957,
        "lng": -88.6821
    },
    {
        "state": "IN",
        "city": "Logansport",
        "lat": 40.7472,
        "lng": -86.352
    },
    {
        "state": "VA",
        "city": "Colonial Heights",
        "lat": 37.265,
        "lng": -77.3969
    },
    {
        "state": "PR",
        "city": "Guayama",
        "lat": 17.9743,
        "lng": -66.1104
    },
    {
        "state": "HI",
        "city": "Schofield Barracks",
        "lat": 21.4936,
        "lng": -158.0617
    },
    {
        "state": "OH",
        "city": "Portsmouth",
        "lat": 38.7538,
        "lng": -82.9445
    },
    {
        "state": "OR",
        "city": "Canby",
        "lat": 45.2652,
        "lng": -122.6867
    },
    {
        "state": "IL",
        "city": "Bourbonnais",
        "lat": 41.183,
        "lng": -87.8784
    },
    {
        "state": "WI",
        "city": "Menasha",
        "lat": 44.2125,
        "lng": -88.4271
    },
    {
        "state": "OK",
        "city": "McAlester",
        "lat": 34.9257,
        "lng": -95.7734
    },
    {
        "state": "IL",
        "city": "Shorewood",
        "lat": 41.5169,
        "lng": -88.2146
    },
    {
        "state": "OH",
        "city": "Niles",
        "lat": 41.1879,
        "lng": -80.7531
    },
    {
        "state": "TX",
        "city": "White Settlement",
        "lat": 32.7554,
        "lng": -97.4605
    },
    {
        "state": "CO",
        "city": "Fort Carson",
        "lat": 38.7095,
        "lng": -104.772
    },
    {
        "state": "VA",
        "city": "Hybla Valley",
        "lat": 38.7484,
        "lng": -77.0821
    },
    {
        "state": "WI",
        "city": "Cudahy",
        "lat": 42.9467,
        "lng": -87.8641
    },
    {
        "state": "MD",
        "city": "East Riverdale",
        "lat": 38.96,
        "lng": -76.9109
    },
    {
        "state": "NY",
        "city": "Scarsdale",
        "lat": 40.9902,
        "lng": -73.7773
    },
    {
        "state": "MO",
        "city": "Spanish Lake",
        "lat": 38.7884,
        "lng": -90.2077
    },
    {
        "state": "WA",
        "city": "Bryn Mawr-Skyway",
        "lat": 47.4949,
        "lng": -122.241
    },
    {
        "state": "AL",
        "city": "Tillmans Corner",
        "lat": 30.5819,
        "lng": -88.2128
    },
    {
        "state": "NJ",
        "city": "Dumont",
        "lat": 40.9452,
        "lng": -73.9923
    },
    {
        "state": "CA",
        "city": "Nipomo",
        "lat": 35.0319,
        "lng": -120.4985
    },
    {
        "state": "OH",
        "city": "Ashtabula",
        "lat": 41.8805,
        "lng": -80.7984
    },
    {
        "state": "TX",
        "city": "Terrell",
        "lat": 32.734,
        "lng": -96.2931
    },
    {
        "state": "CA",
        "city": "Cameron Park",
        "lat": 38.6738,
        "lng": -120.9872
    },
    {
        "state": "NY",
        "city": "Wantagh",
        "lat": 40.6686,
        "lng": -73.5104
    },
    {
        "state": "KY",
        "city": "Mount Washington",
        "lat": 38.043,
        "lng": -85.5551
    },
    {
        "state": "TN",
        "city": "Sevierville",
        "lat": 35.8872,
        "lng": -83.5678
    },
    {
        "state": "NY",
        "city": "Cohoes",
        "lat": 42.7732,
        "lng": -73.7077
    },
    {
        "state": "CA",
        "city": "Blythe",
        "lat": 33.6219,
        "lng": -114.6195
    },
    {
        "state": "VA",
        "city": "Burke Centre",
        "lat": 38.7903,
        "lng": -77.2999
    },
    {
        "state": "ID",
        "city": "Ammon",
        "lat": 43.4745,
        "lng": -111.9568
    },
    {
        "state": "TX",
        "city": "Alice",
        "lat": 27.7556,
        "lng": -98.0653
    },
    {
        "state": "LA",
        "city": "Natchitoches",
        "lat": 31.7315,
        "lng": -93.0975
    },
    {
        "state": "VA",
        "city": "Franconia",
        "lat": 38.7682,
        "lng": -77.1587
    },
    {
        "state": "FL",
        "city": "Glenvar Heights",
        "lat": 25.709,
        "lng": -80.3155
    },
    {
        "state": "NC",
        "city": "Mebane",
        "lat": 36.0852,
        "lng": -79.2736
    },
    {
        "state": "OH",
        "city": "Tiffin",
        "lat": 41.1165,
        "lng": -83.1805
    },
    {
        "state": "MN",
        "city": "Anoka",
        "lat": 45.2099,
        "lng": -93.3893
    },
    {
        "state": "IL",
        "city": "Cary",
        "lat": 42.2129,
        "lng": -88.2494
    },
    {
        "state": "TX",
        "city": "Steiner Ranch",
        "lat": 30.3654,
        "lng": -97.896
    },
    {
        "state": "FL",
        "city": "Gibsonton",
        "lat": 27.826,
        "lng": -82.3761
    },
    {
        "state": "AL",
        "city": "Selma",
        "lat": 32.4166,
        "lng": -87.0336
    },
    {
        "state": "TX",
        "city": "Bay City",
        "lat": 28.9838,
        "lng": -95.9601
    },
    {
        "state": "MO",
        "city": "Farmington",
        "lat": 37.7822,
        "lng": -90.4282
    },
    {
        "state": "OH",
        "city": "Pataskala",
        "lat": 40.011,
        "lng": -82.7155
    },
    {
        "state": "FL",
        "city": "Brownsville",
        "lat": 25.8216,
        "lng": -80.2417
    },
    {
        "state": "IL",
        "city": "Charleston",
        "lat": 39.4842,
        "lng": -88.1781
    },
    {
        "state": "IL",
        "city": "Godfrey",
        "lat": 38.9577,
        "lng": -90.2156
    },
    {
        "state": "VA",
        "city": "Idylwood",
        "lat": 38.8896,
        "lng": -77.2056
    },
    {
        "state": "OH",
        "city": "North Canton",
        "lat": 40.8742,
        "lng": -81.3971
    },
    {
        "state": "FL",
        "city": "Lake Butler",
        "lat": 28.4862,
        "lng": -81.546
    },
    {
        "state": "CT",
        "city": "Willimantic",
        "lat": 41.7171,
        "lng": -72.2114
    },
    {
        "state": "AL",
        "city": "Troy",
        "lat": 31.8021,
        "lng": -85.9664
    },
    {
        "state": "IL",
        "city": "Cahokia Heights",
        "lat": 38.571,
        "lng": -90.1525
    },
    {
        "state": "IL",
        "city": "North Aurora",
        "lat": 41.8086,
        "lng": -88.3414
    },
    {
        "state": "PA",
        "city": "McKeesport",
        "lat": 40.3418,
        "lng": -79.844
    },
    {
        "state": "CA",
        "city": "Live Oak",
        "lat": 36.986,
        "lng": -121.9804
    },
    {
        "state": "NC",
        "city": "Hope Mills",
        "lat": 34.971,
        "lng": -78.9597
    },
    {
        "state": "WA",
        "city": "Anacortes",
        "lat": 48.4878,
        "lng": -122.6292
    },
    {
        "state": "TX",
        "city": "Brenham",
        "lat": 30.1584,
        "lng": -96.3966
    },
    {
        "state": "NC",
        "city": "Pinehurst",
        "lat": 35.1922,
        "lng": -79.4684
    },
    {
        "state": "NC",
        "city": "Mount Holly",
        "lat": 35.3136,
        "lng": -81.0073
    },
    {
        "state": "WA",
        "city": "Camano",
        "lat": 48.1865,
        "lng": -122.4708
    },
    {
        "state": "LA",
        "city": "Gretna",
        "lat": 29.9101,
        "lng": -90.0515
    },
    {
        "state": "FL",
        "city": "Stuart",
        "lat": 27.1959,
        "lng": -80.2444
    },
    {
        "state": "IL",
        "city": "Jacksonville",
        "lat": 39.7292,
        "lng": -90.2317
    },
    {
        "state": "AR",
        "city": "Siloam Springs",
        "lat": 36.1844,
        "lng": -94.5315
    },
    {
        "state": "NY",
        "city": "Woodmere",
        "lat": 40.6375,
        "lng": -73.7219
    },
    {
        "state": "OH",
        "city": "Eastlake",
        "lat": 41.6581,
        "lng": -81.4322
    },
    {
        "state": "AR",
        "city": "El Dorado",
        "lat": 33.2184,
        "lng": -92.664
    },
    {
        "state": "CT",
        "city": "Storrs",
        "lat": 41.8083,
        "lng": -72.2514
    },
    {
        "state": "OH",
        "city": "New Philadelphia",
        "lat": 40.486,
        "lng": -81.4401
    },
    {
        "state": "FL",
        "city": "Zephyrhills",
        "lat": 28.2409,
        "lng": -82.1797
    },
    {
        "state": "NY",
        "city": "Cortland",
        "lat": 42.6004,
        "lng": -76.1784
    },
    {
        "state": "MI",
        "city": "Wayne",
        "lat": 42.2774,
        "lng": -83.3877
    },
    {
        "state": "IL",
        "city": "Lemont",
        "lat": 41.6695,
        "lng": -87.9838
    },
    {
        "state": "SC",
        "city": "Clemson",
        "lat": 34.6837,
        "lng": -82.8124
    },
    {
        "state": "MD",
        "city": "Takoma Park",
        "lat": 38.981,
        "lng": -77.0028
    },
    {
        "state": "OR",
        "city": "Oak Grove",
        "lat": 45.4156,
        "lng": -122.6349
    },
    {
        "state": "MO",
        "city": "Kirksville",
        "lat": 40.1986,
        "lng": -92.5752
    },
    {
        "state": "GA",
        "city": "Norcross",
        "lat": 33.9379,
        "lng": -84.2065
    },
    {
        "state": "KY",
        "city": "St. Matthews",
        "lat": 38.2497,
        "lng": -85.6384
    },
    {
        "state": "TN",
        "city": "Goodlettsville",
        "lat": 36.333,
        "lng": -86.7026
    },
    {
        "state": "CA",
        "city": "Coalinga",
        "lat": 36.142,
        "lng": -120.3242
    },
    {
        "state": "UT",
        "city": "South Ogden",
        "lat": 41.1722,
        "lng": -111.9576
    },
    {
        "state": "OK",
        "city": "El Reno",
        "lat": 35.5429,
        "lng": -97.966
    },
    {
        "state": "FL",
        "city": "South Venice",
        "lat": 27.0444,
        "lng": -82.4155
    },
    {
        "state": "UT",
        "city": "Bluffdale",
        "lat": 40.4744,
        "lng": -111.9381
    },
    {
        "state": "TX",
        "city": "Gainesville",
        "lat": 33.639,
        "lng": -97.1487
    },
    {
        "state": "SC",
        "city": "West Columbia",
        "lat": 33.9932,
        "lng": -81.0936
    },
    {
        "state": "NC",
        "city": "Morganton",
        "lat": 35.7408,
        "lng": -81.7002
    },
    {
        "state": "NM",
        "city": "Los Lunas",
        "lat": 34.8115,
        "lng": -106.7803
    },
    {
        "state": "CA",
        "city": "Laguna Woods",
        "lat": 33.6099,
        "lng": -117.7299
    },
    {
        "state": "VA",
        "city": "Bon Air",
        "lat": 37.5187,
        "lng": -77.5713
    },
    {
        "state": "CA",
        "city": "Olivehurst",
        "lat": 39.0795,
        "lng": -121.5566
    },
    {
        "state": "GA",
        "city": "Conyers",
        "lat": 33.6646,
        "lng": -83.9966
    },
    {
        "state": "KY",
        "city": "Murray",
        "lat": 36.6146,
        "lng": -88.3207
    },
    {
        "state": "IN",
        "city": "New Castle",
        "lat": 39.9191,
        "lng": -85.3697
    },
    {
        "state": "HI",
        "city": "Wahiawa",
        "lat": 21.5012,
        "lng": -158.0178
    },
    {
        "state": "OH",
        "city": "Streetsboro",
        "lat": 41.2396,
        "lng": -81.3456
    },
    {
        "state": "CA",
        "city": "Woodcrest",
        "lat": 33.8789,
        "lng": -117.3687
    },
    {
        "state": "GA",
        "city": "Villa Rica",
        "lat": 33.7294,
        "lng": -84.9177
    },
    {
        "state": "MD",
        "city": "Glassmanor",
        "lat": 38.8181,
        "lng": -76.9833
    },
    {
        "state": "CO",
        "city": "Johnstown",
        "lat": 40.3499,
        "lng": -104.9482
    },
    {
        "state": "MI",
        "city": "Jenison",
        "lat": 42.9063,
        "lng": -85.8269
    },
    {
        "state": "KY",
        "city": "Fort Thomas",
        "lat": 39.0801,
        "lng": -84.4518
    },
    {
        "state": "NY",
        "city": "Bethpage",
        "lat": 40.7495,
        "lng": -73.4856
    },
    {
        "state": "IN",
        "city": "Lebanon",
        "lat": 40.0324,
        "lng": -86.4551
    },
    {
        "state": "MS",
        "city": "Hernando",
        "lat": 34.85,
        "lng": -89.9921
    },
    {
        "state": "CA",
        "city": "Rancho Mirage",
        "lat": 33.7635,
        "lng": -116.4271
    },
    {
        "state": "CA",
        "city": "Stanford",
        "lat": 37.4252,
        "lng": -122.1674
    },
    {
        "state": "MS",
        "city": "Laurel",
        "lat": 31.6956,
        "lng": -89.1449
    },
    {
        "state": "GA",
        "city": "North Druid Hills",
        "lat": 33.8185,
        "lng": -84.3254
    },
    {
        "state": "TX",
        "city": "Stafford",
        "lat": 29.6271,
        "lng": -95.5654
    },
    {
        "state": "KY",
        "city": "Shelbyville",
        "lat": 38.2067,
        "lng": -85.2292
    },
    {
        "state": "OH",
        "city": "Aurora",
        "lat": 41.3118,
        "lng": -81.345
    },
    {
        "state": "GA",
        "city": "Buford",
        "lat": 34.1192,
        "lng": -83.9903
    },
    {
        "state": "MO",
        "city": "Clayton",
        "lat": 38.6444,
        "lng": -90.3303
    },
    {
        "state": "NJ",
        "city": "Avenel",
        "lat": 40.5842,
        "lng": -74.2716
    },
    {
        "state": "KY",
        "city": "Danville",
        "lat": 37.6418,
        "lng": -84.7777
    },
    {
        "state": "AZ",
        "city": "Flowing Wells",
        "lat": 32.2937,
        "lng": -111.011
    },
    {
        "state": "GA",
        "city": "Calhoun",
        "lat": 34.491,
        "lng": -84.9386
    },
    {
        "state": "GA",
        "city": "North Decatur",
        "lat": 33.8074,
        "lng": -84.2889
    },
    {
        "state": "IL",
        "city": "Hinsdale",
        "lat": 41.8007,
        "lng": -87.9273
    },
    {
        "state": "TX",
        "city": "Bellaire",
        "lat": 29.704,
        "lng": -95.4621
    },
    {
        "state": "FL",
        "city": "Pinewood",
        "lat": 25.8697,
        "lng": -80.2174
    },
    {
        "state": "OH",
        "city": "Fairview Park",
        "lat": 41.4419,
        "lng": -81.853
    },
    {
        "state": "NC",
        "city": "Graham",
        "lat": 36.0589,
        "lng": -79.3894
    },
    {
        "state": "WV",
        "city": "Beckley",
        "lat": 37.7877,
        "lng": -81.1841
    },
    {
        "state": "VA",
        "city": "Manassas Park",
        "lat": 38.7709,
        "lng": -77.4429
    },
    {
        "state": "MD",
        "city": "Easton",
        "lat": 38.776,
        "lng": -76.0701
    },
    {
        "state": "WI",
        "city": "Kaukauna",
        "lat": 44.2773,
        "lng": -88.2641
    },
    {
        "state": "TX",
        "city": "Groves",
        "lat": 29.9457,
        "lng": -93.9164
    },
    {
        "state": "NY",
        "city": "Oswego",
        "lat": 43.4516,
        "lng": -76.5005
    },
    {
        "state": "LA",
        "city": "Estelle",
        "lat": 29.8447,
        "lng": -90.1021
    },
    {
        "state": "MO",
        "city": "Lake St. Louis",
        "lat": 38.7846,
        "lng": -90.7886
    },
    {
        "state": "FL",
        "city": "Safety Harbor",
        "lat": 28.008,
        "lng": -82.6964
    },
    {
        "state": "CA",
        "city": "El Segundo",
        "lat": 33.917,
        "lng": -118.4018
    },
    {
        "state": "FL",
        "city": "Upper Grand Lagoon",
        "lat": 30.169,
        "lng": -85.7407
    },
    {
        "state": "CO",
        "city": "Canon City",
        "lat": 38.443,
        "lng": -105.2203
    },
    {
        "state": "GA",
        "city": "Tifton",
        "lat": 31.4624,
        "lng": -83.5203
    },
    {
        "state": "NY",
        "city": "Massapequa Park",
        "lat": 40.6817,
        "lng": -73.4496
    },
    {
        "state": "OH",
        "city": "Norwalk",
        "lat": 41.2443,
        "lng": -82.6088
    },
    {
        "state": "VA",
        "city": "Bristol",
        "lat": 36.6181,
        "lng": -82.1604
    },
    {
        "state": "TX",
        "city": "Addison",
        "lat": 32.959,
        "lng": -96.8355
    },
    {
        "state": "GA",
        "city": "Milledgeville",
        "lat": 33.0874,
        "lng": -83.2414
    },
    {
        "state": "IN",
        "city": "Huntington",
        "lat": 40.881,
        "lng": -85.5063
    },
    {
        "state": "NY",
        "city": "Port Washington",
        "lat": 40.8268,
        "lng": -73.6765
    },
    {
        "state": "MI",
        "city": "Wixom",
        "lat": 42.5243,
        "lng": -83.5346
    },
    {
        "state": "OR",
        "city": "Pendleton",
        "lat": 45.6757,
        "lng": -118.8201
    },
    {
        "state": "MO",
        "city": "Hannibal",
        "lat": 39.7098,
        "lng": -91.3939
    },
    {
        "state": "VA",
        "city": "Gainesville",
        "lat": 38.7931,
        "lng": -77.6347
    },
    {
        "state": "WA",
        "city": "Aberdeen",
        "lat": 46.9757,
        "lng": -123.8094
    },
    {
        "state": "OR",
        "city": "Dallas",
        "lat": 44.9221,
        "lng": -123.313
    },
    {
        "state": "FL",
        "city": "Myrtle Grove",
        "lat": 30.4158,
        "lng": -87.3027
    },
    {
        "state": "MD",
        "city": "Adelphi",
        "lat": 39.0017,
        "lng": -76.9649
    },
    {
        "state": "UT",
        "city": "Heber",
        "lat": 40.507,
        "lng": -111.3986
    },
    {
        "state": "NY",
        "city": "Hampton Bays",
        "lat": 40.8695,
        "lng": -72.5225
    },
    {
        "state": "IL",
        "city": "Bridgeview",
        "lat": 41.7403,
        "lng": -87.8067
    },
    {
        "state": "WI",
        "city": "Ashwaubenon",
        "lat": 44.4796,
        "lng": -88.0889
    },
    {
        "state": "GA",
        "city": "Powder Springs",
        "lat": 33.8659,
        "lng": -84.684
    },
    {
        "state": "CA",
        "city": "McKinleyville",
        "lat": 40.9488,
        "lng": -124.0857
    },
    {
        "state": "NH",
        "city": "Laconia",
        "lat": 43.5725,
        "lng": -71.4775
    },
    {
        "state": "FL",
        "city": "Belle Glade",
        "lat": 26.6916,
        "lng": -80.6656
    },
    {
        "state": "PA",
        "city": "Colonial Park",
        "lat": 40.2987,
        "lng": -76.8069
    },
    {
        "state": "NY",
        "city": "Farmingville",
        "lat": 40.839,
        "lng": -73.0404
    },
    {
        "state": "NJ",
        "city": "New Milford",
        "lat": 40.9337,
        "lng": -74.0196
    },
    {
        "state": "IL",
        "city": "Marion",
        "lat": 37.7345,
        "lng": -88.942
    },
    {
        "state": "TX",
        "city": "Pampa",
        "lat": 35.5479,
        "lng": -100.9651
    },
    {
        "state": "OH",
        "city": "Mount Vernon",
        "lat": 40.3854,
        "lng": -82.4737
    },
    {
        "state": "CA",
        "city": "Moraga",
        "lat": 37.8439,
        "lng": -122.1225
    },
    {
        "state": "OH",
        "city": "Defiance",
        "lat": 41.2813,
        "lng": -84.3657
    },
    {
        "state": "CA",
        "city": "Bostonia",
        "lat": 32.8189,
        "lng": -116.948
    },
    {
        "state": "MD",
        "city": "Damascus",
        "lat": 39.2701,
        "lng": -77.1957
    },
    {
        "state": "AR",
        "city": "Hot Springs Village",
        "lat": 34.6566,
        "lng": -92.9643
    },
    {
        "state": "IL",
        "city": "Mattoon",
        "lat": 39.4774,
        "lng": -88.3623
    },
    {
        "state": "WA",
        "city": "Washougal",
        "lat": 45.5825,
        "lng": -122.3451
    },
    {
        "state": "MS",
        "city": "Long Beach",
        "lat": 30.3608,
        "lng": -89.1651
    },
    {
        "state": "CA",
        "city": "Truckee",
        "lat": 39.3455,
        "lng": -120.1848
    },
    {
        "state": "FL",
        "city": "Palmetto Estates",
        "lat": 25.6211,
        "lng": -80.3616
    },
    {
        "state": "NM",
        "city": "Sunland Park",
        "lat": 31.8201,
        "lng": -106.5958
    },
    {
        "state": "PR",
        "city": "Humacao",
        "lat": 18.152,
        "lng": -65.8204
    },
    {
        "state": "NC",
        "city": "Havelock",
        "lat": 34.9078,
        "lng": -76.8987
    },
    {
        "state": "TX",
        "city": "Donna",
        "lat": 26.1468,
        "lng": -98.0559
    },
    {
        "state": "FL",
        "city": "New Port Richey",
        "lat": 28.2468,
        "lng": -82.717
    },
    {
        "state": "UT",
        "city": "Centerville",
        "lat": 40.9284,
        "lng": -111.8848
    },
    {
        "state": "NY",
        "city": "Kings Park",
        "lat": 40.8881,
        "lng": -73.2475
    },
    {
        "state": "IN",
        "city": "Vincennes",
        "lat": 38.6759,
        "lng": -87.5102
    },
    {
        "state": "NE",
        "city": "La Vista",
        "lat": 41.1816,
        "lng": -96.0664
    },
    {
        "state": "CO",
        "city": "Firestone",
        "lat": 40.1565,
        "lng": -104.9494
    },
    {
        "state": "GA",
        "city": "Richmond Hill",
        "lat": 31.9012,
        "lng": -81.3125
    },
    {
        "state": "IL",
        "city": "Westchester",
        "lat": 41.8492,
        "lng": -87.8906
    },
    {
        "state": "GA",
        "city": "Holly Springs",
        "lat": 34.1681,
        "lng": -84.4847
    },
    {
        "state": "NC",
        "city": "Murraysville",
        "lat": 34.2919,
        "lng": -77.8429
    },
    {
        "state": "MD",
        "city": "Ferndale",
        "lat": 39.1869,
        "lng": -76.6331
    },
    {
        "state": "AL",
        "city": "Hueytown",
        "lat": 33.4239,
        "lng": -87.022
    },
    {
        "state": "WI",
        "city": "Beaver Dam",
        "lat": 43.4688,
        "lng": -88.8309
    },
    {
        "state": "AL",
        "city": "Calera",
        "lat": 33.1254,
        "lng": -86.7449
    },
    {
        "state": "FL",
        "city": "Lake Mary",
        "lat": 28.7592,
        "lng": -81.336
    },
    {
        "state": "MD",
        "city": "Glenmont",
        "lat": 39.0698,
        "lng": -77.0467
    },
    {
        "state": "AL",
        "city": "Millbrook",
        "lat": 32.5027,
        "lng": -86.3737
    },
    {
        "state": "MN",
        "city": "Red Wing",
        "lat": 44.5817,
        "lng": -92.6036
    },
    {
        "state": "VA",
        "city": "Bull Run",
        "lat": 38.7802,
        "lng": -77.5204
    },
    {
        "state": "CA",
        "city": "Clearlake",
        "lat": 38.9589,
        "lng": -122.633
    },
    {
        "state": "IL",
        "city": "Morton",
        "lat": 40.6135,
        "lng": -89.4669
    },
    {
        "state": "FL",
        "city": "Three Lakes",
        "lat": 25.6415,
        "lng": -80.4
    },
    {
        "state": "CA",
        "city": "Rio Linda",
        "lat": 38.6875,
        "lng": -121.4417
    },
    {
        "state": "HI",
        "city": "Wailuku",
        "lat": 20.8834,
        "lng": -156.5059
    },
    {
        "state": "IL",
        "city": "Country Club Hills",
        "lat": 41.5636,
        "lng": -87.7251
    },
    {
        "state": "FL",
        "city": "Warrington",
        "lat": 30.3835,
        "lng": -87.2946
    },
    {
        "state": "TX",
        "city": "Humble",
        "lat": 29.9921,
        "lng": -95.2655
    },
    {
        "state": "WI",
        "city": "Menomonie",
        "lat": 44.8893,
        "lng": -91.9084
    },
    {
        "state": "WA",
        "city": "West Richland",
        "lat": 46.3115,
        "lng": -119.3999
    },
    {
        "state": "OK",
        "city": "Ada",
        "lat": 34.7662,
        "lng": -96.6681
    },
    {
        "state": "FL",
        "city": "Vero Beach",
        "lat": 27.6463,
        "lng": -80.393
    },
    {
        "state": "NJ",
        "city": "Madison",
        "lat": 40.7586,
        "lng": -74.4169
    },
    {
        "state": "VA",
        "city": "East Highland Park",
        "lat": 37.577,
        "lng": -77.3865
    },
    {
        "state": "CA",
        "city": "Ukiah",
        "lat": 39.1464,
        "lng": -123.2105
    },
    {
        "state": "MN",
        "city": "Ham Lake",
        "lat": 45.2545,
        "lng": -93.2039
    },
    {
        "state": "IN",
        "city": "Jasper",
        "lat": 38.3933,
        "lng": -86.9402
    },
    {
        "state": "MD",
        "city": "Hillcrest Heights",
        "lat": 38.8373,
        "lng": -76.9641
    },
    {
        "state": "IN",
        "city": "Warsaw",
        "lat": 41.2448,
        "lng": -85.8465
    },
    {
        "state": "GA",
        "city": "Fairburn",
        "lat": 33.5496,
        "lng": -84.5914
    },
    {
        "state": "FL",
        "city": "Lake Wales",
        "lat": 27.9195,
        "lng": -81.5961
    },
    {
        "state": "CA",
        "city": "Fillmore",
        "lat": 34.3989,
        "lng": -118.9174
    },
    {
        "state": "FL",
        "city": "Ojus",
        "lat": 25.9563,
        "lng": -80.1606
    },
    {
        "state": "TX",
        "city": "Taylor",
        "lat": 30.5729,
        "lng": -97.4268
    },
    {
        "state": "TX",
        "city": "Glenn Heights",
        "lat": 32.5506,
        "lng": -96.8548
    },
    {
        "state": "NC",
        "city": "Albemarle",
        "lat": 35.3594,
        "lng": -80.1915
    },
    {
        "state": "MD",
        "city": "Cloverly",
        "lat": 39.1064,
        "lng": -76.9995
    },
    {
        "state": "FL",
        "city": "Auburndale",
        "lat": 28.0963,
        "lng": -81.8012
    },
    {
        "state": "NY",
        "city": "Pearl River",
        "lat": 41.0615,
        "lng": -74.0047
    },
    {
        "state": "MD",
        "city": "Aberdeen",
        "lat": 39.5151,
        "lng": -76.1733
    },
    {
        "state": "NV",
        "city": "Spanish Springs",
        "lat": 39.6568,
        "lng": -119.6694
    },
    {
        "state": "PA",
        "city": "Hanover",
        "lat": 39.8118,
        "lng": -76.9836
    },
    {
        "state": "IN",
        "city": "Dyer",
        "lat": 41.4977,
        "lng": -87.509
    },
    {
        "state": "VA",
        "city": "Vienna",
        "lat": 38.8996,
        "lng": -77.2597
    },
    {
        "state": "SC",
        "city": "Dentsville",
        "lat": 34.0754,
        "lng": -80.9547
    },
    {
        "state": "OK",
        "city": "Tahlequah",
        "lat": 35.9112,
        "lng": -94.977
    },
    {
        "state": "VA",
        "city": "Hollins",
        "lat": 37.3434,
        "lng": -79.9534
    },
    {
        "state": "VA",
        "city": "Radford",
        "lat": 37.1229,
        "lng": -80.5587
    },
    {
        "state": "AZ",
        "city": "Payson",
        "lat": 34.2433,
        "lng": -111.3195
    },
    {
        "state": "TX",
        "city": "Mercedes",
        "lat": 26.1533,
        "lng": -97.9128
    },
    {
        "state": "IL",
        "city": "Fairview Heights",
        "lat": 38.5974,
        "lng": -90.0053
    },
    {
        "state": "PA",
        "city": "Fullerton",
        "lat": 40.6309,
        "lng": -75.4834
    },
    {
        "state": "NJ",
        "city": "North Arlington",
        "lat": 40.7874,
        "lng": -74.1273
    },
    {
        "state": "MI",
        "city": "Grosse Pointe Woods",
        "lat": 42.4366,
        "lng": -82.8987
    },
    {
        "state": "IN",
        "city": "Crawfordsville",
        "lat": 40.0428,
        "lng": -86.8976
    },
    {
        "state": "AL",
        "city": "Muscle Shoals",
        "lat": 34.7432,
        "lng": -87.6343
    },
    {
        "state": "FL",
        "city": "Mount Dora",
        "lat": 28.8142,
        "lng": -81.6344
    },
    {
        "state": "WA",
        "city": "Sunnyside",
        "lat": 46.3157,
        "lng": -120.0058
    },
    {
        "state": "MO",
        "city": "Poplar Bluff",
        "lat": 36.7632,
        "lng": -90.4135
    },
    {
        "state": "AZ",
        "city": "Douglas",
        "lat": 31.3602,
        "lng": -109.5394
    },
    {
        "state": "NY",
        "city": "Fort Drum",
        "lat": 44.045,
        "lng": -75.7845
    },
    {
        "state": "MN",
        "city": "Buffalo",
        "lat": 45.1794,
        "lng": -93.8644
    },
    {
        "state": "CO",
        "city": "Welby",
        "lat": 39.8403,
        "lng": -104.9655
    },
    {
        "state": "AL",
        "city": "Center Point",
        "lat": 33.6447,
        "lng": -86.6852
    },
    {
        "state": "VA",
        "city": "Glen Allen",
        "lat": 37.666,
        "lng": -77.4838
    },
    {
        "state": "CA",
        "city": "Parkway",
        "lat": 38.4993,
        "lng": -121.452
    },
    {
        "state": "CA",
        "city": "Artesia",
        "lat": 33.8676,
        "lng": -118.0805
    },
    {
        "state": "OK",
        "city": "Chickasha",
        "lat": 35.0409,
        "lng": -97.9474
    },
    {
        "state": "FL",
        "city": "Opa-locka",
        "lat": 25.8997,
        "lng": -80.2551
    },
    {
        "state": "PA",
        "city": "Hermitage",
        "lat": 41.2305,
        "lng": -80.4413
    },
    {
        "state": "MO",
        "city": "Lemay",
        "lat": 38.5325,
        "lng": -90.2845
    },
    {
        "state": "CA",
        "city": "Walnut Park",
        "lat": 33.9682,
        "lng": -118.222
    },
    {
        "state": "NC",
        "city": "Stallings",
        "lat": 35.1088,
        "lng": -80.6598
    },
    {
        "state": "NY",
        "city": "Mastic Beach",
        "lat": 40.7664,
        "lng": -72.8369
    },
    {
        "state": "SC",
        "city": "Berea",
        "lat": 34.8802,
        "lng": -82.465
    },
    {
        "state": "IN",
        "city": "Griffith",
        "lat": 41.5277,
        "lng": -87.4239
    },
    {
        "state": "HI",
        "city": "Ocean Pointe",
        "lat": 21.3145,
        "lng": -158.0289
    },
    {
        "state": "TN",
        "city": "Dyersburg",
        "lat": 36.0465,
        "lng": -89.3777
    },
    {
        "state": "TX",
        "city": "South Houston",
        "lat": 29.6611,
        "lng": -95.2285
    },
    {
        "state": "MN",
        "city": "Hibbing",
        "lat": 47.398,
        "lng": -92.9486
    },
    {
        "state": "WI",
        "city": "River Falls",
        "lat": 44.8609,
        "lng": -92.6247
    },
    {
        "state": "OR",
        "city": "Four Corners",
        "lat": 44.929,
        "lng": -122.9732
    },
    {
        "state": "OR",
        "city": "Troutdale",
        "lat": 45.5372,
        "lng": -122.3955
    },
    {
        "state": "MO",
        "city": "Sikeston",
        "lat": 36.8854,
        "lng": -89.5877
    },
    {
        "state": "NY",
        "city": "Sayville",
        "lat": 40.7478,
        "lng": -73.084
    },
    {
        "state": "IL",
        "city": "La Grange",
        "lat": 41.8072,
        "lng": -87.8741
    },
    {
        "state": "AL",
        "city": "Saraland",
        "lat": 30.8479,
        "lng": -88.1004
    },
    {
        "state": "CA",
        "city": "Ripon",
        "lat": 37.7417,
        "lng": -121.131
    },
    {
        "state": "WI",
        "city": "Bellevue",
        "lat": 44.4592,
        "lng": -87.955
    },
    {
        "state": "NJ",
        "city": "South River",
        "lat": 40.4455,
        "lng": -74.3783
    },
    {
        "state": "TN",
        "city": "Seymour",
        "lat": 35.8783,
        "lng": -83.7669
    },
    {
        "state": "AZ",
        "city": "Eloy",
        "lat": 32.747,
        "lng": -111.5992
    },
    {
        "state": "TX",
        "city": "Mount Pleasant",
        "lat": 33.1586,
        "lng": -94.9727
    },
    {
        "state": "TN",
        "city": "Dickson",
        "lat": 36.0637,
        "lng": -87.3665
    },
    {
        "state": "AL",
        "city": "Gardendale",
        "lat": 33.6677,
        "lng": -86.8069
    },
    {
        "state": "GA",
        "city": "Grovetown",
        "lat": 33.4503,
        "lng": -82.2073
    },
    {
        "state": "VA",
        "city": "Stone Ridge",
        "lat": 38.9294,
        "lng": -77.5557
    },
    {
        "state": "FL",
        "city": "Lady Lake",
        "lat": 28.9241,
        "lng": -81.9299
    },
    {
        "state": "OH",
        "city": "Bay Village",
        "lat": 41.4851,
        "lng": -81.9317
    },
    {
        "state": "AZ",
        "city": "Fort Mohave",
        "lat": 35.0004,
        "lng": -114.5748
    },
    {
        "state": "TX",
        "city": "Hewitt",
        "lat": 31.452,
        "lng": -97.196
    },
    {
        "state": "TX",
        "city": "Sulphur Springs",
        "lat": 33.1421,
        "lng": -95.6122
    },
    {
        "state": "ID",
        "city": "Mountain Home",
        "lat": 43.1324,
        "lng": -115.697
    },
    {
        "state": "FL",
        "city": "Azalea Park",
        "lat": 28.5473,
        "lng": -81.2956
    },
    {
        "state": "GA",
        "city": "Americus",
        "lat": 32.0736,
        "lng": -84.2248
    },
    {
        "state": "GA",
        "city": "Lithia Springs",
        "lat": 33.7811,
        "lng": -84.6487
    },
    {
        "state": "MI",
        "city": "Grandville",
        "lat": 42.9004,
        "lng": -85.7564
    },
    {
        "state": "VA",
        "city": "Fort Hunt",
        "lat": 38.7361,
        "lng": -77.0589
    },
    {
        "state": "LA",
        "city": "Youngsville",
        "lat": 30.0963,
        "lng": -91.9968
    },
    {
        "state": "OR",
        "city": "The Dalles",
        "lat": 45.6053,
        "lng": -121.1818
    },
    {
        "state": "IL",
        "city": "Washington",
        "lat": 40.705,
        "lng": -89.434
    },
    {
        "state": "GA",
        "city": "Dublin",
        "lat": 32.536,
        "lng": -82.928
    },
    {
        "state": "GA",
        "city": "St. Simons",
        "lat": 31.1775,
        "lng": -81.3857
    },
    {
        "state": "CA",
        "city": "Kerman",
        "lat": 36.7248,
        "lng": -120.0625
    },
    {
        "state": "WV",
        "city": "Clarksburg",
        "lat": 39.2862,
        "lng": -80.3232
    },
    {
        "state": "IN",
        "city": "Frankfort",
        "lat": 40.281,
        "lng": -86.5212
    },
    {
        "state": "FL",
        "city": "Viera West",
        "lat": 28.2467,
        "lng": -80.7387
    },
    {
        "state": "OR",
        "city": "Coos Bay",
        "lat": 43.3789,
        "lng": -124.233
    },
    {
        "state": "FL",
        "city": "Marco Island",
        "lat": 25.933,
        "lng": -81.6993
    },
    {
        "state": "MD",
        "city": "Summerfield",
        "lat": 38.9042,
        "lng": -76.8678
    },
    {
        "state": "NY",
        "city": "Bellmore",
        "lat": 40.6569,
        "lng": -73.5285
    },
    {
        "state": "OH",
        "city": "Middleburg Heights",
        "lat": 41.3696,
        "lng": -81.815
    },
    {
        "state": "CA",
        "city": "Alpine",
        "lat": 32.8439,
        "lng": -116.7585
    },
    {
        "state": "MD",
        "city": "Brooklyn Park",
        "lat": 39.217,
        "lng": -76.6174
    },
    {
        "state": "OH",
        "city": "Fremont",
        "lat": 41.3535,
        "lng": -83.1147
    },
    {
        "state": "NY",
        "city": "Floral Park",
        "lat": 40.7227,
        "lng": -73.7029
    },
    {
        "state": "TX",
        "city": "Highland Village",
        "lat": 33.0897,
        "lng": -97.0615
    },
    {
        "state": "IL",
        "city": "Prospect Heights",
        "lat": 42.1039,
        "lng": -87.9267
    },
    {
        "state": "NY",
        "city": "Seaford",
        "lat": 40.6678,
        "lng": -73.4922
    },
    {
        "state": "ND",
        "city": "Jamestown",
        "lat": 46.9063,
        "lng": -98.6937
    },
    {
        "state": "TX",
        "city": "Gatesville",
        "lat": 31.4445,
        "lng": -97.7317
    },
    {
        "state": "IA",
        "city": "Indianola",
        "lat": 41.3629,
        "lng": -93.5652
    },
    {
        "state": "MO",
        "city": "Overland",
        "lat": 38.6966,
        "lng": -90.3689
    },
    {
        "state": "MN",
        "city": "Hugo",
        "lat": 45.1671,
        "lng": -92.9588
    },
    {
        "state": "MD",
        "city": "Elkton",
        "lat": 39.6066,
        "lng": -75.8209
    },
    {
        "state": "SC",
        "city": "Seven Oaks",
        "lat": 34.0475,
        "lng": -81.1435
    },
    {
        "state": "WA",
        "city": "Port Orchard",
        "lat": 47.5163,
        "lng": -122.661
    },
    {
        "state": "VT",
        "city": "Rutland",
        "lat": 43.6092,
        "lng": -72.9783
    },
    {
        "state": "LA",
        "city": "Opelousas",
        "lat": 30.5252,
        "lng": -92.0816
    },
    {
        "state": "FL",
        "city": "Niceville",
        "lat": 30.529,
        "lng": -86.4748
    },
    {
        "state": "NY",
        "city": "Westbury",
        "lat": 40.7599,
        "lng": -73.5891
    },
    {
        "state": "ME",
        "city": "Waterville",
        "lat": 44.5441,
        "lng": -69.6624
    },
    {
        "state": "LA",
        "city": "Thibodaux",
        "lat": 29.7949,
        "lng": -90.8146
    },
    {
        "state": "CA",
        "city": "Susanville",
        "lat": 40.4206,
        "lng": -120.6132
    },
    {
        "state": "FL",
        "city": "Wildwood",
        "lat": 28.7752,
        "lng": -82.0075
    },
    {
        "state": "TX",
        "city": "Live Oak",
        "lat": 29.5545,
        "lng": -98.3404
    },
    {
        "state": "WI",
        "city": "Whitewater",
        "lat": 42.8372,
        "lng": -88.7341
    },
    {
        "state": "WA",
        "city": "Lynden",
        "lat": 48.9502,
        "lng": -122.4545
    },
    {
        "state": "VA",
        "city": "Wolf Trap",
        "lat": 38.9395,
        "lng": -77.2842
    },
    {
        "state": "ID",
        "city": "Hayden",
        "lat": 47.768,
        "lng": -116.804
    },
    {
        "state": "NC",
        "city": "Southern Pines",
        "lat": 35.1927,
        "lng": -79.4039
    },
    {
        "state": "WI",
        "city": "Weston",
        "lat": 44.8906,
        "lng": -89.5487
    },
    {
        "state": "IA",
        "city": "Newton",
        "lat": 41.6963,
        "lng": -93.0403
    },
    {
        "state": "MO",
        "city": "Grain Valley",
        "lat": 39.0171,
        "lng": -94.2084
    },
    {
        "state": "MI",
        "city": "Mount Clemens",
        "lat": 42.5977,
        "lng": -82.8821
    },
    {
        "state": "WI",
        "city": "Hartford",
        "lat": 43.3223,
        "lng": -88.3784
    },
    {
        "state": "SD",
        "city": "Mitchell",
        "lat": 43.7294,
        "lng": -98.0337
    },
    {
        "state": "ID",
        "city": "Chubbuck",
        "lat": 42.9263,
        "lng": -112.4623
    },
    {
        "state": "CA",
        "city": "Coto de Caza",
        "lat": 33.5959,
        "lng": -117.586
    },
    {
        "state": "FL",
        "city": "Longwood",
        "lat": 28.7014,
        "lng": -81.3487
    },
    {
        "state": "MO",
        "city": "Fort Leonard Wood",
        "lat": 37.7562,
        "lng": -92.1274
    },
    {
        "state": "KY",
        "city": "Shively",
        "lat": 38.197,
        "lng": -85.8136
    },
    {
        "state": "NJ",
        "city": "Princeton Meadows",
        "lat": 40.3347,
        "lng": -74.5651
    },
    {
        "state": "SC",
        "city": "Red Hill",
        "lat": 33.7777,
        "lng": -79.0111
    },
    {
        "state": "IL",
        "city": "Dixon",
        "lat": 41.8439,
        "lng": -89.4794
    },
    {
        "state": "FL",
        "city": "Southchase",
        "lat": 28.3793,
        "lng": -81.3903
    },
    {
        "state": "IN",
        "city": "New Haven",
        "lat": 41.0676,
        "lng": -85.0174
    },
    {
        "state": "AL",
        "city": "Scottsboro",
        "lat": 34.6438,
        "lng": -86.0491
    },
    {
        "state": "CO",
        "city": "Greenwood Village",
        "lat": 39.6153,
        "lng": -104.9131
    },
    {
        "state": "CA",
        "city": "Los Osos",
        "lat": 35.3065,
        "lng": -120.8242
    },
    {
        "state": "TX",
        "city": "Rendon",
        "lat": 32.5789,
        "lng": -97.2349
    },
    {
        "state": "CA",
        "city": "La Palma",
        "lat": 33.8504,
        "lng": -118.0407
    },
    {
        "state": "TX",
        "city": "Aldine",
        "lat": 29.9123,
        "lng": -95.3784
    },
    {
        "state": "NY",
        "city": "Batavia",
        "lat": 42.9987,
        "lng": -78.1802
    },
    {
        "state": "MD",
        "city": "Rossville",
        "lat": 39.3572,
        "lng": -76.4767
    },
    {
        "state": "CA",
        "city": "Cherryland",
        "lat": 37.6792,
        "lng": -122.1038
    },
    {
        "state": "MO",
        "city": "Carthage",
        "lat": 37.1503,
        "lng": -94.3225
    },
    {
        "state": "MD",
        "city": "White Oak",
        "lat": 39.0451,
        "lng": -76.9885
    },
    {
        "state": "WA",
        "city": "White Center",
        "lat": 47.5086,
        "lng": -122.3479
    },
    {
        "state": "MI",
        "city": "Traverse City",
        "lat": 44.7546,
        "lng": -85.6038
    },
    {
        "state": "KS",
        "city": "Andover",
        "lat": 37.6873,
        "lng": -97.1352
    },
    {
        "state": "TN",
        "city": "Greeneville",
        "lat": 36.168,
        "lng": -82.8197
    },
    {
        "state": "MN",
        "city": "Bemidji",
        "lat": 47.4828,
        "lng": -94.8797
    },
    {
        "state": "MI",
        "city": "Northview",
        "lat": 43.0427,
        "lng": -85.6016
    },
    {
        "state": "SD",
        "city": "Yankton",
        "lat": 42.8901,
        "lng": -97.3927
    },
    {
        "state": "NV",
        "city": "Dayton",
        "lat": 39.2592,
        "lng": -119.5653
    },
    {
        "state": "AL",
        "city": "Hartselle",
        "lat": 34.4391,
        "lng": -86.9396
    },
    {
        "state": "DE",
        "city": "Glasgow",
        "lat": 39.6015,
        "lng": -75.7473
    },
    {
        "state": "KY",
        "city": "Berea",
        "lat": 37.5904,
        "lng": -84.2898
    },
    {
        "state": "IA",
        "city": "Grimes",
        "lat": 41.6779,
        "lng": -93.7947
    },
    {
        "state": "MO",
        "city": "Jackson",
        "lat": 37.3792,
        "lng": -89.6522
    },
    {
        "state": "IL",
        "city": "Bradley",
        "lat": 41.1641,
        "lng": -87.8452
    },
    {
        "state": "FL",
        "city": "Homosassa Springs",
        "lat": 28.8119,
        "lng": -82.5392
    },
    {
        "state": "CA",
        "city": "Discovery Bay",
        "lat": 37.9063,
        "lng": -121.599
    },
    {
        "state": "NC",
        "city": "Eden",
        "lat": 36.5027,
        "lng": -79.7412
    },
    {
        "state": "TX",
        "city": "Uvalde",
        "lat": 29.2152,
        "lng": -99.7782
    },
    {
        "state": "TX",
        "city": "Manor",
        "lat": 30.3562,
        "lng": -97.5227
    },
    {
        "state": "FL",
        "city": "Fruitville",
        "lat": 27.3328,
        "lng": -82.4616
    },
    {
        "state": "PA",
        "city": "Franklin Park",
        "lat": 40.5903,
        "lng": -80.0999
    },
    {
        "state": "NJ",
        "city": "Tenafly",
        "lat": 40.9176,
        "lng": -73.9532
    },
    {
        "state": "SC",
        "city": "Ladson",
        "lat": 33.0093,
        "lng": -80.1078
    },
    {
        "state": "MI",
        "city": "Harper Woods",
        "lat": 42.439,
        "lng": -82.9293
    },
    {
        "state": "IL",
        "city": "Norridge",
        "lat": 41.9637,
        "lng": -87.8231
    },
    {
        "state": "NM",
        "city": "Chaparral",
        "lat": 32.0442,
        "lng": -106.406
    },
    {
        "state": "FL",
        "city": "Palmer Ranch",
        "lat": 27.2286,
        "lng": -82.4672
    },
    {
        "state": "CA",
        "city": "Vincent",
        "lat": 34.0983,
        "lng": -117.9238
    },
    {
        "state": "TX",
        "city": "Rio Grande City",
        "lat": 26.3808,
        "lng": -98.8215
    },
    {
        "state": "AZ",
        "city": "Vail",
        "lat": 32.0217,
        "lng": -110.6937
    },
    {
        "state": "NJ",
        "city": "Springdale",
        "lat": 39.8769,
        "lng": -74.9724
    },
    {
        "state": "TX",
        "city": "Palmview",
        "lat": 26.2318,
        "lng": -98.3823
    },
    {
        "state": "NJ",
        "city": "Asbury Park",
        "lat": 40.2226,
        "lng": -74.0119
    },
    {
        "state": "TX",
        "city": "Melissa",
        "lat": 33.2891,
        "lng": -96.5573
    },
    {
        "state": "MD",
        "city": "Glenn Dale",
        "lat": 38.9833,
        "lng": -76.804
    },
    {
        "state": "GA",
        "city": "Wilmington Island",
        "lat": 32.0033,
        "lng": -80.9752
    },
    {
        "state": "NY",
        "city": "Johnson City",
        "lat": 42.123,
        "lng": -75.9624
    },
    {
        "state": "IL",
        "city": "Macomb",
        "lat": 40.4709,
        "lng": -90.6807
    },
    {
        "state": "NJ",
        "city": "Phillipsburg",
        "lat": 40.6894,
        "lng": -75.1821
    },
    {
        "state": "OH",
        "city": "Monroe",
        "lat": 39.4461,
        "lng": -84.3667
    },
    {
        "state": "AL",
        "city": "Chelsea",
        "lat": 33.3262,
        "lng": -86.63
    },
    {
        "state": "NC",
        "city": "Davidson",
        "lat": 35.484,
        "lng": -80.8247
    },
    {
        "state": "IN",
        "city": "Beech Grove",
        "lat": 39.7157,
        "lng": -86.0871
    },
    {
        "state": "AL",
        "city": "Gulf Shores",
        "lat": 30.2764,
        "lng": -87.7017
    },
    {
        "state": "NY",
        "city": "Greenlawn",
        "lat": 40.8632,
        "lng": -73.3646
    },
    {
        "state": "HI",
        "city": "Ewa Beach",
        "lat": 21.3181,
        "lng": -158.0073
    },
    {
        "state": "PR",
        "city": "Yauco",
        "lat": 18.0344,
        "lng": -66.8615
    },
    {
        "state": "NY",
        "city": "Kenmore",
        "lat": 42.9646,
        "lng": -78.8713
    },
    {
        "state": "MI",
        "city": "Berkley",
        "lat": 42.4986,
        "lng": -83.1853
    },
    {
        "state": "NC",
        "city": "Roanoke Rapids",
        "lat": 36.4452,
        "lng": -77.649
    },
    {
        "state": "NY",
        "city": "Depew",
        "lat": 42.9118,
        "lng": -78.7043
    },
    {
        "state": "OH",
        "city": "Vandalia",
        "lat": 39.8791,
        "lng": -84.193
    },
    {
        "state": "WA",
        "city": "Ferndale",
        "lat": 48.8526,
        "lng": -122.5894
    },
    {
        "state": "NY",
        "city": "New Cassel",
        "lat": 40.7602,
        "lng": -73.5649
    },
    {
        "state": "NY",
        "city": "Gloversville",
        "lat": 43.0491,
        "lng": -74.3465
    },
    {
        "state": "NC",
        "city": "Hendersonville",
        "lat": 35.3247,
        "lng": -82.4575
    },
    {
        "state": "CA",
        "city": "Pacific Grove",
        "lat": 36.6188,
        "lng": -121.9259
    },
    {
        "state": "NY",
        "city": "Tonawanda",
        "lat": 43.0105,
        "lng": -78.8805
    },
    {
        "state": "TX",
        "city": "Canyon",
        "lat": 34.9911,
        "lng": -101.919
    },
    {
        "state": "NY",
        "city": "Eggertsville",
        "lat": 42.9665,
        "lng": -78.8065
    },
    {
        "state": "FL",
        "city": "West Park",
        "lat": 25.984,
        "lng": -80.1923
    },
    {
        "state": "AL",
        "city": "Talladega",
        "lat": 33.4333,
        "lng": -86.0986
    },
    {
        "state": "MI",
        "city": "Hazel Park",
        "lat": 42.4619,
        "lng": -83.0977
    },
    {
        "state": "VA",
        "city": "Front Royal",
        "lat": 38.926,
        "lng": -78.1838
    },
    {
        "state": "NV",
        "city": "Spring Creek",
        "lat": 40.745,
        "lng": -115.5983
    },
    {
        "state": "TX",
        "city": "Royse City",
        "lat": 32.9762,
        "lng": -96.3175
    },
    {
        "state": "TX",
        "city": "Mineral Wells",
        "lat": 32.8169,
        "lng": -98.0776
    },
    {
        "state": "KY",
        "city": "Glasgow",
        "lat": 37.0048,
        "lng": -85.9263
    },
    {
        "state": "CO",
        "city": "Frederick",
        "lat": 40.1088,
        "lng": -104.9701
    },
    {
        "state": "GA",
        "city": "Monroe",
        "lat": 33.799,
        "lng": -83.7161
    },
    {
        "state": "NY",
        "city": "South Farmingdale",
        "lat": 40.7175,
        "lng": -73.4473
    },
    {
        "state": "MO",
        "city": "Lebanon",
        "lat": 37.6717,
        "lng": -92.6603
    },
    {
        "state": "FL",
        "city": "Lockhart",
        "lat": 28.627,
        "lng": -81.4354
    },
    {
        "state": "CA",
        "city": "California City",
        "lat": 35.1578,
        "lng": -117.8721
    },
    {
        "state": "OH",
        "city": "Worthington",
        "lat": 40.095,
        "lng": -83.0209
    },
    {
        "state": "NC",
        "city": "Henderson",
        "lat": 36.3256,
        "lng": -78.4151
    },
    {
        "state": "TX",
        "city": "Buda",
        "lat": 30.0758,
        "lng": -97.8487
    },
    {
        "state": "NJ",
        "city": "Highland Park",
        "lat": 40.5006,
        "lng": -74.4283
    },
    {
        "state": "NC",
        "city": "Laurinburg",
        "lat": 34.7602,
        "lng": -79.4773
    },
    {
        "state": "VA",
        "city": "Great Falls",
        "lat": 39.011,
        "lng": -77.3013
    },
    {
        "state": "NY",
        "city": "Mastic",
        "lat": 40.8096,
        "lng": -72.8479
    },
    {
        "state": "TX",
        "city": "West University Place",
        "lat": 29.7157,
        "lng": -95.4321
    },
    {
        "state": "WA",
        "city": "Lakeland North",
        "lat": 47.3374,
        "lng": -122.2812
    },
    {
        "state": "PA",
        "city": "Weigelstown",
        "lat": 39.9852,
        "lng": -76.8306
    },
    {
        "state": "NJ",
        "city": "Metuchen",
        "lat": 40.5424,
        "lng": -74.3628
    },
    {
        "state": "TX",
        "city": "Hereford",
        "lat": 34.8225,
        "lng": -102.4001
    },
    {
        "state": "NJ",
        "city": "Fairview",
        "lat": 40.8182,
        "lng": -74.0022
    },
    {
        "state": "GA",
        "city": "Riverdale",
        "lat": 33.5639,
        "lng": -84.4103
    },
    {
        "state": "CA",
        "city": "East Rancho Dominguez",
        "lat": 33.8949,
        "lng": -118.1956
    },
    {
        "state": "IL",
        "city": "Hickory Hills",
        "lat": 41.7248,
        "lng": -87.828
    },
    {
        "state": "MD",
        "city": "Lake Arbor",
        "lat": 38.9105,
        "lng": -76.8304
    },
    {
        "state": "IL",
        "city": "Swansea",
        "lat": 38.5507,
        "lng": -89.9858
    },
    {
        "state": "VA",
        "city": "Highland Springs",
        "lat": 37.5516,
        "lng": -77.3285
    },
    {
        "state": "FL",
        "city": "Oldsmar",
        "lat": 28.0506,
        "lng": -82.6698
    },
    {
        "state": "PA",
        "city": "Greensburg",
        "lat": 40.3113,
        "lng": -79.5445
    },
    {
        "state": "NV",
        "city": "Boulder City",
        "lat": 35.8407,
        "lng": -114.9257
    },
    {
        "state": "TX",
        "city": "Red Oak",
        "lat": 32.5212,
        "lng": -96.7866
    },
    {
        "state": "IL",
        "city": "Sterling",
        "lat": 41.7996,
        "lng": -89.6956
    },
    {
        "state": "FL",
        "city": "Forest City",
        "lat": 28.6619,
        "lng": -81.4444
    },
    {
        "state": "CA",
        "city": "Salida",
        "lat": 37.7083,
        "lng": -121.0842
    },
    {
        "state": "NC",
        "city": "Belmont",
        "lat": 35.2212,
        "lng": -81.0401
    },
    {
        "state": "CA",
        "city": "Lemon Hill",
        "lat": 38.5172,
        "lng": -121.4573
    },
    {
        "state": "AL",
        "city": "Fort Payne",
        "lat": 34.4559,
        "lng": -85.6965
    },
    {
        "state": "AZ",
        "city": "Tanque Verde",
        "lat": 32.2687,
        "lng": -110.7437
    },
    {
        "state": "WI",
        "city": "Whitefish Bay",
        "lat": 43.1131,
        "lng": -87.9003
    },
    {
        "state": "WI",
        "city": "Waunakee",
        "lat": 43.1829,
        "lng": -89.4447
    },
    {
        "state": "AL",
        "city": "Alexander City",
        "lat": 32.9229,
        "lng": -85.9358
    },
    {
        "state": "NJ",
        "city": "Williamstown",
        "lat": 39.6874,
        "lng": -74.9786
    },
    {
        "state": "MO",
        "city": "Washington",
        "lat": 38.5515,
        "lng": -91.0154
    },
    {
        "state": "MS",
        "city": "Clarksdale",
        "lat": 34.1933,
        "lng": -90.5693
    },
    {
        "state": "NC",
        "city": "Piney Green",
        "lat": 34.7498,
        "lng": -77.3208
    },
    {
        "state": "WI",
        "city": "Hudson",
        "lat": 44.9639,
        "lng": -92.7312
    },
    {
        "state": "NM",
        "city": "Deming",
        "lat": 32.2631,
        "lng": -107.7525
    },
    {
        "state": "MD",
        "city": "Havre de Grace",
        "lat": 39.548,
        "lng": -76.1146
    },
    {
        "state": "GA",
        "city": "Lilburn",
        "lat": 33.8897,
        "lng": -84.1364
    },
    {
        "state": "IL",
        "city": "Mount Vernon",
        "lat": 38.314,
        "lng": -88.9174
    },
    {
        "state": "NJ",
        "city": "Ramsey",
        "lat": 41.0595,
        "lng": -74.1454
    },
    {
        "state": "NJ",
        "city": "Hammonton",
        "lat": 39.6572,
        "lng": -74.7678
    },
    {
        "state": "KS",
        "city": "Great Bend",
        "lat": 38.3593,
        "lng": -98.8015
    },
    {
        "state": "WI",
        "city": "Greendale",
        "lat": 42.9371,
        "lng": -88.0018
    },
    {
        "state": "CA",
        "city": "Isla Vista",
        "lat": 34.4128,
        "lng": -119.8614
    },
    {
        "state": "IL",
        "city": "Antioch",
        "lat": 42.4742,
        "lng": -88.0721
    },
    {
        "state": "FL",
        "city": "Gladeview",
        "lat": 25.8395,
        "lng": -80.2368
    },
    {
        "state": "PA",
        "city": "Hershey",
        "lat": 40.2806,
        "lng": -76.6458
    },
    {
        "state": "MI",
        "city": "Owosso",
        "lat": 42.9955,
        "lng": -84.176
    },
    {
        "state": "MI",
        "city": "Fraser",
        "lat": 42.5388,
        "lng": -82.9496
    },
    {
        "state": "WA",
        "city": "Lake Stickney",
        "lat": 47.8733,
        "lng": -122.2582
    },
    {
        "state": "NY",
        "city": "North New Hyde Park",
        "lat": 40.746,
        "lng": -73.6876
    },
    {
        "state": "MD",
        "city": "Flower Hill",
        "lat": 39.1676,
        "lng": -77.1824
    },
    {
        "state": "CA",
        "city": "Parlier",
        "lat": 36.6087,
        "lng": -119.5434
    },
    {
        "state": "WI",
        "city": "Chippewa Falls",
        "lat": 44.9358,
        "lng": -91.3902
    },
    {
        "state": "VA",
        "city": "Groveton",
        "lat": 38.7605,
        "lng": -77.098
    },
    {
        "state": "MN",
        "city": "Hutchinson",
        "lat": 44.8855,
        "lng": -94.3768
    },
    {
        "state": "VA",
        "city": "Broadlands",
        "lat": 39.0168,
        "lng": -77.5167
    },
    {
        "state": "CA",
        "city": "Red Bluff",
        "lat": 40.1735,
        "lng": -122.2413
    },
    {
        "state": "VA",
        "city": "Falls Church",
        "lat": 38.8847,
        "lng": -77.1751
    },
    {
        "state": "SC",
        "city": "Port Royal",
        "lat": 32.3557,
        "lng": -80.7029
    },
    {
        "state": "FL",
        "city": "Key Biscayne",
        "lat": 25.6908,
        "lng": -80.1653
    },
    {
        "state": "WI",
        "city": "Salem Lakes",
        "lat": 42.5366,
        "lng": -88.1306
    },
    {
        "state": "GA",
        "city": "Belvedere Park",
        "lat": 33.7489,
        "lng": -84.2599
    },
    {
        "state": "GA",
        "city": "Clarkston",
        "lat": 33.8117,
        "lng": -84.2403
    },
    {
        "state": "GA",
        "city": "Moultrie",
        "lat": 31.1591,
        "lng": -83.7708
    },
    {
        "state": "NC",
        "city": "Reidsville",
        "lat": 36.3376,
        "lng": -79.6725
    },
    {
        "state": "NJ",
        "city": "Middlesex",
        "lat": 40.5744,
        "lng": -74.5011
    },
    {
        "state": "MS",
        "city": "Corinth",
        "lat": 34.9474,
        "lng": -88.5143
    },
    {
        "state": "NH",
        "city": "Lebanon",
        "lat": 43.6353,
        "lng": -72.2531
    },
    {
        "state": "AL",
        "city": "McCalla",
        "lat": 33.3023,
        "lng": -87.0302
    },
    {
        "state": "IL",
        "city": "Morris",
        "lat": 41.3749,
        "lng": -88.4304
    },
    {
        "state": "TX",
        "city": "Lockhart",
        "lat": 29.8785,
        "lng": -97.6831
    },
    {
        "state": "UT",
        "city": "Santaquin",
        "lat": 39.9708,
        "lng": -111.7941
    },
    {
        "state": "NE",
        "city": "Scottsbluff",
        "lat": 41.8684,
        "lng": -103.6616
    },
    {
        "state": "AL",
        "city": "Jasper",
        "lat": 33.8508,
        "lng": -87.271
    },
    {
        "state": "MN",
        "city": "Robbinsdale",
        "lat": 45.0261,
        "lng": -93.3332
    },
    {
        "state": "NJ",
        "city": "Short Hills",
        "lat": 40.7389,
        "lng": -74.3278
    },
    {
        "state": "NJ",
        "city": "West Freehold",
        "lat": 40.2324,
        "lng": -74.2943
    },
    {
        "state": "MN",
        "city": "Monticello",
        "lat": 45.2991,
        "lng": -93.7996
    },
    {
        "state": "NC",
        "city": "Anderson Creek",
        "lat": 35.2657,
        "lng": -78.958
    },
    {
        "state": "TN",
        "city": "Nolensville",
        "lat": 35.9572,
        "lng": -86.6719
    },
    {
        "state": "IL",
        "city": "Chatham",
        "lat": 39.6733,
        "lng": -89.6934
    },
    {
        "state": "CO",
        "city": "Black Forest",
        "lat": 39.0608,
        "lng": -104.6752
    },
    {
        "state": "PR",
        "city": "Cayey",
        "lat": 18.115,
        "lng": -66.163
    },
    {
        "state": "MN",
        "city": "Brainerd",
        "lat": 46.3553,
        "lng": -94.1983
    },
    {
        "state": "NJ",
        "city": "Hopatcong",
        "lat": 40.9541,
        "lng": -74.6593
    },
    {
        "state": "HI",
        "city": "Halawa",
        "lat": 21.3753,
        "lng": -157.9185
    },
    {
        "state": "FL",
        "city": "Minneola",
        "lat": 28.6067,
        "lng": -81.7322
    },
    {
        "state": "TX",
        "city": "Dumas",
        "lat": 35.8613,
        "lng": -101.9642
    },
    {
        "state": "CA",
        "city": "North Auburn",
        "lat": 38.9306,
        "lng": -121.082
    },
    {
        "state": "IL",
        "city": "Lindenhurst",
        "lat": 42.4175,
        "lng": -88.0257
    },
    {
        "state": "MN",
        "city": "Alexandria",
        "lat": 45.8776,
        "lng": -95.3767
    },
    {
        "state": "AZ",
        "city": "Sierra Vista Southeast",
        "lat": 31.4525,
        "lng": -110.216
    },
    {
        "state": "NJ",
        "city": "Edgewater",
        "lat": 40.8237,
        "lng": -73.974
    },
    {
        "state": "OH",
        "city": "Washington Court House",
        "lat": 39.5381,
        "lng": -83.4281
    },
    {
        "state": "SC",
        "city": "Lake Wylie",
        "lat": 35.0997,
        "lng": -81.0678
    },
    {
        "state": "MS",
        "city": "Natchez",
        "lat": 31.5437,
        "lng": -91.3867
    },
    {
        "state": "NJ",
        "city": "Moorestown-Lenola",
        "lat": 39.9659,
        "lng": -74.9643
    },
    {
        "state": "TN",
        "city": "Elizabethton",
        "lat": 36.3367,
        "lng": -82.237
    },
    {
        "state": "AL",
        "city": "Ozark",
        "lat": 31.4508,
        "lng": -85.6473
    },
    {
        "state": "NJ",
        "city": "Mercerville",
        "lat": 40.236,
        "lng": -74.6917
    },
    {
        "state": "LA",
        "city": "Pineville",
        "lat": 31.3414,
        "lng": -92.4096
    },
    {
        "state": "CA",
        "city": "Alamo",
        "lat": 37.8548,
        "lng": -122.0136
    },
    {
        "state": "NJ",
        "city": "Bradley Gardens",
        "lat": 40.5711,
        "lng": -74.6678
    },
    {
        "state": "CA",
        "city": "Livingston",
        "lat": 37.3875,
        "lng": -120.7248
    },
    {
        "state": "TN",
        "city": "Arlington",
        "lat": 35.2594,
        "lng": -89.668
    },
    {
        "state": "PA",
        "city": "Wilkinsburg",
        "lat": 40.4442,
        "lng": -79.8733
    },
    {
        "state": "DE",
        "city": "Brookside",
        "lat": 39.6665,
        "lng": -75.7152
    },
    {
        "state": "FL",
        "city": "Iona",
        "lat": 26.516,
        "lng": -81.9601
    },
    {
        "state": "GA",
        "city": "Loganville",
        "lat": 33.8353,
        "lng": -83.8958
    },
    {
        "state": "VA",
        "city": "Brandermill",
        "lat": 37.434,
        "lng": -77.6522
    },
    {
        "state": "IL",
        "city": "Chicago Ridge",
        "lat": 41.7034,
        "lng": -87.7795
    },
    {
        "state": "NY",
        "city": "Jericho",
        "lat": 40.7875,
        "lng": -73.5416
    },
    {
        "state": "AZ",
        "city": "Somerton",
        "lat": 32.6007,
        "lng": -114.6994
    },
    {
        "state": "FL",
        "city": "West Lealman",
        "lat": 27.8192,
        "lng": -82.7384
    },
    {
        "state": "SC",
        "city": "Gantt",
        "lat": 34.7837,
        "lng": -82.4027
    },
    {
        "state": "MS",
        "city": "Greenwood",
        "lat": 33.5126,
        "lng": -90.1993
    },
    {
        "state": "MN",
        "city": "North Mankato",
        "lat": 44.181,
        "lng": -94.0391
    },
    {
        "state": "GA",
        "city": "Bainbridge",
        "lat": 30.9052,
        "lng": -84.5732
    },
    {
        "state": "AL",
        "city": "Jacksonville",
        "lat": 33.8088,
        "lng": -85.7545
    },
    {
        "state": "WA",
        "city": "Elk Plain",
        "lat": 47.0425,
        "lng": -122.3663
    },
    {
        "state": "IN",
        "city": "Cedar Lake",
        "lat": 41.3696,
        "lng": -87.4389
    },
    {
        "state": "OH",
        "city": "Willowick",
        "lat": 41.6342,
        "lng": -81.4678
    },
    {
        "state": "LA",
        "city": "Luling",
        "lat": 29.9008,
        "lng": -90.3523
    },
    {
        "state": "MD",
        "city": "Bensville",
        "lat": 38.6176,
        "lng": -77.0077
    },
    {
        "state": "IL",
        "city": "Midlothian",
        "lat": 41.6254,
        "lng": -87.7243
    },
    {
        "state": "CA",
        "city": "Mill Valley",
        "lat": 37.9086,
        "lng": -122.5421
    },
    {
        "state": "IN",
        "city": "Chesterton",
        "lat": 41.5997,
        "lng": -87.055
    },
    {
        "state": "KY",
        "city": "Newport",
        "lat": 39.0856,
        "lng": -84.4868
    },
    {
        "state": "GA",
        "city": "Covington",
        "lat": 33.6049,
        "lng": -83.8463
    },
    {
        "state": "FL",
        "city": "Hobe Sound",
        "lat": 27.0729,
        "lng": -80.1425
    },
    {
        "state": "SD",
        "city": "Huron",
        "lat": 44.3623,
        "lng": -98.2094
    },
    {
        "state": "AZ",
        "city": "Coolidge",
        "lat": 32.9363,
        "lng": -111.5254
    },
    {
        "state": "CO",
        "city": "Federal Heights",
        "lat": 39.8651,
        "lng": -105.0154
    },
    {
        "state": "IL",
        "city": "Forest Park",
        "lat": 41.8683,
        "lng": -87.8157
    },
    {
        "state": "AZ",
        "city": "Sun Lakes",
        "lat": 33.2172,
        "lng": -111.8695
    },
    {
        "state": "NJ",
        "city": "Westmont",
        "lat": 39.9082,
        "lng": -75.0551
    },
    {
        "state": "KY",
        "city": "Shepherdsville",
        "lat": 37.9813,
        "lng": -85.7007
    },
    {
        "state": "GA",
        "city": "Dallas",
        "lat": 33.9152,
        "lng": -84.8416
    },
    {
        "state": "FL",
        "city": "Lakewood Park",
        "lat": 27.539,
        "lng": -80.3865
    },
    {
        "state": "PR",
        "city": "Candelaria",
        "lat": 18.4042,
        "lng": -66.2175
    },
    {
        "state": "GA",
        "city": "College Park",
        "lat": 33.6363,
        "lng": -84.464
    },
    {
        "state": "OH",
        "city": "Powell",
        "lat": 40.1689,
        "lng": -83.0829
    },
    {
        "state": "MN",
        "city": "Fergus Falls",
        "lat": 46.2854,
        "lng": -96.0758
    },
    {
        "state": "SD",
        "city": "Pierre",
        "lat": 44.3748,
        "lng": -100.3205
    },
    {
        "state": "TX",
        "city": "Jacksonville",
        "lat": 31.9642,
        "lng": -95.2617
    },
    {
        "state": "MD",
        "city": "Kemp Mill",
        "lat": 39.0412,
        "lng": -77.0215
    },
    {
        "state": "NY",
        "city": "Oneonta",
        "lat": 42.4551,
        "lng": -75.0666
    },
    {
        "state": "TN",
        "city": "Athens",
        "lat": 35.4573,
        "lng": -84.6045
    },
    {
        "state": "WI",
        "city": "Allouez",
        "lat": 44.4721,
        "lng": -88.0259
    },
    {
        "state": "PA",
        "city": "Indiana",
        "lat": 40.622,
        "lng": -79.1552
    },
    {
        "state": "PA",
        "city": "Dunmore",
        "lat": 41.4152,
        "lng": -75.6072
    },
    {
        "state": "TX",
        "city": "Hidalgo",
        "lat": 26.109,
        "lng": -98.2464
    },
    {
        "state": "PA",
        "city": "Ardmore",
        "lat": 40.0033,
        "lng": -75.2947
    },
    {
        "state": "NY",
        "city": "Jefferson Valley-Yorktown",
        "lat": 41.318,
        "lng": -73.8008
    },
    {
        "state": "WA",
        "city": "East Wenatchee",
        "lat": 47.4174,
        "lng": -120.2822
    },
    {
        "state": "MN",
        "city": "New Ulm",
        "lat": 44.312,
        "lng": -94.4685
    },
    {
        "state": "FL",
        "city": "Thonotosassa",
        "lat": 28.0464,
        "lng": -82.291
    },
    {
        "state": "IL",
        "city": "Wauconda",
        "lat": 42.2749,
        "lng": -88.1359
    },
    {
        "state": "WI",
        "city": "Verona",
        "lat": 42.9892,
        "lng": -89.5383
    },
    {
        "state": "OH",
        "city": "Sharonville",
        "lat": 39.2825,
        "lng": -84.4071
    },
    {
        "state": "OH",
        "city": "Circleville",
        "lat": 39.6063,
        "lng": -82.9334
    },
    {
        "state": "OR",
        "city": "St. Helens",
        "lat": 45.8572,
        "lng": -122.8164
    },
    {
        "state": "CA",
        "city": "Hawaiian Gardens",
        "lat": 33.8304,
        "lng": -118.0728
    },
    {
        "state": "IL",
        "city": "Beach Park",
        "lat": 42.426,
        "lng": -87.8583
    },
    {
        "state": "CO",
        "city": "Lone Tree",
        "lat": 39.5309,
        "lng": -104.8709
    },
    {
        "state": "TN",
        "city": "Powell",
        "lat": 36.0358,
        "lng": -84.0296
    },
    {
        "state": "FL",
        "city": "East Milton",
        "lat": 30.6175,
        "lng": -86.9636
    },
    {
        "state": "CA",
        "city": "McFarland",
        "lat": 35.6781,
        "lng": -119.2413
    },
    {
        "state": "CA",
        "city": "Grass Valley",
        "lat": 39.2238,
        "lng": -121.0522
    },
    {
        "state": "NJ",
        "city": "Roselle Park",
        "lat": 40.6653,
        "lng": -74.2666
    },
    {
        "state": "KS",
        "city": "McPherson",
        "lat": 38.3714,
        "lng": -97.6605
    },
    {
        "state": "OH",
        "city": "Lyndhurst",
        "lat": 41.5172,
        "lng": -81.4922
    },
    {
        "state": "WA",
        "city": "Bothell East",
        "lat": 47.8064,
        "lng": -122.1844
    },
    {
        "state": "IL",
        "city": "Warrenville",
        "lat": 41.8209,
        "lng": -88.1857
    },
    {
        "state": "TX",
        "city": "Wells Branch",
        "lat": 30.4433,
        "lng": -97.679
    },
    {
        "state": "CA",
        "city": "Camp Pendleton South",
        "lat": 33.2329,
        "lng": -117.393
    },
    {
        "state": "HI",
        "city": "Waimalu",
        "lat": 21.3913,
        "lng": -157.9345
    },
    {
        "state": "OH",
        "city": "East Cleveland",
        "lat": 41.5317,
        "lng": -81.5794
    },
    {
        "state": "FL",
        "city": "Destin",
        "lat": 30.395,
        "lng": -86.4701
    },
    {
        "state": "HI",
        "city": "Royal Kunia",
        "lat": 21.4053,
        "lng": -158.0318
    },
    {
        "state": "VA",
        "city": "Huntington",
        "lat": 38.7916,
        "lng": -77.074
    },
    {
        "state": "IL",
        "city": "Wood Dale",
        "lat": 41.9668,
        "lng": -87.9808
    },
    {
        "state": "IL",
        "city": "Shiloh",
        "lat": 38.5534,
        "lng": -89.9161
    },
    {
        "state": "NY",
        "city": "Olean",
        "lat": 42.0819,
        "lng": -78.4321
    },
    {
        "state": "DE",
        "city": "Hockessin",
        "lat": 39.7837,
        "lng": -75.6815
    },
    {
        "state": "FL",
        "city": "Sunset",
        "lat": 25.706,
        "lng": -80.353
    },
    {
        "state": "NY",
        "city": "Beacon",
        "lat": 41.5036,
        "lng": -73.9655
    },
    {
        "state": "OH",
        "city": "New Franklin",
        "lat": 40.9525,
        "lng": -81.5838
    },
    {
        "state": "MD",
        "city": "Kettering",
        "lat": 38.8888,
        "lng": -76.7889
    },
    {
        "state": "WA",
        "city": "Artondale",
        "lat": 47.3021,
        "lng": -122.6406
    },
    {
        "state": "GA",
        "city": "Waycross",
        "lat": 31.2108,
        "lng": -82.3579
    },
    {
        "state": "FL",
        "city": "Bellair-Meadowbrook Terrace",
        "lat": 30.1796,
        "lng": -81.7375
    },
    {
        "state": "OH",
        "city": "Beachwood",
        "lat": 41.4759,
        "lng": -81.503
    },
    {
        "state": "MN",
        "city": "Worthington",
        "lat": 43.6281,
        "lng": -95.599
    },
    {
        "state": "NE",
        "city": "South Sioux City",
        "lat": 42.4627,
        "lng": -96.4125
    },
    {
        "state": "MN",
        "city": "Sauk Rapids",
        "lat": 45.5981,
        "lng": -94.1538
    },
    {
        "state": "FL",
        "city": "Olympia Heights",
        "lat": 25.724,
        "lng": -80.3388
    },
    {
        "state": "OH",
        "city": "Maumee",
        "lat": 41.5696,
        "lng": -83.6636
    },
    {
        "state": "WV",
        "city": "Teays Valley",
        "lat": 38.4482,
        "lng": -81.9246
    },
    {
        "state": "TN",
        "city": "Lakeland",
        "lat": 35.2585,
        "lng": -89.7308
    },
    {
        "state": "TX",
        "city": "Forest Hill",
        "lat": 32.6619,
        "lng": -97.2662
    },
    {
        "state": "IL",
        "city": "Channahon",
        "lat": 41.421,
        "lng": -88.2599
    },
    {
        "state": "GA",
        "city": "Braselton",
        "lat": 34.1087,
        "lng": -83.8127
    },
    {
        "state": "IN",
        "city": "Bedford",
        "lat": 38.8602,
        "lng": -86.4895
    },
    {
        "state": "FL",
        "city": "Villas",
        "lat": 26.5504,
        "lng": -81.8678
    },
    {
        "state": "OH",
        "city": "Bellefontaine",
        "lat": 40.3627,
        "lng": -83.763
    },
    {
        "state": "FL",
        "city": "Yulee",
        "lat": 30.635,
        "lng": -81.5678
    },
    {
        "state": "CA",
        "city": "Auburn",
        "lat": 38.895,
        "lng": -121.0777
    },
    {
        "state": "WA",
        "city": "Snoqualmie",
        "lat": 47.5293,
        "lng": -121.8412
    },
    {
        "state": "PA",
        "city": "Willow Grove",
        "lat": 40.1469,
        "lng": -75.1174
    },
    {
        "state": "TN",
        "city": "McMinnville",
        "lat": 35.6864,
        "lng": -85.7812
    },
    {
        "state": "SC",
        "city": "Cayce",
        "lat": 33.9459,
        "lng": -81.0429
    },
    {
        "state": "HI",
        "city": "Waianae",
        "lat": 21.4568,
        "lng": -158.1758
    },
    {
        "state": "PA",
        "city": "Ephrata",
        "lat": 40.1811,
        "lng": -76.1812
    },
    {
        "state": "IL",
        "city": "Hazel Crest",
        "lat": 41.5732,
        "lng": -87.6899
    },
    {
        "state": "NY",
        "city": "St. James",
        "lat": 40.8761,
        "lng": -73.1521
    },
    {
        "state": "FL",
        "city": "Miami Springs",
        "lat": 25.8195,
        "lng": -80.2894
    },
    {
        "state": "CA",
        "city": "North Fair Oaks",
        "lat": 37.4754,
        "lng": -122.2034
    },
    {
        "state": "NY",
        "city": "Rocky Point",
        "lat": 40.9357,
        "lng": -72.9364
    },
    {
        "state": "CA",
        "city": "Lamont",
        "lat": 35.2659,
        "lng": -118.9159
    },
    {
        "state": "MO",
        "city": "Moberly",
        "lat": 39.4179,
        "lng": -92.4364
    },
    {
        "state": "WI",
        "city": "Shorewood",
        "lat": 43.0913,
        "lng": -87.8864
    },
    {
        "state": "MI",
        "city": "Coldwater",
        "lat": 41.9465,
        "lng": -84.9989
    },
    {
        "state": "MD",
        "city": "Colesville",
        "lat": 39.073,
        "lng": -77.001
    },
    {
        "state": "AZ",
        "city": "Valencia West",
        "lat": 32.1355,
        "lng": -111.1123
    },
    {
        "state": "MO",
        "city": "Marshall",
        "lat": 39.1147,
        "lng": -93.201
    },
    {
        "state": "OK",
        "city": "Glenpool",
        "lat": 35.9488,
        "lng": -96.0052
    },
    {
        "state": "NY",
        "city": "Latham",
        "lat": 42.7427,
        "lng": -73.7497
    },
    {
        "state": "OH",
        "city": "Warrensville Heights",
        "lat": 41.4363,
        "lng": -81.5222
    },
    {
        "state": "UT",
        "city": "Smithfield",
        "lat": 41.8349,
        "lng": -111.8265
    },
    {
        "state": "IL",
        "city": "Glen Carbon",
        "lat": 38.758,
        "lng": -89.9822
    },
    {
        "state": "OH",
        "city": "University Heights",
        "lat": 41.4948,
        "lng": -81.535
    },
    {
        "state": "MN",
        "city": "Marshall",
        "lat": 44.4488,
        "lng": -95.7897
    },
    {
        "state": "IN",
        "city": "Speedway",
        "lat": 39.7937,
        "lng": -86.2481
    },
    {
        "state": "TX",
        "city": "Beeville",
        "lat": 28.4053,
        "lng": -97.749
    },
    {
        "state": "AR",
        "city": "Marion",
        "lat": 35.2035,
        "lng": -90.2059
    },
    {
        "state": "TX",
        "city": "Port Neches",
        "lat": 29.9765,
        "lng": -93.9459
    },
    {
        "state": "MD",
        "city": "California",
        "lat": 38.2969,
        "lng": -76.4949
    },
    {
        "state": "CA",
        "city": "Oak Park",
        "lat": 34.185,
        "lng": -118.7669
    },
    {
        "state": "OH",
        "city": "Brecksville",
        "lat": 41.3079,
        "lng": -81.6192
    },
    {
        "state": "TX",
        "city": "Lumberton",
        "lat": 30.2562,
        "lng": -94.207
    },
    {
        "state": "NY",
        "city": "Wyandanch",
        "lat": 40.7496,
        "lng": -73.3633
    },
    {
        "state": "NJ",
        "city": "New Providence",
        "lat": 40.6996,
        "lng": -74.4035
    },
    {
        "state": "SC",
        "city": "Beaufort",
        "lat": 32.4597,
        "lng": -80.7235
    },
    {
        "state": "MD",
        "city": "New Carrollton",
        "lat": 38.9656,
        "lng": -76.8775
    },
    {
        "state": "FL",
        "city": "Gonzalez",
        "lat": 30.5822,
        "lng": -87.2906
    },
    {
        "state": "NY",
        "city": "East Islip",
        "lat": 40.7257,
        "lng": -73.1869
    },
    {
        "state": "KY",
        "city": "Bardstown",
        "lat": 37.8175,
        "lng": -85.455
    },
    {
        "state": "VA",
        "city": "Newington",
        "lat": 38.7358,
        "lng": -77.1993
    },
    {
        "state": "TX",
        "city": "Seabrook",
        "lat": 29.5751,
        "lng": -95.0235
    },
    {
        "state": "IL",
        "city": "Western Springs",
        "lat": 41.8023,
        "lng": -87.9006
    },
    {
        "state": "NJ",
        "city": "Echelon",
        "lat": 39.8482,
        "lng": -74.9957
    },
    {
        "state": "NY",
        "city": "Nesconset",
        "lat": 40.8467,
        "lng": -73.1522
    },
    {
        "state": "WI",
        "city": "Plover",
        "lat": 44.4615,
        "lng": -89.5382
    },
    {
        "state": "NY",
        "city": "Endicott",
        "lat": 42.098,
        "lng": -76.0639
    },
    {
        "state": "VA",
        "city": "Martinsville",
        "lat": 36.6826,
        "lng": -79.8636
    },
    {
        "state": "MD",
        "city": "Lexington Park",
        "lat": 38.2528,
        "lng": -76.4424
    },
    {
        "state": "OH",
        "city": "Bexley",
        "lat": 39.965,
        "lng": -82.9343
    },
    {
        "state": "WV",
        "city": "South Charleston",
        "lat": 38.3426,
        "lng": -81.7155
    },
    {
        "state": "OH",
        "city": "Bridgetown",
        "lat": 39.1552,
        "lng": -84.6359
    },
    {
        "state": "NJ",
        "city": "Eatontown",
        "lat": 40.2913,
        "lng": -74.0558
    },
    {
        "state": "FL",
        "city": "Conway",
        "lat": 28.4968,
        "lng": -81.3316
    },
    {
        "state": "NC",
        "city": "Lewisville",
        "lat": 36.103,
        "lng": -80.4166
    },
    {
        "state": "GA",
        "city": "Jefferson",
        "lat": 34.1373,
        "lng": -83.6021
    },
    {
        "state": "CA",
        "city": "Bonita",
        "lat": 32.6651,
        "lng": -117.0296
    },
    {
        "state": "CA",
        "city": "King City",
        "lat": 36.2164,
        "lng": -121.133
    },
    {
        "state": "CA",
        "city": "Avocado Heights",
        "lat": 34.0391,
        "lng": -117.997
    },
    {
        "state": "CO",
        "city": "Sterling",
        "lat": 40.6205,
        "lng": -103.1925
    },
    {
        "state": "WA",
        "city": "Lake Forest Park",
        "lat": 47.7574,
        "lng": -122.2864
    },
    {
        "state": "CO",
        "city": "Fruita",
        "lat": 39.1548,
        "lng": -108.7305
    },
    {
        "state": "NM",
        "city": "Los Alamos",
        "lat": 35.8927,
        "lng": -106.2862
    },
    {
        "state": "SC",
        "city": "Moncks Corner",
        "lat": 33.173,
        "lng": -80.0107
    },
    {
        "state": "AL",
        "city": "Irondale",
        "lat": 33.5439,
        "lng": -86.6606
    },
    {
        "state": "FL",
        "city": "Callaway",
        "lat": 30.1349,
        "lng": -85.5568
    },
    {
        "state": "WA",
        "city": "Fort Lewis",
        "lat": 47.0955,
        "lng": -122.5674
    },
    {
        "state": "OH",
        "city": "Englewood",
        "lat": 39.8643,
        "lng": -84.307
    },
    {
        "state": "NJ",
        "city": "Franklin Park",
        "lat": 40.4439,
        "lng": -74.5431
    },
    {
        "state": "CA",
        "city": "Avenal",
        "lat": 36.0311,
        "lng": -120.1162
    },
    {
        "state": "MI",
        "city": "Sault Ste. Marie",
        "lat": 46.4817,
        "lng": -84.3723
    },
    {
        "state": "TX",
        "city": "Azle",
        "lat": 32.8955,
        "lng": -97.5379
    },
    {
        "state": "TX",
        "city": "Kilgore",
        "lat": 32.398,
        "lng": -94.8602
    },
    {
        "state": "IN",
        "city": "Connersville",
        "lat": 39.6582,
        "lng": -85.141
    },
    {
        "state": "MD",
        "city": "Joppatowne",
        "lat": 39.4181,
        "lng": -76.3516
    },
    {
        "state": "PA",
        "city": "Butler",
        "lat": 40.8616,
        "lng": -79.8962
    },
    {
        "state": "PA",
        "city": "Pottsville",
        "lat": 40.6798,
        "lng": -76.2091
    },
    {
        "state": "FL",
        "city": "Palmetto",
        "lat": 27.5251,
        "lng": -82.5749
    },
    {
        "state": "FL",
        "city": "Atlantic Beach",
        "lat": 30.3375,
        "lng": -81.4127
    },
    {
        "state": "IL",
        "city": "Canton",
        "lat": 40.5632,
        "lng": -90.0409
    },
    {
        "state": "MD",
        "city": "Urbana",
        "lat": 39.3274,
        "lng": -77.3423
    },
    {
        "state": "IL",
        "city": "Lincoln",
        "lat": 40.1508,
        "lng": -89.372
    },
    {
        "state": "OH",
        "city": "Marietta",
        "lat": 39.4241,
        "lng": -81.4465
    },
    {
        "state": "LA",
        "city": "River Ridge",
        "lat": 29.9593,
        "lng": -90.2202
    },
    {
        "state": "PA",
        "city": "Washington",
        "lat": 40.1741,
        "lng": -80.2465
    },
    {
        "state": "FL",
        "city": "Jupiter Farms",
        "lat": 26.9222,
        "lng": -80.2189
    },
    {
        "state": "IN",
        "city": "Lake Station",
        "lat": 41.5729,
        "lng": -87.2599
    },
    {
        "state": "PA",
        "city": "Carnot-Moon",
        "lat": 40.5187,
        "lng": -80.2178
    },
    {
        "state": "TX",
        "city": "Andrews",
        "lat": 32.3207,
        "lng": -102.552
    },
    {
        "state": "TX",
        "city": "Henderson",
        "lat": 32.1576,
        "lng": -94.796
    },
    {
        "state": "GA",
        "city": "Mountain Park",
        "lat": 33.8458,
        "lng": -84.1314
    },
    {
        "state": "IL",
        "city": "La Grange Park",
        "lat": 41.8308,
        "lng": -87.8723
    },
    {
        "state": "OH",
        "city": "Blue Ash",
        "lat": 39.248,
        "lng": -84.3827
    },
    {
        "state": "LA",
        "city": "Broussard",
        "lat": 30.1396,
        "lng": -91.954
    },
    {
        "state": "PA",
        "city": "Kingston",
        "lat": 41.2652,
        "lng": -75.8876
    },
    {
        "state": "IN",
        "city": "Auburn",
        "lat": 41.3666,
        "lng": -85.0559
    },
    {
        "state": "PA",
        "city": "Coatesville",
        "lat": 39.9849,
        "lng": -75.82
    },
    {
        "state": "TN",
        "city": "White House",
        "lat": 36.4648,
        "lng": -86.6666
    },
    {
        "state": "WA",
        "city": "Woodinville",
        "lat": 47.757,
        "lng": -122.1477
    },
    {
        "state": "VA",
        "city": "Mount Vernon",
        "lat": 38.714,
        "lng": -77.1043
    },
    {
        "state": "FL",
        "city": "Elfers",
        "lat": 28.214,
        "lng": -82.723
    },
    {
        "state": "OH",
        "city": "Clayton",
        "lat": 39.8689,
        "lng": -84.3292
    },
    {
        "state": "MN",
        "city": "Rogers",
        "lat": 45.1865,
        "lng": -93.5783
    },
    {
        "state": "AR",
        "city": "Blytheville",
        "lat": 35.9321,
        "lng": -89.9051
    },
    {
        "state": "IL",
        "city": "Lincolnwood",
        "lat": 42.0054,
        "lng": -87.733
    },
    {
        "state": "FL",
        "city": "Naranja",
        "lat": 25.5164,
        "lng": -80.4222
    },
    {
        "state": "FL",
        "city": "Orange City",
        "lat": 28.9348,
        "lng": -81.2881
    },
    {
        "state": "VA",
        "city": "Kings Park West",
        "lat": 38.8151,
        "lng": -77.296
    },
    {
        "state": "CO",
        "city": "Steamboat Springs",
        "lat": 40.4777,
        "lng": -106.8243
    },
    {
        "state": "TX",
        "city": "Trophy Club",
        "lat": 33.004,
        "lng": -97.1899
    },
    {
        "state": "AZ",
        "city": "New Kingman-Butler",
        "lat": 35.2645,
        "lng": -114.0091
    },
    {
        "state": "OH",
        "city": "Loveland",
        "lat": 39.2677,
        "lng": -84.2733
    },
    {
        "state": "OR",
        "city": "Cornelius",
        "lat": 45.5188,
        "lng": -123.051
    },
    {
        "state": "AL",
        "city": "Moody",
        "lat": 33.5986,
        "lng": -86.4963
    },
    {
        "state": "WI",
        "city": "Glendale",
        "lat": 43.1287,
        "lng": -87.9277
    },
    {
        "state": "SC",
        "city": "Orangeburg",
        "lat": 33.4928,
        "lng": -80.8671
    },
    {
        "state": "CA",
        "city": "Palos Verdes Estates",
        "lat": 33.7872,
        "lng": -118.3973
    },
    {
        "state": "PR",
        "city": "Dorado",
        "lat": 18.4657,
        "lng": -66.2726
    },
    {
        "state": "NM",
        "city": "Las Vegas",
        "lat": 35.6011,
        "lng": -105.2206
    },
    {
        "state": "FL",
        "city": "Cheval",
        "lat": 28.1459,
        "lng": -82.5184
    },
    {
        "state": "CA",
        "city": "Carpinteria",
        "lat": 34.3962,
        "lng": -119.5118
    },
    {
        "state": "TN",
        "city": "Portland",
        "lat": 36.5921,
        "lng": -86.5239
    },
    {
        "state": "NC",
        "city": "Weddington",
        "lat": 35.0228,
        "lng": -80.7383
    },
    {
        "state": "NC",
        "city": "Newton",
        "lat": 35.663,
        "lng": -81.2335
    },
    {
        "state": "NJ",
        "city": "Ridgefield Park",
        "lat": 40.8543,
        "lng": -74.0201
    },
    {
        "state": "AR",
        "city": "Harrison",
        "lat": 36.2438,
        "lng": -93.1198
    },
    {
        "state": "AL",
        "city": "Pell City",
        "lat": 33.561,
        "lng": -86.2669
    },
    {
        "state": "CO",
        "city": "Superior",
        "lat": 39.934,
        "lng": -105.1588
    },
    {
        "state": "PA",
        "city": "Sharon",
        "lat": 41.234,
        "lng": -80.4998
    },
    {
        "state": "OH",
        "city": "Trenton",
        "lat": 39.4792,
        "lng": -84.462
    },
    {
        "state": "FL",
        "city": "South Daytona",
        "lat": 29.1657,
        "lng": -81.0055
    },
    {
        "state": "AZ",
        "city": "Chino Valley",
        "lat": 34.7594,
        "lng": -112.412
    },
    {
        "state": "OH",
        "city": "Dover",
        "lat": 40.5304,
        "lng": -81.4806
    },
    {
        "state": "CA",
        "city": "Grand Terrace",
        "lat": 34.0312,
        "lng": -117.3132
    },
    {
        "state": "MN",
        "city": "Mounds View",
        "lat": 45.1071,
        "lng": -93.2076
    },
    {
        "state": "CA",
        "city": "Lake Los Angeles",
        "lat": 34.6097,
        "lng": -117.8339
    },
    {
        "state": "OR",
        "city": "La Grande",
        "lat": 45.3242,
        "lng": -118.0865
    },
    {
        "state": "FL",
        "city": "North Palm Beach",
        "lat": 26.8217,
        "lng": -80.0576
    },
    {
        "state": "TN",
        "city": "Soddy-Daisy",
        "lat": 35.2571,
        "lng": -85.1739
    },
    {
        "state": "WI",
        "city": "Stoughton",
        "lat": 42.9237,
        "lng": -89.2225
    },
    {
        "state": "OH",
        "city": "Harrison",
        "lat": 39.2584,
        "lng": -84.7868
    },
    {
        "state": "MI",
        "city": "Ionia",
        "lat": 42.9773,
        "lng": -85.0727
    },
    {
        "state": "OR",
        "city": "Oatfield",
        "lat": 45.4125,
        "lng": -122.594
    },
    {
        "state": "NJ",
        "city": "Cherry Hill Mall",
        "lat": 39.9384,
        "lng": -75.0117
    },
    {
        "state": "OH",
        "city": "West Carrollton",
        "lat": 39.6701,
        "lng": -84.2542
    },
    {
        "state": "MD",
        "city": "Cambridge",
        "lat": 38.5515,
        "lng": -76.0787
    },
    {
        "state": "IA",
        "city": "Norwalk",
        "lat": 41.4895,
        "lng": -93.6913
    },
    {
        "state": "FL",
        "city": "On Top of the World Designated Place",
        "lat": 29.1058,
        "lng": -82.2866
    },
    {
        "state": "OH",
        "city": "Bedford",
        "lat": 41.3919,
        "lng": -81.536
    },
    {
        "state": "HI",
        "city": "Hawaiian Paradise Park",
        "lat": 19.5828,
        "lng": -154.9695
    },
    {
        "state": "FL",
        "city": "Fernandina Beach",
        "lat": 30.6571,
        "lng": -81.4511
    },
    {
        "state": "NH",
        "city": "Claremont",
        "lat": 43.379,
        "lng": -72.3368
    },
    {
        "state": "AR",
        "city": "Forrest City",
        "lat": 35.0135,
        "lng": -90.7931
    },
    {
        "state": "PA",
        "city": "Montgomeryville",
        "lat": 40.2502,
        "lng": -75.2405
    },
    {
        "state": "MO",
        "city": "Webb City",
        "lat": 37.1412,
        "lng": -94.4676
    },
    {
        "state": "VA",
        "city": "Timberlake",
        "lat": 37.3167,
        "lng": -79.2481
    },
    {
        "state": "MO",
        "city": "Jennings",
        "lat": 38.7231,
        "lng": -90.2644
    },
    {
        "state": "OK",
        "city": "Miami",
        "lat": 36.8878,
        "lng": -94.8711
    },
    {
        "state": "MN",
        "city": "Waconia",
        "lat": 44.8422,
        "lng": -93.7896
    },
    {
        "state": "NY",
        "city": "Ridge",
        "lat": 40.9068,
        "lng": -72.8816
    },
    {
        "state": "LA",
        "city": "West Monroe",
        "lat": 32.512,
        "lng": -92.1513
    },
    {
        "state": "MD",
        "city": "Green Valley",
        "lat": 39.3414,
        "lng": -77.24
    },
    {
        "state": "MI",
        "city": "Rochester",
        "lat": 42.6866,
        "lng": -83.1198
    },
    {
        "state": "CA",
        "city": "Larkspur",
        "lat": 37.9393,
        "lng": -122.5312
    },
    {
        "state": "MO",
        "city": "Troy",
        "lat": 38.9708,
        "lng": -90.9714
    },
    {
        "state": "GA",
        "city": "Vinings",
        "lat": 33.8608,
        "lng": -84.4686
    },
    {
        "state": "CA",
        "city": "Solana Beach",
        "lat": 32.9943,
        "lng": -117.2574
    },
    {
        "state": "UT",
        "city": "Grantsville",
        "lat": 40.6148,
        "lng": -112.4777
    },
    {
        "state": "MA",
        "city": "North Adams",
        "lat": 42.6844,
        "lng": -73.1166
    },
    {
        "state": "WA",
        "city": "Newcastle",
        "lat": 47.5304,
        "lng": -122.1633
    },
    {
        "state": "PA",
        "city": "Meadville",
        "lat": 41.6476,
        "lng": -80.1468
    },
    {
        "state": "MS",
        "city": "Byram",
        "lat": 32.189,
        "lng": -90.2861
    },
    {
        "state": "MS",
        "city": "D'Iberville",
        "lat": 30.4709,
        "lng": -88.9011
    },
    {
        "state": "FL",
        "city": "Holly Hill",
        "lat": 29.2442,
        "lng": -81.0465
    },
    {
        "state": "MO",
        "city": "St. Ann",
        "lat": 38.7266,
        "lng": -90.3872
    },
    {
        "state": "HI",
        "city": "Lahaina",
        "lat": 20.8848,
        "lng": -156.6618
    },
    {
        "state": "OH",
        "city": "Fostoria",
        "lat": 41.16,
        "lng": -83.4121
    },
    {
        "state": "MO",
        "city": "Dardenne Prairie",
        "lat": 38.7565,
        "lng": -90.7319
    },
    {
        "state": "KS",
        "city": "El Dorado",
        "lat": 37.821,
        "lng": -96.8613
    },
    {
        "state": "TX",
        "city": "Athens",
        "lat": 32.2041,
        "lng": -95.8321
    },
    {
        "state": "WI",
        "city": "Suamico",
        "lat": 44.6354,
        "lng": -88.0683
    },
    {
        "state": "AR",
        "city": "Mountain Home",
        "lat": 36.3351,
        "lng": -92.384
    },
    {
        "state": "WI",
        "city": "Harrison",
        "lat": 44.1935,
        "lng": -88.2941
    },
    {
        "state": "DE",
        "city": "Smyrna",
        "lat": 39.2935,
        "lng": -75.6083
    },
    {
        "state": "OH",
        "city": "Finneytown",
        "lat": 39.2159,
        "lng": -84.5144
    },
    {
        "state": "NJ",
        "city": "Red Bank",
        "lat": 40.348,
        "lng": -74.0672
    },
    {
        "state": "MI",
        "city": "Woodhaven",
        "lat": 42.132,
        "lng": -83.2374
    },
    {
        "state": "MN",
        "city": "Vadnais Heights",
        "lat": 45.057,
        "lng": -93.0748
    },
    {
        "state": "NY",
        "city": "Salisbury",
        "lat": 40.7454,
        "lng": -73.5604
    },
    {
        "state": "CA",
        "city": "Tehachapi",
        "lat": 35.1276,
        "lng": -118.4744
    },
    {
        "state": "WA",
        "city": "Cheney",
        "lat": 47.4901,
        "lng": -117.579
    },
    {
        "state": "FL",
        "city": "Florida City",
        "lat": 25.4418,
        "lng": -80.4685
    },
    {
        "state": "CA",
        "city": "Emeryville",
        "lat": 37.8382,
        "lng": -122.2932
    },
    {
        "state": "VA",
        "city": "Lansdowne",
        "lat": 39.0844,
        "lng": -77.4839
    },
    {
        "state": "PA",
        "city": "Bloomsburg",
        "lat": 41.0027,
        "lng": -76.4561
    },
    {
        "state": "VA",
        "city": "Sugarland Run",
        "lat": 39.0309,
        "lng": -77.3762
    },
    {
        "state": "SC",
        "city": "Tega Cay",
        "lat": 35.039,
        "lng": -81.0111
    },
    {
        "state": "AZ",
        "city": "Tucson Estates",
        "lat": 32.1792,
        "lng": -111.1266
    },
    {
        "state": "MD",
        "city": "Overlea",
        "lat": 39.3642,
        "lng": -76.5175
    },
    {
        "state": "TX",
        "city": "Santa Fe",
        "lat": 29.3889,
        "lng": -95.1003
    },
    {
        "state": "NJ",
        "city": "Florham Park",
        "lat": 40.7773,
        "lng": -74.3953
    },
    {
        "state": "MO",
        "city": "Festus",
        "lat": 38.2194,
        "lng": -90.4097
    },
    {
        "state": "OH",
        "city": "Greenville",
        "lat": 40.1043,
        "lng": -84.6209
    },
    {
        "state": "CA",
        "city": "San Anselmo",
        "lat": 37.9821,
        "lng": -122.5699
    },
    {
        "state": "CA",
        "city": "Grover Beach",
        "lat": 35.1204,
        "lng": -120.6197
    },
    {
        "state": "CA",
        "city": "Big Bear City",
        "lat": 34.2536,
        "lng": -116.7903
    },
    {
        "state": "AL",
        "city": "Eufaula",
        "lat": 31.9102,
        "lng": -85.1505
    },
    {
        "state": "MD",
        "city": "Accokeek",
        "lat": 38.6745,
        "lng": -77.0023
    },
    {
        "state": "OK",
        "city": "Guymon",
        "lat": 36.6903,
        "lng": -101.4774
    },
    {
        "state": "OH",
        "city": "Amherst",
        "lat": 41.4022,
        "lng": -82.2303
    },
    {
        "state": "NJ",
        "city": "Oakland",
        "lat": 41.0313,
        "lng": -74.2408
    },
    {
        "state": "IL",
        "city": "Richton Park",
        "lat": 41.4816,
        "lng": -87.7387
    },
    {
        "state": "MD",
        "city": "Annapolis Neck",
        "lat": 38.9409,
        "lng": -76.4997
    },
    {
        "state": "PA",
        "city": "St. Marys",
        "lat": 41.4574,
        "lng": -78.5342
    },
    {
        "state": "IL",
        "city": "Northlake",
        "lat": 41.9142,
        "lng": -87.9054
    },
    {
        "state": "NY",
        "city": "Manorville",
        "lat": 40.8574,
        "lng": -72.7915
    },
    {
        "state": "CA",
        "city": "Marysville",
        "lat": 39.1518,
        "lng": -121.5835
    },
    {
        "state": "AZ",
        "city": "Paradise Valley",
        "lat": 33.5434,
        "lng": -111.9595
    },
    {
        "state": "MO",
        "city": "Neosho",
        "lat": 36.8437,
        "lng": -94.3758
    },
    {
        "state": "NY",
        "city": "Geneva",
        "lat": 42.8645,
        "lng": -76.9826
    },
    {
        "state": "OH",
        "city": "Wilmington",
        "lat": 39.4362,
        "lng": -83.8141
    },
    {
        "state": "NY",
        "city": "Dunkirk",
        "lat": 42.4801,
        "lng": -79.3324
    },
    {
        "state": "NJ",
        "city": "Fords",
        "lat": 40.5359,
        "lng": -74.3126
    },
    {
        "state": "UT",
        "city": "Vineyard",
        "lat": 40.3059,
        "lng": -111.7545
    },
    {
        "state": "OH",
        "city": "Wickliffe",
        "lat": 41.6072,
        "lng": -81.469
    },
    {
        "state": "WA",
        "city": "Kelso",
        "lat": 46.1236,
        "lng": -122.8909
    },
    {
        "state": "FL",
        "city": "Pasadena Hills",
        "lat": 28.2881,
        "lng": -82.238
    },
    {
        "state": "SC",
        "city": "Gaffney",
        "lat": 35.0743,
        "lng": -81.6552
    },
    {
        "state": "MO",
        "city": "Branson",
        "lat": 36.6509,
        "lng": -93.2636
    },
    {
        "state": "MO",
        "city": "Fulton",
        "lat": 38.8551,
        "lng": -91.951
    },
    {
        "state": "VA",
        "city": "Newington Forest",
        "lat": 38.737,
        "lng": -77.2339
    },
    {
        "state": "NJ",
        "city": "Robertsville",
        "lat": 40.3395,
        "lng": -74.2939
    },
    {
        "state": "NJ",
        "city": "Holiday City-Berkeley",
        "lat": 39.9639,
        "lng": -74.2787
    },
    {
        "state": "MI",
        "city": "Melvindale",
        "lat": 42.2802,
        "lng": -83.1782
    },
    {
        "state": "NM",
        "city": "Artesia",
        "lat": 32.8497,
        "lng": -104.4268
    },
    {
        "state": "TX",
        "city": "Tomball",
        "lat": 30.0951,
        "lng": -95.6194
    },
    {
        "state": "WA",
        "city": "Enumclaw",
        "lat": 47.2018,
        "lng": -121.9897
    },
    {
        "state": "KS",
        "city": "Ottawa",
        "lat": 38.5996,
        "lng": -95.2636
    },
    {
        "state": "TX",
        "city": "Levelland",
        "lat": 33.5806,
        "lng": -102.3635
    },
    {
        "state": "IL",
        "city": "Winnetka",
        "lat": 42.1064,
        "lng": -87.7421
    },
    {
        "state": "IL",
        "city": "Minooka",
        "lat": 41.4507,
        "lng": -88.2791
    },
    {
        "state": "WA",
        "city": "Lakeland South",
        "lat": 47.2786,
        "lng": -122.2826
    },
    {
        "state": "CA",
        "city": "Mendota",
        "lat": 36.7555,
        "lng": -120.3776
    },
    {
        "state": "MS",
        "city": "Grenada",
        "lat": 33.7816,
        "lng": -89.813
    },
    {
        "state": "WI",
        "city": "Brown Deer",
        "lat": 43.1743,
        "lng": -87.975
    },
    {
        "state": "OR",
        "city": "Sandy",
        "lat": 45.3988,
        "lng": -122.2697
    },
    {
        "state": "CA",
        "city": "Lindsay",
        "lat": 36.2082,
        "lng": -119.0897
    },
    {
        "state": "FL",
        "city": "Jensen Beach",
        "lat": 27.2437,
        "lng": -80.2423
    },
    {
        "state": "MN",
        "city": "Cloquet",
        "lat": 46.7221,
        "lng": -92.4923
    },
    {
        "state": "FL",
        "city": "Viera East",
        "lat": 28.2613,
        "lng": -80.7149
    },
    {
        "state": "IL",
        "city": "Rantoul",
        "lat": 40.3031,
        "lng": -88.1549
    },
    {
        "state": "VA",
        "city": "Cascades",
        "lat": 39.0464,
        "lng": -77.3874
    },
    {
        "state": "WI",
        "city": "Baraboo",
        "lat": 43.4695,
        "lng": -89.7376
    },
    {
        "state": "MD",
        "city": "Brock Hall",
        "lat": 38.8604,
        "lng": -76.7459
    },
    {
        "state": "CA",
        "city": "Fortuna",
        "lat": 40.5862,
        "lng": -124.1419
    },
    {
        "state": "NC",
        "city": "Lake Norman of Catawba",
        "lat": 35.5995,
        "lng": -80.984
    },
    {
        "state": "IL",
        "city": "Justice",
        "lat": 41.7495,
        "lng": -87.8345
    },
    {
        "state": "WI",
        "city": "Fort Atkinson",
        "lat": 42.9253,
        "lng": -88.8442
    },
    {
        "state": "FL",
        "city": "Asbury Lake",
        "lat": 30.0472,
        "lng": -81.7853
    },
    {
        "state": "TX",
        "city": "Fort Bliss",
        "lat": 31.8396,
        "lng": -106.3747
    },
    {
        "state": "TX",
        "city": "Borger",
        "lat": 35.6598,
        "lng": -101.4012
    },
    {
        "state": "NY",
        "city": "Stony Brook",
        "lat": 40.9061,
        "lng": -73.1278
    },
    {
        "state": "FL",
        "city": "Sarasota Springs",
        "lat": 27.3087,
        "lng": -82.4746
    },
    {
        "state": "FL",
        "city": "Goldenrod",
        "lat": 28.6114,
        "lng": -81.2916
    },
    {
        "state": "GA",
        "city": "Georgetown",
        "lat": 31.9849,
        "lng": -81.226
    },
    {
        "state": "CA",
        "city": "Kingsburg",
        "lat": 36.5244,
        "lng": -119.5602
    },
    {
        "state": "IA",
        "city": "Boone",
        "lat": 42.0531,
        "lng": -93.877
    },
    {
        "state": "ID",
        "city": "Jerome",
        "lat": 42.7179,
        "lng": -114.5159
    },
    {
        "state": "VA",
        "city": "Poquoson",
        "lat": 37.1318,
        "lng": -76.3568
    },
    {
        "state": "TX",
        "city": "Robinson",
        "lat": 31.4501,
        "lng": -97.1201
    },
    {
        "state": "WA",
        "city": "Sedro-Woolley",
        "lat": 48.5112,
        "lng": -122.2321
    },
    {
        "state": "PR",
        "city": "Canovanas",
        "lat": 18.3693,
        "lng": -65.9009
    },
    {
        "state": "NJ",
        "city": "Somerville",
        "lat": 40.5696,
        "lng": -74.6092
    },
    {
        "state": "SC",
        "city": "Parker",
        "lat": 34.8513,
        "lng": -82.4512
    },
    {
        "state": "AL",
        "city": "Sylacauga",
        "lat": 33.178,
        "lng": -86.2605
    },
    {
        "state": "MN",
        "city": "North St. Paul",
        "lat": 45.0137,
        "lng": -92.9995
    },
    {
        "state": "LA",
        "city": "Baker",
        "lat": 30.5832,
        "lng": -91.1582
    },
    {
        "state": "FL",
        "city": "Highland City",
        "lat": 27.9633,
        "lng": -81.8781
    },
    {
        "state": "WI",
        "city": "Port Washington",
        "lat": 43.3846,
        "lng": -87.8855
    },
    {
        "state": "WA",
        "city": "Prairie Ridge",
        "lat": 47.1438,
        "lng": -122.1408
    },
    {
        "state": "CA",
        "city": "San Marino",
        "lat": 34.1224,
        "lng": -118.1132
    },
    {
        "state": "NJ",
        "city": "Upper Montclair",
        "lat": 40.8433,
        "lng": -74.2006
    },
    {
        "state": "FL",
        "city": "Wimauma",
        "lat": 27.6964,
        "lng": -82.3034
    },
    {
        "state": "MI",
        "city": "Escanaba",
        "lat": 45.7477,
        "lng": -87.09
    },
    {
        "state": "FL",
        "city": "Mango",
        "lat": 27.9914,
        "lng": -82.307
    },
    {
        "state": "WA",
        "city": "Edgewood",
        "lat": 47.2309,
        "lng": -122.2832
    },
    {
        "state": "MI",
        "city": "Riverview",
        "lat": 42.1723,
        "lng": -83.1946
    },
    {
        "state": "OH",
        "city": "Amelia",
        "lat": 39.0269,
        "lng": -84.2218
    },
    {
        "state": "AK",
        "city": "College",
        "lat": 64.8694,
        "lng": -147.8216
    },
    {
        "state": "TN",
        "city": "Lewisburg",
        "lat": 35.451,
        "lng": -86.7901
    },
    {
        "state": "CT",
        "city": "Derby",
        "lat": 41.3265,
        "lng": -73.0833
    },
    {
        "state": "OH",
        "city": "Conneaut",
        "lat": 41.9275,
        "lng": -80.5685
    },
    {
        "state": "HI",
        "city": "Nanakuli",
        "lat": 21.3892,
        "lng": -158.1445
    },
    {
        "state": "NJ",
        "city": "Martinsville",
        "lat": 40.603,
        "lng": -74.5751
    },
    {
        "state": "LA",
        "city": "Gonzales",
        "lat": 30.2132,
        "lng": -90.9234
    },
    {
        "state": "ID",
        "city": "Blackfoot",
        "lat": 43.194,
        "lng": -112.3454
    },
    {
        "state": "IL",
        "city": "Herrin",
        "lat": 37.7983,
        "lng": -89.0305
    },
    {
        "state": "NY",
        "city": "Patchogue",
        "lat": 40.7621,
        "lng": -73.0185
    },
    {
        "state": "MO",
        "city": "Union",
        "lat": 38.4399,
        "lng": -90.9927
    },
    {
        "state": "TN",
        "city": "Manchester",
        "lat": 35.463,
        "lng": -86.0774
    },
    {
        "state": "MO",
        "city": "Crestwood",
        "lat": 38.5569,
        "lng": -90.3783
    },
    {
        "state": "AZ",
        "city": "Cottonwood",
        "lat": 34.7195,
        "lng": -112.0016
    },
    {
        "state": "FL",
        "city": "Cypress Lake",
        "lat": 26.5392,
        "lng": -81.8999
    },
    {
        "state": "MD",
        "city": "Ocean Pines",
        "lat": 38.3851,
        "lng": -75.1487
    },
    {
        "state": "PR",
        "city": "Rio Grande",
        "lat": 18.3789,
        "lng": -65.8388
    },
    {
        "state": "FL",
        "city": "Lake City",
        "lat": 30.1901,
        "lng": -82.6471
    },
    {
        "state": "ID",
        "city": "Garden City",
        "lat": 43.6526,
        "lng": -116.2743
    },
    {
        "state": "IN",
        "city": "Madison",
        "lat": 38.7581,
        "lng": -85.3973
    },
    {
        "state": "TX",
        "city": "Webster",
        "lat": 29.5317,
        "lng": -95.1188
    },
    {
        "state": "PA",
        "city": "Jefferson Hills",
        "lat": 40.2926,
        "lng": -79.9329
    },
    {
        "state": "MS",
        "city": "McComb",
        "lat": 31.2442,
        "lng": -90.4716
    },
    {
        "state": "AL",
        "city": "Leeds",
        "lat": 33.5436,
        "lng": -86.5639
    },
    {
        "state": "IL",
        "city": "Streator",
        "lat": 41.1245,
        "lng": -88.8297
    },
    {
        "state": "CA",
        "city": "Home Gardens",
        "lat": 33.8783,
        "lng": -117.5116
    },
    {
        "state": "FL",
        "city": "Doctor Phillips",
        "lat": 28.4474,
        "lng": -81.4914
    },
    {
        "state": "VA",
        "city": "Fairfax Station",
        "lat": 38.7942,
        "lng": -77.3358
    },
    {
        "state": "CA",
        "city": "Newman",
        "lat": 37.3156,
        "lng": -121.0212
    },
    {
        "state": "SD",
        "city": "Spearfish",
        "lat": 44.4909,
        "lng": -103.8155
    },
    {
        "state": "CA",
        "city": "Commerce",
        "lat": 33.9963,
        "lng": -118.1519
    },
    {
        "state": "MO",
        "city": "West Plains",
        "lat": 36.7377,
        "lng": -91.868
    },
    {
        "state": "IL",
        "city": "Effingham",
        "lat": 39.1205,
        "lng": -88.5509
    },
    {
        "state": "TX",
        "city": "El Campo",
        "lat": 29.2,
        "lng": -96.2723
    },
    {
        "state": "CA",
        "city": "Scotts Valley",
        "lat": 37.0555,
        "lng": -122.0118
    },
    {
        "state": "NE",
        "city": "Beatrice",
        "lat": 40.2736,
        "lng": -96.7455
    },
    {
        "state": "WI",
        "city": "Cedarburg",
        "lat": 43.299,
        "lng": -87.9887
    },
    {
        "state": "CA",
        "city": "Diamond Springs",
        "lat": 38.692,
        "lng": -120.8391
    },
    {
        "state": "CA",
        "city": "Tamalpais-Homestead Valley",
        "lat": 37.8793,
        "lng": -122.5382
    },
    {
        "state": "WA",
        "city": "Lake Tapps",
        "lat": 47.2307,
        "lng": -122.1695
    },
    {
        "state": "NY",
        "city": "North Merrick",
        "lat": 40.6871,
        "lng": -73.5615
    },
    {
        "state": "IL",
        "city": "Kewanee",
        "lat": 41.2399,
        "lng": -89.9264
    },
    {
        "state": "MS",
        "city": "Moss Point",
        "lat": 30.4241,
        "lng": -88.5289
    },
    {
        "state": "PA",
        "city": "New Kensington",
        "lat": 40.5712,
        "lng": -79.7523
    },
    {
        "state": "WI",
        "city": "Grafton",
        "lat": 43.3204,
        "lng": -87.948
    },
    {
        "state": "LA",
        "city": "Claiborne",
        "lat": 32.5379,
        "lng": -92.1981
    },
    {
        "state": "OK",
        "city": "Choctaw",
        "lat": 35.4802,
        "lng": -97.2666
    },
    {
        "state": "VA",
        "city": "Dranesville",
        "lat": 38.9955,
        "lng": -77.3693
    },
    {
        "state": "AZ",
        "city": "Camp Verde",
        "lat": 34.569,
        "lng": -111.856
    },
    {
        "state": "CA",
        "city": "El Sobrante",
        "lat": 33.8724,
        "lng": -117.4624
    },
    {
        "state": "OH",
        "city": "Macedonia",
        "lat": 41.3147,
        "lng": -81.4989
    },
    {
        "state": "VA",
        "city": "Lakeside",
        "lat": 37.6132,
        "lng": -77.4768
    },
    {
        "state": "MD",
        "city": "Riviera Beach",
        "lat": 39.1623,
        "lng": -76.5257
    },
    {
        "state": "HI",
        "city": "Maili",
        "lat": 21.4133,
        "lng": -158.1701
    },
    {
        "state": "VA",
        "city": "Wyndham",
        "lat": 37.6924,
        "lng": -77.6123
    },
    {
        "state": "MI",
        "city": "New Baltimore",
        "lat": 42.6904,
        "lng": -82.7398
    },
    {
        "state": "MD",
        "city": "Mitchellville",
        "lat": 38.9358,
        "lng": -76.8146
    },
    {
        "state": "TN",
        "city": "Crossville",
        "lat": 35.9526,
        "lng": -85.0295
    },
    {
        "state": "IL",
        "city": "Centralia",
        "lat": 38.5224,
        "lng": -89.1232
    },
    {
        "state": "NC",
        "city": "Myrtle Grove",
        "lat": 34.123,
        "lng": -77.8834
    },
    {
        "state": "NJ",
        "city": "Glen Rock",
        "lat": 40.9601,
        "lng": -74.125
    },
    {
        "state": "NM",
        "city": "Portales",
        "lat": 34.1754,
        "lng": -103.3565
    },
    {
        "state": "NJ",
        "city": "Hasbrouck Heights",
        "lat": 40.8618,
        "lng": -74.0741
    },
    {
        "state": "WA",
        "city": "East Renton Highlands",
        "lat": 47.4718,
        "lng": -122.0854
    },
    {
        "state": "IN",
        "city": "Washington",
        "lat": 38.6586,
        "lng": -87.1591
    },
    {
        "state": "RI",
        "city": "Valley Falls",
        "lat": 41.9233,
        "lng": -71.3924
    },
    {
        "state": "OK",
        "city": "Woodward",
        "lat": 36.4247,
        "lng": -99.4058
    },
    {
        "state": "MD",
        "city": "Mays Chapel",
        "lat": 39.4343,
        "lng": -76.6516
    },
    {
        "state": "LA",
        "city": "Destrehan",
        "lat": 29.9626,
        "lng": -90.3676
    },
    {
        "state": "NV",
        "city": "Gardnerville Ranchos",
        "lat": 38.8957,
        "lng": -119.7492
    },
    {
        "state": "MD",
        "city": "Honeygo",
        "lat": 39.4055,
        "lng": -76.4282
    },
    {
        "state": "MN",
        "city": "St. Peter",
        "lat": 44.3295,
        "lng": -93.9658
    },
    {
        "state": "FL",
        "city": "Celebration",
        "lat": 28.3102,
        "lng": -81.551
    },
    {
        "state": "WA",
        "city": "Liberty Lake",
        "lat": 47.6686,
        "lng": -117.1036
    },
    {
        "state": "MD",
        "city": "Rosaryville",
        "lat": 38.7672,
        "lng": -76.8266
    },
    {
        "state": "NJ",
        "city": "River Edge",
        "lat": 40.9269,
        "lng": -74.0387
    },
    {
        "state": "FL",
        "city": "Key Largo",
        "lat": 25.1224,
        "lng": -80.412
    },
    {
        "state": "PA",
        "city": "Yeadon",
        "lat": 39.9325,
        "lng": -75.2527
    },
    {
        "state": "KY",
        "city": "Fort Campbell North",
        "lat": 36.6631,
        "lng": -87.4764
    },
    {
        "state": "AZ",
        "city": "Saddlebrooke",
        "lat": 32.5576,
        "lng": -110.874
    },
    {
        "state": "OH",
        "city": "Monfort Heights",
        "lat": 39.1823,
        "lng": -84.6075
    },
    {
        "state": "MO",
        "city": "Eureka",
        "lat": 38.5004,
        "lng": -90.6491
    },
    {
        "state": "AZ",
        "city": "Verde Village",
        "lat": 34.7119,
        "lng": -111.9941
    },
    {
        "state": "OK",
        "city": "Weatherford",
        "lat": 35.538,
        "lng": -98.6853
    },
    {
        "state": "CA",
        "city": "View Park-Windsor Hills",
        "lat": 33.9955,
        "lng": -118.3483
    },
    {
        "state": "KY",
        "city": "Somerset",
        "lat": 37.0834,
        "lng": -84.6109
    },
    {
        "state": "KS",
        "city": "Arkansas City",
        "lat": 37.0726,
        "lng": -97.0385
    },
    {
        "state": "OR",
        "city": "Gladstone",
        "lat": 45.3864,
        "lng": -122.5934
    },
    {
        "state": "NH",
        "city": "Somersworth",
        "lat": 43.2534,
        "lng": -70.8856
    },
    {
        "state": "CA",
        "city": "Winton",
        "lat": 37.3854,
        "lng": -120.6173
    },
    {
        "state": "ID",
        "city": "Star",
        "lat": 43.7026,
        "lng": -116.4914
    },
    {
        "state": "MI",
        "city": "Fenton",
        "lat": 42.7994,
        "lng": -83.7144
    },
    {
        "state": "IL",
        "city": "Palos Heights",
        "lat": 41.6637,
        "lng": -87.7958
    },
    {
        "state": "FL",
        "city": "South Miami",
        "lat": 25.7079,
        "lng": -80.2952
    },
    {
        "state": "FL",
        "city": "Goulds",
        "lat": 25.5614,
        "lng": -80.388
    },
    {
        "state": "PR",
        "city": "Cano Martin Pena",
        "lat": 18.4309,
        "lng": -66.0507
    },
    {
        "state": "TX",
        "city": "Richmond",
        "lat": 29.5824,
        "lng": -95.7563
    },
    {
        "state": "VA",
        "city": "Manchester",
        "lat": 37.4902,
        "lng": -77.5396
    },
    {
        "state": "TN",
        "city": "Red Bank",
        "lat": 35.1117,
        "lng": -85.2962
    },
    {
        "state": "WA",
        "city": "Gig Harbor",
        "lat": 47.3352,
        "lng": -122.5964
    },
    {
        "state": "IN",
        "city": "Martinsville",
        "lat": 39.4149,
        "lng": -86.4316
    },
    {
        "state": "NJ",
        "city": "Bound Brook",
        "lat": 40.5676,
        "lng": -74.5383
    },
    {
        "state": "SD",
        "city": "Box Elder",
        "lat": 44.112,
        "lng": -103.0818
    },
    {
        "state": "MN",
        "city": "East Bethel",
        "lat": 45.3557,
        "lng": -93.2038
    },
    {
        "state": "NJ",
        "city": "Hamilton Square",
        "lat": 40.2248,
        "lng": -74.6526
    },
    {
        "state": "NC",
        "city": "Archdale",
        "lat": 35.9032,
        "lng": -79.9591
    },
    {
        "state": "MI",
        "city": "Niles",
        "lat": 41.8346,
        "lng": -86.2473
    },
    {
        "state": "MD",
        "city": "Linganore",
        "lat": 39.4127,
        "lng": -77.3014
    },
    {
        "state": "OH",
        "city": "Salem",
        "lat": 40.9049,
        "lng": -80.8492
    },
    {
        "state": "MN",
        "city": "Lake Elmo",
        "lat": 44.9944,
        "lng": -92.9031
    },
    {
        "state": "FL",
        "city": "Laurel",
        "lat": 27.1507,
        "lng": -82.4534
    },
    {
        "state": "MN",
        "city": "Big Lake",
        "lat": 45.3417,
        "lng": -93.7434
    },
    {
        "state": "NY",
        "city": "Miller Place",
        "lat": 40.9374,
        "lng": -72.9864
    },
    {
        "state": "NJ",
        "city": "Wallington",
        "lat": 40.8536,
        "lng": -74.1069
    },
    {
        "state": "FL",
        "city": "Middleburg",
        "lat": 30.0502,
        "lng": -81.9011
    },
    {
        "state": "CA",
        "city": "Alum Rock",
        "lat": 37.3694,
        "lng": -121.8238
    },
    {
        "state": "NY",
        "city": "Endwell",
        "lat": 42.1184,
        "lng": -76.0219
    },
    {
        "state": "WA",
        "city": "Poulsbo",
        "lat": 47.7417,
        "lng": -122.6407
    },
    {
        "state": "CO",
        "city": "Castle Pines",
        "lat": 39.4625,
        "lng": -104.8706
    },
    {
        "state": "PA",
        "city": "Elizabethtown",
        "lat": 40.1533,
        "lng": -76.599
    },
    {
        "state": "MA",
        "city": "South Yarmouth",
        "lat": 41.6692,
        "lng": -70.2005
    },
    {
        "state": "KS",
        "city": "Winfield",
        "lat": 37.274,
        "lng": -96.95
    },
    {
        "state": "MS",
        "city": "Picayune",
        "lat": 30.5322,
        "lng": -89.6724
    },
    {
        "state": "CA",
        "city": "Muscoy",
        "lat": 34.1552,
        "lng": -117.3477
    },
    {
        "state": "WY",
        "city": "Evanston",
        "lat": 41.2602,
        "lng": -110.9646
    },
    {
        "state": "WI",
        "city": "Little Chute",
        "lat": 44.2906,
        "lng": -88.3208
    },
    {
        "state": "FL",
        "city": "Gulfport",
        "lat": 27.7463,
        "lng": -82.7099
    },
    {
        "state": "PA",
        "city": "Mountain Top",
        "lat": 41.1353,
        "lng": -75.9045
    },
    {
        "state": "LA",
        "city": "Minden",
        "lat": 32.6187,
        "lng": -93.2762
    },
    {
        "state": "OR",
        "city": "Oak Hills",
        "lat": 45.5405,
        "lng": -122.8413
    },
    {
        "state": "NY",
        "city": "Tarrytown",
        "lat": 41.0647,
        "lng": -73.8672
    },
    {
        "state": "WY",
        "city": "Green River",
        "lat": 41.5127,
        "lng": -109.471
    },
    {
        "state": "AZ",
        "city": "Show Low",
        "lat": 34.2671,
        "lng": -110.0384
    },
    {
        "state": "NJ",
        "city": "Guttenberg",
        "lat": 40.7928,
        "lng": -74.0049
    },
    {
        "state": "OH",
        "city": "Mack",
        "lat": 39.1492,
        "lng": -84.6794
    },
    {
        "state": "WI",
        "city": "Richfield",
        "lat": 43.2372,
        "lng": -88.2413
    },
    {
        "state": "MD",
        "city": "Largo",
        "lat": 38.88,
        "lng": -76.8289
    },
    {
        "state": "UT",
        "city": "Mapleton",
        "lat": 40.1188,
        "lng": -111.5742
    },
    {
        "state": "KY",
        "city": "Lawrenceburg",
        "lat": 38.0332,
        "lng": -84.9031
    },
    {
        "state": "VA",
        "city": "New Baltimore",
        "lat": 38.7495,
        "lng": -77.7151
    },
    {
        "state": "CA",
        "city": "Rossmoor",
        "lat": 33.7887,
        "lng": -118.0803
    },
    {
        "state": "CA",
        "city": "Los Alamitos",
        "lat": 33.7971,
        "lng": -118.0592
    },
    {
        "state": "LA",
        "city": "Crowley",
        "lat": 30.2175,
        "lng": -92.3752
    },
    {
        "state": "FL",
        "city": "Shady Hills",
        "lat": 28.4042,
        "lng": -82.5468
    },
    {
        "state": "MS",
        "city": "Brookhaven",
        "lat": 31.5803,
        "lng": -90.4432
    },
    {
        "state": "DE",
        "city": "Milford",
        "lat": 38.9091,
        "lng": -75.4227
    },
    {
        "state": "NC",
        "city": "Spring Lake",
        "lat": 35.1843,
        "lng": -78.9962
    },
    {
        "state": "TX",
        "city": "Lantana",
        "lat": 33.0926,
        "lng": -97.1214
    },
    {
        "state": "FL",
        "city": "Lantana",
        "lat": 26.5834,
        "lng": -80.0564
    },
    {
        "state": "PA",
        "city": "Lower Burrell",
        "lat": 40.5818,
        "lng": -79.7141
    },
    {
        "state": "GA",
        "city": "Douglas",
        "lat": 31.5065,
        "lng": -82.8544
    },
    {
        "state": "NJ",
        "city": "Ringwood",
        "lat": 41.1065,
        "lng": -74.2749
    },
    {
        "state": "SC",
        "city": "James Island",
        "lat": 32.7353,
        "lng": -79.9394
    },
    {
        "state": "SC",
        "city": "Irmo",
        "lat": 34.1018,
        "lng": -81.1956
    },
    {
        "state": "OH",
        "city": "Seven Hills",
        "lat": 41.3803,
        "lng": -81.6736
    },
    {
        "state": "CA",
        "city": "Signal Hill",
        "lat": 33.803,
        "lng": -118.1681
    },
    {
        "state": "NJ",
        "city": "Bellmawr",
        "lat": 39.8666,
        "lng": -75.0941
    },
    {
        "state": "OH",
        "city": "Franklin",
        "lat": 39.5538,
        "lng": -84.2952
    },
    {
        "state": "SD",
        "city": "Vermillion",
        "lat": 42.7811,
        "lng": -96.9256
    },
    {
        "state": "OH",
        "city": "Dent",
        "lat": 39.1915,
        "lng": -84.6601
    },
    {
        "state": "MD",
        "city": "Lanham",
        "lat": 38.962,
        "lng": -76.8421
    },
    {
        "state": "LA",
        "city": "Woodmere",
        "lat": 29.8493,
        "lng": -90.0751
    },
    {
        "state": "CA",
        "city": "La Riviera",
        "lat": 38.5683,
        "lng": -121.3544
    },
    {
        "state": "RI",
        "city": "Newport East",
        "lat": 41.5159,
        "lng": -71.2878
    },
    {
        "state": "PA",
        "city": "Emmaus",
        "lat": 40.5352,
        "lng": -75.4978
    },
    {
        "state": "OH",
        "city": "Norton",
        "lat": 41.0294,
        "lng": -81.6461
    },
    {
        "state": "OH",
        "city": "Bucyrus",
        "lat": 40.8054,
        "lng": -82.9719
    },
    {
        "state": "MN",
        "city": "Mendota Heights",
        "lat": 44.8815,
        "lng": -93.14
    },
    {
        "state": "NY",
        "city": "Mount Sinai",
        "lat": 40.9372,
        "lng": -73.0179
    },
    {
        "state": "FL",
        "city": "Miami Shores",
        "lat": 25.867,
        "lng": -80.1779
    },
    {
        "state": "CA",
        "city": "Half Moon Bay",
        "lat": 37.4685,
        "lng": -122.4382
    },
    {
        "state": "LA",
        "city": "Bayou Blue",
        "lat": 29.6341,
        "lng": -90.6733
    },
    {
        "state": "VA",
        "city": "Wakefield",
        "lat": 38.823,
        "lng": -77.2406
    },
    {
        "state": "TN",
        "city": "Middle Valley",
        "lat": 35.1877,
        "lng": -85.1959
    },
    {
        "state": "OR",
        "city": "Ontario",
        "lat": 44.0259,
        "lng": -116.976
    },
    {
        "state": "IL",
        "city": "Schiller Park",
        "lat": 41.9586,
        "lng": -87.8693
    },
    {
        "state": "TN",
        "city": "Hartsville",
        "lat": 36.3921,
        "lng": -86.1568
    },
    {
        "state": "IL",
        "city": "Markham",
        "lat": 41.6,
        "lng": -87.6904
    },
    {
        "state": "TN",
        "city": "Lawrenceburg",
        "lat": 35.2497,
        "lng": -87.3325
    },
    {
        "state": "NY",
        "city": "Roessleville",
        "lat": 42.6969,
        "lng": -73.7964
    },
    {
        "state": "WA",
        "city": "Minnehaha",
        "lat": 45.6577,
        "lng": -122.6204
    },
    {
        "state": "LA",
        "city": "Moss Bluff",
        "lat": 30.3039,
        "lng": -93.2051
    },
    {
        "state": "MO",
        "city": "Town and Country",
        "lat": 38.6317,
        "lng": -90.479
    },
    {
        "state": "IL",
        "city": "River Forest",
        "lat": 41.895,
        "lng": -87.8194
    },
    {
        "state": "AZ",
        "city": "Gold Canyon",
        "lat": 33.3639,
        "lng": -111.423
    },
    {
        "state": "LA",
        "city": "Gardere",
        "lat": 30.3582,
        "lng": -91.1346
    },
    {
        "state": "IN",
        "city": "Yorktown",
        "lat": 40.183,
        "lng": -85.5123
    },
    {
        "state": "VA",
        "city": "Forest",
        "lat": 37.3728,
        "lng": -79.2831
    },
    {
        "state": "VA",
        "city": "Stuarts Draft",
        "lat": 38.0188,
        "lng": -79.0354
    },
    {
        "state": "WI",
        "city": "Sussex",
        "lat": 43.1346,
        "lng": -88.2226
    },
    {
        "state": "TX",
        "city": "Port Lavaca",
        "lat": 28.6181,
        "lng": -96.6278
    },
    {
        "state": "WI",
        "city": "Platteville",
        "lat": 42.728,
        "lng": -90.4681
    },
    {
        "state": "TX",
        "city": "Roma",
        "lat": 26.4166,
        "lng": -99.0061
    },
    {
        "state": "NC",
        "city": "Smithfield",
        "lat": 35.5133,
        "lng": -78.3495
    },
    {
        "state": "MI",
        "city": "Grosse Pointe Park",
        "lat": 42.3794,
        "lng": -82.9287
    },
    {
        "state": "OK",
        "city": "Newcastle",
        "lat": 35.2401,
        "lng": -97.5995
    },
    {
        "state": "ID",
        "city": "Burley",
        "lat": 42.5379,
        "lng": -113.7926
    },
    {
        "state": "TX",
        "city": "Four Corners",
        "lat": 29.6705,
        "lng": -95.6596
    },
    {
        "state": "MO",
        "city": "Mexico",
        "lat": 39.1625,
        "lng": -91.8712
    },
    {
        "state": "CO",
        "city": "Fort Morgan",
        "lat": 40.2537,
        "lng": -103.7903
    },
    {
        "state": "NM",
        "city": "Lovington",
        "lat": 32.9128,
        "lng": -103.3276
    },
    {
        "state": "OK",
        "city": "Elk City",
        "lat": 35.3862,
        "lng": -99.4301
    },
    {
        "state": "IA",
        "city": "Oskaloosa",
        "lat": 41.2922,
        "lng": -92.6404
    },
    {
        "state": "MI",
        "city": "Farmington",
        "lat": 42.4614,
        "lng": -83.3784
    },
    {
        "state": "WA",
        "city": "Ridgefield",
        "lat": 45.8114,
        "lng": -122.7051
    },
    {
        "state": "TX",
        "city": "Leon Valley",
        "lat": 29.4954,
        "lng": -98.6143
    },
    {
        "state": "CA",
        "city": "Healdsburg",
        "lat": 38.6224,
        "lng": -122.8651
    },
    {
        "state": "UT",
        "city": "Lindon",
        "lat": 40.3414,
        "lng": -111.7187
    },
    {
        "state": "NY",
        "city": "East Glenville",
        "lat": 42.8648,
        "lng": -73.9256
    },
    {
        "state": "CA",
        "city": "Sun Village",
        "lat": 34.5596,
        "lng": -117.9558
    },
    {
        "state": "NJ",
        "city": "Ridgefield",
        "lat": 40.8313,
        "lng": -74.0147
    },
    {
        "state": "FL",
        "city": "Fuller Heights",
        "lat": 27.9227,
        "lng": -81.9978
    },
    {
        "state": "DE",
        "city": "Pike Creek Valley",
        "lat": 39.7294,
        "lng": -75.6989
    },
    {
        "state": "FL",
        "city": "Wilton Manors",
        "lat": 26.1593,
        "lng": -80.1395
    },
    {
        "state": "IL",
        "city": "Pontiac",
        "lat": 40.8894,
        "lng": -88.6409
    },
    {
        "state": "NY",
        "city": "North Wantagh",
        "lat": 40.6983,
        "lng": -73.5086
    },
    {
        "state": "LA",
        "city": "Covington",
        "lat": 30.481,
        "lng": -90.1122
    },
    {
        "state": "CA",
        "city": "University of California-Santa Barbara",
        "lat": 34.4151,
        "lng": -119.8568
    },
    {
        "state": "FL",
        "city": "Port Salerno",
        "lat": 27.1461,
        "lng": -80.1894
    },
    {
        "state": "NJ",
        "city": "Gloucester City",
        "lat": 39.8924,
        "lng": -75.1172
    },
    {
        "state": "KY",
        "city": "Campbellsville",
        "lat": 37.3445,
        "lng": -85.3511
    },
    {
        "state": "UT",
        "city": "Woods Cross",
        "lat": 40.8731,
        "lng": -111.917
    },
    {
        "state": "NY",
        "city": "Dobbs Ferry",
        "lat": 41.0127,
        "lng": -73.8697
    },
    {
        "state": "IN",
        "city": "Greensburg",
        "lat": 39.3518,
        "lng": -85.5028
    },
    {
        "state": "MO",
        "city": "Bridgeton",
        "lat": 38.7673,
        "lng": -90.4275
    },
    {
        "state": "MI",
        "city": "Clawson",
        "lat": 42.5367,
        "lng": -83.1504
    },
    {
        "state": "SC",
        "city": "Oak Grove",
        "lat": 33.978,
        "lng": -81.1468
    },
    {
        "state": "MI",
        "city": "East Grand Rapids",
        "lat": 42.9464,
        "lng": -85.6088
    },
    {
        "state": "NY",
        "city": "Fulton",
        "lat": 43.3171,
        "lng": -76.4167
    },
    {
        "state": "TX",
        "city": "Snyder",
        "lat": 32.7133,
        "lng": -100.9116
    },
    {
        "state": "OR",
        "city": "Santa Clara",
        "lat": 44.1154,
        "lng": -123.1344
    },
    {
        "state": "NY",
        "city": "Suffern",
        "lat": 41.1138,
        "lng": -74.1422
    },
    {
        "state": "LA",
        "city": "Morgan City",
        "lat": 29.7041,
        "lng": -91.192
    },
    {
        "state": "NY",
        "city": "Woodbury",
        "lat": 41.3284,
        "lng": -74.1004
    },
    {
        "state": "OK",
        "city": "Okmulgee",
        "lat": 35.6134,
        "lng": -96.0068
    },
    {
        "state": "PA",
        "city": "Progress",
        "lat": 40.2901,
        "lng": -76.8394
    },
    {
        "state": "FL",
        "city": "Medulla",
        "lat": 27.957,
        "lng": -81.9866
    },
    {
        "state": "IA",
        "city": "Spencer",
        "lat": 43.1468,
        "lng": -95.1534
    },
    {
        "state": "WA",
        "city": "Maltby",
        "lat": 47.8027,
        "lng": -122.1044
    },
    {
        "state": "FL",
        "city": "Cocoa Beach",
        "lat": 28.3327,
        "lng": -80.6274
    },
    {
        "state": "OH",
        "city": "Ravenna",
        "lat": 41.1612,
        "lng": -81.2422
    },
    {
        "state": "IL",
        "city": "Taylorville",
        "lat": 39.5328,
        "lng": -89.2804
    },
    {
        "state": "PA",
        "city": "Shiloh",
        "lat": 39.9732,
        "lng": -76.792
    },
    {
        "state": "FL",
        "city": "Lakeland Highlands",
        "lat": 27.9572,
        "lng": -81.9496
    },
    {
        "state": "CA",
        "city": "Anderson",
        "lat": 40.4497,
        "lng": -122.295
    },
    {
        "state": "VA",
        "city": "Lowes Island",
        "lat": 39.0471,
        "lng": -77.3524
    },
    {
        "state": "TX",
        "city": "Manvel",
        "lat": 29.4798,
        "lng": -95.3635
    },
    {
        "state": "NY",
        "city": "De Witt",
        "lat": 43.03,
        "lng": -76.0819
    },
    {
        "state": "MD",
        "city": "Westphalia",
        "lat": 38.8356,
        "lng": -76.8298
    },
    {
        "state": "NJ",
        "city": "Ocean City",
        "lat": 39.2681,
        "lng": -74.602
    },
    {
        "state": "OH",
        "city": "Brooklyn",
        "lat": 41.4349,
        "lng": -81.7497
    },
    {
        "state": "CA",
        "city": "Hillsborough",
        "lat": 37.5572,
        "lng": -122.3586
    },
    {
        "state": "NM",
        "city": "North Valley",
        "lat": 35.1736,
        "lng": -106.6231
    },
    {
        "state": "KS",
        "city": "Lansing",
        "lat": 39.2428,
        "lng": -94.8972
    },
    {
        "state": "WI",
        "city": "Two Rivers",
        "lat": 44.1565,
        "lng": -87.5824
    },
    {
        "state": "NC",
        "city": "Kings Mountain",
        "lat": 35.2349,
        "lng": -81.3501
    },
    {
        "state": "IL",
        "city": "Barrington",
        "lat": 42.1515,
        "lng": -88.1281
    },
    {
        "state": "NJ",
        "city": "Westwood",
        "lat": 40.9878,
        "lng": -74.0308
    },
    {
        "state": "WI",
        "city": "Oregon",
        "lat": 42.9253,
        "lng": -89.3892
    },
    {
        "state": "UT",
        "city": "West Point",
        "lat": 41.122,
        "lng": -112.0995
    },
    {
        "state": "NC",
        "city": "Lincolnton",
        "lat": 35.4748,
        "lng": -81.2386
    },
    {
        "state": "PR",
        "city": "Hormigueros",
        "lat": 18.1437,
        "lng": -67.1199
    },
    {
        "state": "TX",
        "city": "Granbury",
        "lat": 32.4475,
        "lng": -97.7702
    },
    {
        "state": "NJ",
        "city": "Wanaque",
        "lat": 41.044,
        "lng": -74.29
    },
    {
        "state": "LA",
        "city": "Abbeville",
        "lat": 29.9751,
        "lng": -92.1265
    },
    {
        "state": "OH",
        "city": "Northbrook",
        "lat": 39.2467,
        "lng": -84.5796
    },
    {
        "state": "IA",
        "city": "Storm Lake",
        "lat": 42.6431,
        "lng": -95.196
    },
    {
        "state": "SC",
        "city": "Boiling Springs",
        "lat": 35.045,
        "lng": -81.9779
    },
    {
        "state": "CO",
        "city": "Berkley",
        "lat": 39.8045,
        "lng": -105.0281
    },
    {
        "state": "FL",
        "city": "Satellite Beach",
        "lat": 28.1782,
        "lng": -80.6019
    },
    {
        "state": "AZ",
        "city": "Tucson Mountains",
        "lat": 32.2822,
        "lng": -111.0773
    },
    {
        "state": "FL",
        "city": "New Port Richey East",
        "lat": 28.2605,
        "lng": -82.6931
    },
    {
        "state": "CO",
        "city": "Wellington",
        "lat": 40.7,
        "lng": -105.0054
    },
    {
        "state": "AR",
        "city": "Batesville",
        "lat": 35.7687,
        "lng": -91.6227
    },
    {
        "state": "CA",
        "city": "Piedmont",
        "lat": 37.8225,
        "lng": -122.2301
    },
    {
        "state": "NC",
        "city": "Elon",
        "lat": 36.1016,
        "lng": -79.5086
    },
    {
        "state": "MN",
        "city": "Grand Rapids",
        "lat": 47.238,
        "lng": -93.5327
    },
    {
        "state": "CO",
        "city": "Cherry Creek",
        "lat": 39.6094,
        "lng": -104.8645
    },
    {
        "state": "OH",
        "city": "Urbana",
        "lat": 40.1085,
        "lng": -83.7541
    },
    {
        "state": "NY",
        "city": "Inwood",
        "lat": 40.6219,
        "lng": -73.7506
    },
    {
        "state": "NY",
        "city": "North Lindenhurst",
        "lat": 40.7072,
        "lng": -73.3859
    },
    {
        "state": "CA",
        "city": "Sierra Madre",
        "lat": 34.1687,
        "lng": -118.0504
    },
    {
        "state": "WA",
        "city": "Birch Bay",
        "lat": 48.9243,
        "lng": -122.7519
    },
    {
        "state": "HI",
        "city": "Waipio",
        "lat": 21.4143,
        "lng": -157.9966
    },
    {
        "state": "IL",
        "city": "Roscoe",
        "lat": 42.4256,
        "lng": -89.0084
    },
    {
        "state": "PR",
        "city": "Manati",
        "lat": 18.4283,
        "lng": -66.4823
    },
    {
        "state": "IL",
        "city": "Burr Ridge",
        "lat": 41.7485,
        "lng": -87.92
    },
    {
        "state": "NY",
        "city": "Elwood",
        "lat": 40.8462,
        "lng": -73.3389
    },
    {
        "state": "OR",
        "city": "White City",
        "lat": 42.4316,
        "lng": -122.8322
    },
    {
        "state": "IL",
        "city": "Plano",
        "lat": 41.6757,
        "lng": -88.5293
    },
    {
        "state": "WI",
        "city": "Waupun",
        "lat": 43.6314,
        "lng": -88.7381
    },
    {
        "state": "CA",
        "city": "Canyon Lake",
        "lat": 33.6885,
        "lng": -117.2621
    },
    {
        "state": "GA",
        "city": "Port Wentworth",
        "lat": 32.1951,
        "lng": -81.1991
    },
    {
        "state": "TN",
        "city": "Alcoa",
        "lat": 35.8076,
        "lng": -83.9753
    },
    {
        "state": "LA",
        "city": "Raceland",
        "lat": 29.7282,
        "lng": -90.6362
    },
    {
        "state": "MS",
        "city": "Cleveland",
        "lat": 33.744,
        "lng": -90.7285
    },
    {
        "state": "FL",
        "city": "Citrus Springs",
        "lat": 28.9931,
        "lng": -82.4594
    },
    {
        "state": "CA",
        "city": "Clayton",
        "lat": 37.9404,
        "lng": -121.9301
    },
    {
        "state": "KS",
        "city": "Merriam",
        "lat": 39.0186,
        "lng": -94.6933
    },
    {
        "state": "TN",
        "city": "Union City",
        "lat": 36.4267,
        "lng": -89.0474
    },
    {
        "state": "TX",
        "city": "Selma",
        "lat": 29.5866,
        "lng": -98.3132
    },
    {
        "state": "PA",
        "city": "Wyomissing",
        "lat": 40.3317,
        "lng": -75.9703
    },
    {
        "state": "NY",
        "city": "Lake Grove",
        "lat": 40.8586,
        "lng": -73.1168
    },
    {
        "state": "WI",
        "city": "Marinette",
        "lat": 45.0871,
        "lng": -87.6336
    },
    {
        "state": "NY",
        "city": "Great Neck",
        "lat": 40.8029,
        "lng": -73.7333
    },
    {
        "state": "OH",
        "city": "Coshocton",
        "lat": 40.2618,
        "lng": -81.848
    },
    {
        "state": "OR",
        "city": "Monmouth",
        "lat": 44.8505,
        "lng": -123.2284
    },
    {
        "state": "NJ",
        "city": "Pompton Lakes",
        "lat": 41.0024,
        "lng": -74.2859
    },
    {
        "state": "PA",
        "city": "Lansdowne",
        "lat": 39.9408,
        "lng": -75.276
    },
    {
        "state": "MI",
        "city": "Sturgis",
        "lat": 41.7991,
        "lng": -85.4184
    },
    {
        "state": "MS",
        "city": "Petal",
        "lat": 31.3477,
        "lng": -89.2359
    },
    {
        "state": "AR",
        "city": "Magnolia",
        "lat": 33.2775,
        "lng": -93.2261
    },
    {
        "state": "FL",
        "city": "Bithlo",
        "lat": 28.5644,
        "lng": -81.1073
    },
    {
        "state": "IL",
        "city": "Columbia",
        "lat": 38.4581,
        "lng": -90.2156
    },
    {
        "state": "IL",
        "city": "Summit",
        "lat": 41.7877,
        "lng": -87.8146
    },
    {
        "state": "TX",
        "city": "Hornsby Bend",
        "lat": 30.2388,
        "lng": -97.5899
    },
    {
        "state": "HI",
        "city": "Waihee-Waiehu",
        "lat": 20.9188,
        "lng": -156.5063
    },
    {
        "state": "NV",
        "city": "Cold Springs",
        "lat": 39.6927,
        "lng": -119.9775
    },
    {
        "state": "TX",
        "city": "Fredericksburg",
        "lat": 30.266,
        "lng": -98.8751
    },
    {
        "state": "NJ",
        "city": "Greentree",
        "lat": 39.8989,
        "lng": -74.9613
    },
    {
        "state": "VA",
        "city": "Gloucester Point",
        "lat": 37.2767,
        "lng": -76.5043
    },
    {
        "state": "IL",
        "city": "Waterloo",
        "lat": 38.3403,
        "lng": -90.1538
    },
    {
        "state": "FL",
        "city": "Fairview Shores",
        "lat": 28.6021,
        "lng": -81.3958
    },
    {
        "state": "PA",
        "city": "Waynesboro",
        "lat": 39.7524,
        "lng": -77.5822
    },
    {
        "state": "NJ",
        "city": "Franklin Lakes",
        "lat": 41.0086,
        "lng": -74.2083
    },
    {
        "state": "FL",
        "city": "Sebring",
        "lat": 27.477,
        "lng": -81.453
    },
    {
        "state": "TN",
        "city": "Collegedale",
        "lat": 35.0526,
        "lng": -85.0488
    },
    {
        "state": "WI",
        "city": "Burlington",
        "lat": 42.6744,
        "lng": -88.2721
    },
    {
        "state": "KY",
        "city": "Lyndon",
        "lat": 38.2645,
        "lng": -85.5891
    },
    {
        "state": "NJ",
        "city": "Oak Ridge",
        "lat": 41.0323,
        "lng": -74.4971
    },
    {
        "state": "FL",
        "city": "Westview",
        "lat": 25.8825,
        "lng": -80.2415
    },
    {
        "state": "OH",
        "city": "Springdale",
        "lat": 39.2909,
        "lng": -84.476
    },
    {
        "state": "NC",
        "city": "Summerfield",
        "lat": 36.1973,
        "lng": -79.8997
    },
    {
        "state": "UT",
        "city": "North Logan",
        "lat": 41.7759,
        "lng": -111.8066
    },
    {
        "state": "TX",
        "city": "Burkburnett",
        "lat": 34.0746,
        "lng": -98.5672
    },
    {
        "state": "CA",
        "city": "Citrus",
        "lat": 34.116,
        "lng": -117.8891
    },
    {
        "state": "FL",
        "city": "Pebble Creek",
        "lat": 28.1583,
        "lng": -82.3411
    },
    {
        "state": "NJ",
        "city": "Totowa",
        "lat": 40.9039,
        "lng": -74.2214
    },
    {
        "state": "OH",
        "city": "Celina",
        "lat": 40.555,
        "lng": -84.5626
    },
    {
        "state": "MN",
        "city": "North Branch",
        "lat": 45.5137,
        "lng": -92.9601
    },
    {
        "state": "MI",
        "city": "Grand Haven",
        "lat": 43.0553,
        "lng": -86.2201
    },
    {
        "state": "NJ",
        "city": "Little Ferry",
        "lat": 40.8464,
        "lng": -74.0388
    },
    {
        "state": "MS",
        "city": "Canton",
        "lat": 32.5975,
        "lng": -90.0317
    },
    {
        "state": "UT",
        "city": "Pleasant View",
        "lat": 41.3249,
        "lng": -112.0011
    },
    {
        "state": "NJ",
        "city": "Pompton Plains",
        "lat": 40.9679,
        "lng": -74.3075
    },
    {
        "state": "MT",
        "city": "Belgrade",
        "lat": 45.7789,
        "lng": -111.1736
    },
    {
        "state": "WA",
        "city": "Vashon",
        "lat": 47.4122,
        "lng": -122.4726
    },
    {
        "state": "NJ",
        "city": "The Hills",
        "lat": 40.6561,
        "lng": -74.6215
    },
    {
        "state": "NJ",
        "city": "Beachwood",
        "lat": 39.9286,
        "lng": -74.2022
    },
    {
        "state": "OH",
        "city": "Bedford Heights",
        "lat": 41.4041,
        "lng": -81.5053
    },
    {
        "state": "CA",
        "city": "Valley Center",
        "lat": 33.233,
        "lng": -117.0158
    },
    {
        "state": "FL",
        "city": "Memphis",
        "lat": 27.5435,
        "lng": -82.5608
    },
    {
        "state": "WA",
        "city": "Grandview",
        "lat": 46.2443,
        "lng": -119.9092
    },
    {
        "state": "IL",
        "city": "Troy",
        "lat": 38.7268,
        "lng": -89.8977
    },
    {
        "state": "SD",
        "city": "Brandon",
        "lat": 43.5928,
        "lng": -96.5799
    },
    {
        "state": "OR",
        "city": "Prineville",
        "lat": 44.2985,
        "lng": -120.8607
    },
    {
        "state": "LA",
        "city": "Timberlane",
        "lat": 29.8781,
        "lng": -90.0303
    },
    {
        "state": "GA",
        "city": "Rincon",
        "lat": 32.2947,
        "lng": -81.2353
    },
    {
        "state": "IL",
        "city": "Gages Lake",
        "lat": 42.3519,
        "lng": -87.9828
    },
    {
        "state": "CA",
        "city": "Delhi",
        "lat": 37.4306,
        "lng": -120.7759
    },
    {
        "state": "NJ",
        "city": "Manville",
        "lat": 40.542,
        "lng": -74.5892
    },
    {
        "state": "CO",
        "city": "Berthoud",
        "lat": 40.3071,
        "lng": -105.0426
    },
    {
        "state": "KS",
        "city": "Haysville",
        "lat": 37.5648,
        "lng": -97.3527
    },
    {
        "state": "NY",
        "city": "Terryville",
        "lat": 40.9093,
        "lng": -73.0486
    },
    {
        "state": "WA",
        "city": "Fife",
        "lat": 47.2329,
        "lng": -122.3518
    },
    {
        "state": "VA",
        "city": "Triangle",
        "lat": 38.5483,
        "lng": -77.3195
    },
    {
        "state": "SC",
        "city": "Garden City",
        "lat": 33.5926,
        "lng": -79.0071
    },
    {
        "state": "NJ",
        "city": "Lincoln Park",
        "lat": 40.9239,
        "lng": -74.3035
    },
    {
        "state": "OK",
        "city": "Guthrie",
        "lat": 35.8424,
        "lng": -97.4366
    },
    {
        "state": "IN",
        "city": "Peru",
        "lat": 40.7593,
        "lng": -86.0756
    },
    {
        "state": "AR",
        "city": "Malvern",
        "lat": 34.3734,
        "lng": -92.8205
    },
    {
        "state": "IL",
        "city": "Worth",
        "lat": 41.6877,
        "lng": -87.7916
    },
    {
        "state": "HI",
        "city": "Kapaa",
        "lat": 22.091,
        "lng": -159.3521
    },
    {
        "state": "MD",
        "city": "Travilah",
        "lat": 39.057,
        "lng": -77.247
    },
    {
        "state": "IN",
        "city": "Danville",
        "lat": 39.7584,
        "lng": -86.5019
    },
    {
        "state": "NY",
        "city": "Mount Kisco",
        "lat": 41.2016,
        "lng": -73.7281
    },
    {
        "state": "VA",
        "city": "Lake Monticello",
        "lat": 37.921,
        "lng": -78.3295
    },
    {
        "state": "KS",
        "city": "Atchison",
        "lat": 39.5625,
        "lng": -95.1367
    },
    {
        "state": "OH",
        "city": "Van Wert",
        "lat": 40.8651,
        "lng": -84.5879
    },
    {
        "state": "TN",
        "city": "Martin",
        "lat": 36.3385,
        "lng": -88.8513
    },
    {
        "state": "FL",
        "city": "Sugarmill Woods",
        "lat": 28.7299,
        "lng": -82.501
    },
    {
        "state": "FL",
        "city": "Hudson",
        "lat": 28.3595,
        "lng": -82.6894
    },
    {
        "state": "FL",
        "city": "Union Park",
        "lat": 28.5657,
        "lng": -81.2355
    },
    {
        "state": "OH",
        "city": "Montgomery",
        "lat": 39.2496,
        "lng": -84.3458
    },
    {
        "state": "WI",
        "city": "Holmen",
        "lat": 43.9706,
        "lng": -91.2654
    },
    {
        "state": "IL",
        "city": "Fox Lake",
        "lat": 42.4239,
        "lng": -88.1844
    },
    {
        "state": "MD",
        "city": "Scaggsville",
        "lat": 39.1416,
        "lng": -76.8843
    },
    {
        "state": "MD",
        "city": "Timonium",
        "lat": 39.4459,
        "lng": -76.6032
    },
    {
        "state": "LA",
        "city": "Belle Chasse",
        "lat": 29.8558,
        "lng": -90.0045
    },
    {
        "state": "MO",
        "city": "Bolivar",
        "lat": 37.6059,
        "lng": -93.4175
    },
    {
        "state": "WI",
        "city": "DeForest",
        "lat": 43.2301,
        "lng": -89.3431
    },
    {
        "state": "AL",
        "city": "Russellville",
        "lat": 34.5055,
        "lng": -87.7283
    },
    {
        "state": "CA",
        "city": "Morro Bay",
        "lat": 35.3682,
        "lng": -120.8482
    },
    {
        "state": "CA",
        "city": "Del Aire",
        "lat": 33.9167,
        "lng": -118.3693
    },
    {
        "state": "CA",
        "city": "East Bakersfield",
        "lat": 35.3832,
        "lng": -118.9743
    },
    {
        "state": "WV",
        "city": "St. Albans",
        "lat": 38.3769,
        "lng": -81.8198
    },
    {
        "state": "WY",
        "city": "Jackson",
        "lat": 43.472,
        "lng": -110.7746
    },
    {
        "state": "CA",
        "city": "Placerville",
        "lat": 38.7308,
        "lng": -120.7979
    },
    {
        "state": "PA",
        "city": "Munhall",
        "lat": 40.3935,
        "lng": -79.9005
    },
    {
        "state": "TX",
        "city": "Freeport",
        "lat": 28.9453,
        "lng": -95.3601
    },
    {
        "state": "IL",
        "city": "Crestwood",
        "lat": 41.6454,
        "lng": -87.7397
    },
    {
        "state": "WY",
        "city": "Riverton",
        "lat": 43.0421,
        "lng": -108.4144
    },
    {
        "state": "GA",
        "city": "Vidalia",
        "lat": 32.2125,
        "lng": -82.4019
    },
    {
        "state": "NY",
        "city": "Middle Island",
        "lat": 40.8857,
        "lng": -72.9454
    },
    {
        "state": "MD",
        "city": "Linthicum",
        "lat": 39.2088,
        "lng": -76.6626
    },
    {
        "state": "FL",
        "city": "Westwood Lakes",
        "lat": 25.7237,
        "lng": -80.3717
    },
    {
        "state": "OH",
        "city": "Forestville",
        "lat": 39.0711,
        "lng": -84.3389
    },
    {
        "state": "IN",
        "city": "Lowell",
        "lat": 41.2917,
        "lng": -87.4195
    },
    {
        "state": "CO",
        "city": "Edwards",
        "lat": 39.6215,
        "lng": -106.6184
    },
    {
        "state": "OH",
        "city": "Richmond Heights",
        "lat": 41.5589,
        "lng": -81.5029
    },
    {
        "state": "TX",
        "city": "Pleasanton",
        "lat": 28.9642,
        "lng": -98.4957
    },
    {
        "state": "LA",
        "city": "Waggaman",
        "lat": 29.9373,
        "lng": -90.2354
    },
    {
        "state": "CA",
        "city": "Sonoma",
        "lat": 38.2902,
        "lng": -122.4598
    },
    {
        "state": "CA",
        "city": "Malibu",
        "lat": 34.037,
        "lng": -118.7839
    },
    {
        "state": "NJ",
        "city": "Pine Hill",
        "lat": 39.7879,
        "lng": -74.9857
    },
    {
        "state": "CA",
        "city": "Potomac Park",
        "lat": 35.3636,
        "lng": -118.965
    },
    {
        "state": "CA",
        "city": "Rancho Mission Viejo",
        "lat": 33.514,
        "lng": -117.5618
    },
    {
        "state": "NC",
        "city": "Tarboro",
        "lat": 35.9046,
        "lng": -77.5563
    },
    {
        "state": "VA",
        "city": "Madison Heights",
        "lat": 37.4487,
        "lng": -79.1057
    },
    {
        "state": "MO",
        "city": "Maryville",
        "lat": 40.3428,
        "lng": -94.8702
    },
    {
        "state": "GA",
        "city": "Doraville",
        "lat": 33.9073,
        "lng": -84.2711
    },
    {
        "state": "LA",
        "city": "Bogalusa",
        "lat": 30.7812,
        "lng": -89.8633
    },
    {
        "state": "IL",
        "city": "Lyons",
        "lat": 41.8119,
        "lng": -87.8191
    },
    {
        "state": "NY",
        "city": "Corning",
        "lat": 42.147,
        "lng": -77.0561
    },
    {
        "state": "PA",
        "city": "Darby",
        "lat": 39.921,
        "lng": -75.261
    },
    {
        "state": "SC",
        "city": "Newberry",
        "lat": 34.2813,
        "lng": -81.601
    },
    {
        "state": "MN",
        "city": "Victoria",
        "lat": 44.8634,
        "lng": -93.6585
    },
    {
        "state": "SC",
        "city": "Powdersville",
        "lat": 34.7826,
        "lng": -82.4959
    },
    {
        "state": "SC",
        "city": "Fountain Inn",
        "lat": 34.6989,
        "lng": -82.2005
    },
    {
        "state": "TX",
        "city": "Clute",
        "lat": 29.0256,
        "lng": -95.3975
    },
    {
        "state": "PA",
        "city": "Broomall",
        "lat": 39.9688,
        "lng": -75.354
    },
    {
        "state": "NE",
        "city": "Lexington",
        "lat": 40.7779,
        "lng": -99.7461
    },
    {
        "state": "TX",
        "city": "La Homa",
        "lat": 26.2796,
        "lng": -98.3575
    },
    {
        "state": "NY",
        "city": "Myers Corner",
        "lat": 41.5864,
        "lng": -73.8793
    },
    {
        "state": "NY",
        "city": "West Haverstraw",
        "lat": 41.2063,
        "lng": -73.9884
    },
    {
        "state": "VT",
        "city": "Essex Junction",
        "lat": 44.4902,
        "lng": -73.1141
    },
    {
        "state": "WV",
        "city": "Vienna",
        "lat": 39.324,
        "lng": -81.5383
    },
    {
        "state": "TX",
        "city": "Galena Park",
        "lat": 29.7452,
        "lng": -95.2333
    },
    {
        "state": "MD",
        "city": "Friendly",
        "lat": 38.7601,
        "lng": -76.9642
    },
    {
        "state": "MO",
        "city": "Bellefontaine Neighbors",
        "lat": 38.7529,
        "lng": -90.228
    },
    {
        "state": "MD",
        "city": "Bel Air",
        "lat": 39.5348,
        "lng": -76.346
    },
    {
        "state": "NJ",
        "city": "Kendall Park",
        "lat": 40.4135,
        "lng": -74.5631
    },
    {
        "state": "MN",
        "city": "Little Canada",
        "lat": 45.0244,
        "lng": -93.0863
    },
    {
        "state": "WI",
        "city": "Monroe",
        "lat": 42.603,
        "lng": -89.6381
    },
    {
        "state": "CA",
        "city": "Blackhawk",
        "lat": 37.8159,
        "lng": -121.9071
    },
    {
        "state": "NC",
        "city": "Mount Airy",
        "lat": 36.5083,
        "lng": -80.6155
    },
    {
        "state": "PA",
        "city": "Nanticoke",
        "lat": 41.2005,
        "lng": -76.0003
    },
    {
        "state": "FL",
        "city": "West Perrine",
        "lat": 25.6061,
        "lng": -80.3639
    },
    {
        "state": "OH",
        "city": "Ironton",
        "lat": 38.5323,
        "lng": -82.6779
    },
    {
        "state": "VA",
        "city": "Lake Barcroft",
        "lat": 38.8514,
        "lng": -77.1579
    },
    {
        "state": "WA",
        "city": "Sumner",
        "lat": 47.2189,
        "lng": -122.2338
    },
    {
        "state": "AR",
        "city": "Camden",
        "lat": 33.5672,
        "lng": -92.8467
    },
    {
        "state": "OR",
        "city": "Cottage Grove",
        "lat": 43.796,
        "lng": -123.0573
    },
    {
        "state": "CA",
        "city": "Fairview",
        "lat": 37.6758,
        "lng": -122.0473
    },
    {
        "state": "NC",
        "city": "Wendell",
        "lat": 35.7819,
        "lng": -78.3952
    },
    {
        "state": "MS",
        "city": "Yazoo City",
        "lat": 32.8619,
        "lng": -90.4075
    },
    {
        "state": "FL",
        "city": "Alachua",
        "lat": 29.7779,
        "lng": -82.4832
    },
    {
        "state": "WA",
        "city": "Airway Heights",
        "lat": 47.6459,
        "lng": -117.5792
    },
    {
        "state": "GA",
        "city": "Scottdale",
        "lat": 33.795,
        "lng": -84.2634
    },
    {
        "state": "CA",
        "city": "Lakeland Village",
        "lat": 33.648,
        "lng": -117.3706
    },
    {
        "state": "VA",
        "city": "Yorkshire",
        "lat": 38.7882,
        "lng": -77.4496
    },
    {
        "state": "TN",
        "city": "Millington",
        "lat": 35.335,
        "lng": -89.8991
    },
    {
        "state": "IA",
        "city": "Pella",
        "lat": 41.4052,
        "lng": -92.9189
    },
    {
        "state": "IL",
        "city": "Campton Hills",
        "lat": 41.9498,
        "lng": -88.4166
    },
    {
        "state": "OR",
        "city": "Damascus",
        "lat": 45.4233,
        "lng": -122.4436
    },
    {
        "state": "MI",
        "city": "Beverly Hills",
        "lat": 42.522,
        "lng": -83.2423
    },
    {
        "state": "IA",
        "city": "Le Mars",
        "lat": 42.781,
        "lng": -96.1733
    },
    {
        "state": "CO",
        "city": "Monument",
        "lat": 39.0736,
        "lng": -104.8467
    },
    {
        "state": "TX",
        "city": "Sweetwater",
        "lat": 32.4692,
        "lng": -100.4092
    },
    {
        "state": "MO",
        "city": "Excelsior Springs",
        "lat": 39.339,
        "lng": -94.24
    },
    {
        "state": "SC",
        "city": "Red Bank",
        "lat": 33.9309,
        "lng": -81.2322
    },
    {
        "state": "OH",
        "city": "Shiloh",
        "lat": 39.8159,
        "lng": -84.2317
    },
    {
        "state": "CO",
        "city": "The Pinery",
        "lat": 39.4462,
        "lng": -104.7591
    },
    {
        "state": "IL",
        "city": "River Grove",
        "lat": 41.9243,
        "lng": -87.8379
    },
    {
        "state": "NC",
        "city": "Pineville",
        "lat": 35.0864,
        "lng": -80.8915
    },
    {
        "state": "NY",
        "city": "North Bellport",
        "lat": 40.7868,
        "lng": -72.9457
    },
    {
        "state": "IL",
        "city": "Riverdale",
        "lat": 41.6441,
        "lng": -87.6366
    },
    {
        "state": "OH",
        "city": "Reading",
        "lat": 39.2242,
        "lng": -84.4333
    },
    {
        "state": "WA",
        "city": "Alderwood Manor",
        "lat": 47.8146,
        "lng": -122.2672
    },
    {
        "state": "AL",
        "city": "Saks",
        "lat": 33.7118,
        "lng": -85.8536
    },
    {
        "state": "WA",
        "city": "Felida",
        "lat": 45.7138,
        "lng": -122.7103
    },
    {
        "state": "OH",
        "city": "New Albany",
        "lat": 40.0809,
        "lng": -82.7848
    },
    {
        "state": "OR",
        "city": "Fairview",
        "lat": 45.5469,
        "lng": -122.439
    },
    {
        "state": "VA",
        "city": "Loudoun Valley Estates",
        "lat": 38.977,
        "lng": -77.5053
    },
    {
        "state": "SC",
        "city": "Forest Acres",
        "lat": 34.0323,
        "lng": -80.9716
    },
    {
        "state": "UT",
        "city": "Stansbury Park",
        "lat": 40.6356,
        "lng": -112.3054
    },
    {
        "state": "NC",
        "city": "Winterville",
        "lat": 35.5291,
        "lng": -77.4
    },
    {
        "state": "CA",
        "city": "Soquel",
        "lat": 36.9978,
        "lng": -121.9483
    },
    {
        "state": "FL",
        "city": "Lighthouse Point",
        "lat": 26.2785,
        "lng": -80.0891
    },
    {
        "state": "CA",
        "city": "Hillcrest",
        "lat": 35.379,
        "lng": -118.9578
    },
    {
        "state": "OH",
        "city": "Heath",
        "lat": 40.0241,
        "lng": -82.4413
    },
    {
        "state": "MO",
        "city": "Kearney",
        "lat": 39.355,
        "lng": -94.3599
    },
    {
        "state": "TX",
        "city": "Bonham",
        "lat": 33.588,
        "lng": -96.1901
    },
    {
        "state": "WA",
        "city": "Shelton",
        "lat": 47.2186,
        "lng": -123.1121
    },
    {
        "state": "NJ",
        "city": "Somers Point",
        "lat": 39.3167,
        "lng": -74.6066
    },
    {
        "state": "NJ",
        "city": "Lake Hopatcong",
        "lat": 40.9599,
        "lng": -74.6094
    },
    {
        "state": "TX",
        "city": "Bellmead",
        "lat": 31.6026,
        "lng": -97.0897
    },
    {
        "state": "NM",
        "city": "Espanola",
        "lat": 36.0044,
        "lng": -106.0686
    },
    {
        "state": "FL",
        "city": "Palatka",
        "lat": 29.6493,
        "lng": -81.6705
    },
    {
        "state": "IN",
        "city": "Bluffton",
        "lat": 40.7424,
        "lng": -85.173
    },
    {
        "state": "OH",
        "city": "Vermilion",
        "lat": 41.4103,
        "lng": -82.3214
    },
    {
        "state": "HI",
        "city": "Waimea",
        "lat": 20.0124,
        "lng": -155.6381
    },
    {
        "state": "WA",
        "city": "Lake Morton-Berrydale",
        "lat": 47.3325,
        "lng": -122.1032
    },
    {
        "state": "NE",
        "city": "Chalco",
        "lat": 41.1817,
        "lng": -96.1353
    },
    {
        "state": "IA",
        "city": "Pleasant Hill",
        "lat": 41.5867,
        "lng": -93.4953
    },
    {
        "state": "WI",
        "city": "Portage",
        "lat": 43.5489,
        "lng": -89.4658
    },
    {
        "state": "MI",
        "city": "Flat Rock",
        "lat": 42.0991,
        "lng": -83.2716
    },
    {
        "state": "AL",
        "city": "Valley",
        "lat": 32.8088,
        "lng": -85.181
    },
    {
        "state": "OR",
        "city": "Silverton",
        "lat": 45.003,
        "lng": -122.7808
    },
    {
        "state": "WA",
        "city": "Yelm",
        "lat": 46.9398,
        "lng": -122.6262
    },
    {
        "state": "VA",
        "city": "Difficult Run",
        "lat": 38.9016,
        "lng": -77.3471
    },
    {
        "state": "GA",
        "city": "Lovejoy",
        "lat": 33.4426,
        "lng": -84.3177
    },
    {
        "state": "OK",
        "city": "Warr Acres",
        "lat": 35.5285,
        "lng": -97.6182
    },
    {
        "state": "CO",
        "city": "Rifle",
        "lat": 39.5362,
        "lng": -107.7729
    },
    {
        "state": "IN",
        "city": "Wabash",
        "lat": 40.8034,
        "lng": -85.8301
    },
    {
        "state": "MO",
        "city": "Smithville",
        "lat": 39.3919,
        "lng": -94.5747
    },
    {
        "state": "MN",
        "city": "Fairmont",
        "lat": 43.6441,
        "lng": -94.4621
    },
    {
        "state": "NJ",
        "city": "Marlton",
        "lat": 39.9014,
        "lng": -74.9294
    },
    {
        "state": "MI",
        "city": "Cadillac",
        "lat": 44.2493,
        "lng": -85.4164
    },
    {
        "state": "WA",
        "city": "Mount Vista",
        "lat": 45.7373,
        "lng": -122.6316
    },
    {
        "state": "IA",
        "city": "Waverly",
        "lat": 42.725,
        "lng": -92.4708
    },
    {
        "state": "CO",
        "city": "Fairmount",
        "lat": 39.7931,
        "lng": -105.1711
    },
    {
        "state": "NY",
        "city": "Sleepy Hollow",
        "lat": 41.0936,
        "lng": -73.8722
    },
    {
        "state": "FL",
        "city": "Gateway",
        "lat": 26.5793,
        "lng": -81.7446
    },
    {
        "state": "CA",
        "city": "Farmersville",
        "lat": 36.305,
        "lng": -119.2083
    },
    {
        "state": "NC",
        "city": "Spout Springs",
        "lat": 35.2724,
        "lng": -79.0331
    },
    {
        "state": "MO",
        "city": "Kennett",
        "lat": 36.2403,
        "lng": -90.0481
    },
    {
        "state": "MI",
        "city": "Comstock Park",
        "lat": 43.0438,
        "lng": -85.6778
    },
    {
        "state": "OH",
        "city": "Galion",
        "lat": 40.7385,
        "lng": -82.7792
    },
    {
        "state": "IN",
        "city": "Plymouth",
        "lat": 41.3483,
        "lng": -86.3187
    },
    {
        "state": "CA",
        "city": "Calimesa",
        "lat": 33.9874,
        "lng": -117.0542
    },
    {
        "state": "CA",
        "city": "Shasta Lake",
        "lat": 40.679,
        "lng": -122.3775
    },
    {
        "state": "AR",
        "city": "Arkadelphia",
        "lat": 34.1253,
        "lng": -93.0729
    },
    {
        "state": "TX",
        "city": "Fairview",
        "lat": 33.1399,
        "lng": -96.6117
    },
    {
        "state": "NY",
        "city": "Scotchtown",
        "lat": 41.4765,
        "lng": -74.3668
    },
    {
        "state": "GA",
        "city": "Garden City",
        "lat": 32.0867,
        "lng": -81.1773
    },
    {
        "state": "PA",
        "city": "Woodlyn",
        "lat": 39.8774,
        "lng": -75.3445
    },
    {
        "state": "PA",
        "city": "Northampton",
        "lat": 40.6866,
        "lng": -75.4904
    },
    {
        "state": "NY",
        "city": "Chestnut Ridge",
        "lat": 41.0829,
        "lng": -74.0551
    },
    {
        "state": "MD",
        "city": "White Marsh",
        "lat": 39.3819,
        "lng": -76.4574
    },
    {
        "state": "CT",
        "city": "Trumbull Center",
        "lat": 41.2415,
        "lng": -73.1836
    },
    {
        "state": "CA",
        "city": "Exeter",
        "lat": 36.2941,
        "lng": -119.1459
    },
    {
        "state": "NY",
        "city": "Oneida",
        "lat": 43.0769,
        "lng": -75.6622
    },
    {
        "state": "NY",
        "city": "Watervliet",
        "lat": 42.7243,
        "lng": -73.7068
    },
    {
        "state": "KY",
        "city": "Alexandria",
        "lat": 38.9621,
        "lng": -84.3859
    },
    {
        "state": "OR",
        "city": "Newport",
        "lat": 44.6242,
        "lng": -124.0513
    },
    {
        "state": "PA",
        "city": "Berwick",
        "lat": 41.0555,
        "lng": -76.2492
    },
    {
        "state": "OH",
        "city": "London",
        "lat": 39.8935,
        "lng": -83.4375
    },
    {
        "state": "MD",
        "city": "Burtonsville",
        "lat": 39.1166,
        "lng": -76.9356
    },
    {
        "state": "AL",
        "city": "Clay",
        "lat": 33.6951,
        "lng": -86.609
    },
    {
        "state": "FL",
        "city": "West Vero Corridor",
        "lat": 27.6363,
        "lng": -80.4844
    },
    {
        "state": "TX",
        "city": "Bacliff",
        "lat": 29.5085,
        "lng": -94.9888
    },
    {
        "state": "IL",
        "city": "Wood River",
        "lat": 38.8631,
        "lng": -90.0774
    },
    {
        "state": "NJ",
        "city": "Brookdale",
        "lat": 40.8348,
        "lng": -74.1798
    },
    {
        "state": "TN",
        "city": "Paris",
        "lat": 36.2933,
        "lng": -88.3065
    },
    {
        "state": "NY",
        "city": "South Huntington",
        "lat": 40.8225,
        "lng": -73.3921
    },
    {
        "state": "NC",
        "city": "Waynesville",
        "lat": 35.4854,
        "lng": -82.9996
    },
    {
        "state": "PR",
        "city": "Sabana Grande",
        "lat": 18.0832,
        "lng": -66.9645
    },
    {
        "state": "TX",
        "city": "Raymondville",
        "lat": 26.4759,
        "lng": -97.7769
    },
    {
        "state": "KY",
        "city": "Versailles",
        "lat": 38.0486,
        "lng": -84.7258
    },
    {
        "state": "SC",
        "city": "Murrells Inlet",
        "lat": 33.556,
        "lng": -79.0594
    },
    {
        "state": "IA",
        "city": "Fort Madison",
        "lat": 40.6207,
        "lng": -91.3509
    },
    {
        "state": "TN",
        "city": "Lenoir City",
        "lat": 35.8111,
        "lng": -84.2818
    },
    {
        "state": "MD",
        "city": "Forestville",
        "lat": 38.8518,
        "lng": -76.8708
    },
    {
        "state": "MD",
        "city": "La Plata",
        "lat": 38.5352,
        "lng": -76.97
    },
    {
        "state": "CA",
        "city": "Marina del Rey",
        "lat": 33.9765,
        "lng": -118.4486
    },
    {
        "state": "UT",
        "city": "Tremonton",
        "lat": 41.7187,
        "lng": -112.189
    },
    {
        "state": "IA",
        "city": "Carroll",
        "lat": 42.0699,
        "lng": -94.8646
    },
    {
        "state": "FL",
        "city": "Pine Ridge",
        "lat": 28.933,
        "lng": -82.4761
    },
    {
        "state": "OH",
        "city": "Tipp City",
        "lat": 39.9644,
        "lng": -84.1866
    },
    {
        "state": "TX",
        "city": "Rockport",
        "lat": 28.029,
        "lng": -97.0722
    },
    {
        "state": "AK",
        "city": "North Lakes",
        "lat": 61.6191,
        "lng": -149.311
    },
    {
        "state": "UT",
        "city": "Alpine",
        "lat": 40.4629,
        "lng": -111.7724
    },
    {
        "state": "FL",
        "city": "Milton",
        "lat": 30.6286,
        "lng": -87.0522
    },
    {
        "state": "IN",
        "city": "Whitestown",
        "lat": 39.9706,
        "lng": -86.3612
    },
    {
        "state": "WI",
        "city": "Elkhorn",
        "lat": 42.6713,
        "lng": -88.5377
    },
    {
        "state": "OR",
        "city": "North Bend",
        "lat": 43.4075,
        "lng": -124.2364
    },
    {
        "state": "AL",
        "city": "Boaz",
        "lat": 34.1985,
        "lng": -86.1529
    },
    {
        "state": "CA",
        "city": "East Whittier",
        "lat": 33.9244,
        "lng": -117.9887
    },
    {
        "state": "FL",
        "city": "Davenport",
        "lat": 28.1587,
        "lng": -81.6083
    },
    {
        "state": "TX",
        "city": "Robstown",
        "lat": 27.794,
        "lng": -97.6692
    },
    {
        "state": "CA",
        "city": "San Diego Country Estates",
        "lat": 33.0094,
        "lng": -116.7874
    },
    {
        "state": "NY",
        "city": "New Hyde Park",
        "lat": 40.7323,
        "lng": -73.6858
    },
    {
        "state": "NY",
        "city": "East Setauket",
        "lat": 40.921,
        "lng": -73.0942
    },
    {
        "state": "FL",
        "city": "Rotonda",
        "lat": 26.8844,
        "lng": -82.2791
    },
    {
        "state": "MD",
        "city": "Halfway",
        "lat": 39.6162,
        "lng": -77.7703
    },
    {
        "state": "IL",
        "city": "Highland",
        "lat": 38.7602,
        "lng": -89.6812
    },
    {
        "state": "IL",
        "city": "Pingree Grove",
        "lat": 42.0855,
        "lng": -88.4358
    },
    {
        "state": "GA",
        "city": "Cordele",
        "lat": 31.9563,
        "lng": -83.7694
    },
    {
        "state": "MS",
        "city": "Flowood",
        "lat": 32.3359,
        "lng": -90.0802
    },
    {
        "state": "PA",
        "city": "Columbia",
        "lat": 40.0347,
        "lng": -76.4944
    },
    {
        "state": "GA",
        "city": "Fort Oglethorpe",
        "lat": 34.9318,
        "lng": -85.246
    },
    {
        "state": "MI",
        "city": "Alpena",
        "lat": 45.074,
        "lng": -83.4402
    },
    {
        "state": "LA",
        "city": "Carencro",
        "lat": 30.3126,
        "lng": -92.0388
    },
    {
        "state": "DE",
        "city": "Claymont",
        "lat": 39.8032,
        "lng": -75.4607
    },
    {
        "state": "CA",
        "city": "Lake Arrowhead",
        "lat": 34.2531,
        "lng": -117.1944
    },
    {
        "state": "AL",
        "city": "Rainbow City",
        "lat": 33.9336,
        "lng": -86.0922
    },
    {
        "state": "OR",
        "city": "Astoria",
        "lat": 46.1856,
        "lng": -123.8053
    },
    {
        "state": "IN",
        "city": "Kendallville",
        "lat": 41.4441,
        "lng": -85.2578
    },
    {
        "state": "MD",
        "city": "Marlton",
        "lat": 38.762,
        "lng": -76.7857
    },
    {
        "state": "GA",
        "city": "Cedartown",
        "lat": 34.0223,
        "lng": -85.2479
    },
    {
        "state": "WA",
        "city": "Port Townsend",
        "lat": 48.122,
        "lng": -122.7877
    },
    {
        "state": "WI",
        "city": "New Richmond",
        "lat": 45.125,
        "lng": -92.5377
    },
    {
        "state": "CA",
        "city": "Corte Madera",
        "lat": 37.9238,
        "lng": -122.5128
    },
    {
        "state": "OR",
        "city": "Molalla",
        "lat": 45.1502,
        "lng": -122.5845
    },
    {
        "state": "KY",
        "city": "Paris",
        "lat": 38.2016,
        "lng": -84.2718
    },
    {
        "state": "UT",
        "city": "Vernal",
        "lat": 40.4517,
        "lng": -109.5378
    },
    {
        "state": "LA",
        "city": "Jefferson",
        "lat": 29.9609,
        "lng": -90.1554
    },
    {
        "state": "KY",
        "city": "Franklin",
        "lat": 36.7177,
        "lng": -86.5595
    },
    {
        "state": "NY",
        "city": "North Gates",
        "lat": 43.1718,
        "lng": -77.7064
    },
    {
        "state": "PR",
        "city": "Cabo Rojo",
        "lat": 18.0867,
        "lng": -67.1482
    },
    {
        "state": "MN",
        "city": "Hermantown",
        "lat": 46.8057,
        "lng": -92.2407
    },
    {
        "state": "WA",
        "city": "Snohomish",
        "lat": 47.9276,
        "lng": -122.0969
    },
    {
        "state": "WI",
        "city": "Hobart",
        "lat": 44.4967,
        "lng": -88.1602
    },
    {
        "state": "WI",
        "city": "Greenville",
        "lat": 44.3003,
        "lng": -88.5365
    },
    {
        "state": "NJ",
        "city": "Hillsdale",
        "lat": 41.0074,
        "lng": -74.044
    },
    {
        "state": "CA",
        "city": "Garden Acres",
        "lat": 37.9637,
        "lng": -121.2296
    },
    {
        "state": "AZ",
        "city": "Safford",
        "lat": 32.8335,
        "lng": -109.6964
    },
    {
        "state": "NJ",
        "city": "Hackettstown",
        "lat": 40.854,
        "lng": -74.8257
    },
    {
        "state": "VA",
        "city": "Warrenton",
        "lat": 38.7176,
        "lng": -77.7976
    },
    {
        "state": "OR",
        "city": "Baker City",
        "lat": 44.7749,
        "lng": -117.832
    },
    {
        "state": "PR",
        "city": "Isabela",
        "lat": 18.4991,
        "lng": -67.022
    },
    {
        "state": "CO",
        "city": "Gunbarrel",
        "lat": 40.0632,
        "lng": -105.1713
    },
    {
        "state": "CO",
        "city": "Glenwood Springs",
        "lat": 39.5455,
        "lng": -107.3347
    },
    {
        "state": "FL",
        "city": "Progress Village",
        "lat": 27.8831,
        "lng": -82.3593
    },
    {
        "state": "GA",
        "city": "Cairo",
        "lat": 30.879,
        "lng": -84.205
    },
    {
        "state": "CA",
        "city": "Quartz Hill",
        "lat": 34.6527,
        "lng": -118.2163
    },
    {
        "state": "MD",
        "city": "Brandywine",
        "lat": 38.6963,
        "lng": -76.8846
    },
    {
        "state": "OH",
        "city": "Cambridge",
        "lat": 40.0221,
        "lng": -81.5869
    },
    {
        "state": "AL",
        "city": "Spanish Fort",
        "lat": 30.7254,
        "lng": -87.8597
    },
    {
        "state": "WY",
        "city": "Cody",
        "lat": 44.5213,
        "lng": -109.0548
    },
    {
        "state": "CA",
        "city": "Rio Vista",
        "lat": 38.1765,
        "lng": -121.7025
    },
    {
        "state": "KY",
        "city": "La Grange",
        "lat": 38.3987,
        "lng": -85.375
    },
    {
        "state": "TX",
        "city": "San Elizario",
        "lat": 31.5793,
        "lng": -106.2632
    },
    {
        "state": "TN",
        "city": "Atoka",
        "lat": 35.4239,
        "lng": -89.7861
    },
    {
        "state": "NY",
        "city": "East Rockaway",
        "lat": 40.6432,
        "lng": -73.6672
    },
    {
        "state": "FL",
        "city": "Bee Ridge",
        "lat": 27.2855,
        "lng": -82.4731
    },
    {
        "state": "NJ",
        "city": "Waldwick",
        "lat": 41.0133,
        "lng": -74.1259
    },
    {
        "state": "MI",
        "city": "Howell",
        "lat": 42.6078,
        "lng": -83.9339
    },
    {
        "state": "NJ",
        "city": "Lake Hiawatha",
        "lat": 40.8816,
        "lng": -74.3826
    },
    {
        "state": "MS",
        "city": "West Point",
        "lat": 33.6064,
        "lng": -88.6572
    },
    {
        "state": "OH",
        "city": "Struthers",
        "lat": 41.051,
        "lng": -80.592
    },
    {
        "state": "NJ",
        "city": "Browns Mills",
        "lat": 39.9737,
        "lng": -74.569
    },
    {
        "state": "TN",
        "city": "Clinton",
        "lat": 36.0981,
        "lng": -84.1283
    },
    {
        "state": "NY",
        "city": "Orange Lake",
        "lat": 41.5369,
        "lng": -74.1005
    },
    {
        "state": "TX",
        "city": "Scenic Oaks",
        "lat": 29.7038,
        "lng": -98.6712
    },
    {
        "state": "NJ",
        "city": "Blackwells Mills",
        "lat": 40.4773,
        "lng": -74.5976
    },
    {
        "state": "KY",
        "city": "Oakbrook",
        "lat": 38.9996,
        "lng": -84.6797
    },
    {
        "state": "KY",
        "city": "Francisville",
        "lat": 39.1068,
        "lng": -84.7277
    },
    {
        "state": "PR",
        "city": "Pajaros",
        "lat": 18.361,
        "lng": -66.2184
    },
    {
        "state": "TX",
        "city": "Elgin",
        "lat": 30.3526,
        "lng": -97.3883
    },
    {
        "state": "HI",
        "city": "Makaha",
        "lat": 21.4739,
        "lng": -158.2102
    },
    {
        "state": "NJ",
        "city": "Maywood",
        "lat": 40.9025,
        "lng": -74.0634
    },
    {
        "state": "WV",
        "city": "Cross Lanes",
        "lat": 38.4351,
        "lng": -81.7707
    },
    {
        "state": "WV",
        "city": "Cheat Lake",
        "lat": 39.667,
        "lng": -79.8564
    },
    {
        "state": "MO",
        "city": "Harrisonville",
        "lat": 38.653,
        "lng": -94.3467
    },
    {
        "state": "NY",
        "city": "Airmont",
        "lat": 41.0992,
        "lng": -74.0989
    },
    {
        "state": "NJ",
        "city": "East Rutherford",
        "lat": 40.8179,
        "lng": -74.0854
    },
    {
        "state": "PR",
        "city": "Corozal",
        "lat": 18.341,
        "lng": -66.3124
    },
    {
        "state": "WI",
        "city": "Reedsburg",
        "lat": 43.5348,
        "lng": -89.9965
    },
    {
        "state": "MI",
        "city": "Grosse Pointe Farms",
        "lat": 42.4068,
        "lng": -82.8993
    },
    {
        "state": "TX",
        "city": "Vernon",
        "lat": 34.1479,
        "lng": -99.3
    },
    {
        "state": "VA",
        "city": "George Mason",
        "lat": 38.8356,
        "lng": -77.3186
    },
    {
        "state": "MD",
        "city": "Chesapeake Ranch Estates",
        "lat": 38.3574,
        "lng": -76.4147
    },
    {
        "state": "KY",
        "city": "Mayfield",
        "lat": 36.7371,
        "lng": -88.6447
    },
    {
        "state": "PA",
        "city": "Roslyn",
        "lat": 40.1311,
        "lng": -75.1374
    },
    {
        "state": "MD",
        "city": "Fort Meade",
        "lat": 39.1061,
        "lng": -76.7437
    },
    {
        "state": "AR",
        "city": "Lowell",
        "lat": 36.2561,
        "lng": -94.1532
    },
    {
        "state": "NJ",
        "city": "Kinnelon",
        "lat": 40.9847,
        "lng": -74.3862
    },
    {
        "state": "NJ",
        "city": "Budd Lake",
        "lat": 40.8733,
        "lng": -74.7375
    },
    {
        "state": "PA",
        "city": "Brentwood",
        "lat": 40.3734,
        "lng": -79.9757
    },
    {
        "state": "NJ",
        "city": "Woodbury",
        "lat": 39.8379,
        "lng": -75.1524
    },
    {
        "state": "OR",
        "city": "Independence",
        "lat": 44.8547,
        "lng": -123.1952
    },
    {
        "state": "FL",
        "city": "Cape Canaveral",
        "lat": 28.3933,
        "lng": -80.6049
    },
    {
        "state": "NJ",
        "city": "Wood-Ridge",
        "lat": 40.8508,
        "lng": -74.0878
    },
    {
        "state": "NY",
        "city": "Fairmount",
        "lat": 43.0414,
        "lng": -76.2485
    },
    {
        "state": "UT",
        "city": "Cedar Hills",
        "lat": 40.4135,
        "lng": -111.7531
    },
    {
        "state": "AL",
        "city": "Fairfield",
        "lat": 33.4747,
        "lng": -86.9194
    },
    {
        "state": "MD",
        "city": "Walker Mill",
        "lat": 38.8758,
        "lng": -76.8854
    },
    {
        "state": "MI",
        "city": "Marysville",
        "lat": 42.9084,
        "lng": -82.4806
    },
    {
        "state": "OH",
        "city": "Willoughby Hills",
        "lat": 41.5873,
        "lng": -81.4333
    },
    {
        "state": "OH",
        "city": "East Liverpool",
        "lat": 40.6333,
        "lng": -80.5677
    },
    {
        "state": "MN",
        "city": "Detroit Lakes",
        "lat": 46.806,
        "lng": -95.8449
    },
    {
        "state": "VA",
        "city": "Woodburn",
        "lat": 38.8503,
        "lng": -77.2322
    },
    {
        "state": "TX",
        "city": "Bastrop",
        "lat": 30.1113,
        "lng": -97.3176
    },
    {
        "state": "WA",
        "city": "DuPont",
        "lat": 47.1079,
        "lng": -122.6495
    },
    {
        "state": "TN",
        "city": "Halls",
        "lat": 36.0817,
        "lng": -83.9344
    },
    {
        "state": "MI",
        "city": "Muskegon Heights",
        "lat": 43.2023,
        "lng": -86.2421
    },
    {
        "state": "MD",
        "city": "Fallston",
        "lat": 39.5332,
        "lng": -76.4452
    },
    {
        "state": "WA",
        "city": "Picnic Point",
        "lat": 47.8744,
        "lng": -122.3077
    },
    {
        "state": "IN",
        "city": "Sellersburg",
        "lat": 38.4028,
        "lng": -85.7706
    },
    {
        "state": "IL",
        "city": "Winfield",
        "lat": 41.8787,
        "lng": -88.1507
    },
    {
        "state": "WI",
        "city": "Sparta",
        "lat": 43.9377,
        "lng": -90.8131
    },
    {
        "state": "NJ",
        "city": "Villas",
        "lat": 39.0157,
        "lng": -74.935
    },
    {
        "state": "OR",
        "city": "Rockcreek",
        "lat": 45.5526,
        "lng": -122.876
    },
    {
        "state": "CA",
        "city": "Capitola",
        "lat": 36.9773,
        "lng": -121.9537
    },
    {
        "state": "NY",
        "city": "Rye Brook",
        "lat": 41.0302,
        "lng": -73.6864
    },
    {
        "state": "TX",
        "city": "Fair Oaks Ranch",
        "lat": 29.7467,
        "lng": -98.6376
    },
    {
        "state": "MO",
        "city": "Ellisville",
        "lat": 38.5897,
        "lng": -90.5884
    },
    {
        "state": "PA",
        "city": "Uniontown",
        "lat": 39.8993,
        "lng": -79.7246
    },
    {
        "state": "OK",
        "city": "Coweta",
        "lat": 35.9683,
        "lng": -95.6545
    },
    {
        "state": "NY",
        "city": "Ogdensburg",
        "lat": 44.7088,
        "lng": -75.4717
    },
    {
        "state": "KS",
        "city": "Mission",
        "lat": 39.027,
        "lng": -94.6568
    },
    {
        "state": "CA",
        "city": "Golden Hills",
        "lat": 35.1409,
        "lng": -118.4968
    },
    {
        "state": "VA",
        "city": "Belmont",
        "lat": 39.0622,
        "lng": -77.4985
    },
    {
        "state": "FL",
        "city": "St. Augustine Shores",
        "lat": 29.8039,
        "lng": -81.3086
    },
    {
        "state": "OH",
        "city": "Beckett Ridge",
        "lat": 39.3448,
        "lng": -84.438
    },
    {
        "state": "OH",
        "city": "Wapakoneta",
        "lat": 40.5664,
        "lng": -84.1916
    },
    {
        "state": "IA",
        "city": "Keokuk",
        "lat": 40.4095,
        "lng": -91.4031
    },
    {
        "state": "IN",
        "city": "Greencastle",
        "lat": 39.6432,
        "lng": -86.8418
    },
    {
        "state": "FL",
        "city": "Richmond Heights",
        "lat": 25.6347,
        "lng": -80.3721
    },
    {
        "state": "IL",
        "city": "Sauk Village",
        "lat": 41.4906,
        "lng": -87.5706
    },
    {
        "state": "VA",
        "city": "Independent Hill",
        "lat": 38.6404,
        "lng": -77.4089
    },
    {
        "state": "OR",
        "city": "Sweet Home",
        "lat": 44.4023,
        "lng": -122.7028
    },
    {
        "state": "LA",
        "city": "DeRidder",
        "lat": 30.8468,
        "lng": -93.2931
    },
    {
        "state": "MI",
        "city": "Lambertville",
        "lat": 41.7484,
        "lng": -83.6244
    },
    {
        "state": "NY",
        "city": "Fort Salonga",
        "lat": 40.9068,
        "lng": -73.2996
    },
    {
        "state": "NJ",
        "city": "Succasunna",
        "lat": 40.853,
        "lng": -74.6568
    },
    {
        "state": "FL",
        "city": "Bardmoor",
        "lat": 27.8574,
        "lng": -82.7534
    },
    {
        "state": "IL",
        "city": "Peru",
        "lat": 41.3482,
        "lng": -89.1371
    },
    {
        "state": "NY",
        "city": "Loudonville",
        "lat": 42.7068,
        "lng": -73.7665
    },
    {
        "state": "GA",
        "city": "Jesup",
        "lat": 31.5992,
        "lng": -81.8895
    },
    {
        "state": "LA",
        "city": "Jennings",
        "lat": 30.2233,
        "lng": -92.6582
    },
    {
        "state": "SC",
        "city": "Little River",
        "lat": 33.8786,
        "lng": -78.6393
    },
    {
        "state": "TX",
        "city": "Vidor",
        "lat": 30.1291,
        "lng": -93.9967
    },
    {
        "state": "PR",
        "city": "Coamo",
        "lat": 18.0765,
        "lng": -66.3638
    },
    {
        "state": "MN",
        "city": "Arden Hills",
        "lat": 45.0721,
        "lng": -93.167
    },
    {
        "state": "WA",
        "city": "College Place",
        "lat": 46.0419,
        "lng": -118.3878
    },
    {
        "state": "CA",
        "city": "Madera Acres",
        "lat": 37.0123,
        "lng": -120.0799
    },
    {
        "state": "CO",
        "city": "Alamosa",
        "lat": 37.4752,
        "lng": -105.877
    },
    {
        "state": "OR",
        "city": "Lincoln City",
        "lat": 44.9751,
        "lng": -124.0072
    },
    {
        "state": "FL",
        "city": "Avon Park",
        "lat": 27.5898,
        "lng": -81.5068
    },
    {
        "state": "MD",
        "city": "Chevy Chase",
        "lat": 38.9944,
        "lng": -77.0738
    },
    {
        "state": "FL",
        "city": "Marathon",
        "lat": 24.7263,
        "lng": -81.0374
    },
    {
        "state": "MS",
        "city": "Bay St. Louis",
        "lat": 30.3281,
        "lng": -89.3774
    },
    {
        "state": "FL",
        "city": "Beverly Hills",
        "lat": 28.9176,
        "lng": -82.4542
    },
    {
        "state": "WA",
        "city": "Terrace Heights",
        "lat": 46.6045,
        "lng": -120.4393
    },
    {
        "state": "TX",
        "city": "Heath",
        "lat": 32.8439,
        "lng": -96.4674
    },
    {
        "state": "CO",
        "city": "Stonegate",
        "lat": 39.5357,
        "lng": -104.8032
    },
    {
        "state": "MD",
        "city": "Garrison",
        "lat": 39.4023,
        "lng": -76.7514
    },
    {
        "state": "NJ",
        "city": "Keansburg",
        "lat": 40.4469,
        "lng": -74.1315
    },
    {
        "state": "NC",
        "city": "Washington",
        "lat": 35.5586,
        "lng": -77.0545
    },
    {
        "state": "FL",
        "city": "Green Cove Springs",
        "lat": 29.9904,
        "lng": -81.6807
    },
    {
        "state": "AL",
        "city": "Fultondale",
        "lat": 33.6174,
        "lng": -86.8014
    },
    {
        "state": "PA",
        "city": "Croydon",
        "lat": 40.0911,
        "lng": -74.8975
    },
    {
        "state": "NJ",
        "city": "Monmouth Junction",
        "lat": 40.3754,
        "lng": -74.5582
    },
    {
        "state": "AZ",
        "city": "Sedona",
        "lat": 34.8581,
        "lng": -111.7941
    },
    {
        "state": "TN",
        "city": "Brownsville",
        "lat": 35.589,
        "lng": -89.2578
    },
    {
        "state": "OR",
        "city": "Eagle Point",
        "lat": 42.4677,
        "lng": -122.8016
    },
    {
        "state": "MN",
        "city": "Cambridge",
        "lat": 45.5612,
        "lng": -93.2283
    },
    {
        "state": "PA",
        "city": "Morrisville",
        "lat": 40.2074,
        "lng": -74.78
    },
    {
        "state": "GA",
        "city": "Thomaston",
        "lat": 32.8907,
        "lng": -84.3272
    },
    {
        "state": "IN",
        "city": "Decatur",
        "lat": 40.8286,
        "lng": -84.9277
    },
    {
        "state": "TX",
        "city": "Ingleside",
        "lat": 27.8703,
        "lng": -97.2075
    },
    {
        "state": "NJ",
        "city": "Pine Lake Park",
        "lat": 40.0017,
        "lng": -74.2595
    },
    {
        "state": "NY",
        "city": "Fredonia",
        "lat": 42.4407,
        "lng": -79.3319
    },
    {
        "state": "CA",
        "city": "Mentone",
        "lat": 34.0609,
        "lng": -117.1108
    },
    {
        "state": "IL",
        "city": "Harvard",
        "lat": 42.4296,
        "lng": -88.6211
    },
    {
        "state": "NJ",
        "city": "Lake Mohawk",
        "lat": 41.0149,
        "lng": -74.664
    },
    {
        "state": "GA",
        "city": "Flowery Branch",
        "lat": 34.1712,
        "lng": -83.9142
    },
    {
        "state": "NC",
        "city": "Rolesville",
        "lat": 35.9223,
        "lng": -78.4656
    },
    {
        "state": "FL",
        "city": "Cypress Gardens",
        "lat": 28.0036,
        "lng": -81.6857
    },
    {
        "state": "NJ",
        "city": "White Horse",
        "lat": 40.1919,
        "lng": -74.7023
    },
    {
        "state": "CA",
        "city": "Country Club",
        "lat": 37.9687,
        "lng": -121.3408
    },
    {
        "state": "TX",
        "city": "Eidson Road",
        "lat": 28.6677,
        "lng": -100.4788
    },
    {
        "state": "AK",
        "city": "Tanaina",
        "lat": 61.6576,
        "lng": -149.4263
    },
    {
        "state": "PA",
        "city": "Sunbury",
        "lat": 40.8616,
        "lng": -76.7871
    },
    {
        "state": "UT",
        "city": "Hyrum",
        "lat": 41.6325,
        "lng": -111.8445
    },
    {
        "state": "PA",
        "city": "Canonsburg",
        "lat": 40.2643,
        "lng": -80.1867
    },
    {
        "state": "MD",
        "city": "Mount Airy",
        "lat": 39.3742,
        "lng": -77.1534
    },
    {
        "state": "AL",
        "city": "Pike Road",
        "lat": 32.2939,
        "lng": -86.09
    },
    {
        "state": "NM",
        "city": "Silver City",
        "lat": 32.7783,
        "lng": -108.2699
    },
    {
        "state": "VA",
        "city": "University of Virginia",
        "lat": 38.0405,
        "lng": -78.5164
    },
    {
        "state": "VA",
        "city": "Countryside",
        "lat": 39.0518,
        "lng": -77.4124
    },
    {
        "state": "PA",
        "city": "Willow Street",
        "lat": 39.981,
        "lng": -76.2706
    },
    {
        "state": "CA",
        "city": "Orange Cove",
        "lat": 36.6211,
        "lng": -119.3188
    },
    {
        "state": "ME",
        "city": "Brewer",
        "lat": 44.7835,
        "lng": -68.7352
    },
    {
        "state": "MO",
        "city": "Monett",
        "lat": 36.9218,
        "lng": -93.9278
    },
    {
        "state": "NC",
        "city": "Morehead City",
        "lat": 34.7308,
        "lng": -76.7388
    },
    {
        "state": "IL",
        "city": "Itasca",
        "lat": 41.9772,
        "lng": -88.0183
    },
    {
        "state": "NC",
        "city": "St. Stephens",
        "lat": 35.7642,
        "lng": -81.2746
    },
    {
        "state": "LA",
        "city": "Bastrop",
        "lat": 32.7748,
        "lng": -91.9078
    },
    {
        "state": "WI",
        "city": "Sturgeon Bay",
        "lat": 44.8228,
        "lng": -87.366
    },
    {
        "state": "WV",
        "city": "Bluefield",
        "lat": 37.2608,
        "lng": -81.2143
    },
    {
        "state": "ID",
        "city": "Middleton",
        "lat": 43.7113,
        "lng": -116.6157
    },
    {
        "state": "GA",
        "city": "Fair Oaks",
        "lat": 33.9193,
        "lng": -84.5445
    },
    {
        "state": "CT",
        "city": "Sandy Hook",
        "lat": 41.4128,
        "lng": -73.244
    },
    {
        "state": "OH",
        "city": "North College Hill",
        "lat": 39.2175,
        "lng": -84.552
    },
    {
        "state": "MD",
        "city": "Jessup",
        "lat": 39.1488,
        "lng": -76.7772
    },
    {
        "state": "PA",
        "city": "Oil City",
        "lat": 41.4281,
        "lng": -79.7036
    },
    {
        "state": "WI",
        "city": "Hartland",
        "lat": 43.1029,
        "lng": -88.3396
    },
    {
        "state": "KY",
        "city": "Middletown",
        "lat": 38.241,
        "lng": -85.5214
    },
    {
        "state": "IL",
        "city": "Manhattan",
        "lat": 41.4274,
        "lng": -87.9805
    },
    {
        "state": "TX",
        "city": "Jacinto City",
        "lat": 29.7663,
        "lng": -95.241
    },
    {
        "state": "NY",
        "city": "Greenville",
        "lat": 40.9986,
        "lng": -73.8189
    },
    {
        "state": "CT",
        "city": "Kensington",
        "lat": 41.6284,
        "lng": -72.7686
    },
    {
        "state": "NY",
        "city": "New Square",
        "lat": 41.141,
        "lng": -74.0294
    },
    {
        "state": "MD",
        "city": "Bladensburg",
        "lat": 38.9424,
        "lng": -76.9264
    },
    {
        "state": "MS",
        "city": "Indianola",
        "lat": 33.4492,
        "lng": -90.6447
    },
    {
        "state": "HI",
        "city": "Aiea",
        "lat": 21.3865,
        "lng": -157.9232
    },
    {
        "state": "NJ",
        "city": "McKee City",
        "lat": 39.4465,
        "lng": -74.6445
    },
    {
        "state": "OH",
        "city": "Girard",
        "lat": 41.1665,
        "lng": -80.6963
    },
    {
        "state": "NY",
        "city": "West Glens Falls",
        "lat": 43.3057,
        "lng": -73.6964
    },
    {
        "state": "TX",
        "city": "Roanoke",
        "lat": 33.0144,
        "lng": -97.2276
    },
    {
        "state": "KS",
        "city": "Parsons",
        "lat": 37.3405,
        "lng": -95.2958
    },
    {
        "state": "IL",
        "city": "LaSalle",
        "lat": 41.3589,
        "lng": -89.0737
    },
    {
        "state": "PA",
        "city": "Lititz",
        "lat": 40.154,
        "lng": -76.3044
    },
    {
        "state": "ID",
        "city": "Rathdrum",
        "lat": 47.7948,
        "lng": -116.8944
    },
    {
        "state": "FL",
        "city": "Pine Castle",
        "lat": 28.4651,
        "lng": -81.3741
    },
    {
        "state": "OH",
        "city": "Lincoln Village",
        "lat": 39.9532,
        "lng": -83.1314
    },
    {
        "state": "AL",
        "city": "Pleasant Grove",
        "lat": 33.494,
        "lng": -86.9782
    },
    {
        "state": "IL",
        "city": "Boulder Hill",
        "lat": 41.7113,
        "lng": -88.3353
    },
    {
        "state": "NJ",
        "city": "Matawan",
        "lat": 40.4127,
        "lng": -74.2365
    },
    {
        "state": "IL",
        "city": "Mahomet",
        "lat": 40.1888,
        "lng": -88.3901
    },
    {
        "state": "AR",
        "city": "Greenwood",
        "lat": 35.2134,
        "lng": -94.2408
    },
    {
        "state": "NC",
        "city": "Hillsborough",
        "lat": 36.0679,
        "lng": -79.0991
    },
    {
        "state": "NY",
        "city": "Bohemia",
        "lat": 40.7717,
        "lng": -73.1271
    },
    {
        "state": "AL",
        "city": "Meridianville",
        "lat": 34.8729,
        "lng": -86.5722
    },
    {
        "state": "WI",
        "city": "Tomah",
        "lat": 43.9879,
        "lng": -90.4999
    },
    {
        "state": "PA",
        "city": "Middletown",
        "lat": 40.201,
        "lng": -76.7289
    },
    {
        "state": "IN",
        "city": "Mooresville",
        "lat": 39.6022,
        "lng": -86.3681
    },
    {
        "state": "IN",
        "city": "Bargersville",
        "lat": 39.5412,
        "lng": -86.2004
    },
    {
        "state": "TN",
        "city": "Fairview",
        "lat": 35.9815,
        "lng": -87.1291
    },
    {
        "state": "IL",
        "city": "Steger",
        "lat": 41.4723,
        "lng": -87.6176
    },
    {
        "state": "IA",
        "city": "Grinnell",
        "lat": 41.7359,
        "lng": -92.7244
    },
    {
        "state": "NY",
        "city": "Amityville",
        "lat": 40.6696,
        "lng": -73.4156
    },
    {
        "state": "HI",
        "city": "Hickam Housing",
        "lat": 21.3311,
        "lng": -157.9474
    },
    {
        "state": "OH",
        "city": "Louisville",
        "lat": 40.837,
        "lng": -81.2643
    },
    {
        "state": "TX",
        "city": "Iowa Colony",
        "lat": 29.4407,
        "lng": -95.4206
    },
    {
        "state": "OH",
        "city": "Oakwood",
        "lat": 39.7202,
        "lng": -84.1734
    },
    {
        "state": "NH",
        "city": "Berlin",
        "lat": 44.4869,
        "lng": -71.2599
    },
    {
        "state": "OK",
        "city": "Pryor Creek",
        "lat": 36.2996,
        "lng": -95.3107
    },
    {
        "state": "OK",
        "city": "The Village",
        "lat": 35.5706,
        "lng": -97.5567
    },
    {
        "state": "IN",
        "city": "Columbia City",
        "lat": 41.1612,
        "lng": -85.4855
    },
    {
        "state": "IA",
        "city": "Fairfield",
        "lat": 41.0064,
        "lng": -91.9667
    },
    {
        "state": "AR",
        "city": "Helena-West Helena",
        "lat": 34.5313,
        "lng": -90.6201
    },
    {
        "state": "UT",
        "city": "Salem",
        "lat": 40.0539,
        "lng": -111.6718
    },
    {
        "state": "SC",
        "city": "Woodfield",
        "lat": 34.0587,
        "lng": -80.9309
    },
    {
        "state": "TX",
        "city": "Bridge City",
        "lat": 30.0298,
        "lng": -93.8406
    },
    {
        "state": "AR",
        "city": "Clarksville",
        "lat": 35.457,
        "lng": -93.4803
    },
    {
        "state": "TN",
        "city": "Winchester",
        "lat": 35.1898,
        "lng": -86.1075
    },
    {
        "state": "LA",
        "city": "Eunice",
        "lat": 30.4904,
        "lng": -92.4191
    },
    {
        "state": "MI",
        "city": "Alma",
        "lat": 43.3799,
        "lng": -84.6556
    },
    {
        "state": "MT",
        "city": "Anaconda",
        "lat": 46.0608,
        "lng": -113.0678
    },
    {
        "state": "OH",
        "city": "Madeira",
        "lat": 39.1856,
        "lng": -84.3734
    },
    {
        "state": "SC",
        "city": "Lugoff",
        "lat": 34.2113,
        "lng": -80.6973
    },
    {
        "state": "VA",
        "city": "Fishersville",
        "lat": 38.105,
        "lng": -78.9826
    },
    {
        "state": "PA",
        "city": "Glenshaw",
        "lat": 40.5391,
        "lng": -79.9735
    },
    {
        "state": "IL",
        "city": "Rochelle",
        "lat": 41.9197,
        "lng": -89.0629
    },
    {
        "state": "MD",
        "city": "Coral Hills",
        "lat": 38.8706,
        "lng": -76.9215
    },
    {
        "state": "IL",
        "city": "Flossmoor",
        "lat": 41.5391,
        "lng": -87.6858
    },
    {
        "state": "PA",
        "city": "Mechanicsburg",
        "lat": 40.2115,
        "lng": -77.006
    },
    {
        "state": "GA",
        "city": "Cusseta",
        "lat": 32.347,
        "lng": -84.787
    },
    {
        "state": "TX",
        "city": "Woodway",
        "lat": 31.4988,
        "lng": -97.2314
    },
    {
        "state": "LA",
        "city": "Denham Springs",
        "lat": 30.4743,
        "lng": -90.9593
    },
    {
        "state": "CT",
        "city": "Oakville",
        "lat": 41.5893,
        "lng": -73.0905
    },
    {
        "state": "OR",
        "city": "Florence",
        "lat": 43.9916,
        "lng": -124.1063
    },
    {
        "state": "KY",
        "city": "Middlesborough",
        "lat": 36.6127,
        "lng": -83.7227
    },
    {
        "state": "NJ",
        "city": "Ashland",
        "lat": 39.8782,
        "lng": -75.0085
    },
    {
        "state": "MT",
        "city": "Helena Valley Southeast",
        "lat": 46.6219,
        "lng": -111.8973
    },
    {
        "state": "GA",
        "city": "Locust Grove",
        "lat": 33.3446,
        "lng": -84.1071
    },
    {
        "state": "IL",
        "city": "Frankfort Square",
        "lat": 41.5219,
        "lng": -87.8031
    },
    {
        "state": "WA",
        "city": "Burlington",
        "lat": 48.4676,
        "lng": -122.3298
    },
    {
        "state": "MS",
        "city": "Diamondhead",
        "lat": 30.3791,
        "lng": -89.3707
    },
    {
        "state": "AL",
        "city": "Southside",
        "lat": 33.9007,
        "lng": -86.0238
    },
    {
        "state": "OH",
        "city": "Canal Winchester",
        "lat": 39.8437,
        "lng": -82.8126
    },
    {
        "state": "PA",
        "city": "Warren",
        "lat": 41.8434,
        "lng": -79.1444
    },
    {
        "state": "PA",
        "city": "East Stroudsburg",
        "lat": 41.0023,
        "lng": -75.1779
    },
    {
        "state": "AL",
        "city": "Meadowbrook",
        "lat": 33.3935,
        "lng": -86.7041
    },
    {
        "state": "NJ",
        "city": "South Amboy",
        "lat": 40.4852,
        "lng": -74.2831
    },
    {
        "state": "CA",
        "city": "Crestline",
        "lat": 34.2486,
        "lng": -117.2887
    },
    {
        "state": "CA",
        "city": "Charter Oak",
        "lat": 34.1025,
        "lng": -117.8564
    },
    {
        "state": "CA",
        "city": "Rodeo",
        "lat": 38.0367,
        "lng": -122.2526
    },
    {
        "state": "MN",
        "city": "St. Anthony",
        "lat": 45.0278,
        "lng": -93.2174
    },
    {
        "state": "MT",
        "city": "Havre",
        "lat": 48.5427,
        "lng": -109.6804
    },
    {
        "state": "AL",
        "city": "Sheffield",
        "lat": 34.757,
        "lng": -87.6977
    },
    {
        "state": "GA",
        "city": "Fort Stewart",
        "lat": 31.8811,
        "lng": -81.6131
    },
    {
        "state": "OR",
        "city": "Bull Mountain",
        "lat": 45.4125,
        "lng": -122.832
    },
    {
        "state": "IN",
        "city": "Angola",
        "lat": 41.6433,
        "lng": -85.005
    },
    {
        "state": "UT",
        "city": "Riverdale",
        "lat": 41.1732,
        "lng": -112.0023
    },
    {
        "state": "PA",
        "city": "Quakertown",
        "lat": 40.4398,
        "lng": -75.3455
    },
    {
        "state": "NJ",
        "city": "East Franklin",
        "lat": 40.4933,
        "lng": -74.471
    },
    {
        "state": "MI",
        "city": "Plymouth",
        "lat": 42.3718,
        "lng": -83.468
    },
    {
        "state": "MI",
        "city": "Ecorse",
        "lat": 42.2489,
        "lng": -83.1399
    },
    {
        "state": "GA",
        "city": "Skidaway Island",
        "lat": 31.9372,
        "lng": -81.0449
    },
    {
        "state": "WI",
        "city": "St. Francis",
        "lat": 42.9716,
        "lng": -87.873
    },
    {
        "state": "NM",
        "city": "Bernalillo",
        "lat": 35.3127,
        "lng": -106.5537
    },
    {
        "state": "NJ",
        "city": "Ventnor City",
        "lat": 39.3457,
        "lng": -74.486
    },
    {
        "state": "IL",
        "city": "Bethalto",
        "lat": 38.9015,
        "lng": -90.0466
    },
    {
        "state": "SC",
        "city": "Laurens",
        "lat": 34.5022,
        "lng": -82.0207
    },
    {
        "state": "MI",
        "city": "Charlotte",
        "lat": 42.5662,
        "lng": -84.8304
    },
    {
        "state": "NJ",
        "city": "Leonia",
        "lat": 40.8638,
        "lng": -73.99
    },
    {
        "state": "MN",
        "city": "Mound",
        "lat": 44.9328,
        "lng": -93.6591
    },
    {
        "state": "AK",
        "city": "Wasilla",
        "lat": 61.577,
        "lng": -149.466
    },
    {
        "state": "WI",
        "city": "Merrill",
        "lat": 45.182,
        "lng": -89.6994
    },
    {
        "state": "AZ",
        "city": "Picture Rocks",
        "lat": 32.3274,
        "lng": -111.2558
    },
    {
        "state": "TN",
        "city": "Fairfield Glade",
        "lat": 36.0028,
        "lng": -84.8711
    },
    {
        "state": "WV",
        "city": "Bridgeport",
        "lat": 39.3036,
        "lng": -80.2478
    },
    {
        "state": "MD",
        "city": "Lansdowne",
        "lat": 39.2365,
        "lng": -76.6659
    },
    {
        "state": "KS",
        "city": "Augusta",
        "lat": 37.6955,
        "lng": -96.9919
    },
    {
        "state": "NY",
        "city": "Rensselaer",
        "lat": 42.6465,
        "lng": -73.7328
    },
    {
        "state": "IL",
        "city": "Sugar Grove",
        "lat": 41.7759,
        "lng": -88.4481
    },
    {
        "state": "CA",
        "city": "Magalia",
        "lat": 39.8228,
        "lng": -121.6078
    },
    {
        "state": "HI",
        "city": "Haiku-Pauwela",
        "lat": 20.9156,
        "lng": -156.3022
    },
    {
        "state": "NV",
        "city": "Fallon",
        "lat": 39.4737,
        "lng": -118.7779
    },
    {
        "state": "ID",
        "city": "Hailey",
        "lat": 43.5141,
        "lng": -114.3001
    },
    {
        "state": "IL",
        "city": "Riverside",
        "lat": 41.831,
        "lng": -87.8169
    },
    {
        "state": "NJ",
        "city": "White Meadow Lake",
        "lat": 40.9241,
        "lng": -74.5107
    },
    {
        "state": "UT",
        "city": "Washington Terrace",
        "lat": 41.1683,
        "lng": -111.9783
    },
    {
        "state": "IA",
        "city": "Mount Pleasant",
        "lat": 40.9625,
        "lng": -91.5452
    },
    {
        "state": "WI",
        "city": "Shawano",
        "lat": 44.7748,
        "lng": -88.5843
    },
    {
        "state": "MD",
        "city": "Cape St. Claire",
        "lat": 39.0433,
        "lng": -76.4471
    },
    {
        "state": "MN",
        "city": "Waseca",
        "lat": 44.0827,
        "lng": -93.5029
    },
    {
        "state": "FL",
        "city": "Palm Beach",
        "lat": 26.6945,
        "lng": -80.0408
    },
    {
        "state": "PA",
        "city": "Aliquippa",
        "lat": 40.6155,
        "lng": -80.2547
    },
    {
        "state": "GA",
        "city": "Panthersville",
        "lat": 33.7059,
        "lng": -84.2763
    },
    {
        "state": "MO",
        "city": "Richmond Heights",
        "lat": 38.6309,
        "lng": -90.3332
    },
    {
        "state": "PA",
        "city": "Conshohocken",
        "lat": 40.0772,
        "lng": -75.3034
    },
    {
        "state": "PR",
        "city": "Vega Alta",
        "lat": 18.4151,
        "lng": -66.3211
    },
    {
        "state": "NM",
        "city": "Grants",
        "lat": 35.1538,
        "lng": -107.8335
    },
    {
        "state": "HI",
        "city": "Ahuimanu",
        "lat": 21.4379,
        "lng": -157.8404
    },
    {
        "state": "IL",
        "city": "Willowbrook",
        "lat": 41.7641,
        "lng": -87.9454
    },
    {
        "state": "UT",
        "city": "Ivins",
        "lat": 37.1742,
        "lng": -113.6809
    },
    {
        "state": "NC",
        "city": "Rockingham",
        "lat": 34.9386,
        "lng": -79.7608
    },
    {
        "state": "AL",
        "city": "Tuskegee",
        "lat": 32.4409,
        "lng": -85.7131
    },
    {
        "state": "NY",
        "city": "Woodbury",
        "lat": 40.8176,
        "lng": -73.4703
    },
    {
        "state": "CA",
        "city": "Waterford",
        "lat": 37.6429,
        "lng": -120.7553
    },
    {
        "state": "FL",
        "city": "Micco",
        "lat": 27.8683,
        "lng": -80.51
    },
    {
        "state": "NJ",
        "city": "Flanders",
        "lat": 40.8412,
        "lng": -74.7102
    },
    {
        "state": "NV",
        "city": "Incline Village",
        "lat": 39.2639,
        "lng": -119.9455
    },
    {
        "state": "NY",
        "city": "Springs",
        "lat": 41.0212,
        "lng": -72.1584
    },
    {
        "state": "VA",
        "city": "Seven Corners",
        "lat": 38.8658,
        "lng": -77.1445
    },
    {
        "state": "PA",
        "city": "Audubon",
        "lat": 40.1304,
        "lng": -75.428
    },
    {
        "state": "TX",
        "city": "Helotes",
        "lat": 29.5687,
        "lng": -98.696
    },
    {
        "state": "MO",
        "city": "Des Peres",
        "lat": 38.5973,
        "lng": -90.448
    },
    {
        "state": "TN",
        "city": "Oakland",
        "lat": 35.2256,
        "lng": -89.5372
    },
    {
        "state": "AL",
        "city": "Forestdale",
        "lat": 33.5737,
        "lng": -86.9
    },
    {
        "state": "CO",
        "city": "Delta",
        "lat": 38.756,
        "lng": -108.0772
    },
    {
        "state": "NJ",
        "city": "Smithville",
        "lat": 39.4929,
        "lng": -74.4801
    },
    {
        "state": "CA",
        "city": "West Athens",
        "lat": 33.9235,
        "lng": -118.3033
    },
    {
        "state": "PA",
        "city": "Perkasie",
        "lat": 40.372,
        "lng": -75.292
    },
    {
        "state": "KY",
        "city": "Elsmere",
        "lat": 38.9948,
        "lng": -84.6017
    },
    {
        "state": "MD",
        "city": "Marlboro Village",
        "lat": 38.8307,
        "lng": -76.7699
    },
    {
        "state": "MI",
        "city": "Temperance",
        "lat": 41.7653,
        "lng": -83.5755
    },
    {
        "state": "MO",
        "city": "Sunset Hills",
        "lat": 38.531,
        "lng": -90.4087
    },
    {
        "state": "MN",
        "city": "East Grand Forks",
        "lat": 47.9286,
        "lng": -97.0138
    },
    {
        "state": "FL",
        "city": "Miramar Beach",
        "lat": 30.3854,
        "lng": -86.3442
    },
    {
        "state": "CA",
        "city": "Tiburon",
        "lat": 37.8854,
        "lng": -122.4637
    },
    {
        "state": "IL",
        "city": "Hawthorn Woods",
        "lat": 42.2313,
        "lng": -88.0624
    },
    {
        "state": "PA",
        "city": "Fairless Hills",
        "lat": 40.1783,
        "lng": -74.8524
    },
    {
        "state": "NJ",
        "city": "Cresskill",
        "lat": 40.9405,
        "lng": -73.9596
    },
    {
        "state": "WI",
        "city": "McFarland",
        "lat": 43.0203,
        "lng": -89.2828
    },
    {
        "state": "MO",
        "city": "Cameron",
        "lat": 39.7444,
        "lng": -94.2329
    },
    {
        "state": "MI",
        "city": "Benton Harbor",
        "lat": 42.1159,
        "lng": -86.4488
    },
    {
        "state": "CA",
        "city": "Orosi",
        "lat": 36.5433,
        "lng": -119.2914
    },
    {
        "state": "NJ",
        "city": "Park Ridge",
        "lat": 41.0352,
        "lng": -74.0423
    },
    {
        "state": "IN",
        "city": "McCordsville",
        "lat": 39.8966,
        "lng": -85.9208
    },
    {
        "state": "CT",
        "city": "Riverside",
        "lat": 41.0318,
        "lng": -73.5827
    },
    {
        "state": "MO",
        "city": "Chillicothe",
        "lat": 39.7953,
        "lng": -93.5499
    },
    {
        "state": "IN",
        "city": "Huntertown",
        "lat": 41.2185,
        "lng": -85.1705
    },
    {
        "state": "CA",
        "city": "August",
        "lat": 37.9797,
        "lng": -121.2625
    },
    {
        "state": "IL",
        "city": "Lynwood",
        "lat": 41.5235,
        "lng": -87.551
    },
    {
        "state": "NJ",
        "city": "Absecon",
        "lat": 39.4229,
        "lng": -74.4944
    },
    {
        "state": "MI",
        "city": "Beecher",
        "lat": 43.0903,
        "lng": -83.7039
    },
    {
        "state": "MN",
        "city": "Little Falls",
        "lat": 45.9862,
        "lng": -94.3586
    },
    {
        "state": "WA",
        "city": "Midland",
        "lat": 47.1734,
        "lng": -122.412
    },
    {
        "state": "UT",
        "city": "Hooper",
        "lat": 41.1599,
        "lng": -112.2871
    },
    {
        "state": "TX",
        "city": "Commerce",
        "lat": 33.2421,
        "lng": -95.8992
    },
    {
        "state": "NY",
        "city": "Newark",
        "lat": 43.0418,
        "lng": -77.093
    },
    {
        "state": "OR",
        "city": "Cedar Hills",
        "lat": 45.5047,
        "lng": -122.8053
    },
    {
        "state": "NY",
        "city": "Valley Cottage",
        "lat": 41.1162,
        "lng": -73.9433
    },
    {
        "state": "KY",
        "city": "Harrodsburg",
        "lat": 37.7654,
        "lng": -84.8474
    },
    {
        "state": "GA",
        "city": "Country Club Estates",
        "lat": 31.2113,
        "lng": -81.4622
    },
    {
        "state": "CO",
        "city": "Roxborough Park",
        "lat": 39.4492,
        "lng": -105.0746
    },
    {
        "state": "GA",
        "city": "Toccoa",
        "lat": 34.581,
        "lng": -83.3263
    },
    {
        "state": "PA",
        "city": "Northwest Harborcreek",
        "lat": 42.1494,
        "lng": -79.9945
    },
    {
        "state": "GA",
        "city": "Bemiss",
        "lat": 30.9318,
        "lng": -83.2386
    },
    {
        "state": "FL",
        "city": "Orange Park",
        "lat": 30.1706,
        "lng": -81.7041
    },
    {
        "state": "LA",
        "city": "Harahan",
        "lat": 29.9374,
        "lng": -90.2031
    },
    {
        "state": "TX",
        "city": "Sanger",
        "lat": 33.3715,
        "lng": -97.1678
    },
    {
        "state": "PR",
        "city": "San Sebastian",
        "lat": 18.3356,
        "lng": -66.9948
    },
    {
        "state": "TX",
        "city": "Travis Ranch",
        "lat": 32.8015,
        "lng": -96.4775
    },
    {
        "state": "PA",
        "city": "Breinigsville",
        "lat": 40.5394,
        "lng": -75.6347
    },
    {
        "state": "MI",
        "city": "Lapeer",
        "lat": 43.0447,
        "lng": -83.3253
    },
    {
        "state": "FL",
        "city": "North Merritt Island",
        "lat": 28.4585,
        "lng": -80.7162
    },
    {
        "state": "MI",
        "city": "Highland Park",
        "lat": 42.4052,
        "lng": -83.0977
    },
    {
        "state": "AL",
        "city": "Tuscumbia",
        "lat": 34.7204,
        "lng": -87.7035
    },
    {
        "state": "MS",
        "city": "Booneville",
        "lat": 34.6643,
        "lng": -88.5684
    },
    {
        "state": "MI",
        "city": "Westwood",
        "lat": 42.3031,
        "lng": -85.6286
    },
    {
        "state": "PA",
        "city": "Bala Cynwyd",
        "lat": 40.0116,
        "lng": -75.2283
    },
    {
        "state": "NE",
        "city": "Gretna",
        "lat": 41.1314,
        "lng": -96.245
    },
    {
        "state": "CO",
        "city": "Craig",
        "lat": 40.5171,
        "lng": -107.5554
    },
    {
        "state": "OH",
        "city": "Blacklick Estates",
        "lat": 39.9049,
        "lng": -82.8655
    },
    {
        "state": "CO",
        "city": "Derby",
        "lat": 39.84,
        "lng": -104.9172
    },
    {
        "state": "CA",
        "city": "Rio del Mar",
        "lat": 36.9607,
        "lng": -121.8807
    },
    {
        "state": "TX",
        "city": "Lago Vista",
        "lat": 30.4519,
        "lng": -97.9908
    },
    {
        "state": "FL",
        "city": "Lake Park",
        "lat": 26.7998,
        "lng": -80.0681
    },
    {
        "state": "NY",
        "city": "Glens Falls North",
        "lat": 43.335,
        "lng": -73.6832
    },
    {
        "state": "IL",
        "city": "Olney",
        "lat": 38.7285,
        "lng": -88.0839
    },
    {
        "state": "PA",
        "city": "Harleysville",
        "lat": 40.2792,
        "lng": -75.3873
    },
    {
        "state": "WI",
        "city": "Rice Lake",
        "lat": 45.4864,
        "lng": -91.7447
    },
    {
        "state": "VA",
        "city": "Pulaski",
        "lat": 37.0528,
        "lng": -80.7624
    },
    {
        "state": "FL",
        "city": "Brooksville",
        "lat": 28.5404,
        "lng": -82.3903
    },
    {
        "state": "MD",
        "city": "Leisure World",
        "lat": 39.1023,
        "lng": -77.0689
    },
    {
        "state": "MI",
        "city": "Saline",
        "lat": 42.174,
        "lng": -83.778
    },
    {
        "state": "GA",
        "city": "Fitzgerald",
        "lat": 31.7134,
        "lng": -83.2514
    },
    {
        "state": "CO",
        "city": "Evergreen",
        "lat": 39.6349,
        "lng": -105.3356
    },
    {
        "state": "CA",
        "city": "Fort Irwin",
        "lat": 35.2477,
        "lng": -116.6834
    },
    {
        "state": "CA",
        "city": "Cloverdale",
        "lat": 38.7962,
        "lng": -123.0152
    },
    {
        "state": "NY",
        "city": "Plainedge",
        "lat": 40.7241,
        "lng": -73.477
    },
    {
        "state": "PA",
        "city": "Park Forest Village",
        "lat": 40.7996,
        "lng": -77.9084
    },
    {
        "state": "OH",
        "city": "Sheffield Lake",
        "lat": 41.4883,
        "lng": -82.0979
    },
    {
        "state": "MN",
        "city": "Oak Grove",
        "lat": 45.3409,
        "lng": -93.3264
    },
    {
        "state": "TN",
        "city": "Bloomingdale",
        "lat": 36.5793,
        "lng": -82.5096
    },
    {
        "state": "NJ",
        "city": "Haledon",
        "lat": 40.9363,
        "lng": -74.1887
    },
    {
        "state": "FL",
        "city": "Indian Harbour Beach",
        "lat": 28.1529,
        "lng": -80.5976
    },
    {
        "state": "AZ",
        "city": "Winslow",
        "lat": 35.0243,
        "lng": -110.7095
    },
    {
        "state": "IL",
        "city": "Harwood Heights",
        "lat": 41.9663,
        "lng": -87.8057
    },
    {
        "state": "NJ",
        "city": "Bogota",
        "lat": 40.8751,
        "lng": -74.0293
    },
    {
        "state": "PR",
        "city": "Juncos",
        "lat": 18.2256,
        "lng": -65.9161
    },
    {
        "state": "MO",
        "city": "Ladue",
        "lat": 38.6377,
        "lng": -90.3815
    },
    {
        "state": "PA",
        "city": "Beaver Falls",
        "lat": 40.7619,
        "lng": -80.3226
    },
    {
        "state": "VA",
        "city": "Purcellville",
        "lat": 39.1378,
        "lng": -77.711
    },
    {
        "state": "MD",
        "city": "Edgewater",
        "lat": 38.9373,
        "lng": -76.5572
    },
    {
        "state": "AR",
        "city": "Hope",
        "lat": 33.6682,
        "lng": -93.5895
    },
    {
        "state": "LA",
        "city": "Village St. George",
        "lat": 30.3598,
        "lng": -91.0672
    },
    {
        "state": "NY",
        "city": "Bayport",
        "lat": 40.7461,
        "lng": -73.0546
    },
    {
        "state": "VA",
        "city": "Fair Lakes",
        "lat": 38.853,
        "lng": -77.3885
    },
    {
        "state": "CO",
        "city": "Redlands",
        "lat": 39.0886,
        "lng": -108.6582
    },
    {
        "state": "TX",
        "city": "Brownfield",
        "lat": 33.1757,
        "lng": -102.273
    },
    {
        "state": "FL",
        "city": "Hernando",
        "lat": 28.9451,
        "lng": -82.3781
    },
    {
        "state": "SC",
        "city": "Litchfield Beach",
        "lat": 33.4773,
        "lng": -79.1181
    },
    {
        "state": "MO",
        "city": "Clinton",
        "lat": 38.3716,
        "lng": -93.7679
    },
    {
        "state": "WI",
        "city": "Plymouth",
        "lat": 43.7447,
        "lng": -87.966
    },
    {
        "state": "FL",
        "city": "St. Pete Beach",
        "lat": 27.7235,
        "lng": -82.7387
    },
    {
        "state": "IL",
        "city": "Rock Falls",
        "lat": 41.7724,
        "lng": -89.6928
    },
    {
        "state": "ID",
        "city": "Sandpoint",
        "lat": 48.2822,
        "lng": -116.5614
    },
    {
        "state": "WA",
        "city": "Orting",
        "lat": 47.0967,
        "lng": -122.2112
    },
    {
        "state": "NJ",
        "city": "Caldwell",
        "lat": 40.8389,
        "lng": -74.2776
    },
    {
        "state": "VA",
        "city": "Crozet",
        "lat": 38.0645,
        "lng": -78.6961
    },
    {
        "state": "NJ",
        "city": "Whippany",
        "lat": 40.8233,
        "lng": -74.4184
    },
    {
        "state": "OH",
        "city": "Napoleon",
        "lat": 41.3977,
        "lng": -84.1244
    },
    {
        "state": "MD",
        "city": "Edgemere",
        "lat": 39.2273,
        "lng": -76.459
    },
    {
        "state": "NJ",
        "city": "Pomona",
        "lat": 39.4688,
        "lng": -74.5502
    },
    {
        "state": "PA",
        "city": "Kulpsville",
        "lat": 40.244,
        "lng": -75.3407
    },
    {
        "state": "MN",
        "city": "Thief River Falls",
        "lat": 48.1108,
        "lng": -96.1778
    },
    {
        "state": "TX",
        "city": "Pearsall",
        "lat": 28.8915,
        "lng": -99.0975
    },
    {
        "state": "RI",
        "city": "Cumberland Hill",
        "lat": 41.9736,
        "lng": -71.4605
    },
    {
        "state": "MI",
        "city": "Greenville",
        "lat": 43.1797,
        "lng": -85.2534
    },
    {
        "state": "PA",
        "city": "Collingdale",
        "lat": 39.9151,
        "lng": -75.2776
    },
    {
        "state": "CO",
        "city": "Woodmoor",
        "lat": 39.1063,
        "lng": -104.8456
    },
    {
        "state": "PA",
        "city": "East York",
        "lat": 39.9687,
        "lng": -76.6755
    },
    {
        "state": "OK",
        "city": "Poteau",
        "lat": 35.0282,
        "lng": -94.6346
    },
    {
        "state": "KS",
        "city": "Coffeyville",
        "lat": 37.0519,
        "lng": -95.618
    },
    {
        "state": "AL",
        "city": "Andalusia",
        "lat": 31.3102,
        "lng": -86.4781
    },
    {
        "state": "TX",
        "city": "Highland Park",
        "lat": 32.8311,
        "lng": -96.8012
    },
    {
        "state": "TX",
        "city": "Dayton",
        "lat": 30.0315,
        "lng": -94.9158
    },
    {
        "state": "SC",
        "city": "Seneca",
        "lat": 34.6818,
        "lng": -82.96
    },
    {
        "state": "TN",
        "city": "Signal Mountain",
        "lat": 35.1448,
        "lng": -85.3457
    },
    {
        "state": "CO",
        "city": "Cortez",
        "lat": 37.3503,
        "lng": -108.5768
    },
    {
        "state": "KY",
        "city": "Maysville",
        "lat": 38.6455,
        "lng": -83.7911
    },
    {
        "state": "PA",
        "city": "Sanatoga",
        "lat": 40.2497,
        "lng": -75.5887
    },
    {
        "state": "NC",
        "city": "Gibsonville",
        "lat": 36.0993,
        "lng": -79.5415
    },
    {
        "state": "MO",
        "city": "Pleasant Hill",
        "lat": 38.8059,
        "lng": -94.2652
    },
    {
        "state": "GA",
        "city": "Fort Valley",
        "lat": 32.552,
        "lng": -83.8817
    },
    {
        "state": "WA",
        "city": "Toppenish",
        "lat": 46.3806,
        "lng": -120.3122
    },
    {
        "state": "WA",
        "city": "Summit",
        "lat": 47.1694,
        "lng": -122.3628
    },
    {
        "state": "PA",
        "city": "Carbondale",
        "lat": 41.5714,
        "lng": -75.5048
    },
    {
        "state": "LA",
        "city": "Oak Hills Place",
        "lat": 30.369,
        "lng": -91.0887
    },
    {
        "state": "OH",
        "city": "Bainbridge",
        "lat": 41.3855,
        "lng": -81.3478
    },
    {
        "state": "NJ",
        "city": "Pitman",
        "lat": 39.7335,
        "lng": -75.1306
    },
    {
        "state": "NJ",
        "city": "Clayton",
        "lat": 39.6627,
        "lng": -75.0782
    },
    {
        "state": "NJ",
        "city": "North Haledon",
        "lat": 40.9628,
        "lng": -74.1844
    },
    {
        "state": "PA",
        "city": "Jeannette",
        "lat": 40.3277,
        "lng": -79.6139
    },
    {
        "state": "IL",
        "city": "Glencoe",
        "lat": 42.1347,
        "lng": -87.7641
    },
    {
        "state": "NJ",
        "city": "Boonton",
        "lat": 40.9047,
        "lng": -74.4048
    },
    {
        "state": "RI",
        "city": "Greenville",
        "lat": 41.882,
        "lng": -71.5549
    },
    {
        "state": "AL",
        "city": "Clanton",
        "lat": 32.8444,
        "lng": -86.6233
    },
    {
        "state": "ME",
        "city": "Bath",
        "lat": 43.9346,
        "lng": -69.8346
    },
    {
        "state": "NY",
        "city": "Mahopac",
        "lat": 41.3688,
        "lng": -73.7414
    },
    {
        "state": "AK",
        "city": "Meadow Lakes",
        "lat": 61.638,
        "lng": -149.608
    },
    {
        "state": "ME",
        "city": "Presque Isle",
        "lat": 46.6868,
        "lng": -67.9874
    },
    {
        "state": "TX",
        "city": "Bee Cave",
        "lat": 30.3084,
        "lng": -97.9629
    },
    {
        "state": "IL",
        "city": "Monmouth",
        "lat": 40.914,
        "lng": -90.6425
    },
    {
        "state": "CA",
        "city": "Spring Valley Lake",
        "lat": 34.4987,
        "lng": -117.2683
    },
    {
        "state": "NC",
        "city": "Wesley Chapel",
        "lat": 34.9985,
        "lng": -80.6903
    },
    {
        "state": "OH",
        "city": "Perry Heights",
        "lat": 40.7977,
        "lng": -81.468
    },
    {
        "state": "IL",
        "city": "Mascoutah",
        "lat": 38.5192,
        "lng": -89.8045
    },
    {
        "state": "NY",
        "city": "Stony Brook University",
        "lat": 40.9098,
        "lng": -73.1217
    },
    {
        "state": "WA",
        "city": "Summit View",
        "lat": 47.1343,
        "lng": -122.3467
    },
    {
        "state": "NH",
        "city": "Franklin",
        "lat": 43.4499,
        "lng": -71.6691
    },
    {
        "state": "TX",
        "city": "Murillo",
        "lat": 26.2642,
        "lng": -98.1233
    },
    {
        "state": "WA",
        "city": "Hoquiam",
        "lat": 46.9863,
        "lng": -123.9022
    },
    {
        "state": "AZ",
        "city": "Corona de Tucson",
        "lat": 31.9503,
        "lng": -110.7835
    },
    {
        "state": "VA",
        "city": "Hollymead",
        "lat": 38.1266,
        "lng": -78.4386
    },
    {
        "state": "TX",
        "city": "Graham",
        "lat": 33.1017,
        "lng": -98.5779
    },
    {
        "state": "NY",
        "city": "Port Jervis",
        "lat": 41.3783,
        "lng": -74.691
    },
    {
        "state": "OH",
        "city": "Wyoming",
        "lat": 39.2297,
        "lng": -84.4816
    },
    {
        "state": "TX",
        "city": "Aransas Pass",
        "lat": 27.8876,
        "lng": -97.1136
    },
    {
        "state": "KS",
        "city": "Chanute",
        "lat": 37.6695,
        "lng": -95.4621
    },
    {
        "state": "OK",
        "city": "Blanchard",
        "lat": 35.1524,
        "lng": -97.6602
    },
    {
        "state": "NM",
        "city": "Anthony",
        "lat": 32.0131,
        "lng": -106.5984
    },
    {
        "state": "UT",
        "city": "Summit Park",
        "lat": 40.7423,
        "lng": -111.5872
    },
    {
        "state": "VA",
        "city": "Dunn Loring",
        "lat": 38.8945,
        "lng": -77.2315
    },
    {
        "state": "IL",
        "city": "Lake Villa",
        "lat": 42.4184,
        "lng": -88.0836
    },
    {
        "state": "NC",
        "city": "Ogden",
        "lat": 34.2656,
        "lng": -77.7966
    },
    {
        "state": "VA",
        "city": "Innsbrook",
        "lat": 37.6552,
        "lng": -77.5775
    },
    {
        "state": "NJ",
        "city": "Audubon",
        "lat": 39.8906,
        "lng": -75.0722
    },
    {
        "state": "NC",
        "city": "Oxford",
        "lat": 36.3155,
        "lng": -78.5848
    },
    {
        "state": "IL",
        "city": "Savoy",
        "lat": 40.06,
        "lng": -88.2552
    },
    {
        "state": "OH",
        "city": "Cheviot",
        "lat": 39.1577,
        "lng": -84.6139
    },
    {
        "state": "KY",
        "city": "Hillview",
        "lat": 38.0562,
        "lng": -85.6847
    },
    {
        "state": "SC",
        "city": "Sangaree",
        "lat": 33.0327,
        "lng": -80.1253
    },
    {
        "state": "MI",
        "city": "Tecumseh",
        "lat": 42.0066,
        "lng": -83.945
    },
    {
        "state": "OR",
        "city": "River Road",
        "lat": 44.0833,
        "lng": -123.132
    },
    {
        "state": "NC",
        "city": "Aberdeen",
        "lat": 35.135,
        "lng": -79.4326
    },
    {
        "state": "OH",
        "city": "Olmsted Falls",
        "lat": 41.3657,
        "lng": -81.9038
    },
    {
        "state": "OH",
        "city": "Bryan",
        "lat": 41.4706,
        "lng": -84.5483
    },
    {
        "state": "TX",
        "city": "Wharton",
        "lat": 29.3177,
        "lng": -96.1022
    },
    {
        "state": "TX",
        "city": "Heartland",
        "lat": 32.6748,
        "lng": -96.4515
    },
    {
        "state": "MN",
        "city": "Baxter",
        "lat": 46.3426,
        "lng": -94.2793
    },
    {
        "state": "KY",
        "city": "Fort Mitchell",
        "lat": 39.046,
        "lng": -84.5562
    },
    {
        "state": "TX",
        "city": "Perryton",
        "lat": 36.3928,
        "lng": -100.7976
    },
    {
        "state": "IL",
        "city": "Clarendon Hills",
        "lat": 41.7981,
        "lng": -87.9568
    },
    {
        "state": "KY",
        "city": "Fort Knox",
        "lat": 37.8915,
        "lng": -85.9636
    },
    {
        "state": "MO",
        "city": "Park Hills",
        "lat": 37.8211,
        "lng": -90.505
    },
    {
        "state": "PA",
        "city": "Village Green-Green Ridge",
        "lat": 39.8639,
        "lng": -75.4257
    },
    {
        "state": "OH",
        "city": "Highland Heights",
        "lat": 41.5518,
        "lng": -81.4691
    },
    {
        "state": "HI",
        "city": "Lihue",
        "lat": 21.9721,
        "lng": -159.3564
    },
    {
        "state": "MO",
        "city": "Warrenton",
        "lat": 38.8187,
        "lng": -91.1385
    },
    {
        "state": "MS",
        "city": "Gulf Hills",
        "lat": 30.4367,
        "lng": -88.815
    },
    {
        "state": "AL",
        "city": "Guntersville",
        "lat": 34.3671,
        "lng": -86.2637
    },
    {
        "state": "TN",
        "city": "Covington",
        "lat": 35.566,
        "lng": -89.6482
    },
    {
        "state": "IL",
        "city": "Manteno",
        "lat": 41.247,
        "lng": -87.8457
    },
    {
        "state": "VA",
        "city": "Smithfield",
        "lat": 36.9755,
        "lng": -76.6152
    },
    {
        "state": "KS",
        "city": "Fort Riley",
        "lat": 39.1064,
        "lng": -96.8117
    },
    {
        "state": "NY",
        "city": "Mechanicstown",
        "lat": 41.4472,
        "lng": -74.3914
    },
    {
        "state": "CA",
        "city": "Templeton",
        "lat": 35.556,
        "lng": -120.7181
    },
    {
        "state": "KY",
        "city": "Corbin",
        "lat": 36.9323,
        "lng": -84.1006
    },
    {
        "state": "NM",
        "city": "Socorro",
        "lat": 34.0543,
        "lng": -106.9065
    },
    {
        "state": "FL",
        "city": "Citrus Hills",
        "lat": 28.887,
        "lng": -82.4312
    },
    {
        "state": "FL",
        "city": "Seffner",
        "lat": 27.9981,
        "lng": -82.2735
    },
    {
        "state": "PR",
        "city": "Aibonito",
        "lat": 18.1398,
        "lng": -66.2659
    },
    {
        "state": "MD",
        "city": "Bryans Road",
        "lat": 38.6145,
        "lng": -77.0851
    },
    {
        "state": "SC",
        "city": "Lancaster",
        "lat": 34.7248,
        "lng": -80.7804
    },
    {
        "state": "WI",
        "city": "Monona",
        "lat": 43.054,
        "lng": -89.3334
    },
    {
        "state": "TX",
        "city": "Kennedale",
        "lat": 32.6434,
        "lng": -97.2172
    },
    {
        "state": "PA",
        "city": "Swissvale",
        "lat": 40.4206,
        "lng": -79.8859
    },
    {
        "state": "PR",
        "city": "San Lorenzo",
        "lat": 18.1875,
        "lng": -65.968
    },
    {
        "state": "LA",
        "city": "Eden Isle",
        "lat": 30.2268,
        "lng": -89.8043
    },
    {
        "state": "WA",
        "city": "Othello",
        "lat": 46.8221,
        "lng": -119.1653
    },
    {
        "state": "NE",
        "city": "Gering",
        "lat": 41.8275,
        "lng": -103.6622
    },
    {
        "state": "CA",
        "city": "Gonzales",
        "lat": 36.5055,
        "lng": -121.4427
    },
    {
        "state": "TX",
        "city": "Lamesa",
        "lat": 32.7333,
        "lng": -101.9541
    },
    {
        "state": "NC",
        "city": "Oak Island",
        "lat": 33.9434,
        "lng": -78.1366
    },
    {
        "state": "NC",
        "city": "Kings Grant",
        "lat": 34.2664,
        "lng": -77.8659
    },
    {
        "state": "TX",
        "city": "Paloma Creek South",
        "lat": 33.21,
        "lng": -96.9325
    },
    {
        "state": "LA",
        "city": "Merrydale",
        "lat": 30.4998,
        "lng": -91.1081
    },
    {
        "state": "KS",
        "city": "Independence",
        "lat": 37.2119,
        "lng": -95.7327
    },
    {
        "state": "NJ",
        "city": "Closter",
        "lat": 40.9733,
        "lng": -73.9604
    },
    {
        "state": "AL",
        "city": "Arab",
        "lat": 34.3309,
        "lng": -86.4991
    },
    {
        "state": "NC",
        "city": "Dunn",
        "lat": 35.3114,
        "lng": -78.6129
    },
    {
        "state": "NJ",
        "city": "West Long Branch",
        "lat": 40.2883,
        "lng": -74.0185
    },
    {
        "state": "WA",
        "city": "Milton",
        "lat": 47.2524,
        "lng": -122.3153
    },
    {
        "state": "IL",
        "city": "Glenwood",
        "lat": 41.541,
        "lng": -87.6118
    },
    {
        "state": "AZ",
        "city": "Arizona City",
        "lat": 32.7506,
        "lng": -111.6707
    },
    {
        "state": "MO",
        "city": "Perryville",
        "lat": 37.7263,
        "lng": -89.8759
    },
    {
        "state": "PA",
        "city": "Folsom",
        "lat": 39.8924,
        "lng": -75.3287
    },
    {
        "state": "SC",
        "city": "York",
        "lat": 34.9967,
        "lng": -81.2341
    },
    {
        "state": "CA",
        "city": "Montecito",
        "lat": 34.4384,
        "lng": -119.6309
    },
    {
        "state": "CO",
        "city": "Severance",
        "lat": 40.5265,
        "lng": -104.865
    },
    {
        "state": "NY",
        "city": "Malverne",
        "lat": 40.6746,
        "lng": -73.6721
    },
    {
        "state": "OK",
        "city": "Sallisaw",
        "lat": 35.4606,
        "lng": -94.8072
    },
    {
        "state": "PA",
        "city": "Lewistown",
        "lat": 40.5964,
        "lng": -77.573
    },
    {
        "state": "WI",
        "city": "Delavan",
        "lat": 42.6282,
        "lng": -88.6323
    },
    {
        "state": "MT",
        "city": "Evergreen",
        "lat": 48.2308,
        "lng": -114.27
    },
    {
        "state": "OR",
        "city": "Sutherlin",
        "lat": 43.3882,
        "lng": -123.3242
    },
    {
        "state": "TX",
        "city": "Richland Hills",
        "lat": 32.8095,
        "lng": -97.2273
    },
    {
        "state": "TX",
        "city": "Whitehouse",
        "lat": 32.2222,
        "lng": -95.221
    },
    {
        "state": "WI",
        "city": "Altoona",
        "lat": 44.8029,
        "lng": -91.4385
    },
    {
        "state": "PA",
        "city": "Old Forge",
        "lat": 41.3704,
        "lng": -75.7409
    },
    {
        "state": "OK",
        "city": "Clinton",
        "lat": 35.5069,
        "lng": -98.9706
    },
    {
        "state": "NM",
        "city": "Corrales",
        "lat": 35.2366,
        "lng": -106.6191
    },
    {
        "state": "MI",
        "city": "Center Line",
        "lat": 42.4805,
        "lng": -83.0274
    },
    {
        "state": "MT",
        "city": "Livingston",
        "lat": 45.6665,
        "lng": -110.5539
    },
    {
        "state": "VT",
        "city": "Barre",
        "lat": 44.1998,
        "lng": -72.5085
    },
    {
        "state": "MD",
        "city": "Stevensville",
        "lat": 38.9745,
        "lng": -76.3184
    },
    {
        "state": "WI",
        "city": "Village of Waukesha",
        "lat": 42.9601,
        "lng": -88.248
    },
    {
        "state": "NJ",
        "city": "Crestwood Village",
        "lat": 39.9568,
        "lng": -74.3524
    },
    {
        "state": "ME",
        "city": "Ellsworth",
        "lat": 44.5847,
        "lng": -68.4875
    },
    {
        "state": "MD",
        "city": "North Kensington",
        "lat": 39.0393,
        "lng": -77.0723
    },
    {
        "state": "CA",
        "city": "La Cresta",
        "lat": 35.3972,
        "lng": -118.9892
    },
    {
        "state": "GA",
        "city": "Druid Hills",
        "lat": 33.7842,
        "lng": -84.3272
    },
    {
        "state": "LA",
        "city": "Westwego",
        "lat": 29.9058,
        "lng": -90.1434
    },
    {
        "state": "AL",
        "city": "Atmore",
        "lat": 31.0927,
        "lng": -87.4762
    },
    {
        "state": "SC",
        "city": "Georgetown",
        "lat": 33.3594,
        "lng": -79.2958
    },
    {
        "state": "OK",
        "city": "Skiatook",
        "lat": 36.3699,
        "lng": -95.9856
    },
    {
        "state": "AK",
        "city": "Sitka",
        "lat": 57.2401,
        "lng": -135.3152
    },
    {
        "state": "NC",
        "city": "Conover",
        "lat": 35.7154,
        "lng": -81.2174
    },
    {
        "state": "NY",
        "city": "Hastings-on-Hudson",
        "lat": 40.9904,
        "lng": -73.8799
    },
    {
        "state": "PA",
        "city": "Pleasant Hills",
        "lat": 40.3298,
        "lng": -79.9596
    },
    {
        "state": "KS",
        "city": "Valley Center",
        "lat": 37.8332,
        "lng": -97.3646
    },
    {
        "state": "KY",
        "city": "Edgewood",
        "lat": 39.0092,
        "lng": -84.5604
    },
    {
        "state": "AR",
        "city": "Beebe",
        "lat": 35.0713,
        "lng": -91.8998
    },
    {
        "state": "AR",
        "city": "Monticello",
        "lat": 33.6257,
        "lng": -91.7934
    },
    {
        "state": "CA",
        "city": "Los Altos Hills",
        "lat": 37.3669,
        "lng": -122.1387
    },
    {
        "state": "CO",
        "city": "Milliken",
        "lat": 40.3115,
        "lng": -104.8561
    },
    {
        "state": "MT",
        "city": "Miles City",
        "lat": 46.4059,
        "lng": -105.8385
    },
    {
        "state": "NJ",
        "city": "Northfield",
        "lat": 39.3718,
        "lng": -74.5543
    },
    {
        "state": "MO",
        "city": "Olivette",
        "lat": 38.6724,
        "lng": -90.3786
    },
    {
        "state": "NC",
        "city": "Black Mountain",
        "lat": 35.6144,
        "lng": -82.3274
    },
    {
        "state": "MI",
        "city": "Menominee",
        "lat": 45.1221,
        "lng": -87.6234
    },
    {
        "state": "NY",
        "city": "Farmingdale",
        "lat": 40.7328,
        "lng": -73.4468
    },
    {
        "state": "MO",
        "city": "Murphy",
        "lat": 38.4922,
        "lng": -90.4856
    },
    {
        "state": "PA",
        "city": "Millersville",
        "lat": 40.0047,
        "lng": -76.3522
    },
    {
        "state": "IL",
        "city": "Crete",
        "lat": 41.4401,
        "lng": -87.6235
    },
    {
        "state": "TX",
        "city": "Hondo",
        "lat": 29.3531,
        "lng": -99.1616
    },
    {
        "state": "PA",
        "city": "Lock Haven",
        "lat": 41.1365,
        "lng": -77.4521
    },
    {
        "state": "WA",
        "city": "Ephrata",
        "lat": 47.3122,
        "lng": -119.5341
    },
    {
        "state": "UT",
        "city": "Providence",
        "lat": 41.7035,
        "lng": -111.8123
    },
    {
        "state": "MN",
        "city": "Virginia",
        "lat": 47.5168,
        "lng": -92.5127
    },
    {
        "state": "NJ",
        "city": "Montvale",
        "lat": 41.0529,
        "lng": -74.0499
    },
    {
        "state": "TX",
        "city": "Fort Stockton",
        "lat": 30.8926,
        "lng": -102.8842
    },
    {
        "state": "NY",
        "city": "South Lockport",
        "lat": 43.1366,
        "lng": -78.6855
    },
    {
        "state": "TN",
        "city": "Jefferson City",
        "lat": 36.1201,
        "lng": -83.4829
    },
    {
        "state": "NC",
        "city": "Half Moon",
        "lat": 34.8297,
        "lng": -77.4591
    },
    {
        "state": "AK",
        "city": "Kalifornsky",
        "lat": 60.4417,
        "lng": -151.1972
    },
    {
        "state": "IL",
        "city": "Harrisburg",
        "lat": 37.7374,
        "lng": -88.5457
    },
    {
        "state": "UT",
        "city": "Park City",
        "lat": 40.6502,
        "lng": -111.5013
    },
    {
        "state": "OH",
        "city": "Groesbeck",
        "lat": 39.229,
        "lng": -84.5959
    },
    {
        "state": "OR",
        "city": "West Haven-Sylvan",
        "lat": 45.5164,
        "lng": -122.7655
    },
    {
        "state": "NC",
        "city": "Butner",
        "lat": 36.1285,
        "lng": -78.7501
    },
    {
        "state": "AZ",
        "city": "Tuba City",
        "lat": 36.125,
        "lng": -111.2467
    },
    {
        "state": "MD",
        "city": "South Kensington",
        "lat": 39.0188,
        "lng": -77.0785
    },
    {
        "state": "NJ",
        "city": "Newton",
        "lat": 41.0534,
        "lng": -74.7527
    },
    {
        "state": "DE",
        "city": "North Star",
        "lat": 39.755,
        "lng": -75.7331
    },
    {
        "state": "VA",
        "city": "Montrose",
        "lat": 37.52,
        "lng": -77.3772
    },
    {
        "state": "NC",
        "city": "Clinton",
        "lat": 35.0004,
        "lng": -78.3313
    },
    {
        "state": "NJ",
        "city": "Dayton",
        "lat": 40.3768,
        "lng": -74.5112
    },
    {
        "state": "OH",
        "city": "Shelby",
        "lat": 40.8847,
        "lng": -82.6578
    },
    {
        "state": "OH",
        "city": "Eaton",
        "lat": 39.7506,
        "lng": -84.6342
    },
    {
        "state": "VA",
        "city": "Lake of the Woods",
        "lat": 38.3343,
        "lng": -77.7599
    },
    {
        "state": "NV",
        "city": "Winnemucca",
        "lat": 40.9645,
        "lng": -117.7247
    },
    {
        "state": "MI",
        "city": "Flushing",
        "lat": 43.0637,
        "lng": -83.8403
    },
    {
        "state": "TX",
        "city": "Liberty",
        "lat": 30.0378,
        "lng": -94.7879
    },
    {
        "state": "MN",
        "city": "Minnetrista",
        "lat": 44.9356,
        "lng": -93.7107
    },
    {
        "state": "VA",
        "city": "Abingdon",
        "lat": 36.709,
        "lng": -81.9713
    },
    {
        "state": "NJ",
        "city": "Kenilworth",
        "lat": 40.6781,
        "lng": -74.289
    },
    {
        "state": "IN",
        "city": "Princeton",
        "lat": 38.3553,
        "lng": -87.5784
    },
    {
        "state": "FL",
        "city": "Westgate",
        "lat": 26.6994,
        "lng": -80.0989
    },
    {
        "state": "NC",
        "city": "Hampstead",
        "lat": 34.3627,
        "lng": -77.7318
    },
    {
        "state": "IN",
        "city": "Elwood",
        "lat": 40.2738,
        "lng": -85.8374
    },
    {
        "state": "OK",
        "city": "Cushing",
        "lat": 35.9794,
        "lng": -96.7609
    },
    {
        "state": "WI",
        "city": "Lake Geneva",
        "lat": 42.5824,
        "lng": -88.4281
    },
    {
        "state": "WI",
        "city": "Kronenwetter",
        "lat": 44.8164,
        "lng": -89.5807
    },
    {
        "state": "CO",
        "city": "Trinidad",
        "lat": 37.1751,
        "lng": -104.4908
    },
    {
        "state": "IL",
        "city": "Paris",
        "lat": 39.6148,
        "lng": -87.6903
    },
    {
        "state": "CT",
        "city": "Conning Towers Nautilus Park",
        "lat": 41.385,
        "lng": -72.0684
    },
    {
        "state": "LA",
        "city": "Fort Polk South",
        "lat": 31.0512,
        "lng": -93.2159
    },
    {
        "state": "LA",
        "city": "Prien",
        "lat": 30.1601,
        "lng": -93.2611
    },
    {
        "state": "OH",
        "city": "St. Marys",
        "lat": 40.5476,
        "lng": -84.3926
    },
    {
        "state": "IA",
        "city": "Denison",
        "lat": 42.0162,
        "lng": -95.3528
    },
    {
        "state": "CA",
        "city": "Alondra Park",
        "lat": 33.8885,
        "lng": -118.335
    },
    {
        "state": "NJ",
        "city": "Upper Saddle River",
        "lat": 41.0634,
        "lng": -74.0985
    },
    {
        "state": "OH",
        "city": "North Madison",
        "lat": 41.8297,
        "lng": -81.0507
    },
    {
        "state": "TN",
        "city": "Harrison",
        "lat": 35.1271,
        "lng": -85.1453
    },
    {
        "state": "WI",
        "city": "Mukwonago",
        "lat": 42.857,
        "lng": -88.3269
    },
    {
        "state": "MD",
        "city": "Temple Hills",
        "lat": 38.8106,
        "lng": -76.9495
    },
    {
        "state": "NJ",
        "city": "Runnemede",
        "lat": 39.8522,
        "lng": -75.074
    },
    {
        "state": "GA",
        "city": "Irondale",
        "lat": 33.4773,
        "lng": -84.3601
    },
    {
        "state": "MO",
        "city": "Oak Grove",
        "lat": 39.0075,
        "lng": -94.1282
    },
    {
        "state": "OH",
        "city": "Orrville",
        "lat": 40.848,
        "lng": -81.7743
    },
    {
        "state": "WI",
        "city": "Somers",
        "lat": 42.6411,
        "lng": -87.8919
    },
    {
        "state": "MI",
        "city": "Houghton",
        "lat": 47.1118,
        "lng": -88.5675
    },
    {
        "state": "TN",
        "city": "Pulaski",
        "lat": 35.1933,
        "lng": -87.035
    },
    {
        "state": "CA",
        "city": "Plumas Lake",
        "lat": 38.9845,
        "lng": -121.5634
    },
    {
        "state": "FL",
        "city": "Springfield",
        "lat": 30.1711,
        "lng": -85.609
    },
    {
        "state": "OR",
        "city": "Hood River",
        "lat": 45.7092,
        "lng": -121.526
    },
    {
        "state": "CA",
        "city": "Good Hope",
        "lat": 33.7706,
        "lng": -117.2771
    },
    {
        "state": "NJ",
        "city": "Madison Park",
        "lat": 40.4454,
        "lng": -74.2966
    },
    {
        "state": "CO",
        "city": "Gypsum",
        "lat": 39.6287,
        "lng": -106.9348
    },
    {
        "state": "MN",
        "city": "Waite Park",
        "lat": 45.5313,
        "lng": -94.2528
    },
    {
        "state": "MS",
        "city": "Senatobia",
        "lat": 34.6081,
        "lng": -89.9762
    },
    {
        "state": "WY",
        "city": "Rawlins",
        "lat": 41.7849,
        "lng": -107.2265
    },
    {
        "state": "OH",
        "city": "Kenwood",
        "lat": 39.2066,
        "lng": -84.375
    },
    {
        "state": "MI",
        "city": "Mason",
        "lat": 42.5806,
        "lng": -84.4427
    },
    {
        "state": "AR",
        "city": "Wynne",
        "lat": 35.2322,
        "lng": -90.7897
    },
    {
        "state": "PA",
        "city": "Castle Shannon",
        "lat": 40.3664,
        "lng": -80.0194
    },
    {
        "state": "TX",
        "city": "Hillsboro",
        "lat": 32.0093,
        "lng": -97.115
    },
    {
        "state": "KS",
        "city": "Spring Hill",
        "lat": 38.7565,
        "lng": -94.8201
    },
    {
        "state": "IL",
        "city": "Long Grove",
        "lat": 42.1967,
        "lng": -88.0058
    },
    {
        "state": "CT",
        "city": "Long Hill",
        "lat": 41.2666,
        "lng": -73.2283
    },
    {
        "state": "FL",
        "city": "Wedgefield",
        "lat": 28.4847,
        "lng": -81.0809
    },
    {
        "state": "NM",
        "city": "Shiprock",
        "lat": 36.7924,
        "lng": -108.7005
    },
    {
        "state": "PA",
        "city": "Mount Joy",
        "lat": 40.1106,
        "lng": -76.5065
    },
    {
        "state": "CA",
        "city": "Guadalupe",
        "lat": 34.9609,
        "lng": -120.5735
    },
    {
        "state": "LA",
        "city": "Scott",
        "lat": 30.2398,
        "lng": -92.0948
    },
    {
        "state": "VA",
        "city": "Dumbarton",
        "lat": 37.613,
        "lng": -77.5066
    },
    {
        "state": "CA",
        "city": "East Foothills",
        "lat": 37.3826,
        "lng": -121.8138
    },
    {
        "state": "PA",
        "city": "Brookhaven",
        "lat": 39.8715,
        "lng": -75.3918
    },
    {
        "state": "MD",
        "city": "Mount Rainier",
        "lat": 38.9423,
        "lng": -76.9645
    },
    {
        "state": "DE",
        "city": "Wilmington Manor",
        "lat": 39.6858,
        "lng": -75.5849
    },
    {
        "state": "OH",
        "city": "Grandview Heights",
        "lat": 39.9793,
        "lng": -83.0408
    },
    {
        "state": "MD",
        "city": "Mayo",
        "lat": 38.9042,
        "lng": -76.5179
    },
    {
        "state": "GA",
        "city": "Hampton",
        "lat": 33.3774,
        "lng": -84.2969
    },
    {
        "state": "CA",
        "city": "Thousand Palms",
        "lat": 33.815,
        "lng": -116.3545
    },
    {
        "state": "IL",
        "city": "Rockton",
        "lat": 42.4445,
        "lng": -89.0634
    },
    {
        "state": "NY",
        "city": "Croton-on-Hudson",
        "lat": 41.2005,
        "lng": -73.9001
    },
    {
        "state": "WI",
        "city": "Rhinelander",
        "lat": 45.6358,
        "lng": -89.4261
    },
    {
        "state": "PA",
        "city": "Bellevue",
        "lat": 40.4945,
        "lng": -80.055
    },
    {
        "state": "MO",
        "city": "Berkeley",
        "lat": 38.7439,
        "lng": -90.3361
    },
    {
        "state": "CA",
        "city": "University of California-Davis",
        "lat": 38.5378,
        "lng": -121.7579
    },
    {
        "state": "VA",
        "city": "Wytheville",
        "lat": 36.953,
        "lng": -81.0881
    },
    {
        "state": "IA",
        "city": "Sioux Center",
        "lat": 43.0748,
        "lng": -96.1707
    },
    {
        "state": "PA",
        "city": "Parkville",
        "lat": 39.7859,
        "lng": -76.9686
    },
    {
        "state": "MN",
        "city": "Orono",
        "lat": 44.9657,
        "lng": -93.5908
    },
    {
        "state": "CA",
        "city": "Orland",
        "lat": 39.7461,
        "lng": -122.1856
    },
    {
        "state": "GA",
        "city": "Centerville",
        "lat": 32.6342,
        "lng": -83.6853
    },
    {
        "state": "IL",
        "city": "Maryville",
        "lat": 38.7264,
        "lng": -89.9647
    },
    {
        "state": "FL",
        "city": "Fruitland Park",
        "lat": 28.8599,
        "lng": -81.9177
    },
    {
        "state": "NY",
        "city": "Johnstown",
        "lat": 43.0073,
        "lng": -74.3755
    },
    {
        "state": "CA",
        "city": "Rolling Hills Estates",
        "lat": 33.7783,
        "lng": -118.3509
    },
    {
        "state": "IL",
        "city": "Hillside",
        "lat": 41.8675,
        "lng": -87.9019
    },
    {
        "state": "UT",
        "city": "Richfield",
        "lat": 38.7613,
        "lng": -112.0931
    },
    {
        "state": "OH",
        "city": "Bellevue",
        "lat": 41.2745,
        "lng": -82.8403
    },
    {
        "state": "OR",
        "city": "Stayton",
        "lat": 44.8034,
        "lng": -122.7984
    },
    {
        "state": "PA",
        "city": "Wilson",
        "lat": 40.6844,
        "lng": -75.2407
    },
    {
        "state": "NJ",
        "city": "Oradell",
        "lat": 40.9562,
        "lng": -74.0314
    },
    {
        "state": "NY",
        "city": "Hornell",
        "lat": 42.3333,
        "lng": -77.6633
    },
    {
        "state": "FL",
        "city": "Fern Park",
        "lat": 28.6485,
        "lng": -81.3458
    },
    {
        "state": "MT",
        "city": "Helena Valley West Central",
        "lat": 46.6634,
        "lng": -112.0604
    },
    {
        "state": "MO",
        "city": "Maplewood",
        "lat": 38.6121,
        "lng": -90.324
    },
    {
        "state": "WA",
        "city": "Selah",
        "lat": 46.6481,
        "lng": -120.539
    },
    {
        "state": "CA",
        "city": "Topanga",
        "lat": 34.0965,
        "lng": -118.6053
    },
    {
        "state": "PA",
        "city": "Dormont",
        "lat": 40.3941,
        "lng": -80.0377
    },
    {
        "state": "MN",
        "city": "St. Francis",
        "lat": 45.3991,
        "lng": -93.3901
    },
    {
        "state": "MO",
        "city": "Carl Junction",
        "lat": 37.1668,
        "lng": -94.5469
    },
    {
        "state": "CA",
        "city": "Corning",
        "lat": 39.9283,
        "lng": -122.1819
    },
    {
        "state": "VA",
        "city": "Franklin",
        "lat": 36.6831,
        "lng": -76.9386
    },
    {
        "state": "OH",
        "city": "Oberlin",
        "lat": 41.286,
        "lng": -82.2198
    },
    {
        "state": "AR",
        "city": "Stuttgart",
        "lat": 34.4952,
        "lng": -91.5487
    },
    {
        "state": "NV",
        "city": "Laughlin",
        "lat": 35.1401,
        "lng": -114.6206
    },
    {
        "state": "ID",
        "city": "Payette",
        "lat": 44.0788,
        "lng": -116.9255
    },
    {
        "state": "IL",
        "city": "Gilberts",
        "lat": 42.1097,
        "lng": -88.3715
    },
    {
        "state": "NY",
        "city": "Hillcrest",
        "lat": 41.1298,
        "lng": -74.035
    },
    {
        "state": "GA",
        "city": "Dock Junction",
        "lat": 31.2031,
        "lng": -81.5155
    },
    {
        "state": "PA",
        "city": "Hatboro",
        "lat": 40.1775,
        "lng": -75.1055
    },
    {
        "state": "UT",
        "city": "Price",
        "lat": 39.604,
        "lng": -110.8003
    },
    {
        "state": "MO",
        "city": "Brentwood",
        "lat": 38.6194,
        "lng": -90.3475
    },
    {
        "state": "AK",
        "city": "Ketchikan",
        "lat": 55.3556,
        "lng": -131.6698
    },
    {
        "state": "TN",
        "city": "Milan",
        "lat": 35.9126,
        "lng": -88.7554
    },
    {
        "state": "CO",
        "city": "Fort Lupton",
        "lat": 40.0827,
        "lng": -104.8068
    },
    {
        "state": "WI",
        "city": "Sheboygan Falls",
        "lat": 43.729,
        "lng": -87.8266
    },
    {
        "state": "LA",
        "city": "Old Jefferson",
        "lat": 30.3776,
        "lng": -91.006
    },
    {
        "state": "AL",
        "city": "Bay Minette",
        "lat": 30.893,
        "lng": -87.7912
    },
    {
        "state": "WV",
        "city": "Oak Hill",
        "lat": 37.9844,
        "lng": -81.1277
    },
    {
        "state": "MN",
        "city": "New Prague",
        "lat": 44.5459,
        "lng": -93.5755
    },
    {
        "state": "OR",
        "city": "Green",
        "lat": 43.1509,
        "lng": -123.3854
    },
    {
        "state": "OH",
        "city": "Landen",
        "lat": 39.3154,
        "lng": -84.2768
    },
    {
        "state": "NJ",
        "city": "Twin Rivers",
        "lat": 40.2631,
        "lng": -74.4917
    },
    {
        "state": "CA",
        "city": "Firebaugh",
        "lat": 36.8533,
        "lng": -120.4535
    },
    {
        "state": "TX",
        "city": "Cuero",
        "lat": 29.1023,
        "lng": -97.2871
    },
    {
        "state": "NJ",
        "city": "Spotswood",
        "lat": 40.3949,
        "lng": -74.392
    },
    {
        "state": "TX",
        "city": "Kirby",
        "lat": 29.4614,
        "lng": -98.3855
    },
    {
        "state": "PA",
        "city": "Camp Hill",
        "lat": 40.2422,
        "lng": -76.9274
    },
    {
        "state": "NC",
        "city": "Roxboro",
        "lat": 36.3879,
        "lng": -78.9812
    },
    {
        "state": "MO",
        "city": "Nevada",
        "lat": 37.8445,
        "lng": -94.3492
    },
    {
        "state": "WA",
        "city": "Duvall",
        "lat": 47.7354,
        "lng": -121.9726
    },
    {
        "state": "VT",
        "city": "Winooski",
        "lat": 44.4948,
        "lng": -73.1846
    },
    {
        "state": "NE",
        "city": "Alliance",
        "lat": 42.1025,
        "lng": -102.8766
    },
    {
        "state": "MD",
        "city": "Baltimore Highlands",
        "lat": 39.2355,
        "lng": -76.6367
    },
    {
        "state": "IN",
        "city": "Brazil",
        "lat": 39.5226,
        "lng": -87.124
    },
    {
        "state": "IL",
        "city": "Hampshire",
        "lat": 42.1124,
        "lng": -88.5118
    },
    {
        "state": "GA",
        "city": "Austell",
        "lat": 33.8201,
        "lng": -84.6451
    },
    {
        "state": "NE",
        "city": "York",
        "lat": 40.8701,
        "lng": -97.5928
    },
    {
        "state": "NY",
        "city": "Wading River",
        "lat": 40.9464,
        "lng": -72.823
    },
    {
        "state": "SC",
        "city": "Union",
        "lat": 34.7235,
        "lng": -81.6248
    },
    {
        "state": "MT",
        "city": "Whitefish",
        "lat": 48.4328,
        "lng": -114.359
    },
    {
        "state": "CT",
        "city": "Thompsonville",
        "lat": 41.9915,
        "lng": -72.5965
    },
    {
        "state": "NY",
        "city": "Lake Carmel",
        "lat": 41.461,
        "lng": -73.6683
    },
    {
        "state": "PA",
        "city": "Downingtown",
        "lat": 40.0076,
        "lng": -75.7019
    },
    {
        "state": "TX",
        "city": "Sonterra",
        "lat": 30.8079,
        "lng": -97.5952
    },
    {
        "state": "PA",
        "city": "Villanova",
        "lat": 40.0405,
        "lng": -75.341
    },
    {
        "state": "TX",
        "city": "Los Fresnos",
        "lat": 26.075,
        "lng": -97.4875
    },
    {
        "state": "VA",
        "city": "Rockwood",
        "lat": 37.463,
        "lng": -77.5744
    },
    {
        "state": "WI",
        "city": "Antigo",
        "lat": 45.141,
        "lng": -89.1552
    },
    {
        "state": "WA",
        "city": "Sequim",
        "lat": 48.0746,
        "lng": -123.0945
    },
    {
        "state": "OK",
        "city": "Collinsville",
        "lat": 36.3723,
        "lng": -95.8609
    },
    {
        "state": "MN",
        "city": "Mahtomedi",
        "lat": 45.0619,
        "lng": -92.966
    },
    {
        "state": "PA",
        "city": "Carnegie",
        "lat": 40.408,
        "lng": -80.0861
    },
    {
        "state": "IL",
        "city": "Oak Brook",
        "lat": 41.8373,
        "lng": -87.9516
    },
    {
        "state": "WV",
        "city": "Moundsville",
        "lat": 39.9221,
        "lng": -80.7422
    },
    {
        "state": "DE",
        "city": "Seaford",
        "lat": 38.6538,
        "lng": -75.611
    },
    {
        "state": "WA",
        "city": "Stanwood",
        "lat": 48.2449,
        "lng": -122.3426
    },
    {
        "state": "CA",
        "city": "Pismo Beach",
        "lat": 35.1487,
        "lng": -120.6493
    },
    {
        "state": "NJ",
        "city": "Atco",
        "lat": 39.7682,
        "lng": -74.8618
    },
    {
        "state": "AL",
        "city": "Orange Beach",
        "lat": 30.2942,
        "lng": -87.5849
    },
    {
        "state": "SC",
        "city": "Hardeeville",
        "lat": 32.2949,
        "lng": -81.0321
    },
    {
        "state": "PA",
        "city": "Latrobe",
        "lat": 40.3125,
        "lng": -79.3825
    },
    {
        "state": "NJ",
        "city": "Butler",
        "lat": 40.999,
        "lng": -74.3472
    },
    {
        "state": "VA",
        "city": "Vinton",
        "lat": 37.2746,
        "lng": -79.8887
    },
    {
        "state": "SC",
        "city": "Sans Souci",
        "lat": 34.8901,
        "lng": -82.4241
    },
    {
        "state": "TX",
        "city": "Prairie View",
        "lat": 30.0847,
        "lng": -95.9892
    },
    {
        "state": "IL",
        "city": "Island Lake",
        "lat": 42.2782,
        "lng": -88.1999
    },
    {
        "state": "CA",
        "city": "Interlaken",
        "lat": 36.9505,
        "lng": -121.7363
    },
    {
        "state": "MN",
        "city": "Wyoming",
        "lat": 45.3365,
        "lng": -92.9766
    },
    {
        "state": "MI",
        "city": "Grand Blanc",
        "lat": 42.9258,
        "lng": -83.6181
    },
    {
        "state": "CA",
        "city": "Midway City",
        "lat": 33.7452,
        "lng": -117.9849
    },
    {
        "state": "VT",
        "city": "Montpelier",
        "lat": 44.2659,
        "lng": -72.5717
    },
    {
        "state": "FL",
        "city": "North Bay Village",
        "lat": 25.8487,
        "lng": -80.1535
    },
    {
        "state": "CO",
        "city": "Fruitvale",
        "lat": 39.0933,
        "lng": -108.4789
    },
    {
        "state": "TX",
        "city": "Dalhart",
        "lat": 36.058,
        "lng": -102.5123
    },
    {
        "state": "LA",
        "city": "Reserve",
        "lat": 30.0741,
        "lng": -90.5557
    },
    {
        "state": "AL",
        "city": "Brook Highland",
        "lat": 33.4359,
        "lng": -86.6849
    },
    {
        "state": "MI",
        "city": "Hillsdale",
        "lat": 41.9267,
        "lng": -84.6356
    },
    {
        "state": "TX",
        "city": "Joshua",
        "lat": 32.458,
        "lng": -97.3849
    },
    {
        "state": "OR",
        "city": "Scappoose",
        "lat": 45.7582,
        "lng": -122.873
    },
    {
        "state": "MD",
        "city": "Robinwood",
        "lat": 39.6265,
        "lng": -77.663
    },
    {
        "state": "NC",
        "city": "Fletcher",
        "lat": 35.4316,
        "lng": -82.5039
    },
    {
        "state": "AR",
        "city": "Farmington",
        "lat": 36.037,
        "lng": -94.2537
    },
    {
        "state": "WA",
        "city": "Waller",
        "lat": 47.2035,
        "lng": -122.37
    },
    {
        "state": "NY",
        "city": "Port Jefferson",
        "lat": 40.9466,
        "lng": -73.0577
    },
    {
        "state": "IN",
        "city": "Charlestown",
        "lat": 38.427,
        "lng": -85.6677
    },
    {
        "state": "CO",
        "city": "Applewood",
        "lat": 39.7523,
        "lng": -105.1604
    },
    {
        "state": "AR",
        "city": "Newport",
        "lat": 35.6234,
        "lng": -91.2322
    },
    {
        "state": "ND",
        "city": "Wahpeton",
        "lat": 46.2722,
        "lng": -96.6118
    },
    {
        "state": "NY",
        "city": "Port Jefferson Station",
        "lat": 40.9259,
        "lng": -73.0652
    },
    {
        "state": "CO",
        "city": "Lochbuie",
        "lat": 40.0118,
        "lng": -104.7271
    },
    {
        "state": "CT",
        "city": "Glastonbury Center",
        "lat": 41.7016,
        "lng": -72.6002
    },
    {
        "state": "IL",
        "city": "Broadview",
        "lat": 41.8583,
        "lng": -87.8562
    },
    {
        "state": "CA",
        "city": "Westlake Village",
        "lat": 34.1369,
        "lng": -118.822
    },
    {
        "state": "VA",
        "city": "Greenbriar",
        "lat": 38.8717,
        "lng": -77.397
    },
    {
        "state": "WA",
        "city": "Barberton",
        "lat": 45.7136,
        "lng": -122.6115
    },
    {
        "state": "PA",
        "city": "Leola",
        "lat": 40.0915,
        "lng": -76.1891
    },
    {
        "state": "IL",
        "city": "South Beloit",
        "lat": 42.4825,
        "lng": -89.026
    },
    {
        "state": "VA",
        "city": "South Boston",
        "lat": 36.7132,
        "lng": -78.9135
    },
    {
        "state": "UT",
        "city": "South Weber",
        "lat": 41.1334,
        "lng": -111.9393
    },
    {
        "state": "IL",
        "city": "Silvis",
        "lat": 41.4976,
        "lng": -90.4101
    },
    {
        "state": "HI",
        "city": "Pukalani",
        "lat": 20.8329,
        "lng": -156.3415
    },
    {
        "state": "SC",
        "city": "Travelers Rest",
        "lat": 34.9582,
        "lng": -82.4412
    },
    {
        "state": "CT",
        "city": "Southwood Acres",
        "lat": 41.9582,
        "lng": -72.5726
    },
    {
        "state": "TN",
        "city": "Lexington",
        "lat": 35.6618,
        "lng": -88.3944
    },
    {
        "state": "MI",
        "city": "Three Rivers",
        "lat": 41.947,
        "lng": -85.6281
    },
    {
        "state": "MI",
        "city": "Big Rapids",
        "lat": 43.6992,
        "lng": -85.4806
    },
    {
        "state": "CO",
        "city": "Woodland Park",
        "lat": 38.9985,
        "lng": -105.0594
    },
    {
        "state": "MI",
        "city": "Whitmore Lake",
        "lat": 42.4258,
        "lng": -83.753
    },
    {
        "state": "CA",
        "city": "Heber",
        "lat": 32.7325,
        "lng": -115.5294
    },
    {
        "state": "MO",
        "city": "Dexter",
        "lat": 36.7928,
        "lng": -89.9632
    },
    {
        "state": "CA",
        "city": "Gold River",
        "lat": 38.6268,
        "lng": -121.2488
    },
    {
        "state": "PA",
        "city": "Grove City",
        "lat": 41.1572,
        "lng": -80.0894
    },
    {
        "state": "IL",
        "city": "Lincolnshire",
        "lat": 42.1958,
        "lng": -87.9182
    },
    {
        "state": "NJ",
        "city": "Basking Ridge",
        "lat": 40.7061,
        "lng": -74.5568
    },
    {
        "state": "WI",
        "city": "Ashland",
        "lat": 46.5799,
        "lng": -90.8713
    },
    {
        "state": "NC",
        "city": "Woodfin",
        "lat": 35.6457,
        "lng": -82.5915
    },
    {
        "state": "AZ",
        "city": "Golden Valley",
        "lat": 35.206,
        "lng": -114.2327
    },
    {
        "state": "KY",
        "city": "Oak Grove",
        "lat": 36.6686,
        "lng": -87.4216
    },
    {
        "state": "NY",
        "city": "Center Moriches",
        "lat": 40.8004,
        "lng": -72.7958
    },
    {
        "state": "NJ",
        "city": "Bernardsville",
        "lat": 40.7268,
        "lng": -74.5918
    },
    {
        "state": "MN",
        "city": "Albertville",
        "lat": 45.2364,
        "lng": -93.6618
    },
    {
        "state": "NY",
        "city": "Congers",
        "lat": 41.1491,
        "lng": -73.9457
    },
    {
        "state": "IA",
        "city": "Perry",
        "lat": 41.8387,
        "lng": -94.0938
    },
    {
        "state": "UT",
        "city": "Plain City",
        "lat": 41.3071,
        "lng": -112.0877
    },
    {
        "state": "TX",
        "city": "Sunnyvale",
        "lat": 32.7974,
        "lng": -96.5577
    },
    {
        "state": "PR",
        "city": "Luquillo",
        "lat": 18.3719,
        "lng": -65.7221
    },
    {
        "state": "TX",
        "city": "Mont Belvieu",
        "lat": 29.8518,
        "lng": -94.8775
    },
    {
        "state": "TX",
        "city": "Homestead Meadows South",
        "lat": 31.811,
        "lng": -106.1643
    },
    {
        "state": "MI",
        "city": "St. Joseph",
        "lat": 42.0968,
        "lng": -86.4849
    },
    {
        "state": "TN",
        "city": "Humboldt",
        "lat": 35.8271,
        "lng": -88.9058
    },
    {
        "state": "NC",
        "city": "Siler City",
        "lat": 35.7251,
        "lng": -79.456
    },
    {
        "state": "PA",
        "city": "Bradford",
        "lat": 41.9605,
        "lng": -78.6412
    },
    {
        "state": "IL",
        "city": "West Dundee",
        "lat": 42.0981,
        "lng": -88.3066
    },
    {
        "state": "TX",
        "city": "Navasota",
        "lat": 30.3873,
        "lng": -96.0901
    },
    {
        "state": "MS",
        "city": "St. Martin",
        "lat": 30.44,
        "lng": -88.8652
    },
    {
        "state": "CA",
        "city": "Oak Hills",
        "lat": 34.391,
        "lng": -117.4123
    },
    {
        "state": "SC",
        "city": "Camden",
        "lat": 34.257,
        "lng": -80.609
    },
    {
        "state": "CA",
        "city": "Yreka",
        "lat": 41.7291,
        "lng": -122.6312
    },
    {
        "state": "WI",
        "city": "Ripon",
        "lat": 43.8436,
        "lng": -88.8386
    },
    {
        "state": "OH",
        "city": "Campbell",
        "lat": 41.0777,
        "lng": -80.5903
    },
    {
        "state": "PR",
        "city": "Arroyo",
        "lat": 17.9706,
        "lng": -66.0598
    },
    {
        "state": "GA",
        "city": "Gresham Park",
        "lat": 33.7053,
        "lng": -84.3155
    },
    {
        "state": "VA",
        "city": "Fort Belvoir",
        "lat": 38.7119,
        "lng": -77.1459
    },
    {
        "state": "WI",
        "city": "Jackson",
        "lat": 43.3233,
        "lng": -88.1666
    },
    {
        "state": "NE",
        "city": "Blair",
        "lat": 41.5416,
        "lng": -96.1359
    },
    {
        "state": "OK",
        "city": "Wagoner",
        "lat": 35.9645,
        "lng": -95.3785
    },
    {
        "state": "FL",
        "city": "Quincy",
        "lat": 30.5661,
        "lng": -84.5858
    },
    {
        "state": "MA",
        "city": "Middleborough Center",
        "lat": 41.8945,
        "lng": -70.926
    },
    {
        "state": "LA",
        "city": "Ponchatoula",
        "lat": 30.4402,
        "lng": -90.4428
    },
    {
        "state": "OH",
        "city": "Withamsville",
        "lat": 39.0628,
        "lng": -84.2808
    },
    {
        "state": "NY",
        "city": "North Patchogue",
        "lat": 40.7833,
        "lng": -73.0234
    },
    {
        "state": "NY",
        "city": "Westmere",
        "lat": 42.6884,
        "lng": -73.8744
    },
    {
        "state": "NJ",
        "city": "Glen Ridge",
        "lat": 40.8041,
        "lng": -74.2043
    },
    {
        "state": "MI",
        "city": "Grand Ledge",
        "lat": 42.7534,
        "lng": -84.7448
    },
    {
        "state": "GA",
        "city": "Auburn",
        "lat": 34.0156,
        "lng": -83.8319
    },
    {
        "state": "TN",
        "city": "Ripley",
        "lat": 35.7449,
        "lng": -89.5358
    },
    {
        "state": "FL",
        "city": "Inverness Highlands South",
        "lat": 28.8007,
        "lng": -82.3371
    },
    {
        "state": "IA",
        "city": "Webster City",
        "lat": 42.4622,
        "lng": -93.8168
    },
    {
        "state": "CA",
        "city": "South San Gabriel",
        "lat": 34.0488,
        "lng": -118.0961
    },
    {
        "state": "NJ",
        "city": "Brigantine",
        "lat": 39.4138,
        "lng": -74.3787
    },
    {
        "state": "VA",
        "city": "Bellwood",
        "lat": 37.406,
        "lng": -77.4363
    },
    {
        "state": "PA",
        "city": "Palmyra",
        "lat": 40.3099,
        "lng": -76.5943
    },
    {
        "state": "MD",
        "city": "Brunswick",
        "lat": 39.318,
        "lng": -77.6253
    },
    {
        "state": "NJ",
        "city": "Fort Dix",
        "lat": 40.006,
        "lng": -74.6089
    },
    {
        "state": "WI",
        "city": "Jefferson",
        "lat": 43.0044,
        "lng": -88.8084
    },
    {
        "state": "IL",
        "city": "Round Lake Park",
        "lat": 42.3309,
        "lng": -88.075
    },
    {
        "state": "NC",
        "city": "Brevard",
        "lat": 35.2438,
        "lng": -82.7265
    },
    {
        "state": "NY",
        "city": "Garden City Park",
        "lat": 40.7435,
        "lng": -73.6639
    },
    {
        "state": "KS",
        "city": "Bonner Springs",
        "lat": 39.0817,
        "lng": -94.8776
    },
    {
        "state": "PR",
        "city": "Sabana Seca",
        "lat": 18.4273,
        "lng": -66.1809
    },
    {
        "state": "MD",
        "city": "Four Corners",
        "lat": 39.0235,
        "lng": -77.0102
    },
    {
        "state": "TX",
        "city": "Jersey Village",
        "lat": 29.8903,
        "lng": -95.5721
    },
    {
        "state": "TX",
        "city": "Cleveland",
        "lat": 30.3381,
        "lng": -95.0908
    },
    {
        "state": "WA",
        "city": "Quincy",
        "lat": 47.2344,
        "lng": -119.853
    },
    {
        "state": "IL",
        "city": "Princeton",
        "lat": 41.3807,
        "lng": -89.464
    },
    {
        "state": "UT",
        "city": "Farr West",
        "lat": 41.3015,
        "lng": -112.0318
    },
    {
        "state": "NY",
        "city": "Baldwinsville",
        "lat": 43.1578,
        "lng": -76.3325
    },
    {
        "state": "TX",
        "city": "Lucas",
        "lat": 33.0942,
        "lng": -96.5797
    },
    {
        "state": "MN",
        "city": "Dayton",
        "lat": 45.1906,
        "lng": -93.4758
    },
    {
        "state": "MI",
        "city": "Albion",
        "lat": 42.2478,
        "lng": -84.7572
    },
    {
        "state": "NY",
        "city": "Mount Ivy",
        "lat": 41.1927,
        "lng": -74.0296
    },
    {
        "state": "PA",
        "city": "Glenside",
        "lat": 40.1032,
        "lng": -75.1517
    },
    {
        "state": "NJ",
        "city": "Bloomingdale",
        "lat": 41.03,
        "lng": -74.3319
    },
    {
        "state": "MO",
        "city": "Boonville",
        "lat": 38.9587,
        "lng": -92.7472
    },
    {
        "state": "NJ",
        "city": "Fanwood",
        "lat": 40.6417,
        "lng": -74.3857
    },
    {
        "state": "IL",
        "city": "Inverness",
        "lat": 42.1153,
        "lng": -88.1019
    },
    {
        "state": "MN",
        "city": "Shorewood",
        "lat": 44.9034,
        "lng": -93.5905
    },
    {
        "state": "NJ",
        "city": "Watsessing",
        "lat": 40.7866,
        "lng": -74.2007
    },
    {
        "state": "NY",
        "city": "Manhasset",
        "lat": 40.7884,
        "lng": -73.6943
    },
    {
        "state": "WI",
        "city": "Mount Horeb",
        "lat": 43.006,
        "lng": -89.7316
    },
    {
        "state": "MI",
        "city": "St. Johns",
        "lat": 43.0006,
        "lng": -84.5554
    },
    {
        "state": "KS",
        "city": "Wellington",
        "lat": 37.2625,
        "lng": -97.426
    },
    {
        "state": "GA",
        "city": "Tyrone",
        "lat": 33.4752,
        "lng": -84.5941
    },
    {
        "state": "TX",
        "city": "Providence Village",
        "lat": 33.238,
        "lng": -96.9583
    },
    {
        "state": "PA",
        "city": "Gettysburg",
        "lat": 39.8304,
        "lng": -77.2339
    },
    {
        "state": "HI",
        "city": "Makawao",
        "lat": 20.848,
        "lng": -156.319
    },
    {
        "state": "KS",
        "city": "Park City",
        "lat": 37.8101,
        "lng": -97.3256
    },
    {
        "state": "NY",
        "city": "Ilion",
        "lat": 43.0114,
        "lng": -75.0396
    },
    {
        "state": "IL",
        "city": "Park City",
        "lat": 42.3521,
        "lng": -87.8914
    },
    {
        "state": "OH",
        "city": "Fairlawn",
        "lat": 41.1271,
        "lng": -81.6216
    },
    {
        "state": "NM",
        "city": "Ruidoso",
        "lat": 33.3646,
        "lng": -105.6434
    },
    {
        "state": "ID",
        "city": "Emmett",
        "lat": 43.8693,
        "lng": -116.4916
    },
    {
        "state": "MI",
        "city": "Ludington",
        "lat": 43.9573,
        "lng": -86.4434
    },
    {
        "state": "MA",
        "city": "Mansfield Center",
        "lat": 42.0225,
        "lng": -71.218
    },
    {
        "state": "NC",
        "city": "Etowah",
        "lat": 35.3061,
        "lng": -82.5902
    },
    {
        "state": "CA",
        "city": "Larkfield-Wikiup",
        "lat": 38.513,
        "lng": -122.7536
    },
    {
        "state": "CO",
        "city": "Twin Lakes",
        "lat": 39.8229,
        "lng": -105.0036
    },
    {
        "state": "OH",
        "city": "Kenton",
        "lat": 40.6449,
        "lng": -83.6093
    },
    {
        "state": "PA",
        "city": "Ellwood City",
        "lat": 40.8619,
        "lng": -80.2829
    },
    {
        "state": "TX",
        "city": "Lake Dallas",
        "lat": 33.1279,
        "lng": -97.0234
    },
    {
        "state": "OK",
        "city": "Catoosa",
        "lat": 36.1834,
        "lng": -95.768
    },
    {
        "state": "WI",
        "city": "Hales Corners",
        "lat": 42.9409,
        "lng": -88.0491
    },
    {
        "state": "OH",
        "city": "Northridge",
        "lat": 39.9971,
        "lng": -83.777
    },
    {
        "state": "FL",
        "city": "Southeast Arcadia",
        "lat": 27.1862,
        "lng": -81.8521
    },
    {
        "state": "CA",
        "city": "Earlimart",
        "lat": 35.8914,
        "lng": -119.2721
    },
    {
        "state": "MO",
        "city": "Parkville",
        "lat": 39.2005,
        "lng": -94.7225
    },
    {
        "state": "NE",
        "city": "Seward",
        "lat": 40.9099,
        "lng": -97.0957
    },
    {
        "state": "CO",
        "city": "Lamar",
        "lat": 38.074,
        "lng": -102.6154
    },
    {
        "state": "OH",
        "city": "Canfield",
        "lat": 41.0291,
        "lng": -80.7698
    },
    {
        "state": "OR",
        "city": "Jennings Lodge",
        "lat": 45.3927,
        "lng": -122.6152
    },
    {
        "state": "NC",
        "city": "Kill Devil Hills",
        "lat": 36.0167,
        "lng": -75.6699
    },
    {
        "state": "MS",
        "city": "New Albany",
        "lat": 34.4909,
        "lng": -89.0201
    },
    {
        "state": "FL",
        "city": "South Apopka",
        "lat": 28.657,
        "lng": -81.5058
    },
    {
        "state": "MD",
        "city": "Fairwood",
        "lat": 38.9565,
        "lng": -76.778
    },
    {
        "state": "NC",
        "city": "Marion",
        "lat": 35.6777,
        "lng": -82.0017
    },
    {
        "state": "CA",
        "city": "Cherry Valley",
        "lat": 33.9797,
        "lng": -116.9694
    },
    {
        "state": "FL",
        "city": "McGregor",
        "lat": 26.5611,
        "lng": -81.9134
    },
    {
        "state": "VA",
        "city": "Farmville",
        "lat": 37.2959,
        "lng": -78.4002
    },
    {
        "state": "IA",
        "city": "Clear Lake",
        "lat": 43.1347,
        "lng": -93.374
    },
    {
        "state": "CA",
        "city": "Oroville East",
        "lat": 39.4947,
        "lng": -121.4866
    },
    {
        "state": "VA",
        "city": "Collinsville",
        "lat": 36.7215,
        "lng": -79.9122
    },
    {
        "state": "NC",
        "city": "Oak Ridge",
        "lat": 36.174,
        "lng": -79.9916
    },
    {
        "state": "VA",
        "city": "Long Branch",
        "lat": 38.8302,
        "lng": -77.2713
    },
    {
        "state": "NJ",
        "city": "Mystic Island",
        "lat": 39.5659,
        "lng": -74.3831
    },
    {
        "state": "MI",
        "city": "Hudsonville",
        "lat": 42.8632,
        "lng": -85.8627
    },
    {
        "state": "OK",
        "city": "Piedmont",
        "lat": 35.6781,
        "lng": -97.7526
    },
    {
        "state": "UT",
        "city": "Santa Clara",
        "lat": 37.1312,
        "lng": -113.656
    },
    {
        "state": "SC",
        "city": "Clinton",
        "lat": 34.4781,
        "lng": -81.8638
    },
    {
        "state": "IL",
        "city": "Jerseyville",
        "lat": 39.1176,
        "lng": -90.327
    },
    {
        "state": "OH",
        "city": "Hubbard",
        "lat": 41.1595,
        "lng": -80.5672
    },
    {
        "state": "VA",
        "city": "Ashland",
        "lat": 37.7597,
        "lng": -77.4716
    },
    {
        "state": "IA",
        "city": "Bondurant",
        "lat": 41.6985,
        "lng": -93.4556
    },
    {
        "state": "KY",
        "city": "London",
        "lat": 37.1175,
        "lng": -84.0767
    },
    {
        "state": "IA",
        "city": "Decorah",
        "lat": 43.3012,
        "lng": -91.7839
    },
    {
        "state": "CA",
        "city": "Ojai",
        "lat": 34.4488,
        "lng": -119.2469
    },
    {
        "state": "SC",
        "city": "Burton",
        "lat": 32.4232,
        "lng": -80.7456
    },
    {
        "state": "FL",
        "city": "Inverness",
        "lat": 28.8416,
        "lng": -82.3418
    },
    {
        "state": "PA",
        "city": "Pittston",
        "lat": 41.3272,
        "lng": -75.7888
    },
    {
        "state": "AZ",
        "city": "Wickenburg",
        "lat": 33.9837,
        "lng": -112.7669
    },
    {
        "state": "NJ",
        "city": "Dunellen",
        "lat": 40.5903,
        "lng": -74.4656
    },
    {
        "state": "TX",
        "city": "Monahans",
        "lat": 31.6289,
        "lng": -103.0403
    },
    {
        "state": "NY",
        "city": "Hewlett",
        "lat": 40.6422,
        "lng": -73.6942
    },
    {
        "state": "FL",
        "city": "Southwest Ranches",
        "lat": 26.0476,
        "lng": -80.3751
    },
    {
        "state": "IN",
        "city": "Lakes of the Four Seasons",
        "lat": 41.4074,
        "lng": -87.2202
    },
    {
        "state": "TX",
        "city": "River Oaks",
        "lat": 32.7767,
        "lng": -97.3985
    },
    {
        "state": "PA",
        "city": "White Oak",
        "lat": 40.3415,
        "lng": -79.8008
    },
    {
        "state": "CA",
        "city": "Franklin",
        "lat": 37.3275,
        "lng": -120.5321
    },
    {
        "state": "VA",
        "city": "Fort Lee",
        "lat": 37.2357,
        "lng": -77.3325
    },
    {
        "state": "LA",
        "city": "Red Chute",
        "lat": 32.5732,
        "lng": -93.6059
    },
    {
        "state": "KS",
        "city": "Fort Scott",
        "lat": 37.8283,
        "lng": -94.7038
    },
    {
        "state": "WI",
        "city": "Cottage Grove",
        "lat": 43.0922,
        "lng": -89.2054
    },
    {
        "state": "CA",
        "city": "Fairfax",
        "lat": 37.9886,
        "lng": -122.5952
    },
    {
        "state": "VA",
        "city": "Woodlake",
        "lat": 37.4215,
        "lng": -77.6783
    },
    {
        "state": "UT",
        "city": "Enoch",
        "lat": 37.7669,
        "lng": -113.0449
    },
    {
        "state": "KY",
        "city": "Pikeville",
        "lat": 37.4806,
        "lng": -82.5262
    },
    {
        "state": "WY",
        "city": "Lander",
        "lat": 42.8312,
        "lng": -108.7599
    },
    {
        "state": "TX",
        "city": "West Livingston",
        "lat": 30.6957,
        "lng": -95.0097
    },
    {
        "state": "TX",
        "city": "Mila Doce",
        "lat": 26.223,
        "lng": -97.9601
    },
    {
        "state": "PR",
        "city": "Utuado",
        "lat": 18.27,
        "lng": -66.7048
    },
    {
        "state": "HI",
        "city": "Waikele",
        "lat": 21.4025,
        "lng": -158.0058
    },
    {
        "state": "WA",
        "city": "North Bend",
        "lat": 47.49,
        "lng": -121.7741
    },
    {
        "state": "CA",
        "city": "Cotati",
        "lat": 38.3278,
        "lng": -122.7092
    },
    {
        "state": "LA",
        "city": "Breaux Bridge",
        "lat": 30.2829,
        "lng": -91.9043
    },
    {
        "state": "NY",
        "city": "Williston Park",
        "lat": 40.7587,
        "lng": -73.6465
    },
    {
        "state": "GA",
        "city": "Swainsboro",
        "lat": 32.5866,
        "lng": -82.3345
    },
    {
        "state": "OH",
        "city": "Independence",
        "lat": 41.378,
        "lng": -81.6385
    },
    {
        "state": "FL",
        "city": "Odessa",
        "lat": 28.1821,
        "lng": -82.553
    },
    {
        "state": "OK",
        "city": "Tuttle",
        "lat": 35.3068,
        "lng": -97.7564
    },
    {
        "state": "KY",
        "city": "Mount Sterling",
        "lat": 38.0648,
        "lng": -83.9472
    },
    {
        "state": "VA",
        "city": "Mantua",
        "lat": 38.8526,
        "lng": -77.2571
    },
    {
        "state": "FL",
        "city": "North Weeki Wachee",
        "lat": 28.5592,
        "lng": -82.5537
    },
    {
        "state": "MD",
        "city": "Savage",
        "lat": 39.1485,
        "lng": -76.8228
    },
    {
        "state": "CA",
        "city": "Hughson",
        "lat": 37.602,
        "lng": -120.866
    },
    {
        "state": "IA",
        "city": "Knoxville",
        "lat": 41.3188,
        "lng": -93.1024
    },
    {
        "state": "MI",
        "city": "Iron Mountain",
        "lat": 45.8275,
        "lng": -88.0599
    },
    {
        "state": "TX",
        "city": "Kaufman",
        "lat": 32.5766,
        "lng": -96.3158
    },
    {
        "state": "IA",
        "city": "Creston",
        "lat": 41.0598,
        "lng": -94.365
    },
    {
        "state": "PA",
        "city": "New Cumberland",
        "lat": 40.2297,
        "lng": -76.8764
    },
    {
        "state": "WA",
        "city": "Chehalis",
        "lat": 46.6638,
        "lng": -122.965
    },
    {
        "state": "PA",
        "city": "DuBois",
        "lat": 41.1223,
        "lng": -78.7565
    },
    {
        "state": "FL",
        "city": "Lely Resort",
        "lat": 26.0889,
        "lng": -81.7031
    },
    {
        "state": "MI",
        "city": "Hastings",
        "lat": 42.6498,
        "lng": -85.2886
    },
    {
        "state": "VA",
        "city": "Bull Run",
        "lat": 38.8396,
        "lng": -77.4897
    },
    {
        "state": "CA",
        "city": "Sebastopol",
        "lat": 38.4001,
        "lng": -122.8275
    },
    {
        "state": "MO",
        "city": "Marshfield",
        "lat": 37.3424,
        "lng": -92.9107
    },
    {
        "state": "CA",
        "city": "Woodlake",
        "lat": 36.4122,
        "lng": -119.1
    },
    {
        "state": "OR",
        "city": "Madras",
        "lat": 44.6483,
        "lng": -121.139
    },
    {
        "state": "NJ",
        "city": "Berlin",
        "lat": 39.7915,
        "lng": -74.9374
    },
    {
        "state": "MI",
        "city": "Brighton",
        "lat": 42.5298,
        "lng": -83.7848
    },
    {
        "state": "NJ",
        "city": "Haddon Heights",
        "lat": 39.8792,
        "lng": -75.0645
    },
    {
        "state": "PA",
        "city": "Blandon",
        "lat": 40.4447,
        "lng": -75.8799
    },
    {
        "state": "CO",
        "city": "Eagle",
        "lat": 39.6366,
        "lng": -106.8125
    },
    {
        "state": "FL",
        "city": "Arcadia",
        "lat": 27.2215,
        "lng": -81.8585
    },
    {
        "state": "FL",
        "city": "Longboat Key",
        "lat": 27.3926,
        "lng": -82.6341
    },
    {
        "state": "WI",
        "city": "Vernon",
        "lat": 42.884,
        "lng": -88.2494
    },
    {
        "state": "AK",
        "city": "Kenai",
        "lat": 60.5619,
        "lng": -151.1985
    },
    {
        "state": "MN",
        "city": "Crookston",
        "lat": 47.7747,
        "lng": -96.6062
    },
    {
        "state": "IL",
        "city": "Marengo",
        "lat": 42.2299,
        "lng": -88.6163
    },
    {
        "state": "IN",
        "city": "Tell City",
        "lat": 37.9529,
        "lng": -86.7595
    },
    {
        "state": "LA",
        "city": "St. Rose",
        "lat": 29.9649,
        "lng": -90.3088
    },
    {
        "state": "MS",
        "city": "Batesville",
        "lat": 34.3148,
        "lng": -89.9249
    },
    {
        "state": "ME",
        "city": "Old Town",
        "lat": 44.9491,
        "lng": -68.7249
    },
    {
        "state": "CA",
        "city": "Escalon",
        "lat": 37.7912,
        "lng": -120.9982
    },
    {
        "state": "ME",
        "city": "Caribou",
        "lat": 46.8662,
        "lng": -67.992
    },
    {
        "state": "SC",
        "city": "Homeland Park",
        "lat": 34.4644,
        "lng": -82.6593
    },
    {
        "state": "SC",
        "city": "Hartsville",
        "lat": 34.3675,
        "lng": -80.0829
    },
    {
        "state": "CA",
        "city": "Gridley",
        "lat": 39.3622,
        "lng": -121.6971
    },
    {
        "state": "AZ",
        "city": "Page",
        "lat": 36.9426,
        "lng": -111.5071
    },
    {
        "state": "MI",
        "city": "Shields",
        "lat": 43.4211,
        "lng": -84.0747
    },
    {
        "state": "NY",
        "city": "Great Neck Plaza",
        "lat": 40.7869,
        "lng": -73.7262
    },
    {
        "state": "TX",
        "city": "Floresville",
        "lat": 29.1451,
        "lng": -98.1651
    },
    {
        "state": "NJ",
        "city": "Palmyra",
        "lat": 40.0025,
        "lng": -75.036
    },
    {
        "state": "MD",
        "city": "Wildewood",
        "lat": 38.3035,
        "lng": -76.547
    },
    {
        "state": "OR",
        "city": "Umatilla",
        "lat": 45.9119,
        "lng": -119.3133
    },
    {
        "state": "NM",
        "city": "Bloomfield",
        "lat": 36.7401,
        "lng": -107.9734
    },
    {
        "state": "NY",
        "city": "Pleasantville",
        "lat": 41.1377,
        "lng": -73.7828
    },
    {
        "state": "NY",
        "city": "Hudson Falls",
        "lat": 43.3042,
        "lng": -73.5819
    },
    {
        "state": "TN",
        "city": "Thompson's Station",
        "lat": 35.8106,
        "lng": -86.9003
    },
    {
        "state": "CA",
        "city": "Alta Sierra",
        "lat": 39.1237,
        "lng": -121.0523
    },
    {
        "state": "FL",
        "city": "Sky Lake",
        "lat": 28.4611,
        "lng": -81.3913
    },
    {
        "state": "NC",
        "city": "Zebulon",
        "lat": 35.8329,
        "lng": -78.3158
    },
    {
        "state": "HI",
        "city": "Waikoloa Village",
        "lat": 19.9443,
        "lng": -155.8053
    },
    {
        "state": "WV",
        "city": "Dunbar",
        "lat": 38.3688,
        "lng": -81.7345
    },
    {
        "state": "VA",
        "city": "Floris",
        "lat": 38.9347,
        "lng": -77.4084
    },
    {
        "state": "TX",
        "city": "Alamo Heights",
        "lat": 29.4828,
        "lng": -98.4682
    },
    {
        "state": "OH",
        "city": "Dry Run",
        "lat": 39.1049,
        "lng": -84.3312
    },
    {
        "state": "SC",
        "city": "Forestbrook",
        "lat": 33.7242,
        "lng": -78.9677
    },
    {
        "state": "CA",
        "city": "Taft",
        "lat": 35.1268,
        "lng": -119.4243
    },
    {
        "state": "NE",
        "city": "McCook",
        "lat": 40.2046,
        "lng": -100.6216
    },
    {
        "state": "CA",
        "city": "Kentfield",
        "lat": 37.9481,
        "lng": -122.5497
    },
    {
        "state": "FL",
        "city": "Newberry",
        "lat": 29.6382,
        "lng": -82.6061
    },
    {
        "state": "TX",
        "city": "Hitchcock",
        "lat": 29.2949,
        "lng": -95.03
    },
    {
        "state": "NY",
        "city": "Briarcliff Manor",
        "lat": 41.14,
        "lng": -73.8438
    },
    {
        "state": "MT",
        "city": "Lockwood",
        "lat": 45.8199,
        "lng": -108.4072
    },
    {
        "state": "GA",
        "city": "Commerce",
        "lat": 34.2134,
        "lng": -83.4733
    },
    {
        "state": "NY",
        "city": "Viola",
        "lat": 41.1288,
        "lng": -74.0855
    },
    {
        "state": "FL",
        "city": "Broadview Park",
        "lat": 26.0978,
        "lng": -80.209
    },
    {
        "state": "AR",
        "city": "Pocahontas",
        "lat": 36.2635,
        "lng": -90.9706
    },
    {
        "state": "AR",
        "city": "Trumann",
        "lat": 35.677,
        "lng": -90.5259
    },
    {
        "state": "TX",
        "city": "Lampasas",
        "lat": 31.064,
        "lng": -98.1824
    },
    {
        "state": "CA",
        "city": "Boyes Hot Springs",
        "lat": 38.3126,
        "lng": -122.4888
    },
    {
        "state": "UT",
        "city": "Nibley",
        "lat": 41.6726,
        "lng": -111.8461
    },
    {
        "state": "GA",
        "city": "Cumming",
        "lat": 34.2063,
        "lng": -84.1339
    },
    {
        "state": "KY",
        "city": "Union",
        "lat": 38.9469,
        "lng": -84.6729
    },
    {
        "state": "NM",
        "city": "Belen",
        "lat": 34.7115,
        "lng": -106.7986
    },
    {
        "state": "NY",
        "city": "East Shoreham",
        "lat": 40.946,
        "lng": -72.8811
    },
    {
        "state": "NY",
        "city": "Oakdale",
        "lat": 40.7375,
        "lng": -73.1344
    },
    {
        "state": "IA",
        "city": "Charles City",
        "lat": 43.0646,
        "lng": -92.6745
    },
    {
        "state": "MN",
        "city": "Belle Plaine",
        "lat": 44.6196,
        "lng": -93.7606
    },
    {
        "state": "PA",
        "city": "Ancient Oaks",
        "lat": 40.536,
        "lng": -75.5852
    },
    {
        "state": "TX",
        "city": "Highlands",
        "lat": 29.813,
        "lng": -95.0577
    },
    {
        "state": "NC",
        "city": "Forest City",
        "lat": 35.3339,
        "lng": -81.8702
    },
    {
        "state": "MI",
        "city": "Freeland",
        "lat": 43.5198,
        "lng": -84.1124
    },
    {
        "state": "FL",
        "city": "Macclenny",
        "lat": 30.2809,
        "lng": -82.1253
    },
    {
        "state": "WA",
        "city": "Clover Creek",
        "lat": 47.1404,
        "lng": -122.3827
    },
    {
        "state": "PR",
        "city": "San Antonio",
        "lat": 18.4471,
        "lng": -66.2995
    },
    {
        "state": "TN",
        "city": "La Follette",
        "lat": 36.3718,
        "lng": -84.1256
    },
    {
        "state": "VA",
        "city": "Lexington",
        "lat": 37.7825,
        "lng": -79.4441
    },
    {
        "state": "WI",
        "city": "New London",
        "lat": 44.3949,
        "lng": -88.7395
    },
    {
        "state": "VA",
        "city": "Laurel Hill",
        "lat": 38.7026,
        "lng": -77.2422
    },
    {
        "state": "NY",
        "city": "Northport",
        "lat": 40.9038,
        "lng": -73.3447
    },
    {
        "state": "WI",
        "city": "Kimberly",
        "lat": 44.267,
        "lng": -88.3378
    },
    {
        "state": "KY",
        "city": "Villa Hills",
        "lat": 39.0656,
        "lng": -84.5949
    },
    {
        "state": "VA",
        "city": "Carrollton",
        "lat": 36.9382,
        "lng": -76.5238
    },
    {
        "state": "IA",
        "city": "Washington",
        "lat": 41.2981,
        "lng": -91.6928
    },
    {
        "state": "CA",
        "city": "Garnet",
        "lat": 33.9179,
        "lng": -116.4796
    },
    {
        "state": "IL",
        "city": "University Park",
        "lat": 41.4461,
        "lng": -87.7154
    },
    {
        "state": "FL",
        "city": "Beacon Square",
        "lat": 28.2118,
        "lng": -82.7504
    },
    {
        "state": "AL",
        "city": "Greenville",
        "lat": 31.8437,
        "lng": -86.638
    },
    {
        "state": "SD",
        "city": "Rapid Valley",
        "lat": 44.0674,
        "lng": -103.1223
    },
    {
        "state": "OH",
        "city": "Bellbrook",
        "lat": 39.6383,
        "lng": -84.0864
    },
    {
        "state": "OH",
        "city": "Chesterland",
        "lat": 41.5269,
        "lng": -81.3545
    },
    {
        "state": "PA",
        "city": "Archbald",
        "lat": 41.5077,
        "lng": -75.5453
    },
    {
        "state": "IN",
        "city": "Scottsburg",
        "lat": 38.6853,
        "lng": -85.7831
    },
    {
        "state": "KY",
        "city": "Flatwoods",
        "lat": 38.521,
        "lng": -82.7196
    },
    {
        "state": "NY",
        "city": "Cedarhurst",
        "lat": 40.6252,
        "lng": -73.7278
    },
    {
        "state": "CA",
        "city": "Bermuda Dunes",
        "lat": 33.7435,
        "lng": -116.2874
    },
    {
        "state": "CA",
        "city": "Nuevo",
        "lat": 33.8011,
        "lng": -117.1414
    },
    {
        "state": "WA",
        "city": "Parkwood",
        "lat": 47.5266,
        "lng": -122.5986
    },
    {
        "state": "OH",
        "city": "Wauseon",
        "lat": 41.5532,
        "lng": -84.141
    },
    {
        "state": "LA",
        "city": "Meraux",
        "lat": 29.9284,
        "lng": -89.9179
    },
    {
        "state": "NY",
        "city": "Scotia",
        "lat": 42.8321,
        "lng": -73.9607
    },
    {
        "state": "MO",
        "city": "Aurora",
        "lat": 36.9673,
        "lng": -93.7184
    },
    {
        "state": "AL",
        "city": "Montevallo",
        "lat": 33.1246,
        "lng": -86.8477
    },
    {
        "state": "CA",
        "city": "Oceano",
        "lat": 35.1019,
        "lng": -120.6088
    },
    {
        "state": "CA",
        "city": "Acton",
        "lat": 34.4956,
        "lng": -118.1858
    },
    {
        "state": "NJ",
        "city": "Rumson",
        "lat": 40.3626,
        "lng": -74.0046
    },
    {
        "state": "PR",
        "city": "San Isidro",
        "lat": 18.3921,
        "lng": -65.8844
    },
    {
        "state": "MD",
        "city": "Riverdale Park",
        "lat": 38.9643,
        "lng": -76.9266
    },
    {
        "state": "NJ",
        "city": "Emerson",
        "lat": 40.9748,
        "lng": -74.024
    },
    {
        "state": "IN",
        "city": "Nappanee",
        "lat": 41.4451,
        "lng": -85.994
    },
    {
        "state": "WA",
        "city": "Wollochet",
        "lat": 47.2828,
        "lng": -122.5768
    },
    {
        "state": "MA",
        "city": "Whitinsville",
        "lat": 42.1146,
        "lng": -71.6688
    },
    {
        "state": "CA",
        "city": "Winters",
        "lat": 38.532,
        "lng": -121.9781
    },
    {
        "state": "MI",
        "city": "Walled Lake",
        "lat": 42.5379,
        "lng": -83.4786
    },
    {
        "state": "NE",
        "city": "Nebraska City",
        "lat": 40.6762,
        "lng": -95.8613
    },
    {
        "state": "CA",
        "city": "Mammoth Lakes",
        "lat": 37.6273,
        "lng": -118.99
    },
    {
        "state": "FL",
        "city": "Clewiston",
        "lat": 26.7529,
        "lng": -80.9399
    },
    {
        "state": "DE",
        "city": "Georgetown",
        "lat": 38.6894,
        "lng": -75.3872
    },
    {
        "state": "CA",
        "city": "Ben Lomond",
        "lat": 37.0782,
        "lng": -122.0881
    },
    {
        "state": "PA",
        "city": "Middletown",
        "lat": 40.644,
        "lng": -75.3244
    },
    {
        "state": "IL",
        "city": "North Riverside",
        "lat": 41.8461,
        "lng": -87.8263
    },
    {
        "state": "CO",
        "city": "La Junta",
        "lat": 37.9791,
        "lng": -103.5471
    },
    {
        "state": "CT",
        "city": "Cos Cob",
        "lat": 41.0513,
        "lng": -73.5934
    },
    {
        "state": "NY",
        "city": "East Hills",
        "lat": 40.7958,
        "lng": -73.6292
    },
    {
        "state": "NJ",
        "city": "Washington",
        "lat": 40.7587,
        "lng": -74.9825
    },
    {
        "state": "MO",
        "city": "Pacific",
        "lat": 38.4809,
        "lng": -90.754
    },
    {
        "state": "IN",
        "city": "South Haven",
        "lat": 41.5438,
        "lng": -87.1367
    },
    {
        "state": "NY",
        "city": "Radisson",
        "lat": 43.1824,
        "lng": -76.2988
    },
    {
        "state": "MD",
        "city": "Taneytown",
        "lat": 39.6569,
        "lng": -77.1683
    },
    {
        "state": "CA",
        "city": "Sausalito",
        "lat": 37.8581,
        "lng": -122.4933
    },
    {
        "state": "AZ",
        "city": "Globe",
        "lat": 33.387,
        "lng": -110.7513
    },
    {
        "state": "IL",
        "city": "Salem",
        "lat": 38.6279,
        "lng": -88.9591
    },
    {
        "state": "NY",
        "city": "Monticello",
        "lat": 41.6522,
        "lng": -74.6874
    },
    {
        "state": "LA",
        "city": "Rayne",
        "lat": 30.2403,
        "lng": -92.2668
    },
    {
        "state": "FL",
        "city": "Mims",
        "lat": 28.6929,
        "lng": -80.8468
    },
    {
        "state": "WA",
        "city": "Clarkston",
        "lat": 46.4161,
        "lng": -117.0505
    },
    {
        "state": "AZ",
        "city": "Tolleson",
        "lat": 33.4484,
        "lng": -112.256
    },
    {
        "state": "FL",
        "city": "Dade City",
        "lat": 28.3565,
        "lng": -82.1942
    },
    {
        "state": "IN",
        "city": "Winfield",
        "lat": 41.4097,
        "lng": -87.2623
    },
    {
        "state": "NJ",
        "city": "Wharton",
        "lat": 40.8998,
        "lng": -74.5808
    },
    {
        "state": "SC",
        "city": "Centerville",
        "lat": 34.5257,
        "lng": -82.7161
    },
    {
        "state": "NC",
        "city": "King",
        "lat": 36.2769,
        "lng": -80.3566
    },
    {
        "state": "GA",
        "city": "Bremen",
        "lat": 33.7085,
        "lng": -85.1495
    },
    {
        "state": "AL",
        "city": "Pinson",
        "lat": 33.7055,
        "lng": -86.6678
    },
    {
        "state": "MS",
        "city": "Richland",
        "lat": 32.2309,
        "lng": -90.1591
    },
    {
        "state": "TN",
        "city": "Savannah",
        "lat": 35.221,
        "lng": -88.236
    },
    {
        "state": "NJ",
        "city": "Yorketown",
        "lat": 40.3064,
        "lng": -74.3385
    },
    {
        "state": "MI",
        "city": "River Rouge",
        "lat": 42.2731,
        "lng": -83.1245
    },
    {
        "state": "CT",
        "city": "Staples",
        "lat": 41.1508,
        "lng": -73.3283
    },
    {
        "state": "IL",
        "city": "Calumet Park",
        "lat": 41.665,
        "lng": -87.6577
    },
    {
        "state": "NY",
        "city": "Brockport",
        "lat": 43.2137,
        "lng": -77.9404
    },
    {
        "state": "TX",
        "city": "Gonzales",
        "lat": 29.5126,
        "lng": -97.4472
    },
    {
        "state": "TX",
        "city": "Lacy-Lakeview",
        "lat": 31.6292,
        "lng": -97.1052
    },
    {
        "state": "PA",
        "city": "Glenolden",
        "lat": 39.8996,
        "lng": -75.2919
    },
    {
        "state": "HI",
        "city": "Wailua Homesteads",
        "lat": 22.065,
        "lng": -159.3771
    },
    {
        "state": "TN",
        "city": "South Cleveland",
        "lat": 35.1096,
        "lng": -84.9097
    },
    {
        "state": "NJ",
        "city": "Keyport",
        "lat": 40.4328,
        "lng": -74.2011
    },
    {
        "state": "KY",
        "city": "Russellville",
        "lat": 36.8394,
        "lng": -86.895
    },
    {
        "state": "NY",
        "city": "Baywood",
        "lat": 40.7533,
        "lng": -73.2899
    },
    {
        "state": "SC",
        "city": "White Knoll",
        "lat": 33.8902,
        "lng": -81.2391
    },
    {
        "state": "MT",
        "city": "Laurel",
        "lat": 45.6735,
        "lng": -108.7707
    },
    {
        "state": "WI",
        "city": "Delafield",
        "lat": 43.072,
        "lng": -88.3913
    },
    {
        "state": "IA",
        "city": "Hiawatha",
        "lat": 42.0547,
        "lng": -91.6911
    },
    {
        "state": "WI",
        "city": "Lake Hallie",
        "lat": 44.8921,
        "lng": -91.4199
    },
    {
        "state": "CO",
        "city": "Orchard Mesa",
        "lat": 39.0363,
        "lng": -108.5166
    },
    {
        "state": "WA",
        "city": "Mead",
        "lat": 47.7795,
        "lng": -117.35
    },
    {
        "state": "PA",
        "city": "Souderton",
        "lat": 40.311,
        "lng": -75.3224
    },
    {
        "state": "OK",
        "city": "Noble",
        "lat": 35.1381,
        "lng": -97.3695
    },
    {
        "state": "OH",
        "city": "Logan",
        "lat": 39.5385,
        "lng": -82.4062
    },
    {
        "state": "IL",
        "city": "West Frankfort",
        "lat": 37.8997,
        "lng": -88.9301
    },
    {
        "state": "NC",
        "city": "Porters Neck",
        "lat": 34.2942,
        "lng": -77.7695
    },
    {
        "state": "FL",
        "city": "Lake Lorraine",
        "lat": 30.4407,
        "lng": -86.5657
    },
    {
        "state": "CA",
        "city": "Pinon Hills",
        "lat": 34.4437,
        "lng": -117.6214
    },
    {
        "state": "SD",
        "city": "Harrisburg",
        "lat": 43.4324,
        "lng": -96.7041
    },
    {
        "state": "WA",
        "city": "Hobart",
        "lat": 47.412,
        "lng": -121.996
    },
    {
        "state": "CO",
        "city": "Stratmoor",
        "lat": 38.7731,
        "lng": -104.7786
    },
    {
        "state": "NY",
        "city": "Sound Beach",
        "lat": 40.9578,
        "lng": -72.9725
    },
    {
        "state": "OH",
        "city": "Delphos",
        "lat": 40.8465,
        "lng": -84.3368
    },
    {
        "state": "SC",
        "city": "Welcome",
        "lat": 34.8203,
        "lng": -82.46
    },
    {
        "state": "VA",
        "city": "Sandston",
        "lat": 37.512,
        "lng": -77.3149
    },
    {
        "state": "OH",
        "city": "Mentor-on-the-Lake",
        "lat": 41.7132,
        "lng": -81.3647
    },
    {
        "state": "PA",
        "city": "Ridley Park",
        "lat": 39.8785,
        "lng": -75.3251
    },
    {
        "state": "OK",
        "city": "Seminole",
        "lat": 35.2348,
        "lng": -96.6493
    },
    {
        "state": "NV",
        "city": "Moapa Valley",
        "lat": 36.6078,
        "lng": -114.4566
    },
    {
        "state": "OR",
        "city": "Seaside",
        "lat": 45.9889,
        "lng": -123.9214
    },
    {
        "state": "IL",
        "city": "Sandwich",
        "lat": 41.6497,
        "lng": -88.6179
    },
    {
        "state": "TN",
        "city": "Dayton",
        "lat": 35.4912,
        "lng": -85.012
    },
    {
        "state": "OR",
        "city": "Milton-Freewater",
        "lat": 45.934,
        "lng": -118.3909
    },
    {
        "state": "TX",
        "city": "Jasper",
        "lat": 30.9221,
        "lng": -93.9947
    },
    {
        "state": "AR",
        "city": "Prairie Grove",
        "lat": 35.9858,
        "lng": -94.3049
    },
    {
        "state": "AL",
        "city": "Wetumpka",
        "lat": 32.5406,
        "lng": -86.2053
    },
    {
        "state": "CA",
        "city": "Atherton",
        "lat": 37.454,
        "lng": -122.2031
    },
    {
        "state": "CO",
        "city": "Timnath",
        "lat": 40.5338,
        "lng": -104.9623
    },
    {
        "state": "SD",
        "city": "Sturgis",
        "lat": 44.411,
        "lng": -103.4973
    },
    {
        "state": "IL",
        "city": "Greenville",
        "lat": 38.8867,
        "lng": -89.3894
    },
    {
        "state": "MD",
        "city": "Frostburg",
        "lat": 39.6506,
        "lng": -78.9269
    },
    {
        "state": "VA",
        "city": "Strasburg",
        "lat": 38.9961,
        "lng": -78.3549
    },
    {
        "state": "FL",
        "city": "West Miami",
        "lat": 25.7578,
        "lng": -80.2969
    },
    {
        "state": "SC",
        "city": "Valley Falls",
        "lat": 35.0073,
        "lng": -81.9692
    },
    {
        "state": "WA",
        "city": "Sudden Valley",
        "lat": 48.7236,
        "lng": -122.3442
    },
    {
        "state": "IL",
        "city": "Murphysboro",
        "lat": 37.7678,
        "lng": -89.3324
    },
    {
        "state": "NC",
        "city": "Mills River",
        "lat": 35.3853,
        "lng": -82.5854
    },
    {
        "state": "WA",
        "city": "Fircrest",
        "lat": 47.2307,
        "lng": -122.5157
    },
    {
        "state": "WA",
        "city": "Pacific",
        "lat": 47.261,
        "lng": -122.2507
    },
    {
        "state": "NE",
        "city": "Crete",
        "lat": 40.6253,
        "lng": -96.9575
    },
    {
        "state": "IL",
        "city": "Robinson",
        "lat": 39.0089,
        "lng": -87.7333
    },
    {
        "state": "PA",
        "city": "Wayne",
        "lat": 40.0409,
        "lng": -75.3945
    },
    {
        "state": "OR",
        "city": "Garden Home-Whitford",
        "lat": 45.4642,
        "lng": -122.7588
    },
    {
        "state": "FL",
        "city": "Heathrow",
        "lat": 28.7754,
        "lng": -81.3721
    },
    {
        "state": "GA",
        "city": "Dahlonega",
        "lat": 34.5311,
        "lng": -83.9804
    },
    {
        "state": "AL",
        "city": "Demopolis",
        "lat": 32.498,
        "lng": -87.8298
    },
    {
        "state": "TX",
        "city": "Lackland AFB",
        "lat": 29.3866,
        "lng": -98.6179
    },
    {
        "state": "TX",
        "city": "Kingsland",
        "lat": 30.6651,
        "lng": -98.4545
    },
    {
        "state": "MS",
        "city": "Waveland",
        "lat": 30.293,
        "lng": -89.3905
    },
    {
        "state": "OH",
        "city": "Cortland",
        "lat": 41.3319,
        "lng": -80.7195
    },
    {
        "state": "CA",
        "city": "Highgrove",
        "lat": 34.0106,
        "lng": -117.3098
    },
    {
        "state": "TX",
        "city": "Marble Falls",
        "lat": 30.5649,
        "lng": -98.2768
    },
    {
        "state": "AR",
        "city": "Heber Springs",
        "lat": 35.4995,
        "lng": -92.0292
    },
    {
        "state": "MN",
        "city": "St. Joseph",
        "lat": 45.5655,
        "lng": -94.3035
    },
    {
        "state": "MS",
        "city": "Philadelphia",
        "lat": 32.7761,
        "lng": -89.1221
    },
    {
        "state": "CT",
        "city": "Old Greenwich",
        "lat": 41.0254,
        "lng": -73.5692
    },
    {
        "state": "NY",
        "city": "Nyack",
        "lat": 41.0919,
        "lng": -73.9143
    },
    {
        "state": "MS",
        "city": "Kosciusko",
        "lat": 33.0585,
        "lng": -89.5893
    },
    {
        "state": "FL",
        "city": "Inwood",
        "lat": 28.0391,
        "lng": -81.7677
    },
    {
        "state": "IN",
        "city": "Batesville",
        "lat": 39.2974,
        "lng": -85.2144
    },
    {
        "state": "WA",
        "city": "Woods Creek",
        "lat": 47.8822,
        "lng": -121.8981
    },
    {
        "state": "FL",
        "city": "Islamorada, Village of Islands",
        "lat": 24.9407,
        "lng": -80.6098
    },
    {
        "state": "MO",
        "city": "Sappington",
        "lat": 38.526,
        "lng": -90.373
    },
    {
        "state": "LA",
        "city": "Lacombe",
        "lat": 30.3141,
        "lng": -89.931
    },
    {
        "state": "IL",
        "city": "Stickney",
        "lat": 41.8183,
        "lng": -87.773
    },
    {
        "state": "TN",
        "city": "Fayetteville",
        "lat": 35.149,
        "lng": -86.5634
    },
    {
        "state": "TX",
        "city": "Seminole",
        "lat": 32.7207,
        "lng": -102.6501
    },
    {
        "state": "NJ",
        "city": "Barrington",
        "lat": 39.8689,
        "lng": -75.0514
    },
    {
        "state": "NJ",
        "city": "Midland Park",
        "lat": 40.9952,
        "lng": -74.141
    },
    {
        "state": "FL",
        "city": "Belle Isle",
        "lat": 28.4723,
        "lng": -81.3491
    },
    {
        "state": "NJ",
        "city": "Milltown",
        "lat": 40.4504,
        "lng": -74.4351
    },
    {
        "state": "TN",
        "city": "Church Hill",
        "lat": 36.5204,
        "lng": -82.7151
    },
    {
        "state": "NY",
        "city": "Tappan",
        "lat": 41.027,
        "lng": -73.952
    },
    {
        "state": "NC",
        "city": "Trinity",
        "lat": 35.8756,
        "lng": -80.0093
    },
    {
        "state": "OK",
        "city": "Grove",
        "lat": 36.5928,
        "lng": -94.7877
    },
    {
        "state": "CA",
        "city": "Fort Bragg",
        "lat": 39.4399,
        "lng": -123.8013
    },
    {
        "state": "KS",
        "city": "Basehor",
        "lat": 39.1332,
        "lng": -94.9333
    },
    {
        "state": "PA",
        "city": "Connellsville",
        "lat": 40.0161,
        "lng": -79.5893
    },
    {
        "state": "KY",
        "city": "Morehead",
        "lat": 38.1906,
        "lng": -83.4466
    },
    {
        "state": "HI",
        "city": "Kahaluu-Keauhou",
        "lat": 19.5669,
        "lng": -155.9533
    },
    {
        "state": "IL",
        "city": "Benton",
        "lat": 38.0109,
        "lng": -88.9179
    },
    {
        "state": "NJ",
        "city": "Kingston Estates",
        "lat": 39.9188,
        "lng": -74.9898
    },
    {
        "state": "NY",
        "city": "Tuckahoe",
        "lat": 40.9531,
        "lng": -73.823
    },
    {
        "state": "OK",
        "city": "Idabel",
        "lat": 33.904,
        "lng": -94.8285
    },
    {
        "state": "NJ",
        "city": "Mountainside",
        "lat": 40.6811,
        "lng": -74.3601
    },
    {
        "state": "MI",
        "city": "Byron Center",
        "lat": 42.8121,
        "lng": -85.7279
    },
    {
        "state": "ME",
        "city": "Rockland",
        "lat": 44.1274,
        "lng": -69.1369
    },
    {
        "state": "FL",
        "city": "West Samoset",
        "lat": 27.4702,
        "lng": -82.5552
    },
    {
        "state": "FL",
        "city": "Mascotte",
        "lat": 28.611,
        "lng": -81.9106
    },
    {
        "state": "CA",
        "city": "California Polytechnic State University",
        "lat": 35.3053,
        "lng": -120.6655
    },
    {
        "state": "PA",
        "city": "Richboro",
        "lat": 40.2262,
        "lng": -75.0006
    },
    {
        "state": "AZ",
        "city": "Youngtown",
        "lat": 33.5846,
        "lng": -112.3048
    },
    {
        "state": "AR",
        "city": "Morrilton",
        "lat": 35.1558,
        "lng": -92.7387
    },
    {
        "state": "IL",
        "city": "Mount Carmel",
        "lat": 38.4187,
        "lng": -87.7695
    },
    {
        "state": "SC",
        "city": "Bennettsville",
        "lat": 34.6303,
        "lng": -79.6875
    },
    {
        "state": "DE",
        "city": "Pike Creek",
        "lat": 39.7488,
        "lng": -75.695
    },
    {
        "state": "PA",
        "city": "Elkins Park",
        "lat": 40.0775,
        "lng": -75.128
    },
    {
        "state": "AL",
        "city": "Lincoln",
        "lat": 33.5935,
        "lng": -86.1365
    },
    {
        "state": "PR",
        "city": "Gurabo",
        "lat": 18.2528,
        "lng": -65.9785
    },
    {
        "state": "MN",
        "city": "Spring Lake Park",
        "lat": 45.1161,
        "lng": -93.2451
    },
    {
        "state": "MS",
        "city": "Gulf Park Estates",
        "lat": 30.3802,
        "lng": -88.7581
    },
    {
        "state": "FL",
        "city": "Indian River Estates",
        "lat": 27.3564,
        "lng": -80.2983
    },
    {
        "state": "NJ",
        "city": "Stratford",
        "lat": 39.829,
        "lng": -75.0156
    },
    {
        "state": "IL",
        "city": "Mendota",
        "lat": 41.5553,
        "lng": -89.1041
    },
    {
        "state": "TN",
        "city": "Greenbrier",
        "lat": 36.4243,
        "lng": -86.7975
    },
    {
        "state": "ME",
        "city": "Belfast",
        "lat": 44.4279,
        "lng": -69.0325
    },
    {
        "state": "CO",
        "city": "Aspen",
        "lat": 39.1951,
        "lng": -106.8369
    },
    {
        "state": "CT",
        "city": "Rockville",
        "lat": 41.8665,
        "lng": -72.4512
    },
    {
        "state": "NY",
        "city": "Norwich",
        "lat": 42.5333,
        "lng": -75.5227
    },
    {
        "state": "OH",
        "city": "Mount Healthy",
        "lat": 39.2338,
        "lng": -84.5468
    },
    {
        "state": "OH",
        "city": "Uniontown",
        "lat": 40.9635,
        "lng": -81.4062
    },
    {
        "state": "VA",
        "city": "Aquia Harbour",
        "lat": 38.4598,
        "lng": -77.3806
    },
    {
        "state": "VA",
        "city": "Hutchison",
        "lat": 38.9636,
        "lng": -77.411
    },
    {
        "state": "MS",
        "city": "Holly Springs",
        "lat": 34.7768,
        "lng": -89.4466
    },
    {
        "state": "IL",
        "city": "Chester",
        "lat": 37.92,
        "lng": -89.826
    },
    {
        "state": "VA",
        "city": "South Run",
        "lat": 38.7467,
        "lng": -77.2754
    },
    {
        "state": "FL",
        "city": "Lecanto",
        "lat": 28.8359,
        "lng": -82.488
    },
    {
        "state": "MA",
        "city": "Cochituate",
        "lat": 42.329,
        "lng": -71.3576
    },
    {
        "state": "PA",
        "city": "Ambridge",
        "lat": 40.5921,
        "lng": -80.2265
    },
    {
        "state": "IL",
        "city": "Litchfield",
        "lat": 39.1954,
        "lng": -89.63
    },
    {
        "state": "WV",
        "city": "Elkins",
        "lat": 38.9237,
        "lng": -79.8541
    },
    {
        "state": "IN",
        "city": "North Vernon",
        "lat": 39.0171,
        "lng": -85.6317
    },
    {
        "state": "IA",
        "city": "Nevada",
        "lat": 42.0184,
        "lng": -93.4633
    },
    {
        "state": "OH",
        "city": "Sunbury",
        "lat": 40.2485,
        "lng": -82.8806
    },
    {
        "state": "MI",
        "city": "St. Louis",
        "lat": 43.4082,
        "lng": -84.6118
    },
    {
        "state": "NY",
        "city": "Manorhaven",
        "lat": 40.8399,
        "lng": -73.7127
    },
    {
        "state": "GA",
        "city": "LaFayette",
        "lat": 34.7089,
        "lng": -85.2815
    },
    {
        "state": "AL",
        "city": "Oneonta",
        "lat": 33.9394,
        "lng": -86.4932
    },
    {
        "state": "VA",
        "city": "North Springfield",
        "lat": 38.8023,
        "lng": -77.2027
    },
    {
        "state": "LA",
        "city": "Bridge City",
        "lat": 29.9321,
        "lng": -90.1594
    },
    {
        "state": "PA",
        "city": "Shamokin",
        "lat": 40.7881,
        "lng": -76.555
    },
    {
        "state": "NY",
        "city": "Roslyn Heights",
        "lat": 40.7788,
        "lng": -73.6396
    },
    {
        "state": "OH",
        "city": "Kirtland",
        "lat": 41.5969,
        "lng": -81.3406
    },
    {
        "state": "SC",
        "city": "Lake Murray of Richland",
        "lat": 34.1209,
        "lng": -81.2653
    },
    {
        "state": "AR",
        "city": "Osceola",
        "lat": 35.6942,
        "lng": -89.9934
    },
    {
        "state": "PA",
        "city": "Tamaqua",
        "lat": 40.8033,
        "lng": -75.9344
    },
    {
        "state": "UT",
        "city": "Harrisville",
        "lat": 41.2852,
        "lng": -111.9859
    },
    {
        "state": "WV",
        "city": "Hurricane",
        "lat": 38.4293,
        "lng": -82.0182
    },
    {
        "state": "FL",
        "city": "Williamsburg",
        "lat": 28.4014,
        "lng": -81.4462
    },
    {
        "state": "TX",
        "city": "Camp Swift",
        "lat": 30.1885,
        "lng": -97.2933
    },
    {
        "state": "TX",
        "city": "Mexia",
        "lat": 31.6809,
        "lng": -96.4833
    },
    {
        "state": "GA",
        "city": "Dacula",
        "lat": 33.9815,
        "lng": -83.8952
    },
    {
        "state": "PA",
        "city": "Huntingdon",
        "lat": 40.5,
        "lng": -78.0097
    },
    {
        "state": "TX",
        "city": "Silsbee",
        "lat": 30.3456,
        "lng": -94.1764
    },
    {
        "state": "NJ",
        "city": "Strathmore",
        "lat": 40.4018,
        "lng": -74.2194
    },
    {
        "state": "FL",
        "city": "South Patrick Shores",
        "lat": 28.202,
        "lng": -80.6137
    },
    {
        "state": "OH",
        "city": "Union",
        "lat": 39.9103,
        "lng": -84.2901
    },
    {
        "state": "VT",
        "city": "St. Albans",
        "lat": 44.8119,
        "lng": -73.0849
    },
    {
        "state": "IL",
        "city": "Clinton",
        "lat": 40.1468,
        "lng": -88.9633
    },
    {
        "state": "FL",
        "city": "Willow Oak",
        "lat": 27.9216,
        "lng": -82.0244
    },
    {
        "state": "UT",
        "city": "Roosevelt",
        "lat": 40.2924,
        "lng": -110.0093
    },
    {
        "state": "WV",
        "city": "Pea Ridge",
        "lat": 38.4155,
        "lng": -82.3195
    },
    {
        "state": "CA",
        "city": "Contra Costa Centre",
        "lat": 37.926,
        "lng": -122.054
    },
    {
        "state": "MI",
        "city": "Fair Plain",
        "lat": 42.0823,
        "lng": -86.4516
    },
    {
        "state": "OH",
        "city": "Huron",
        "lat": 41.3912,
        "lng": -82.5636
    },
    {
        "state": "AL",
        "city": "Hamilton",
        "lat": 34.1346,
        "lng": -87.9755
    },
    {
        "state": "AL",
        "city": "Lanett",
        "lat": 32.8577,
        "lng": -85.2078
    },
    {
        "state": "CT",
        "city": "Winsted",
        "lat": 41.9262,
        "lng": -73.0675
    },
    {
        "state": "MD",
        "city": "Ocean City",
        "lat": 38.3998,
        "lng": -75.0715
    },
    {
        "state": "FL",
        "city": "Perry",
        "lat": 30.109,
        "lng": -83.5821
    },
    {
        "state": "PA",
        "city": "Monessen",
        "lat": 40.1519,
        "lng": -79.8828
    },
    {
        "state": "DE",
        "city": "Millsboro",
        "lat": 38.5892,
        "lng": -75.3089
    },
    {
        "state": "NY",
        "city": "Gananda",
        "lat": 43.1274,
        "lng": -77.3361
    },
    {
        "state": "MO",
        "city": "Bonne Terre",
        "lat": 37.9209,
        "lng": -90.5425
    },
    {
        "state": "CT",
        "city": "New Canaan",
        "lat": 41.142,
        "lng": -73.4905
    },
    {
        "state": "NY",
        "city": "Walden",
        "lat": 41.5603,
        "lng": -74.1879
    },
    {
        "state": "MD",
        "city": "Forest Glen",
        "lat": 39.019,
        "lng": -77.0447
    },
    {
        "state": "MN",
        "city": "Kasson",
        "lat": 44.0333,
        "lng": -92.7479
    },
    {
        "state": "TX",
        "city": "Olivarez",
        "lat": 26.2285,
        "lng": -97.9931
    },
    {
        "state": "AR",
        "city": "Pea Ridge",
        "lat": 36.4495,
        "lng": -94.1218
    },
    {
        "state": "KY",
        "city": "Taylor Mill",
        "lat": 39.0092,
        "lng": -84.4988
    },
    {
        "state": "MN",
        "city": "Isanti",
        "lat": 45.4925,
        "lng": -93.2408
    },
    {
        "state": "TN",
        "city": "Newport",
        "lat": 35.9617,
        "lng": -83.1976
    },
    {
        "state": "MO",
        "city": "Valley Park",
        "lat": 38.5513,
        "lng": -90.4923
    },
    {
        "state": "KS",
        "city": "Roeland Park",
        "lat": 39.0359,
        "lng": -94.6374
    },
    {
        "state": "TX",
        "city": "La Feria",
        "lat": 26.1544,
        "lng": -97.8255
    },
    {
        "state": "IL",
        "city": "Orland Hills",
        "lat": 41.5905,
        "lng": -87.8414
    },
    {
        "state": "GA",
        "city": "Thomson",
        "lat": 33.4679,
        "lng": -82.4968
    },
    {
        "state": "WA",
        "city": "Ocean Shores",
        "lat": 46.9684,
        "lng": -124.152
    },
    {
        "state": "CA",
        "city": "Mira Monte",
        "lat": 34.4312,
        "lng": -119.2878
    },
    {
        "state": "TX",
        "city": "Sealy",
        "lat": 29.7662,
        "lng": -96.163
    },
    {
        "state": "PA",
        "city": "Clifton Heights",
        "lat": 39.9301,
        "lng": -75.2958
    },
    {
        "state": "CA",
        "city": "South Monrovia Island",
        "lat": 34.1234,
        "lng": -117.9958
    },
    {
        "state": "CA",
        "city": "Loomis",
        "lat": 38.8093,
        "lng": -121.1955
    },
    {
        "state": "OR",
        "city": "Junction City",
        "lat": 44.2068,
        "lng": -123.2102
    },
    {
        "state": "WI",
        "city": "Sturtevant",
        "lat": 42.6995,
        "lng": -87.9019
    },
    {
        "state": "CA",
        "city": "Fowler",
        "lat": 36.6243,
        "lng": -119.6737
    },
    {
        "state": "NJ",
        "city": "Allendale",
        "lat": 41.0332,
        "lng": -74.1333
    },
    {
        "state": "FL",
        "city": "Live Oak",
        "lat": 30.2957,
        "lng": -82.9847
    },
    {
        "state": "WI",
        "city": "Fox Point",
        "lat": 43.1581,
        "lng": -87.9013
    },
    {
        "state": "MI",
        "city": "Marshall",
        "lat": 42.2618,
        "lng": -84.9598
    },
    {
        "state": "SC",
        "city": "Clover",
        "lat": 35.1125,
        "lng": -81.2202
    },
    {
        "state": "TX",
        "city": "Canutillo",
        "lat": 31.9185,
        "lng": -106.6006
    },
    {
        "state": "PA",
        "city": "Wescosville",
        "lat": 40.5617,
        "lng": -75.5489
    },
    {
        "state": "IN",
        "city": "Dunlap",
        "lat": 41.6346,
        "lng": -85.9235
    },
    {
        "state": "LA",
        "city": "Donaldsonville",
        "lat": 30.0954,
        "lng": -90.9925
    },
    {
        "state": "AZ",
        "city": "Litchfield Park",
        "lat": 33.5024,
        "lng": -112.3588
    },
    {
        "state": "AL",
        "city": "Robertsdale",
        "lat": 30.5535,
        "lng": -87.7023
    },
    {
        "state": "NJ",
        "city": "Lincroft",
        "lat": 40.3391,
        "lng": -74.1282
    },
    {
        "state": "CA",
        "city": "Thermalito",
        "lat": 39.4909,
        "lng": -121.615
    },
    {
        "state": "GA",
        "city": "Whitemarsh Island",
        "lat": 32.0304,
        "lng": -81.0109
    },
    {
        "state": "NM",
        "city": "Zuni Pueblo",
        "lat": 35.0693,
        "lng": -108.8558
    },
    {
        "state": "PA",
        "city": "Linglestown",
        "lat": 40.3444,
        "lng": -76.7948
    },
    {
        "state": "WA",
        "city": "Clarkston Heights-Vineland",
        "lat": 46.377,
        "lng": -117.092
    },
    {
        "state": "TX",
        "city": "Decatur",
        "lat": 33.2263,
        "lng": -97.5875
    },
    {
        "state": "HI",
        "city": "Napili-Honokowai",
        "lat": 20.9767,
        "lng": -156.6646
    },
    {
        "state": "LA",
        "city": "Addis",
        "lat": 30.3652,
        "lng": -91.2658
    },
    {
        "state": "OH",
        "city": "Pepper Pike",
        "lat": 41.48,
        "lng": -81.462
    },
    {
        "state": "PA",
        "city": "Ambler",
        "lat": 40.1564,
        "lng": -75.2215
    },
    {
        "state": "FL",
        "city": "St. Augustine Beach",
        "lat": 29.8415,
        "lng": -81.2713
    },
    {
        "state": "NJ",
        "city": "Heathcote",
        "lat": 40.3878,
        "lng": -74.578
    },
    {
        "state": "NY",
        "city": "Lawrence",
        "lat": 40.6041,
        "lng": -73.7151
    },
    {
        "state": "TN",
        "city": "Green Hill",
        "lat": 36.2349,
        "lng": -86.5733
    },
    {
        "state": "IA",
        "city": "Atlantic",
        "lat": 41.3958,
        "lng": -95.0136
    },
    {
        "state": "NY",
        "city": "Bayville",
        "lat": 40.9076,
        "lng": -73.5602
    },
    {
        "state": "PA",
        "city": "Folcroft",
        "lat": 39.8891,
        "lng": -75.277
    },
    {
        "state": "PA",
        "city": "Plymouth Meeting",
        "lat": 40.1097,
        "lng": -75.2803
    },
    {
        "state": "CA",
        "city": "Joshua Tree",
        "lat": 34.1236,
        "lng": -116.3128
    },
    {
        "state": "PA",
        "city": "Homeacre-Lyndora",
        "lat": 40.8721,
        "lng": -79.9211
    },
    {
        "state": "MN",
        "city": "Medina",
        "lat": 45.0326,
        "lng": -93.5834
    },
    {
        "state": "MD",
        "city": "Bowleys Quarters",
        "lat": 39.3198,
        "lng": -76.3856
    },
    {
        "state": "FL",
        "city": "Neptune Beach",
        "lat": 30.3165,
        "lng": -81.4118
    },
    {
        "state": "AL",
        "city": "Opp",
        "lat": 31.2848,
        "lng": -86.257
    },
    {
        "state": "AL",
        "city": "Satsuma",
        "lat": 30.8578,
        "lng": -88.0631
    },
    {
        "state": "OR",
        "city": "Raleigh Hills",
        "lat": 45.4851,
        "lng": -122.7567
    },
    {
        "state": "PA",
        "city": "Oakmont",
        "lat": 40.52,
        "lng": -79.8365
    },
    {
        "state": "PA",
        "city": "Lionville",
        "lat": 40.0524,
        "lng": -75.644
    },
    {
        "state": "OR",
        "city": "Brookings",
        "lat": 42.0697,
        "lng": -124.3002
    },
    {
        "state": "TX",
        "city": "Savannah",
        "lat": 33.2257,
        "lng": -96.9081
    },
    {
        "state": "NC",
        "city": "Cullowhee",
        "lat": 35.3097,
        "lng": -83.1816
    },
    {
        "state": "FL",
        "city": "Vero Lake Estates",
        "lat": 27.7471,
        "lng": -80.5283
    },
    {
        "state": "CA",
        "city": "Ladera Heights",
        "lat": 33.9972,
        "lng": -118.374
    },
    {
        "state": "TX",
        "city": "Homestead Meadows North",
        "lat": 31.8483,
        "lng": -106.1707
    },
    {
        "state": "CA",
        "city": "Vandenberg Village",
        "lat": 34.7111,
        "lng": -120.4622
    },
    {
        "state": "LA",
        "city": "Oakdale",
        "lat": 30.8158,
        "lng": -92.6542
    },
    {
        "state": "NY",
        "city": "Fairview",
        "lat": 41.7321,
        "lng": -73.9137
    },
    {
        "state": "WA",
        "city": "Normandy Park",
        "lat": 47.4342,
        "lng": -122.3436
    },
    {
        "state": "NC",
        "city": "Unionville",
        "lat": 35.0716,
        "lng": -80.5173
    },
    {
        "state": "IA",
        "city": "Eldridge",
        "lat": 41.639,
        "lng": -90.5809
    },
    {
        "state": "IL",
        "city": "Winthrop Harbor",
        "lat": 42.4805,
        "lng": -87.8293
    },
    {
        "state": "OH",
        "city": "Belpre",
        "lat": 39.2815,
        "lng": -81.5972
    },
    {
        "state": "OH",
        "city": "Columbiana",
        "lat": 40.8872,
        "lng": -80.6757
    },
    {
        "state": "VA",
        "city": "Galax",
        "lat": 36.666,
        "lng": -80.9176
    },
    {
        "state": "MN",
        "city": "Stewartville",
        "lat": 43.8606,
        "lng": -92.4896
    },
    {
        "state": "FL",
        "city": "Marianna",
        "lat": 30.7943,
        "lng": -85.2259
    },
    {
        "state": "LA",
        "city": "Galliano",
        "lat": 29.447,
        "lng": -90.3096
    },
    {
        "state": "WA",
        "city": "Steilacoom",
        "lat": 47.1703,
        "lng": -122.5933
    },
    {
        "state": "TX",
        "city": "Belterra",
        "lat": 30.1885,
        "lng": -97.9845
    },
    {
        "state": "VA",
        "city": "Bedford",
        "lat": 37.336,
        "lng": -79.5179
    },
    {
        "state": "MD",
        "city": "Darnestown",
        "lat": 39.0969,
        "lng": -77.3033
    },
    {
        "state": "IN",
        "city": "Boonville",
        "lat": 38.0456,
        "lng": -87.2907
    },
    {
        "state": "NY",
        "city": "North Syracuse",
        "lat": 43.1339,
        "lng": -76.1304
    },
    {
        "state": "FL",
        "city": "Ormond-by-the-Sea",
        "lat": 29.3437,
        "lng": -81.0677
    },
    {
        "state": "CA",
        "city": "Paradise",
        "lat": 39.7558,
        "lng": -121.6063
    },
    {
        "state": "LA",
        "city": "Franklin",
        "lat": 29.7851,
        "lng": -91.5098
    },
    {
        "state": "CO",
        "city": "Air Force Academy",
        "lat": 38.9942,
        "lng": -104.8639
    },
    {
        "state": "TX",
        "city": "Pecan Plantation",
        "lat": 32.3628,
        "lng": -97.6553
    },
    {
        "state": "OR",
        "city": "West Slope",
        "lat": 45.4962,
        "lng": -122.773
    },
    {
        "state": "CA",
        "city": "Wilton",
        "lat": 38.413,
        "lng": -121.2127
    },
    {
        "state": "NJ",
        "city": "Rutgers University-Busch Campus",
        "lat": 40.5214,
        "lng": -74.4654
    },
    {
        "state": "FL",
        "city": "Orlovista",
        "lat": 28.5441,
        "lng": -81.4629
    },
    {
        "state": "PA",
        "city": "West View",
        "lat": 40.5182,
        "lng": -80.0333
    },
    {
        "state": "MI",
        "city": "South Monroe",
        "lat": 41.8927,
        "lng": -83.4186
    },
    {
        "state": "IN",
        "city": "Ellettsville",
        "lat": 39.2322,
        "lng": -86.6232
    },
    {
        "state": "MN",
        "city": "Jordan",
        "lat": 44.6648,
        "lng": -93.6351
    },
    {
        "state": "PA",
        "city": "Blakely",
        "lat": 41.486,
        "lng": -75.6012
    },
    {
        "state": "MS",
        "city": "Amory",
        "lat": 33.9814,
        "lng": -88.4823
    },
    {
        "state": "OH",
        "city": "Ontario",
        "lat": 40.771,
        "lng": -82.6104
    },
    {
        "state": "VA",
        "city": "Buena Vista",
        "lat": 37.7319,
        "lng": -79.3568
    },
    {
        "state": "GA",
        "city": "Stone Mountain",
        "lat": 33.8035,
        "lng": -84.1723
    },
    {
        "state": "PA",
        "city": "Maple Glen",
        "lat": 40.1778,
        "lng": -75.1793
    },
    {
        "state": "NJ",
        "city": "Green Knoll",
        "lat": 40.6047,
        "lng": -74.6147
    },
    {
        "state": "MO",
        "city": "Black Jack",
        "lat": 38.7993,
        "lng": -90.264
    },
    {
        "state": "OK",
        "city": "Purcell",
        "lat": 35.0231,
        "lng": -97.3757
    },
    {
        "state": "CO",
        "city": "Gunnison",
        "lat": 38.548,
        "lng": -106.9246
    },
    {
        "state": "NJ",
        "city": "North Caldwell",
        "lat": 40.8629,
        "lng": -74.2576
    },
    {
        "state": "FL",
        "city": "Indiantown",
        "lat": 27.0376,
        "lng": -80.491
    },
    {
        "state": "CA",
        "city": "Castroville",
        "lat": 36.7649,
        "lng": -121.7534
    },
    {
        "state": "CA",
        "city": "Aptos",
        "lat": 36.9912,
        "lng": -121.8934
    },
    {
        "state": "NY",
        "city": "South Hill",
        "lat": 42.4113,
        "lng": -76.4883
    },
    {
        "state": "KY",
        "city": "Vine Grove",
        "lat": 37.8134,
        "lng": -85.9828
    },
    {
        "state": "PA",
        "city": "Milton",
        "lat": 41.0088,
        "lng": -76.8507
    },
    {
        "state": "VA",
        "city": "Spotsylvania Courthouse",
        "lat": 38.1993,
        "lng": -77.5892
    },
    {
        "state": "NY",
        "city": "Solvay",
        "lat": 43.0571,
        "lng": -76.2123
    },
    {
        "state": "KY",
        "city": "Hebron",
        "lat": 39.0626,
        "lng": -84.709
    },
    {
        "state": "MN",
        "city": "Litchfield",
        "lat": 45.1221,
        "lng": -94.5253
    },
    {
        "state": "MD",
        "city": "Lutherville",
        "lat": 39.424,
        "lng": -76.6177
    },
    {
        "state": "NY",
        "city": "Irvington",
        "lat": 41.0349,
        "lng": -73.866
    },
    {
        "state": "FL",
        "city": "Treasure Island",
        "lat": 27.774,
        "lng": -82.7663
    },
    {
        "state": "KS",
        "city": "Pratt",
        "lat": 37.6765,
        "lng": -98.7451
    },
    {
        "state": "WA",
        "city": "Lake Shore",
        "lat": 45.6911,
        "lng": -122.6911
    },
    {
        "state": "NE",
        "city": "Plattsmouth",
        "lat": 41.0054,
        "lng": -95.894
    },
    {
        "state": "WV",
        "city": "Charles Town",
        "lat": 39.2746,
        "lng": -77.8631
    },
    {
        "state": "NC",
        "city": "Carolina Beach",
        "lat": 34.0396,
        "lng": -77.8966
    },
    {
        "state": "MO",
        "city": "St. John",
        "lat": 38.7148,
        "lng": -90.3462
    },
    {
        "state": "CA",
        "city": "Calipatria",
        "lat": 33.1493,
        "lng": -115.5055
    },
    {
        "state": "HI",
        "city": "Kula",
        "lat": 20.7706,
        "lng": -156.3284
    },
    {
        "state": "VA",
        "city": "Bridgewater",
        "lat": 38.3862,
        "lng": -78.9674
    },
    {
        "state": "PA",
        "city": "Rutherford",
        "lat": 40.2696,
        "lng": -76.7678
    },
    {
        "state": "NY",
        "city": "Bronxville",
        "lat": 40.9395,
        "lng": -73.8265
    },
    {
        "state": "GA",
        "city": "Hapeville",
        "lat": 33.6609,
        "lng": -84.4093
    },
    {
        "state": "KY",
        "city": "Highland Heights",
        "lat": 39.0354,
        "lng": -84.4567
    },
    {
        "state": "NC",
        "city": "St. James",
        "lat": 33.9467,
        "lng": -78.1132
    },
    {
        "state": "GA",
        "city": "Morrow",
        "lat": 33.5815,
        "lng": -84.3391
    },
    {
        "state": "TX",
        "city": "Willis",
        "lat": 30.4314,
        "lng": -95.4831
    },
    {
        "state": "RI",
        "city": "Kingston",
        "lat": 41.4738,
        "lng": -71.5236
    },
    {
        "state": "TN",
        "city": "Lynchburg",
        "lat": 35.2846,
        "lng": -86.3587
    },
    {
        "state": "ND",
        "city": "Valley City",
        "lat": 46.9222,
        "lng": -98.0055
    },
    {
        "state": "MA",
        "city": "East Falmouth",
        "lat": 41.5708,
        "lng": -70.5556
    },
    {
        "state": "OH",
        "city": "Milford",
        "lat": 39.1699,
        "lng": -84.2811
    },
    {
        "state": "FL",
        "city": "Lake Alfred",
        "lat": 28.1041,
        "lng": -81.7264
    },
    {
        "state": "HI",
        "city": "Ewa Villages",
        "lat": 21.3417,
        "lng": -158.0389
    },
    {
        "state": "TX",
        "city": "Carthage",
        "lat": 32.1526,
        "lng": -94.3368
    },
    {
        "state": "NY",
        "city": "Larchmont",
        "lat": 40.9258,
        "lng": -73.7531
    },
    {
        "state": "MN",
        "city": "Corcoran",
        "lat": 45.1089,
        "lng": -93.5837
    },
    {
        "state": "NY",
        "city": "Highland",
        "lat": 41.7208,
        "lng": -73.9625
    },
    {
        "state": "AK",
        "city": "Steele Creek",
        "lat": 64.9295,
        "lng": -147.3955
    },
    {
        "state": "WV",
        "city": "Nitro",
        "lat": 38.4117,
        "lng": -81.8193
    },
    {
        "state": "MN",
        "city": "Delano",
        "lat": 45.0384,
        "lng": -93.793
    },
    {
        "state": "WA",
        "city": "Brier",
        "lat": 47.7924,
        "lng": -122.2734
    },
    {
        "state": "OH",
        "city": "Upper Sandusky",
        "lat": 40.8298,
        "lng": -83.2721
    },
    {
        "state": "NY",
        "city": "South Valley Stream",
        "lat": 40.6558,
        "lng": -73.7185
    },
    {
        "state": "TX",
        "city": "Iowa Park",
        "lat": 33.9622,
        "lng": -98.6819
    },
    {
        "state": "LA",
        "city": "St. Gabriel",
        "lat": 30.2536,
        "lng": -91.1013
    },
    {
        "state": "FL",
        "city": "Fort Pierce North",
        "lat": 27.4736,
        "lng": -80.3595
    },
    {
        "state": "HI",
        "city": "Wailea",
        "lat": 20.6873,
        "lng": -156.4291
    },
    {
        "state": "NE",
        "city": "Schuyler",
        "lat": 41.4497,
        "lng": -97.062
    },
    {
        "state": "WA",
        "city": "Union Gap",
        "lat": 46.5566,
        "lng": -120.4979
    },
    {
        "state": "PA",
        "city": "Catasauqua",
        "lat": 40.6531,
        "lng": -75.4643
    },
    {
        "state": "VA",
        "city": "Potomac Mills",
        "lat": 38.6554,
        "lng": -77.3
    },
    {
        "state": "UT",
        "city": "Nephi",
        "lat": 39.7069,
        "lng": -111.8326
    },
    {
        "state": "PA",
        "city": "Swarthmore",
        "lat": 39.9023,
        "lng": -75.3488
    },
    {
        "state": "NJ",
        "city": "Ramtown",
        "lat": 40.1145,
        "lng": -74.1492
    },
    {
        "state": "VA",
        "city": "Pimmit Hills",
        "lat": 38.9105,
        "lng": -77.1991
    },
    {
        "state": "PA",
        "city": "Red Lion",
        "lat": 39.8986,
        "lng": -76.6078
    },
    {
        "state": "NV",
        "city": "Johnson Lane",
        "lat": 39.0489,
        "lng": -119.7245
    },
    {
        "state": "CO",
        "city": "Carbondale",
        "lat": 39.3949,
        "lng": -107.2148
    },
    {
        "state": "MI",
        "city": "Eastwood",
        "lat": 42.3027,
        "lng": -85.5447
    },
    {
        "state": "MI",
        "city": "Bridgeport",
        "lat": 43.3706,
        "lng": -83.8827
    },
    {
        "state": "CA",
        "city": "Lake Mathews",
        "lat": 33.825,
        "lng": -117.3683
    },
    {
        "state": "PA",
        "city": "Chesnut Hill",
        "lat": 40.7236,
        "lng": -75.2074
    },
    {
        "state": "OH",
        "city": "Hillsboro",
        "lat": 39.2123,
        "lng": -83.6113
    },
    {
        "state": "CA",
        "city": "Eucalyptus Hills",
        "lat": 32.885,
        "lng": -116.9453
    },
    {
        "state": "KS",
        "city": "Abilene",
        "lat": 38.923,
        "lng": -97.2252
    },
    {
        "state": "WV",
        "city": "Brookhaven",
        "lat": 39.6062,
        "lng": -79.8812
    },
    {
        "state": "DE",
        "city": "Edgemoor",
        "lat": 39.7547,
        "lng": -75.5069
    },
    {
        "state": "CA",
        "city": "Hilmar-Irwin",
        "lat": 37.4045,
        "lng": -120.8504
    },
    {
        "state": "OH",
        "city": "Moraine",
        "lat": 39.6983,
        "lng": -84.2458
    },
    {
        "state": "MI",
        "city": "Milford",
        "lat": 42.587,
        "lng": -83.6012
    },
    {
        "state": "IN",
        "city": "Huntingburg",
        "lat": 38.301,
        "lng": -86.9622
    },
    {
        "state": "IN",
        "city": "Mount Vernon",
        "lat": 37.9364,
        "lng": -87.8958
    },
    {
        "state": "IN",
        "city": "Notre Dame",
        "lat": 41.7014,
        "lng": -86.2378
    },
    {
        "state": "HI",
        "city": "West Loch Estate",
        "lat": 21.3617,
        "lng": -158.0246
    },
    {
        "state": "CA",
        "city": "Oak View",
        "lat": 34.403,
        "lng": -119.299
    },
    {
        "state": "TX",
        "city": "Burnet",
        "lat": 30.7496,
        "lng": -98.2383
    },
    {
        "state": "GA",
        "city": "Fairfield Plantation",
        "lat": 33.6457,
        "lng": -84.9254
    },
    {
        "state": "WA",
        "city": "Woodland",
        "lat": 45.9145,
        "lng": -122.7505
    },
    {
        "state": "NE",
        "city": "Ralston",
        "lat": 41.2005,
        "lng": -96.0355
    },
    {
        "state": "WY",
        "city": "Powell",
        "lat": 44.7958,
        "lng": -108.7681
    },
    {
        "state": "NM",
        "city": "Taos",
        "lat": 36.3871,
        "lng": -105.5803
    },
    {
        "state": "SC",
        "city": "Dillon",
        "lat": 34.4233,
        "lng": -79.3689
    },
    {
        "state": "TX",
        "city": "Keene",
        "lat": 32.3955,
        "lng": -97.3226
    },
    {
        "state": "MA",
        "city": "West Concord",
        "lat": 42.4517,
        "lng": -71.4035
    },
    {
        "state": "NC",
        "city": "Selma",
        "lat": 35.5406,
        "lng": -78.2932
    },
    {
        "state": "WI",
        "city": "Elm Grove",
        "lat": 43.048,
        "lng": -88.0867
    },
    {
        "state": "PA",
        "city": "Arlington Heights",
        "lat": 41.0041,
        "lng": -75.2112
    },
    {
        "state": "MO",
        "city": "Sullivan",
        "lat": 38.2129,
        "lng": -91.1637
    },
    {
        "state": "MS",
        "city": "Latimer",
        "lat": 30.4974,
        "lng": -88.8607
    },
    {
        "state": "IN",
        "city": "Garrett",
        "lat": 41.3527,
        "lng": -85.1237
    },
    {
        "state": "IN",
        "city": "Portland",
        "lat": 40.4376,
        "lng": -84.9833
    },
    {
        "state": "KY",
        "city": "Leitchfield",
        "lat": 37.4863,
        "lng": -86.2856
    },
    {
        "state": "MO",
        "city": "De Soto",
        "lat": 38.141,
        "lng": -90.5609
    },
    {
        "state": "PA",
        "city": "Blue Bell",
        "lat": 40.1474,
        "lng": -75.2687
    },
    {
        "state": "OH",
        "city": "Portage Lakes",
        "lat": 41.0034,
        "lng": -81.5347
    },
    {
        "state": "OH",
        "city": "Covedale",
        "lat": 39.1267,
        "lng": -84.637
    },
    {
        "state": "MA",
        "city": "Pinehurst",
        "lat": 42.5334,
        "lng": -71.2339
    },
    {
        "state": "NC",
        "city": "Marvin",
        "lat": 34.9889,
        "lng": -80.8033
    },
    {
        "state": "CO",
        "city": "Gleneagle",
        "lat": 39.0453,
        "lng": -104.8288
    },
    {
        "state": "IL",
        "city": "Geneseo",
        "lat": 41.4509,
        "lng": -90.154
    },
    {
        "state": "FL",
        "city": "Sanibel",
        "lat": 26.4534,
        "lng": -82.1023
    },
    {
        "state": "CA",
        "city": "El Rio",
        "lat": 34.2453,
        "lng": -119.1568
    },
    {
        "state": "NJ",
        "city": "Laurence Harbor",
        "lat": 40.4489,
        "lng": -74.2494
    },
    {
        "state": "NJ",
        "city": "Watchung",
        "lat": 40.6431,
        "lng": -74.4391
    },
    {
        "state": "CA",
        "city": "Desert Palms",
        "lat": 33.7789,
        "lng": -116.293
    },
    {
        "state": "AK",
        "city": "South Lakes",
        "lat": 61.5874,
        "lng": -149.316
    },
    {
        "state": "IN",
        "city": "Rushville",
        "lat": 39.6171,
        "lng": -85.4463
    },
    {
        "state": "NY",
        "city": "Flanders",
        "lat": 40.8937,
        "lng": -72.6051
    },
    {
        "state": "PA",
        "city": "Prospect Park",
        "lat": 39.8859,
        "lng": -75.3075
    },
    {
        "state": "NE",
        "city": "Sidney",
        "lat": 41.1341,
        "lng": -102.9681
    },
    {
        "state": "WA",
        "city": "Tanglewilde",
        "lat": 47.0512,
        "lng": -122.7809
    },
    {
        "state": "CO",
        "city": "Cherry Hills Village",
        "lat": 39.6375,
        "lng": -104.948
    },
    {
        "state": "NJ",
        "city": "Yardville",
        "lat": 40.1849,
        "lng": -74.6604
    },
    {
        "state": "NY",
        "city": "Binghamton University",
        "lat": 42.0893,
        "lng": -75.9684
    },
    {
        "state": "CA",
        "city": "Lemoore Station",
        "lat": 36.2633,
        "lng": -119.9048
    },
    {
        "state": "SC",
        "city": "Marion",
        "lat": 34.1787,
        "lng": -79.3956
    },
    {
        "state": "AL",
        "city": "Chickasaw",
        "lat": 30.7715,
        "lng": -88.0793
    },
    {
        "state": "PA",
        "city": "Forest Hills",
        "lat": 40.4251,
        "lng": -79.8544
    },
    {
        "state": "NM",
        "city": "Santa Teresa",
        "lat": 31.8701,
        "lng": -106.6714
    },
    {
        "state": "IL",
        "city": "Johnsburg",
        "lat": 42.383,
        "lng": -88.2476
    },
    {
        "state": "NY",
        "city": "West Point",
        "lat": 41.3645,
        "lng": -74.0123
    },
    {
        "state": "FL",
        "city": "Connerton",
        "lat": 28.3022,
        "lng": -82.4624
    },
    {
        "state": "CA",
        "city": "Colusa",
        "lat": 39.2059,
        "lng": -122.0125
    },
    {
        "state": "FL",
        "city": "Pelican Bay",
        "lat": 26.2327,
        "lng": -81.8108
    },
    {
        "state": "CA",
        "city": "Crescent City",
        "lat": 41.7728,
        "lng": -124.1902
    },
    {
        "state": "OH",
        "city": "Fort Shawnee",
        "lat": 40.6814,
        "lng": -84.1487
    },
    {
        "state": "OH",
        "city": "South Lebanon",
        "lat": 39.3672,
        "lng": -84.2205
    },
    {
        "state": "MN",
        "city": "Byron",
        "lat": 44.0378,
        "lng": -92.6409
    },
    {
        "state": "FL",
        "city": "Gulf Breeze",
        "lat": 30.3684,
        "lng": -87.1737
    },
    {
        "state": "AZ",
        "city": "Catalina",
        "lat": 32.4848,
        "lng": -110.8997
    },
    {
        "state": "GA",
        "city": "Eatonton",
        "lat": 33.3258,
        "lng": -83.3886
    },
    {
        "state": "IL",
        "city": "Volo",
        "lat": 42.3299,
        "lng": -88.1598
    },
    {
        "state": "TX",
        "city": "Crockett",
        "lat": 31.3177,
        "lng": -95.4564
    },
    {
        "state": "MI",
        "city": "Huntington Woods",
        "lat": 42.4816,
        "lng": -83.1685
    },
    {
        "state": "LA",
        "city": "Ville Platte",
        "lat": 30.6901,
        "lng": -92.2746
    },
    {
        "state": "VA",
        "city": "Braddock",
        "lat": 38.8308,
        "lng": -77.3565
    },
    {
        "state": "LA",
        "city": "Walker",
        "lat": 30.4851,
        "lng": -90.8654
    },
    {
        "state": "VA",
        "city": "Belle Haven",
        "lat": 38.7775,
        "lng": -77.0574
    },
    {
        "state": "MD",
        "city": "Chesapeake Beach",
        "lat": 38.6881,
        "lng": -76.5448
    },
    {
        "state": "TN",
        "city": "Munford",
        "lat": 35.4434,
        "lng": -89.8147
    },
    {
        "state": "WY",
        "city": "Douglas",
        "lat": 42.7542,
        "lng": -105.3969
    },
    {
        "state": "KY",
        "city": "Cynthiana",
        "lat": 38.386,
        "lng": -84.2992
    },
    {
        "state": "MO",
        "city": "Shrewsbury",
        "lat": 38.5866,
        "lng": -90.3282
    },
    {
        "state": "OH",
        "city": "Northgate",
        "lat": 39.2533,
        "lng": -84.5941
    },
    {
        "state": "OH",
        "city": "Champion Heights",
        "lat": 41.3031,
        "lng": -80.8514
    },
    {
        "state": "TN",
        "city": "Pigeon Forge",
        "lat": 35.7977,
        "lng": -83.5623
    },
    {
        "state": "MO",
        "city": "Willard",
        "lat": 37.2931,
        "lng": -93.4171
    },
    {
        "state": "WI",
        "city": "Twin Lakes",
        "lat": 42.519,
        "lng": -88.2484
    },
    {
        "state": "NJ",
        "city": "Carlstadt",
        "lat": 40.8247,
        "lng": -74.0613
    },
    {
        "state": "GA",
        "city": "McRae-Helena",
        "lat": 32.0636,
        "lng": -82.8968
    },
    {
        "state": "CA",
        "city": "Durham",
        "lat": 39.6232,
        "lng": -121.7875
    },
    {
        "state": "IL",
        "city": "Monticello",
        "lat": 40.0342,
        "lng": -88.5728
    },
    {
        "state": "MD",
        "city": "Glenarden",
        "lat": 38.9294,
        "lng": -76.8577
    },
    {
        "state": "CA",
        "city": "Lucas Valley-Marinwood",
        "lat": 38.0405,
        "lng": -122.5765
    },
    {
        "state": "TX",
        "city": "Crystal City",
        "lat": 28.6908,
        "lng": -99.8258
    },
    {
        "state": "IN",
        "city": "Salem",
        "lat": 38.6047,
        "lng": -86.0976
    },
    {
        "state": "AL",
        "city": "Harvest",
        "lat": 34.8558,
        "lng": -86.752
    },
    {
        "state": "TN",
        "city": "Henderson",
        "lat": 35.4446,
        "lng": -88.6531
    },
    {
        "state": "OK",
        "city": "Tecumseh",
        "lat": 35.2639,
        "lng": -96.9337
    },
    {
        "state": "PR",
        "city": "Puerto Real",
        "lat": 18.0767,
        "lng": -67.1858
    },
    {
        "state": "IL",
        "city": "Countryside",
        "lat": 41.7741,
        "lng": -87.8752
    },
    {
        "state": "NY",
        "city": "East Rochester",
        "lat": 43.1122,
        "lng": -77.4869
    },
    {
        "state": "NJ",
        "city": "Ramblewood",
        "lat": 39.9322,
        "lng": -74.9527
    },
    {
        "state": "MI",
        "city": "Lake Fenton",
        "lat": 42.8453,
        "lng": -83.7086
    },
    {
        "state": "OH",
        "city": "Rossford",
        "lat": 41.5812,
        "lng": -83.5682
    },
    {
        "state": "OH",
        "city": "Clyde",
        "lat": 41.3044,
        "lng": -82.9781
    },
    {
        "state": "MD",
        "city": "Thurmont",
        "lat": 39.621,
        "lng": -77.4076
    },
    {
        "state": "CA",
        "city": "Mecca",
        "lat": 33.5767,
        "lng": -116.0645
    },
    {
        "state": "TX",
        "city": "Penitas",
        "lat": 26.2577,
        "lng": -98.4407
    },
    {
        "state": "AK",
        "city": "Bethel",
        "lat": 60.7928,
        "lng": -161.7917
    },
    {
        "state": "PA",
        "city": "Fort Washington",
        "lat": 40.1408,
        "lng": -75.1926
    },
    {
        "state": "TN",
        "city": "Sweetwater",
        "lat": 35.6029,
        "lng": -84.4716
    },
    {
        "state": "AK",
        "city": "Sterling",
        "lat": 60.5405,
        "lng": -150.8089
    },
    {
        "state": "NJ",
        "city": "Prospect Park",
        "lat": 40.938,
        "lng": -74.1736
    },
    {
        "state": "FL",
        "city": "Loughman",
        "lat": 28.238,
        "lng": -81.5686
    },
    {
        "state": "WI",
        "city": "Waupaca",
        "lat": 44.3506,
        "lng": -89.0719
    },
    {
        "state": "LA",
        "city": "Tallulah",
        "lat": 32.4068,
        "lng": -91.1916
    },
    {
        "state": "CA",
        "city": "San Martin",
        "lat": 37.0829,
        "lng": -121.5963
    },
    {
        "state": "FL",
        "city": "High Springs",
        "lat": 29.807,
        "lng": -82.5955
    },
    {
        "state": "OH",
        "city": "Martins Ferry",
        "lat": 40.1014,
        "lng": -80.7253
    },
    {
        "state": "WA",
        "city": "Rochester",
        "lat": 46.8198,
        "lng": -123.0636
    },
    {
        "state": "AZ",
        "city": "Avra Valley",
        "lat": 32.4195,
        "lng": -111.3393
    },
    {
        "state": "WI",
        "city": "Lake Mills",
        "lat": 43.0775,
        "lng": -88.9055
    },
    {
        "state": "IA",
        "city": "Orange City",
        "lat": 43.0023,
        "lng": -96.0566
    },
    {
        "state": "MD",
        "city": "Hampstead",
        "lat": 39.6105,
        "lng": -76.8549
    },
    {
        "state": "PA",
        "city": "Taylor",
        "lat": 41.3958,
        "lng": -75.7147
    },
    {
        "state": "KY",
        "city": "Lebanon",
        "lat": 37.5691,
        "lng": -85.2594
    },
    {
        "state": "PA",
        "city": "Exton",
        "lat": 40.0307,
        "lng": -75.6303
    },
    {
        "state": "SD",
        "city": "Madison",
        "lat": 44.0062,
        "lng": -97.1085
    },
    {
        "state": "FL",
        "city": "Pembroke Park",
        "lat": 25.9852,
        "lng": -80.1777
    },
    {
        "state": "OH",
        "city": "Howland Center",
        "lat": 41.2482,
        "lng": -80.7443
    },
    {
        "state": "CO",
        "city": "Dacono",
        "lat": 40.0623,
        "lng": -104.9476
    },
    {
        "state": "CA",
        "city": "Huron",
        "lat": 36.2041,
        "lng": -120.0961
    },
    {
        "state": "OK",
        "city": "Harrah",
        "lat": 35.4786,
        "lng": -97.1873
    },
    {
        "state": "KY",
        "city": "Cold Spring",
        "lat": 39.013,
        "lng": -84.435
    },
    {
        "state": "MT",
        "city": "Sidney",
        "lat": 47.7152,
        "lng": -104.1679
    },
    {
        "state": "OR",
        "city": "Talent",
        "lat": 42.2404,
        "lng": -122.7807
    },
    {
        "state": "IL",
        "city": "Mount Zion",
        "lat": 39.7793,
        "lng": -88.8834
    },
    {
        "state": "MD",
        "city": "Marlow Heights",
        "lat": 38.8237,
        "lng": -76.9484
    },
    {
        "state": "OR",
        "city": "Warrenton",
        "lat": 46.1685,
        "lng": -123.9302
    },
    {
        "state": "VA",
        "city": "Massanetta Springs",
        "lat": 38.3899,
        "lng": -78.834
    },
    {
        "state": "WA",
        "city": "Country Homes",
        "lat": 47.7479,
        "lng": -117.4199
    },
    {
        "state": "KS",
        "city": "De Soto",
        "lat": 38.9688,
        "lng": -94.9549
    },
    {
        "state": "MI",
        "city": "Manistee",
        "lat": 44.2439,
        "lng": -86.3242
    },
    {
        "state": "KY",
        "city": "Princeton",
        "lat": 37.1068,
        "lng": -87.8853
    },
    {
        "state": "TX",
        "city": "Gun Barrel City",
        "lat": 32.3277,
        "lng": -96.1286
    },
    {
        "state": "PA",
        "city": "South Williamsport",
        "lat": 41.2294,
        "lng": -77.0009
    },
    {
        "state": "NY",
        "city": "Calverton",
        "lat": 40.9138,
        "lng": -72.766
    },
    {
        "state": "MN",
        "city": "Zimmerman",
        "lat": 45.4416,
        "lng": -93.598
    },
    {
        "state": "PA",
        "city": "Steelton",
        "lat": 40.2258,
        "lng": -76.8253
    },
    {
        "state": "AK",
        "city": "Gateway",
        "lat": 61.5668,
        "lng": -149.2417
    },
    {
        "state": "MD",
        "city": "Walkersville",
        "lat": 39.4832,
        "lng": -77.3559
    },
    {
        "state": "CA",
        "city": "Camino Tassajara",
        "lat": 37.7909,
        "lng": -121.8851
    },
    {
        "state": "FL",
        "city": "Jan Phyl Village",
        "lat": 28.0201,
        "lng": -81.7933
    },
    {
        "state": "OR",
        "city": "Sheridan",
        "lat": 45.096,
        "lng": -123.3983
    },
    {
        "state": "IN",
        "city": "Rochester",
        "lat": 41.0591,
        "lng": -86.1959
    },
    {
        "state": "LA",
        "city": "Inniswold",
        "lat": 30.3982,
        "lng": -91.071
    },
    {
        "state": "MS",
        "city": "West Hattiesburg",
        "lat": 31.3114,
        "lng": -89.374
    },
    {
        "state": "NY",
        "city": "Yaphank",
        "lat": 40.8323,
        "lng": -72.9233
    },
    {
        "state": "TX",
        "city": "Briar",
        "lat": 32.9882,
        "lng": -97.5526
    },
    {
        "state": "TX",
        "city": "White Oak",
        "lat": 32.5312,
        "lng": -94.8564
    },
    {
        "state": "TN",
        "city": "Tellico Village",
        "lat": 35.6984,
        "lng": -84.2641
    },
    {
        "state": "OH",
        "city": "Jackson",
        "lat": 39.0448,
        "lng": -82.6458
    },
    {
        "state": "CA",
        "city": "Homeland",
        "lat": 33.7459,
        "lng": -117.1132
    },
    {
        "state": "NJ",
        "city": "Fair Haven",
        "lat": 40.3618,
        "lng": -74.0392
    },
    {
        "state": "NJ",
        "city": "Roseland",
        "lat": 40.8208,
        "lng": -74.3086
    },
    {
        "state": "LA",
        "city": "Plaquemine",
        "lat": 30.2833,
        "lng": -91.243
    },
    {
        "state": "SC",
        "city": "Clemson University",
        "lat": 34.675,
        "lng": -82.8344
    },
    {
        "state": "OH",
        "city": "Wheelersburg",
        "lat": 38.7383,
        "lng": -82.842
    },
    {
        "state": "NM",
        "city": "Aztec",
        "lat": 36.8225,
        "lng": -107.971
    },
    {
        "state": "CA",
        "city": "Lucerne Valley",
        "lat": 34.4427,
        "lng": -116.9021
    },
    {
        "state": "PA",
        "city": "Corry",
        "lat": 41.9259,
        "lng": -79.6358
    },
    {
        "state": "TX",
        "city": "Northlake",
        "lat": 33.0809,
        "lng": -97.2548
    },
    {
        "state": "CA",
        "city": "Salton City",
        "lat": 33.2994,
        "lng": -115.9609
    },
    {
        "state": "FL",
        "city": "Lauderdale-by-the-Sea",
        "lat": 26.1991,
        "lng": -80.0971
    },
    {
        "state": "CT",
        "city": "Branford Center",
        "lat": 41.278,
        "lng": -72.8148
    },
    {
        "state": "CA",
        "city": "Willows",
        "lat": 39.5149,
        "lng": -122.1995
    },
    {
        "state": "MI",
        "city": "New Haven",
        "lat": 42.7306,
        "lng": -82.7953
    },
    {
        "state": "GA",
        "city": "Barnesville",
        "lat": 33.0508,
        "lng": -84.1528
    },
    {
        "state": "MD",
        "city": "Fountainhead-Orchard Hills",
        "lat": 39.6878,
        "lng": -77.7173
    },
    {
        "state": "NJ",
        "city": "Paulsboro",
        "lat": 39.84,
        "lng": -75.2397
    },
    {
        "state": "FL",
        "city": "Osprey",
        "lat": 27.1914,
        "lng": -82.48
    },
    {
        "state": "DE",
        "city": "Elsmere",
        "lat": 39.7384,
        "lng": -75.5946
    },
    {
        "state": "AZ",
        "city": "Snowflake",
        "lat": 34.5225,
        "lng": -110.0913
    },
    {
        "state": "MI",
        "city": "Ishpeming",
        "lat": 46.4862,
        "lng": -87.6658
    },
    {
        "state": "CT",
        "city": "Northford",
        "lat": 41.3949,
        "lng": -72.7826
    },
    {
        "state": "NY",
        "city": "University at Buffalo",
        "lat": 43.0025,
        "lng": -78.7887
    },
    {
        "state": "OH",
        "city": "Willard",
        "lat": 41.0518,
        "lng": -82.7232
    },
    {
        "state": "FL",
        "city": "River Park",
        "lat": 27.3214,
        "lng": -80.3308
    },
    {
        "state": "NJ",
        "city": "Mays Landing",
        "lat": 39.4506,
        "lng": -74.7098
    },
    {
        "state": "FL",
        "city": "Southgate",
        "lat": 27.3066,
        "lng": -82.5107
    },
    {
        "state": "PA",
        "city": "Clairton",
        "lat": 40.2976,
        "lng": -79.8854
    },
    {
        "state": "KY",
        "city": "Crestwood",
        "lat": 38.3355,
        "lng": -85.4839
    },
    {
        "state": "TX",
        "city": "Lindale",
        "lat": 32.4933,
        "lng": -95.4069
    },
    {
        "state": "TX",
        "city": "Salida del Sol Estates",
        "lat": 26.3257,
        "lng": -98.4469
    },
    {
        "state": "SC",
        "city": "Darlington",
        "lat": 34.3015,
        "lng": -79.867
    },
    {
        "state": "ID",
        "city": "Fruitland",
        "lat": 44.0197,
        "lng": -116.922
    },
    {
        "state": "TX",
        "city": "Gladewater",
        "lat": 32.5426,
        "lng": -94.9465
    },
    {
        "state": "PR",
        "city": "Quebradillas",
        "lat": 18.4724,
        "lng": -66.935
    },
    {
        "state": "WY",
        "city": "Torrington",
        "lat": 42.0653,
        "lng": -104.1737
    },
    {
        "state": "IL",
        "city": "Braidwood",
        "lat": 41.2695,
        "lng": -88.2235
    },
    {
        "state": "FL",
        "city": "Three Oaks",
        "lat": 26.4724,
        "lng": -81.7959
    },
    {
        "state": "MI",
        "city": "Milan",
        "lat": 42.0816,
        "lng": -83.6854
    },
    {
        "state": "WI",
        "city": "Rib Mountain",
        "lat": 44.9195,
        "lng": -89.6757
    },
    {
        "state": "AR",
        "city": "Ward",
        "lat": 35.0117,
        "lng": -91.9577
    },
    {
        "state": "NJ",
        "city": "Pine Brook",
        "lat": 40.8676,
        "lng": -74.3438
    },
    {
        "state": "AR",
        "city": "East End",
        "lat": 34.5554,
        "lng": -92.3261
    },
    {
        "state": "FL",
        "city": "Zephyrhills West",
        "lat": 28.2311,
        "lng": -82.2052
    },
    {
        "state": "NV",
        "city": "Gardnerville",
        "lat": 38.939,
        "lng": -119.7369
    },
    {
        "state": "MI",
        "city": "Rockford",
        "lat": 43.1267,
        "lng": -85.5582
    },
    {
        "state": "WA",
        "city": "Prosser",
        "lat": 46.2068,
        "lng": -119.7663
    },
    {
        "state": "CA",
        "city": "Saranap",
        "lat": 37.8878,
        "lng": -122.076
    },
    {
        "state": "AR",
        "city": "De Queen",
        "lat": 34.0426,
        "lng": -94.342
    },
    {
        "state": "MD",
        "city": "Cheverly",
        "lat": 38.9254,
        "lng": -76.9141
    },
    {
        "state": "OK",
        "city": "Blackwell",
        "lat": 36.8013,
        "lng": -97.3009
    },
    {
        "state": "MO",
        "city": "Glendale",
        "lat": 38.5935,
        "lng": -90.3826
    },
    {
        "state": "IL",
        "city": "Chillicothe",
        "lat": 40.9158,
        "lng": -89.502
    },
    {
        "state": "IL",
        "city": "Lakemoor",
        "lat": 42.3396,
        "lng": -88.2039
    },
    {
        "state": "PA",
        "city": "Penn Wynne",
        "lat": 39.9867,
        "lng": -75.2715
    },
    {
        "state": "CT",
        "city": "Hazardville",
        "lat": 41.9921,
        "lng": -72.5344
    },
    {
        "state": "NY",
        "city": "Wesley Hills",
        "lat": 41.1578,
        "lng": -74.0768
    },
    {
        "state": "IA",
        "city": "Maquoketa",
        "lat": 42.059,
        "lng": -90.6649
    },
    {
        "state": "PA",
        "city": "Oreland",
        "lat": 40.115,
        "lng": -75.1803
    },
    {
        "state": "CA",
        "city": "Gustine",
        "lat": 37.2545,
        "lng": -120.9949
    },
    {
        "state": "PA",
        "city": "Paoli",
        "lat": 40.042,
        "lng": -75.4912
    },
    {
        "state": "NJ",
        "city": "Oceanport",
        "lat": 40.316,
        "lng": -74.0205
    },
    {
        "state": "FL",
        "city": "Tequesta",
        "lat": 26.9618,
        "lng": -80.1011
    },
    {
        "state": "CO",
        "city": "Avon",
        "lat": 39.6442,
        "lng": -106.513
    },
    {
        "state": "NM",
        "city": "Edgewood",
        "lat": 35.1318,
        "lng": -106.2151
    },
    {
        "state": "NC",
        "city": "Cherryville",
        "lat": 35.3844,
        "lng": -81.3781
    },
    {
        "state": "CT",
        "city": "Simsbury Center",
        "lat": 41.8808,
        "lng": -72.8111
    },
    {
        "state": "PA",
        "city": "Hellertown",
        "lat": 40.5812,
        "lng": -75.3378
    },
    {
        "state": "FL",
        "city": "Ocean City",
        "lat": 30.4398,
        "lng": -86.6071
    },
    {
        "state": "NY",
        "city": "Harris Hill",
        "lat": 42.973,
        "lng": -78.6793
    },
    {
        "state": "IA",
        "city": "Independence",
        "lat": 42.4621,
        "lng": -91.9027
    },
    {
        "state": "NJ",
        "city": "Bridgewater Center",
        "lat": 40.6037,
        "lng": -74.6445
    },
    {
        "state": "NJ",
        "city": "Little Silver",
        "lat": 40.3357,
        "lng": -74.0346
    },
    {
        "state": "NJ",
        "city": "Morris Plains",
        "lat": 40.8356,
        "lng": -74.4786
    },
    {
        "state": "TX",
        "city": "Everman",
        "lat": 32.6296,
        "lng": -97.2827
    },
    {
        "state": "TX",
        "city": "Nolanville",
        "lat": 31.0754,
        "lng": -97.609
    },
    {
        "state": "SC",
        "city": "Lyman",
        "lat": 34.9667,
        "lng": -82.1232
    },
    {
        "state": "IN",
        "city": "Gas City",
        "lat": 40.4887,
        "lng": -85.5944
    },
    {
        "state": "MA",
        "city": "West Yarmouth",
        "lat": 41.6496,
        "lng": -70.2487
    },
    {
        "state": "NJ",
        "city": "Woodcliff Lake",
        "lat": 41.0253,
        "lng": -74.0604
    },
    {
        "state": "AK",
        "city": "Palmer",
        "lat": 61.5971,
        "lng": -149.1148
    },
    {
        "state": "IA",
        "city": "Adel",
        "lat": 41.6101,
        "lng": -94.0124
    },
    {
        "state": "CA",
        "city": "Rancho Calaveras",
        "lat": 38.1248,
        "lng": -120.857
    },
    {
        "state": "MI",
        "city": "Northville",
        "lat": 42.4355,
        "lng": -83.489
    },
    {
        "state": "PR",
        "city": "Yabucoa",
        "lat": 18.0464,
        "lng": -65.8803
    },
    {
        "state": "LA",
        "city": "Elmwood",
        "lat": 29.9554,
        "lng": -90.1879
    },
    {
        "state": "SC",
        "city": "Lake City",
        "lat": 33.8676,
        "lng": -79.7534
    },
    {
        "state": "WA",
        "city": "West Clarkston-Highland",
        "lat": 46.4017,
        "lng": -117.0624
    },
    {
        "state": "AL",
        "city": "Tarrant",
        "lat": 33.5945,
        "lng": -86.7685
    },
    {
        "state": "FL",
        "city": "DeFuniak Springs",
        "lat": 30.7123,
        "lng": -86.1208
    },
    {
        "state": "KS",
        "city": "Maize",
        "lat": 37.7749,
        "lng": -97.462
    },
    {
        "state": "PA",
        "city": "Bellefonte",
        "lat": 40.9141,
        "lng": -77.7683
    },
    {
        "state": "LA",
        "city": "Larose",
        "lat": 29.5669,
        "lng": -90.3751
    },
    {
        "state": "TN",
        "city": "Loudon",
        "lat": 35.7414,
        "lng": -84.3701
    },
    {
        "state": "CT",
        "city": "Daniels Farm",
        "lat": 41.2778,
        "lng": -73.2022
    },
    {
        "state": "ID",
        "city": "Rupert",
        "lat": 42.6189,
        "lng": -113.674
    },
    {
        "state": "PA",
        "city": "Franklin",
        "lat": 41.3936,
        "lng": -79.8425
    },
    {
        "state": "CO",
        "city": "Sheridan",
        "lat": 39.6468,
        "lng": -105.0182
    },
    {
        "state": "MS",
        "city": "Louisville",
        "lat": 33.1224,
        "lng": -89.0553
    },
    {
        "state": "IL",
        "city": "Vandalia",
        "lat": 38.9754,
        "lng": -89.1117
    },
    {
        "state": "OH",
        "city": "Rittman",
        "lat": 40.9736,
        "lng": -81.785
    },
    {
        "state": "PR",
        "city": "Cidra",
        "lat": 18.1776,
        "lng": -66.158
    },
    {
        "state": "WI",
        "city": "Slinger",
        "lat": 43.3317,
        "lng": -88.2798
    },
    {
        "state": "NY",
        "city": "North Sea",
        "lat": 40.933,
        "lng": -72.4047
    },
    {
        "state": "OH",
        "city": "The Village of Indian Hill",
        "lat": 39.1916,
        "lng": -84.3345
    },
    {
        "state": "FL",
        "city": "Crystal Lake",
        "lat": 28.0371,
        "lng": -81.9064
    },
    {
        "state": "NM",
        "city": "Raton",
        "lat": 36.8849,
        "lng": -104.4396
    },
    {
        "state": "MO",
        "city": "Battlefield",
        "lat": 37.1194,
        "lng": -93.3683
    },
    {
        "state": "WA",
        "city": "Bangor Base",
        "lat": 47.7226,
        "lng": -122.7144
    },
    {
        "state": "PA",
        "city": "Crafton",
        "lat": 40.4333,
        "lng": -80.0712
    },
    {
        "state": "TX",
        "city": "Bridgeport",
        "lat": 33.21,
        "lng": -97.7708
    },
    {
        "state": "NC",
        "city": "Hamlet",
        "lat": 34.8892,
        "lng": -79.7099
    },
    {
        "state": "NY",
        "city": "East Farmingdale",
        "lat": 40.7367,
        "lng": -73.4114
    },
    {
        "state": "PA",
        "city": "Churchville",
        "lat": 40.1922,
        "lng": -74.9982
    },
    {
        "state": "MO",
        "city": "Barnhart",
        "lat": 38.336,
        "lng": -90.4046
    },
    {
        "state": "NY",
        "city": "Centerport",
        "lat": 40.8951,
        "lng": -73.3704
    },
    {
        "state": "IL",
        "city": "Pontoon Beach",
        "lat": 38.7208,
        "lng": -90.0609
    },
    {
        "state": "MO",
        "city": "Greenwood",
        "lat": 38.8508,
        "lng": -94.3377
    },
    {
        "state": "OH",
        "city": "Brookville",
        "lat": 39.8393,
        "lng": -84.4176
    },
    {
        "state": "CA",
        "city": "Solvang",
        "lat": 34.5935,
        "lng": -120.1401
    },
    {
        "state": "WA",
        "city": "Manchester",
        "lat": 47.5519,
        "lng": -122.5517
    },
    {
        "state": "NC",
        "city": "Boiling Spring Lakes",
        "lat": 34.0327,
        "lng": -78.0685
    },
    {
        "state": "VA",
        "city": "Bensley",
        "lat": 37.447,
        "lng": -77.442
    },
    {
        "state": "OK",
        "city": "Pauls Valley",
        "lat": 34.7231,
        "lng": -97.2281
    },
    {
        "state": "NM",
        "city": "Truth or Consequences",
        "lat": 33.1864,
        "lng": -107.2589
    },
    {
        "state": "PA",
        "city": "Somerset",
        "lat": 40.0049,
        "lng": -79.0778
    },
    {
        "state": "TN",
        "city": "Erwin",
        "lat": 36.1456,
        "lng": -82.4115
    },
    {
        "state": "PA",
        "city": "Dickson City",
        "lat": 41.4684,
        "lng": -75.6358
    },
    {
        "state": "KS",
        "city": "Eudora",
        "lat": 38.9345,
        "lng": -95.0956
    },
    {
        "state": "OH",
        "city": "Port Clinton",
        "lat": 41.5094,
        "lng": -82.9385
    },
    {
        "state": "WA",
        "city": "North Fort Lewis",
        "lat": 47.1222,
        "lng": -122.5962
    },
    {
        "state": "TX",
        "city": "Doolittle",
        "lat": 26.3597,
        "lng": -98.1167
    },
    {
        "state": "UT",
        "city": "Midway",
        "lat": 40.5183,
        "lng": -111.4746
    },
    {
        "state": "UT",
        "city": "Fruit Heights",
        "lat": 41.0277,
        "lng": -111.9082
    },
    {
        "state": "CA",
        "city": "Jamul",
        "lat": 32.7184,
        "lng": -116.8709
    },
    {
        "state": "KY",
        "city": "Wilmore",
        "lat": 37.8786,
        "lng": -84.6545
    },
    {
        "state": "PA",
        "city": "Nazareth",
        "lat": 40.74,
        "lng": -75.3131
    },
    {
        "state": "MI",
        "city": "Buena Vista",
        "lat": 43.4176,
        "lng": -83.9005
    },
    {
        "state": "MO",
        "city": "Pevely",
        "lat": 38.2867,
        "lng": -90.3988
    },
    {
        "state": "AL",
        "city": "Moores Mill",
        "lat": 34.8491,
        "lng": -86.5222
    },
    {
        "state": "KS",
        "city": "Mulvane",
        "lat": 37.4789,
        "lng": -97.2724
    },
    {
        "state": "TN",
        "city": "Harriman",
        "lat": 35.9307,
        "lng": -84.5602
    },
    {
        "state": "AZ",
        "city": "Williamson",
        "lat": 34.7082,
        "lng": -112.5343
    },
    {
        "state": "NY",
        "city": "Hilton",
        "lat": 43.29,
        "lng": -77.7925
    },
    {
        "state": "MI",
        "city": "Holly",
        "lat": 42.7987,
        "lng": -83.622
    },
    {
        "state": "TX",
        "city": "Alpine",
        "lat": 30.364,
        "lng": -103.665
    },
    {
        "state": "NY",
        "city": "East Aurora",
        "lat": 42.7667,
        "lng": -78.6172
    },
    {
        "state": "ME",
        "city": "Gardiner",
        "lat": 44.191,
        "lng": -69.7921
    },
    {
        "state": "IN",
        "city": "Cumberland",
        "lat": 39.7843,
        "lng": -85.9458
    },
    {
        "state": "FL",
        "city": "Fort Myers Shores",
        "lat": 26.7135,
        "lng": -81.7384
    },
    {
        "state": "MT",
        "city": "Lewistown",
        "lat": 47.0514,
        "lng": -109.4524
    },
    {
        "state": "TN",
        "city": "Kingston",
        "lat": 35.8713,
        "lng": -84.4959
    },
    {
        "state": "PA",
        "city": "Enola",
        "lat": 40.2908,
        "lng": -76.9348
    },
    {
        "state": "TX",
        "city": "Edna",
        "lat": 28.9757,
        "lng": -96.6483
    },
    {
        "state": "TX",
        "city": "Kermit",
        "lat": 31.854,
        "lng": -103.0924
    },
    {
        "state": "NJ",
        "city": "Packanack Lake",
        "lat": 40.9382,
        "lng": -74.2564
    },
    {
        "state": "PA",
        "city": "Kennett Square",
        "lat": 39.8438,
        "lng": -75.7113
    },
    {
        "state": "OH",
        "city": "Waterville",
        "lat": 41.5015,
        "lng": -83.7367
    },
    {
        "state": "PA",
        "city": "Sharon Hill",
        "lat": 39.9075,
        "lng": -75.2679
    },
    {
        "state": "MO",
        "city": "Richmond",
        "lat": 39.2755,
        "lng": -93.9729
    },
    {
        "state": "NE",
        "city": "Wayne",
        "lat": 42.2379,
        "lng": -97.0101
    },
    {
        "state": "MA",
        "city": "Yarmouth Port",
        "lat": 41.7091,
        "lng": -70.2225
    },
    {
        "state": "IL",
        "city": "Metropolis",
        "lat": 37.1565,
        "lng": -88.7082
    },
    {
        "state": "IL",
        "city": "Elburn",
        "lat": 41.8852,
        "lng": -88.4606
    },
    {
        "state": "NV",
        "city": "Indian Hills",
        "lat": 39.0894,
        "lng": -119.7977
    },
    {
        "state": "TX",
        "city": "Lakehills",
        "lat": 29.6237,
        "lng": -98.9448
    },
    {
        "state": "IL",
        "city": "Bartonville",
        "lat": 40.6397,
        "lng": -89.6607
    },
    {
        "state": "LA",
        "city": "Gray",
        "lat": 29.678,
        "lng": -90.7831
    },
    {
        "state": "MI",
        "city": "Belding",
        "lat": 43.0968,
        "lng": -85.2331
    },
    {
        "state": "TX",
        "city": "Littlefield",
        "lat": 33.9192,
        "lng": -102.3348
    },
    {
        "state": "NY",
        "city": "Lakeview",
        "lat": 40.6775,
        "lng": -73.6493
    },
    {
        "state": "NY",
        "city": "Lake Mohegan",
        "lat": 41.3165,
        "lng": -73.8475
    },
    {
        "state": "PA",
        "city": "Clearfield",
        "lat": 41.0216,
        "lng": -78.439
    },
    {
        "state": "OH",
        "city": "Geneva",
        "lat": 41.8007,
        "lng": -80.9461
    },
    {
        "state": "IA",
        "city": "Oelwein",
        "lat": 42.6715,
        "lng": -91.9131
    },
    {
        "state": "NC",
        "city": "East Flat Rock",
        "lat": 35.2802,
        "lng": -82.4171
    },
    {
        "state": "TX",
        "city": "Aubrey",
        "lat": 33.2874,
        "lng": -96.9622
    },
    {
        "state": "PA",
        "city": "Moosic",
        "lat": 41.3584,
        "lng": -75.7027
    },
    {
        "state": "OH",
        "city": "Groveport",
        "lat": 39.8586,
        "lng": -82.8978
    },
    {
        "state": "PA",
        "city": "Norwood",
        "lat": 39.8864,
        "lng": -75.2964
    },
    {
        "state": "MD",
        "city": "Riverside",
        "lat": 39.4784,
        "lng": -76.2398
    },
    {
        "state": "NY",
        "city": "Hudson",
        "lat": 42.2515,
        "lng": -73.7859
    },
    {
        "state": "PA",
        "city": "Gilbertsville",
        "lat": 40.3219,
        "lng": -75.609
    },
    {
        "state": "SD",
        "city": "Tea",
        "lat": 43.4564,
        "lng": -96.8257
    },
    {
        "state": "NJ",
        "city": "Manasquan",
        "lat": 40.1186,
        "lng": -74.045
    },
    {
        "state": "HI",
        "city": "Iroquois Point",
        "lat": 21.3218,
        "lng": -157.9803
    },
    {
        "state": "IL",
        "city": "Lake Bluff",
        "lat": 42.2826,
        "lng": -87.851
    },
    {
        "state": "AL",
        "city": "Monroeville",
        "lat": 31.5162,
        "lng": -87.3279
    },
    {
        "state": "CA",
        "city": "Pollock Pines",
        "lat": 38.7575,
        "lng": -120.5921
    },
    {
        "state": "AZ",
        "city": "Village of Oak Creek",
        "lat": 34.7813,
        "lng": -111.7606
    },
    {
        "state": "TX",
        "city": "Wake Village",
        "lat": 33.4238,
        "lng": -94.127
    },
    {
        "state": "CA",
        "city": "Pleasure Point",
        "lat": 36.9619,
        "lng": -121.9715
    },
    {
        "state": "NC",
        "city": "Mocksville",
        "lat": 35.9007,
        "lng": -80.5631
    },
    {
        "state": "CO",
        "city": "Estes Park",
        "lat": 40.3699,
        "lng": -105.5217
    },
    {
        "state": "NY",
        "city": "Salamanca",
        "lat": 42.1631,
        "lng": -78.7233
    },
    {
        "state": "UT",
        "city": "West Bountiful",
        "lat": 40.8984,
        "lng": -111.9082
    },
    {
        "state": "MD",
        "city": "District Heights",
        "lat": 38.8588,
        "lng": -76.8885
    },
    {
        "state": "NY",
        "city": "Rochester Institute of Technology",
        "lat": 43.0827,
        "lng": -77.6715
    },
    {
        "state": "ND",
        "city": "Watford City",
        "lat": 47.8027,
        "lng": -103.2678
    },
    {
        "state": "NC",
        "city": "Stokesdale",
        "lat": 36.2318,
        "lng": -79.9834
    },
    {
        "state": "OK",
        "city": "Holdenville",
        "lat": 35.0838,
        "lng": -96.4017
    },
    {
        "state": "PA",
        "city": "Stroudsburg",
        "lat": 40.9838,
        "lng": -75.1972
    },
    {
        "state": "FL",
        "city": "Ave Maria",
        "lat": 26.3218,
        "lng": -81.4397
    },
    {
        "state": "NM",
        "city": "Los Ranchos de Albuquerque",
        "lat": 35.1625,
        "lng": -106.6482
    },
    {
        "state": "PA",
        "city": "McKees Rocks",
        "lat": 40.4688,
        "lng": -80.063
    },
    {
        "state": "CA",
        "city": "Cottonwood",
        "lat": 40.3903,
        "lng": -122.3156
    },
    {
        "state": "GA",
        "city": "Conley",
        "lat": 33.6399,
        "lng": -84.3376
    },
    {
        "state": "TN",
        "city": "Jonesborough",
        "lat": 36.2959,
        "lng": -82.4766
    },
    {
        "state": "IL",
        "city": "Peoria Heights",
        "lat": 40.7466,
        "lng": -89.57
    },
    {
        "state": "IA",
        "city": "Asbury",
        "lat": 42.512,
        "lng": -90.7802
    },
    {
        "state": "NC",
        "city": "Dallas",
        "lat": 35.3169,
        "lng": -81.183
    },
    {
        "state": "IN",
        "city": "Westville",
        "lat": 41.5376,
        "lng": -86.9049
    },
    {
        "state": "VA",
        "city": "Dulles Town Center",
        "lat": 39.0265,
        "lng": -77.4196
    },
    {
        "state": "IL",
        "city": "Beardstown",
        "lat": 39.9993,
        "lng": -90.4178
    },
    {
        "state": "FL",
        "city": "Naples Manor",
        "lat": 26.0892,
        "lng": -81.7254
    },
    {
        "state": "IA",
        "city": "Estherville",
        "lat": 43.3997,
        "lng": -94.8342
    },
    {
        "state": "NJ",
        "city": "Finderne",
        "lat": 40.5626,
        "lng": -74.5743
    },
    {
        "state": "CT",
        "city": "Cheshire Village",
        "lat": 41.5041,
        "lng": -72.8969
    },
    {
        "state": "WI",
        "city": "Edgerton",
        "lat": 42.8385,
        "lng": -89.0699
    },
    {
        "state": "NJ",
        "city": "Belmar",
        "lat": 40.1798,
        "lng": -74.0255
    },
    {
        "state": "FL",
        "city": "South Gate Ridge",
        "lat": 27.2856,
        "lng": -82.497
    },
    {
        "state": "LA",
        "city": "Patterson",
        "lat": 29.691,
        "lng": -91.3096
    },
    {
        "state": "NJ",
        "city": "Belle Mead",
        "lat": 40.4684,
        "lng": -74.6559
    },
    {
        "state": "NJ",
        "city": "Leisure Village",
        "lat": 40.0445,
        "lng": -74.1852
    },
    {
        "state": "WA",
        "city": "Blaine",
        "lat": 48.9839,
        "lng": -122.7414
    },
    {
        "state": "MI",
        "city": "Swartz Creek",
        "lat": 42.9631,
        "lng": -83.8251
    },
    {
        "state": "NJ",
        "city": "Hightstown",
        "lat": 40.2686,
        "lng": -74.5253
    },
    {
        "state": "NJ",
        "city": "Old Tappan",
        "lat": 41.0163,
        "lng": -73.9855
    },
    {
        "state": "NM",
        "city": "North Hobbs",
        "lat": 32.7731,
        "lng": -103.125
    },
    {
        "state": "NJ",
        "city": "Mount Arlington",
        "lat": 40.919,
        "lng": -74.639
    },
    {
        "state": "IL",
        "city": "Willow Springs",
        "lat": 41.7333,
        "lng": -87.8859
    },
    {
        "state": "PA",
        "city": "Media",
        "lat": 39.9199,
        "lng": -75.3889
    },
    {
        "state": "TX",
        "city": "Slaton",
        "lat": 33.4421,
        "lng": -101.6476
    },
    {
        "state": "MI",
        "city": "Petoskey",
        "lat": 45.3649,
        "lng": -84.9888
    },
    {
        "state": "FL",
        "city": "Port LaBelle",
        "lat": 26.7565,
        "lng": -81.3827
    },
    {
        "state": "NC",
        "city": "Silver Lake",
        "lat": 34.1409,
        "lng": -77.9089
    },
    {
        "state": "FL",
        "city": "Freeport",
        "lat": 30.5039,
        "lng": -86.1391
    },
    {
        "state": "IN",
        "city": "Bright",
        "lat": 39.2254,
        "lng": -84.8613
    },
    {
        "state": "OH",
        "city": "Montrose-Ghent",
        "lat": 41.1538,
        "lng": -81.6437
    },
    {
        "state": "CA",
        "city": "Hidden Valley Lake",
        "lat": 38.8005,
        "lng": -122.5505
    },
    {
        "state": "MI",
        "city": "Richmond",
        "lat": 42.8094,
        "lng": -82.7518
    },
    {
        "state": "PA",
        "city": "Newtown Grant",
        "lat": 40.2619,
        "lng": -74.9481
    },
    {
        "state": "AL",
        "city": "Attalla",
        "lat": 34.005,
        "lng": -86.1039
    },
    {
        "state": "WA",
        "city": "Finley",
        "lat": 46.1697,
        "lng": -119.0447
    },
    {
        "state": "WA",
        "city": "Tehaleh",
        "lat": 47.1165,
        "lng": -122.1824
    },
    {
        "state": "FL",
        "city": "Bay Harbor Islands",
        "lat": 25.8877,
        "lng": -80.1334
    },
    {
        "state": "FL",
        "city": "Kathleen",
        "lat": 28.1224,
        "lng": -82.0387
    },
    {
        "state": "TX",
        "city": "Yoakum",
        "lat": 29.2934,
        "lng": -97.1468
    },
    {
        "state": "KY",
        "city": "Fort Wright",
        "lat": 39.0463,
        "lng": -84.5362
    },
    {
        "state": "AR",
        "city": "Alma",
        "lat": 35.4919,
        "lng": -94.2165
    },
    {
        "state": "IL",
        "city": "Carterville",
        "lat": 37.763,
        "lng": -89.0841
    },
    {
        "state": "CA",
        "city": "Benton Park",
        "lat": 35.3463,
        "lng": -119.0297
    },
    {
        "state": "KS",
        "city": "Ulysses",
        "lat": 37.5774,
        "lng": -101.3546
    },
    {
        "state": "WA",
        "city": "Hockinson",
        "lat": 45.7302,
        "lng": -122.4833
    },
    {
        "state": "WV",
        "city": "Princeton",
        "lat": 37.3689,
        "lng": -81.0961
    },
    {
        "state": "MS",
        "city": "Columbia",
        "lat": 31.2564,
        "lng": -89.8266
    },
    {
        "state": "OH",
        "city": "Turpin Hills",
        "lat": 39.1063,
        "lng": -84.3703
    },
    {
        "state": "TX",
        "city": "Cameron Park",
        "lat": 25.9706,
        "lng": -97.4775
    },
    {
        "state": "CA",
        "city": "Keyes",
        "lat": 37.5573,
        "lng": -120.9114
    },
    {
        "state": "TX",
        "city": "Bulverde",
        "lat": 29.7744,
        "lng": -98.4364
    },
    {
        "state": "NY",
        "city": "Medina",
        "lat": 43.2197,
        "lng": -78.3888
    },
    {
        "state": "PA",
        "city": "Sierra View",
        "lat": 41.0006,
        "lng": -75.4455
    },
    {
        "state": "NY",
        "city": "Mattydale",
        "lat": 43.0992,
        "lng": -76.1388
    },
    {
        "state": "TX",
        "city": "Windcrest",
        "lat": 29.515,
        "lng": -98.3818
    },
    {
        "state": "CA",
        "city": "Cambria",
        "lat": 35.552,
        "lng": -121.0838
    },
    {
        "state": "IL",
        "city": "Du Quoin",
        "lat": 38.0019,
        "lng": -89.2323
    },
    {
        "state": "TN",
        "city": "Millersville",
        "lat": 36.3969,
        "lng": -86.7111
    },
    {
        "state": "NJ",
        "city": "Glendora",
        "lat": 39.8405,
        "lng": -75.0677
    },
    {
        "state": "CA",
        "city": "Villa Park",
        "lat": 33.818,
        "lng": -117.8104
    },
    {
        "state": "NY",
        "city": "Country Knolls",
        "lat": 42.9085,
        "lng": -73.807
    },
    {
        "state": "NH",
        "city": "South Hooksett",
        "lat": 43.0331,
        "lng": -71.4254
    },
    {
        "state": "MS",
        "city": "Pass Christian",
        "lat": 30.327,
        "lng": -89.2436
    },
    {
        "state": "VA",
        "city": "Woodstock",
        "lat": 38.875,
        "lng": -78.516
    },
    {
        "state": "MN",
        "city": "International Falls",
        "lat": 48.5884,
        "lng": -93.4084
    },
    {
        "state": "IN",
        "city": "Hartford City",
        "lat": 40.4537,
        "lng": -85.3736
    },
    {
        "state": "TX",
        "city": "Childress",
        "lat": 34.4293,
        "lng": -100.2516
    },
    {
        "state": "SC",
        "city": "Belvedere",
        "lat": 33.537,
        "lng": -81.9424
    },
    {
        "state": "OH",
        "city": "Germantown",
        "lat": 39.6325,
        "lng": -84.3645
    },
    {
        "state": "NJ",
        "city": "Jamesburg",
        "lat": 40.3493,
        "lng": -74.4399
    },
    {
        "state": "IL",
        "city": "East Alton",
        "lat": 38.884,
        "lng": -90.1074
    },
    {
        "state": "TX",
        "city": "Wolfforth",
        "lat": 33.5147,
        "lng": -102.0067
    },
    {
        "state": "NY",
        "city": "Old Bethpage",
        "lat": 40.7558,
        "lng": -73.4545
    },
    {
        "state": "OH",
        "city": "Granville",
        "lat": 40.0646,
        "lng": -82.5024
    },
    {
        "state": "NY",
        "city": "Wappingers Falls",
        "lat": 41.5984,
        "lng": -73.9181
    },
    {
        "state": "PA",
        "city": "Plymouth",
        "lat": 41.2404,
        "lng": -75.9507
    },
    {
        "state": "KY",
        "city": "Monticello",
        "lat": 36.8412,
        "lng": -84.8502
    },
    {
        "state": "CO",
        "city": "Eaton",
        "lat": 40.5257,
        "lng": -104.713
    },
    {
        "state": "CA",
        "city": "Las Flores",
        "lat": 33.584,
        "lng": -117.6237
    },
    {
        "state": "FL",
        "city": "Starke",
        "lat": 29.9474,
        "lng": -82.1129
    },
    {
        "state": "AR",
        "city": "Greenbrier",
        "lat": 35.2289,
        "lng": -92.3836
    },
    {
        "state": "CA",
        "city": "Dos Palos",
        "lat": 36.9854,
        "lng": -120.6338
    },
    {
        "state": "FL",
        "city": "The Meadows",
        "lat": 27.3647,
        "lng": -82.4716
    },
    {
        "state": "NJ",
        "city": "Union Beach",
        "lat": 40.4454,
        "lng": -74.1699
    },
    {
        "state": "HI",
        "city": "Waimanalo",
        "lat": 21.3421,
        "lng": -157.7303
    },
    {
        "state": "KS",
        "city": "Paola",
        "lat": 38.5788,
        "lng": -94.8617
    },
    {
        "state": "KY",
        "city": "Central City",
        "lat": 37.2963,
        "lng": -87.128
    },
    {
        "state": "UT",
        "city": "Ephraim",
        "lat": 39.3563,
        "lng": -111.5845
    },
    {
        "state": "PA",
        "city": "New Holland",
        "lat": 40.1008,
        "lng": -76.09
    },
    {
        "state": "NY",
        "city": "Washingtonville",
        "lat": 41.4297,
        "lng": -74.1577
    },
    {
        "state": "WY",
        "city": "Ranchettes",
        "lat": 41.2186,
        "lng": -104.7729
    },
    {
        "state": "CT",
        "city": "Sherwood Manor",
        "lat": 42.0101,
        "lng": -72.5667
    },
    {
        "state": "UT",
        "city": "Snyderville",
        "lat": 40.7041,
        "lng": -111.5434
    },
    {
        "state": "PA",
        "city": "Punxsutawney",
        "lat": 40.9438,
        "lng": -78.9767
    },
    {
        "state": "OH",
        "city": "Grafton",
        "lat": 41.2809,
        "lng": -82.038
    },
    {
        "state": "CA",
        "city": "Rancho Murieta",
        "lat": 38.5085,
        "lng": -121.0716
    },
    {
        "state": "GA",
        "city": "Sandersville",
        "lat": 32.9827,
        "lng": -82.8089
    },
    {
        "state": "FL",
        "city": "Cocoa West",
        "lat": 28.3591,
        "lng": -80.7713
    },
    {
        "state": "PA",
        "city": "Schlusser",
        "lat": 40.2433,
        "lng": -77.1802
    },
    {
        "state": "IL",
        "city": "Carlinville",
        "lat": 39.2775,
        "lng": -89.8762
    },
    {
        "state": "PA",
        "city": "Oxford",
        "lat": 39.7858,
        "lng": -75.9801
    },
    {
        "state": "PA",
        "city": "Mount Carmel",
        "lat": 40.7959,
        "lng": -76.4119
    },
    {
        "state": "OK",
        "city": "Anadarko",
        "lat": 35.065,
        "lng": -98.2443
    },
    {
        "state": "VA",
        "city": "Covington",
        "lat": 37.7786,
        "lng": -79.9867
    },
    {
        "state": "VA",
        "city": "Marion",
        "lat": 36.8379,
        "lng": -81.5156
    },
    {
        "state": "TX",
        "city": "Elsa",
        "lat": 26.2978,
        "lng": -97.9936
    },
    {
        "state": "GA",
        "city": "Waynesboro",
        "lat": 33.0909,
        "lng": -82.0145
    },
    {
        "state": "WI",
        "city": "Evansville",
        "lat": 42.7781,
        "lng": -89.2967
    },
    {
        "state": "GA",
        "city": "Fairview",
        "lat": 34.9295,
        "lng": -85.294
    },
    {
        "state": "MN",
        "city": "Glencoe",
        "lat": 44.7699,
        "lng": -94.151
    },
    {
        "state": "AZ",
        "city": "Rincon Valley",
        "lat": 32.1101,
        "lng": -110.6889
    },
    {
        "state": "PA",
        "city": "Selinsgrove",
        "lat": 40.8003,
        "lng": -76.8646
    },
    {
        "state": "TX",
        "city": "San Leon",
        "lat": 29.4902,
        "lng": -94.9405
    },
    {
        "state": "IL",
        "city": "Northfield",
        "lat": 42.1025,
        "lng": -87.7791
    },
    {
        "state": "NC",
        "city": "Walkertown",
        "lat": 36.1576,
        "lng": -80.1641
    },
    {
        "state": "PA",
        "city": "Campbelltown",
        "lat": 40.276,
        "lng": -76.5829
    },
    {
        "state": "MI",
        "city": "Zeeland",
        "lat": 42.8139,
        "lng": -86.0129
    },
    {
        "state": "WA",
        "city": "Otis Orchards-East Farms",
        "lat": 47.703,
        "lng": -117.0854
    },
    {
        "state": "PA",
        "city": "Wyndmoor",
        "lat": 40.0856,
        "lng": -75.1941
    },
    {
        "state": "VA",
        "city": "Dumfries",
        "lat": 38.567,
        "lng": -77.3233
    },
    {
        "state": "CO",
        "city": "Salida",
        "lat": 38.5298,
        "lng": -105.9979
    },
    {
        "state": "AL",
        "city": "Grayson Valley",
        "lat": 33.6467,
        "lng": -86.6417
    },
    {
        "state": "IL",
        "city": "Spring Grove",
        "lat": 42.4545,
        "lng": -88.2399
    },
    {
        "state": "MA",
        "city": "East Harwich",
        "lat": 41.7081,
        "lng": -70.0339
    },
    {
        "state": "WI",
        "city": "Milton",
        "lat": 42.775,
        "lng": -88.9429
    },
    {
        "state": "MD",
        "city": "Spring Ridge",
        "lat": 39.4043,
        "lng": -77.3405
    },
    {
        "state": "PA",
        "city": "Shippensburg",
        "lat": 40.0484,
        "lng": -77.5227
    },
    {
        "state": "GA",
        "city": "Byron",
        "lat": 32.6476,
        "lng": -83.7539
    },
    {
        "state": "TX",
        "city": "Hempstead",
        "lat": 30.1006,
        "lng": -96.0777
    },
    {
        "state": "MD",
        "city": "Poolesville",
        "lat": 39.1423,
        "lng": -77.4102
    },
    {
        "state": "NY",
        "city": "Pelham Manor",
        "lat": 40.893,
        "lng": -73.8058
    },
    {
        "state": "LA",
        "city": "Leesville",
        "lat": 31.1324,
        "lng": -93.2673
    },
    {
        "state": "VA",
        "city": "Emporia",
        "lat": 36.6953,
        "lng": -77.5356
    },
    {
        "state": "MI",
        "city": "Dowagiac",
        "lat": 41.9834,
        "lng": -86.1126
    },
    {
        "state": "ID",
        "city": "Weiser",
        "lat": 44.2547,
        "lng": -116.9689
    },
    {
        "state": "MS",
        "city": "Pontotoc",
        "lat": 34.2531,
        "lng": -89.0091
    },
    {
        "state": "MO",
        "city": "Peculiar",
        "lat": 38.7306,
        "lng": -94.4735
    },
    {
        "state": "MA",
        "city": "North Scituate",
        "lat": 42.2121,
        "lng": -70.7652
    },
    {
        "state": "KY",
        "city": "Dayton",
        "lat": 39.1127,
        "lng": -84.4639
    },
    {
        "state": "IL",
        "city": "Hillsboro",
        "lat": 39.1752,
        "lng": -89.4723
    },
    {
        "state": "TX",
        "city": "Livingston",
        "lat": 30.71,
        "lng": -94.9381
    },
    {
        "state": "SD",
        "city": "Belle Fourche",
        "lat": 44.664,
        "lng": -103.8564
    },
    {
        "state": "ID",
        "city": "Preston",
        "lat": 42.0989,
        "lng": -111.8802
    },
    {
        "state": "AR",
        "city": "Berryville",
        "lat": 36.371,
        "lng": -93.5704
    },
    {
        "state": "FL",
        "city": "Rio Pinar",
        "lat": 28.5271,
        "lng": -81.2628
    },
    {
        "state": "NJ",
        "city": "Norwood",
        "lat": 40.9933,
        "lng": -73.951
    },
    {
        "state": "MN",
        "city": "Carver",
        "lat": 44.7648,
        "lng": -93.6537
    },
    {
        "state": "CA",
        "city": "El Granada",
        "lat": 37.5134,
        "lng": -122.4657
    },
    {
        "state": "FL",
        "city": "Fort Myers Beach",
        "lat": 26.4308,
        "lng": -81.9146
    },
    {
        "state": "PA",
        "city": "New Brighton",
        "lat": 40.7355,
        "lng": -80.309
    },
    {
        "state": "LA",
        "city": "Chackbay",
        "lat": 29.8809,
        "lng": -90.775
    },
    {
        "state": "OK",
        "city": "Henryetta",
        "lat": 35.4417,
        "lng": -95.9864
    },
    {
        "state": "GA",
        "city": "Eastman",
        "lat": 32.1973,
        "lng": -83.1714
    },
    {
        "state": "CA",
        "city": "Bonadelle Ranchos",
        "lat": 36.9688,
        "lng": -119.8927
    },
    {
        "state": "MD",
        "city": "Peppermill Village",
        "lat": 38.8939,
        "lng": -76.8878
    },
    {
        "state": "TX",
        "city": "Hutchins",
        "lat": 32.6421,
        "lng": -96.7093
    },
    {
        "state": "CA",
        "city": "Strawberry",
        "lat": 37.8925,
        "lng": -122.5078
    },
    {
        "state": "VA",
        "city": "Ettrick",
        "lat": 37.2435,
        "lng": -77.4287
    },
    {
        "state": "MT",
        "city": "Four Corners",
        "lat": 45.6697,
        "lng": -111.1785
    },
    {
        "state": "PA",
        "city": "Hollidaysburg",
        "lat": 40.4311,
        "lng": -78.393
    },
    {
        "state": "AL",
        "city": "Highland Lakes",
        "lat": 33.3973,
        "lng": -86.6495
    },
    {
        "state": "NE",
        "city": "Offutt AFB",
        "lat": 41.1207,
        "lng": -95.9209
    },
    {
        "state": "TX",
        "city": "Krum",
        "lat": 33.2655,
        "lng": -97.2252
    },
    {
        "state": "FL",
        "city": "Surfside",
        "lat": 25.8787,
        "lng": -80.125
    },
    {
        "state": "NC",
        "city": "Nashville",
        "lat": 35.9693,
        "lng": -77.9554
    },
    {
        "state": "AK",
        "city": "Homer",
        "lat": 59.653,
        "lng": -151.5255
    },
    {
        "state": "GA",
        "city": "Sylvester",
        "lat": 31.53,
        "lng": -83.8338
    },
    {
        "state": "MI",
        "city": "Grosse Pointe",
        "lat": 42.3915,
        "lng": -82.9118
    },
    {
        "state": "CA",
        "city": "Holtville",
        "lat": 32.8129,
        "lng": -115.3779
    },
    {
        "state": "NY",
        "city": "East Quogue",
        "lat": 40.8489,
        "lng": -72.5785
    },
    {
        "state": "LA",
        "city": "Cut Off",
        "lat": 29.5164,
        "lng": -90.3291
    },
    {
        "state": "OR",
        "city": "Winston",
        "lat": 43.1201,
        "lng": -123.4246
    },
    {
        "state": "WA",
        "city": "Tracyton",
        "lat": 47.6094,
        "lng": -122.6533
    },
    {
        "state": "TN",
        "city": "McKenzie",
        "lat": 36.1372,
        "lng": -88.5077
    },
    {
        "state": "OR",
        "city": "Creswell",
        "lat": 43.9212,
        "lng": -123.016
    },
    {
        "state": "CT",
        "city": "Noroton",
        "lat": 41.0595,
        "lng": -73.4922
    },
    {
        "state": "AR",
        "city": "Mena",
        "lat": 34.5812,
        "lng": -94.2369
    },
    {
        "state": "IA",
        "city": "Polk City",
        "lat": 41.7779,
        "lng": -93.7134
    },
    {
        "state": "MD",
        "city": "Fruitland",
        "lat": 38.3214,
        "lng": -75.6246
    },
    {
        "state": "PA",
        "city": "Palmerton",
        "lat": 40.8023,
        "lng": -75.616
    },
    {
        "state": "MI",
        "city": "Houghton Lake",
        "lat": 44.3019,
        "lng": -84.7491
    },
    {
        "state": "CA",
        "city": "La Habra Heights",
        "lat": 33.9603,
        "lng": -117.951
    },
    {
        "state": "CA",
        "city": "Bear Valley Springs",
        "lat": 35.174,
        "lng": -118.6532
    },
    {
        "state": "CA",
        "city": "Fruitridge Pocket",
        "lat": 38.5326,
        "lng": -121.4558
    },
    {
        "state": "KY",
        "city": "Bellevue",
        "lat": 39.1012,
        "lng": -84.4775
    },
    {
        "state": "OR",
        "city": "Deschutes River Woods",
        "lat": 43.9887,
        "lng": -121.3608
    },
    {
        "state": "NY",
        "city": "Kings Point",
        "lat": 40.8161,
        "lng": -73.7405
    },
    {
        "state": "NM",
        "city": "White Rock",
        "lat": 35.8075,
        "lng": -106.2067
    },
    {
        "state": "MA",
        "city": "Bliss Corner",
        "lat": 41.6053,
        "lng": -70.9421
    },
    {
        "state": "IN",
        "city": "New Whiteland",
        "lat": 39.5617,
        "lng": -86.0994
    },
    {
        "state": "PA",
        "city": "Monaca",
        "lat": 40.6833,
        "lng": -80.2736
    },
    {
        "state": "WI",
        "city": "Waterford",
        "lat": 42.7645,
        "lng": -88.216
    },
    {
        "state": "NY",
        "city": "East Hampton North",
        "lat": 40.9728,
        "lng": -72.1892
    },
    {
        "state": "NJ",
        "city": "Lyons",
        "lat": 40.6811,
        "lng": -74.5493
    },
    {
        "state": "AK",
        "city": "Kodiak",
        "lat": 57.7934,
        "lng": -152.4059
    },
    {
        "state": "MO",
        "city": "Cottleville",
        "lat": 38.7512,
        "lng": -90.6581
    },
    {
        "state": "NJ",
        "city": "Franklin Center",
        "lat": 40.5321,
        "lng": -74.5415
    },
    {
        "state": "WA",
        "city": "Lake Goodwin",
        "lat": 48.1343,
        "lng": -122.2785
    },
    {
        "state": "NY",
        "city": "East Moriches",
        "lat": 40.8085,
        "lng": -72.7573
    },
    {
        "state": "OH",
        "city": "Obetz",
        "lat": 39.8671,
        "lng": -82.9451
    },
    {
        "state": "UT",
        "city": "Perry",
        "lat": 41.4648,
        "lng": -112.0401
    },
    {
        "state": "OH",
        "city": "New Carlisle",
        "lat": 39.9446,
        "lng": -84.0257
    },
    {
        "state": "MD",
        "city": "Ashton-Sandy Spring",
        "lat": 39.1515,
        "lng": -77.0065
    },
    {
        "state": "MN",
        "city": "Chisago City",
        "lat": 45.3473,
        "lng": -92.9116
    },
    {
        "state": "TX",
        "city": "Parker",
        "lat": 33.0571,
        "lng": -96.6244
    },
    {
        "state": "GA",
        "city": "Adel",
        "lat": 31.1264,
        "lng": -83.4229
    },
    {
        "state": "CT",
        "city": "Pawcatuck",
        "lat": 41.3774,
        "lng": -71.8492
    },
    {
        "state": "CO",
        "city": "Dove Valley",
        "lat": 39.5752,
        "lng": -104.8309
    },
    {
        "state": "AZ",
        "city": "Citrus Park",
        "lat": 33.53,
        "lng": -112.4441
    },
    {
        "state": "PA",
        "city": "Greenville",
        "lat": 41.4051,
        "lng": -80.3836
    },
    {
        "state": "IA",
        "city": "Red Oak",
        "lat": 41.014,
        "lng": -95.225
    },
    {
        "state": "UT",
        "city": "White City",
        "lat": 40.5666,
        "lng": -111.8636
    },
    {
        "state": "IN",
        "city": "Hidden Valley",
        "lat": 39.1672,
        "lng": -84.8444
    },
    {
        "state": "AR",
        "city": "White Hall",
        "lat": 34.2741,
        "lng": -92.1006
    },
    {
        "state": "NJ",
        "city": "Cape May Court House",
        "lat": 39.0788,
        "lng": -74.8205
    },
    {
        "state": "TN",
        "city": "Lafayette",
        "lat": 36.5241,
        "lng": -86.0304
    },
    {
        "state": "MO",
        "city": "Odessa",
        "lat": 38.9988,
        "lng": -93.9666
    },
    {
        "state": "NJ",
        "city": "Towaco",
        "lat": 40.9263,
        "lng": -74.3451
    },
    {
        "state": "FL",
        "city": "Pahokee",
        "lat": 26.8202,
        "lng": -80.6621
    },
    {
        "state": "AL",
        "city": "Rainsville",
        "lat": 34.4938,
        "lng": -85.8436
    },
    {
        "state": "NC",
        "city": "Northchase",
        "lat": 34.3049,
        "lng": -77.8754
    },
    {
        "state": "CA",
        "city": "Williams",
        "lat": 39.1498,
        "lng": -122.1389
    },
    {
        "state": "WI",
        "city": "Rothschild",
        "lat": 44.8761,
        "lng": -89.6173
    },
    {
        "state": "WI",
        "city": "Berlin",
        "lat": 43.9704,
        "lng": -88.9504
    },
    {
        "state": "FL",
        "city": "Siesta Key",
        "lat": 27.2779,
        "lng": -82.5516
    },
    {
        "state": "CA",
        "city": "Silver Lakes",
        "lat": 34.7515,
        "lng": -117.343
    },
    {
        "state": "CA",
        "city": "Happy Valley",
        "lat": 40.4662,
        "lng": -122.4207
    },
    {
        "state": "MO",
        "city": "Trenton",
        "lat": 40.0818,
        "lng": -93.603
    },
    {
        "state": "ME",
        "city": "North Windham",
        "lat": 43.8233,
        "lng": -70.4293
    },
    {
        "state": "IL",
        "city": "Wilmington",
        "lat": 41.3207,
        "lng": -88.164
    },
    {
        "state": "NJ",
        "city": "Somerdale",
        "lat": 39.8455,
        "lng": -75.0218
    },
    {
        "state": "DE",
        "city": "New Castle",
        "lat": 39.6681,
        "lng": -75.5697
    },
    {
        "state": "MD",
        "city": "Chestertown",
        "lat": 39.2182,
        "lng": -76.0714
    },
    {
        "state": "AR",
        "city": "Cave Springs",
        "lat": 36.2701,
        "lng": -94.2227
    },
    {
        "state": "IL",
        "city": "Spring Valley",
        "lat": 41.3362,
        "lng": -89.2038
    },
    {
        "state": "WA",
        "city": "Maplewood",
        "lat": 47.3715,
        "lng": -122.5689
    },
    {
        "state": "CA",
        "city": "Palermo",
        "lat": 39.4313,
        "lng": -121.5225
    },
    {
        "state": "PR",
        "city": "Guanica",
        "lat": 17.9698,
        "lng": -66.9309
    },
    {
        "state": "TX",
        "city": "Muleshoe",
        "lat": 34.2292,
        "lng": -102.7284
    },
    {
        "state": "SC",
        "city": "Walterboro",
        "lat": 32.901,
        "lng": -80.676
    },
    {
        "state": "SC",
        "city": "Laurel Bay",
        "lat": 32.4599,
        "lng": -80.7869
    },
    {
        "state": "SC",
        "city": "Piedmont",
        "lat": 34.7074,
        "lng": -82.4651
    },
    {
        "state": "PA",
        "city": "Coraopolis",
        "lat": 40.5148,
        "lng": -80.1627
    },
    {
        "state": "PA",
        "city": "Exeter",
        "lat": 41.3337,
        "lng": -75.8213
    },
    {
        "state": "PA",
        "city": "Bryn Mawr",
        "lat": 40.0208,
        "lng": -75.3161
    },
    {
        "state": "IA",
        "city": "DeWitt",
        "lat": 41.8227,
        "lng": -90.5448
    },
    {
        "state": "MN",
        "city": "Credit River",
        "lat": 44.6744,
        "lng": -93.3791
    },
    {
        "state": "PA",
        "city": "Boothwyn",
        "lat": 39.8357,
        "lng": -75.4454
    },
    {
        "state": "TX",
        "city": "Sinton",
        "lat": 28.0392,
        "lng": -97.5153
    },
    {
        "state": "MO",
        "city": "Caruthersville",
        "lat": 36.1814,
        "lng": -89.6664
    },
    {
        "state": "IL",
        "city": "Eureka",
        "lat": 40.7148,
        "lng": -89.2775
    },
    {
        "state": "WI",
        "city": "Prairie du Chien",
        "lat": 43.0429,
        "lng": -91.1372
    },
    {
        "state": "NY",
        "city": "Kaser",
        "lat": 41.1214,
        "lng": -74.0684
    },
    {
        "state": "WA",
        "city": "East Port Orchard",
        "lat": 47.5194,
        "lng": -122.6183
    },
    {
        "state": "WV",
        "city": "Ranson",
        "lat": 39.325,
        "lng": -77.8667
    },
    {
        "state": "GA",
        "city": "Jackson",
        "lat": 33.292,
        "lng": -83.9679
    },
    {
        "state": "MN",
        "city": "St. Paul Park",
        "lat": 44.8359,
        "lng": -92.9949
    },
    {
        "state": "NJ",
        "city": "Beckett",
        "lat": 39.7559,
        "lng": -75.3569
    },
    {
        "state": "MI",
        "city": "St. Clair",
        "lat": 42.8262,
        "lng": -82.493
    },
    {
        "state": "TX",
        "city": "Dripping Springs",
        "lat": 30.196,
        "lng": -98.0938
    },
    {
        "state": "NE",
        "city": "Holdrege",
        "lat": 40.4394,
        "lng": -99.3773
    },
    {
        "state": "FL",
        "city": "White City",
        "lat": 27.3721,
        "lng": -80.3404
    },
    {
        "state": "IA",
        "city": "Anamosa",
        "lat": 42.1091,
        "lng": -91.2758
    },
    {
        "state": "CA",
        "city": "Boulder Creek",
        "lat": 37.1341,
        "lng": -122.1272
    },
    {
        "state": "KY",
        "city": "Walton",
        "lat": 38.8645,
        "lng": -84.6122
    },
    {
        "state": "IN",
        "city": "Monticello",
        "lat": 40.7455,
        "lng": -86.7668
    },
    {
        "state": "OH",
        "city": "Carlisle",
        "lat": 39.5807,
        "lng": -84.3201
    },
    {
        "state": "TN",
        "city": "Mount Carmel",
        "lat": 36.562,
        "lng": -82.6618
    },
    {
        "state": "IL",
        "city": "Lake Holiday",
        "lat": 41.6159,
        "lng": -88.6683
    },
    {
        "state": "KS",
        "city": "Tonganoxie",
        "lat": 39.1088,
        "lng": -95.0811
    },
    {
        "state": "TX",
        "city": "Bowie",
        "lat": 33.5566,
        "lng": -97.844
    },
    {
        "state": "MO",
        "city": "Glasgow Village",
        "lat": 38.7578,
        "lng": -90.1984
    },
    {
        "state": "WI",
        "city": "Columbus",
        "lat": 43.3354,
        "lng": -89.03
    },
    {
        "state": "PA",
        "city": "Paxtonia",
        "lat": 40.3166,
        "lng": -76.7884
    },
    {
        "state": "TX",
        "city": "Marlin",
        "lat": 31.3085,
        "lng": -96.8934
    },
    {
        "state": "TX",
        "city": "McGregor",
        "lat": 31.4186,
        "lng": -97.4283
    },
    {
        "state": "NJ",
        "city": "Ellisburg",
        "lat": 39.9199,
        "lng": -75.0093
    },
    {
        "state": "CA",
        "city": "East Pasadena",
        "lat": 34.1378,
        "lng": -118.0776
    },
    {
        "state": "NC",
        "city": "Bessemer City",
        "lat": 35.284,
        "lng": -81.2828
    },
    {
        "state": "NM",
        "city": "Eldorado at Santa Fe",
        "lat": 35.5273,
        "lng": -105.934
    },
    {
        "state": "FL",
        "city": "Zephyrhills South",
        "lat": 28.2152,
        "lng": -82.1886
    },
    {
        "state": "LA",
        "city": "Schriever",
        "lat": 29.7333,
        "lng": -90.831
    },
    {
        "state": "TN",
        "city": "Rockwood",
        "lat": 35.8692,
        "lng": -84.6731
    },
    {
        "state": "FL",
        "city": "Tice",
        "lat": 26.6756,
        "lng": -81.8166
    },
    {
        "state": "KY",
        "city": "Douglass Hills",
        "lat": 38.2367,
        "lng": -85.5499
    },
    {
        "state": "MS",
        "city": "Leakesville",
        "lat": 31.1497,
        "lng": -88.5557
    },
    {
        "state": "PA",
        "city": "Sayre",
        "lat": 41.9856,
        "lng": -76.5207
    },
    {
        "state": "WA",
        "city": "Sultan",
        "lat": 47.871,
        "lng": -121.8043
    },
    {
        "state": "OK",
        "city": "Sayre",
        "lat": 35.2966,
        "lng": -99.6286
    },
    {
        "state": "PA",
        "city": "Shillington",
        "lat": 40.3029,
        "lng": -75.967
    },
    {
        "state": "CO",
        "city": "Shaw Heights",
        "lat": 39.8566,
        "lng": -105.0391
    },
    {
        "state": "MD",
        "city": "Silver Hill",
        "lat": 38.8392,
        "lng": -76.9367
    },
    {
        "state": "TX",
        "city": "Luling",
        "lat": 29.6814,
        "lng": -97.6468
    },
    {
        "state": "IA",
        "city": "Osceola",
        "lat": 41.0304,
        "lng": -93.784
    },
    {
        "state": "TX",
        "city": "Atlanta",
        "lat": 33.1136,
        "lng": -94.1672
    },
    {
        "state": "MO",
        "city": "Macon",
        "lat": 39.7426,
        "lng": -92.4711
    },
    {
        "state": "NY",
        "city": "New Hempstead",
        "lat": 41.1488,
        "lng": -74.0485
    },
    {
        "state": "PA",
        "city": "Tyrone",
        "lat": 40.6764,
        "lng": -78.246
    },
    {
        "state": "LA",
        "city": "St. Martinville",
        "lat": 30.1263,
        "lng": -91.8319
    },
    {
        "state": "IA",
        "city": "Algona",
        "lat": 43.0743,
        "lng": -94.2311
    },
    {
        "state": "TN",
        "city": "Dunlap",
        "lat": 35.3675,
        "lng": -85.3899
    },
    {
        "state": "UT",
        "city": "Sunset",
        "lat": 41.1392,
        "lng": -112.0285
    },
    {
        "state": "NY",
        "city": "Fairport",
        "lat": 43.099,
        "lng": -77.4427
    },
    {
        "state": "IL",
        "city": "Posen",
        "lat": 41.629,
        "lng": -87.6859
    },
    {
        "state": "AL",
        "city": "Smiths Station",
        "lat": 32.528,
        "lng": -85.0943
    },
    {
        "state": "MS",
        "city": "Ripley",
        "lat": 34.7321,
        "lng": -88.9444
    },
    {
        "state": "MI",
        "city": "Chelsea",
        "lat": 42.3132,
        "lng": -84.0188
    },
    {
        "state": "FL",
        "city": "Belleview",
        "lat": 29.0608,
        "lng": -82.0565
    },
    {
        "state": "CA",
        "city": "West Modesto",
        "lat": 37.6178,
        "lng": -121.0346
    },
    {
        "state": "MD",
        "city": "Fulton",
        "lat": 39.1516,
        "lng": -76.9163
    },
    {
        "state": "MT",
        "city": "Columbia Falls",
        "lat": 48.3708,
        "lng": -114.1902
    },
    {
        "state": "OR",
        "city": "Philomath",
        "lat": 44.5423,
        "lng": -123.3599
    },
    {
        "state": "NY",
        "city": "Albion",
        "lat": 43.246,
        "lng": -78.1902
    },
    {
        "state": "PA",
        "city": "Chesterbrook",
        "lat": 40.0735,
        "lng": -75.4582
    },
    {
        "state": "CA",
        "city": "St. Helena",
        "lat": 38.5063,
        "lng": -122.4682
    },
    {
        "state": "NY",
        "city": "North Hills",
        "lat": 40.7765,
        "lng": -73.6778
    },
    {
        "state": "TX",
        "city": "Rockdale",
        "lat": 30.6543,
        "lng": -97.0089
    },
    {
        "state": "CA",
        "city": "East Porterville",
        "lat": 36.0581,
        "lng": -118.9749
    },
    {
        "state": "AL",
        "city": "Fort Rucker",
        "lat": 31.3428,
        "lng": -85.7154
    },
    {
        "state": "OH",
        "city": "Wellston",
        "lat": 39.1172,
        "lng": -82.5375
    },
    {
        "state": "IA",
        "city": "Sheldon",
        "lat": 43.1797,
        "lng": -95.8437
    },
    {
        "state": "MS",
        "city": "Forest",
        "lat": 32.3595,
        "lng": -89.4761
    },
    {
        "state": "NY",
        "city": "Williamsville",
        "lat": 42.9623,
        "lng": -78.7418
    },
    {
        "state": "AR",
        "city": "Walnut Ridge",
        "lat": 36.0848,
        "lng": -90.9467
    },
    {
        "state": "HI",
        "city": "Laie",
        "lat": 21.6442,
        "lng": -157.9279
    },
    {
        "state": "AR",
        "city": "Warren",
        "lat": 33.6113,
        "lng": -92.0678
    },
    {
        "state": "IA",
        "city": "Spirit Lake",
        "lat": 43.4176,
        "lng": -95.1109
    },
    {
        "state": "MI",
        "city": "Dundee",
        "lat": 41.9642,
        "lng": -83.6636
    },
    {
        "state": "IL",
        "city": "Colona",
        "lat": 41.4678,
        "lng": -90.3446
    },
    {
        "state": "KS",
        "city": "Colby",
        "lat": 39.3848,
        "lng": -101.0452
    },
    {
        "state": "MD",
        "city": "Manchester",
        "lat": 39.6585,
        "lng": -76.8881
    },
    {
        "state": "OH",
        "city": "Deer Park",
        "lat": 39.2039,
        "lng": -84.3978
    },
    {
        "state": "SC",
        "city": "Hollywood",
        "lat": 32.752,
        "lng": -80.2118
    },
    {
        "state": "FL",
        "city": "Balm",
        "lat": 27.7542,
        "lng": -82.2882
    },
    {
        "state": "KS",
        "city": "Iola",
        "lat": 37.9274,
        "lng": -95.4006
    },
    {
        "state": "GA",
        "city": "Temple",
        "lat": 33.7342,
        "lng": -85.0289
    },
    {
        "state": "HI",
        "city": "Waipio Acres",
        "lat": 21.4688,
        "lng": -158.0173
    },
    {
        "state": "IA",
        "city": "Centerville",
        "lat": 40.7292,
        "lng": -92.8716
    },
    {
        "state": "PA",
        "city": "Merion Station",
        "lat": 40.0035,
        "lng": -75.2501
    },
    {
        "state": "IL",
        "city": "Grandwood Park",
        "lat": 42.3927,
        "lng": -87.989
    },
    {
        "state": "FL",
        "city": "Ellenton",
        "lat": 27.5269,
        "lng": -82.5258
    },
    {
        "state": "TX",
        "city": "Sansom Park",
        "lat": 32.8027,
        "lng": -97.4021
    },
    {
        "state": "OH",
        "city": "Toronto",
        "lat": 40.4581,
        "lng": -80.6095
    },
    {
        "state": "MO",
        "city": "Imperial",
        "lat": 38.3673,
        "lng": -90.3705
    },
    {
        "state": "IL",
        "city": "Lake Barrington",
        "lat": 42.2121,
        "lng": -88.1684
    },
    {
        "state": "NY",
        "city": "Carle Place",
        "lat": 40.7499,
        "lng": -73.6124
    },
    {
        "state": "FL",
        "city": "Dundee",
        "lat": 28.0115,
        "lng": -81.5995
    },
    {
        "state": "PA",
        "city": "Olyphant",
        "lat": 41.4506,
        "lng": -75.5753
    },
    {
        "state": "WI",
        "city": "North Fond du Lac",
        "lat": 43.8107,
        "lng": -88.486
    },
    {
        "state": "VA",
        "city": "Quantico Base",
        "lat": 38.5228,
        "lng": -77.3186
    },
    {
        "state": "MO",
        "city": "Waynesville",
        "lat": 37.8201,
        "lng": -92.2202
    },
    {
        "state": "IA",
        "city": "Clarinda",
        "lat": 40.7377,
        "lng": -95.0338
    },
    {
        "state": "TX",
        "city": "Wilmer",
        "lat": 32.5983,
        "lng": -96.6815
    },
    {
        "state": "IA",
        "city": "Winterset",
        "lat": 41.345,
        "lng": -94.0138
    },
    {
        "state": "AZ",
        "city": "Kayenta",
        "lat": 36.7144,
        "lng": -110.259
    },
    {
        "state": "CA",
        "city": "Ione",
        "lat": 38.3613,
        "lng": -120.9422
    },
    {
        "state": "LA",
        "city": "Brownfields",
        "lat": 30.5467,
        "lng": -91.1225
    },
    {
        "state": "TX",
        "city": "Cameron",
        "lat": 30.8608,
        "lng": -96.9763
    },
    {
        "state": "IN",
        "city": "Cicero",
        "lat": 40.1246,
        "lng": -86.0242
    },
    {
        "state": "MN",
        "city": "La Crescent",
        "lat": 43.83,
        "lng": -91.3042
    },
    {
        "state": "MN",
        "city": "Montevideo",
        "lat": 44.9505,
        "lng": -95.7153
    },
    {
        "state": "NC",
        "city": "Angier",
        "lat": 35.5116,
        "lng": -78.7402
    },
    {
        "state": "NJ",
        "city": "Englewood Cliffs",
        "lat": 40.8823,
        "lng": -73.9467
    },
    {
        "state": "PR",
        "city": "Ceiba",
        "lat": 18.265,
        "lng": -65.6488
    },
    {
        "state": "AL",
        "city": "Roanoke",
        "lat": 33.1453,
        "lng": -85.3694
    },
    {
        "state": "TX",
        "city": "Rusk",
        "lat": 31.7978,
        "lng": -95.1489
    },
    {
        "state": "NY",
        "city": "Hampton Manor",
        "lat": 42.6197,
        "lng": -73.7288
    },
    {
        "state": "WA",
        "city": "Suncrest",
        "lat": 47.8297,
        "lng": -117.6056
    },
    {
        "state": "AL",
        "city": "Glencoe",
        "lat": 33.9447,
        "lng": -85.9322
    },
    {
        "state": "NC",
        "city": "Swannanoa",
        "lat": 35.6009,
        "lng": -82.3917
    },
    {
        "state": "NY",
        "city": "Wheatley Heights",
        "lat": 40.7624,
        "lng": -73.3705
    },
    {
        "state": "AZ",
        "city": "Guadalupe",
        "lat": 33.3665,
        "lng": -111.9633
    },
    {
        "state": "FL",
        "city": "South Pasadena",
        "lat": 27.7526,
        "lng": -82.7394
    },
    {
        "state": "NC",
        "city": "Briar Chapel",
        "lat": 35.8241,
        "lng": -79.1168
    },
    {
        "state": "NJ",
        "city": "Vauxhall",
        "lat": 40.7174,
        "lng": -74.2838
    },
    {
        "state": "NJ",
        "city": "Margate City",
        "lat": 39.3307,
        "lng": -74.507
    },
    {
        "state": "IN",
        "city": "Rensselaer",
        "lat": 40.9375,
        "lng": -87.1684
    },
    {
        "state": "UT",
        "city": "Moab",
        "lat": 38.5701,
        "lng": -109.5478
    },
    {
        "state": "TN",
        "city": "Eagleton Village",
        "lat": 35.7882,
        "lng": -83.9363
    },
    {
        "state": "PA",
        "city": "California",
        "lat": 40.0692,
        "lng": -79.9152
    },
    {
        "state": "FL",
        "city": "Lochmoor Waterway Estates",
        "lat": 26.6447,
        "lng": -81.9098
    },
    {
        "state": "FL",
        "city": "South Highpoint",
        "lat": 27.9086,
        "lng": -82.7162
    },
    {
        "state": "AK",
        "city": "Chena Ridge",
        "lat": 64.7941,
        "lng": -148.0357
    },
    {
        "state": "OH",
        "city": "New Burlington",
        "lat": 39.2628,
        "lng": -84.5501
    },
    {
        "state": "MO",
        "city": "Weldon Spring",
        "lat": 38.7119,
        "lng": -90.6513
    },
    {
        "state": "FL",
        "city": "Okeechobee",
        "lat": 27.2413,
        "lng": -80.8298
    },
    {
        "state": "AZ",
        "city": "Benson",
        "lat": 31.9157,
        "lng": -110.3257
    },
    {
        "state": "NY",
        "city": "Islip Terrace",
        "lat": 40.7503,
        "lng": -73.1869
    },
    {
        "state": "NJ",
        "city": "Neshanic Station",
        "lat": 40.5291,
        "lng": -74.7358
    },
    {
        "state": "OH",
        "city": "Canal Fulton",
        "lat": 40.8895,
        "lng": -81.5882
    },
    {
        "state": "LA",
        "city": "Grambling",
        "lat": 32.5275,
        "lng": -92.7124
    },
    {
        "state": "FL",
        "city": "Fort Pierce South",
        "lat": 27.4098,
        "lng": -80.3539
    },
    {
        "state": "WA",
        "city": "Black Diamond",
        "lat": 47.313,
        "lng": -122.0181
    },
    {
        "state": "NJ",
        "city": "Clementon",
        "lat": 39.8046,
        "lng": -74.985
    },
    {
        "state": "CA",
        "city": "Kensington",
        "lat": 37.9083,
        "lng": -122.2805
    },
    {
        "state": "OK",
        "city": "Verdigris",
        "lat": 36.2536,
        "lng": -95.66
    },
    {
        "state": "OH",
        "city": "Reminderville",
        "lat": 41.3338,
        "lng": -81.4018
    },
    {
        "state": "VA",
        "city": "Crosspointe",
        "lat": 38.7253,
        "lng": -77.2638
    },
    {
        "state": "CO",
        "city": "Brush",
        "lat": 40.2598,
        "lng": -103.6323
    },
    {
        "state": "FL",
        "city": "Palm Springs North",
        "lat": 25.9351,
        "lng": -80.3339
    },
    {
        "state": "TX",
        "city": "Fabens",
        "lat": 31.5136,
        "lng": -106.1521
    },
    {
        "state": "FL",
        "city": "Whiskey Creek",
        "lat": 26.5733,
        "lng": -81.8903
    },
    {
        "state": "TX",
        "city": "Shady Hollow",
        "lat": 30.1645,
        "lng": -97.8631
    },
    {
        "state": "GA",
        "city": "Blakely",
        "lat": 31.3827,
        "lng": -84.9228
    },
    {
        "state": "PA",
        "city": "Fox Chapel",
        "lat": 40.5247,
        "lng": -79.8898
    },
    {
        "state": "PR",
        "city": "Penuelas",
        "lat": 18.0595,
        "lng": -66.7206
    },
    {
        "state": "NC",
        "city": "Cramerton",
        "lat": 35.2343,
        "lng": -81.0734
    },
    {
        "state": "AL",
        "city": "Margaret",
        "lat": 33.6734,
        "lng": -86.468
    },
    {
        "state": "NY",
        "city": "Ballston Spa",
        "lat": 43.0068,
        "lng": -73.8525
    },
    {
        "state": "OR",
        "city": "Marlene Village",
        "lat": 45.5173,
        "lng": -122.8199
    },
    {
        "state": "CT",
        "city": "Byram",
        "lat": 41.0011,
        "lng": -73.6528
    },
    {
        "state": "NJ",
        "city": "Salem",
        "lat": 39.5681,
        "lng": -75.4724
    },
    {
        "state": "PA",
        "city": "Lewisburg",
        "lat": 40.9641,
        "lng": -76.8901
    },
    {
        "state": "IL",
        "city": "Berkeley",
        "lat": 41.8891,
        "lng": -87.9115
    },
    {
        "state": "AZ",
        "city": "Thatcher",
        "lat": 32.8323,
        "lng": -109.7595
    },
    {
        "state": "PA",
        "city": "Lehighton",
        "lat": 40.8306,
        "lng": -75.7165
    },
    {
        "state": "SC",
        "city": "Central",
        "lat": 34.7235,
        "lng": -82.7788
    },
    {
        "state": "PA",
        "city": "Whitfield",
        "lat": 40.3362,
        "lng": -76.0053
    },
    {
        "state": "MI",
        "city": "Springfield",
        "lat": 42.3246,
        "lng": -85.2371
    },
    {
        "state": "FL",
        "city": "Crawfordville",
        "lat": 30.1996,
        "lng": -84.3634
    },
    {
        "state": "VA",
        "city": "Richlands",
        "lat": 37.0878,
        "lng": -81.8081
    },
    {
        "state": "TX",
        "city": "Liberty Hill",
        "lat": 30.6638,
        "lng": -97.9063
    },
    {
        "state": "MT",
        "city": "Orchard Homes",
        "lat": 46.8559,
        "lng": -114.0778
    },
    {
        "state": "NY",
        "city": "Firthcliffe",
        "lat": 41.4408,
        "lng": -74.0353
    },
    {
        "state": "UT",
        "city": "Hyde Park",
        "lat": 41.8008,
        "lng": -111.8121
    },
    {
        "state": "PA",
        "city": "Titusville",
        "lat": 41.6273,
        "lng": -79.6699
    },
    {
        "state": "SC",
        "city": "Chester",
        "lat": 34.7051,
        "lng": -81.2132
    },
    {
        "state": "NC",
        "city": "Moyock",
        "lat": 36.5165,
        "lng": -76.1728
    },
    {
        "state": "OH",
        "city": "Pleasant Run",
        "lat": 39.2927,
        "lng": -84.5757
    },
    {
        "state": "AL",
        "city": "Brewton",
        "lat": 31.1113,
        "lng": -87.0737
    },
    {
        "state": "CA",
        "city": "Woodside",
        "lat": 37.4221,
        "lng": -122.2586
    },
    {
        "state": "IN",
        "city": "Tipton",
        "lat": 40.282,
        "lng": -86.0423
    },
    {
        "state": "NE",
        "city": "Chadron",
        "lat": 42.826,
        "lng": -103.0025
    },
    {
        "state": "WI",
        "city": "West Salem",
        "lat": 43.8989,
        "lng": -91.0882
    },
    {
        "state": "OH",
        "city": "Chardon",
        "lat": 41.5798,
        "lng": -81.207
    },
    {
        "state": "MD",
        "city": "West Ocean City",
        "lat": 38.3466,
        "lng": -75.1122
    },
    {
        "state": "WA",
        "city": "Town and Country",
        "lat": 47.7259,
        "lng": -117.422
    },
    {
        "state": "MO",
        "city": "St. Robert",
        "lat": 37.8244,
        "lng": -92.1532
    },
    {
        "state": "PA",
        "city": "Schuylkill Haven",
        "lat": 40.6283,
        "lng": -76.1729
    },
    {
        "state": "PA",
        "city": "Duquesne",
        "lat": 40.3732,
        "lng": -79.8502
    },
    {
        "state": "OH",
        "city": "Uhrichsville",
        "lat": 40.4005,
        "lng": -81.3515
    },
    {
        "state": "NH",
        "city": "Suncook",
        "lat": 43.1382,
        "lng": -71.453
    },
    {
        "state": "PA",
        "city": "Pennside",
        "lat": 40.3384,
        "lng": -75.8764
    },
    {
        "state": "NJ",
        "city": "Bargaintown",
        "lat": 39.3687,
        "lng": -74.5924
    },
    {
        "state": "MN",
        "city": "Falcon Heights",
        "lat": 44.9899,
        "lng": -93.177
    },
    {
        "state": "CA",
        "city": "Yosemite Lakes",
        "lat": 37.1885,
        "lng": -119.7723
    },
    {
        "state": "MI",
        "city": "Gladstone",
        "lat": 45.8521,
        "lng": -87.0358
    },
    {
        "state": "TX",
        "city": "Breckenridge",
        "lat": 32.7566,
        "lng": -98.9125
    },
    {
        "state": "KY",
        "city": "Williamsburg",
        "lat": 36.7393,
        "lng": -84.1647
    },
    {
        "state": "IL",
        "city": "Highwood",
        "lat": 42.206,
        "lng": -87.8128
    },
    {
        "state": "NC",
        "city": "Williamston",
        "lat": 35.8465,
        "lng": -77.0661
    },
    {
        "state": "VA",
        "city": "Big Stone Gap",
        "lat": 36.8626,
        "lng": -82.7769
    },
    {
        "state": "TX",
        "city": "Center",
        "lat": 31.793,
        "lng": -94.1795
    },
    {
        "state": "NV",
        "city": "Lemmon Valley",
        "lat": 39.6879,
        "lng": -119.8364
    },
    {
        "state": "TX",
        "city": "Primera",
        "lat": 26.2237,
        "lng": -97.7529
    },
    {
        "state": "MT",
        "city": "Polson",
        "lat": 47.6886,
        "lng": -114.1411
    },
    {
        "state": "IL",
        "city": "Coal City",
        "lat": 41.2772,
        "lng": -88.2803
    },
    {
        "state": "OH",
        "city": "Apple Valley",
        "lat": 40.4389,
        "lng": -82.3481
    },
    {
        "state": "OR",
        "city": "Tillamook",
        "lat": 45.4562,
        "lng": -123.8331
    },
    {
        "state": "TX",
        "city": "Nassau Bay",
        "lat": 29.5448,
        "lng": -95.0865
    },
    {
        "state": "TN",
        "city": "Ashland City",
        "lat": 36.2607,
        "lng": -87.0412
    },
    {
        "state": "TX",
        "city": "Sparks",
        "lat": 31.6727,
        "lng": -106.2399
    },
    {
        "state": "TX",
        "city": "Venus",
        "lat": 32.4317,
        "lng": -97.1018
    },
    {
        "state": "WV",
        "city": "New Martinsville",
        "lat": 39.6635,
        "lng": -80.8569
    },
    {
        "state": "CA",
        "city": "Mayflower Village",
        "lat": 34.116,
        "lng": -118.0096
    },
    {
        "state": "TX",
        "city": "Doffing",
        "lat": 26.2788,
        "lng": -98.3856
    },
    {
        "state": "MS",
        "city": "Vancleave",
        "lat": 30.5483,
        "lng": -88.6675
    },
    {
        "state": "OK",
        "city": "Vinita",
        "lat": 36.6375,
        "lng": -95.1725
    },
    {
        "state": "NJ",
        "city": "Troy Hills",
        "lat": 40.8483,
        "lng": -74.3993
    },
    {
        "state": "IN",
        "city": "Fortville",
        "lat": 39.9246,
        "lng": -85.8466
    },
    {
        "state": "NM",
        "city": "Tucumcari",
        "lat": 35.17,
        "lng": -103.7046
    },
    {
        "state": "GA",
        "city": "Glennville",
        "lat": 31.9379,
        "lng": -81.9305
    },
    {
        "state": "IN",
        "city": "Porter",
        "lat": 41.6257,
        "lng": -87.0801
    },
    {
        "state": "CA",
        "city": "Tara Hills",
        "lat": 37.9939,
        "lng": -122.3188
    },
    {
        "state": "WV",
        "city": "Buckhannon",
        "lat": 38.9927,
        "lng": -80.2281
    },
    {
        "state": "MI",
        "city": "Eaton Rapids",
        "lat": 42.5091,
        "lng": -84.6531
    },
    {
        "state": "IA",
        "city": "Windsor Heights",
        "lat": 41.6045,
        "lng": -93.7128
    },
    {
        "state": "FL",
        "city": "Naples Park",
        "lat": 26.2633,
        "lng": -81.8094
    },
    {
        "state": "TN",
        "city": "Bolivar",
        "lat": 35.2645,
        "lng": -89.0118
    },
    {
        "state": "CO",
        "city": "West Pleasant View",
        "lat": 39.732,
        "lng": -105.1785
    },
    {
        "state": "MI",
        "city": "Utica",
        "lat": 42.629,
        "lng": -83.0218
    },
    {
        "state": "KY",
        "city": "Hazard",
        "lat": 37.2584,
        "lng": -83.1977
    },
    {
        "state": "MN",
        "city": "North Oaks",
        "lat": 45.1002,
        "lng": -93.0882
    },
    {
        "state": "NY",
        "city": "Elmsford",
        "lat": 41.0541,
        "lng": -73.8143
    },
    {
        "state": "CA",
        "city": "Calistoga",
        "lat": 38.5818,
        "lng": -122.5824
    },
    {
        "state": "WA",
        "city": "Buckley",
        "lat": 47.1615,
        "lng": -122.02
    },
    {
        "state": "FL",
        "city": "Rainbow Springs",
        "lat": 29.094,
        "lng": -82.4408
    },
    {
        "state": "TX",
        "city": "Brookshire",
        "lat": 29.7824,
        "lng": -95.9514
    },
    {
        "state": "NC",
        "city": "James City",
        "lat": 35.0592,
        "lng": -77.02
    },
    {
        "state": "PA",
        "city": "Trooper",
        "lat": 40.1489,
        "lng": -75.3991
    },
    {
        "state": "OH",
        "city": "Johnstown",
        "lat": 40.15,
        "lng": -82.6881
    },
    {
        "state": "OH",
        "city": "Northwood",
        "lat": 41.6089,
        "lng": -83.4837
    },
    {
        "state": "MI",
        "city": "Allegan",
        "lat": 42.5299,
        "lng": -85.8462
    },
    {
        "state": "OK",
        "city": "Hugo",
        "lat": 34.0118,
        "lng": -95.5115
    },
    {
        "state": "OR",
        "city": "Veneta",
        "lat": 44.0471,
        "lng": -123.3514
    },
    {
        "state": "NY",
        "city": "Mechanicville",
        "lat": 42.9036,
        "lng": -73.6894
    },
    {
        "state": "WI",
        "city": "Mayville",
        "lat": 43.4986,
        "lng": -88.5474
    },
    {
        "state": "WA",
        "city": "Connell",
        "lat": 46.6622,
        "lng": -118.8405
    },
    {
        "state": "AL",
        "city": "Tallassee",
        "lat": 32.5315,
        "lng": -85.8903
    },
    {
        "state": "PA",
        "city": "Collegeville",
        "lat": 40.1873,
        "lng": -75.4581
    },
    {
        "state": "PA",
        "city": "Bangor",
        "lat": 40.8678,
        "lng": -75.2085
    },
    {
        "state": "WI",
        "city": "Bristol",
        "lat": 42.5377,
        "lng": -88.0151
    },
    {
        "state": "IL",
        "city": "Pana",
        "lat": 39.3829,
        "lng": -89.0642
    },
    {
        "state": "NJ",
        "city": "Wildwood",
        "lat": 38.9881,
        "lng": -74.8195
    },
    {
        "state": "PA",
        "city": "Lawnton",
        "lat": 40.2653,
        "lng": -76.7984
    },
    {
        "state": "NJ",
        "city": "Ampere North",
        "lat": 40.7758,
        "lng": -74.1918
    },
    {
        "state": "GA",
        "city": "Camilla",
        "lat": 31.2337,
        "lng": -84.2088
    },
    {
        "state": "PA",
        "city": "Eagleville",
        "lat": 40.1599,
        "lng": -75.4089
    },
    {
        "state": "TX",
        "city": "Granite Shoals",
        "lat": 30.5894,
        "lng": -98.3671
    },
    {
        "state": "AL",
        "city": "Midfield",
        "lat": 33.4553,
        "lng": -86.9224
    },
    {
        "state": "MI",
        "city": "Pearl Beach",
        "lat": 42.6295,
        "lng": -82.5834
    },
    {
        "state": "MD",
        "city": "Layhill",
        "lat": 39.0871,
        "lng": -77.0404
    },
    {
        "state": "CA",
        "city": "Old Fig Garden",
        "lat": 36.7989,
        "lng": -119.8052
    },
    {
        "state": "IA",
        "city": "Cherokee",
        "lat": 42.7499,
        "lng": -95.5529
    },
    {
        "state": "NY",
        "city": "Blauvelt",
        "lat": 41.0689,
        "lng": -73.9545
    },
    {
        "state": "NJ",
        "city": "Morganville",
        "lat": 40.3756,
        "lng": -74.2444
    },
    {
        "state": "CA",
        "city": "Buellton",
        "lat": 34.6152,
        "lng": -120.1943
    },
    {
        "state": "NJ",
        "city": "East Freehold",
        "lat": 40.2718,
        "lng": -74.2425
    },
    {
        "state": "IN",
        "city": "Linton",
        "lat": 39.0354,
        "lng": -87.1577
    },
    {
        "state": "CO",
        "city": "Battlement Mesa",
        "lat": 39.4506,
        "lng": -108.0063
    },
    {
        "state": "PA",
        "city": "Shanor-Northvue",
        "lat": 40.9104,
        "lng": -79.9157
    },
    {
        "state": "IN",
        "city": "Alexandria",
        "lat": 40.263,
        "lng": -85.6737
    },
    {
        "state": "MT",
        "city": "Helena Valley Northwest",
        "lat": 46.7289,
        "lng": -112.0631
    },
    {
        "state": "NY",
        "city": "West Hills",
        "lat": 40.8199,
        "lng": -73.4339
    },
    {
        "state": "IN",
        "city": "Lawrenceburg",
        "lat": 39.0986,
        "lng": -84.8713
    },
    {
        "state": "TX",
        "city": "Port Isabel",
        "lat": 26.054,
        "lng": -97.2505
    },
    {
        "state": "FL",
        "city": "Samsula-Spruce Creek",
        "lat": 29.0484,
        "lng": -81.0628
    },
    {
        "state": "NY",
        "city": "Penn Yan",
        "lat": 42.6609,
        "lng": -77.0535
    },
    {
        "state": "FL",
        "city": "Fort Meade",
        "lat": 27.7645,
        "lng": -81.8058
    },
    {
        "state": "PR",
        "city": "Santa Isabel",
        "lat": 17.9691,
        "lng": -66.4051
    },
    {
        "state": "GA",
        "city": "Oakwood",
        "lat": 34.2236,
        "lng": -83.8851
    },
    {
        "state": "MI",
        "city": "Comstock Northwest",
        "lat": 42.3219,
        "lng": -85.518
    },
    {
        "state": "TX",
        "city": "North Alamo",
        "lat": 26.216,
        "lng": -98.1264
    },
    {
        "state": "PA",
        "city": "West Hazleton",
        "lat": 40.9701,
        "lng": -76.0142
    },
    {
        "state": "HI",
        "city": "Pupukea",
        "lat": 21.6511,
        "lng": -158.0437
    },
    {
        "state": "TX",
        "city": "Brady",
        "lat": 31.1322,
        "lng": -99.37
    },
    {
        "state": "IA",
        "city": "Glenwood",
        "lat": 41.0446,
        "lng": -95.7406
    },
    {
        "state": "MI",
        "city": "Kingsford",
        "lat": 45.8061,
        "lng": -88.0995
    },
    {
        "state": "MA",
        "city": "The Pinehills",
        "lat": 41.8946,
        "lng": -70.5966
    },
    {
        "state": "AL",
        "city": "Semmes",
        "lat": 30.7899,
        "lng": -88.2389
    },
    {
        "state": "AL",
        "city": "Theodore",
        "lat": 30.5408,
        "lng": -88.1885
    },
    {
        "state": "WA",
        "city": "Chain Lake",
        "lat": 47.9028,
        "lng": -121.985
    },
    {
        "state": "TN",
        "city": "Medina",
        "lat": 35.8152,
        "lng": -88.7901
    },
    {
        "state": "TN",
        "city": "Madisonville",
        "lat": 35.5232,
        "lng": -84.363
    },
    {
        "state": "IL",
        "city": "Monee",
        "lat": 41.4181,
        "lng": -87.7502
    },
    {
        "state": "KS",
        "city": "Goddard",
        "lat": 37.6652,
        "lng": -97.5617
    },
    {
        "state": "NV",
        "city": "Silver Springs",
        "lat": 39.3826,
        "lng": -119.2148
    },
    {
        "state": "GA",
        "city": "Senoia",
        "lat": 33.3082,
        "lng": -84.5546
    },
    {
        "state": "AK",
        "city": "Fishhook",
        "lat": 61.7199,
        "lng": -149.2621
    },
    {
        "state": "AR",
        "city": "Tontitown",
        "lat": 36.1642,
        "lng": -94.2457
    },
    {
        "state": "MI",
        "city": "Davison",
        "lat": 43.0318,
        "lng": -83.5187
    },
    {
        "state": "GA",
        "city": "Rockmart",
        "lat": 34.0103,
        "lng": -85.044
    },
    {
        "state": "IA",
        "city": "Manchester",
        "lat": 42.4854,
        "lng": -91.4557
    },
    {
        "state": "KY",
        "city": "Hendron",
        "lat": 37.035,
        "lng": -88.6427
    },
    {
        "state": "MD",
        "city": "Abingdon",
        "lat": 39.4629,
        "lng": -76.2754
    },
    {
        "state": "CO",
        "city": "Mead",
        "lat": 40.2318,
        "lng": -104.9911
    },
    {
        "state": "NJ",
        "city": "Ledgewood",
        "lat": 40.8769,
        "lng": -74.6724
    },
    {
        "state": "TX",
        "city": "Zapata",
        "lat": 26.9026,
        "lng": -99.2612
    },
    {
        "state": "MN",
        "city": "Lake City",
        "lat": 44.4453,
        "lng": -92.2796
    },
    {
        "state": "TX",
        "city": "Alvarado",
        "lat": 32.4068,
        "lng": -97.2149
    },
    {
        "state": "PA",
        "city": "Birdsboro",
        "lat": 40.2619,
        "lng": -75.8099
    },
    {
        "state": "PR",
        "city": "Naguabo",
        "lat": 18.2117,
        "lng": -65.737
    },
    {
        "state": "IL",
        "city": "Pinckneyville",
        "lat": 38.0851,
        "lng": -89.3717
    },
    {
        "state": "CA",
        "city": "Elverta",
        "lat": 38.7185,
        "lng": -121.4455
    },
    {
        "state": "AZ",
        "city": "Three Points",
        "lat": 32.0596,
        "lng": -111.2866
    },
    {
        "state": "FL",
        "city": "Flagler Beach",
        "lat": 29.4716,
        "lng": -81.1303
    },
    {
        "state": "OH",
        "city": "Delhi Hills",
        "lat": 39.0871,
        "lng": -84.6177
    },
    {
        "state": "ID",
        "city": "Rigby",
        "lat": 43.6734,
        "lng": -111.9132
    },
    {
        "state": "TX",
        "city": "Sandy Oaks",
        "lat": 29.1821,
        "lng": -98.4081
    },
    {
        "state": "IA",
        "city": "Iowa Falls",
        "lat": 42.519,
        "lng": -93.2662
    },
    {
        "state": "NY",
        "city": "Albertson",
        "lat": 40.7715,
        "lng": -73.6482
    },
    {
        "state": "WI",
        "city": "Wind Lake",
        "lat": 42.8239,
        "lng": -88.1563
    },
    {
        "state": "MN",
        "city": "Morris",
        "lat": 45.5857,
        "lng": -95.9046
    },
    {
        "state": "PA",
        "city": "Dorneyville",
        "lat": 40.5762,
        "lng": -75.5194
    },
    {
        "state": "PA",
        "city": "Clarks Summit",
        "lat": 41.4902,
        "lng": -75.7065
    },
    {
        "state": "MN",
        "city": "Redwood Falls",
        "lat": 44.547,
        "lng": -95.1031
    },
    {
        "state": "CA",
        "city": "Twin Lakes",
        "lat": 36.9646,
        "lng": -121.9896
    },
    {
        "state": "MI",
        "city": "Ironwood",
        "lat": 46.4522,
        "lng": -90.1505
    },
    {
        "state": "OH",
        "city": "Ada",
        "lat": 40.7681,
        "lng": -83.8251
    },
    {
        "state": "PA",
        "city": "Turtle Creek",
        "lat": 40.4085,
        "lng": -79.8214
    },
    {
        "state": "FL",
        "city": "St. Augustine South",
        "lat": 29.8449,
        "lng": -81.3156
    },
    {
        "state": "FL",
        "city": "Daytona Beach Shores",
        "lat": 29.1696,
        "lng": -80.9796
    },
    {
        "state": "OH",
        "city": "St. Clairsville",
        "lat": 40.0791,
        "lng": -80.8997
    },
    {
        "state": "MD",
        "city": "Hampton",
        "lat": 39.4237,
        "lng": -76.5685
    },
    {
        "state": "KS",
        "city": "Concordia",
        "lat": 39.5669,
        "lng": -97.6467
    },
    {
        "state": "IL",
        "city": "Candlewick Lake",
        "lat": 42.3525,
        "lng": -88.8694
    },
    {
        "state": "NY",
        "city": "Saranac Lake",
        "lat": 44.3252,
        "lng": -74.1309
    },
    {
        "state": "IN",
        "city": "Winona Lake",
        "lat": 41.2166,
        "lng": -85.8105
    },
    {
        "state": "MA",
        "city": "Raynham Center",
        "lat": 41.9327,
        "lng": -71.0431
    },
    {
        "state": "PA",
        "city": "West York",
        "lat": 39.9534,
        "lng": -76.761
    },
    {
        "state": "MO",
        "city": "Savannah",
        "lat": 39.9391,
        "lng": -94.8279
    },
    {
        "state": "IL",
        "city": "Milan",
        "lat": 41.4415,
        "lng": -90.5593
    },
    {
        "state": "HI",
        "city": "Kahaluu",
        "lat": 21.4575,
        "lng": -157.8453
    },
    {
        "state": "MI",
        "city": "Frankenmuth",
        "lat": 43.3322,
        "lng": -83.7391
    },
    {
        "state": "OR",
        "city": "King City",
        "lat": 45.4012,
        "lng": -122.8069
    },
    {
        "state": "NY",
        "city": "Sea Cliff",
        "lat": 40.8441,
        "lng": -73.6442
    },
    {
        "state": "AR",
        "city": "Cherokee Village",
        "lat": 36.2959,
        "lng": -91.5696
    },
    {
        "state": "WI",
        "city": "Tichigan",
        "lat": 42.8087,
        "lng": -88.215
    },
    {
        "state": "CA",
        "city": "Big Bear Lake",
        "lat": 34.2429,
        "lng": -116.8951
    },
    {
        "state": "VA",
        "city": "Bluefield",
        "lat": 37.2351,
        "lng": -81.2751
    },
    {
        "state": "FL",
        "city": "Timber Pines",
        "lat": 28.469,
        "lng": -82.5999
    },
    {
        "state": "TN",
        "city": "Smithville",
        "lat": 35.9584,
        "lng": -85.8211
    },
    {
        "state": "CO",
        "city": "Todd Creek",
        "lat": 39.9797,
        "lng": -104.8734
    },
    {
        "state": "SC",
        "city": "Cheraw",
        "lat": 34.6956,
        "lng": -79.9084
    },
    {
        "state": "MD",
        "city": "Berlin",
        "lat": 38.331,
        "lng": -75.2148
    },
    {
        "state": "AZ",
        "city": "Doney Park",
        "lat": 35.2656,
        "lng": -111.519
    },
    {
        "state": "TX",
        "city": "Willow Park",
        "lat": 32.7548,
        "lng": -97.6498
    },
    {
        "state": "NY",
        "city": "Grandyle Village",
        "lat": 42.9867,
        "lng": -78.9524
    },
    {
        "state": "TX",
        "city": "Aledo",
        "lat": 32.6974,
        "lng": -97.6069
    },
    {
        "state": "PA",
        "city": "Vandergrift",
        "lat": 40.5994,
        "lng": -79.5746
    },
    {
        "state": "FL",
        "city": "Whitfield",
        "lat": 27.4116,
        "lng": -82.5659
    },
    {
        "state": "PA",
        "city": "Duryea",
        "lat": 41.3533,
        "lng": -75.7757
    },
    {
        "state": "TX",
        "city": "Terrell Hills",
        "lat": 29.4771,
        "lng": -98.4472
    },
    {
        "state": "IL",
        "city": "Genoa",
        "lat": 42.0926,
        "lng": -88.6964
    },
    {
        "state": "FL",
        "city": "Fussels Corner",
        "lat": 28.0574,
        "lng": -81.861
    },
    {
        "state": "FL",
        "city": "Kenneth City",
        "lat": 27.8156,
        "lng": -82.7162
    },
    {
        "state": "IL",
        "city": "Carmi",
        "lat": 38.0861,
        "lng": -88.1722
    },
    {
        "state": "CA",
        "city": "McSwain",
        "lat": 37.3145,
        "lng": -120.5868
    },
    {
        "state": "CA",
        "city": "Pacheco",
        "lat": 37.9878,
        "lng": -122.07
    },
    {
        "state": "NJ",
        "city": "Beattystown",
        "lat": 40.8222,
        "lng": -74.8502
    },
    {
        "state": "OH",
        "city": "Munroe Falls",
        "lat": 41.1386,
        "lng": -81.4344
    },
    {
        "state": "LA",
        "city": "Marksville",
        "lat": 31.1246,
        "lng": -92.0652
    },
    {
        "state": "FL",
        "city": "Cortez",
        "lat": 27.4668,
        "lng": -82.6688
    },
    {
        "state": "NY",
        "city": "West Sayville",
        "lat": 40.7295,
        "lng": -73.1051
    },
    {
        "state": "CO",
        "city": "Meridian",
        "lat": 39.5458,
        "lng": -104.8533
    },
    {
        "state": "NC",
        "city": "Long View",
        "lat": 35.7217,
        "lng": -81.3857
    },
    {
        "state": "PA",
        "city": "Manheim",
        "lat": 40.163,
        "lng": -76.3964
    },
    {
        "state": "AL",
        "city": "Headland",
        "lat": 31.3501,
        "lng": -85.3523
    },
    {
        "state": "NC",
        "city": "Sawmills",
        "lat": 35.8165,
        "lng": -81.4781
    },
    {
        "state": "OK",
        "city": "Lone Grove",
        "lat": 34.1809,
        "lng": -97.2559
    },
    {
        "state": "HI",
        "city": "East Kapolei",
        "lat": 21.3633,
        "lng": -158.041
    },
    {
        "state": "OK",
        "city": "Sulphur",
        "lat": 34.4979,
        "lng": -96.9898
    },
    {
        "state": "AZ",
        "city": "Summit",
        "lat": 32.0617,
        "lng": -110.9485
    },
    {
        "state": "PA",
        "city": "Swoyersville",
        "lat": 41.2977,
        "lng": -75.8799
    },
    {
        "state": "OK",
        "city": "Alva",
        "lat": 36.7895,
        "lng": -98.6649
    },
    {
        "state": "LA",
        "city": "Carlyss",
        "lat": 30.1761,
        "lng": -93.3704
    },
    {
        "state": "TX",
        "city": "Giddings",
        "lat": 30.1833,
        "lng": -96.9279
    },
    {
        "state": "IN",
        "city": "North Manchester",
        "lat": 41.0044,
        "lng": -85.7751
    },
    {
        "state": "CO",
        "city": "Breckenridge",
        "lat": 39.4995,
        "lng": -106.0432
    },
    {
        "state": "FL",
        "city": "Pensacola Station",
        "lat": 30.3541,
        "lng": -87.305
    },
    {
        "state": "CA",
        "city": "Lakeport",
        "lat": 39.0392,
        "lng": -122.9218
    },
    {
        "state": "NY",
        "city": "Ardsley",
        "lat": 41.0134,
        "lng": -73.8394
    },
    {
        "state": "GA",
        "city": "Social Circle",
        "lat": 33.6505,
        "lng": -83.7116
    },
    {
        "state": "IA",
        "city": "Sergeant Bluff",
        "lat": 42.3978,
        "lng": -96.3517
    },
    {
        "state": "PR",
        "city": "Coco",
        "lat": 18.0009,
        "lng": -66.2602
    },
    {
        "state": "CA",
        "city": "Jackson",
        "lat": 38.3485,
        "lng": -120.7728
    },
    {
        "state": "SC",
        "city": "Batesburg-Leesville",
        "lat": 33.9126,
        "lng": -81.5313
    },
    {
        "state": "NC",
        "city": "Wadesboro",
        "lat": 34.9645,
        "lng": -80.0746
    },
    {
        "state": "CA",
        "city": "Oakhurst",
        "lat": 37.3475,
        "lng": -119.6202
    },
    {
        "state": "NJ",
        "city": "Forked River",
        "lat": 39.8257,
        "lng": -74.1819
    },
    {
        "state": "AR",
        "city": "Sheridan",
        "lat": 34.2996,
        "lng": -92.4223
    },
    {
        "state": "MD",
        "city": "Hillandale",
        "lat": 39.0249,
        "lng": -76.9737
    },
    {
        "state": "NC",
        "city": "Ayden",
        "lat": 35.4693,
        "lng": -77.4167
    },
    {
        "state": "CO",
        "city": "Edgewater",
        "lat": 39.7508,
        "lng": -105.0627
    },
    {
        "state": "IL",
        "city": "South Barrington",
        "lat": 42.0881,
        "lng": -88.158
    },
    {
        "state": "PA",
        "city": "Bridgeport",
        "lat": 40.1042,
        "lng": -75.3437
    },
    {
        "state": "NM",
        "city": "El Cerro Mission",
        "lat": 34.7688,
        "lng": -106.6447
    },
    {
        "state": "CT",
        "city": "Terryville",
        "lat": 41.6784,
        "lng": -73.0064
    },
    {
        "state": "MN",
        "city": "Circle Pines",
        "lat": 45.1409,
        "lng": -93.1505
    },
    {
        "state": "PR",
        "city": "Las Piedras",
        "lat": 18.1787,
        "lng": -65.8711
    },
    {
        "state": "VA",
        "city": "Stafford Courthouse",
        "lat": 38.4184,
        "lng": -77.4202
    },
    {
        "state": "WI",
        "city": "Dodgeville",
        "lat": 42.966,
        "lng": -90.1297
    },
    {
        "state": "NC",
        "city": "Pleasant Garden",
        "lat": 35.9595,
        "lng": -79.76
    },
    {
        "state": "AL",
        "city": "Holtville",
        "lat": 32.6314,
        "lng": -86.3268
    },
    {
        "state": "MD",
        "city": "Middletown",
        "lat": 39.4415,
        "lng": -77.5347
    },
    {
        "state": "CA",
        "city": "Lake Wildwood",
        "lat": 39.2349,
        "lng": -121.2002
    },
    {
        "state": "CA",
        "city": "Goshen",
        "lat": 36.3493,
        "lng": -119.4206
    },
    {
        "state": "AZ",
        "city": "Bisbee",
        "lat": 31.4126,
        "lng": -109.9178
    },
    {
        "state": "MS",
        "city": "Aberdeen",
        "lat": 33.8287,
        "lng": -88.5539
    },
    {
        "state": "GA",
        "city": "Baxley",
        "lat": 31.7641,
        "lng": -82.3509
    },
    {
        "state": "CA",
        "city": "Willits",
        "lat": 39.4047,
        "lng": -123.3494
    },
    {
        "state": "AZ",
        "city": "Cave Creek",
        "lat": 33.8513,
        "lng": -111.9801
    },
    {
        "state": "MO",
        "city": "Ste. Genevieve",
        "lat": 37.9755,
        "lng": -90.0477
    },
    {
        "state": "VA",
        "city": "Chamberlayne",
        "lat": 37.628,
        "lng": -77.4288
    },
    {
        "state": "PA",
        "city": "Westmont",
        "lat": 40.3194,
        "lng": -78.9525
    },
    {
        "state": "CA",
        "city": "Sonora",
        "lat": 37.9819,
        "lng": -120.3828
    },
    {
        "state": "FL",
        "city": "LaBelle",
        "lat": 26.7219,
        "lng": -81.4506
    },
    {
        "state": "PA",
        "city": "New Freedom",
        "lat": 39.7353,
        "lng": -76.6967
    },
    {
        "state": "AL",
        "city": "Redland",
        "lat": 32.4754,
        "lng": -86.1375
    },
    {
        "state": "NJ",
        "city": "Golden Triangle",
        "lat": 39.9288,
        "lng": -75.0398
    },
    {
        "state": "MD",
        "city": "Shady Side",
        "lat": 38.8285,
        "lng": -76.5207
    },
    {
        "state": "PA",
        "city": "Edinboro",
        "lat": 41.8762,
        "lng": -80.1247
    },
    {
        "state": "WA",
        "city": "Moses Lake North",
        "lat": 47.1949,
        "lng": -119.3178
    },
    {
        "state": "TX",
        "city": "Oak Point",
        "lat": 33.1795,
        "lng": -96.9907
    },
    {
        "state": "TX",
        "city": "Hudson",
        "lat": 31.3287,
        "lng": -94.8014
    },
    {
        "state": "NJ",
        "city": "Brielle",
        "lat": 40.1048,
        "lng": -74.0637
    },
    {
        "state": "OH",
        "city": "Lexington",
        "lat": 40.68,
        "lng": -82.5793
    },
    {
        "state": "LA",
        "city": "Port Allen",
        "lat": 30.4456,
        "lng": -91.2098
    },
    {
        "state": "IA",
        "city": "Vinton",
        "lat": 42.1631,
        "lng": -92.026
    },
    {
        "state": "MT",
        "city": "Bigfork",
        "lat": 48.0852,
        "lng": -114.0551
    },
    {
        "state": "MI",
        "city": "Gibraltar",
        "lat": 42.096,
        "lng": -83.2029
    },
    {
        "state": "TN",
        "city": "Sparta",
        "lat": 35.9347,
        "lng": -85.4726
    },
    {
        "state": "MD",
        "city": "Springdale",
        "lat": 38.9363,
        "lng": -76.8442
    },
    {
        "state": "NY",
        "city": "Island Park",
        "lat": 40.6051,
        "lng": -73.6553
    },
    {
        "state": "OK",
        "city": "Kingfisher",
        "lat": 35.8444,
        "lng": -97.9386
    },
    {
        "state": "CA",
        "city": "Myrtletown",
        "lat": 40.7888,
        "lng": -124.1286
    },
    {
        "state": "TN",
        "city": "Pleasant View",
        "lat": 36.3893,
        "lng": -87.0455
    },
    {
        "state": "ND",
        "city": "Minot AFB",
        "lat": 48.4209,
        "lng": -101.3381
    },
    {
        "state": "KS",
        "city": "Louisburg",
        "lat": 38.6202,
        "lng": -94.677
    },
    {
        "state": "IL",
        "city": "Hoopeston",
        "lat": 40.4608,
        "lng": -87.6635
    },
    {
        "state": "TX",
        "city": "Lavon",
        "lat": 33.0252,
        "lng": -96.4381
    },
    {
        "state": "NC",
        "city": "Whispering Pines",
        "lat": 35.2537,
        "lng": -79.3754
    },
    {
        "state": "IN",
        "city": "Pendleton",
        "lat": 40.0066,
        "lng": -85.7711
    },
    {
        "state": "CA",
        "city": "Mayfair",
        "lat": 36.7694,
        "lng": -119.7612
    },
    {
        "state": "OH",
        "city": "Reedurban",
        "lat": 40.7979,
        "lng": -81.4358
    },
    {
        "state": "NC",
        "city": "Granite Falls",
        "lat": 35.797,
        "lng": -81.4237
    },
    {
        "state": "NY",
        "city": "Westvale",
        "lat": 43.0399,
        "lng": -76.2176
    },
    {
        "state": "NJ",
        "city": "Franklin",
        "lat": 41.1101,
        "lng": -74.5886
    },
    {
        "state": "NJ",
        "city": "Demarest",
        "lat": 40.955,
        "lng": -73.9568
    },
    {
        "state": "IA",
        "city": "Shenandoah",
        "lat": 40.7582,
        "lng": -95.372
    },
    {
        "state": "FL",
        "city": "Orangetree",
        "lat": 26.2929,
        "lng": -81.5786
    },
    {
        "state": "WA",
        "city": "Colville",
        "lat": 48.5454,
        "lng": -117.8985
    },
    {
        "state": "CA",
        "city": "Bret Harte",
        "lat": 37.6021,
        "lng": -121.0045
    },
    {
        "state": "CT",
        "city": "Quinnipiac University",
        "lat": 41.4174,
        "lng": -72.8992
    },
    {
        "state": "PA",
        "city": "Edwardsville",
        "lat": 41.2613,
        "lng": -75.9071
    },
    {
        "state": "OH",
        "city": "Mount Carmel",
        "lat": 39.0978,
        "lng": -84.2995
    },
    {
        "state": "TN",
        "city": "Forest Hills",
        "lat": 36.0652,
        "lng": -86.8403
    },
    {
        "state": "IL",
        "city": "Olympia Fields",
        "lat": 41.517,
        "lng": -87.6924
    },
    {
        "state": "NJ",
        "city": "Beach Haven West",
        "lat": 39.6703,
        "lng": -74.2338
    },
    {
        "state": "VA",
        "city": "Orange",
        "lat": 38.2485,
        "lng": -78.1129
    },
    {
        "state": "PA",
        "city": "Royersford",
        "lat": 40.1862,
        "lng": -75.5382
    },
    {
        "state": "WI",
        "city": "Union Grove",
        "lat": 42.6864,
        "lng": -88.0496
    },
    {
        "state": "VA",
        "city": "Rocky Mount",
        "lat": 37.0045,
        "lng": -79.8854
    },
    {
        "state": "TX",
        "city": "Progreso",
        "lat": 26.0962,
        "lng": -97.9566
    },
    {
        "state": "NM",
        "city": "Rio Communities",
        "lat": 34.6459,
        "lng": -106.7164
    },
    {
        "state": "GA",
        "city": "Hiram",
        "lat": 33.8777,
        "lng": -84.771
    },
    {
        "state": "GA",
        "city": "Adairsville",
        "lat": 34.3709,
        "lng": -84.9212
    },
    {
        "state": "MS",
        "city": "Saltillo",
        "lat": 34.379,
        "lng": -88.6938
    },
    {
        "state": "MN",
        "city": "Luverne",
        "lat": 43.6531,
        "lng": -96.2148
    },
    {
        "state": "WA",
        "city": "Medical Lake",
        "lat": 47.5712,
        "lng": -117.6893
    },
    {
        "state": "GA",
        "city": "Nashville",
        "lat": 31.2048,
        "lng": -83.2478
    },
    {
        "state": "MI",
        "city": "Michigan Center",
        "lat": 42.2268,
        "lng": -84.323
    },
    {
        "state": "TX",
        "city": "Hickory Creek",
        "lat": 33.1109,
        "lng": -97.0308
    },
    {
        "state": "AL",
        "city": "Daleville",
        "lat": 31.2915,
        "lng": -85.7117
    },
    {
        "state": "MO",
        "city": "Dellwood",
        "lat": 38.7564,
        "lng": -90.2766
    },
    {
        "state": "MN",
        "city": "Princeton",
        "lat": 45.5688,
        "lng": -93.5899
    },
    {
        "state": "FL",
        "city": "Wauchula",
        "lat": 27.5469,
        "lng": -81.8102
    },
    {
        "state": "MN",
        "city": "Becker",
        "lat": 45.3824,
        "lng": -93.8772
    },
    {
        "state": "IA",
        "city": "Harlan",
        "lat": 41.6495,
        "lng": -95.3268
    },
    {
        "state": "CA",
        "city": "Needles",
        "lat": 34.8164,
        "lng": -114.6189
    },
    {
        "state": "NC",
        "city": "Archer Lodge",
        "lat": 35.6907,
        "lng": -78.3749
    },
    {
        "state": "SC",
        "city": "Abbeville",
        "lat": 34.1787,
        "lng": -82.3774
    },
    {
        "state": "TX",
        "city": "Gilmer",
        "lat": 32.7318,
        "lng": -94.9461
    },
    {
        "state": "MN",
        "city": "Lindstrom",
        "lat": 45.387,
        "lng": -92.8477
    },
    {
        "state": "SC",
        "city": "Blythewood",
        "lat": 34.2121,
        "lng": -80.9921
    },
    {
        "state": "PA",
        "city": "Treasure Lake",
        "lat": 41.1677,
        "lng": -78.7187
    },
    {
        "state": "CT",
        "city": "Stafford Springs",
        "lat": 41.9595,
        "lng": -72.3105
    },
    {
        "state": "FL",
        "city": "Valparaiso",
        "lat": 30.4926,
        "lng": -86.5079
    },
    {
        "state": "TX",
        "city": "Carrizo Springs",
        "lat": 28.5267,
        "lng": -99.8589
    },
    {
        "state": "WI",
        "city": "Lake Wisconsin",
        "lat": 43.3739,
        "lng": -89.5858
    },
    {
        "state": "NJ",
        "city": "McGuire AFB",
        "lat": 40.0285,
        "lng": -74.5883
    },
    {
        "state": "FL",
        "city": "Fellsmere",
        "lat": 27.7241,
        "lng": -80.5974
    },
    {
        "state": "NY",
        "city": "Chittenango",
        "lat": 43.0462,
        "lng": -75.8748
    },
    {
        "state": "OH",
        "city": "Silverton",
        "lat": 39.1884,
        "lng": -84.401
    },
    {
        "state": "FL",
        "city": "Combee Settlement",
        "lat": 28.0597,
        "lng": -81.9051
    },
    {
        "state": "WV",
        "city": "Keyser",
        "lat": 39.4394,
        "lng": -78.9821
    },
    {
        "state": "TX",
        "city": "Mineola",
        "lat": 32.6462,
        "lng": -95.4774
    },
    {
        "state": "ID",
        "city": "Shelley",
        "lat": 43.3795,
        "lng": -112.1261
    },
    {
        "state": "WA",
        "city": "Omak",
        "lat": 48.4229,
        "lng": -119.5159
    },
    {
        "state": "FL",
        "city": "Sawgrass",
        "lat": 30.19,
        "lng": -81.3704
    },
    {
        "state": "AK",
        "city": "Utqiagvik",
        "lat": 71.2727,
        "lng": -156.7575
    },
    {
        "state": "NC",
        "city": "Wrightsboro",
        "lat": 34.2895,
        "lng": -77.9217
    },
    {
        "state": "MO",
        "city": "Desloge",
        "lat": 37.8751,
        "lng": -90.5191
    },
    {
        "state": "CO",
        "city": "New Castle",
        "lat": 39.5776,
        "lng": -107.5267
    },
    {
        "state": "AL",
        "city": "Odenville",
        "lat": 33.6978,
        "lng": -86.4228
    },
    {
        "state": "PR",
        "city": "Lares",
        "lat": 18.2964,
        "lng": -66.8836
    },
    {
        "state": "NC",
        "city": "Creedmoor",
        "lat": 36.1224,
        "lng": -78.6757
    },
    {
        "state": "PA",
        "city": "Green Tree",
        "lat": 40.417,
        "lng": -80.0544
    },
    {
        "state": "LA",
        "city": "Avondale",
        "lat": 29.9072,
        "lng": -90.1933
    },
    {
        "state": "FL",
        "city": "Gifford",
        "lat": 27.6756,
        "lng": -80.4252
    },
    {
        "state": "GA",
        "city": "Cochran",
        "lat": 32.3875,
        "lng": -83.3523
    },
    {
        "state": "NJ",
        "city": "Spring Lake Heights",
        "lat": 40.1521,
        "lng": -74.043
    },
    {
        "state": "NJ",
        "city": "Flemington",
        "lat": 40.5087,
        "lng": -74.8599
    },
    {
        "state": "MT",
        "city": "Glendive",
        "lat": 47.1101,
        "lng": -104.707
    },
    {
        "state": "MS",
        "city": "Carthage",
        "lat": 32.7431,
        "lng": -89.5337
    },
    {
        "state": "NM",
        "city": "Lee Acres",
        "lat": 36.7031,
        "lng": -108.0648
    },
    {
        "state": "FL",
        "city": "South Sarasota",
        "lat": 27.2857,
        "lng": -82.5332
    },
    {
        "state": "NH",
        "city": "Pinardville",
        "lat": 43.001,
        "lng": -71.5171
    },
    {
        "state": "MN",
        "city": "Elko New Market",
        "lat": 44.5665,
        "lng": -93.338
    },
    {
        "state": "PA",
        "city": "Skyline View",
        "lat": 40.3376,
        "lng": -76.7256
    },
    {
        "state": "CO",
        "city": "Manitou Springs",
        "lat": 38.8575,
        "lng": -104.9127
    },
    {
        "state": "LA",
        "city": "Westlake",
        "lat": 30.2606,
        "lng": -93.2638
    },
    {
        "state": "TX",
        "city": "Van Alstyne",
        "lat": 33.4216,
        "lng": -96.5838
    },
    {
        "state": "IA",
        "city": "Tiffin",
        "lat": 41.7064,
        "lng": -91.6583
    },
    {
        "state": "WA",
        "city": "Prairie Heights",
        "lat": 47.1529,
        "lng": -122.1048
    },
    {
        "state": "KS",
        "city": "Baldwin City",
        "lat": 38.7782,
        "lng": -95.188
    },
    {
        "state": "AZ",
        "city": "Holbrook",
        "lat": 34.9044,
        "lng": -110.1672
    },
    {
        "state": "NJ",
        "city": "Penns Grove",
        "lat": 39.7275,
        "lng": -75.4691
    },
    {
        "state": "NC",
        "city": "Ahoskie",
        "lat": 36.2842,
        "lng": -76.9902
    },
    {
        "state": "GA",
        "city": "Chatsworth",
        "lat": 34.7808,
        "lng": -84.7835
    },
    {
        "state": "PA",
        "city": "Spring House",
        "lat": 40.185,
        "lng": -75.2267
    },
    {
        "state": "NM",
        "city": "Los Chaves",
        "lat": 34.7334,
        "lng": -106.7611
    },
    {
        "state": "NJ",
        "city": "South Bound Brook",
        "lat": 40.5535,
        "lng": -74.5277
    },
    {
        "state": "VA",
        "city": "Luray",
        "lat": 38.665,
        "lng": -78.4546
    },
    {
        "state": "IL",
        "city": "Palos Park",
        "lat": 41.6679,
        "lng": -87.8891
    },
    {
        "state": "MD",
        "city": "Denton",
        "lat": 38.877,
        "lng": -75.8264
    },
    {
        "state": "NE",
        "city": "Ogallala",
        "lat": 41.1292,
        "lng": -101.7211
    },
    {
        "state": "NM",
        "city": "Crouch Mesa",
        "lat": 36.748,
        "lng": -108.0853
    },
    {
        "state": "AR",
        "city": "Barling",
        "lat": 35.3284,
        "lng": -94.2791
    },
    {
        "state": "CO",
        "city": "Vail",
        "lat": 39.6385,
        "lng": -106.3613
    },
    {
        "state": "AL",
        "city": "Winfield",
        "lat": 33.9334,
        "lng": -87.7961
    },
    {
        "state": "NE",
        "city": "Wahoo",
        "lat": 41.2166,
        "lng": -96.6172
    },
    {
        "state": "CA",
        "city": "Indian Wells",
        "lat": 33.7036,
        "lng": -116.3396
    },
    {
        "state": "FL",
        "city": "Butler Beach",
        "lat": 29.798,
        "lng": -81.2653
    },
    {
        "state": "FL",
        "city": "South Bay",
        "lat": 26.677,
        "lng": -80.7265
    },
    {
        "state": "FL",
        "city": "Floral City",
        "lat": 28.7065,
        "lng": -82.309
    },
    {
        "state": "MO",
        "city": "Wright City",
        "lat": 38.8341,
        "lng": -91.0399
    },
    {
        "state": "NJ",
        "city": "Harrington Park",
        "lat": 40.9899,
        "lng": -73.9804
    },
    {
        "state": "VA",
        "city": "King George",
        "lat": 38.2807,
        "lng": -77.1896
    },
    {
        "state": "AL",
        "city": "Springville",
        "lat": 33.7643,
        "lng": -86.4742
    },
    {
        "state": "LA",
        "city": "Winnsboro",
        "lat": 32.165,
        "lng": -91.721
    },
    {
        "state": "IN",
        "city": "Clinton",
        "lat": 39.6608,
        "lng": -87.4045
    },
    {
        "state": "MS",
        "city": "Crystal Springs",
        "lat": 31.9903,
        "lng": -90.354
    },
    {
        "state": "PA",
        "city": "Fountain Hill",
        "lat": 40.6029,
        "lng": -75.3961
    },
    {
        "state": "UT",
        "city": "Kanab",
        "lat": 37.0262,
        "lng": -112.5219
    },
    {
        "state": "GA",
        "city": "Buckhead",
        "lat": 31.8613,
        "lng": -81.2623
    },
    {
        "state": "WY",
        "city": "Worland",
        "lat": 44.0025,
        "lng": -107.9544
    },
    {
        "state": "FL",
        "city": "Ridge Wood Heights",
        "lat": 27.2874,
        "lng": -82.5137
    },
    {
        "state": "KY",
        "city": "Columbia",
        "lat": 37.1036,
        "lng": -85.3073
    },
    {
        "state": "OK",
        "city": "Hinton",
        "lat": 35.4895,
        "lng": -98.3575
    },
    {
        "state": "PA",
        "city": "Telford",
        "lat": 40.3259,
        "lng": -75.3274
    },
    {
        "state": "LA",
        "city": "Jeanerette",
        "lat": 29.9157,
        "lng": -91.6758
    },
    {
        "state": "MT",
        "city": "Hamilton",
        "lat": 46.2527,
        "lng": -114.1598
    },
    {
        "state": "AR",
        "city": "Crossett",
        "lat": 33.128,
        "lng": -91.9631
    },
    {
        "state": "MI",
        "city": "Coopersville",
        "lat": 43.0658,
        "lng": -85.9341
    },
    {
        "state": "IL",
        "city": "Robbins",
        "lat": 41.6431,
        "lng": -87.7081
    },
    {
        "state": "LA",
        "city": "Swartz",
        "lat": 32.5809,
        "lng": -91.9869
    },
    {
        "state": "NJ",
        "city": "Landing",
        "lat": 40.9078,
        "lng": -74.6593
    },
    {
        "state": "NY",
        "city": "Glen Head",
        "lat": 40.8449,
        "lng": -73.618
    },
    {
        "state": "NY",
        "city": "Mattituck",
        "lat": 41.0012,
        "lng": -72.5419
    },
    {
        "state": "FL",
        "city": "Mount Plymouth",
        "lat": 28.8024,
        "lng": -81.5351
    },
    {
        "state": "NY",
        "city": "Noyack",
        "lat": 40.9826,
        "lng": -72.335
    },
    {
        "state": "NY",
        "city": "West Elmira",
        "lat": 42.0879,
        "lng": -76.8472
    },
    {
        "state": "MN",
        "city": "Oak Park Heights",
        "lat": 45.0324,
        "lng": -92.8098
    },
    {
        "state": "NY",
        "city": "Flower Hill",
        "lat": 40.8075,
        "lng": -73.6755
    },
    {
        "state": "NJ",
        "city": "Point Pleasant Beach",
        "lat": 40.0928,
        "lng": -74.0459
    },
    {
        "state": "HI",
        "city": "Heeia",
        "lat": 21.4205,
        "lng": -157.8205
    },
    {
        "state": "PA",
        "city": "Sugarcreek",
        "lat": 41.438,
        "lng": -79.8183
    },
    {
        "state": "MD",
        "city": "Riva",
        "lat": 38.9448,
        "lng": -76.5876
    },
    {
        "state": "FL",
        "city": "Brookridge",
        "lat": 28.5483,
        "lng": -82.4897
    },
    {
        "state": "MI",
        "city": "Cheboygan",
        "lat": 45.641,
        "lng": -84.4687
    },
    {
        "state": "OH",
        "city": "Ottawa Hills",
        "lat": 41.6682,
        "lng": -83.6433
    },
    {
        "state": "TN",
        "city": "Mount Pleasant",
        "lat": 35.5483,
        "lng": -87.1872
    },
    {
        "state": "MO",
        "city": "Platte City",
        "lat": 39.3574,
        "lng": -94.7651
    },
    {
        "state": "PA",
        "city": "Littlestown",
        "lat": 39.7452,
        "lng": -77.0892
    },
    {
        "state": "MI",
        "city": "DeWitt",
        "lat": 42.8364,
        "lng": -84.575
    },
    {
        "state": "PA",
        "city": "Arnold",
        "lat": 40.5788,
        "lng": -79.7655
    },
    {
        "state": "PA",
        "city": "Bridgeville",
        "lat": 40.3578,
        "lng": -80.1061
    },
    {
        "state": "MO",
        "city": "Higginsville",
        "lat": 39.0652,
        "lng": -93.727
    },
    {
        "state": "IA",
        "city": "Humboldt",
        "lat": 42.7229,
        "lng": -94.2241
    },
    {
        "state": "NY",
        "city": "Dansville",
        "lat": 42.5625,
        "lng": -77.6968
    },
    {
        "state": "IL",
        "city": "Fairfield",
        "lat": 38.3798,
        "lng": -88.3723
    },
    {
        "state": "NC",
        "city": "Midway",
        "lat": 35.9751,
        "lng": -80.2204
    },
    {
        "state": "MO",
        "city": "St. Clair",
        "lat": 38.348,
        "lng": -90.9933
    },
    {
        "state": "OH",
        "city": "Whitehouse",
        "lat": 41.5215,
        "lng": -83.7958
    },
    {
        "state": "NY",
        "city": "Northwest Harbor",
        "lat": 41.0086,
        "lng": -72.2287
    },
    {
        "state": "MN",
        "city": "Windom",
        "lat": 43.8736,
        "lng": -95.1201
    },
    {
        "state": "NJ",
        "city": "Northvale",
        "lat": 41.0101,
        "lng": -73.9505
    },
    {
        "state": "MO",
        "city": "Herculaneum",
        "lat": 38.2579,
        "lng": -90.3948
    },
    {
        "state": "LA",
        "city": "Monticello",
        "lat": 30.4881,
        "lng": -91.0448
    },
    {
        "state": "PR",
        "city": "Adjuntas",
        "lat": 18.1638,
        "lng": -66.7235
    },
    {
        "state": "CA",
        "city": "Guerneville",
        "lat": 38.5137,
        "lng": -122.9894
    },
    {
        "state": "TN",
        "city": "Oak Hill",
        "lat": 36.0735,
        "lng": -86.7856
    },
    {
        "state": "CT",
        "city": "Lake Pocotopaug",
        "lat": 41.596,
        "lng": -72.51
    },
    {
        "state": "AL",
        "city": "Piedmont",
        "lat": 33.9269,
        "lng": -85.6149
    },
    {
        "state": "NC",
        "city": "Whiteville",
        "lat": 34.3306,
        "lng": -78.7014
    },
    {
        "state": "PA",
        "city": "Spry",
        "lat": 39.9125,
        "lng": -76.6864
    },
    {
        "state": "MN",
        "city": "Chisholm",
        "lat": 47.4877,
        "lng": -92.8786
    },
    {
        "state": "TN",
        "city": "Christiana",
        "lat": 35.7193,
        "lng": -86.4129
    },
    {
        "state": "FL",
        "city": "June Park",
        "lat": 28.072,
        "lng": -80.6876
    },
    {
        "state": "MN",
        "city": "St. James",
        "lat": 43.9833,
        "lng": -94.6249
    },
    {
        "state": "CA",
        "city": "Brisbane",
        "lat": 37.6902,
        "lng": -122.4021
    },
    {
        "state": "KY",
        "city": "Benton",
        "lat": 36.8479,
        "lng": -88.3602
    },
    {
        "state": "LA",
        "city": "Violet",
        "lat": 29.8962,
        "lng": -89.892
    },
    {
        "state": "MD",
        "city": "Cresaptown",
        "lat": 39.5944,
        "lng": -78.8356
    },
    {
        "state": "NM",
        "city": "Meadow Lake",
        "lat": 34.8024,
        "lng": -106.5701
    },
    {
        "state": "NY",
        "city": "Orangeburg",
        "lat": 41.0488,
        "lng": -73.9408
    },
    {
        "state": "KS",
        "city": "Edwardsville",
        "lat": 39.0765,
        "lng": -94.8166
    },
    {
        "state": "AL",
        "city": "Childersburg",
        "lat": 33.2962,
        "lng": -86.3456
    },
    {
        "state": "LA",
        "city": "Springhill",
        "lat": 33.0019,
        "lng": -93.4613
    },
    {
        "state": "PA",
        "city": "Avalon",
        "lat": 40.5011,
        "lng": -80.068
    },
    {
        "state": "MO",
        "city": "Osage Beach",
        "lat": 38.1353,
        "lng": -92.6478
    },
    {
        "state": "IL",
        "city": "Cortland",
        "lat": 41.9255,
        "lng": -88.6794
    },
    {
        "state": "TN",
        "city": "Whiteville",
        "lat": 35.318,
        "lng": -89.1498
    },
    {
        "state": "FL",
        "city": "Lower Grand Lagoon",
        "lat": 30.1444,
        "lng": -85.7526
    },
    {
        "state": "TX",
        "city": "Justin",
        "lat": 33.0882,
        "lng": -97.3041
    },
    {
        "state": "MO",
        "city": "Ashland",
        "lat": 38.7927,
        "lng": -92.2479
    },
    {
        "state": "MO",
        "city": "Rock Hill",
        "lat": 38.6091,
        "lng": -90.3673
    },
    {
        "state": "MN",
        "city": "Lonsdale",
        "lat": 44.4778,
        "lng": -93.4225
    },
    {
        "state": "IL",
        "city": "Poplar Grove",
        "lat": 42.3517,
        "lng": -88.8353
    },
    {
        "state": "PA",
        "city": "Montoursville",
        "lat": 41.2472,
        "lng": -76.9184
    },
    {
        "state": "OH",
        "city": "East Palestine",
        "lat": 40.8392,
        "lng": -80.5467
    },
    {
        "state": "KY",
        "city": "Massac",
        "lat": 37.0335,
        "lng": -88.6858
    },
    {
        "state": "MO",
        "city": "Crystal City",
        "lat": 38.2227,
        "lng": -90.3813
    },
    {
        "state": "TX",
        "city": "Meadows Place",
        "lat": 29.6513,
        "lng": -95.5874
    },
    {
        "state": "AL",
        "city": "Jackson",
        "lat": 31.5318,
        "lng": -87.8915
    },
    {
        "state": "MA",
        "city": "Millis-Clicquot",
        "lat": 42.1648,
        "lng": -71.3544
    },
    {
        "state": "OH",
        "city": "West Milton",
        "lat": 39.9585,
        "lng": -84.3261
    },
    {
        "state": "LA",
        "city": "Berwick",
        "lat": 29.7013,
        "lng": -91.2377
    },
    {
        "state": "NY",
        "city": "Brewerton",
        "lat": 43.2345,
        "lng": -76.141
    },
    {
        "state": "CA",
        "city": "Santa Ynez",
        "lat": 34.6168,
        "lng": -120.0948
    },
    {
        "state": "TX",
        "city": "Richwood",
        "lat": 29.0723,
        "lng": -95.4046
    },
    {
        "state": "MN",
        "city": "Watertown",
        "lat": 44.9604,
        "lng": -93.8431
    },
    {
        "state": "CA",
        "city": "Mather",
        "lat": 38.5488,
        "lng": -121.2831
    },
    {
        "state": "WV",
        "city": "Grafton",
        "lat": 39.3409,
        "lng": -80.0162
    },
    {
        "state": "HI",
        "city": "Haleiwa",
        "lat": 21.5965,
        "lng": -158.1003
    },
    {
        "state": "IL",
        "city": "Tuscola",
        "lat": 39.7968,
        "lng": -88.2749
    },
    {
        "state": "TX",
        "city": "Potosi",
        "lat": 32.3404,
        "lng": -99.6789
    },
    {
        "state": "MD",
        "city": "Deale",
        "lat": 38.791,
        "lng": -76.5469
    },
    {
        "state": "FL",
        "city": "River Ridge",
        "lat": 28.2669,
        "lng": -82.6257
    },
    {
        "state": "PA",
        "city": "Kenmar",
        "lat": 41.2547,
        "lng": -76.955
    },
    {
        "state": "CA",
        "city": "Lake of the Pines",
        "lat": 39.0357,
        "lng": -121.059
    },
    {
        "state": "PA",
        "city": "Jenkintown",
        "lat": 40.0962,
        "lng": -75.1296
    },
    {
        "state": "IL",
        "city": "Flora",
        "lat": 38.6688,
        "lng": -88.4758
    },
    {
        "state": "TX",
        "city": "Lake Worth",
        "lat": 32.813,
        "lng": -97.4306
    },
    {
        "state": "NC",
        "city": "Locust",
        "lat": 35.2688,
        "lng": -80.4369
    },
    {
        "state": "MD",
        "city": "Centreville",
        "lat": 39.042,
        "lng": -76.063
    },
    {
        "state": "NY",
        "city": "Searingtown",
        "lat": 40.7705,
        "lng": -73.6603
    },
    {
        "state": "IL",
        "city": "Lakewood",
        "lat": 42.2279,
        "lng": -88.3931
    },
    {
        "state": "ID",
        "city": "Kimberly",
        "lat": 42.5342,
        "lng": -114.3699
    },
    {
        "state": "IL",
        "city": "Creve Coeur",
        "lat": 40.6426,
        "lng": -89.5981
    },
    {
        "state": "NY",
        "city": "Hawthorne",
        "lat": 41.1035,
        "lng": -73.7968
    },
    {
        "state": "WI",
        "city": "Okauchee Lake",
        "lat": 43.1256,
        "lng": -88.4385
    },
    {
        "state": "VA",
        "city": "Falmouth",
        "lat": 38.3319,
        "lng": -77.4655
    },
    {
        "state": "WA",
        "city": "Wauna",
        "lat": 47.386,
        "lng": -122.6695
    },
    {
        "state": "MO",
        "city": "Charleston",
        "lat": 36.9179,
        "lng": -89.3343
    },
    {
        "state": "VA",
        "city": "South Hill",
        "lat": 36.7254,
        "lng": -78.1287
    },
    {
        "state": "IL",
        "city": "Lebanon",
        "lat": 38.6005,
        "lng": -89.8114
    },
    {
        "state": "NC",
        "city": "Valdese",
        "lat": 35.7566,
        "lng": -81.5634
    },
    {
        "state": "NC",
        "city": "Royal Pines",
        "lat": 35.4783,
        "lng": -82.5038
    },
    {
        "state": "IA",
        "city": "Le Claire",
        "lat": 41.5963,
        "lng": -90.3686
    },
    {
        "state": "NC",
        "city": "Midland",
        "lat": 35.245,
        "lng": -80.5212
    },
    {
        "state": "LA",
        "city": "Mansfield",
        "lat": 32.0355,
        "lng": -93.7004
    },
    {
        "state": "MO",
        "city": "Salem",
        "lat": 37.6399,
        "lng": -91.5345
    },
    {
        "state": "VA",
        "city": "Bealeton",
        "lat": 38.5822,
        "lng": -77.7781
    },
    {
        "state": "WI",
        "city": "East Troy",
        "lat": 42.7846,
        "lng": -88.3973
    },
    {
        "state": "IN",
        "city": "Bremen",
        "lat": 41.4484,
        "lng": -86.1505
    },
    {
        "state": "PA",
        "city": "Grantley",
        "lat": 39.9386,
        "lng": -76.7297
    },
    {
        "state": "GA",
        "city": "Lakeview",
        "lat": 34.9777,
        "lng": -85.2539
    },
    {
        "state": "PA",
        "city": "West Pittston",
        "lat": 41.3296,
        "lng": -75.8
    },
    {
        "state": "PA",
        "city": "Lemoyne",
        "lat": 40.2442,
        "lng": -76.8991
    },
    {
        "state": "TX",
        "city": "Morgan's Point Resort",
        "lat": 31.1519,
        "lng": -97.4587
    },
    {
        "state": "MA",
        "city": "North Westport",
        "lat": 41.654,
        "lng": -71.0927
    },
    {
        "state": "UT",
        "city": "Elk Ridge",
        "lat": 40.0099,
        "lng": -111.6775
    },
    {
        "state": "NE",
        "city": "Aurora",
        "lat": 40.8645,
        "lng": -98.0078
    },
    {
        "state": "IN",
        "city": "Winchester",
        "lat": 40.1719,
        "lng": -84.9764
    },
    {
        "state": "KY",
        "city": "Hurstbourne",
        "lat": 38.2379,
        "lng": -85.5891
    },
    {
        "state": "NJ",
        "city": "Leisure Village East",
        "lat": 40.0384,
        "lng": -74.1678
    },
    {
        "state": "MD",
        "city": "Kingsville",
        "lat": 39.4496,
        "lng": -76.4205
    },
    {
        "state": "MO",
        "city": "High Ridge",
        "lat": 38.4608,
        "lng": -90.5338
    },
    {
        "state": "HI",
        "city": "Kalaheo",
        "lat": 21.9159,
        "lng": -159.5236
    },
    {
        "state": "MI",
        "city": "Negaunee",
        "lat": 46.497,
        "lng": -87.5968
    },
    {
        "state": "GA",
        "city": "Palmetto",
        "lat": 33.531,
        "lng": -84.6678
    },
    {
        "state": "GA",
        "city": "Cornelia",
        "lat": 34.517,
        "lng": -83.5311
    },
    {
        "state": "KY",
        "city": "Reidland",
        "lat": 37.0085,
        "lng": -88.5261
    },
    {
        "state": "NJ",
        "city": "Highlands",
        "lat": 40.4036,
        "lng": -73.9898
    },
    {
        "state": "NY",
        "city": "Montebello",
        "lat": 41.1317,
        "lng": -74.1135
    },
    {
        "state": "NC",
        "city": "Carolina Shores",
        "lat": 33.9077,
        "lng": -78.574
    },
    {
        "state": "SC",
        "city": "Barnwell",
        "lat": 33.2419,
        "lng": -81.3659
    },
    {
        "state": "NH",
        "city": "East Merrimack",
        "lat": 42.8692,
        "lng": -71.4819
    },
    {
        "state": "CA",
        "city": "Carmel Valley Village",
        "lat": 36.4824,
        "lng": -121.7198
    },
    {
        "state": "AZ",
        "city": "South Tucson",
        "lat": 32.1955,
        "lng": -110.9692
    },
    {
        "state": "OH",
        "city": "Blanchester",
        "lat": 39.2934,
        "lng": -83.9795
    },
    {
        "state": "MN",
        "city": "Rockford",
        "lat": 45.092,
        "lng": -93.7453
    },
    {
        "state": "NJ",
        "city": "Mount Ephraim",
        "lat": 39.8805,
        "lng": -75.0918
    },
    {
        "state": "TX",
        "city": "Argyle",
        "lat": 33.1102,
        "lng": -97.1867
    },
    {
        "state": "MA",
        "city": "Ocean Bluff-Brant Rock",
        "lat": 42.1006,
        "lng": -70.6626
    },
    {
        "state": "MI",
        "city": "Vandercook Lake",
        "lat": 42.1917,
        "lng": -84.3855
    },
    {
        "state": "TX",
        "city": "Post",
        "lat": 33.191,
        "lng": -101.3814
    },
    {
        "state": "TN",
        "city": "Rogersville",
        "lat": 36.4081,
        "lng": -83.0043
    },
    {
        "state": "HI",
        "city": "Hanamaulu",
        "lat": 21.9953,
        "lng": -159.3494
    },
    {
        "state": "GA",
        "city": "Elberton",
        "lat": 34.1063,
        "lng": -82.8705
    },
    {
        "state": "TX",
        "city": "New Boston",
        "lat": 33.4612,
        "lng": -94.4183
    },
    {
        "state": "KY",
        "city": "Prospect",
        "lat": 38.3471,
        "lng": -85.6103
    },
    {
        "state": "NC",
        "city": "Boiling Springs",
        "lat": 35.2522,
        "lng": -81.6636
    },
    {
        "state": "MN",
        "city": "Dilworth",
        "lat": 46.8795,
        "lng": -96.6985
    },
    {
        "state": "OR",
        "city": "Estacada",
        "lat": 45.2986,
        "lng": -122.3337
    },
    {
        "state": "NJ",
        "city": "Neptune City",
        "lat": 40.2005,
        "lng": -74.0333
    },
    {
        "state": "NY",
        "city": "Blue Point",
        "lat": 40.7519,
        "lng": -73.0353
    },
    {
        "state": "MS",
        "city": "Ellisville",
        "lat": 31.5969,
        "lng": -89.2091
    },
    {
        "state": "NC",
        "city": "Erwin",
        "lat": 35.3226,
        "lng": -78.6733
    },
    {
        "state": "GA",
        "city": "Montgomery",
        "lat": 31.9438,
        "lng": -81.1081
    },
    {
        "state": "TX",
        "city": "Horseshoe Bay",
        "lat": 30.5403,
        "lng": -98.3804
    },
    {
        "state": "LA",
        "city": "Jackson",
        "lat": 30.8346,
        "lng": -91.208
    },
    {
        "state": "WA",
        "city": "Wapato",
        "lat": 46.4437,
        "lng": -120.4215
    },
    {
        "state": "IL",
        "city": "Fox River Grove",
        "lat": 42.1955,
        "lng": -88.2147
    },
    {
        "state": "PA",
        "city": "Flourtown",
        "lat": 40.1039,
        "lng": -75.2069
    },
    {
        "state": "VA",
        "city": "Berryville",
        "lat": 39.1504,
        "lng": -77.9825
    },
    {
        "state": "NY",
        "city": "Little Falls",
        "lat": 43.0452,
        "lng": -74.8566
    },
    {
        "state": "MS",
        "city": "Florence",
        "lat": 32.1557,
        "lng": -90.1225
    },
    {
        "state": "MO",
        "city": "Lexington",
        "lat": 39.1798,
        "lng": -93.8694
    },
    {
        "state": "NY",
        "city": "Galeville",
        "lat": 43.0868,
        "lng": -76.1871
    },
    {
        "state": "CA",
        "city": "Running Springs",
        "lat": 34.2104,
        "lng": -117.1147
    },
    {
        "state": "PA",
        "city": "East Petersburg",
        "lat": 40.1006,
        "lng": -76.3511
    },
    {
        "state": "NJ",
        "city": "Blackwood",
        "lat": 39.7982,
        "lng": -75.0629
    },
    {
        "state": "MD",
        "city": "Leonardtown",
        "lat": 38.3039,
        "lng": -76.6395
    },
    {
        "state": "WI",
        "city": "Oconto",
        "lat": 44.8923,
        "lng": -87.8715
    },
    {
        "state": "MO",
        "city": "Hollister",
        "lat": 36.6057,
        "lng": -93.2339
    },
    {
        "state": "OH",
        "city": "Miami Heights",
        "lat": 39.1676,
        "lng": -84.7152
    },
    {
        "state": "VA",
        "city": "Verona",
        "lat": 38.1937,
        "lng": -79.0082
    },
    {
        "state": "KY",
        "city": "Westwood",
        "lat": 38.4806,
        "lng": -82.6798
    },
    {
        "state": "OH",
        "city": "Ashville",
        "lat": 39.7238,
        "lng": -82.9575
    },
    {
        "state": "CO",
        "city": "Glendale",
        "lat": 39.7036,
        "lng": -104.9352
    },
    {
        "state": "PA",
        "city": "Cornwall",
        "lat": 40.2659,
        "lng": -76.4077
    },
    {
        "state": "CA",
        "city": "Coarsegold",
        "lat": 37.2401,
        "lng": -119.7021
    },
    {
        "state": "IL",
        "city": "Staunton",
        "lat": 39.0116,
        "lng": -89.791
    },
    {
        "state": "ID",
        "city": "Buhl",
        "lat": 42.5984,
        "lng": -114.7596
    },
    {
        "state": "FL",
        "city": "South Brooksville",
        "lat": 28.5243,
        "lng": -82.4159
    },
    {
        "state": "MS",
        "city": "Waynesboro",
        "lat": 31.6774,
        "lng": -88.6353
    },
    {
        "state": "IN",
        "city": "Floyds Knobs",
        "lat": 38.3245,
        "lng": -85.8736
    },
    {
        "state": "IN",
        "city": "Whiting",
        "lat": 41.6731,
        "lng": -87.4842
    },
    {
        "state": "GA",
        "city": "Madison",
        "lat": 33.5793,
        "lng": -83.4758
    },
    {
        "state": "ID",
        "city": "American Falls",
        "lat": 42.7828,
        "lng": -112.8541
    },
    {
        "state": "MT",
        "city": "Lolo",
        "lat": 46.7756,
        "lng": -114.1018
    },
    {
        "state": "NC",
        "city": "Randleman",
        "lat": 35.8165,
        "lng": -79.8066
    },
    {
        "state": "GA",
        "city": "Grayson",
        "lat": 33.8904,
        "lng": -83.9576
    },
    {
        "state": "MO",
        "city": "Centralia",
        "lat": 39.2105,
        "lng": -92.1342
    },
    {
        "state": "NC",
        "city": "Westport",
        "lat": 35.5103,
        "lng": -80.9783
    },
    {
        "state": "NC",
        "city": "Raeford",
        "lat": 34.9809,
        "lng": -79.2291
    },
    {
        "state": "OH",
        "city": "Lake Darby",
        "lat": 39.9604,
        "lng": -83.2242
    },
    {
        "state": "GA",
        "city": "Lindale",
        "lat": 34.1884,
        "lng": -85.1808
    },
    {
        "state": "MN",
        "city": "Sauk Centre",
        "lat": 45.736,
        "lng": -94.9523
    },
    {
        "state": "CA",
        "city": "Squaw Valley",
        "lat": 36.6997,
        "lng": -119.1995
    },
    {
        "state": "WA",
        "city": "Granite Falls",
        "lat": 48.0874,
        "lng": -121.9706
    },
    {
        "state": "FL",
        "city": "Taylor Creek",
        "lat": 27.2173,
        "lng": -80.7925
    },
    {
        "state": "IL",
        "city": "Stone Park",
        "lat": 41.9033,
        "lng": -87.8805
    },
    {
        "state": "NC",
        "city": "Lillington",
        "lat": 35.4001,
        "lng": -78.8138
    },
    {
        "state": "CA",
        "city": "Sunnyside",
        "lat": 36.7294,
        "lng": -119.6945
    },
    {
        "state": "FL",
        "city": "Stock Island",
        "lat": 24.5658,
        "lng": -81.7351
    },
    {
        "state": "AR",
        "city": "Piney",
        "lat": 34.5024,
        "lng": -93.142
    },
    {
        "state": "OH",
        "city": "Newton Falls",
        "lat": 41.1889,
        "lng": -80.9711
    },
    {
        "state": "PR",
        "city": "Anasco",
        "lat": 18.2861,
        "lng": -67.1409
    },
    {
        "state": "CA",
        "city": "Greenacres",
        "lat": 35.3831,
        "lng": -119.1184
    },
    {
        "state": "NY",
        "city": "Gang Mills",
        "lat": 42.1534,
        "lng": -77.123
    },
    {
        "state": "NJ",
        "city": "Panther Valley",
        "lat": 40.9078,
        "lng": -74.8412
    },
    {
        "state": "IA",
        "city": "Evansdale",
        "lat": 42.4635,
        "lng": -92.2766
    },
    {
        "state": "PA",
        "city": "Donora",
        "lat": 40.1789,
        "lng": -79.8625
    },
    {
        "state": "IL",
        "city": "Beecher",
        "lat": 41.35,
        "lng": -87.6172
    },
    {
        "state": "NC",
        "city": "Weaverville",
        "lat": 35.6963,
        "lng": -82.5585
    },
    {
        "state": "KY",
        "city": "Farley",
        "lat": 37.0405,
        "lng": -88.5734
    },
    {
        "state": "MA",
        "city": "Smith Mills",
        "lat": 41.6432,
        "lng": -70.9922
    },
    {
        "state": "NC",
        "city": "Pittsboro",
        "lat": 35.7255,
        "lng": -79.1713
    },
    {
        "state": "MO",
        "city": "North Kansas City",
        "lat": 39.1396,
        "lng": -94.5641
    },
    {
        "state": "AL",
        "city": "Columbiana",
        "lat": 33.193,
        "lng": -86.6114
    },
    {
        "state": "TN",
        "city": "Lake Tansi",
        "lat": 35.8701,
        "lng": -85.0614
    },
    {
        "state": "CO",
        "city": "Silverthorne",
        "lat": 39.6562,
        "lng": -106.0869
    },
    {
        "state": "NY",
        "city": "Canastota",
        "lat": 43.0836,
        "lng": -75.7559
    },
    {
        "state": "WA",
        "city": "Lexington",
        "lat": 46.1899,
        "lng": -122.9125
    },
    {
        "state": "WI",
        "city": "Clintonville",
        "lat": 44.6222,
        "lng": -88.7513
    },
    {
        "state": "GA",
        "city": "Forsyth",
        "lat": 33.0352,
        "lng": -83.939
    },
    {
        "state": "OR",
        "city": "Wood Village",
        "lat": 45.5358,
        "lng": -122.4205
    },
    {
        "state": "TX",
        "city": "Diboll",
        "lat": 31.1873,
        "lng": -94.7833
    },
    {
        "state": "IA",
        "city": "Camanche",
        "lat": 41.7923,
        "lng": -90.277
    },
    {
        "state": "OH",
        "city": "Mount Orab",
        "lat": 39.0293,
        "lng": -83.9267
    },
    {
        "state": "MD",
        "city": "Seat Pleasant",
        "lat": 38.8952,
        "lng": -76.9016
    },
    {
        "state": "GA",
        "city": "Folkston",
        "lat": 30.8392,
        "lng": -82.0073
    },
    {
        "state": "AR",
        "city": "Dardanelle",
        "lat": 35.2263,
        "lng": -93.1649
    },
    {
        "state": "NJ",
        "city": "Garwood",
        "lat": 40.6513,
        "lng": -74.3231
    },
    {
        "state": "MO",
        "city": "Butler",
        "lat": 38.2598,
        "lng": -94.3394
    },
    {
        "state": "FL",
        "city": "Warm Mineral Springs",
        "lat": 27.0472,
        "lng": -82.2702
    },
    {
        "state": "PA",
        "city": "Sellersville",
        "lat": 40.36,
        "lng": -75.3083
    },
    {
        "state": "TN",
        "city": "Coopertown",
        "lat": 36.4142,
        "lng": -86.9658
    },
    {
        "state": "PA",
        "city": "Hummelstown",
        "lat": 40.2657,
        "lng": -76.7126
    },
    {
        "state": "IL",
        "city": "Auburn",
        "lat": 39.5763,
        "lng": -89.744
    },
    {
        "state": "NC",
        "city": "Beaufort",
        "lat": 34.73,
        "lng": -76.6493
    },
    {
        "state": "PA",
        "city": "West Reading",
        "lat": 40.3337,
        "lng": -75.947
    },
    {
        "state": "PA",
        "city": "Jim Thorpe",
        "lat": 40.8712,
        "lng": -75.7433
    },
    {
        "state": "OR",
        "city": "Beavercreek",
        "lat": 45.2756,
        "lng": -122.5136
    },
    {
        "state": "FL",
        "city": "Nassau Village-Ratliff",
        "lat": 30.5108,
        "lng": -81.8089
    },
    {
        "state": "IA",
        "city": "Mount Vernon",
        "lat": 41.9232,
        "lng": -91.4243
    },
    {
        "state": "AZ",
        "city": "Clarkdale",
        "lat": 34.7501,
        "lng": -112.0555
    },
    {
        "state": "RI",
        "city": "Pascoag",
        "lat": 41.952,
        "lng": -71.7042
    },
    {
        "state": "IN",
        "city": "Simonton Lake",
        "lat": 41.7478,
        "lng": -85.9657
    },
    {
        "state": "TX",
        "city": "Hearne",
        "lat": 30.877,
        "lng": -96.5956
    },
    {
        "state": "OK",
        "city": "Perry",
        "lat": 36.2837,
        "lng": -97.3094
    },
    {
        "state": "AZ",
        "city": "Lake Montezuma",
        "lat": 34.6414,
        "lng": -111.796
    },
    {
        "state": "MI",
        "city": "Hancock",
        "lat": 47.1367,
        "lng": -88.5979
    },
    {
        "state": "TX",
        "city": "La Joya",
        "lat": 26.2518,
        "lng": -98.4699
    },
    {
        "state": "CA",
        "city": "Granite Hills",
        "lat": 32.8033,
        "lng": -116.9056
    },
    {
        "state": "TX",
        "city": "Cross Mountain",
        "lat": 29.6559,
        "lng": -98.658
    },
    {
        "state": "CT",
        "city": "Long Hill",
        "lat": 41.3536,
        "lng": -72.0517
    },
    {
        "state": "MO",
        "city": "California",
        "lat": 38.6303,
        "lng": -92.567
    },
    {
        "state": "FL",
        "city": "Grant-Valkaria",
        "lat": 27.9322,
        "lng": -80.5655
    },
    {
        "state": "MN",
        "city": "Nowthen",
        "lat": 45.3421,
        "lng": -93.4495
    },
    {
        "state": "AZ",
        "city": "Paulden",
        "lat": 34.8897,
        "lng": -112.4937
    },
    {
        "state": "PR",
        "city": "Lajas",
        "lat": 18.0431,
        "lng": -67.0574
    },
    {
        "state": "FL",
        "city": "Charlotte Harbor",
        "lat": 26.9629,
        "lng": -82.0571
    },
    {
        "state": "OH",
        "city": "Summerside",
        "lat": 39.1187,
        "lng": -84.2861
    },
    {
        "state": "NV",
        "city": "West Wendover",
        "lat": 40.7407,
        "lng": -114.0783
    },
    {
        "state": "NC",
        "city": "Edenton",
        "lat": 36.0579,
        "lng": -76.6008
    },
    {
        "state": "NY",
        "city": "Menands",
        "lat": 42.691,
        "lng": -73.7271
    },
    {
        "state": "MO",
        "city": "Mount Vernon",
        "lat": 37.105,
        "lng": -93.819
    },
    {
        "state": "OH",
        "city": "Coldwater",
        "lat": 40.4828,
        "lng": -84.6321
    },
    {
        "state": "PA",
        "city": "Jessup",
        "lat": 41.4622,
        "lng": -75.5478
    },
    {
        "state": "MI",
        "city": "Fremont",
        "lat": 43.4633,
        "lng": -85.9537
    },
    {
        "state": "TX",
        "city": "Pilot Point",
        "lat": 33.3949,
        "lng": -96.9497
    },
    {
        "state": "CA",
        "city": "Lincoln Village",
        "lat": 38.0054,
        "lng": -121.334
    },
    {
        "state": "LA",
        "city": "New Roads",
        "lat": 30.6959,
        "lng": -91.4537
    },
    {
        "state": "WI",
        "city": "Bayside",
        "lat": 43.1827,
        "lng": -87.9017
    },
    {
        "state": "MI",
        "city": "Dexter",
        "lat": 42.3319,
        "lng": -83.8803
    },
    {
        "state": "NJ",
        "city": "Buena",
        "lat": 39.5282,
        "lng": -74.9448
    },
    {
        "state": "NJ",
        "city": "Barclay",
        "lat": 39.9013,
        "lng": -75.0009
    },
    {
        "state": "FL",
        "city": "Big Pine Key",
        "lat": 24.6893,
        "lng": -81.3676
    },
    {
        "state": "NJ",
        "city": "Mountain Lakes",
        "lat": 40.8907,
        "lng": -74.4406
    },
    {
        "state": "MO",
        "city": "Holts Summit",
        "lat": 38.6472,
        "lng": -92.1142
    },
    {
        "state": "MO",
        "city": "Mountain Grove",
        "lat": 37.1341,
        "lng": -92.266
    },
    {
        "state": "MS",
        "city": "Fulton",
        "lat": 34.2616,
        "lng": -88.4021
    },
    {
        "state": "MI",
        "city": "Wolverine Lake",
        "lat": 42.555,
        "lng": -83.4883
    },
    {
        "state": "WI",
        "city": "Viroqua",
        "lat": 43.5603,
        "lng": -90.8858
    },
    {
        "state": "NY",
        "city": "Thiells",
        "lat": 41.2068,
        "lng": -74.0121
    },
    {
        "state": "OH",
        "city": "Crestline",
        "lat": 40.7836,
        "lng": -82.7458
    },
    {
        "state": "NC",
        "city": "Ranlo",
        "lat": 35.2889,
        "lng": -81.1294
    },
    {
        "state": "WA",
        "city": "Deer Park",
        "lat": 47.9642,
        "lng": -117.4398
    },
    {
        "state": "GA",
        "city": "Hartwell",
        "lat": 34.3496,
        "lng": -82.9289
    },
    {
        "state": "TX",
        "city": "Madisonville",
        "lat": 30.9538,
        "lng": -95.9091
    },
    {
        "state": "MS",
        "city": "University",
        "lat": 34.3655,
        "lng": -89.5379
    },
    {
        "state": "OR",
        "city": "Roseburg North",
        "lat": 43.2662,
        "lng": -123.3477
    },
    {
        "state": "PA",
        "city": "Narberth",
        "lat": 40.0077,
        "lng": -75.2634
    },
    {
        "state": "WY",
        "city": "Buffalo",
        "lat": 44.3427,
        "lng": -106.7139
    },
    {
        "state": "HI",
        "city": "Waimanalo Beach",
        "lat": 21.3288,
        "lng": -157.6974
    },
    {
        "state": "NC",
        "city": "Farmville",
        "lat": 35.5951,
        "lng": -77.5907
    },
    {
        "state": "NY",
        "city": "West Bay Shore",
        "lat": 40.6948,
        "lng": -73.2618
    },
    {
        "state": "AR",
        "city": "Shannon Hills",
        "lat": 34.6157,
        "lng": -92.4217
    },
    {
        "state": "PA",
        "city": "Honesdale",
        "lat": 41.5774,
        "lng": -75.2524
    },
    {
        "state": "WI",
        "city": "Mosinee",
        "lat": 44.7874,
        "lng": -89.6839
    },
    {
        "state": "NY",
        "city": "Gordon Heights",
        "lat": 40.8645,
        "lng": -72.9678
    },
    {
        "state": "OR",
        "city": "Crooked River Ranch",
        "lat": 44.4242,
        "lng": -121.2757
    },
    {
        "state": "KY",
        "city": "Greenville",
        "lat": 37.2121,
        "lng": -87.178
    },
    {
        "state": "CO",
        "city": "Castle Pines Village",
        "lat": 39.4418,
        "lng": -104.897
    },
    {
        "state": "CA",
        "city": "Clearlake Riviera",
        "lat": 38.9513,
        "lng": -122.7208
    },
    {
        "state": "CA",
        "city": "Wrightwood",
        "lat": 34.3495,
        "lng": -117.63
    },
    {
        "state": "VA",
        "city": "Tazewell",
        "lat": 37.1268,
        "lng": -81.5134
    },
    {
        "state": "MD",
        "city": "Chester",
        "lat": 38.9677,
        "lng": -76.2824
    },
    {
        "state": "NJ",
        "city": "Mullica Hill",
        "lat": 39.727,
        "lng": -75.2194
    },
    {
        "state": "MO",
        "city": "Breckenridge Hills",
        "lat": 38.7158,
        "lng": -90.3684
    },
    {
        "state": "LA",
        "city": "Haughton",
        "lat": 32.5277,
        "lng": -93.5041
    },
    {
        "state": "NC",
        "city": "China Grove",
        "lat": 35.572,
        "lng": -80.5791
    },
    {
        "state": "AL",
        "city": "Hokes Bluff",
        "lat": 33.9902,
        "lng": -85.8639
    },
    {
        "state": "IN",
        "city": "North Terre Haute",
        "lat": 39.537,
        "lng": -87.3653
    },
    {
        "state": "OH",
        "city": "Ottawa",
        "lat": 41.0202,
        "lng": -84.0354
    },
    {
        "state": "TN",
        "city": "Selmer",
        "lat": 35.1708,
        "lng": -88.5955
    },
    {
        "state": "NM",
        "city": "Paradise Hills",
        "lat": 35.1981,
        "lng": -106.7023
    },
    {
        "state": "CA",
        "city": "Brooktrails",
        "lat": 39.4429,
        "lng": -123.3963
    },
    {
        "state": "OH",
        "city": "Archbold",
        "lat": 41.5166,
        "lng": -84.3039
    },
    {
        "state": "PA",
        "city": "Glassport",
        "lat": 40.3261,
        "lng": -79.8861
    },
    {
        "state": "MO",
        "city": "Fredericktown",
        "lat": 37.5644,
        "lng": -90.2988
    },
    {
        "state": "TX",
        "city": "Rio Bravo",
        "lat": 27.3648,
        "lng": -99.482
    },
    {
        "state": "TX",
        "city": "Medina",
        "lat": 26.9289,
        "lng": -99.2614
    },
    {
        "state": "MO",
        "city": "Eldon",
        "lat": 38.3511,
        "lng": -92.5766
    },
    {
        "state": "VA",
        "city": "Mount Hermon",
        "lat": 36.6716,
        "lng": -79.4202
    },
    {
        "state": "VT",
        "city": "Newport",
        "lat": 44.9372,
        "lng": -72.209
    },
    {
        "state": "FL",
        "city": "Ridge Manor",
        "lat": 28.4988,
        "lng": -82.1832
    },
    {
        "state": "TX",
        "city": "Tulia",
        "lat": 34.5374,
        "lng": -101.7741
    },
    {
        "state": "CA",
        "city": "Cutler",
        "lat": 36.5247,
        "lng": -119.2889
    },
    {
        "state": "AZ",
        "city": "Eagar",
        "lat": 34.1056,
        "lng": -109.2961
    },
    {
        "state": "CA",
        "city": "Emerald Lake Hills",
        "lat": 37.4662,
        "lng": -122.2674
    },
    {
        "state": "MD",
        "city": "Burnt Mills",
        "lat": 39.034,
        "lng": -76.9983
    },
    {
        "state": "MS",
        "city": "Winona",
        "lat": 33.4899,
        "lng": -89.728
    },
    {
        "state": "VA",
        "city": "Bethel Manor",
        "lat": 37.0972,
        "lng": -76.4243
    },
    {
        "state": "TN",
        "city": "Oak Grove",
        "lat": 36.4222,
        "lng": -82.4293
    },
    {
        "state": "CA",
        "city": "Broadmoor",
        "lat": 37.6916,
        "lng": -122.4814
    },
    {
        "state": "SC",
        "city": "Baxter Village",
        "lat": 35.028,
        "lng": -80.9792
    },
    {
        "state": "MA",
        "city": "North Plymouth",
        "lat": 41.9727,
        "lng": -70.6889
    },
    {
        "state": "TX",
        "city": "Denver City",
        "lat": 32.968,
        "lng": -102.8318
    },
    {
        "state": "CT",
        "city": "Mystic",
        "lat": 41.3562,
        "lng": -71.9546
    },
    {
        "state": "OK",
        "city": "Marlow",
        "lat": 34.6296,
        "lng": -97.9578
    },
    {
        "state": "TX",
        "city": "La Grange",
        "lat": 29.9129,
        "lng": -96.8768
    },
    {
        "state": "AL",
        "city": "Argo",
        "lat": 33.6963,
        "lng": -86.5063
    },
    {
        "state": "GA",
        "city": "Jonesboro",
        "lat": 33.5211,
        "lng": -84.3548
    },
    {
        "state": "CO",
        "city": "Lincoln Park",
        "lat": 38.4255,
        "lng": -105.2132
    },
    {
        "state": "NJ",
        "city": "Holiday City South",
        "lat": 39.9533,
        "lng": -74.2367
    },
    {
        "state": "WA",
        "city": "Boulevard Park",
        "lat": 47.5137,
        "lng": -122.316
    },
    {
        "state": "CT",
        "city": "Heritage Village",
        "lat": 41.4855,
        "lng": -73.2349
    },
    {
        "state": "MI",
        "city": "Wayland",
        "lat": 42.6725,
        "lng": -85.6408
    },
    {
        "state": "TX",
        "city": "Palacios",
        "lat": 28.7171,
        "lng": -96.2334
    },
    {
        "state": "WA",
        "city": "Moxee",
        "lat": 46.564,
        "lng": -120.3966
    },
    {
        "state": "NY",
        "city": "Old Westbury",
        "lat": 40.7866,
        "lng": -73.5975
    },
    {
        "state": "NC",
        "city": "Canton",
        "lat": 35.5516,
        "lng": -82.8407
    },
    {
        "state": "NJ",
        "city": "Atlantic Highlands",
        "lat": 40.4112,
        "lng": -74.0295
    },
    {
        "state": "IL",
        "city": "Sullivan",
        "lat": 39.5951,
        "lng": -88.6084
    },
    {
        "state": "NC",
        "city": "Newport",
        "lat": 34.772,
        "lng": -76.8772
    },
    {
        "state": "NJ",
        "city": "Silver Lake",
        "lat": 40.7804,
        "lng": -74.1829
    },
    {
        "state": "PA",
        "city": "Beaver",
        "lat": 40.6936,
        "lng": -80.3074
    },
    {
        "state": "FL",
        "city": "Wahneta",
        "lat": 27.9574,
        "lng": -81.7287
    },
    {
        "state": "AK",
        "city": "Nikiski",
        "lat": 60.7152,
        "lng": -151.2317
    },
    {
        "state": "AZ",
        "city": "San Carlos",
        "lat": 33.35,
        "lng": -110.4654
    },
    {
        "state": "MI",
        "city": "Bloomfield Hills",
        "lat": 42.578,
        "lng": -83.2456
    },
    {
        "state": "WA",
        "city": "Larch Way",
        "lat": 47.8429,
        "lng": -122.2528
    },
    {
        "state": "MD",
        "city": "Perryville",
        "lat": 39.5737,
        "lng": -76.0668
    },
    {
        "state": "PA",
        "city": "Scottdale",
        "lat": 40.1034,
        "lng": -79.5898
    },
    {
        "state": "IN",
        "city": "Ligonier",
        "lat": 41.4625,
        "lng": -85.5948
    },
    {
        "state": "CA",
        "city": "Portola Valley",
        "lat": 37.3711,
        "lng": -122.2202
    },
    {
        "state": "NY",
        "city": "Thornwood",
        "lat": 41.1184,
        "lng": -73.7795
    },
    {
        "state": "OK",
        "city": "McLoud",
        "lat": 35.4081,
        "lng": -97.099
    },
    {
        "state": "WV",
        "city": "Barboursville",
        "lat": 38.4067,
        "lng": -82.2964
    },
    {
        "state": "AK",
        "city": "Soldotna",
        "lat": 60.4862,
        "lng": -151.0672
    },
    {
        "state": "WI",
        "city": "Prairie du Sac",
        "lat": 43.292,
        "lng": -89.7353
    },
    {
        "state": "OR",
        "city": "Lafayette",
        "lat": 45.2463,
        "lng": -123.1115
    },
    {
        "state": "TX",
        "city": "Grape Creek",
        "lat": 31.5817,
        "lng": -100.5474
    },
    {
        "state": "VA",
        "city": "Hayfield",
        "lat": 38.7536,
        "lng": -77.1321
    },
    {
        "state": "OR",
        "city": "Phoenix",
        "lat": 42.2749,
        "lng": -122.8154
    },
    {
        "state": "SC",
        "city": "India Hook",
        "lat": 35.0142,
        "lng": -81.0378
    },
    {
        "state": "TN",
        "city": "Huntingdon",
        "lat": 36.0052,
        "lng": -88.4181
    },
    {
        "state": "KY",
        "city": "Ludlow",
        "lat": 39.0904,
        "lng": -84.5498
    },
    {
        "state": "TX",
        "city": "Hunters Creek Village",
        "lat": 29.7715,
        "lng": -95.4987
    },
    {
        "state": "TX",
        "city": "Pittsburg",
        "lat": 32.9996,
        "lng": -94.9668
    },
    {
        "state": "OH",
        "city": "Edgewood",
        "lat": 41.8783,
        "lng": -80.7461
    },
    {
        "state": "GA",
        "city": "Summerville",
        "lat": 34.4788,
        "lng": -85.3491
    },
    {
        "state": "NY",
        "city": "Armonk",
        "lat": 41.1319,
        "lng": -73.7138
    },
    {
        "state": "CA",
        "city": "Phoenix Lake",
        "lat": 38.0076,
        "lng": -120.309
    },
    {
        "state": "PA",
        "city": "Minersville",
        "lat": 40.6908,
        "lng": -76.2594
    },
    {
        "state": "IL",
        "city": "Breese",
        "lat": 38.6138,
        "lng": -89.523
    },
    {
        "state": "TN",
        "city": "Shackle Island",
        "lat": 36.3775,
        "lng": -86.6168
    },
    {
        "state": "TX",
        "city": "Devine",
        "lat": 29.1456,
        "lng": -98.9049
    },
    {
        "state": "MD",
        "city": "Woodmore",
        "lat": 38.9222,
        "lng": -76.781
    },
    {
        "state": "TN",
        "city": "Harrogate",
        "lat": 36.5752,
        "lng": -83.6462
    },
    {
        "state": "OH",
        "city": "New Lexington",
        "lat": 39.716,
        "lng": -82.208
    },
    {
        "state": "TX",
        "city": "Wyldwood",
        "lat": 30.1299,
        "lng": -97.48
    },
    {
        "state": "PR",
        "city": "Santa Barbara",
        "lat": 18.3954,
        "lng": -65.9172
    },
    {
        "state": "CA",
        "city": "Armona",
        "lat": 36.3166,
        "lng": -119.7054
    },
    {
        "state": "MN",
        "city": "Wayzata",
        "lat": 44.967,
        "lng": -93.516
    },
    {
        "state": "PA",
        "city": "Lorane",
        "lat": 40.2921,
        "lng": -75.8486
    },
    {
        "state": "MO",
        "city": "Scott City",
        "lat": 37.2243,
        "lng": -89.536
    },
    {
        "state": "FL",
        "city": "Bay Hill",
        "lat": 28.4559,
        "lng": -81.5122
    },
    {
        "state": "AZ",
        "city": "Dewey-Humboldt",
        "lat": 34.5174,
        "lng": -112.2496
    },
    {
        "state": "IL",
        "city": "Watseka",
        "lat": 40.7752,
        "lng": -87.7304
    },
    {
        "state": "NY",
        "city": "Waverly",
        "lat": 42.0119,
        "lng": -76.5406
    },
    {
        "state": "UT",
        "city": "La Verkin",
        "lat": 37.2309,
        "lng": -113.2523
    },
    {
        "state": "TX",
        "city": "Hallsville",
        "lat": 32.5021,
        "lng": -94.57
    },
    {
        "state": "TN",
        "city": "Louisville",
        "lat": 35.8247,
        "lng": -84.0552
    },
    {
        "state": "FL",
        "city": "Bagdad",
        "lat": 30.5824,
        "lng": -87.0447
    },
    {
        "state": "PR",
        "city": "Salinas",
        "lat": 17.9778,
        "lng": -66.2962
    },
    {
        "state": "KS",
        "city": "Rose Hill",
        "lat": 37.5702,
        "lng": -97.1361
    },
    {
        "state": "SC",
        "city": "Belton",
        "lat": 34.5237,
        "lng": -82.4938
    },
    {
        "state": "CA",
        "city": "Ford City",
        "lat": 35.1647,
        "lng": -119.4584
    },
    {
        "state": "FL",
        "city": "Woodville",
        "lat": 30.312,
        "lng": -84.2611
    },
    {
        "state": "TX",
        "city": "Hebbronville",
        "lat": 27.3251,
        "lng": -98.6857
    },
    {
        "state": "MD",
        "city": "La Vale",
        "lat": 39.6625,
        "lng": -78.8229
    },
    {
        "state": "TX",
        "city": "Mathis",
        "lat": 28.0909,
        "lng": -97.817
    },
    {
        "state": "KY",
        "city": "Crescent Springs",
        "lat": 39.0553,
        "lng": -84.5787
    },
    {
        "state": "NC",
        "city": "North Wilkesboro",
        "lat": 36.1728,
        "lng": -81.139
    },
    {
        "state": "AR",
        "city": "Vilonia",
        "lat": 35.0807,
        "lng": -92.2088
    },
    {
        "state": "TX",
        "city": "Falfurrias",
        "lat": 27.2243,
        "lng": -98.1452
    },
    {
        "state": "SC",
        "city": "Isle of Palms",
        "lat": 32.8043,
        "lng": -79.7552
    },
    {
        "state": "NJ",
        "city": "Oak Valley",
        "lat": 39.8055,
        "lng": -75.1589
    },
    {
        "state": "NJ",
        "city": "Wanamassa",
        "lat": 40.2366,
        "lng": -74.0294
    },
    {
        "state": "WI",
        "city": "Prescott",
        "lat": 44.7523,
        "lng": -92.7882
    },
    {
        "state": "PA",
        "city": "Hamburg",
        "lat": 40.5561,
        "lng": -75.9825
    },
    {
        "state": "NJ",
        "city": "Magnolia",
        "lat": 39.8562,
        "lng": -75.0365
    },
    {
        "state": "AK",
        "city": "Unalaska",
        "lat": 53.8984,
        "lng": -166.568
    },
    {
        "state": "GA",
        "city": "Dawson",
        "lat": 31.7721,
        "lng": -84.4437
    },
    {
        "state": "AL",
        "city": "Haleyville",
        "lat": 34.2331,
        "lng": -87.6175
    },
    {
        "state": "OH",
        "city": "Wellington",
        "lat": 41.1613,
        "lng": -82.2255
    },
    {
        "state": "NY",
        "city": "Spackenkill",
        "lat": 41.6547,
        "lng": -73.91
    },
    {
        "state": "WI",
        "city": "Kewaskum",
        "lat": 43.5177,
        "lng": -88.2306
    },
    {
        "state": "LA",
        "city": "Kaplan",
        "lat": 30.006,
        "lng": -92.284
    },
    {
        "state": "MD",
        "city": "West Laurel",
        "lat": 39.1134,
        "lng": -76.8924
    },
    {
        "state": "KY",
        "city": "Scottsville",
        "lat": 36.7544,
        "lng": -86.2053
    },
    {
        "state": "IA",
        "city": "Huxley",
        "lat": 41.8965,
        "lng": -93.592
    },
    {
        "state": "CA",
        "city": "Ivanhoe",
        "lat": 36.3834,
        "lng": -119.22
    },
    {
        "state": "WA",
        "city": "Suquamish",
        "lat": 47.7238,
        "lng": -122.583
    },
    {
        "state": "IA",
        "city": "Hampton",
        "lat": 42.742,
        "lng": -93.205
    },
    {
        "state": "PA",
        "city": "Tarentum",
        "lat": 40.6043,
        "lng": -79.7602
    },
    {
        "state": "MN",
        "city": "Wadena",
        "lat": 46.445,
        "lng": -95.1285
    },
    {
        "state": "CO",
        "city": "El Jebel",
        "lat": 39.405,
        "lng": -107.0921
    },
    {
        "state": "MO",
        "city": "Rogersville",
        "lat": 37.1148,
        "lng": -93.0742
    },
    {
        "state": "AL",
        "city": "Adamsville",
        "lat": 33.6073,
        "lng": -86.974
    },
    {
        "state": "OH",
        "city": "Georgetown",
        "lat": 38.8684,
        "lng": -83.8992
    },
    {
        "state": "NY",
        "city": "Montauk",
        "lat": 41.0466,
        "lng": -71.9465
    },
    {
        "state": "PA",
        "city": "North Braddock",
        "lat": 40.4023,
        "lng": -79.8533
    },
    {
        "state": "IA",
        "city": "Dyersville",
        "lat": 42.4818,
        "lng": -91.1178
    },
    {
        "state": "MD",
        "city": "Pocomoke City",
        "lat": 38.0635,
        "lng": -75.5553
    },
    {
        "state": "WI",
        "city": "Medford",
        "lat": 45.1365,
        "lng": -90.3436
    },
    {
        "state": "TX",
        "city": "Chula Vista",
        "lat": 28.6573,
        "lng": -100.422
    },
    {
        "state": "MD",
        "city": "Friendship Heights Village",
        "lat": 38.9633,
        "lng": -77.0898
    },
    {
        "state": "WI",
        "city": "Mauston",
        "lat": 43.7995,
        "lng": -90.0775
    },
    {
        "state": "FL",
        "city": "Jasper",
        "lat": 30.5061,
        "lng": -82.954
    },
    {
        "state": "FL",
        "city": "Parker",
        "lat": 30.1289,
        "lng": -85.6008
    },
    {
        "state": "OR",
        "city": "Reedsport",
        "lat": 43.6983,
        "lng": -124.1121
    },
    {
        "state": "MD",
        "city": "Sykesville",
        "lat": 39.3716,
        "lng": -76.9716
    },
    {
        "state": "OH",
        "city": "Hunter",
        "lat": 39.494,
        "lng": -84.2852
    },
    {
        "state": "OH",
        "city": "Huber Ridge",
        "lat": 40.0909,
        "lng": -82.9174
    },
    {
        "state": "VA",
        "city": "Union Mill",
        "lat": 38.7978,
        "lng": -77.3815
    },
    {
        "state": "MO",
        "city": "Normandy",
        "lat": 38.7071,
        "lng": -90.3009
    },
    {
        "state": "NJ",
        "city": "The College of New Jersey",
        "lat": 40.2689,
        "lng": -74.7764
    },
    {
        "state": "IL",
        "city": "Hometown",
        "lat": 41.7312,
        "lng": -87.7311
    },
    {
        "state": "MO",
        "city": "Lamar",
        "lat": 37.4945,
        "lng": -94.2791
    },
    {
        "state": "PA",
        "city": "Boalsburg",
        "lat": 40.7783,
        "lng": -77.7734
    },
    {
        "state": "MS",
        "city": "Pearl River",
        "lat": 32.7889,
        "lng": -89.2384
    },
    {
        "state": "OK",
        "city": "Pocola",
        "lat": 35.2455,
        "lng": -94.4775
    },
    {
        "state": "LA",
        "city": "Arabi",
        "lat": 29.9562,
        "lng": -89.9986
    },
    {
        "state": "FL",
        "city": "Belleair",
        "lat": 27.9365,
        "lng": -82.8114
    },
    {
        "state": "MI",
        "city": "Caro",
        "lat": 43.4891,
        "lng": -83.4025
    },
    {
        "state": "NE",
        "city": "Waverly",
        "lat": 40.9111,
        "lng": -96.5341
    },
    {
        "state": "CA",
        "city": "Denair",
        "lat": 37.5254,
        "lng": -120.7974
    },
    {
        "state": "PA",
        "city": "Shenandoah",
        "lat": 40.8167,
        "lng": -76.2003
    },
    {
        "state": "FL",
        "city": "Buckingham",
        "lat": 26.6613,
        "lng": -81.7402
    },
    {
        "state": "PA",
        "city": "Brittany Farms-The Highlands",
        "lat": 40.269,
        "lng": -75.214
    },
    {
        "state": "NC",
        "city": "Mount Olive",
        "lat": 35.1997,
        "lng": -78.0662
    },
    {
        "state": "AZ",
        "city": "Whiteriver",
        "lat": 33.8358,
        "lng": -109.9616
    },
    {
        "state": "TN",
        "city": "Waverly",
        "lat": 36.0939,
        "lng": -87.7847
    },
    {
        "state": "IL",
        "city": "Peotone",
        "lat": 41.3308,
        "lng": -87.7956
    },
    {
        "state": "PA",
        "city": "Slatington",
        "lat": 40.7543,
        "lng": -75.6114
    },
    {
        "state": "MT",
        "city": "Malmstrom AFB",
        "lat": 47.5059,
        "lng": -111.1825
    },
    {
        "state": "PA",
        "city": "Farrell",
        "lat": 41.2112,
        "lng": -80.4971
    },
    {
        "state": "WI",
        "city": "Baldwin",
        "lat": 44.954,
        "lng": -92.3709
    },
    {
        "state": "TX",
        "city": "Canton",
        "lat": 32.5546,
        "lng": -95.8641
    },
    {
        "state": "IN",
        "city": "Whiteland",
        "lat": 39.5505,
        "lng": -86.0739
    },
    {
        "state": "NV",
        "city": "Nellis AFB",
        "lat": 36.2466,
        "lng": -115.0571
    },
    {
        "state": "KY",
        "city": "Paintsville",
        "lat": 37.8163,
        "lng": -82.8089
    },
    {
        "state": "NJ",
        "city": "Westville",
        "lat": 39.8704,
        "lng": -75.1302
    },
    {
        "state": "MI",
        "city": "Buchanan",
        "lat": 41.8283,
        "lng": -86.3656
    },
    {
        "state": "WI",
        "city": "Saukville",
        "lat": 43.3847,
        "lng": -87.9439
    },
    {
        "state": "WA",
        "city": "Rosedale",
        "lat": 47.3452,
        "lng": -122.6369
    },
    {
        "state": "FL",
        "city": "Winter Beach",
        "lat": 27.712,
        "lng": -80.4254
    },
    {
        "state": "OH",
        "city": "Nelsonville",
        "lat": 39.4561,
        "lng": -82.2211
    },
    {
        "state": "WA",
        "city": "Chelan",
        "lat": 47.8415,
        "lng": -120.0262
    },
    {
        "state": "NJ",
        "city": "Bradley Beach",
        "lat": 40.2018,
        "lng": -74.0128
    },
    {
        "state": "MD",
        "city": "National Harbor",
        "lat": 38.7876,
        "lng": -77.0113
    },
    {
        "state": "WA",
        "city": "Esperance",
        "lat": 47.7937,
        "lng": -122.3469
    },
    {
        "state": "AL",
        "city": "Fayette",
        "lat": 33.6943,
        "lng": -87.8307
    },
    {
        "state": "FL",
        "city": "Indian River Shores",
        "lat": 27.7084,
        "lng": -80.3851
    },
    {
        "state": "WI",
        "city": "French Island",
        "lat": 43.8593,
        "lng": -91.2614
    },
    {
        "state": "MS",
        "city": "Wiggins",
        "lat": 30.8557,
        "lng": -89.1386
    },
    {
        "state": "PA",
        "city": "Danville",
        "lat": 40.9615,
        "lng": -76.6121
    },
    {
        "state": "AR",
        "city": "Ashdown",
        "lat": 33.6746,
        "lng": -94.1265
    },
    {
        "state": "NJ",
        "city": "Medford Lakes",
        "lat": 39.8581,
        "lng": -74.8053
    },
    {
        "state": "SC",
        "city": "Woodruff",
        "lat": 34.7421,
        "lng": -82.0371
    },
    {
        "state": "MI",
        "city": "Gaylord",
        "lat": 45.0208,
        "lng": -84.6809
    },
    {
        "state": "FL",
        "city": "Highland Beach",
        "lat": 26.4087,
        "lng": -80.0661
    },
    {
        "state": "PA",
        "city": "Sinking Spring",
        "lat": 40.3242,
        "lng": -76.0235
    },
    {
        "state": "AR",
        "city": "Lonoke",
        "lat": 34.7906,
        "lng": -91.9072
    },
    {
        "state": "PA",
        "city": "Chalfont",
        "lat": 40.2893,
        "lng": -75.2095
    },
    {
        "state": "IL",
        "city": "Anna",
        "lat": 37.4612,
        "lng": -89.2388
    },
    {
        "state": "MI",
        "city": "Middleville",
        "lat": 42.7138,
        "lng": -85.4693
    },
    {
        "state": "GA",
        "city": "Euharlee",
        "lat": 34.1441,
        "lng": -84.9327
    },
    {
        "state": "KS",
        "city": "Osawatomie",
        "lat": 38.5063,
        "lng": -94.9486
    },
    {
        "state": "IA",
        "city": "Forest City",
        "lat": 43.257,
        "lng": -93.6366
    },
    {
        "state": "NJ",
        "city": "Singac",
        "lat": 40.8849,
        "lng": -74.2431
    },
    {
        "state": "OK",
        "city": "Bristow",
        "lat": 35.8336,
        "lng": -96.3944
    },
    {
        "state": "PA",
        "city": "Sharpsville",
        "lat": 41.2595,
        "lng": -80.4813
    },
    {
        "state": "NY",
        "city": "Fayetteville",
        "lat": 43.0308,
        "lng": -75.9984
    },
    {
        "state": "IL",
        "city": "West Peoria",
        "lat": 40.697,
        "lng": -89.6399
    },
    {
        "state": "MI",
        "city": "Sparta",
        "lat": 43.1571,
        "lng": -85.7106
    },
    {
        "state": "AR",
        "city": "Southside",
        "lat": 35.7149,
        "lng": -91.6328
    },
    {
        "state": "MT",
        "city": "Helena Valley Northeast",
        "lat": 46.6974,
        "lng": -111.9428
    },
    {
        "state": "PA",
        "city": "Boyertown",
        "lat": 40.3322,
        "lng": -75.6375
    },
    {
        "state": "IN",
        "city": "Sullivan",
        "lat": 39.0973,
        "lng": -87.4074
    },
    {
        "state": "PA",
        "city": "Forty Fort",
        "lat": 41.2846,
        "lng": -75.869
    },
    {
        "state": "PA",
        "city": "Mount Pleasant",
        "lat": 40.1509,
        "lng": -79.5434
    },
    {
        "state": "PA",
        "city": "Larksville",
        "lat": 41.2639,
        "lng": -75.9327
    },
    {
        "state": "NY",
        "city": "Elmira Heights",
        "lat": 42.1267,
        "lng": -76.8254
    },
    {
        "state": "KS",
        "city": "Russell",
        "lat": 38.8874,
        "lng": -98.8514
    },
    {
        "state": "PA",
        "city": "Laureldale",
        "lat": 40.3897,
        "lng": -75.9134
    },
    {
        "state": "OH",
        "city": "Greenfield",
        "lat": 39.3536,
        "lng": -83.3883
    },
    {
        "state": "OH",
        "city": "Fort McKinley",
        "lat": 39.8027,
        "lng": -84.246
    },
    {
        "state": "NC",
        "city": "Holly Ridge",
        "lat": 34.4953,
        "lng": -77.527
    },
    {
        "state": "AL",
        "city": "Geneva",
        "lat": 31.0437,
        "lng": -85.8763
    },
    {
        "state": "PA",
        "city": "Greencastle",
        "lat": 39.7907,
        "lng": -77.7267
    },
    {
        "state": "FL",
        "city": "Samoset",
        "lat": 27.4764,
        "lng": -82.543
    },
    {
        "state": "NJ",
        "city": "Ho-Ho-Kus",
        "lat": 41.0001,
        "lng": -74.0972
    },
    {
        "state": "PA",
        "city": "Jacksonwald",
        "lat": 40.3279,
        "lng": -75.8414
    },
    {
        "state": "LA",
        "city": "Eastwood",
        "lat": 32.5607,
        "lng": -93.5625
    },
    {
        "state": "PA",
        "city": "Aldan",
        "lat": 39.9224,
        "lng": -75.2881
    },
    {
        "state": "SC",
        "city": "Newport",
        "lat": 34.9833,
        "lng": -81.0992
    },
    {
        "state": "WY",
        "city": "Fox Farm-College",
        "lat": 41.1105,
        "lng": -104.7871
    },
    {
        "state": "NY",
        "city": "Herricks",
        "lat": 40.7567,
        "lng": -73.6635
    },
    {
        "state": "IL",
        "city": "Paxton",
        "lat": 40.4563,
        "lng": -88.102
    },
    {
        "state": "OH",
        "city": "Sheffield",
        "lat": 41.4559,
        "lng": -82.0912
    },
    {
        "state": "AL",
        "city": "Mount Olive",
        "lat": 33.6778,
        "lng": -86.8727
    },
    {
        "state": "CA",
        "city": "Fetters Hot Springs-Agua Caliente",
        "lat": 38.3274,
        "lng": -122.4871
    },
    {
        "state": "VA",
        "city": "University Center",
        "lat": 39.0599,
        "lng": -77.4443
    },
    {
        "state": "NY",
        "city": "Springville",
        "lat": 42.5084,
        "lng": -78.6696
    },
    {
        "state": "GA",
        "city": "Ashburn",
        "lat": 31.7096,
        "lng": -83.6528
    },
    {
        "state": "OK",
        "city": "Broken Bow",
        "lat": 34.0292,
        "lng": -94.7426
    },
    {
        "state": "TX",
        "city": "Spring Valley Village",
        "lat": 29.7898,
        "lng": -95.5041
    },
    {
        "state": "PA",
        "city": "Charleroi",
        "lat": 40.1384,
        "lng": -79.9002
    },
    {
        "state": "WA",
        "city": "Bethel",
        "lat": 47.4874,
        "lng": -122.6175
    },
    {
        "state": "OR",
        "city": "Aumsville",
        "lat": 44.8462,
        "lng": -122.87
    },
    {
        "state": "GA",
        "city": "Lyons",
        "lat": 32.2062,
        "lng": -82.3215
    },
    {
        "state": "WY",
        "city": "Mills",
        "lat": 42.8473,
        "lng": -106.383
    },
    {
        "state": "NC",
        "city": "Spindale",
        "lat": 35.3597,
        "lng": -81.9232
    },
    {
        "state": "FL",
        "city": "Moon Lake",
        "lat": 28.2993,
        "lng": -82.605
    },
    {
        "state": "MN",
        "city": "Cannon Falls",
        "lat": 44.5122,
        "lng": -92.9034
    },
    {
        "state": "NY",
        "city": "Ellenville",
        "lat": 41.7009,
        "lng": -74.3609
    },
    {
        "state": "TX",
        "city": "Jacksboro",
        "lat": 33.2256,
        "lng": -98.1594
    },
    {
        "state": "PA",
        "city": "Kutztown",
        "lat": 40.5212,
        "lng": -75.7772
    },
    {
        "state": "NC",
        "city": "Shallotte",
        "lat": 33.9768,
        "lng": -78.3803
    },
    {
        "state": "WA",
        "city": "Venersborg",
        "lat": 45.786,
        "lng": -122.4721
    },
    {
        "state": "IL",
        "city": "Lawrenceville",
        "lat": 38.7264,
        "lng": -87.6873
    },
    {
        "state": "MN",
        "city": "Le Sueur",
        "lat": 44.4702,
        "lng": -93.9026
    },
    {
        "state": "ND",
        "city": "Lincoln",
        "lat": 46.7688,
        "lng": -100.6978
    },
    {
        "state": "TX",
        "city": "Comanche",
        "lat": 31.9005,
        "lng": -98.6043
    },
    {
        "state": "FL",
        "city": "Suncoast Estates",
        "lat": 26.7123,
        "lng": -81.8684
    },
    {
        "state": "AR",
        "city": "Rockwell",
        "lat": 34.4636,
        "lng": -93.134
    },
    {
        "state": "PA",
        "city": "Clarion",
        "lat": 41.2106,
        "lng": -79.3803
    },
    {
        "state": "PA",
        "city": "Amity Gardens",
        "lat": 40.2718,
        "lng": -75.7321
    },
    {
        "state": "IA",
        "city": "Chariton",
        "lat": 41.0175,
        "lng": -93.3097
    },
    {
        "state": "IL",
        "city": "Freeburg",
        "lat": 38.4397,
        "lng": -89.9169
    },
    {
        "state": "FL",
        "city": "Hutchinson Island South",
        "lat": 27.3243,
        "lng": -80.2425
    },
    {
        "state": "TN",
        "city": "Trenton",
        "lat": 35.9689,
        "lng": -88.945
    },
    {
        "state": "CO",
        "city": "Monte Vista",
        "lat": 37.5789,
        "lng": -106.1499
    },
    {
        "state": "TX",
        "city": "Bellville",
        "lat": 29.9472,
        "lng": -96.2598
    },
    {
        "state": "TN",
        "city": "Apison",
        "lat": 35.0104,
        "lng": -85.0142
    },
    {
        "state": "WA",
        "city": "Longview Heights",
        "lat": 46.1794,
        "lng": -122.9568
    },
    {
        "state": "PR",
        "city": "Candelaria Arenas",
        "lat": 18.4175,
        "lng": -66.2203
    },
    {
        "state": "LA",
        "city": "Brownsville",
        "lat": 32.4883,
        "lng": -92.1619
    },
    {
        "state": "PR",
        "city": "Aguilita",
        "lat": 18.0284,
        "lng": -66.533
    },
    {
        "state": "NY",
        "city": "Akwesasne",
        "lat": 44.9647,
        "lng": -74.6664
    },
    {
        "state": "FL",
        "city": "Laguna Beach",
        "lat": 30.2549,
        "lng": -85.9512
    },
    {
        "state": "PA",
        "city": "McGovern",
        "lat": 40.2362,
        "lng": -80.2268
    },
    {
        "state": "PR",
        "city": "Florida",
        "lat": 18.3643,
        "lng": -66.5611
    },
    {
        "state": "KS",
        "city": "Wamego",
        "lat": 39.2054,
        "lng": -96.3099
    },
    {
        "state": "IA",
        "city": "Jefferson",
        "lat": 42.0173,
        "lng": -94.3799
    },
    {
        "state": "NC",
        "city": "Sunset Beach",
        "lat": 33.892,
        "lng": -78.5107
    },
    {
        "state": "CT",
        "city": "East Village",
        "lat": 41.3612,
        "lng": -73.1845
    },
    {
        "state": "VA",
        "city": "Pantops",
        "lat": 38.0316,
        "lng": -78.4437
    },
    {
        "state": "OK",
        "city": "Slaughterville",
        "lat": 35.091,
        "lng": -97.2881
    },
    {
        "state": "NV",
        "city": "Battle Mountain",
        "lat": 40.6299,
        "lng": -116.9518
    },
    {
        "state": "OH",
        "city": "West Jefferson",
        "lat": 39.9475,
        "lng": -83.3076
    },
    {
        "state": "OH",
        "city": "Sebring",
        "lat": 40.9207,
        "lng": -81.0231
    },
    {
        "state": "NC",
        "city": "Franklin",
        "lat": 35.1798,
        "lng": -83.3809
    },
    {
        "state": "LA",
        "city": "Church Point",
        "lat": 30.4037,
        "lng": -92.2145
    },
    {
        "state": "NM",
        "city": "Holloman AFB",
        "lat": 32.8483,
        "lng": -106.0998
    },
    {
        "state": "IN",
        "city": "De Motte",
        "lat": 41.1988,
        "lng": -87.1973
    },
    {
        "state": "NJ",
        "city": "Cedar Knolls",
        "lat": 40.8199,
        "lng": -74.4551
    },
    {
        "state": "MN",
        "city": "Columbus",
        "lat": 45.2685,
        "lng": -93.0809
    },
    {
        "state": "MN",
        "city": "Cold Spring",
        "lat": 45.457,
        "lng": -94.4297
    },
    {
        "state": "AK",
        "city": "Farmers Loop",
        "lat": 64.9061,
        "lng": -147.6957
    },
    {
        "state": "SC",
        "city": "Surfside Beach",
        "lat": 33.6093,
        "lng": -78.9772
    },
    {
        "state": "NJ",
        "city": "Country Lake Estates",
        "lat": 39.9486,
        "lng": -74.5409
    },
    {
        "state": "GA",
        "city": "Jasper",
        "lat": 34.471,
        "lng": -84.4497
    },
    {
        "state": "ME",
        "city": "Lisbon Falls",
        "lat": 44.0086,
        "lng": -70.0571
    },
    {
        "state": "WA",
        "city": "Belfair",
        "lat": 47.4495,
        "lng": -122.8487
    },
    {
        "state": "PR",
        "city": "Imbery",
        "lat": 18.4371,
        "lng": -66.5566
    },
    {
        "state": "UT",
        "city": "Morgan",
        "lat": 41.0414,
        "lng": -111.6802
    },
    {
        "state": "FL",
        "city": "Lake Panasoffkee",
        "lat": 28.785,
        "lng": -82.1258
    },
    {
        "state": "SC",
        "city": "Saxon",
        "lat": 34.9616,
        "lng": -81.9713
    },
    {
        "state": "MN",
        "city": "Pipestone",
        "lat": 43.9958,
        "lng": -96.3117
    },
    {
        "state": "NY",
        "city": "University Gardens",
        "lat": 40.7752,
        "lng": -73.7281
    },
    {
        "state": "OH",
        "city": "Cherry Grove",
        "lat": 39.0802,
        "lng": -84.322
    },
    {
        "state": "TX",
        "city": "Dimmitt",
        "lat": 34.5324,
        "lng": -102.3111
    },
    {
        "state": "VA",
        "city": "Broadway",
        "lat": 38.6083,
        "lng": -78.8016
    },
    {
        "state": "MI",
        "city": "Algonac",
        "lat": 42.6207,
        "lng": -82.5339
    },
    {
        "state": "GA",
        "city": "Chattanooga Valley",
        "lat": 34.9241,
        "lng": -85.3431
    },
    {
        "state": "PA",
        "city": "Dallastown",
        "lat": 39.8996,
        "lng": -76.641
    },
    {
        "state": "MN",
        "city": "Park Rapids",
        "lat": 46.9169,
        "lng": -95.0576
    },
    {
        "state": "MN",
        "city": "Newport",
        "lat": 44.8743,
        "lng": -92.9975
    },
    {
        "state": "CT",
        "city": "Danielson",
        "lat": 41.8086,
        "lng": -71.8854
    },
    {
        "state": "KS",
        "city": "Fairway",
        "lat": 39.0245,
        "lng": -94.6287
    },
    {
        "state": "ND",
        "city": "Grafton",
        "lat": 48.4142,
        "lng": -97.4056
    },
    {
        "state": "PA",
        "city": "Jersey Shore",
        "lat": 41.2012,
        "lng": -77.2666
    },
    {
        "state": "PA",
        "city": "McMurray",
        "lat": 40.2815,
        "lng": -80.0874
    },
    {
        "state": "OH",
        "city": "Fruit Hill",
        "lat": 39.0699,
        "lng": -84.367
    },
    {
        "state": "IL",
        "city": "Shelbyville",
        "lat": 39.4097,
        "lng": -88.8005
    },
    {
        "state": "AR",
        "city": "Nashville",
        "lat": 33.9418,
        "lng": -93.8516
    },
    {
        "state": "TX",
        "city": "Garden Ridge",
        "lat": 29.6379,
        "lng": -98.2927
    },
    {
        "state": "IL",
        "city": "Marseilles",
        "lat": 41.3099,
        "lng": -88.685
    },
    {
        "state": "KS",
        "city": "Clay Center",
        "lat": 39.3812,
        "lng": -97.1276
    },
    {
        "state": "OH",
        "city": "Waverly",
        "lat": 39.1256,
        "lng": -82.9836
    },
    {
        "state": "IL",
        "city": "Pittsfield",
        "lat": 39.6201,
        "lng": -90.7936
    },
    {
        "state": "MO",
        "city": "Bowling Green",
        "lat": 39.3447,
        "lng": -91.2032
    },
    {
        "state": "AL",
        "city": "Valley Grande",
        "lat": 32.4862,
        "lng": -87.0305
    },
    {
        "state": "PA",
        "city": "Monongahela",
        "lat": 40.1955,
        "lng": -79.9222
    },
    {
        "state": "NJ",
        "city": "Roebling",
        "lat": 40.1167,
        "lng": -74.7775
    },
    {
        "state": "FL",
        "city": "Harbour Heights",
        "lat": 26.9928,
        "lng": -82.0072
    },
    {
        "state": "IN",
        "city": "Edinburgh",
        "lat": 39.3509,
        "lng": -85.9625
    },
    {
        "state": "NC",
        "city": "Forest Oaks",
        "lat": 35.9889,
        "lng": -79.7079
    },
    {
        "state": "MO",
        "city": "Brookfield",
        "lat": 39.7853,
        "lng": -93.0772
    },
    {
        "state": "PA",
        "city": "Level Green",
        "lat": 40.3902,
        "lng": -79.7215
    },
    {
        "state": "NY",
        "city": "Walton Park",
        "lat": 41.3142,
        "lng": -74.2237
    },
    {
        "state": "MI",
        "city": "Roosevelt Park",
        "lat": 43.1982,
        "lng": -86.2733
    },
    {
        "state": "TX",
        "city": "Jourdanton",
        "lat": 28.9141,
        "lng": -98.5409
    },
    {
        "state": "NJ",
        "city": "Shrewsbury",
        "lat": 40.3249,
        "lng": -74.06
    },
    {
        "state": "CA",
        "city": "Harbison Canyon",
        "lat": 32.8273,
        "lng": -116.8381
    },
    {
        "state": "HI",
        "city": "Captain Cook",
        "lat": 19.4995,
        "lng": -155.8937
    },
    {
        "state": "LA",
        "city": "Jonesboro",
        "lat": 32.2348,
        "lng": -92.7098
    },
    {
        "state": "NY",
        "city": "Red Oaks Mill",
        "lat": 41.6517,
        "lng": -73.8748
    },
    {
        "state": "PA",
        "city": "Akron",
        "lat": 40.158,
        "lng": -76.2031
    },
    {
        "state": "KS",
        "city": "Hugoton",
        "lat": 37.1745,
        "lng": -101.3447
    },
    {
        "state": "OH",
        "city": "Swanton",
        "lat": 41.5839,
        "lng": -83.888
    },
    {
        "state": "IL",
        "city": "Kildeer",
        "lat": 42.183,
        "lng": -88.0488
    },
    {
        "state": "CA",
        "city": "Bonsall",
        "lat": 33.2764,
        "lng": -117.1941
    },
    {
        "state": "OH",
        "city": "New Lebanon",
        "lat": 39.744,
        "lng": -84.3943
    },
    {
        "state": "TX",
        "city": "Whitesboro",
        "lat": 33.6612,
        "lng": -96.9022
    },
    {
        "state": "PA",
        "city": "Lansford",
        "lat": 40.8331,
        "lng": -75.8848
    },
    {
        "state": "MI",
        "city": "Wolf Lake",
        "lat": 43.2451,
        "lng": -86.1074
    },
    {
        "state": "FL",
        "city": "Clarcona",
        "lat": 28.6268,
        "lng": -81.4979
    },
    {
        "state": "MI",
        "city": "Lowell",
        "lat": 42.9351,
        "lng": -85.3457
    },
    {
        "state": "NJ",
        "city": "Lambertville",
        "lat": 40.3687,
        "lng": -74.943
    },
    {
        "state": "CA",
        "city": "Lockeford",
        "lat": 38.1508,
        "lng": -121.1554
    },
    {
        "state": "UT",
        "city": "Maeser",
        "lat": 40.4718,
        "lng": -109.5786
    },
    {
        "state": "MI",
        "city": "Linden",
        "lat": 42.8194,
        "lng": -83.7811
    },
    {
        "state": "TX",
        "city": "Friona",
        "lat": 34.6394,
        "lng": -102.723
    },
    {
        "state": "LA",
        "city": "Winnfield",
        "lat": 31.924,
        "lng": -92.6425
    },
    {
        "state": "NE",
        "city": "Falls City",
        "lat": 40.0623,
        "lng": -95.5989
    },
    {
        "state": "WA",
        "city": "Montesano",
        "lat": 47.0102,
        "lng": -123.5857
    },
    {
        "state": "KS",
        "city": "Scott City",
        "lat": 38.4789,
        "lng": -100.9031
    },
    {
        "state": "TX",
        "city": "Caldwell",
        "lat": 30.5307,
        "lng": -96.7007
    },
    {
        "state": "IL",
        "city": "Sherman",
        "lat": 39.8876,
        "lng": -89.6066
    },
    {
        "state": "MN",
        "city": "Rice Lake",
        "lat": 46.8977,
        "lng": -92.1137
    },
    {
        "state": "MO",
        "city": "Whiteman AFB",
        "lat": 38.7302,
        "lng": -93.5589
    },
    {
        "state": "IA",
        "city": "Carlisle",
        "lat": 41.5118,
        "lng": -93.495
    },
    {
        "state": "OH",
        "city": "Chagrin Falls",
        "lat": 41.4319,
        "lng": -81.3887
    },
    {
        "state": "NY",
        "city": "Garden City South",
        "lat": 40.712,
        "lng": -73.6607
    },
    {
        "state": "TX",
        "city": "Pinehurst",
        "lat": 30.1889,
        "lng": -95.7017
    },
    {
        "state": "MN",
        "city": "Goodview",
        "lat": 44.0692,
        "lng": -91.7166
    },
    {
        "state": "PA",
        "city": "Penn Estates",
        "lat": 41.0346,
        "lng": -75.2417
    },
    {
        "state": "IL",
        "city": "Sparta",
        "lat": 38.1513,
        "lng": -89.7185
    },
    {
        "state": "MD",
        "city": "St. James",
        "lat": 39.5738,
        "lng": -77.7482
    },
    {
        "state": "SC",
        "city": "Walhalla",
        "lat": 34.7705,
        "lng": -83.0615
    },
    {
        "state": "WA",
        "city": "Mirrormont",
        "lat": 47.4616,
        "lng": -121.9937
    },
    {
        "state": "PA",
        "city": "Indian Mountain Lake",
        "lat": 41.0003,
        "lng": -75.5058
    },
    {
        "state": "LA",
        "city": "Jena",
        "lat": 31.6914,
        "lng": -92.1298
    },
    {
        "state": "MO",
        "city": "Fenton",
        "lat": 38.5279,
        "lng": -90.4488
    },
    {
        "state": "WI",
        "city": "West Milwaukee",
        "lat": 43.0124,
        "lng": -87.971
    },
    {
        "state": "IL",
        "city": "Green Oaks",
        "lat": 42.2954,
        "lng": -87.9115
    },
    {
        "state": "MS",
        "city": "Mississippi State",
        "lat": 33.4516,
        "lng": -88.7912
    },
    {
        "state": "CO",
        "city": "Niwot",
        "lat": 40.098,
        "lng": -105.1552
    },
    {
        "state": "NJ",
        "city": "Highland Lakes",
        "lat": 41.1716,
        "lng": -74.4643
    },
    {
        "state": "VA",
        "city": "Enon",
        "lat": 37.3273,
        "lng": -77.3195
    },
    {
        "state": "NC",
        "city": "Trent Woods",
        "lat": 35.081,
        "lng": -77.0945
    },
    {
        "state": "MI",
        "city": "Otsego",
        "lat": 42.4576,
        "lng": -85.698
    },
    {
        "state": "NJ",
        "city": "Riverdale",
        "lat": 40.9921,
        "lng": -74.3125
    },
    {
        "state": "WA",
        "city": "Longbranch",
        "lat": 47.2257,
        "lng": -122.7739
    },
    {
        "state": "AZ",
        "city": "Pinetop-Lakeside",
        "lat": 34.1486,
        "lng": -109.9657
    },
    {
        "state": "CA",
        "city": "Lake San Marcos",
        "lat": 33.1197,
        "lng": -117.209
    },
    {
        "state": "PA",
        "city": "Reiffton",
        "lat": 40.3126,
        "lng": -75.8663
    },
    {
        "state": "UT",
        "city": "Wellsville",
        "lat": 41.6223,
        "lng": -111.943
    },
    {
        "state": "TX",
        "city": "Ovilla",
        "lat": 32.5352,
        "lng": -96.8895
    },
    {
        "state": "PA",
        "city": "Maytown",
        "lat": 40.0791,
        "lng": -76.5791
    },
    {
        "state": "MI",
        "city": "North Muskegon",
        "lat": 43.2517,
        "lng": -86.2715
    },
    {
        "state": "MI",
        "city": "Lathrup Village",
        "lat": 42.4921,
        "lng": -83.2273
    },
    {
        "state": "MA",
        "city": "Northwest Harwich",
        "lat": 41.6917,
        "lng": -70.1026
    },
    {
        "state": "GA",
        "city": "Hazlehurst",
        "lat": 31.8651,
        "lng": -82.5994
    },
    {
        "state": "SC",
        "city": "Williamston",
        "lat": 34.6194,
        "lng": -82.4794
    },
    {
        "state": "FL",
        "city": "Tierra Verde",
        "lat": 27.6687,
        "lng": -82.7299
    },
    {
        "state": "PA",
        "city": "Saw Creek",
        "lat": 41.1197,
        "lng": -75.0465
    },
    {
        "state": "OH",
        "city": "Mulberry",
        "lat": 39.1975,
        "lng": -84.2511
    },
    {
        "state": "SC",
        "city": "Brookdale",
        "lat": 33.5183,
        "lng": -80.8332
    },
    {
        "state": "TX",
        "city": "San Carlos",
        "lat": 26.2957,
        "lng": -98.0631
    },
    {
        "state": "MI",
        "city": "Marine City",
        "lat": 42.7137,
        "lng": -82.5012
    },
    {
        "state": "WV",
        "city": "Point Pleasant",
        "lat": 38.853,
        "lng": -82.1303
    },
    {
        "state": "NM",
        "city": "Placitas",
        "lat": 35.3226,
        "lng": -106.4437
    },
    {
        "state": "CT",
        "city": "Oronoque",
        "lat": 41.2527,
        "lng": -73.1089
    },
    {
        "state": "PA",
        "city": "Kutztown University",
        "lat": 40.5103,
        "lng": -75.7851
    },
    {
        "state": "IL",
        "city": "Metamora",
        "lat": 40.7951,
        "lng": -89.3672
    },
    {
        "state": "NY",
        "city": "Chester",
        "lat": 41.357,
        "lng": -74.2768
    },
    {
        "state": "AZ",
        "city": "Taylor",
        "lat": 34.4393,
        "lng": -110.1018
    },
    {
        "state": "PA",
        "city": "Throop",
        "lat": 41.4382,
        "lng": -75.5927
    },
    {
        "state": "MD",
        "city": "North East",
        "lat": 39.6076,
        "lng": -75.9414
    },
    {
        "state": "NC",
        "city": "Wingate",
        "lat": 34.9859,
        "lng": -80.448
    },
    {
        "state": "DE",
        "city": "Rising Sun-Lebanon",
        "lat": 39.1,
        "lng": -75.5047
    },
    {
        "state": "AR",
        "city": "Brookland",
        "lat": 35.8991,
        "lng": -90.5767
    },
    {
        "state": "SC",
        "city": "Duncan",
        "lat": 34.9342,
        "lng": -82.1443
    },
    {
        "state": "WI",
        "city": "Cross Plains",
        "lat": 43.1145,
        "lng": -89.6479
    },
    {
        "state": "GA",
        "city": "Quitman",
        "lat": 30.7849,
        "lng": -83.5603
    },
    {
        "state": "OH",
        "city": "Calcutta",
        "lat": 40.684,
        "lng": -80.5621
    },
    {
        "state": "PR",
        "city": "Hatillo",
        "lat": 18.4811,
        "lng": -66.8221
    },
    {
        "state": "PA",
        "city": "Fleetwood",
        "lat": 40.4565,
        "lng": -75.8209
    },
    {
        "state": "CO",
        "city": "Genesee",
        "lat": 39.6872,
        "lng": -105.2718
    },
    {
        "state": "IA",
        "city": "Rock Valley",
        "lat": 43.2028,
        "lng": -96.2897
    },
    {
        "state": "AL",
        "city": "Kimberly",
        "lat": 33.7758,
        "lng": -86.7964
    },
    {
        "state": "NY",
        "city": "Cayuga Heights",
        "lat": 42.468,
        "lng": -76.4876
    },
    {
        "state": "NJ",
        "city": "Port Reading",
        "lat": 40.5685,
        "lng": -74.2469
    },
    {
        "state": "IL",
        "city": "Millstadt",
        "lat": 38.4579,
        "lng": -90.0834
    },
    {
        "state": "IA",
        "city": "Monticello",
        "lat": 42.2298,
        "lng": -91.1861
    },
    {
        "state": "TX",
        "city": "Midway North",
        "lat": 26.1872,
        "lng": -98.0189
    },
    {
        "state": "KY",
        "city": "Crittenden",
        "lat": 38.7755,
        "lng": -84.6137
    },
    {
        "state": "LA",
        "city": "Amite City",
        "lat": 30.7323,
        "lng": -90.5133
    },
    {
        "state": "MD",
        "city": "Capitol Heights",
        "lat": 38.8765,
        "lng": -76.9075
    },
    {
        "state": "TX",
        "city": "Crandall",
        "lat": 32.6233,
        "lng": -96.4525
    },
    {
        "state": "IL",
        "city": "Burnham",
        "lat": 41.6375,
        "lng": -87.5447
    },
    {
        "state": "NC",
        "city": "Mountain Home",
        "lat": 35.3708,
        "lng": -82.5021
    },
    {
        "state": "OH",
        "city": "St. Bernard",
        "lat": 39.1711,
        "lng": -84.4955
    },
    {
        "state": "NC",
        "city": "Elkin",
        "lat": 36.2621,
        "lng": -80.8443
    },
    {
        "state": "AL",
        "city": "Ladonia",
        "lat": 32.4609,
        "lng": -85.0877
    },
    {
        "state": "VA",
        "city": "County Center",
        "lat": 38.6917,
        "lng": -77.3507
    },
    {
        "state": "IL",
        "city": "Scott AFB",
        "lat": 38.5412,
        "lng": -89.853
    },
    {
        "state": "IL",
        "city": "Indian Head Park",
        "lat": 41.769,
        "lng": -87.8977
    },
    {
        "state": "FL",
        "city": "Mary Esther",
        "lat": 30.4127,
        "lng": -86.6588
    },
    {
        "state": "NJ",
        "city": "Great Notch",
        "lat": 40.8705,
        "lng": -74.2084
    },
    {
        "state": "MO",
        "city": "Riverside",
        "lat": 39.1703,
        "lng": -94.6306
    },
    {
        "state": "WI",
        "city": "Chilton",
        "lat": 44.0293,
        "lng": -88.1625
    },
    {
        "state": "CA",
        "city": "Lenwood",
        "lat": 34.8861,
        "lng": -117.1078
    },
    {
        "state": "OH",
        "city": "Pleasant Run Farm",
        "lat": 39.3016,
        "lng": -84.5493
    },
    {
        "state": "NC",
        "city": "Southport",
        "lat": 33.9411,
        "lng": -78.0205
    },
    {
        "state": "WV",
        "city": "Pinch",
        "lat": 38.4062,
        "lng": -81.481
    },
    {
        "state": "PA",
        "city": "Ridgway",
        "lat": 41.427,
        "lng": -78.7297
    },
    {
        "state": "SC",
        "city": "Mullins",
        "lat": 34.204,
        "lng": -79.2536
    },
    {
        "state": "WV",
        "city": "Westover",
        "lat": 39.6329,
        "lng": -79.9882
    },
    {
        "state": "OR",
        "city": "Coquille",
        "lat": 43.1802,
        "lng": -124.1841
    },
    {
        "state": "PA",
        "city": "Thorndale",
        "lat": 39.9991,
        "lng": -75.7517
    },
    {
        "state": "GA",
        "city": "Hawkinsville",
        "lat": 32.2965,
        "lng": -83.4815
    },
    {
        "state": "IL",
        "city": "Riverwoods",
        "lat": 42.1723,
        "lng": -87.8951
    },
    {
        "state": "CT",
        "city": "Broad Brook",
        "lat": 41.9097,
        "lng": -72.5426
    },
    {
        "state": "TN",
        "city": "Spurgeon",
        "lat": 36.443,
        "lng": -82.4621
    },
    {
        "state": "NC",
        "city": "Benson",
        "lat": 35.386,
        "lng": -78.5437
    },
    {
        "state": "CA",
        "city": "San Miguel",
        "lat": 37.8867,
        "lng": -122.0368
    },
    {
        "state": "VA",
        "city": "Kings Park",
        "lat": 38.8026,
        "lng": -77.2396
    },
    {
        "state": "NM",
        "city": "Bosque Farms",
        "lat": 34.8539,
        "lng": -106.7011
    },
    {
        "state": "MI",
        "city": "South Haven",
        "lat": 42.4011,
        "lng": -86.2677
    },
    {
        "state": "SD",
        "city": "Dakota Dunes",
        "lat": 42.492,
        "lng": -96.487
    },
    {
        "state": "AR",
        "city": "Haskell",
        "lat": 34.5095,
        "lng": -92.6406
    },
    {
        "state": "LA",
        "city": "Vidalia",
        "lat": 31.5668,
        "lng": -91.4404
    },
    {
        "state": "NC",
        "city": "Seven Lakes",
        "lat": 35.2647,
        "lng": -79.5865
    },
    {
        "state": "SC",
        "city": "Northlake",
        "lat": 34.5691,
        "lng": -82.6838
    },
    {
        "state": "PR",
        "city": "Campanilla",
        "lat": 18.4225,
        "lng": -66.2391
    },
    {
        "state": "IL",
        "city": "South Chicago Heights",
        "lat": 41.4831,
        "lng": -87.6369
    },
    {
        "state": "OH",
        "city": "Taylor Creek",
        "lat": 39.2362,
        "lng": -84.6802
    },
    {
        "state": "TN",
        "city": "Karns",
        "lat": 35.9778,
        "lng": -84.1091
    },
    {
        "state": "OH",
        "city": "Wintersville",
        "lat": 40.3791,
        "lng": -80.7095
    },
    {
        "state": "CA",
        "city": "North El Monte",
        "lat": 34.1029,
        "lng": -118.0239
    },
    {
        "state": "GA",
        "city": "Rossville",
        "lat": 34.9747,
        "lng": -85.2898
    },
    {
        "state": "TX",
        "city": "Castle Hills",
        "lat": 29.5229,
        "lng": -98.5197
    },
    {
        "state": "TX",
        "city": "Pecan Acres",
        "lat": 32.9704,
        "lng": -97.4725
    },
    {
        "state": "MI",
        "city": "Belleville",
        "lat": 42.2022,
        "lng": -83.4839
    },
    {
        "state": "MN",
        "city": "St. Charles",
        "lat": 43.9687,
        "lng": -92.0593
    },
    {
        "state": "MO",
        "city": "Camdenton",
        "lat": 38.0121,
        "lng": -92.7499
    },
    {
        "state": "DE",
        "city": "Clayton",
        "lat": 39.2849,
        "lng": -75.6366
    },
    {
        "state": "GA",
        "city": "Metter",
        "lat": 32.3958,
        "lng": -82.0621
    },
    {
        "state": "PA",
        "city": "Trappe",
        "lat": 40.1991,
        "lng": -75.4754
    },
    {
        "state": "TX",
        "city": "Smithville",
        "lat": 30.0082,
        "lng": -97.152
    },
    {
        "state": "MS",
        "city": "Magee",
        "lat": 31.873,
        "lng": -89.734
    },
    {
        "state": "PA",
        "city": "Brookville",
        "lat": 41.1615,
        "lng": -79.0827
    },
    {
        "state": "OH",
        "city": "Park Layne",
        "lat": 39.8881,
        "lng": -84.0394
    },
    {
        "state": "TX",
        "city": "Coleman",
        "lat": 31.8317,
        "lng": -99.4223
    },
    {
        "state": "AL",
        "city": "Hazel Green",
        "lat": 34.9236,
        "lng": -86.5671
    },
    {
        "state": "MN",
        "city": "Grant",
        "lat": 45.0825,
        "lng": -92.909
    },
    {
        "state": "OK",
        "city": "Spencer",
        "lat": 35.5108,
        "lng": -97.3715
    },
    {
        "state": "NC",
        "city": "Stanley",
        "lat": 35.3552,
        "lng": -81.0938
    },
    {
        "state": "IN",
        "city": "Greendale",
        "lat": 39.1316,
        "lng": -84.851
    },
    {
        "state": "MA",
        "city": "Sagamore",
        "lat": 41.7842,
        "lng": -70.5332
    },
    {
        "state": "OH",
        "city": "South Russell",
        "lat": 41.4318,
        "lng": -81.3352
    },
    {
        "state": "AR",
        "city": "Dumas",
        "lat": 33.8834,
        "lng": -91.4857
    },
    {
        "state": "PA",
        "city": "Meridian",
        "lat": 40.8531,
        "lng": -79.9555
    },
    {
        "state": "MN",
        "city": "Scandia",
        "lat": 45.254,
        "lng": -92.8278
    },
    {
        "state": "IN",
        "city": "Upland",
        "lat": 40.4639,
        "lng": -85.5008
    },
    {
        "state": "IL",
        "city": "Oregon",
        "lat": 42.0132,
        "lng": -89.3354
    },
    {
        "state": "FL",
        "city": "Mulberry",
        "lat": 27.9058,
        "lng": -81.9873
    },
    {
        "state": "NY",
        "city": "Clifton Knolls-Mill Creek",
        "lat": 42.8482,
        "lng": -73.8082
    },
    {
        "state": "HI",
        "city": "Puhi",
        "lat": 21.9622,
        "lng": -159.3917
    },
    {
        "state": "IL",
        "city": "Dupo",
        "lat": 38.5146,
        "lng": -90.2168
    },
    {
        "state": "IL",
        "city": "Coal Valley",
        "lat": 41.4416,
        "lng": -90.4462
    },
    {
        "state": "MT",
        "city": "Dillon",
        "lat": 45.218,
        "lng": -112.6345
    },
    {
        "state": "NV",
        "city": "Ely",
        "lat": 39.265,
        "lng": -114.8708
    },
    {
        "state": "PA",
        "city": "Trevose",
        "lat": 40.1509,
        "lng": -74.982
    },
    {
        "state": "CA",
        "city": "Del Mar",
        "lat": 32.9635,
        "lng": -117.2624
    },
    {
        "state": "CA",
        "city": "Bella Vista",
        "lat": 40.6427,
        "lng": -122.246
    },
    {
        "state": "OH",
        "city": "Mineral Ridge",
        "lat": 41.1385,
        "lng": -80.7672
    },
    {
        "state": "DE",
        "city": "Laurel",
        "lat": 38.5691,
        "lng": -75.5689
    },
    {
        "state": "MA",
        "city": "North Pembroke",
        "lat": 42.0989,
        "lng": -70.7823
    },
    {
        "state": "PA",
        "city": "Waynesburg",
        "lat": 39.8983,
        "lng": -80.1855
    },
    {
        "state": "LA",
        "city": "Bayou Vista",
        "lat": 29.6912,
        "lng": -91.2672
    },
    {
        "state": "SD",
        "city": "Dell Rapids",
        "lat": 43.8244,
        "lng": -96.7143
    },
    {
        "state": "TX",
        "city": "Colorado City",
        "lat": 32.3996,
        "lng": -100.8582
    },
    {
        "state": "MI",
        "city": "Dorr",
        "lat": 42.727,
        "lng": -85.719
    },
    {
        "state": "TX",
        "city": "Cedar Creek",
        "lat": 30.0811,
        "lng": -97.518
    },
    {
        "state": "NM",
        "city": "La Cienega",
        "lat": 35.5794,
        "lng": -106.113
    },
    {
        "state": "IN",
        "city": "Mitchell",
        "lat": 38.7369,
        "lng": -86.4755
    },
    {
        "state": "PA",
        "city": "Carroll Valley",
        "lat": 39.7499,
        "lng": -77.3805
    },
    {
        "state": "TN",
        "city": "Algood",
        "lat": 36.2,
        "lng": -85.4468
    },
    {
        "state": "FL",
        "city": "Pine Manor",
        "lat": 26.573,
        "lng": -81.8774
    },
    {
        "state": "NE",
        "city": "Cozad",
        "lat": 40.8613,
        "lng": -99.9863
    },
    {
        "state": "MO",
        "city": "Woodson Terrace",
        "lat": 38.7286,
        "lng": -90.36
    },
    {
        "state": "KY",
        "city": "Lancaster",
        "lat": 37.6148,
        "lng": -84.5815
    },
    {
        "state": "NY",
        "city": "Gardnertown",
        "lat": 41.5328,
        "lng": -74.0595
    },
    {
        "state": "MO",
        "city": "St. James",
        "lat": 38.0013,
        "lng": -91.6154
    },
    {
        "state": "CA",
        "city": "Bystrom",
        "lat": 37.6198,
        "lng": -120.9813
    },
    {
        "state": "MS",
        "city": "Leland",
        "lat": 33.4051,
        "lng": -90.8909
    },
    {
        "state": "IL",
        "city": "Marshall",
        "lat": 39.3986,
        "lng": -87.69
    },
    {
        "state": "NJ",
        "city": "Oaklyn",
        "lat": 39.9023,
        "lng": -75.0813
    },
    {
        "state": "AK",
        "city": "Valdez",
        "lat": 61.0963,
        "lng": -146.2596
    },
    {
        "state": "FL",
        "city": "West Bradenton",
        "lat": 27.5016,
        "lng": -82.6146
    },
    {
        "state": "MD",
        "city": "Golden Beach",
        "lat": 38.49,
        "lng": -76.7019
    },
    {
        "state": "OR",
        "city": "Metzger",
        "lat": 45.4493,
        "lng": -122.7621
    },
    {
        "state": "FL",
        "city": "Madeira Beach",
        "lat": 27.7985,
        "lng": -82.7887
    },
    {
        "state": "IL",
        "city": "St. Joseph",
        "lat": 40.114,
        "lng": -88.0354
    },
    {
        "state": "MD",
        "city": "Indian Head",
        "lat": 38.5987,
        "lng": -77.1555
    },
    {
        "state": "AL",
        "city": "Citronelle",
        "lat": 31.0952,
        "lng": -88.2467
    },
    {
        "state": "PA",
        "city": "Windber",
        "lat": 40.2355,
        "lng": -78.8247
    },
    {
        "state": "OK",
        "city": "Madill",
        "lat": 34.0872,
        "lng": -96.7744
    },
    {
        "state": "OH",
        "city": "Montpelier",
        "lat": 41.5817,
        "lng": -84.5968
    },
    {
        "state": "NY",
        "city": "Heritage Hills",
        "lat": 41.3398,
        "lng": -73.7016
    },
    {
        "state": "IN",
        "city": "Berne",
        "lat": 40.6572,
        "lng": -84.9555
    },
    {
        "state": "PA",
        "city": "Kittanning",
        "lat": 40.8279,
        "lng": -79.5233
    },
    {
        "state": "VA",
        "city": "Shenandoah Farms",
        "lat": 38.9752,
        "lng": -78.0482
    },
    {
        "state": "LA",
        "city": "Ball",
        "lat": 31.4188,
        "lng": -92.4084
    },
    {
        "state": "MD",
        "city": "Pleasant Hills",
        "lat": 39.4861,
        "lng": -76.3908
    },
    {
        "state": "IL",
        "city": "Morrison",
        "lat": 41.8076,
        "lng": -89.9616
    },
    {
        "state": "WV",
        "city": "Weston",
        "lat": 39.0391,
        "lng": -80.4616
    },
    {
        "state": "TN",
        "city": "Livingston",
        "lat": 36.3875,
        "lng": -85.3265
    },
    {
        "state": "IL",
        "city": "Rosewood Heights",
        "lat": 38.8885,
        "lng": -90.0723
    },
    {
        "state": "NY",
        "city": "Lyncourt",
        "lat": 43.082,
        "lng": -76.1265
    },
    {
        "state": "WI",
        "city": "Lancaster",
        "lat": 42.8473,
        "lng": -90.7065
    },
    {
        "state": "TX",
        "city": "Sullivan City",
        "lat": 26.2752,
        "lng": -98.5644
    },
    {
        "state": "MN",
        "city": "Centerville",
        "lat": 45.164,
        "lng": -93.054
    },
    {
        "state": "WI",
        "city": "Raymond",
        "lat": 42.8003,
        "lng": -88.0118
    },
    {
        "state": "OH",
        "city": "Cedarville",
        "lat": 39.7471,
        "lng": -83.8109
    },
    {
        "state": "PA",
        "city": "Pennsburg",
        "lat": 40.3936,
        "lng": -75.4965
    },
    {
        "state": "CA",
        "city": "Meiners Oaks",
        "lat": 34.4553,
        "lng": -119.2702
    },
    {
        "state": "DE",
        "city": "Camden",
        "lat": 39.099,
        "lng": -75.5571
    },
    {
        "state": "NE",
        "city": "Fairbury",
        "lat": 40.1448,
        "lng": -97.1764
    },
    {
        "state": "NJ",
        "city": "Oakhurst",
        "lat": 40.2607,
        "lng": -74.0263
    },
    {
        "state": "AR",
        "city": "Gentry",
        "lat": 36.2571,
        "lng": -94.4908
    },
    {
        "state": "MA",
        "city": "Forestdale",
        "lat": 41.6846,
        "lng": -70.5082
    },
    {
        "state": "KY",
        "city": "Williamstown",
        "lat": 38.6415,
        "lng": -84.5675
    },
    {
        "state": "IL",
        "city": "Smithton",
        "lat": 38.4159,
        "lng": -89.9902
    },
    {
        "state": "HI",
        "city": "Whitmore Village",
        "lat": 21.5119,
        "lng": -158.0274
    },
    {
        "state": "TX",
        "city": "Weston Lakes",
        "lat": 29.6627,
        "lng": -95.9352
    },
    {
        "state": "NY",
        "city": "Manhasset Hills",
        "lat": 40.7592,
        "lng": -73.6809
    },
    {
        "state": "PA",
        "city": "Elim",
        "lat": 40.2989,
        "lng": -78.943
    },
    {
        "state": "MN",
        "city": "Bayport",
        "lat": 45.0152,
        "lng": -92.7789
    },
    {
        "state": "TX",
        "city": "Cisco",
        "lat": 32.3848,
        "lng": -98.9805
    },
    {
        "state": "KS",
        "city": "Baxter Springs",
        "lat": 37.0195,
        "lng": -94.7351
    },
    {
        "state": "CO",
        "city": "Penrose",
        "lat": 38.4213,
        "lng": -105.0004
    },
    {
        "state": "IA",
        "city": "Cresco",
        "lat": 43.3718,
        "lng": -92.1163
    },
    {
        "state": "GA",
        "city": "Heron Bay",
        "lat": 33.3393,
        "lng": -84.1922
    },
    {
        "state": "MD",
        "city": "Delmar",
        "lat": 38.445,
        "lng": -75.5662
    },
    {
        "state": "VA",
        "city": "Colonial Beach",
        "lat": 38.2567,
        "lng": -76.9777
    },
    {
        "state": "PA",
        "city": "Palmer Heights",
        "lat": 40.6907,
        "lng": -75.2671
    },
    {
        "state": "IL",
        "city": "Caseyville",
        "lat": 38.6302,
        "lng": -90.0339
    },
    {
        "state": "PA",
        "city": "Schnecksville",
        "lat": 40.6699,
        "lng": -75.6115
    },
    {
        "state": "PA",
        "city": "Northumberland",
        "lat": 40.8966,
        "lng": -76.7933
    },
    {
        "state": "TX",
        "city": "Mabank",
        "lat": 32.3685,
        "lng": -96.1138
    },
    {
        "state": "DE",
        "city": "Highland Acres",
        "lat": 39.1163,
        "lng": -75.5216
    },
    {
        "state": "PA",
        "city": "Baden",
        "lat": 40.6396,
        "lng": -80.2228
    },
    {
        "state": "IL",
        "city": "Barrington Hills",
        "lat": 42.1399,
        "lng": -88.2034
    },
    {
        "state": "WV",
        "city": "Lewisburg",
        "lat": 37.8096,
        "lng": -80.4327
    },
    {
        "state": "PA",
        "city": "Parkesburg",
        "lat": 39.9593,
        "lng": -75.9177
    },
    {
        "state": "KY",
        "city": "Carrollton",
        "lat": 38.6799,
        "lng": -85.1658
    },
    {
        "state": "AZ",
        "city": "Chinle",
        "lat": 36.1505,
        "lng": -109.5794
    },
    {
        "state": "NC",
        "city": "Surf City",
        "lat": 34.4346,
        "lng": -77.5644
    },
    {
        "state": "HI",
        "city": "Waikapu",
        "lat": 20.8391,
        "lng": -156.5221
    },
    {
        "state": "PA",
        "city": "Warminster Heights",
        "lat": 40.1884,
        "lng": -75.0841
    },
    {
        "state": "AL",
        "city": "Pine Level",
        "lat": 32.5785,
        "lng": -86.4523
    },
    {
        "state": "TN",
        "city": "White Bluff",
        "lat": 36.1005,
        "lng": -87.2117
    },
    {
        "state": "HI",
        "city": "Hawaiian Beaches",
        "lat": 19.5447,
        "lng": -154.9288
    },
    {
        "state": "PA",
        "city": "Irwin",
        "lat": 40.325,
        "lng": -79.6996
    },
    {
        "state": "OH",
        "city": "Bellaire",
        "lat": 40.0176,
        "lng": -80.7469
    },
    {
        "state": "WI",
        "city": "Kiel",
        "lat": 43.9167,
        "lng": -88.0266
    },
    {
        "state": "CO",
        "city": "Florence",
        "lat": 38.3836,
        "lng": -105.1114
    },
    {
        "state": "GA",
        "city": "Dawsonville",
        "lat": 34.4362,
        "lng": -84.125
    },
    {
        "state": "PA",
        "city": "Zelienople",
        "lat": 40.7886,
        "lng": -80.1428
    },
    {
        "state": "FL",
        "city": "Tangerine",
        "lat": 28.759,
        "lng": -81.6341
    },
    {
        "state": "CA",
        "city": "Woodbridge",
        "lat": 38.1692,
        "lng": -121.3113
    },
    {
        "state": "NC",
        "city": "Emerald Isle",
        "lat": 34.6648,
        "lng": -77.0292
    },
    {
        "state": "GA",
        "city": "Hephzibah",
        "lat": 33.2906,
        "lng": -82.0994
    },
    {
        "state": "AZ",
        "city": "Clifton",
        "lat": 33.0249,
        "lng": -109.2883
    },
    {
        "state": "KY",
        "city": "Prestonsburg",
        "lat": 37.6819,
        "lng": -82.7661
    },
    {
        "state": "CA",
        "city": "Mojave",
        "lat": 35.0139,
        "lng": -118.1896
    },
    {
        "state": "IL",
        "city": "Rosemont",
        "lat": 41.989,
        "lng": -87.8718
    },
    {
        "state": "SC",
        "city": "Manning",
        "lat": 33.6933,
        "lng": -80.2167
    },
    {
        "state": "OH",
        "city": "Woodlawn",
        "lat": 39.2556,
        "lng": -84.471
    },
    {
        "state": "PA",
        "city": "Rosemont",
        "lat": 40.0306,
        "lng": -75.327
    },
    {
        "state": "PA",
        "city": "Frackville",
        "lat": 40.7833,
        "lng": -76.2329
    },
    {
        "state": "WI",
        "city": "Pulaski",
        "lat": 44.6684,
        "lng": -88.2351
    },
    {
        "state": "CA",
        "city": "French Camp",
        "lat": 37.8803,
        "lng": -121.2803
    },
    {
        "state": "PA",
        "city": "Thompsonville",
        "lat": 40.2802,
        "lng": -80.1205
    },
    {
        "state": "NY",
        "city": "South Blooming Grove",
        "lat": 41.3735,
        "lng": -74.179
    },
    {
        "state": "IL",
        "city": "Forsyth",
        "lat": 39.9259,
        "lng": -88.9641
    },
    {
        "state": "SC",
        "city": "Southern Shops",
        "lat": 34.9846,
        "lng": -81.9934
    },
    {
        "state": "OK",
        "city": "Nichols Hills",
        "lat": 35.5468,
        "lng": -97.5445
    },
    {
        "state": "WV",
        "city": "Ravenswood",
        "lat": 38.9561,
        "lng": -81.7619
    },
    {
        "state": "MN",
        "city": "Deephaven",
        "lat": 44.9318,
        "lng": -93.5293
    },
    {
        "state": "MN",
        "city": "Norwood Young America",
        "lat": 44.7721,
        "lng": -93.9192
    },
    {
        "state": "TX",
        "city": "Nash",
        "lat": 33.4423,
        "lng": -94.1345
    },
    {
        "state": "VA",
        "city": "Loch Lomond",
        "lat": 38.7812,
        "lng": -77.4817
    },
    {
        "state": "AZ",
        "city": "Avenue B and C",
        "lat": 32.7192,
        "lng": -114.6598
    },
    {
        "state": "TX",
        "city": "Clyde",
        "lat": 32.4056,
        "lng": -99.5039
    },
    {
        "state": "CO",
        "city": "Rocky Ford",
        "lat": 38.0499,
        "lng": -103.7225
    },
    {
        "state": "CT",
        "city": "Lordship",
        "lat": 41.1533,
        "lng": -73.1197
    },
    {
        "state": "PA",
        "city": "Shrewsbury",
        "lat": 39.7714,
        "lng": -76.6799
    },
    {
        "state": "IN",
        "city": "Knox",
        "lat": 41.291,
        "lng": -86.6212
    },
    {
        "state": "LA",
        "city": "Richwood",
        "lat": 32.4485,
        "lng": -92.0773
    },
    {
        "state": "CA",
        "city": "Auburn Lake Trails",
        "lat": 38.8916,
        "lng": -120.9849
    },
    {
        "state": "PA",
        "city": "Emigsville",
        "lat": 40.0077,
        "lng": -76.7303
    },
    {
        "state": "KY",
        "city": "Grayson",
        "lat": 38.3317,
        "lng": -82.9371
    },
    {
        "state": "OH",
        "city": "Mogadore",
        "lat": 41.0523,
        "lng": -81.3994
    },
    {
        "state": "MA",
        "city": "Turners Falls",
        "lat": 42.5975,
        "lng": -72.5573
    },
    {
        "state": "WI",
        "city": "North Hudson",
        "lat": 44.9973,
        "lng": -92.7564
    },
    {
        "state": "NY",
        "city": "Pomona",
        "lat": 41.1891,
        "lng": -74.0543
    },
    {
        "state": "SC",
        "city": "Roebuck",
        "lat": 34.8789,
        "lng": -81.9646
    },
    {
        "state": "NM",
        "city": "Kirtland AFB",
        "lat": 35.0497,
        "lng": -106.5599
    },
    {
        "state": "IL",
        "city": "Wonder Lake",
        "lat": 42.3794,
        "lng": -88.3493
    },
    {
        "state": "HI",
        "city": "Ainaloa",
        "lat": 19.5215,
        "lng": -154.9944
    },
    {
        "state": "TN",
        "city": "Tiptonville",
        "lat": 36.3871,
        "lng": -89.4712
    },
    {
        "state": "NJ",
        "city": "North Cape May",
        "lat": 38.9804,
        "lng": -74.9509
    },
    {
        "state": "MN",
        "city": "Pine Island",
        "lat": 44.1968,
        "lng": -92.6166
    },
    {
        "state": "OR",
        "city": "Boardman",
        "lat": 45.8378,
        "lng": -119.6937
    },
    {
        "state": "CA",
        "city": "Kelseyville",
        "lat": 38.9704,
        "lng": -122.8328
    },
    {
        "state": "NY",
        "city": "Putnam Lake",
        "lat": 41.4737,
        "lng": -73.5507
    },
    {
        "state": "OH",
        "city": "Amberley",
        "lat": 39.2035,
        "lng": -84.4283
    },
    {
        "state": "MI",
        "city": "Boyne City",
        "lat": 45.2136,
        "lng": -85.0132
    },
    {
        "state": "IA",
        "city": "West Liberty",
        "lat": 41.5727,
        "lng": -91.2623
    },
    {
        "state": "TX",
        "city": "Bunker Hill Village",
        "lat": 29.7647,
        "lng": -95.5317
    },
    {
        "state": "AR",
        "city": "Booneville",
        "lat": 35.1392,
        "lng": -93.9178
    },
    {
        "state": "CA",
        "city": "Copperopolis",
        "lat": 37.9488,
        "lng": -120.6352
    },
    {
        "state": "WI",
        "city": "Marshall",
        "lat": 43.1726,
        "lng": -89.0613
    },
    {
        "state": "CA",
        "city": "Loyola",
        "lat": 37.3503,
        "lng": -122.0979
    },
    {
        "state": "IA",
        "city": "Waukon",
        "lat": 43.2686,
        "lng": -91.4785
    },
    {
        "state": "FL",
        "city": "Juno Beach",
        "lat": 26.8754,
        "lng": -80.0589
    },
    {
        "state": "TX",
        "city": "Laureles",
        "lat": 26.1168,
        "lng": -97.4875
    },
    {
        "state": "NJ",
        "city": "Leisure Village West",
        "lat": 40.0104,
        "lng": -74.2806
    },
    {
        "state": "GA",
        "city": "Baldwin",
        "lat": 34.486,
        "lng": -83.5497
    },
    {
        "state": "MI",
        "city": "Portland",
        "lat": 42.8697,
        "lng": -84.8991
    },
    {
        "state": "CO",
        "city": "Basalt",
        "lat": 39.3663,
        "lng": -107.0413
    },
    {
        "state": "IN",
        "city": "Pittsboro",
        "lat": 39.8705,
        "lng": -86.4654
    },
    {
        "state": "IL",
        "city": "Dwight",
        "lat": 41.0983,
        "lng": -88.4249
    },
    {
        "state": "KS",
        "city": "Goodland",
        "lat": 39.3489,
        "lng": -101.7143
    },
    {
        "state": "AR",
        "city": "McGehee",
        "lat": 33.6278,
        "lng": -91.3953
    },
    {
        "state": "CA",
        "city": "Pixley",
        "lat": 35.9785,
        "lng": -119.3003
    },
    {
        "state": "TX",
        "city": "Anthony",
        "lat": 31.9876,
        "lng": -106.5933
    },
    {
        "state": "MI",
        "city": "Williamston",
        "lat": 42.6834,
        "lng": -84.2836
    },
    {
        "state": "OR",
        "city": "Tri-City",
        "lat": 42.9894,
        "lng": -123.2999
    },
    {
        "state": "OK",
        "city": "Fort Gibson",
        "lat": 35.7763,
        "lng": -95.2602
    },
    {
        "state": "NY",
        "city": "Highland-on-the-Lake",
        "lat": 42.7012,
        "lng": -78.9819
    },
    {
        "state": "IL",
        "city": "Aledo",
        "lat": 41.199,
        "lng": -90.7459
    },
    {
        "state": "PA",
        "city": "Freeland",
        "lat": 41.0212,
        "lng": -75.8963
    },
    {
        "state": "MT",
        "city": "Hardin",
        "lat": 45.7422,
        "lng": -107.6082
    },
    {
        "state": "CA",
        "city": "Bishop",
        "lat": 37.3665,
        "lng": -118.3958
    },
    {
        "state": "TN",
        "city": "Unicoi",
        "lat": 36.2217,
        "lng": -82.3292
    },
    {
        "state": "TX",
        "city": "San Diego",
        "lat": 27.7609,
        "lng": -98.2389
    },
    {
        "state": "NJ",
        "city": "Merchantville",
        "lat": 39.9502,
        "lng": -75.0504
    },
    {
        "state": "TN",
        "city": "Oneida",
        "lat": 36.5171,
        "lng": -84.5108
    },
    {
        "state": "TX",
        "city": "Cockrell Hill",
        "lat": 32.7382,
        "lng": -96.8885
    },
    {
        "state": "IL",
        "city": "Red Bud",
        "lat": 38.2096,
        "lng": -89.9989
    },
    {
        "state": "IL",
        "city": "Eldorado",
        "lat": 37.8114,
        "lng": -88.4415
    },
    {
        "state": "LA",
        "city": "Hahnville",
        "lat": 29.9641,
        "lng": -90.4141
    },
    {
        "state": "WI",
        "city": "Horicon",
        "lat": 43.4454,
        "lng": -88.6403
    },
    {
        "state": "FL",
        "city": "Florida Gulf Coast University",
        "lat": 26.4613,
        "lng": -81.7686
    },
    {
        "state": "MO",
        "city": "Malden",
        "lat": 36.585,
        "lng": -89.9808
    },
    {
        "state": "PA",
        "city": "Denver",
        "lat": 40.2326,
        "lng": -76.1392
    },
    {
        "state": "CA",
        "city": "Rexland Acres",
        "lat": 35.3051,
        "lng": -118.997
    },
    {
        "state": "NJ",
        "city": "White House Station",
        "lat": 40.6216,
        "lng": -74.7737
    },
    {
        "state": "WY",
        "city": "South Greeley",
        "lat": 41.0929,
        "lng": -104.8066
    },
    {
        "state": "MA",
        "city": "East Sandwich",
        "lat": 41.7365,
        "lng": -70.4341
    },
    {
        "state": "OH",
        "city": "Golf Manor",
        "lat": 39.1878,
        "lng": -84.4469
    },
    {
        "state": "TX",
        "city": "Wills Point",
        "lat": 32.7093,
        "lng": -96.0052
    },
    {
        "state": "SC",
        "city": "Wyboo",
        "lat": 33.5613,
        "lng": -80.2148
    },
    {
        "state": "MD",
        "city": "Boonsboro",
        "lat": 39.5078,
        "lng": -77.6585
    },
    {
        "state": "CA",
        "city": "Santa Venetia",
        "lat": 38.0056,
        "lng": -122.5033
    },
    {
        "state": "MD",
        "city": "Brentwood",
        "lat": 38.9439,
        "lng": -76.9571
    },
    {
        "state": "NY",
        "city": "Balmville",
        "lat": 41.5281,
        "lng": -74.0234
    },
    {
        "state": "IA",
        "city": "Carter Lake",
        "lat": 41.2884,
        "lng": -95.9171
    },
    {
        "state": "NC",
        "city": "Hudson",
        "lat": 35.8478,
        "lng": -81.4867
    },
    {
        "state": "MN",
        "city": "Montrose",
        "lat": 45.0669,
        "lng": -93.9203
    },
    {
        "state": "MN",
        "city": "Zumbrota",
        "lat": 44.295,
        "lng": -92.6736
    },
    {
        "state": "WI",
        "city": "Rochester",
        "lat": 42.7338,
        "lng": -88.2489
    },
    {
        "state": "CA",
        "city": "Oasis",
        "lat": 33.5275,
        "lng": -116.1261
    },
    {
        "state": "WI",
        "city": "Stanley",
        "lat": 44.9597,
        "lng": -90.9423
    },
    {
        "state": "DE",
        "city": "Harrington",
        "lat": 38.9243,
        "lng": -75.5707
    },
    {
        "state": "NY",
        "city": "Westhampton",
        "lat": 40.8325,
        "lng": -72.6616
    },
    {
        "state": "NY",
        "city": "West Nyack",
        "lat": 41.0907,
        "lng": -73.9714
    },
    {
        "state": "FL",
        "city": "Pea Ridge",
        "lat": 30.603,
        "lng": -87.1022
    },
    {
        "state": "WA",
        "city": "Clearview",
        "lat": 47.8292,
        "lng": -122.1451
    },
    {
        "state": "MI",
        "city": "Benton Heights",
        "lat": 42.1211,
        "lng": -86.4137
    },
    {
        "state": "MI",
        "city": "Plainwell",
        "lat": 42.4457,
        "lng": -85.6435
    },
    {
        "state": "OR",
        "city": "Three Rivers",
        "lat": 43.8366,
        "lng": -121.4646
    },
    {
        "state": "KS",
        "city": "Lindsborg",
        "lat": 38.5774,
        "lng": -97.6738
    },
    {
        "state": "NY",
        "city": "Sloan",
        "lat": 42.8921,
        "lng": -78.7918
    },
    {
        "state": "MS",
        "city": "Houston",
        "lat": 33.8963,
        "lng": -89.0031
    },
    {
        "state": "NC",
        "city": "Swansboro",
        "lat": 34.6957,
        "lng": -77.1367
    },
    {
        "state": "NJ",
        "city": "Lawrenceville",
        "lat": 40.3018,
        "lng": -74.7378
    },
    {
        "state": "TN",
        "city": "Wildwood Lake",
        "lat": 35.0893,
        "lng": -84.8512
    },
    {
        "state": "AL",
        "city": "Loxley",
        "lat": 30.6812,
        "lng": -87.7416
    },
    {
        "state": "MD",
        "city": "Marlboro Meadows",
        "lat": 38.8374,
        "lng": -76.7144
    },
    {
        "state": "MI",
        "city": "Vicksburg",
        "lat": 42.1185,
        "lng": -85.5413
    },
    {
        "state": "TX",
        "city": "McLendon-Chisholm",
        "lat": 32.8481,
        "lng": -96.391
    },
    {
        "state": "AK",
        "city": "Butte",
        "lat": 61.5539,
        "lng": -149.0035
    },
    {
        "state": "IL",
        "city": "Rochester",
        "lat": 39.7488,
        "lng": -89.5436
    },
    {
        "state": "OH",
        "city": "Mount Repose",
        "lat": 39.1907,
        "lng": -84.2197
    },
    {
        "state": "CT",
        "city": "Collinsville",
        "lat": 41.8189,
        "lng": -72.922
    },
    {
        "state": "IN",
        "city": "Georgetown",
        "lat": 38.2954,
        "lng": -85.964
    },
    {
        "state": "AL",
        "city": "Alexandria",
        "lat": 33.7675,
        "lng": -85.8792
    },
    {
        "state": "NY",
        "city": "Village Green",
        "lat": 43.1323,
        "lng": -76.3108
    },
    {
        "state": "CA",
        "city": "Tarpey Village",
        "lat": 36.7941,
        "lng": -119.7012
    },
    {
        "state": "GA",
        "city": "Washington",
        "lat": 33.7355,
        "lng": -82.7426
    },
    {
        "state": "CA",
        "city": "Jamestown",
        "lat": 37.9574,
        "lng": -120.411
    },
    {
        "state": "NY",
        "city": "South Glens Falls",
        "lat": 43.2951,
        "lng": -73.6351
    },
    {
        "state": "IL",
        "city": "Oglesby",
        "lat": 41.2932,
        "lng": -89.071
    },
    {
        "state": "NY",
        "city": "Setauket",
        "lat": 40.9484,
        "lng": -73.116
    },
    {
        "state": "OH",
        "city": "Yellow Springs",
        "lat": 39.7987,
        "lng": -83.8904
    },
    {
        "state": "IL",
        "city": "Byron",
        "lat": 42.1223,
        "lng": -89.2665
    },
    {
        "state": "FL",
        "city": "Umatilla",
        "lat": 28.9273,
        "lng": -81.665
    },
    {
        "state": "SC",
        "city": "Ridgeland",
        "lat": 32.4681,
        "lng": -80.9178
    },
    {
        "state": "CA",
        "city": "North Richmond",
        "lat": 37.9641,
        "lng": -122.3711
    },
    {
        "state": "TN",
        "city": "Hohenwald",
        "lat": 35.5515,
        "lng": -87.5539
    },
    {
        "state": "SC",
        "city": "Whitney",
        "lat": 34.9835,
        "lng": -81.926
    },
    {
        "state": "MD",
        "city": "Brookmont",
        "lat": 38.9546,
        "lng": -77.1292
    },
    {
        "state": "OK",
        "city": "Stilwell",
        "lat": 35.8145,
        "lng": -94.6317
    },
    {
        "state": "ID",
        "city": "McCall",
        "lat": 44.9076,
        "lng": -116.1124
    },
    {
        "state": "IL",
        "city": "Fairbury",
        "lat": 40.746,
        "lng": -88.5158
    },
    {
        "state": "ID",
        "city": "St. Anthony",
        "lat": 43.9648,
        "lng": -111.6841
    },
    {
        "state": "NY",
        "city": "Montrose",
        "lat": 41.2425,
        "lng": -73.9424
    },
    {
        "state": "TN",
        "city": "Oliver Springs",
        "lat": 36.0399,
        "lng": -84.3285
    },
    {
        "state": "NC",
        "city": "Maiden",
        "lat": 35.5845,
        "lng": -81.224
    },
    {
        "state": "MI",
        "city": "Romeo",
        "lat": 42.8049,
        "lng": -83.0041
    },
    {
        "state": "IN",
        "city": "Chandler",
        "lat": 38.0373,
        "lng": -87.3739
    },
    {
        "state": "CA",
        "city": "Empire",
        "lat": 37.6432,
        "lng": -120.9073
    },
    {
        "state": "CA",
        "city": "San Joaquin",
        "lat": 36.6057,
        "lng": -120.1897
    },
    {
        "state": "NY",
        "city": "Highland Falls",
        "lat": 41.3643,
        "lng": -73.9682
    },
    {
        "state": "GA",
        "city": "Walthourville",
        "lat": 31.7716,
        "lng": -81.6216
    },
    {
        "state": "OH",
        "city": "Richfield",
        "lat": 41.2354,
        "lng": -81.6421
    },
    {
        "state": "MN",
        "city": "Independence",
        "lat": 45.0219,
        "lng": -93.7076
    },
    {
        "state": "TX",
        "city": "Rosita",
        "lat": 28.6244,
        "lng": -100.4287
    },
    {
        "state": "CA",
        "city": "Desert Edge",
        "lat": 33.9223,
        "lng": -116.4401
    },
    {
        "state": "TX",
        "city": "Edgecliff Village",
        "lat": 32.6561,
        "lng": -97.3406
    },
    {
        "state": "TX",
        "city": "Cotulla",
        "lat": 28.4364,
        "lng": -99.2367
    },
    {
        "state": "CA",
        "city": "Angels",
        "lat": 38.0706,
        "lng": -120.5501
    },
    {
        "state": "OH",
        "city": "Barnesville",
        "lat": 39.9888,
        "lng": -81.1728
    },
    {
        "state": "MA",
        "city": "East Dennis",
        "lat": 41.7392,
        "lng": -70.1577
    },
    {
        "state": "NC",
        "city": "Gamewell",
        "lat": 35.864,
        "lng": -81.5978
    },
    {
        "state": "AK",
        "city": "Nome",
        "lat": 64.5213,
        "lng": -165.4053
    },
    {
        "state": "NC",
        "city": "Glen Raven",
        "lat": 36.1246,
        "lng": -79.4649
    },
    {
        "state": "NC",
        "city": "Tabor City",
        "lat": 34.1538,
        "lng": -78.8737
    },
    {
        "state": "TX",
        "city": "Farmersville",
        "lat": 33.1608,
        "lng": -96.3603
    },
    {
        "state": "IA",
        "city": "Albia",
        "lat": 41.0268,
        "lng": -92.8038
    },
    {
        "state": "KY",
        "city": "Russell",
        "lat": 38.5116,
        "lng": -82.6996
    },
    {
        "state": "KS",
        "city": "Hesston",
        "lat": 38.1401,
        "lng": -97.427
    },
    {
        "state": "OH",
        "city": "Greenhills",
        "lat": 39.267,
        "lng": -84.5194
    },
    {
        "state": "CA",
        "city": "Shingle Springs",
        "lat": 38.6665,
        "lng": -120.9371
    },
    {
        "state": "CA",
        "city": "Wheatland",
        "lat": 39.0287,
        "lng": -121.39
    },
    {
        "state": "CA",
        "city": "Felton",
        "lat": 37.0392,
        "lng": -122.0808
    },
    {
        "state": "FL",
        "city": "Lake Sarasota",
        "lat": 27.2948,
        "lng": -82.4323
    },
    {
        "state": "MO",
        "city": "Northwoods",
        "lat": 38.7035,
        "lng": -90.2824
    },
    {
        "state": "PA",
        "city": "Berwyn",
        "lat": 40.0396,
        "lng": -75.4439
    },
    {
        "state": "CA",
        "city": "Hidden Meadows",
        "lat": 33.2237,
        "lng": -117.1198
    },
    {
        "state": "MI",
        "city": "Imlay City",
        "lat": 43.0171,
        "lng": -83.0771
    },
    {
        "state": "PA",
        "city": "Frazer",
        "lat": 40.0374,
        "lng": -75.556
    },
    {
        "state": "IL",
        "city": "Deer Park",
        "lat": 42.1655,
        "lng": -88.0864
    },
    {
        "state": "NY",
        "city": "Glenwood Landing",
        "lat": 40.8295,
        "lng": -73.6378
    },
    {
        "state": "WI",
        "city": "Barron",
        "lat": 45.4015,
        "lng": -91.8476
    },
    {
        "state": "NC",
        "city": "Lowell",
        "lat": 35.2688,
        "lng": -81.1013
    },
    {
        "state": "NC",
        "city": "Kitty Hawk",
        "lat": 36.0717,
        "lng": -75.7184
    },
    {
        "state": "MS",
        "city": "Morton",
        "lat": 32.3455,
        "lng": -89.6572
    },
    {
        "state": "NC",
        "city": "Troutman",
        "lat": 35.6873,
        "lng": -80.883
    },
    {
        "state": "FL",
        "city": "Indian Rocks Beach",
        "lat": 27.8961,
        "lng": -82.8444
    },
    {
        "state": "NC",
        "city": "Bethlehem",
        "lat": 35.8162,
        "lng": -81.2962
    },
    {
        "state": "ME",
        "city": "South Eliot",
        "lat": 43.1287,
        "lng": -70.7952
    },
    {
        "state": "TX",
        "city": "Columbus",
        "lat": 29.7056,
        "lng": -96.5571
    },
    {
        "state": "FL",
        "city": "High Point",
        "lat": 28.5475,
        "lng": -82.5206
    },
    {
        "state": "WA",
        "city": "La Center",
        "lat": 45.8601,
        "lng": -122.6756
    },
    {
        "state": "MN",
        "city": "Mora",
        "lat": 45.8768,
        "lng": -93.2914
    },
    {
        "state": "PA",
        "city": "Reamstown",
        "lat": 40.2113,
        "lng": -76.118
    },
    {
        "state": "NY",
        "city": "Wynantskill",
        "lat": 42.6879,
        "lng": -73.6449
    },
    {
        "state": "GA",
        "city": "Harlem",
        "lat": 33.4275,
        "lng": -82.3131
    },
    {
        "state": "CA",
        "city": "Vandenberg AFB",
        "lat": 34.7477,
        "lng": -120.519
    },
    {
        "state": "NY",
        "city": "North Great River",
        "lat": 40.7599,
        "lng": -73.168
    },
    {
        "state": "NJ",
        "city": "Woodstown",
        "lat": 39.6503,
        "lng": -75.3251
    },
    {
        "state": "WI",
        "city": "Bloomer",
        "lat": 45.1033,
        "lng": -91.4915
    },
    {
        "state": "NC",
        "city": "Brices Creek",
        "lat": 35.0505,
        "lng": -77.0844
    },
    {
        "state": "OH",
        "city": "Sixteen Mile Stand",
        "lat": 39.2749,
        "lng": -84.3266
    },
    {
        "state": "TX",
        "city": "Taylor Lake Village",
        "lat": 29.5765,
        "lng": -95.0561
    },
    {
        "state": "NC",
        "city": "Jamestown",
        "lat": 35.9984,
        "lng": -79.9348
    },
    {
        "state": "PR",
        "city": "Camuy",
        "lat": 18.4825,
        "lng": -66.8501
    },
    {
        "state": "IN",
        "city": "Middlebury",
        "lat": 41.6696,
        "lng": -85.7075
    },
    {
        "state": "KY",
        "city": "Southgate",
        "lat": 39.0631,
        "lng": -84.4715
    },
    {
        "state": "UT",
        "city": "Mount Pleasant",
        "lat": 39.5406,
        "lng": -111.456
    },
    {
        "state": "PA",
        "city": "Riverview Park",
        "lat": 40.3912,
        "lng": -75.9509
    },
    {
        "state": "NC",
        "city": "Wilkesboro",
        "lat": 36.1424,
        "lng": -81.174
    },
    {
        "state": "CT",
        "city": "Stepney",
        "lat": 41.3256,
        "lng": -73.2674
    },
    {
        "state": "PA",
        "city": "Port Vue",
        "lat": 40.337,
        "lng": -79.872
    },
    {
        "state": "NY",
        "city": "Whitesboro",
        "lat": 43.124,
        "lng": -75.2967
    },
    {
        "state": "ID",
        "city": "Gooding",
        "lat": 42.9373,
        "lng": -114.7134
    },
    {
        "state": "TX",
        "city": "Hudson Bend",
        "lat": 30.414,
        "lng": -97.928
    },
    {
        "state": "IA",
        "city": "Emmetsburg",
        "lat": 43.1145,
        "lng": -94.68
    },
    {
        "state": "AZ",
        "city": "Carefree",
        "lat": 33.8234,
        "lng": -111.9161
    },
    {
        "state": "NC",
        "city": "Rutherfordton",
        "lat": 35.3642,
        "lng": -81.9613
    },
    {
        "state": "TN",
        "city": "Camden",
        "lat": 36.0663,
        "lng": -88.1047
    },
    {
        "state": "NY",
        "city": "Spencerport",
        "lat": 43.1882,
        "lng": -77.8067
    },
    {
        "state": "WI",
        "city": "Arcadia",
        "lat": 44.2486,
        "lng": -91.4916
    },
    {
        "state": "VA",
        "city": "Norton",
        "lat": 36.9314,
        "lng": -82.6262
    },
    {
        "state": "TX",
        "city": "Scissors",
        "lat": 26.1333,
        "lng": -98.0475
    },
    {
        "state": "AL",
        "city": "Holt",
        "lat": 33.2302,
        "lng": -87.4827
    },
    {
        "state": "IN",
        "city": "Hanover",
        "lat": 38.7133,
        "lng": -85.4725
    },
    {
        "state": "OR",
        "city": "Harrisburg",
        "lat": 44.2719,
        "lng": -123.1656
    },
    {
        "state": "NC",
        "city": "Landis",
        "lat": 35.5477,
        "lng": -80.6113
    },
    {
        "state": "NJ",
        "city": "South Toms River",
        "lat": 39.9418,
        "lng": -74.2087
    },
    {
        "state": "SC",
        "city": "Honea Path",
        "lat": 34.4476,
        "lng": -82.395
    },
    {
        "state": "TX",
        "city": "Groesbeck",
        "lat": 31.5259,
        "lng": -96.5284
    },
    {
        "state": "MN",
        "city": "Long Prairie",
        "lat": 45.9775,
        "lng": -94.863
    },
    {
        "state": "FL",
        "city": "North Brooksville",
        "lat": 28.5731,
        "lng": -82.3744
    },
    {
        "state": "NC",
        "city": "Eastover",
        "lat": 35.0959,
        "lng": -78.7862
    },
    {
        "state": "AR",
        "city": "Austin",
        "lat": 35.0058,
        "lng": -91.9895
    },
    {
        "state": "AR",
        "city": "Manila",
        "lat": 35.8847,
        "lng": -90.1652
    },
    {
        "state": "KY",
        "city": "Buckner",
        "lat": 38.3903,
        "lng": -85.4535
    },
    {
        "state": "NJ",
        "city": "Richwood",
        "lat": 39.7139,
        "lng": -75.1731
    },
    {
        "state": "PR",
        "city": "Comerio",
        "lat": 18.22,
        "lng": -66.2246
    },
    {
        "state": "AL",
        "city": "Thomasville",
        "lat": 31.911,
        "lng": -87.7419
    },
    {
        "state": "TX",
        "city": "Santa Rita Ranch",
        "lat": 30.6642,
        "lng": -97.8328
    },
    {
        "state": "KY",
        "city": "Stanford",
        "lat": 37.5331,
        "lng": -84.6602
    },
    {
        "state": "WA",
        "city": "Lake Holm",
        "lat": 47.2985,
        "lng": -122.1335
    },
    {
        "state": "NY",
        "city": "Minoa",
        "lat": 43.0742,
        "lng": -76.0083
    },
    {
        "state": "FL",
        "city": "Wallace",
        "lat": 30.6746,
        "lng": -87.1996
    },
    {
        "state": "IN",
        "city": "Leo-Cedarville",
        "lat": 41.2199,
        "lng": -85.0193
    },
    {
        "state": "FL",
        "city": "Vineyards",
        "lat": 26.2279,
        "lng": -81.728
    },
    {
        "state": "MD",
        "city": "Brown Station",
        "lat": 38.8539,
        "lng": -76.7978
    },
    {
        "state": "PA",
        "city": "Hemlock Farms",
        "lat": 41.3157,
        "lng": -75.0515
    },
    {
        "state": "UT",
        "city": "East Basin",
        "lat": 40.7359,
        "lng": -111.4708
    },
    {
        "state": "MI",
        "city": "Cedar Springs",
        "lat": 43.2201,
        "lng": -85.5535
    },
    {
        "state": "UT",
        "city": "Mountain Green",
        "lat": 41.1476,
        "lng": -111.7901
    },
    {
        "state": "FL",
        "city": "Chipley",
        "lat": 30.7752,
        "lng": -85.5406
    },
    {
        "state": "OH",
        "city": "Plain City",
        "lat": 40.1066,
        "lng": -83.2686
    },
    {
        "state": "WA",
        "city": "Fox Island",
        "lat": 47.2477,
        "lng": -122.6256
    },
    {
        "state": "MI",
        "city": "Paw Paw Lake",
        "lat": 42.2113,
        "lng": -86.2759
    },
    {
        "state": "TX",
        "city": "West Columbia",
        "lat": 29.1422,
        "lng": -95.6491
    },
    {
        "state": "PA",
        "city": "Saint Davids",
        "lat": 40.0385,
        "lng": -75.3729
    },
    {
        "state": "ID",
        "city": "Heyburn",
        "lat": 42.5599,
        "lng": -113.7624
    },
    {
        "state": "ME",
        "city": "York Harbor",
        "lat": 43.1435,
        "lng": -70.649
    },
    {
        "state": "MO",
        "city": "Frontenac",
        "lat": 38.6301,
        "lng": -90.419
    },
    {
        "state": "NJ",
        "city": "North Wildwood",
        "lat": 39.0033,
        "lng": -74.8006
    },
    {
        "state": "WI",
        "city": "Omro",
        "lat": 44.0391,
        "lng": -88.7378
    },
    {
        "state": "WA",
        "city": "Bunk Foss",
        "lat": 47.9618,
        "lng": -122.0944
    },
    {
        "state": "CA",
        "city": "Lake California",
        "lat": 40.3608,
        "lng": -122.2102
    },
    {
        "state": "LA",
        "city": "Franklinton",
        "lat": 30.848,
        "lng": -90.1459
    },
    {
        "state": "CT",
        "city": "Compo",
        "lat": 41.1225,
        "lng": -73.3516
    },
    {
        "state": "OH",
        "city": "Paulding",
        "lat": 41.1424,
        "lng": -84.5824
    },
    {
        "state": "VA",
        "city": "Navy",
        "lat": 38.8882,
        "lng": -77.3907
    },
    {
        "state": "GA",
        "city": "Bonanza",
        "lat": 33.4589,
        "lng": -84.3379
    },
    {
        "state": "ID",
        "city": "Lincoln",
        "lat": 43.5183,
        "lng": -111.9692
    },
    {
        "state": "TN",
        "city": "Gatlinburg",
        "lat": 35.725,
        "lng": -83.4938
    },
    {
        "state": "UT",
        "city": "Delta",
        "lat": 39.3623,
        "lng": -112.5471
    },
    {
        "state": "NY",
        "city": "Marlboro",
        "lat": 41.6047,
        "lng": -73.9772
    },
    {
        "state": "OH",
        "city": "Ballville",
        "lat": 41.3224,
        "lng": -83.1341
    },
    {
        "state": "MA",
        "city": "North Lakeville",
        "lat": 41.862,
        "lng": -70.9411
    },
    {
        "state": "AR",
        "city": "Elkins",
        "lat": 36.0173,
        "lng": -94.0252
    },
    {
        "state": "PR",
        "city": "Brenas",
        "lat": 18.4734,
        "lng": -66.3346
    },
    {
        "state": "VT",
        "city": "Wilder",
        "lat": 43.6804,
        "lng": -72.3168
    },
    {
        "state": "WA",
        "city": "Granger",
        "lat": 46.3454,
        "lng": -120.1925
    },
    {
        "state": "GA",
        "city": "Hannahs Mill",
        "lat": 32.9369,
        "lng": -84.3406
    },
    {
        "state": "CA",
        "city": "Forestville",
        "lat": 38.4825,
        "lng": -122.8899
    },
    {
        "state": "CA",
        "city": "Valley Springs",
        "lat": 38.1694,
        "lng": -120.826
    },
    {
        "state": "NC",
        "city": "Dana",
        "lat": 35.3239,
        "lng": -82.3722
    },
    {
        "state": "HI",
        "city": "Mountain View",
        "lat": 19.5366,
        "lng": -155.159
    },
    {
        "state": "TX",
        "city": "Eastland",
        "lat": 32.4024,
        "lng": -98.8176
    },
    {
        "state": "PR",
        "city": "Punta Santiago",
        "lat": 18.1619,
        "lng": -65.7584
    },
    {
        "state": "TX",
        "city": "Central Gardens",
        "lat": 29.9893,
        "lng": -94.0216
    },
    {
        "state": "OH",
        "city": "North Baltimore",
        "lat": 41.1803,
        "lng": -83.6695
    },
    {
        "state": "NY",
        "city": "Calcium",
        "lat": 44.0401,
        "lng": -75.8468
    },
    {
        "state": "MN",
        "city": "Two Harbors",
        "lat": 47.0302,
        "lng": -91.6752
    },
    {
        "state": "WI",
        "city": "Combined Locks",
        "lat": 44.2642,
        "lng": -88.3064
    },
    {
        "state": "FL",
        "city": "Kensington Park",
        "lat": 27.3578,
        "lng": -82.4942
    },
    {
        "state": "AR",
        "city": "Landmark",
        "lat": 34.6076,
        "lng": -92.3186
    },
    {
        "state": "CA",
        "city": "Mono Vista",
        "lat": 38.0123,
        "lng": -120.2697
    },
    {
        "state": "AK",
        "city": "Mill Bay",
        "lat": 57.8185,
        "lng": -152.3657
    },
    {
        "state": "SC",
        "city": "Andrews",
        "lat": 33.4494,
        "lng": -79.566
    },
    {
        "state": "IL",
        "city": "Gibson City",
        "lat": 40.4665,
        "lng": -88.3788
    },
    {
        "state": "TN",
        "city": "Etowah",
        "lat": 35.3381,
        "lng": -84.5282
    },
    {
        "state": "MO",
        "city": "Palmyra",
        "lat": 39.7978,
        "lng": -91.5265
    },
    {
        "state": "CA",
        "city": "Old Stine",
        "lat": 35.3478,
        "lng": -119.047
    },
    {
        "state": "GA",
        "city": "Manchester",
        "lat": 32.8565,
        "lng": -84.6329
    },
    {
        "state": "AL",
        "city": "Lake View",
        "lat": 33.2802,
        "lng": -87.1259
    },
    {
        "state": "NY",
        "city": "Locust Valley",
        "lat": 40.8783,
        "lng": -73.5884
    },
    {
        "state": "AR",
        "city": "Piggott",
        "lat": 36.3858,
        "lng": -90.2016
    },
    {
        "state": "AL",
        "city": "Centre",
        "lat": 34.1537,
        "lng": -85.6689
    },
    {
        "state": "FL",
        "city": "Flagler Estates",
        "lat": 29.6441,
        "lng": -81.4571
    },
    {
        "state": "AL",
        "city": "Grand Bay",
        "lat": 30.4717,
        "lng": -88.345
    },
    {
        "state": "MN",
        "city": "Melrose",
        "lat": 45.6757,
        "lng": -94.8128
    },
    {
        "state": "PA",
        "city": "Kane",
        "lat": 41.6631,
        "lng": -78.8094
    },
    {
        "state": "AR",
        "city": "Johnson",
        "lat": 36.1328,
        "lng": -94.1757
    },
    {
        "state": "TX",
        "city": "Sweeny",
        "lat": 29.0463,
        "lng": -95.6988
    },
    {
        "state": "MS",
        "city": "Hazlehurst",
        "lat": 31.8646,
        "lng": -90.3929
    },
    {
        "state": "CA",
        "city": "Esparto",
        "lat": 38.6934,
        "lng": -122.0241
    },
    {
        "state": "NC",
        "city": "Skippers Corner",
        "lat": 34.3292,
        "lng": -77.9141
    },
    {
        "state": "KS",
        "city": "Lyons",
        "lat": 38.3462,
        "lng": -98.2045
    },
    {
        "state": "IN",
        "city": "Austin",
        "lat": 38.7417,
        "lng": -85.8117
    },
    {
        "state": "HI",
        "city": "Hauula",
        "lat": 21.6111,
        "lng": -157.9118
    },
    {
        "state": "TN",
        "city": "Jasper",
        "lat": 35.0663,
        "lng": -85.6227
    },
    {
        "state": "FL",
        "city": "Holden Lakes",
        "lat": 28.5013,
        "lng": -81.3878
    },
    {
        "state": "FL",
        "city": "Point Baker",
        "lat": 30.6855,
        "lng": -87.0522
    },
    {
        "state": "IA",
        "city": "Osage",
        "lat": 43.2827,
        "lng": -92.8113
    },
    {
        "state": "FL",
        "city": "Watergate",
        "lat": 26.3359,
        "lng": -80.2125
    },
    {
        "state": "IA",
        "city": "Eagle Grove",
        "lat": 42.6662,
        "lng": -93.9024
    },
    {
        "state": "NC",
        "city": "Buies Creek",
        "lat": 35.4082,
        "lng": -78.7414
    },
    {
        "state": "CA",
        "city": "Meadow Vista",
        "lat": 39.0029,
        "lng": -121.0303
    },
    {
        "state": "VA",
        "city": "North Shore",
        "lat": 37.0783,
        "lng": -79.6525
    },
    {
        "state": "UT",
        "city": "Beaver",
        "lat": 38.2759,
        "lng": -112.6383
    },
    {
        "state": "OK",
        "city": "Park Hill",
        "lat": 35.8417,
        "lng": -94.9734
    },
    {
        "state": "HI",
        "city": "Hawaiian Ocean View",
        "lat": 19.0959,
        "lng": -155.775
    },
    {
        "state": "TX",
        "city": "Ballinger",
        "lat": 31.7394,
        "lng": -99.9559
    },
    {
        "state": "PA",
        "city": "Boiling Springs",
        "lat": 40.1592,
        "lng": -77.1391
    },
    {
        "state": "SC",
        "city": "East Camden",
        "lat": 34.2687,
        "lng": -80.5681
    },
    {
        "state": "NE",
        "city": "O'Neill",
        "lat": 42.461,
        "lng": -98.6465
    },
    {
        "state": "ID",
        "city": "Hidden Springs",
        "lat": 43.7201,
        "lng": -116.2508
    },
    {
        "state": "CA",
        "city": "Weaverville",
        "lat": 40.7407,
        "lng": -122.929
    },
    {
        "state": "NJ",
        "city": "Tuckerton",
        "lat": 39.5973,
        "lng": -74.3306
    },
    {
        "state": "AZ",
        "city": "Cornville",
        "lat": 34.7389,
        "lng": -111.9086
    },
    {
        "state": "PA",
        "city": "Brownstown",
        "lat": 40.1267,
        "lng": -76.2184
    },
    {
        "state": "WV",
        "city": "Shady Spring",
        "lat": 37.7032,
        "lng": -81.0914
    },
    {
        "state": "CO",
        "city": "Ponderosa Park",
        "lat": 39.3987,
        "lng": -104.6355
    },
    {
        "state": "PA",
        "city": "Stonybrook",
        "lat": 39.9811,
        "lng": -76.6306
    },
    {
        "state": "WY",
        "city": "Wheatland",
        "lat": 42.0517,
        "lng": -104.9595
    },
    {
        "state": "OH",
        "city": "Delshire",
        "lat": 39.0884,
        "lng": -84.5949
    },
    {
        "state": "AR",
        "city": "Marianna",
        "lat": 34.7736,
        "lng": -90.7674
    },
    {
        "state": "FL",
        "city": "West DeLand",
        "lat": 29.0162,
        "lng": -81.3343
    },
    {
        "state": "CA",
        "city": "Crockett",
        "lat": 38.0519,
        "lng": -122.2201
    },
    {
        "state": "TX",
        "city": "Bullard",
        "lat": 32.1451,
        "lng": -95.3196
    },
    {
        "state": "GA",
        "city": "Greensboro",
        "lat": 33.5687,
        "lng": -83.1872
    },
    {
        "state": "IN",
        "city": "Hebron",
        "lat": 41.3247,
        "lng": -87.2018
    },
    {
        "state": "NY",
        "city": "Lloyd Harbor",
        "lat": 40.9138,
        "lng": -73.4616
    },
    {
        "state": "WA",
        "city": "Three Lakes",
        "lat": 47.942,
        "lng": -121.9924
    },
    {
        "state": "AL",
        "city": "Emerald Mountain",
        "lat": 32.4396,
        "lng": -86.0857
    },
    {
        "state": "NC",
        "city": "Rockfish",
        "lat": 34.9902,
        "lng": -79.0694
    },
    {
        "state": "NY",
        "city": "Islandia",
        "lat": 40.8069,
        "lng": -73.1711
    },
    {
        "state": "IL",
        "city": "Tolono",
        "lat": 39.9914,
        "lng": -88.2625
    },
    {
        "state": "KS",
        "city": "Mission Hills",
        "lat": 39.0141,
        "lng": -94.6172
    },
    {
        "state": "NC",
        "city": "Lowesville",
        "lat": 35.4193,
        "lng": -80.9998
    },
    {
        "state": "AR",
        "city": "Gravette",
        "lat": 36.4291,
        "lng": -94.3712
    },
    {
        "state": "OH",
        "city": "Mingo Junction",
        "lat": 40.3244,
        "lng": -80.6173
    },
    {
        "state": "NJ",
        "city": "High Bridge",
        "lat": 40.6684,
        "lng": -74.894
    },
    {
        "state": "WV",
        "city": "Blennerhassett",
        "lat": 39.2562,
        "lng": -81.6316
    },
    {
        "state": "AL",
        "city": "Priceville",
        "lat": 34.5246,
        "lng": -86.8856
    },
    {
        "state": "IN",
        "city": "Fort Branch",
        "lat": 38.2461,
        "lng": -87.5734
    },
    {
        "state": "TX",
        "city": "Elm Creek",
        "lat": 28.7783,
        "lng": -100.491
    },
    {
        "state": "TX",
        "city": "Laguna Vista",
        "lat": 26.1097,
        "lng": -97.2968
    },
    {
        "state": "TX",
        "city": "Howe",
        "lat": 33.5067,
        "lng": -96.6155
    },
    {
        "state": "FL",
        "city": "Lake Clarke Shores",
        "lat": 26.6461,
        "lng": -80.0752
    },
    {
        "state": "HI",
        "city": "Kaunakakai",
        "lat": 21.0905,
        "lng": -156.9981
    },
    {
        "state": "WA",
        "city": "Indianola",
        "lat": 47.7564,
        "lng": -122.5158
    },
    {
        "state": "WA",
        "city": "Sunnyslope",
        "lat": 47.4913,
        "lng": -120.3493
    },
    {
        "state": "OH",
        "city": "Oakwood",
        "lat": 41.3669,
        "lng": -81.5036
    },
    {
        "state": "CA",
        "city": "Cambrian Park",
        "lat": 37.2563,
        "lng": -121.9287
    },
    {
        "state": "CA",
        "city": "Seacliff",
        "lat": 36.977,
        "lng": -121.9176
    },
    {
        "state": "OR",
        "city": "Toledo",
        "lat": 44.6198,
        "lng": -123.9341
    },
    {
        "state": "WA",
        "city": "Canyon Creek",
        "lat": 48.1157,
        "lng": -121.9832
    },
    {
        "state": "FL",
        "city": "Lely",
        "lat": 26.1032,
        "lng": -81.7297
    },
    {
        "state": "PA",
        "city": "Pocono Woodland Lakes",
        "lat": 41.3225,
        "lng": -74.8902
    },
    {
        "state": "PA",
        "city": "Northern Cambria",
        "lat": 40.6561,
        "lng": -78.7783
    },
    {
        "state": "PA",
        "city": "Mahanoy City",
        "lat": 40.8126,
        "lng": -76.1382
    },
    {
        "state": "PR",
        "city": "Barceloneta",
        "lat": 18.453,
        "lng": -66.5381
    },
    {
        "state": "IL",
        "city": "Hainesville",
        "lat": 42.3415,
        "lng": -88.0686
    },
    {
        "state": "PA",
        "city": "Manor",
        "lat": 40.3459,
        "lng": -79.6693
    },
    {
        "state": "OH",
        "city": "Northfield",
        "lat": 41.3427,
        "lng": -81.5285
    },
    {
        "state": "AR",
        "city": "Ozark",
        "lat": 35.4991,
        "lng": -93.8438
    },
    {
        "state": "TX",
        "city": "Shavano Park",
        "lat": 29.5861,
        "lng": -98.5563
    },
    {
        "state": "OK",
        "city": "Nowata",
        "lat": 36.6985,
        "lng": -95.6372
    },
    {
        "state": "LA",
        "city": "Lake Providence",
        "lat": 32.8132,
        "lng": -91.1825
    },
    {
        "state": "PA",
        "city": "Pleasant Gap",
        "lat": 40.8673,
        "lng": -77.7439
    },
    {
        "state": "OH",
        "city": "Greentown",
        "lat": 40.9266,
        "lng": -81.4015
    },
    {
        "state": "VA",
        "city": "Clifton Forge",
        "lat": 37.8232,
        "lng": -79.825
    },
    {
        "state": "OH",
        "city": "Bluffton",
        "lat": 40.8912,
        "lng": -83.8887
    },
    {
        "state": "PR",
        "city": "Bajadero",
        "lat": 18.4245,
        "lng": -66.6765
    },
    {
        "state": "PA",
        "city": "Eastlawn Gardens",
        "lat": 40.748,
        "lng": -75.2913
    },
    {
        "state": "NJ",
        "city": "Six Mile Run",
        "lat": 40.473,
        "lng": -74.5334
    },
    {
        "state": "KY",
        "city": "Beaver Dam",
        "lat": 37.4042,
        "lng": -86.8741
    },
    {
        "state": "AZ",
        "city": "San Manuel",
        "lat": 32.6091,
        "lng": -110.6415
    },
    {
        "state": "WI",
        "city": "Seymour",
        "lat": 44.5142,
        "lng": -88.3271
    },
    {
        "state": "FL",
        "city": "Port St. Joe",
        "lat": 29.8274,
        "lng": -85.3075
    },
    {
        "state": "NJ",
        "city": "Stanhope",
        "lat": 40.9141,
        "lng": -74.7027
    },
    {
        "state": "MO",
        "city": "El Dorado Springs",
        "lat": 37.8694,
        "lng": -94.0196
    },
    {
        "state": "CO",
        "city": "Silt",
        "lat": 39.5483,
        "lng": -107.6531
    },
    {
        "state": "AZ",
        "city": "Fort Defiance",
        "lat": 35.7477,
        "lng": -109.0674
    },
    {
        "state": "IL",
        "city": "Riverton",
        "lat": 39.8456,
        "lng": -89.5363
    },
    {
        "state": "MN",
        "city": "Perham",
        "lat": 46.5999,
        "lng": -95.5771
    },
    {
        "state": "GA",
        "city": "Blackshear",
        "lat": 31.2954,
        "lng": -82.2453
    },
    {
        "state": "MN",
        "city": "St. Augusta",
        "lat": 45.4498,
        "lng": -94.1995
    },
    {
        "state": "IL",
        "city": "Fulton",
        "lat": 41.865,
        "lng": -90.1593
    },
    {
        "state": "OH",
        "city": "Carey",
        "lat": 40.9497,
        "lng": -83.3831
    },
    {
        "state": "VA",
        "city": "Dahlgren",
        "lat": 38.3443,
        "lng": -77.0624
    },
    {
        "state": "UT",
        "city": "Gunnison",
        "lat": 39.1569,
        "lng": -111.8135
    },
    {
        "state": "TN",
        "city": "Centerville",
        "lat": 35.8042,
        "lng": -87.4577
    },
    {
        "state": "AR",
        "city": "Gibson",
        "lat": 34.8923,
        "lng": -92.2341
    },
    {
        "state": "OH",
        "city": "Shadyside",
        "lat": 39.9716,
        "lng": -80.751
    },
    {
        "state": "CA",
        "city": "Lake Isabella",
        "lat": 35.6378,
        "lng": -118.482
    },
    {
        "state": "OH",
        "city": "Dry Ridge",
        "lat": 39.2589,
        "lng": -84.6342
    },
    {
        "state": "VA",
        "city": "Gloucester Courthouse",
        "lat": 37.4053,
        "lng": -76.526
    },
    {
        "state": "GA",
        "city": "Cleveland",
        "lat": 34.597,
        "lng": -83.7622
    },
    {
        "state": "NC",
        "city": "Fairview",
        "lat": 35.1545,
        "lng": -80.5345
    },
    {
        "state": "FL",
        "city": "Tiger Point",
        "lat": 30.3757,
        "lng": -87.0573
    },
    {
        "state": "IN",
        "city": "Union City",
        "lat": 40.1995,
        "lng": -84.8206
    },
    {
        "state": "PA",
        "city": "Pen Argyl",
        "lat": 40.8676,
        "lng": -75.2534
    },
    {
        "state": "WI",
        "city": "Waterloo",
        "lat": 43.1835,
        "lng": -88.9899
    },
    {
        "state": "OH",
        "city": "Four Bridges",
        "lat": 39.3828,
        "lng": -84.3542
    },
    {
        "state": "NE",
        "city": "Broken Bow",
        "lat": 41.4051,
        "lng": -99.6408
    },
    {
        "state": "GA",
        "city": "West Point",
        "lat": 32.8937,
        "lng": -85.1453
    },
    {
        "state": "CA",
        "city": "Pine Hills",
        "lat": 40.7313,
        "lng": -124.1551
    },
    {
        "state": "GA",
        "city": "Avondale Estates",
        "lat": 33.7699,
        "lng": -84.2648
    },
    {
        "state": "NC",
        "city": "River Road",
        "lat": 35.5107,
        "lng": -76.9898
    },
    {
        "state": "WA",
        "city": "Mattawa",
        "lat": 46.737,
        "lng": -119.9043
    },
    {
        "state": "WI",
        "city": "Sauk City",
        "lat": 43.2722,
        "lng": -89.7312
    },
    {
        "state": "SD",
        "city": "Milbank",
        "lat": 45.2195,
        "lng": -96.6338
    },
    {
        "state": "OH",
        "city": "Lake Lakengren",
        "lat": 39.6894,
        "lng": -84.69
    },
    {
        "state": "NY",
        "city": "Bardonia",
        "lat": 41.1128,
        "lng": -73.9822
    },
    {
        "state": "MO",
        "city": "Moscow Mills",
        "lat": 38.94,
        "lng": -90.9254
    },
    {
        "state": "GA",
        "city": "Pelham",
        "lat": 31.1267,
        "lng": -84.1515
    },
    {
        "state": "VA",
        "city": "Cloverdale",
        "lat": 37.3566,
        "lng": -79.9055
    },
    {
        "state": "NY",
        "city": "Haviland",
        "lat": 41.765,
        "lng": -73.8977
    },
    {
        "state": "FL",
        "city": "Midway",
        "lat": 30.4995,
        "lng": -84.4582
    },
    {
        "state": "MN",
        "city": "Eveleth",
        "lat": 47.4637,
        "lng": -92.5444
    },
    {
        "state": "NY",
        "city": "Muttontown",
        "lat": 40.8254,
        "lng": -73.5363
    },
    {
        "state": "SC",
        "city": "Pendleton",
        "lat": 34.6451,
        "lng": -82.7818
    },
    {
        "state": "OK",
        "city": "Elgin",
        "lat": 34.7849,
        "lng": -98.301
    },
    {
        "state": "WA",
        "city": "Benton City",
        "lat": 46.2622,
        "lng": -119.4812
    },
    {
        "state": "CT",
        "city": "Niantic",
        "lat": 41.3258,
        "lng": -72.1952
    },
    {
        "state": "TX",
        "city": "Josephine",
        "lat": 33.0617,
        "lng": -96.3187
    },
    {
        "state": "AL",
        "city": "Evergreen",
        "lat": 31.4342,
        "lng": -86.9723
    },
    {
        "state": "OH",
        "city": "Lockland",
        "lat": 39.2279,
        "lng": -84.4565
    },
    {
        "state": "MI",
        "city": "Durand",
        "lat": 42.9127,
        "lng": -83.989
    },
    {
        "state": "NC",
        "city": "Elroy",
        "lat": 35.3308,
        "lng": -77.9226
    },
    {
        "state": "NC",
        "city": "Windsor",
        "lat": 35.9928,
        "lng": -76.9401
    },
    {
        "state": "CA",
        "city": "Planada",
        "lat": 37.2902,
        "lng": -120.3217
    },
    {
        "state": "FL",
        "city": "St. James City",
        "lat": 26.5506,
        "lng": -82.0979
    },
    {
        "state": "OH",
        "city": "Mariemont",
        "lat": 39.1429,
        "lng": -84.3783
    },
    {
        "state": "SC",
        "city": "Capitol View",
        "lat": 33.965,
        "lng": -80.9223
    },
    {
        "state": "CA",
        "city": "Idyllwild-Pine Cove",
        "lat": 33.7443,
        "lng": -116.7258
    },
    {
        "state": "ID",
        "city": "Ketchum",
        "lat": 43.6867,
        "lng": -114.373
    },
    {
        "state": "TX",
        "city": "Huntington",
        "lat": 31.2803,
        "lng": -94.577
    },
    {
        "state": "TX",
        "city": "Barrett",
        "lat": 29.8671,
        "lng": -95.0537
    },
    {
        "state": "OR",
        "city": "Myrtle Creek",
        "lat": 43.0227,
        "lng": -123.2812
    },
    {
        "state": "WI",
        "city": "Black River Falls",
        "lat": 44.2981,
        "lng": -90.842
    },
    {
        "state": "FL",
        "city": "Oakland",
        "lat": 28.5535,
        "lng": -81.636
    },
    {
        "state": "MI",
        "city": "Oxford",
        "lat": 42.8218,
        "lng": -83.2563
    },
    {
        "state": "TX",
        "city": "Clifton",
        "lat": 31.7822,
        "lng": -97.5824
    },
    {
        "state": "PA",
        "city": "Spring City",
        "lat": 40.1768,
        "lng": -75.5466
    },
    {
        "state": "OK",
        "city": "Frederick",
        "lat": 34.3708,
        "lng": -99.0008
    },
    {
        "state": "NJ",
        "city": "Netcong",
        "lat": 40.8985,
        "lng": -74.7019
    },
    {
        "state": "HI",
        "city": "Hawaiian Acres",
        "lat": 19.5324,
        "lng": -155.0498
    },
    {
        "state": "CA",
        "city": "Rollingwood",
        "lat": 37.9654,
        "lng": -122.3306
    },
    {
        "state": "NC",
        "city": "Flat Rock",
        "lat": 35.2678,
        "lng": -82.4526
    },
    {
        "state": "NE",
        "city": "West Point",
        "lat": 41.8379,
        "lng": -96.7057
    },
    {
        "state": "TX",
        "city": "Shenandoah",
        "lat": 30.184,
        "lng": -95.4557
    },
    {
        "state": "WV",
        "city": "Pleasant Valley",
        "lat": 39.4504,
        "lng": -80.1552
    },
    {
        "state": "TX",
        "city": "Westway",
        "lat": 31.9603,
        "lng": -106.576
    },
    {
        "state": "PA",
        "city": "Mifflinburg",
        "lat": 40.9202,
        "lng": -77.0465
    },
    {
        "state": "FL",
        "city": "Holden Heights",
        "lat": 28.5013,
        "lng": -81.3878
    },
    {
        "state": "MN",
        "city": "Plainview",
        "lat": 44.1648,
        "lng": -92.1697
    },
    {
        "state": "FL",
        "city": "Goulding",
        "lat": 30.4396,
        "lng": -87.23
    },
    {
        "state": "WI",
        "city": "Lake Delton",
        "lat": 43.5932,
        "lng": -89.7841
    },
    {
        "state": "WV",
        "city": "Welch",
        "lat": 37.4455,
        "lng": -81.5721
    },
    {
        "state": "UT",
        "city": "Manti",
        "lat": 39.2668,
        "lng": -111.6351
    },
    {
        "state": "IA",
        "city": "New Hampton",
        "lat": 43.0563,
        "lng": -92.3153
    },
    {
        "state": "GA",
        "city": "Wrightsville",
        "lat": 32.727,
        "lng": -82.7191
    },
    {
        "state": "LA",
        "city": "Blanchard",
        "lat": 32.6027,
        "lng": -93.8832
    },
    {
        "state": "TN",
        "city": "Park City",
        "lat": 35.0782,
        "lng": -86.5834
    },
    {
        "state": "NJ",
        "city": "Gibbstown",
        "lat": 39.8233,
        "lng": -75.2782
    },
    {
        "state": "IL",
        "city": "Westville",
        "lat": 40.0439,
        "lng": -87.6389
    },
    {
        "state": "ME",
        "city": "Lisbon",
        "lat": 44.0289,
        "lng": -70.1076
    },
    {
        "state": "CA",
        "city": "Campo",
        "lat": 32.6394,
        "lng": -116.4744
    },
    {
        "state": "MS",
        "city": "Beechwood",
        "lat": 32.3303,
        "lng": -90.819
    },
    {
        "state": "MO",
        "city": "Hillsboro",
        "lat": 38.2331,
        "lng": -90.5671
    },
    {
        "state": "TX",
        "city": "Kenedy",
        "lat": 28.8176,
        "lng": -97.8518
    },
    {
        "state": "GA",
        "city": "Leesburg",
        "lat": 31.7324,
        "lng": -84.1688
    },
    {
        "state": "SD",
        "city": "Hot Springs",
        "lat": 43.4195,
        "lng": -103.4657
    },
    {
        "state": "ND",
        "city": "Horace",
        "lat": 46.7558,
        "lng": -96.9078
    },
    {
        "state": "IN",
        "city": "Sheridan",
        "lat": 40.132,
        "lng": -86.2198
    },
    {
        "state": "NE",
        "city": "Gothenburg",
        "lat": 40.9242,
        "lng": -100.154
    },
    {
        "state": "WI",
        "city": "Merton",
        "lat": 43.1416,
        "lng": -88.3082
    },
    {
        "state": "AL",
        "city": "Elba",
        "lat": 31.4172,
        "lng": -86.0759
    },
    {
        "state": "NC",
        "city": "Tyro",
        "lat": 35.7997,
        "lng": -80.3765
    },
    {
        "state": "PA",
        "city": "Rochester",
        "lat": 40.7025,
        "lng": -80.2838
    },
    {
        "state": "FL",
        "city": "Alturas",
        "lat": 27.8417,
        "lng": -81.6952
    },
    {
        "state": "PA",
        "city": "Wellsboro",
        "lat": 41.7458,
        "lng": -77.3031
    },
    {
        "state": "FL",
        "city": "Nokomis",
        "lat": 27.1241,
        "lng": -82.4354
    },
    {
        "state": "CA",
        "city": "Mission Hills",
        "lat": 34.6861,
        "lng": -120.4404
    },
    {
        "state": "WA",
        "city": "Cascade Valley",
        "lat": 47.1417,
        "lng": -119.326
    },
    {
        "state": "CA",
        "city": "Mountain View Acres",
        "lat": 34.4976,
        "lng": -117.3472
    },
    {
        "state": "TX",
        "city": "Crane",
        "lat": 31.3918,
        "lng": -102.3503
    },
    {
        "state": "MN",
        "city": "Hanover",
        "lat": 45.1579,
        "lng": -93.6634
    },
    {
        "state": "MO",
        "city": "Carrollton",
        "lat": 39.3636,
        "lng": -93.4955
    },
    {
        "state": "MN",
        "city": "Benson",
        "lat": 45.3152,
        "lng": -95.6058
    },
    {
        "state": "ME",
        "city": "South Berwick",
        "lat": 43.2321,
        "lng": -70.7963
    },
    {
        "state": "MN",
        "city": "Sleepy Eye",
        "lat": 44.299,
        "lng": -94.7234
    },
    {
        "state": "TX",
        "city": "Reno",
        "lat": 33.6659,
        "lng": -95.4768
    },
    {
        "state": "WA",
        "city": "Goldendale",
        "lat": 45.8192,
        "lng": -120.8233
    },
    {
        "state": "IL",
        "city": "Wadsworth",
        "lat": 42.4448,
        "lng": -87.9202
    },
    {
        "state": "IN",
        "city": "Melody Hill",
        "lat": 38.024,
        "lng": -87.512
    },
    {
        "state": "NC",
        "city": "Enochville",
        "lat": 35.5205,
        "lng": -80.6644
    },
    {
        "state": "TX",
        "city": "West Orange",
        "lat": 30.0791,
        "lng": -93.7598
    },
    {
        "state": "CA",
        "city": "Monte Sereno",
        "lat": 37.2405,
        "lng": -121.9881
    },
    {
        "state": "IL",
        "city": "New Baden",
        "lat": 38.5367,
        "lng": -89.7071
    },
    {
        "state": "AR",
        "city": "Alexander",
        "lat": 34.6185,
        "lng": -92.4512
    },
    {
        "state": "NC",
        "city": "Welcome",
        "lat": 35.9066,
        "lng": -80.2548
    },
    {
        "state": "PR",
        "city": "Naranjito",
        "lat": 18.3029,
        "lng": -66.2498
    },
    {
        "state": "TX",
        "city": "Eagle Lake",
        "lat": 29.5879,
        "lng": -96.3282
    },
    {
        "state": "NC",
        "city": "Wallace",
        "lat": 34.738,
        "lng": -77.9908
    },
    {
        "state": "CO",
        "city": "Yuma",
        "lat": 40.1235,
        "lng": -102.7161
    },
    {
        "state": "WA",
        "city": "Grand Mound",
        "lat": 46.8018,
        "lng": -123.0118
    },
    {
        "state": "CA",
        "city": "Avalon",
        "lat": 33.3342,
        "lng": -118.3315
    },
    {
        "state": "NY",
        "city": "Port Ewen",
        "lat": 41.9042,
        "lng": -73.9778
    },
    {
        "state": "OH",
        "city": "Newcomerstown",
        "lat": 40.2762,
        "lng": -81.5949
    },
    {
        "state": "AL",
        "city": "Heflin",
        "lat": 33.647,
        "lng": -85.5698
    },
    {
        "state": "OH",
        "city": "Moreland Hills",
        "lat": 41.4422,
        "lng": -81.4293
    },
    {
        "state": "MD",
        "city": "Princess Anne",
        "lat": 38.2054,
        "lng": -75.697
    },
    {
        "state": "MD",
        "city": "Melwood",
        "lat": 38.8024,
        "lng": -76.8419
    },
    {
        "state": "WA",
        "city": "Maple Heights-Lake Desire",
        "lat": 47.4441,
        "lng": -122.0972
    },
    {
        "state": "PA",
        "city": "Loyalhanna",
        "lat": 40.3144,
        "lng": -79.356
    },
    {
        "state": "NY",
        "city": "Elma Center",
        "lat": 42.8282,
        "lng": -78.6342
    },
    {
        "state": "NE",
        "city": "Auburn",
        "lat": 40.3894,
        "lng": -95.8436
    },
    {
        "state": "GA",
        "city": "Alma",
        "lat": 31.5432,
        "lng": -82.4745
    },
    {
        "state": "IL",
        "city": "Germantown Hills",
        "lat": 40.7711,
        "lng": -89.4669
    },
    {
        "state": "TX",
        "city": "South Alamo",
        "lat": 26.1517,
        "lng": -98.1079
    },
    {
        "state": "OH",
        "city": "Orange",
        "lat": 41.4414,
        "lng": -81.4743
    },
    {
        "state": "TX",
        "city": "Winnsboro",
        "lat": 32.9557,
        "lng": -95.2909
    },
    {
        "state": "OR",
        "city": "Hubbard",
        "lat": 45.1819,
        "lng": -122.8072
    },
    {
        "state": "SC",
        "city": "Dunean",
        "lat": 34.8203,
        "lng": -82.4225
    },
    {
        "state": "AZ",
        "city": "Lake of the Woods",
        "lat": 34.1547,
        "lng": -109.9936
    },
    {
        "state": "WA",
        "city": "Elma",
        "lat": 47.0055,
        "lng": -123.4112
    },
    {
        "state": "TX",
        "city": "Redwood",
        "lat": 29.81,
        "lng": -97.9103
    },
    {
        "state": "PA",
        "city": "Wyncote",
        "lat": 40.0915,
        "lng": -75.1463
    },
    {
        "state": "CA",
        "city": "Marin City",
        "lat": 37.871,
        "lng": -122.5137
    },
    {
        "state": "AZ",
        "city": "St. Johns",
        "lat": 34.5018,
        "lng": -109.3784
    },
    {
        "state": "NJ",
        "city": "Upper Greenwood Lake",
        "lat": 41.1856,
        "lng": -74.3787
    },
    {
        "state": "GA",
        "city": "Ringgold",
        "lat": 34.9136,
        "lng": -85.1215
    },
    {
        "state": "SC",
        "city": "Dalzell",
        "lat": 34.0189,
        "lng": -80.4297
    },
    {
        "state": "OH",
        "city": "Madison",
        "lat": 41.7722,
        "lng": -81.0529
    },
    {
        "state": "WA",
        "city": "Central Park",
        "lat": 46.9705,
        "lng": -123.7018
    },
    {
        "state": "CA",
        "city": "Del Monte Forest",
        "lat": 36.5854,
        "lng": -121.9434
    },
    {
        "state": "WV",
        "city": "Summersville",
        "lat": 38.2864,
        "lng": -80.8409
    },
    {
        "state": "CT",
        "city": "Jewett City",
        "lat": 41.607,
        "lng": -71.9806
    },
    {
        "state": "PA",
        "city": "North Wales",
        "lat": 40.2111,
        "lng": -75.2745
    },
    {
        "state": "GA",
        "city": "Gray",
        "lat": 33.0021,
        "lng": -83.5374
    },
    {
        "state": "WI",
        "city": "Peshtigo",
        "lat": 45.056,
        "lng": -87.7471
    },
    {
        "state": "KS",
        "city": "Marysville",
        "lat": 39.8432,
        "lng": -96.6387
    },
    {
        "state": "PA",
        "city": "Etna",
        "lat": 40.4975,
        "lng": -79.9475
    },
    {
        "state": "OR",
        "city": "Mount Angel",
        "lat": 45.0695,
        "lng": -122.7972
    },
    {
        "state": "WI",
        "city": "Tomahawk",
        "lat": 45.4746,
        "lng": -89.7228
    },
    {
        "state": "OK",
        "city": "Roland",
        "lat": 35.4147,
        "lng": -94.5137
    },
    {
        "state": "TX",
        "city": "Teague",
        "lat": 31.6296,
        "lng": -96.2802
    },
    {
        "state": "MA",
        "city": "South Duxbury",
        "lat": 42.0203,
        "lng": -70.6913
    },
    {
        "state": "CA",
        "city": "Meadowbrook",
        "lat": 33.7253,
        "lng": -117.2851
    },
    {
        "state": "PA",
        "city": "Pottsgrove",
        "lat": 40.2644,
        "lng": -75.6093
    },
    {
        "state": "OH",
        "city": "Sherwood",
        "lat": 39.0853,
        "lng": -84.3608
    },
    {
        "state": "CT",
        "city": "Tashua",
        "lat": 41.2761,
        "lng": -73.2536
    },
    {
        "state": "SC",
        "city": "Clearwater",
        "lat": 33.5038,
        "lng": -81.91
    },
    {
        "state": "CA",
        "city": "West Menlo Park",
        "lat": 37.4339,
        "lng": -122.2034
    },
    {
        "state": "FL",
        "city": "Montura",
        "lat": 26.6428,
        "lng": -81.0937
    },
    {
        "state": "NY",
        "city": "Carthage",
        "lat": 43.9837,
        "lng": -75.6021
    },
    {
        "state": "IL",
        "city": "Abingdon",
        "lat": 40.8038,
        "lng": -90.4009
    },
    {
        "state": "FL",
        "city": "Crystal River",
        "lat": 28.8964,
        "lng": -82.5991
    },
    {
        "state": "CA",
        "city": "Yountville",
        "lat": 38.3963,
        "lng": -122.3671
    },
    {
        "state": "TX",
        "city": "Dublin",
        "lat": 32.0875,
        "lng": -98.3392
    },
    {
        "state": "CA",
        "city": "Palo Cedro",
        "lat": 40.5658,
        "lng": -122.2425
    },
    {
        "state": "VA",
        "city": "West Point",
        "lat": 37.5519,
        "lng": -76.8017
    },
    {
        "state": "OH",
        "city": "Cleves",
        "lat": 39.1635,
        "lng": -84.7468
    },
    {
        "state": "PA",
        "city": "State Line",
        "lat": 39.7329,
        "lng": -77.7247
    },
    {
        "state": "AL",
        "city": "Moulton",
        "lat": 34.4844,
        "lng": -87.2833
    },
    {
        "state": "PA",
        "city": "Coplay",
        "lat": 40.671,
        "lng": -75.4961
    },
    {
        "state": "CT",
        "city": "Coleytown",
        "lat": 41.1742,
        "lng": -73.3461
    },
    {
        "state": "FL",
        "city": "North River Shores",
        "lat": 27.2223,
        "lng": -80.2738
    },
    {
        "state": "MN",
        "city": "Breckenridge",
        "lat": 46.2662,
        "lng": -96.585
    },
    {
        "state": "PA",
        "city": "Malvern",
        "lat": 40.0329,
        "lng": -75.5146
    },
    {
        "state": "CA",
        "city": "Morongo Valley",
        "lat": 34.0724,
        "lng": -116.5627
    },
    {
        "state": "CA",
        "city": "Rio Dell",
        "lat": 40.5023,
        "lng": -124.1105
    },
    {
        "state": "NM",
        "city": "Vado",
        "lat": 32.1278,
        "lng": -106.6571
    },
    {
        "state": "AR",
        "city": "Fordyce",
        "lat": 33.8182,
        "lng": -92.4174
    },
    {
        "state": "KS",
        "city": "Holton",
        "lat": 39.4699,
        "lng": -95.7319
    },
    {
        "state": "OK",
        "city": "Hobart",
        "lat": 35.0246,
        "lng": -99.0875
    },
    {
        "state": "CA",
        "city": "Pine Grove",
        "lat": 38.403,
        "lng": -120.6571
    },
    {
        "state": "HI",
        "city": "Kilauea",
        "lat": 22.2108,
        "lng": -159.3965
    },
    {
        "state": "TN",
        "city": "Somerville",
        "lat": 35.2352,
        "lng": -89.3869
    },
    {
        "state": "CT",
        "city": "Old Mystic",
        "lat": 41.3852,
        "lng": -71.9851
    },
    {
        "state": "PR",
        "city": "Hacienda San Jose",
        "lat": 18.2409,
        "lng": -66.0721
    },
    {
        "state": "KS",
        "city": "Frontenac",
        "lat": 37.4581,
        "lng": -94.7012
    },
    {
        "state": "FL",
        "city": "Loxahatchee Groves",
        "lat": 26.7106,
        "lng": -80.2763
    },
    {
        "state": "MS",
        "city": "Water Valley",
        "lat": 34.1622,
        "lng": -89.63
    },
    {
        "state": "WA",
        "city": "Burbank",
        "lat": 46.2016,
        "lng": -118.9891
    },
    {
        "state": "PA",
        "city": "Ebensburg",
        "lat": 40.4884,
        "lng": -78.7264
    },
    {
        "state": "MO",
        "city": "Vandalia",
        "lat": 39.308,
        "lng": -91.4892
    },
    {
        "state": "NC",
        "city": "Belville",
        "lat": 34.219,
        "lng": -77.9976
    },
    {
        "state": "WY",
        "city": "Newcastle",
        "lat": 43.851,
        "lng": -104.2123
    },
    {
        "state": "WA",
        "city": "Forks",
        "lat": 47.9527,
        "lng": -124.3903
    },
    {
        "state": "OK",
        "city": "Dewey",
        "lat": 36.7913,
        "lng": -95.9328
    },
    {
        "state": "NM",
        "city": "Peralta",
        "lat": 34.8283,
        "lng": -106.6859
    },
    {
        "state": "PA",
        "city": "Millvale",
        "lat": 40.4818,
        "lng": -79.9736
    },
    {
        "state": "IL",
        "city": "Johnston City",
        "lat": 37.8214,
        "lng": -88.929
    },
    {
        "state": "NC",
        "city": "Rural Hall",
        "lat": 36.2251,
        "lng": -80.2973
    },
    {
        "state": "AR",
        "city": "Waldron",
        "lat": 34.9022,
        "lng": -94.0953
    },
    {
        "state": "TX",
        "city": "Llano",
        "lat": 30.7509,
        "lng": -98.6763
    },
    {
        "state": "SC",
        "city": "Pickens",
        "lat": 34.8856,
        "lng": -82.7104
    },
    {
        "state": "PA",
        "city": "Springdale",
        "lat": 40.5409,
        "lng": -79.7819
    },
    {
        "state": "MI",
        "city": "Essexville",
        "lat": 43.6123,
        "lng": -83.8423
    },
    {
        "state": "LA",
        "city": "Farmerville",
        "lat": 32.7752,
        "lng": -92.4013
    },
    {
        "state": "VA",
        "city": "Altavista",
        "lat": 37.1235,
        "lng": -79.2856
    },
    {
        "state": "ID",
        "city": "Grangeville",
        "lat": 45.926,
        "lng": -116.1224
    },
    {
        "state": "PA",
        "city": "Slippery Rock",
        "lat": 41.0695,
        "lng": -80.058
    },
    {
        "state": "MI",
        "city": "Clare",
        "lat": 43.8259,
        "lng": -84.763
    },
    {
        "state": "OR",
        "city": "North Plains",
        "lat": 45.5974,
        "lng": -122.9948
    },
    {
        "state": "NJ",
        "city": "Rio Grande",
        "lat": 39.0193,
        "lng": -74.8787
    },
    {
        "state": "MI",
        "city": "Level Park-Oak Park",
        "lat": 42.3642,
        "lng": -85.2664
    },
    {
        "state": "FL",
        "city": "Ponce Inlet",
        "lat": 29.0927,
        "lng": -80.9472
    },
    {
        "state": "KY",
        "city": "Claryville",
        "lat": 38.914,
        "lng": -84.4095
    },
    {
        "state": "MO",
        "city": "New Haven",
        "lat": 38.6048,
        "lng": -91.2179
    },
    {
        "state": "NJ",
        "city": "Saddle River",
        "lat": 41.0273,
        "lng": -74.0956
    },
    {
        "state": "VA",
        "city": "Blackstone",
        "lat": 37.0822,
        "lng": -78.003
    },
    {
        "state": "LA",
        "city": "Bunkie",
        "lat": 30.954,
        "lng": -92.1884
    },
    {
        "state": "GA",
        "city": "Hahira",
        "lat": 30.9941,
        "lng": -83.3786
    },
    {
        "state": "TX",
        "city": "West Lake Hills",
        "lat": 30.292,
        "lng": -97.8083
    },
    {
        "state": "CA",
        "city": "Freedom",
        "lat": 36.9403,
        "lng": -121.7953
    },
    {
        "state": "WA",
        "city": "Key Center",
        "lat": 47.3376,
        "lng": -122.7506
    },
    {
        "state": "NC",
        "city": "Lake Royale",
        "lat": 35.9666,
        "lng": -78.196
    },
    {
        "state": "PA",
        "city": "Mount Oliver",
        "lat": 40.4113,
        "lng": -79.9856
    },
    {
        "state": "AZ",
        "city": "Parker",
        "lat": 34.0286,
        "lng": -114.2224
    },
    {
        "state": "NC",
        "city": "Red Oak",
        "lat": 36.0415,
        "lng": -77.9064
    },
    {
        "state": "CA",
        "city": "Madera Ranchos",
        "lat": 36.9279,
        "lng": -119.8773
    },
    {
        "state": "IA",
        "city": "Robins",
        "lat": 42.08,
        "lng": -91.6763
    },
    {
        "state": "FL",
        "city": "Bunnell",
        "lat": 29.4193,
        "lng": -81.3231
    },
    {
        "state": "WA",
        "city": "Ahtanum",
        "lat": 46.5573,
        "lng": -120.6138
    },
    {
        "state": "IA",
        "city": "Story City",
        "lat": 42.1866,
        "lng": -93.5863
    },
    {
        "state": "MN",
        "city": "Annandale",
        "lat": 45.2599,
        "lng": -94.1205
    },
    {
        "state": "PA",
        "city": "Ingram",
        "lat": 40.4447,
        "lng": -80.0685
    },
    {
        "state": "TN",
        "city": "Dandridge",
        "lat": 36.0284,
        "lng": -83.4308
    },
    {
        "state": "IN",
        "city": "Newburgh",
        "lat": 37.9494,
        "lng": -87.4053
    },
    {
        "state": "DE",
        "city": "Milton",
        "lat": 38.775,
        "lng": -75.3102
    },
    {
        "state": "PA",
        "city": "Woodbourne",
        "lat": 40.2017,
        "lng": -74.8873
    },
    {
        "state": "UT",
        "city": "Blanding",
        "lat": 37.6213,
        "lng": -109.5073
    },
    {
        "state": "OH",
        "city": "Mayfield",
        "lat": 41.5502,
        "lng": -81.4369
    },
    {
        "state": "PA",
        "city": "Ohioville",
        "lat": 40.6872,
        "lng": -80.4783
    },
    {
        "state": "LA",
        "city": "Rayville",
        "lat": 32.4707,
        "lng": -91.7576
    },
    {
        "state": "NJ",
        "city": "Haworth",
        "lat": 40.9622,
        "lng": -73.9976
    },
    {
        "state": "TX",
        "city": "Dilley",
        "lat": 28.6675,
        "lng": -99.1765
    },
    {
        "state": "NC",
        "city": "Lake Park",
        "lat": 35.0849,
        "lng": -80.6349
    },
    {
        "state": "AL",
        "city": "Union Springs",
        "lat": 32.1395,
        "lng": -85.7141
    },
    {
        "state": "PA",
        "city": "Nesquehoning",
        "lat": 40.866,
        "lng": -75.8322
    },
    {
        "state": "TX",
        "city": "Lake Cherokee",
        "lat": 32.3569,
        "lng": -94.6513
    },
    {
        "state": "SD",
        "city": "Hartford",
        "lat": 43.621,
        "lng": -96.9424
    },
    {
        "state": "DE",
        "city": "Lewes",
        "lat": 38.7776,
        "lng": -75.145
    },
    {
        "state": "IN",
        "city": "Ossian",
        "lat": 40.877,
        "lng": -85.1683
    },
    {
        "state": "GA",
        "city": "Ocilla",
        "lat": 31.5987,
        "lng": -83.2498
    },
    {
        "state": "NC",
        "city": "Avery Creek",
        "lat": 35.4651,
        "lng": -82.5719
    },
    {
        "state": "NY",
        "city": "SUNY Oswego",
        "lat": 43.4515,
        "lng": -76.5439
    },
    {
        "state": "WI",
        "city": "Johnson Creek",
        "lat": 43.0812,
        "lng": -88.7702
    },
    {
        "state": "OH",
        "city": "Gallipolis",
        "lat": 38.8186,
        "lng": -82.1934
    },
    {
        "state": "LA",
        "city": "Welsh",
        "lat": 30.2355,
        "lng": -92.8135
    },
    {
        "state": "CA",
        "city": "Morada",
        "lat": 38.0386,
        "lng": -121.2456
    },
    {
        "state": "NJ",
        "city": "Groveville",
        "lat": 40.1679,
        "lng": -74.6523
    },
    {
        "state": "MI",
        "city": "Harvey",
        "lat": 46.4832,
        "lng": -87.3569
    },
    {
        "state": "OH",
        "city": "Salem Heights",
        "lat": 39.0658,
        "lng": -84.384
    },
    {
        "state": "HI",
        "city": "Helemano",
        "lat": 21.5362,
        "lng": -158.0194
    },
    {
        "state": "IA",
        "city": "Williamsburg",
        "lat": 41.6683,
        "lng": -92.0103
    },
    {
        "state": "MD",
        "city": "Grasonville",
        "lat": 38.9559,
        "lng": -76.1947
    },
    {
        "state": "SC",
        "city": "Wellford",
        "lat": 34.962,
        "lng": -82.0937
    },
    {
        "state": "SC",
        "city": "Liberty",
        "lat": 34.7904,
        "lng": -82.6961
    },
    {
        "state": "NC",
        "city": "East Rockingham",
        "lat": 34.9116,
        "lng": -79.7661
    },
    {
        "state": "OH",
        "city": "Lordstown",
        "lat": 41.1684,
        "lng": -80.859
    },
    {
        "state": "OK",
        "city": "Hominy",
        "lat": 36.4219,
        "lng": -96.393
    },
    {
        "state": "MN",
        "city": "Montgomery",
        "lat": 44.445,
        "lng": -93.5797
    },
    {
        "state": "TX",
        "city": "La Blanca",
        "lat": 26.3048,
        "lng": -98.0286
    },
    {
        "state": "WA",
        "city": "Port Hadlock-Irondale",
        "lat": 48.0316,
        "lng": -122.789
    },
    {
        "state": "OR",
        "city": "Jefferson",
        "lat": 44.7171,
        "lng": -123.0068
    },
    {
        "state": "WI",
        "city": "Ellsworth",
        "lat": 44.7364,
        "lng": -92.4806
    },
    {
        "state": "NC",
        "city": "Mountain View",
        "lat": 35.6828,
        "lng": -81.3683
    },
    {
        "state": "AL",
        "city": "West End-Cobb Town",
        "lat": 33.6526,
        "lng": -85.8741
    },
    {
        "state": "TN",
        "city": "Newbern",
        "lat": 36.1169,
        "lng": -89.2713
    },
    {
        "state": "MO",
        "city": "Buffalo",
        "lat": 37.6444,
        "lng": -93.097
    },
    {
        "state": "OH",
        "city": "Jefferson",
        "lat": 41.7384,
        "lng": -80.7689
    },
    {
        "state": "TX",
        "city": "Val Verde Park",
        "lat": 29.3746,
        "lng": -100.8306
    },
    {
        "state": "IL",
        "city": "Knoxville",
        "lat": 40.907,
        "lng": -90.2857
    },
    {
        "state": "OH",
        "city": "Hartville",
        "lat": 40.9618,
        "lng": -81.3348
    },
    {
        "state": "MI",
        "city": "Paw Paw",
        "lat": 42.2148,
        "lng": -85.8919
    },
    {
        "state": "PA",
        "city": "Halfway House",
        "lat": 40.2796,
        "lng": -75.6405
    },
    {
        "state": "AK",
        "city": "Petersburg",
        "lat": 56.7566,
        "lng": -132.8727
    },
    {
        "state": "OR",
        "city": "Bandon",
        "lat": 43.1141,
        "lng": -124.4158
    },
    {
        "state": "OH",
        "city": "Dillonvale",
        "lat": 39.2173,
        "lng": -84.4031
    },
    {
        "state": "NC",
        "city": "Plymouth",
        "lat": 35.8588,
        "lng": -76.7487
    },
    {
        "state": "LA",
        "city": "Vinton",
        "lat": 30.1957,
        "lng": -93.5818
    },
    {
        "state": "MD",
        "city": "Berwyn Heights",
        "lat": 38.9928,
        "lng": -76.9132
    },
    {
        "state": "AL",
        "city": "Weaver",
        "lat": 33.7601,
        "lng": -85.8117
    },
    {
        "state": "PR",
        "city": "Celada",
        "lat": 18.2667,
        "lng": -65.9621
    },
    {
        "state": "PR",
        "city": "Caban",
        "lat": 18.445,
        "lng": -67.1363
    },
    {
        "state": "CA",
        "city": "Cutten",
        "lat": 40.7657,
        "lng": -124.1445
    },
    {
        "state": "AZ",
        "city": "Cordes Lakes",
        "lat": 34.3103,
        "lng": -112.1073
    },
    {
        "state": "TX",
        "city": "Chandler",
        "lat": 32.3065,
        "lng": -95.4781
    },
    {
        "state": "NC",
        "city": "Elizabethtown",
        "lat": 34.6219,
        "lng": -78.6074
    },
    {
        "state": "WA",
        "city": "Marietta-Alderwood",
        "lat": 48.7934,
        "lng": -122.5573
    },
    {
        "state": "NY",
        "city": "West Sand Lake",
        "lat": 42.6402,
        "lng": -73.6033
    },
    {
        "state": "VA",
        "city": "Chincoteague",
        "lat": 37.9593,
        "lng": -75.3495
    },
    {
        "state": "PR",
        "city": "Guayanilla",
        "lat": 18.0222,
        "lng": -66.7898
    },
    {
        "state": "MN",
        "city": "Jackson",
        "lat": 43.6265,
        "lng": -94.9891
    },
    {
        "state": "IN",
        "city": "Aurora",
        "lat": 39.0674,
        "lng": -84.9044
    },
    {
        "state": "FL",
        "city": "Venice Gardens",
        "lat": 27.0739,
        "lng": -82.4125
    },
    {
        "state": "MA",
        "city": "Dennis Port",
        "lat": 41.6677,
        "lng": -70.1358
    },
    {
        "state": "TX",
        "city": "Presidio",
        "lat": 29.5603,
        "lng": -104.3653
    },
    {
        "state": "CO",
        "city": "Bennett",
        "lat": 39.7366,
        "lng": -104.4286
    },
    {
        "state": "AL",
        "city": "Livingston",
        "lat": 32.5982,
        "lng": -88.1891
    },
    {
        "state": "LA",
        "city": "Iowa",
        "lat": 30.2393,
        "lng": -93.013
    },
    {
        "state": "FL",
        "city": "Blountstown",
        "lat": 30.443,
        "lng": -85.0455
    },
    {
        "state": "NC",
        "city": "Spencer",
        "lat": 35.6986,
        "lng": -80.4254
    },
    {
        "state": "NY",
        "city": "Beaver Dam Lake",
        "lat": 41.4429,
        "lng": -74.1216
    },
    {
        "state": "IA",
        "city": "Milford",
        "lat": 43.3336,
        "lng": -95.1478
    },
    {
        "state": "GA",
        "city": "Putney",
        "lat": 31.4755,
        "lng": -84.101
    },
    {
        "state": "OK",
        "city": "Muldrow",
        "lat": 35.404,
        "lng": -94.5976
    },
    {
        "state": "WI",
        "city": "Brillion",
        "lat": 44.1758,
        "lng": -88.0707
    },
    {
        "state": "WV",
        "city": "Shannondale",
        "lat": 39.2123,
        "lng": -77.8105
    },
    {
        "state": "CA",
        "city": "San Antonio Heights",
        "lat": 34.1573,
        "lng": -117.6592
    },
    {
        "state": "MS",
        "city": "Macon",
        "lat": 33.1217,
        "lng": -88.5564
    },
    {
        "state": "CA",
        "city": "Val Verde",
        "lat": 34.4504,
        "lng": -118.6717
    },
    {
        "state": "IL",
        "city": "Pistakee Highlands",
        "lat": 42.4023,
        "lng": -88.2115
    },
    {
        "state": "MI",
        "city": "Kincheloe",
        "lat": 46.2688,
        "lng": -84.4568
    },
    {
        "state": "FL",
        "city": "Feather Sound",
        "lat": 27.9061,
        "lng": -82.6813
    },
    {
        "state": "PA",
        "city": "Linwood",
        "lat": 39.8254,
        "lng": -75.4253
    },
    {
        "state": "PA",
        "city": "Greenwood",
        "lat": 40.5376,
        "lng": -78.3542
    },
    {
        "state": "IL",
        "city": "South Jacksonville",
        "lat": 39.7025,
        "lng": -90.2292
    },
    {
        "state": "IN",
        "city": "Paoli",
        "lat": 38.5572,
        "lng": -86.4698
    },
    {
        "state": "IL",
        "city": "Holiday Shores",
        "lat": 38.9222,
        "lng": -89.936
    },
    {
        "state": "CA",
        "city": "East Richmond Heights",
        "lat": 37.945,
        "lng": -122.314
    },
    {
        "state": "PR",
        "city": "Tierras Nuevas Poniente",
        "lat": 18.4614,
        "lng": -66.4891
    },
    {
        "state": "MN",
        "city": "Moose Lake",
        "lat": 46.4442,
        "lng": -92.7654
    },
    {
        "state": "NY",
        "city": "Lake Erie Beach",
        "lat": 42.6242,
        "lng": -79.0786
    },
    {
        "state": "SC",
        "city": "Golden Grove",
        "lat": 34.7324,
        "lng": -82.4407
    },
    {
        "state": "FL",
        "city": "Zephyrhills North",
        "lat": 28.252,
        "lng": -82.1654
    },
    {
        "state": "WI",
        "city": "Thiensville",
        "lat": 43.2361,
        "lng": -87.9785
    },
    {
        "state": "CA",
        "city": "North Fork",
        "lat": 37.2306,
        "lng": -119.5199
    },
    {
        "state": "AZ",
        "city": "Williams",
        "lat": 35.2476,
        "lng": -112.1834
    },
    {
        "state": "OR",
        "city": "Redwood",
        "lat": 42.4219,
        "lng": -123.3915
    },
    {
        "state": "WI",
        "city": "Boscobel",
        "lat": 43.1437,
        "lng": -90.6948
    },
    {
        "state": "OK",
        "city": "Mannford",
        "lat": 36.1306,
        "lng": -96.334
    },
    {
        "state": "CA",
        "city": "Desert View Highlands",
        "lat": 34.5903,
        "lng": -118.1535
    },
    {
        "state": "NJ",
        "city": "Hamburg",
        "lat": 41.1485,
        "lng": -74.5736
    },
    {
        "state": "GA",
        "city": "Chattahoochee Hills",
        "lat": 33.5694,
        "lng": -84.7441
    },
    {
        "state": "CA",
        "city": "Humboldt Hill",
        "lat": 40.7219,
        "lng": -124.1987
    },
    {
        "state": "PA",
        "city": "Athens",
        "lat": 41.9515,
        "lng": -76.5187
    },
    {
        "state": "OH",
        "city": "Carrollton",
        "lat": 40.5787,
        "lng": -81.0907
    },
    {
        "state": "PA",
        "city": "West Wyomissing",
        "lat": 40.3222,
        "lng": -75.995
    },
    {
        "state": "TX",
        "city": "Abernathy",
        "lat": 33.842,
        "lng": -101.8162
    },
    {
        "state": "MN",
        "city": "Ely",
        "lat": 47.9054,
        "lng": -91.8517
    },
    {
        "state": "TN",
        "city": "Blountville",
        "lat": 36.533,
        "lng": -82.329
    },
    {
        "state": "NY",
        "city": "Clarence Center",
        "lat": 43.0085,
        "lng": -78.6309
    },
    {
        "state": "WA",
        "city": "Algona",
        "lat": 47.282,
        "lng": -122.2504
    },
    {
        "state": "PA",
        "city": "Masontown",
        "lat": 39.8486,
        "lng": -79.9085
    },
    {
        "state": "PA",
        "city": "Pleasant Hill",
        "lat": 40.3369,
        "lng": -76.448
    },
    {
        "state": "DE",
        "city": "Dover Base Housing",
        "lat": 39.1178,
        "lng": -75.4837
    },
    {
        "state": "SC",
        "city": "North Hartsville",
        "lat": 34.401,
        "lng": -80.071
    },
    {
        "state": "TN",
        "city": "Tusculum",
        "lat": 36.175,
        "lng": -82.7454
    },
    {
        "state": "NY",
        "city": "Ravena",
        "lat": 42.4755,
        "lng": -73.8112
    },
    {
        "state": "TX",
        "city": "Waller",
        "lat": 30.0665,
        "lng": -95.9278
    },
    {
        "state": "PA",
        "city": "Penbrook",
        "lat": 40.2781,
        "lng": -76.8483
    },
    {
        "state": "SC",
        "city": "Hilltop",
        "lat": 34.9755,
        "lng": -81.9586
    },
    {
        "state": "CA",
        "city": "Day Valley",
        "lat": 37.0255,
        "lng": -121.8559
    },
    {
        "state": "IL",
        "city": "Carlyle",
        "lat": 38.6217,
        "lng": -89.3734
    },
    {
        "state": "ID",
        "city": "Orofino",
        "lat": 46.4866,
        "lng": -116.2572
    },
    {
        "state": "PR",
        "city": "Toa Alta",
        "lat": 18.3879,
        "lng": -66.2508
    },
    {
        "state": "MO",
        "city": "Louisiana",
        "lat": 39.4413,
        "lng": -91.0626
    },
    {
        "state": "PA",
        "city": "Macungie",
        "lat": 40.5165,
        "lng": -75.5545
    },
    {
        "state": "FL",
        "city": "Dover",
        "lat": 27.9927,
        "lng": -82.2198
    },
    {
        "state": "FL",
        "city": "Geneva",
        "lat": 28.7377,
        "lng": -81.1143
    },
    {
        "state": "MO",
        "city": "Sugar Creek",
        "lat": 39.1433,
        "lng": -94.3994
    },
    {
        "state": "KY",
        "city": "West Liberty",
        "lat": 37.9161,
        "lng": -83.2668
    },
    {
        "state": "OH",
        "city": "Minerva",
        "lat": 40.7306,
        "lng": -81.1023
    },
    {
        "state": "KS",
        "city": "Hiawatha",
        "lat": 39.8519,
        "lng": -95.538
    },
    {
        "state": "WA",
        "city": "Hansville",
        "lat": 47.8979,
        "lng": -122.5579
    },
    {
        "state": "WA",
        "city": "Cashmere",
        "lat": 47.5175,
        "lng": -120.467
    },
    {
        "state": "PA",
        "city": "Centerville",
        "lat": 40.03,
        "lng": -79.9633
    },
    {
        "state": "NM",
        "city": "El Cerro",
        "lat": 34.7807,
        "lng": -106.6955
    },
    {
        "state": "MS",
        "city": "Magnolia",
        "lat": 31.1619,
        "lng": -90.467
    },
    {
        "state": "KY",
        "city": "Hodgenville",
        "lat": 37.5668,
        "lng": -85.7354
    },
    {
        "state": "IL",
        "city": "Havana",
        "lat": 40.295,
        "lng": -90.0566
    },
    {
        "state": "KY",
        "city": "Morganfield",
        "lat": 37.6869,
        "lng": -87.8878
    },
    {
        "state": "PR",
        "city": "Aguas Buenas",
        "lat": 18.2573,
        "lng": -66.1061
    },
    {
        "state": "IL",
        "city": "Ridgewood",
        "lat": 41.534,
        "lng": -88.0436
    },
    {
        "state": "WI",
        "city": "Yorkville",
        "lat": 42.7155,
        "lng": -88.0097
    },
    {
        "state": "WI",
        "city": "Howards Grove",
        "lat": 43.8261,
        "lng": -87.8232
    },
    {
        "state": "GA",
        "city": "Hogansville",
        "lat": 33.1674,
        "lng": -84.9027
    },
    {
        "state": "CA",
        "city": "Carmel-by-the-Sea",
        "lat": 36.5528,
        "lng": -121.9222
    },
    {
        "state": "MN",
        "city": "Rush City",
        "lat": 45.6875,
        "lng": -92.9655
    },
    {
        "state": "SC",
        "city": "Winnsboro",
        "lat": 34.3718,
        "lng": -81.0907
    },
    {
        "state": "MS",
        "city": "Escatawpa",
        "lat": 30.4912,
        "lng": -88.5495
    },
    {
        "state": "PA",
        "city": "Trafford",
        "lat": 40.3846,
        "lng": -79.7576
    },
    {
        "state": "CA",
        "city": "Coronita",
        "lat": 33.876,
        "lng": -117.6109
    },
    {
        "state": "NV",
        "city": "Washoe Valley",
        "lat": 39.2923,
        "lng": -119.7767
    },
    {
        "state": "CA",
        "city": "Mount Shasta",
        "lat": 41.3206,
        "lng": -122.315
    },
    {
        "state": "TX",
        "city": "Barton Creek",
        "lat": 30.2818,
        "lng": -97.8681
    },
    {
        "state": "PR",
        "city": "Aguada",
        "lat": 18.3803,
        "lng": -67.1884
    },
    {
        "state": "GA",
        "city": "Tallapoosa",
        "lat": 33.7335,
        "lng": -85.2859
    },
    {
        "state": "TX",
        "city": "Springtown",
        "lat": 32.9693,
        "lng": -97.6804
    },
    {
        "state": "AK",
        "city": "Big Lake",
        "lat": 61.526,
        "lng": -149.9721
    },
    {
        "state": "AZ",
        "city": "Willcox",
        "lat": 32.2515,
        "lng": -109.8359
    },
    {
        "state": "MI",
        "city": "Rockwood",
        "lat": 42.0705,
        "lng": -83.243
    },
    {
        "state": "WA",
        "city": "Gleed",
        "lat": 46.6594,
        "lng": -120.6025
    },
    {
        "state": "MN",
        "city": "Eagle Lake",
        "lat": 44.1636,
        "lng": -93.8823
    },
    {
        "state": "PA",
        "city": "Emerald Lakes",
        "lat": 41.0845,
        "lng": -75.4154
    },
    {
        "state": "CA",
        "city": "Hayfork",
        "lat": 40.561,
        "lng": -123.1298
    },
    {
        "state": "WI",
        "city": "Algoma",
        "lat": 44.6058,
        "lng": -87.4465
    },
    {
        "state": "NY",
        "city": "Hoosick Falls",
        "lat": 42.9009,
        "lng": -73.35
    },
    {
        "state": "NY",
        "city": "Chenango Bridge",
        "lat": 42.1716,
        "lng": -75.8586
    },
    {
        "state": "TX",
        "city": "Oak Trail Shores",
        "lat": 32.4885,
        "lng": -97.8357
    },
    {
        "state": "WI",
        "city": "Sherwood",
        "lat": 44.1763,
        "lng": -88.2756
    },
    {
        "state": "OR",
        "city": "Dundee",
        "lat": 45.2759,
        "lng": -123.007
    },
    {
        "state": "IL",
        "city": "Le Roy",
        "lat": 40.3395,
        "lng": -88.7628
    },
    {
        "state": "PA",
        "city": "Mount Penn",
        "lat": 40.3287,
        "lng": -75.8897
    },
    {
        "state": "WI",
        "city": "Brodhead",
        "lat": 42.6168,
        "lng": -89.3756
    },
    {
        "state": "KS",
        "city": "Garnett",
        "lat": 38.2845,
        "lng": -95.2408
    },
    {
        "state": "OK",
        "city": "Perkins",
        "lat": 35.9785,
        "lng": -97.0301
    },
    {
        "state": "CA",
        "city": "Vine Hill",
        "lat": 38.007,
        "lng": -122.0873
    },
    {
        "state": "AL",
        "city": "Hanceville",
        "lat": 34.0632,
        "lng": -86.7645
    },
    {
        "state": "AL",
        "city": "East Brewton",
        "lat": 31.0906,
        "lng": -87.0556
    },
    {
        "state": "PA",
        "city": "Blairsville",
        "lat": 40.4326,
        "lng": -79.2599
    },
    {
        "state": "IN",
        "city": "Shorewood Forest",
        "lat": 41.4598,
        "lng": -87.1497
    },
    {
        "state": "KY",
        "city": "Stanton",
        "lat": 37.8465,
        "lng": -83.8564
    },
    {
        "state": "AR",
        "city": "Paris",
        "lat": 35.2894,
        "lng": -93.7252
    },
    {
        "state": "FL",
        "city": "Melbourne Beach",
        "lat": 28.0668,
        "lng": -80.561
    },
    {
        "state": "MI",
        "city": "Blissfield",
        "lat": 41.8311,
        "lng": -83.8635
    },
    {
        "state": "PA",
        "city": "Brackenridge",
        "lat": 40.6079,
        "lng": -79.7411
    },
    {
        "state": "OK",
        "city": "Cleveland",
        "lat": 36.3008,
        "lng": -96.4635
    },
    {
        "state": "TX",
        "city": "Hideaway",
        "lat": 32.489,
        "lng": -95.4578
    },
    {
        "state": "KY",
        "city": "Crestview Hills",
        "lat": 39.0249,
        "lng": -84.5695
    },
    {
        "state": "CT",
        "city": "Pemberwick",
        "lat": 41.0225,
        "lng": -73.6564
    },
    {
        "state": "AL",
        "city": "Cottondale",
        "lat": 33.1923,
        "lng": -87.4543
    },
    {
        "state": "NY",
        "city": "Gowanda",
        "lat": 42.4612,
        "lng": -78.9339
    },
    {
        "state": "NJ",
        "city": "Leisuretowne",
        "lat": 39.8987,
        "lng": -74.7059
    },
    {
        "state": "AL",
        "city": "Red Bay",
        "lat": 34.4357,
        "lng": -88.1361
    },
    {
        "state": "PA",
        "city": "Wesleyville",
        "lat": 42.1369,
        "lng": -80.0123
    },
    {
        "state": "IL",
        "city": "Virden",
        "lat": 39.506,
        "lng": -89.7711
    },
    {
        "state": "OR",
        "city": "Oakridge",
        "lat": 43.7451,
        "lng": -122.4638
    },
    {
        "state": "MT",
        "city": "Glasgow",
        "lat": 48.199,
        "lng": -106.6321
    },
    {
        "state": "NC",
        "city": "Burgaw",
        "lat": 34.5509,
        "lng": -77.9224
    },
    {
        "state": "AL",
        "city": "Warrior",
        "lat": 33.8149,
        "lng": -86.8157
    },
    {
        "state": "NM",
        "city": "Sandia Heights",
        "lat": 35.1747,
        "lng": -106.4884
    },
    {
        "state": "IL",
        "city": "Sleepy Hollow",
        "lat": 42.0912,
        "lng": -88.3138
    },
    {
        "state": "MN",
        "city": "Pine City",
        "lat": 45.8368,
        "lng": -92.9682
    },
    {
        "state": "CA",
        "city": "Lake Nacimiento",
        "lat": 35.7308,
        "lng": -120.8695
    },
    {
        "state": "OR",
        "city": "Nyssa",
        "lat": 43.8779,
        "lng": -116.9956
    },
    {
        "state": "SC",
        "city": "Kingstree",
        "lat": 33.6665,
        "lng": -79.8292
    },
    {
        "state": "CT",
        "city": "Northwest Harwinton",
        "lat": 41.7769,
        "lng": -73.0794
    },
    {
        "state": "GA",
        "city": "Hardwick",
        "lat": 33.0523,
        "lng": -83.244
    },
    {
        "state": "AR",
        "city": "Corning",
        "lat": 36.4134,
        "lng": -90.5839
    },
    {
        "state": "PA",
        "city": "Village Shires",
        "lat": 40.2016,
        "lng": -74.9706
    },
    {
        "state": "NJ",
        "city": "Monmouth Beach",
        "lat": 40.3364,
        "lng": -73.9863
    },
    {
        "state": "WI",
        "city": "Lodi",
        "lat": 43.3154,
        "lng": -89.5367
    },
    {
        "state": "CA",
        "city": "Buckhorn",
        "lat": 38.4548,
        "lng": -120.5323
    },
    {
        "state": "WI",
        "city": "Wrightstown",
        "lat": 44.3263,
        "lng": -88.1756
    },
    {
        "state": "KY",
        "city": "Barbourville",
        "lat": 36.8667,
        "lng": -83.885
    },
    {
        "state": "TX",
        "city": "Paloma Creek",
        "lat": 33.2253,
        "lng": -96.9371
    },
    {
        "state": "MO",
        "city": "Cassville",
        "lat": 36.6786,
        "lng": -93.8682
    },
    {
        "state": "IL",
        "city": "Gillespie",
        "lat": 39.1258,
        "lng": -89.8174
    },
    {
        "state": "FL",
        "city": "San Castle",
        "lat": 26.5652,
        "lng": -80.0611
    },
    {
        "state": "WI",
        "city": "Ladysmith",
        "lat": 45.4606,
        "lng": -91.0973
    },
    {
        "state": "LA",
        "city": "Ferriday",
        "lat": 31.6343,
        "lng": -91.5562
    },
    {
        "state": "PA",
        "city": "Marienville",
        "lat": 41.4687,
        "lng": -79.1181
    },
    {
        "state": "MS",
        "city": "Newton",
        "lat": 32.3296,
        "lng": -89.1534
    },
    {
        "state": "MO",
        "city": "Country Club",
        "lat": 39.8388,
        "lng": -94.8205
    },
    {
        "state": "CA",
        "city": "Reliez Valley",
        "lat": 37.9399,
        "lng": -122.1027
    },
    {
        "state": "PA",
        "city": "Sharpsburg",
        "lat": 40.494,
        "lng": -79.9249
    },
    {
        "state": "FL",
        "city": "Big Coppitt Key",
        "lat": 24.5914,
        "lng": -81.6574
    },
    {
        "state": "TX",
        "city": "Indian Hills",
        "lat": 26.2124,
        "lng": -97.9165
    },
    {
        "state": "CA",
        "city": "Burney",
        "lat": 40.8846,
        "lng": -121.6691
    },
    {
        "state": "PR",
        "city": "Los Prados",
        "lat": 18.233,
        "lng": -66.0621
    },
    {
        "state": "NC",
        "city": "Mineral Springs",
        "lat": 34.9412,
        "lng": -80.6847
    },
    {
        "state": "CO",
        "city": "Burlington",
        "lat": 39.3042,
        "lng": -102.2712
    },
    {
        "state": "ID",
        "city": "Mountain Home AFB",
        "lat": 43.0496,
        "lng": -115.8655
    },
    {
        "state": "IA",
        "city": "West Burlington",
        "lat": 40.8215,
        "lng": -91.1755
    },
    {
        "state": "WA",
        "city": "Fairchild AFB",
        "lat": 47.6187,
        "lng": -117.6484
    },
    {
        "state": "MN",
        "city": "Blue Earth",
        "lat": 43.6409,
        "lng": -94.1005
    },
    {
        "state": "NY",
        "city": "Brightwaters",
        "lat": 40.7193,
        "lng": -73.2642
    },
    {
        "state": "GA",
        "city": "Alamo",
        "lat": 32.1469,
        "lng": -82.7798
    },
    {
        "state": "CA",
        "city": "Crest",
        "lat": 32.8,
        "lng": -116.8671
    },
    {
        "state": "VA",
        "city": "Lake Land'Or",
        "lat": 38.017,
        "lng": -77.5593
    },
    {
        "state": "MS",
        "city": "Baldwyn",
        "lat": 34.5071,
        "lng": -88.6416
    },
    {
        "state": "MO",
        "city": "Monroe City",
        "lat": 39.6542,
        "lng": -91.7327
    },
    {
        "state": "GA",
        "city": "Grantville",
        "lat": 33.2371,
        "lng": -84.8293
    },
    {
        "state": "CT",
        "city": "Moosup",
        "lat": 41.7173,
        "lng": -71.8757
    },
    {
        "state": "HI",
        "city": "Lanai City",
        "lat": 20.8279,
        "lng": -156.9147
    },
    {
        "state": "NJ",
        "city": "Port Monmouth",
        "lat": 40.4338,
        "lng": -74.1009
    },
    {
        "state": "AZ",
        "city": "Red Rock",
        "lat": 32.561,
        "lng": -111.3745
    },
    {
        "state": "MO",
        "city": "Cuba",
        "lat": 38.0671,
        "lng": -91.4057
    },
    {
        "state": "AL",
        "city": "Moundville",
        "lat": 32.9968,
        "lng": -87.6272
    },
    {
        "state": "CA",
        "city": "Tipton",
        "lat": 36.0572,
        "lng": -119.3135
    },
    {
        "state": "NY",
        "city": "Port Washington North",
        "lat": 40.8434,
        "lng": -73.7014
    },
    {
        "state": "CT",
        "city": "Fairfield University",
        "lat": 41.159,
        "lng": -73.2571
    },
    {
        "state": "VA",
        "city": "Daleville",
        "lat": 37.415,
        "lng": -79.9132
    },
    {
        "state": "CA",
        "city": "Kelly Ridge",
        "lat": 39.5289,
        "lng": -121.4662
    },
    {
        "state": "KS",
        "city": "Larned",
        "lat": 38.1833,
        "lng": -99.1012
    },
    {
        "state": "PA",
        "city": "Valley View",
        "lat": 39.9497,
        "lng": -76.701
    },
    {
        "state": "CA",
        "city": "Moss Beach",
        "lat": 37.5184,
        "lng": -122.5036
    },
    {
        "state": "FL",
        "city": "Williston Highlands",
        "lat": 29.3336,
        "lng": -82.5357
    },
    {
        "state": "MA",
        "city": "Acushnet Center",
        "lat": 41.685,
        "lng": -70.9064
    },
    {
        "state": "TX",
        "city": "Bishop",
        "lat": 27.5852,
        "lng": -97.7975
    },
    {
        "state": "CA",
        "city": "Agua Dulce",
        "lat": 34.5044,
        "lng": -118.316
    },
    {
        "state": "OH",
        "city": "McDonald",
        "lat": 41.1636,
        "lng": -80.7233
    },
    {
        "state": "OK",
        "city": "Atoka",
        "lat": 34.386,
        "lng": -96.1317
    },
    {
        "state": "KY",
        "city": "Park Hills",
        "lat": 39.0692,
        "lng": -84.5313
    },
    {
        "state": "NJ",
        "city": "North Middletown",
        "lat": 40.4395,
        "lng": -74.1179
    },
    {
        "state": "OH",
        "city": "Millersburg",
        "lat": 40.5533,
        "lng": -81.9171
    },
    {
        "state": "NY",
        "city": "Wanakah",
        "lat": 42.7435,
        "lng": -78.9027
    },
    {
        "state": "IL",
        "city": "East Dundee",
        "lat": 42.0972,
        "lng": -88.2545
    },
    {
        "state": "WA",
        "city": "Warm Beach",
        "lat": 48.1665,
        "lng": -122.3448
    },
    {
        "state": "SC",
        "city": "Denmark",
        "lat": 33.3152,
        "lng": -81.1364
    },
    {
        "state": "MO",
        "city": "Byrnes Mill",
        "lat": 38.4395,
        "lng": -90.5741
    },
    {
        "state": "PR",
        "city": "Sabana Hoyos",
        "lat": 18.4213,
        "lng": -66.6084
    },
    {
        "state": "WA",
        "city": "Zillah",
        "lat": 46.4084,
        "lng": -120.2727
    },
    {
        "state": "NC",
        "city": "Nags Head",
        "lat": 35.9473,
        "lng": -75.6273
    },
    {
        "state": "IN",
        "city": "Corydon",
        "lat": 38.213,
        "lng": -86.1257
    },
    {
        "state": "KY",
        "city": "Wilder",
        "lat": 39.0401,
        "lng": -84.4816
    },
    {
        "state": "FL",
        "city": "Carrabelle",
        "lat": 29.8555,
        "lng": -84.6685
    },
    {
        "state": "PA",
        "city": "East Greenville",
        "lat": 40.4057,
        "lng": -75.5059
    },
    {
        "state": "CO",
        "city": "Orchard City",
        "lat": 38.8144,
        "lng": -107.9705
    },
    {
        "state": "MO",
        "city": "St. Paul",
        "lat": 38.8486,
        "lng": -90.7406
    },
    {
        "state": "LA",
        "city": "Greenwood",
        "lat": 32.4359,
        "lng": -93.9643
    },
    {
        "state": "HI",
        "city": "Kekaha",
        "lat": 21.9684,
        "lng": -159.7141
    },
    {
        "state": "CO",
        "city": "Strasburg",
        "lat": 39.7181,
        "lng": -104.3195
    },
    {
        "state": "ID",
        "city": "Salmon",
        "lat": 45.1743,
        "lng": -113.8947
    },
    {
        "state": "PA",
        "city": "Wayne Heights",
        "lat": 39.7455,
        "lng": -77.5437
    },
    {
        "state": "MI",
        "city": "Mount Morris",
        "lat": 43.1176,
        "lng": -83.6987
    },
    {
        "state": "AZ",
        "city": "Oracle",
        "lat": 32.6085,
        "lng": -110.7826
    },
    {
        "state": "OH",
        "city": "Brimfield",
        "lat": 41.0941,
        "lng": -81.3482
    },
    {
        "state": "IL",
        "city": "Georgetown",
        "lat": 39.9774,
        "lng": -87.6354
    },
    {
        "state": "CA",
        "city": "Nevada City",
        "lat": 39.2607,
        "lng": -121.0231
    },
    {
        "state": "AR",
        "city": "Pottsville",
        "lat": 35.2312,
        "lng": -93.0654
    },
    {
        "state": "WI",
        "city": "New Holstein",
        "lat": 43.9491,
        "lng": -88.0942
    },
    {
        "state": "TX",
        "city": "Combes",
        "lat": 26.2448,
        "lng": -97.7257
    },
    {
        "state": "NV",
        "city": "Minden",
        "lat": 38.9632,
        "lng": -119.7683
    },
    {
        "state": "OH",
        "city": "Lincoln Heights",
        "lat": 39.2434,
        "lng": -84.457
    },
    {
        "state": "VA",
        "city": "Lebanon",
        "lat": 36.8991,
        "lng": -82.0784
    },
    {
        "state": "NJ",
        "city": "Stirling",
        "lat": 40.6782,
        "lng": -74.4936
    },
    {
        "state": "TX",
        "city": "Grand Saline",
        "lat": 32.6776,
        "lng": -95.7114
    },
    {
        "state": "NY",
        "city": "South Hempstead",
        "lat": 40.6814,
        "lng": -73.6233
    },
    {
        "state": "OH",
        "city": "Mount Healthy Heights",
        "lat": 39.2702,
        "lng": -84.5693
    },
    {
        "state": "NY",
        "city": "Maybrook",
        "lat": 41.4881,
        "lng": -74.213
    },
    {
        "state": "SC",
        "city": "Lakewood",
        "lat": 33.8428,
        "lng": -80.3492
    },
    {
        "state": "MI",
        "city": "Bath",
        "lat": 42.8199,
        "lng": -84.4544
    },
    {
        "state": "NJ",
        "city": "Sewell",
        "lat": 39.7696,
        "lng": -75.1443
    },
    {
        "state": "FL",
        "city": "Port Richey",
        "lat": 28.2759,
        "lng": -82.7254
    },
    {
        "state": "IA",
        "city": "Tipton",
        "lat": 41.7701,
        "lng": -91.1283
    },
    {
        "state": "NE",
        "city": "Ashland",
        "lat": 41.0396,
        "lng": -96.3723
    },
    {
        "state": "SD",
        "city": "Mobridge",
        "lat": 45.5409,
        "lng": -100.4349
    },
    {
        "state": "NJ",
        "city": "Ocean Grove",
        "lat": 40.2119,
        "lng": -74.0083
    },
    {
        "state": "FL",
        "city": "Woodlawn Beach",
        "lat": 30.3865,
        "lng": -86.9944
    },
    {
        "state": "AL",
        "city": "Marion",
        "lat": 32.6318,
        "lng": -87.3172
    },
    {
        "state": "PA",
        "city": "Churchill",
        "lat": 40.4389,
        "lng": -79.8416
    },
    {
        "state": "GA",
        "city": "Tybee Island",
        "lat": 32.0095,
        "lng": -80.8531
    },
    {
        "state": "TX",
        "city": "Beach City",
        "lat": 29.7269,
        "lng": -94.8549
    },
    {
        "state": "ID",
        "city": "Soda Springs",
        "lat": 42.659,
        "lng": -111.5878
    },
    {
        "state": "OK",
        "city": "Wewoka",
        "lat": 35.1441,
        "lng": -96.4968
    },
    {
        "state": "UT",
        "city": "Erda",
        "lat": 40.6028,
        "lng": -112.3214
    },
    {
        "state": "SC",
        "city": "Saluda",
        "lat": 34.0009,
        "lng": -81.7713
    },
    {
        "state": "TX",
        "city": "Hollywood Park",
        "lat": 29.5994,
        "lng": -98.4841
    },
    {
        "state": "VA",
        "city": "Lake Wilderness",
        "lat": 38.3036,
        "lng": -77.7277
    },
    {
        "state": "TX",
        "city": "San Saba",
        "lat": 31.1975,
        "lng": -98.7194
    },
    {
        "state": "WA",
        "city": "Arlington Heights",
        "lat": 48.2119,
        "lng": -122.063
    },
    {
        "state": "FL",
        "city": "South Beach",
        "lat": 27.5883,
        "lng": -80.3435
    },
    {
        "state": "IL",
        "city": "North Barrington",
        "lat": 42.2065,
        "lng": -88.1316
    },
    {
        "state": "NC",
        "city": "Bermuda Run",
        "lat": 36.0041,
        "lng": -80.4306
    },
    {
        "state": "NC",
        "city": "Red Springs",
        "lat": 34.8046,
        "lng": -79.1822
    },
    {
        "state": "NJ",
        "city": "Menlo Park Terrace",
        "lat": 40.5534,
        "lng": -74.3243
    },
    {
        "state": "MS",
        "city": "Iuka",
        "lat": 34.8077,
        "lng": -88.1978
    },
    {
        "state": "PA",
        "city": "Summit Hill",
        "lat": 40.8249,
        "lng": -75.8464
    },
    {
        "state": "TX",
        "city": "Early",
        "lat": 31.7421,
        "lng": -98.9366
    },
    {
        "state": "TX",
        "city": "Henrietta",
        "lat": 33.8146,
        "lng": -98.1924
    },
    {
        "state": "PA",
        "city": "Salunga",
        "lat": 40.0929,
        "lng": -76.4279
    },
    {
        "state": "LA",
        "city": "Lutcher",
        "lat": 30.0646,
        "lng": -90.7124
    },
    {
        "state": "OH",
        "city": "Hicksville",
        "lat": 41.2944,
        "lng": -84.7648
    },
    {
        "state": "SC",
        "city": "Lesslie",
        "lat": 34.8856,
        "lng": -80.9541
    },
    {
        "state": "TX",
        "city": "Piney Point Village",
        "lat": 29.7588,
        "lng": -95.5156
    },
    {
        "state": "LA",
        "city": "Lakeshore",
        "lat": 32.535,
        "lng": -92.0328
    },
    {
        "state": "TX",
        "city": "Karnes City",
        "lat": 28.8858,
        "lng": -97.9002
    },
    {
        "state": "AL",
        "city": "Triana",
        "lat": 34.5888,
        "lng": -86.7489
    },
    {
        "state": "MO",
        "city": "Bethany",
        "lat": 40.2684,
        "lng": -94.0282
    },
    {
        "state": "MN",
        "city": "Proctor",
        "lat": 46.7407,
        "lng": -92.2282
    },
    {
        "state": "CT",
        "city": "Glenville",
        "lat": 41.0351,
        "lng": -73.6657
    },
    {
        "state": "MD",
        "city": "Gambrills",
        "lat": 39.0927,
        "lng": -76.6511
    },
    {
        "state": "FL",
        "city": "Eagle Lake",
        "lat": 27.976,
        "lng": -81.7573
    },
    {
        "state": "NC",
        "city": "Green Level",
        "lat": 36.1233,
        "lng": -79.3463
    },
    {
        "state": "OK",
        "city": "Tishomingo",
        "lat": 34.2388,
        "lng": -96.683
    },
    {
        "state": "WI",
        "city": "Hortonville",
        "lat": 44.3368,
        "lng": -88.6361
    },
    {
        "state": "OH",
        "city": "Wellsville",
        "lat": 40.6042,
        "lng": -80.655
    },
    {
        "state": "GA",
        "city": "Cuthbert",
        "lat": 31.7713,
        "lng": -84.794
    },
    {
        "state": "FL",
        "city": "Rainbow Lakes Estates",
        "lat": 29.158,
        "lng": -82.5099
    },
    {
        "state": "WA",
        "city": "Clyde Hill",
        "lat": 47.6304,
        "lng": -122.218
    },
    {
        "state": "NV",
        "city": "Yerington",
        "lat": 38.9554,
        "lng": -119.1101
    },
    {
        "state": "PA",
        "city": "Wyoming",
        "lat": 41.3058,
        "lng": -75.8418
    },
    {
        "state": "PA",
        "city": "Myerstown",
        "lat": 40.3722,
        "lng": -76.3055
    },
    {
        "state": "NJ",
        "city": "Wildwood Crest",
        "lat": 38.9718,
        "lng": -74.8377
    },
    {
        "state": "PA",
        "city": "Edgewood",
        "lat": 40.4313,
        "lng": -79.8839
    },
    {
        "state": "MD",
        "city": "Konterra",
        "lat": 39.0774,
        "lng": -76.9023
    },
    {
        "state": "IL",
        "city": "Ingalls Park",
        "lat": 41.5204,
        "lng": -88.0345
    },
    {
        "state": "MA",
        "city": "South Dennis",
        "lat": 41.7051,
        "lng": -70.1537
    },
    {
        "state": "OH",
        "city": "Fairport Harbor",
        "lat": 41.7475,
        "lng": -81.2731
    },
    {
        "state": "NE",
        "city": "Minden",
        "lat": 40.4981,
        "lng": -98.9672
    },
    {
        "state": "SC",
        "city": "Gloverville",
        "lat": 33.5274,
        "lng": -81.8144
    },
    {
        "state": "NC",
        "city": "Louisburg",
        "lat": 36.0986,
        "lng": -78.3009
    },
    {
        "state": "GA",
        "city": "Hoschton",
        "lat": 34.0853,
        "lng": -83.7594
    },
    {
        "state": "MD",
        "city": "Andrews AFB",
        "lat": 38.8054,
        "lng": -76.8744
    },
    {
        "state": "IN",
        "city": "Smithville-Sanders",
        "lat": 39.0597,
        "lng": -86.5108
    },
    {
        "state": "FL",
        "city": "Biscayne Park",
        "lat": 25.8818,
        "lng": -80.1814
    },
    {
        "state": "NC",
        "city": "Southern Shores",
        "lat": 36.1205,
        "lng": -75.7328
    },
    {
        "state": "PA",
        "city": "Mount Pocono",
        "lat": 41.1225,
        "lng": -75.3582
    },
    {
        "state": "WA",
        "city": "Port Ludlow",
        "lat": 47.9101,
        "lng": -122.7006
    },
    {
        "state": "NJ",
        "city": "Moonachie",
        "lat": 40.8408,
        "lng": -74.059
    },
    {
        "state": "TX",
        "city": "Santa Rosa",
        "lat": 26.2561,
        "lng": -97.8252
    },
    {
        "state": "WA",
        "city": "Raymond",
        "lat": 46.6839,
        "lng": -123.738
    },
    {
        "state": "NJ",
        "city": "Woodbury Heights",
        "lat": 39.816,
        "lng": -75.1511
    },
    {
        "state": "NJ",
        "city": "Mount Hope",
        "lat": 40.9182,
        "lng": -74.5508
    },
    {
        "state": "AK",
        "city": "Kotzebue",
        "lat": 66.8766,
        "lng": -162.5231
    },
    {
        "state": "PA",
        "city": "McSherrystown",
        "lat": 39.8036,
        "lng": -77.0199
    },
    {
        "state": "LA",
        "city": "Vivian",
        "lat": 32.8711,
        "lng": -93.9862
    },
    {
        "state": "CA",
        "city": "Lucerne",
        "lat": 39.0698,
        "lng": -122.7746
    },
    {
        "state": "PA",
        "city": "Pitcairn",
        "lat": 40.4079,
        "lng": -79.7765
    },
    {
        "state": "OR",
        "city": "Shady Cove",
        "lat": 42.6117,
        "lng": -122.8179
    },
    {
        "state": "WV",
        "city": "Ripley",
        "lat": 38.8201,
        "lng": -81.7091
    },
    {
        "state": "NY",
        "city": "New York Mills",
        "lat": 43.1007,
        "lng": -75.2932
    },
    {
        "state": "KS",
        "city": "Beloit",
        "lat": 39.4645,
        "lng": -98.1082
    },
    {
        "state": "HI",
        "city": "Holualoa",
        "lat": 19.6548,
        "lng": -155.9207
    },
    {
        "state": "NY",
        "city": "Hartsdale",
        "lat": 41.0154,
        "lng": -73.8036
    },
    {
        "state": "NC",
        "city": "Wallburg",
        "lat": 36.0088,
        "lng": -80.1453
    },
    {
        "state": "KS",
        "city": "Ellsworth",
        "lat": 38.7327,
        "lng": -98.2285
    },
    {
        "state": "TX",
        "city": "Woodville",
        "lat": 30.774,
        "lng": -94.4234
    },
    {
        "state": "IN",
        "city": "Syracuse",
        "lat": 41.4226,
        "lng": -85.7492
    },
    {
        "state": "FL",
        "city": "Bushnell",
        "lat": 28.686,
        "lng": -82.1165
    },
    {
        "state": "AR",
        "city": "Prescott",
        "lat": 33.8056,
        "lng": -93.3909
    },
    {
        "state": "OK",
        "city": "Okemah",
        "lat": 35.4292,
        "lng": -96.2998
    },
    {
        "state": "ME",
        "city": "Calais",
        "lat": 45.134,
        "lng": -67.224
    },
    {
        "state": "TX",
        "city": "Needville",
        "lat": 29.3957,
        "lng": -95.8386
    },
    {
        "state": "PA",
        "city": "Upland",
        "lat": 39.8562,
        "lng": -75.3796
    },
    {
        "state": "TX",
        "city": "Annetta",
        "lat": 32.6938,
        "lng": -97.6581
    },
    {
        "state": "AL",
        "city": "Underwood-Petersville",
        "lat": 34.877,
        "lng": -87.6975
    },
    {
        "state": "FL",
        "city": "Holmes Beach",
        "lat": 27.5108,
        "lng": -82.7152
    },
    {
        "state": "WA",
        "city": "Chico",
        "lat": 47.6226,
        "lng": -122.7193
    },
    {
        "state": "CO",
        "city": "Snowmass Village",
        "lat": 39.2212,
        "lng": -106.9392
    },
    {
        "state": "LA",
        "city": "South Vacherie",
        "lat": 29.9406,
        "lng": -90.6893
    },
    {
        "state": "OH",
        "city": "Cadiz",
        "lat": 40.2644,
        "lng": -80.998
    },
    {
        "state": "SC",
        "city": "Bamberg",
        "lat": 33.2995,
        "lng": -81.0323
    },
    {
        "state": "LA",
        "city": "Natalbany",
        "lat": 30.5486,
        "lng": -90.4848
    },
    {
        "state": "OR",
        "city": "Eagle Crest",
        "lat": 44.2614,
        "lng": -121.2995
    },
    {
        "state": "GA",
        "city": "Unadilla",
        "lat": 32.2583,
        "lng": -83.7356
    },
    {
        "state": "IA",
        "city": "Tama",
        "lat": 41.9648,
        "lng": -92.5743
    },
    {
        "state": "NY",
        "city": "Tuxedo",
        "lat": 41.2324,
        "lng": -74.1774
    },
    {
        "state": "TX",
        "city": "Port Aransas",
        "lat": 27.8102,
        "lng": -97.0875
    },
    {
        "state": "CO",
        "city": "Walsenburg",
        "lat": 37.6307,
        "lng": -104.7818
    },
    {
        "state": "CA",
        "city": "Arbuckle",
        "lat": 39.0141,
        "lng": -122.061
    },
    {
        "state": "AK",
        "city": "Eielson AFB",
        "lat": 64.6741,
        "lng": -147.0605
    },
    {
        "state": "TN",
        "city": "South Pittsburg",
        "lat": 35.0111,
        "lng": -85.7183
    },
    {
        "state": "IN",
        "city": "Attica",
        "lat": 40.2874,
        "lng": -87.2452
    },
    {
        "state": "WI",
        "city": "Oostburg",
        "lat": 43.6237,
        "lng": -87.7888
    },
    {
        "state": "OK",
        "city": "Bethel Acres",
        "lat": 35.3048,
        "lng": -97.037
    },
    {
        "state": "NC",
        "city": "Bayshore",
        "lat": 34.2893,
        "lng": -77.8025
    },
    {
        "state": "MI",
        "city": "Gladwin",
        "lat": 43.9837,
        "lng": -84.4876
    },
    {
        "state": "IA",
        "city": "Garner",
        "lat": 43.1,
        "lng": -93.6031
    },
    {
        "state": "TN",
        "city": "Sale Creek",
        "lat": 35.3894,
        "lng": -85.0874
    },
    {
        "state": "NY",
        "city": "East Syracuse",
        "lat": 43.0638,
        "lng": -76.0698
    },
    {
        "state": "ND",
        "city": "Beulah",
        "lat": 47.2665,
        "lng": -101.7734
    },
    {
        "state": "GA",
        "city": "Nicholls",
        "lat": 31.5186,
        "lng": -82.6396
    },
    {
        "state": "AL",
        "city": "Dadeville",
        "lat": 32.8326,
        "lng": -85.7675
    },
    {
        "state": "MT",
        "city": "Cut Bank",
        "lat": 48.6344,
        "lng": -112.3304
    },
    {
        "state": "PA",
        "city": "Wormleysburg",
        "lat": 40.2604,
        "lng": -76.9094
    },
    {
        "state": "SD",
        "city": "Canton",
        "lat": 43.3032,
        "lng": -96.5848
    },
    {
        "state": "NJ",
        "city": "Lawnside",
        "lat": 39.8673,
        "lng": -75.0289
    },