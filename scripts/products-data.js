// Product data — one array per category, mirroring one Google Sheets tab per category.
// Columns: Descrição -> name | Preço -> price | Imagem -> img (image URL).
// All 5 tabs currently share the same product list; update each array independently once the sheet's tabs diverge.
const STATIC_PRODUCTS_DATA = {
  smartphones: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p9",
    "name": "Poco C71",
    "price": 879.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p10",
    "name": "Realme Note 70",
    "price": 919.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p11",
    "name": "Redmi 15C",
    "price": 939.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p12",
    "name": "Poco C85",
    "price": 939.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p13",
    "name": "Galaxy A07",
    "price": 949.99,
    "img": "https://i.ibb.co/hr7Q2L3/29-Galaxy-A07.png"
  },
  {
    "id": "p14",
    "name": "Poco M7",
    "price": 1069.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p15",
    "name": "Redmi 15C",
    "price": 1079.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p16",
    "name": "Poco C85",
    "price": 1079.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p17",
    "name": "Realme Note 70",
    "price": 1109.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p18",
    "name": "Poco M7",
    "price": 1169.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p19",
    "name": "Realme C71 NFC",
    "price": 1179.99,
    "img": "https://i.ibb.co/GQYy2vGN/14-Realme-C71.png"
  },
  {
    "id": "p20",
    "name": "Redmi 15",
    "price": 1209.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p21",
    "name": "Realme C75X NFC",
    "price": 1269.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p22",
    "name": "Realme C75 NFC",
    "price": 1309.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p23",
    "name": "Redmi Note 14",
    "price": 1309.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p24",
    "name": "Realme C85 NFC",
    "price": 1449.99,
    "img": "https://i.ibb.co/jvCdWrfH/27-Realme-C85-5-G.png"
  },
  {
    "id": "p25",
    "name": "Redmi Pad 2",
    "price": 1469.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p26",
    "name": "Redmi Note 14S NFC",
    "price": 1469.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p27",
    "name": "Redmi Note 15",
    "price": 1469.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p28",
    "name": "Redmi Pad 2",
    "price": 1519.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p29",
    "name": "Redmi Note 14 5G NFC",
    "price": 1569.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p30",
    "name": "Poco M8 5G NFC",
    "price": 1619.99,
    "img": "https://i.ibb.co/pjP3L9Sg/27-Poco-M8.png"
  },
  {
    "id": "p31",
    "name": "Redmi Pad 2 4G",
    "price": 1639.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p32",
    "name": "Redmi Note 14 Pro 4G NFC",
    "price": 1669.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p33",
    "name": "Poco M7 Pro 5g NFC",
    "price": 1769.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p34",
    "name": "Poco X7 5G",
    "price": 1769.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p35",
    "name": "Redmi Note 15 Pro 4g",
    "price": 1779.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p36",
    "name": "Redmi Note 14 Pro 5G NFC",
    "price": 1889.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p37",
    "name": "Poco X7 5G",
    "price": 1949.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p38",
    "name": "Galaxy A56 5G",
    "price": 1999.99,
    "img": "https://i.ibb.co/Xrjs54Rg/24-Galaxy-A56.png"
  },
  {
    "id": "p39",
    "name": "Redmi Note 15 Pro 5g",
    "price": 2049.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p40",
    "name": "Poco X7 PRO 5G",
    "price": 2079.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p41",
    "name": "Poco F6 Pro 5G",
    "price": 2429.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p42",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2439.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p43",
    "name": "Poco X7 PRO 5G",
    "price": 2469.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p44",
    "name": "Redmi Note 14 Pro Plus 5G NFC",
    "price": 2499.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p45",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2719.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p46",
    "name": "Poco F7 5G",
    "price": 3099.99,
    "img": "https://i.ibb.co/zWVph3HF/30-Poco-F7.png"
  },
  {
    "id": "p47",
    "name": "Xiaomi 15T 5G",
    "price": 3119.99,
    "img": "https://i.ibb.co/8ngMsrSQ/28-Xiaomi-15-T.png"
  }
],
  smartwatches: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p9",
    "name": "Poco C71",
    "price": 879.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p10",
    "name": "Realme Note 70",
    "price": 919.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p11",
    "name": "Redmi 15C",
    "price": 939.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p12",
    "name": "Poco C85",
    "price": 939.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p13",
    "name": "Galaxy A07",
    "price": 949.99,
    "img": "https://i.ibb.co/hr7Q2L3/29-Galaxy-A07.png"
  },
  {
    "id": "p14",
    "name": "Poco M7",
    "price": 1069.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p15",
    "name": "Redmi 15C",
    "price": 1079.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p16",
    "name": "Poco C85",
    "price": 1079.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p17",
    "name": "Realme Note 70",
    "price": 1109.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p18",
    "name": "Poco M7",
    "price": 1169.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p19",
    "name": "Realme C71 NFC",
    "price": 1179.99,
    "img": "https://i.ibb.co/GQYy2vGN/14-Realme-C71.png"
  },
  {
    "id": "p20",
    "name": "Redmi 15",
    "price": 1209.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p21",
    "name": "Realme C75X NFC",
    "price": 1269.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p22",
    "name": "Realme C75 NFC",
    "price": 1309.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p23",
    "name": "Redmi Note 14",
    "price": 1309.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p24",
    "name": "Realme C85 NFC",
    "price": 1449.99,
    "img": "https://i.ibb.co/jvCdWrfH/27-Realme-C85-5-G.png"
  },
  {
    "id": "p25",
    "name": "Redmi Pad 2",
    "price": 1469.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p26",
    "name": "Redmi Note 14S NFC",
    "price": 1469.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p27",
    "name": "Redmi Note 15",
    "price": 1469.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p28",
    "name": "Redmi Pad 2",
    "price": 1519.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p29",
    "name": "Redmi Note 14 5G NFC",
    "price": 1569.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p30",
    "name": "Poco M8 5G NFC",
    "price": 1619.99,
    "img": "https://i.ibb.co/pjP3L9Sg/27-Poco-M8.png"
  },
  {
    "id": "p31",
    "name": "Redmi Pad 2 4G",
    "price": 1639.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p32",
    "name": "Redmi Note 14 Pro 4G NFC",
    "price": 1669.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p33",
    "name": "Poco M7 Pro 5g NFC",
    "price": 1769.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p34",
    "name": "Poco X7 5G",
    "price": 1769.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p35",
    "name": "Redmi Note 15 Pro 4g",
    "price": 1779.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p36",
    "name": "Redmi Note 14 Pro 5G NFC",
    "price": 1889.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p37",
    "name": "Poco X7 5G",
    "price": 1949.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p38",
    "name": "Galaxy A56 5G",
    "price": 1999.99,
    "img": "https://i.ibb.co/Xrjs54Rg/24-Galaxy-A56.png"
  },
  {
    "id": "p39",
    "name": "Redmi Note 15 Pro 5g",
    "price": 2049.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p40",
    "name": "Poco X7 PRO 5G",
    "price": 2079.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p41",
    "name": "Poco F6 Pro 5G",
    "price": 2429.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p42",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2439.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p43",
    "name": "Poco X7 PRO 5G",
    "price": 2469.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p44",
    "name": "Redmi Note 14 Pro Plus 5G NFC",
    "price": 2499.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p45",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2719.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p46",
    "name": "Poco F7 5G",
    "price": 3099.99,
    "img": "https://i.ibb.co/zWVph3HF/30-Poco-F7.png"
  },
  {
    "id": "p47",
    "name": "Xiaomi 15T 5G",
    "price": 3119.99,
    "img": "https://i.ibb.co/8ngMsrSQ/28-Xiaomi-15-T.png"
  }
],
  tablets: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p9",
    "name": "Poco C71",
    "price": 879.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p10",
    "name": "Realme Note 70",
    "price": 919.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p11",
    "name": "Redmi 15C",
    "price": 939.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p12",
    "name": "Poco C85",
    "price": 939.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p13",
    "name": "Galaxy A07",
    "price": 949.99,
    "img": "https://i.ibb.co/hr7Q2L3/29-Galaxy-A07.png"
  },
  {
    "id": "p14",
    "name": "Poco M7",
    "price": 1069.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p15",
    "name": "Redmi 15C",
    "price": 1079.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p16",
    "name": "Poco C85",
    "price": 1079.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p17",
    "name": "Realme Note 70",
    "price": 1109.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p18",
    "name": "Poco M7",
    "price": 1169.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p19",
    "name": "Realme C71 NFC",
    "price": 1179.99,
    "img": "https://i.ibb.co/GQYy2vGN/14-Realme-C71.png"
  },
  {
    "id": "p20",
    "name": "Redmi 15",
    "price": 1209.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p21",
    "name": "Realme C75X NFC",
    "price": 1269.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p22",
    "name": "Realme C75 NFC",
    "price": 1309.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p23",
    "name": "Redmi Note 14",
    "price": 1309.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p24",
    "name": "Realme C85 NFC",
    "price": 1449.99,
    "img": "https://i.ibb.co/jvCdWrfH/27-Realme-C85-5-G.png"
  },
  {
    "id": "p25",
    "name": "Redmi Pad 2",
    "price": 1469.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p26",
    "name": "Redmi Note 14S NFC",
    "price": 1469.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p27",
    "name": "Redmi Note 15",
    "price": 1469.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p28",
    "name": "Redmi Pad 2",
    "price": 1519.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p29",
    "name": "Redmi Note 14 5G NFC",
    "price": 1569.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p30",
    "name": "Poco M8 5G NFC",
    "price": 1619.99,
    "img": "https://i.ibb.co/pjP3L9Sg/27-Poco-M8.png"
  },
  {
    "id": "p31",
    "name": "Redmi Pad 2 4G",
    "price": 1639.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p32",
    "name": "Redmi Note 14 Pro 4G NFC",
    "price": 1669.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p33",
    "name": "Poco M7 Pro 5g NFC",
    "price": 1769.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p34",
    "name": "Poco X7 5G",
    "price": 1769.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p35",
    "name": "Redmi Note 15 Pro 4g",
    "price": 1779.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p36",
    "name": "Redmi Note 14 Pro 5G NFC",
    "price": 1889.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p37",
    "name": "Poco X7 5G",
    "price": 1949.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p38",
    "name": "Galaxy A56 5G",
    "price": 1999.99,
    "img": "https://i.ibb.co/Xrjs54Rg/24-Galaxy-A56.png"
  },
  {
    "id": "p39",
    "name": "Redmi Note 15 Pro 5g",
    "price": 2049.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p40",
    "name": "Poco X7 PRO 5G",
    "price": 2079.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p41",
    "name": "Poco F6 Pro 5G",
    "price": 2429.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p42",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2439.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p43",
    "name": "Poco X7 PRO 5G",
    "price": 2469.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p44",
    "name": "Redmi Note 14 Pro Plus 5G NFC",
    "price": 2499.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p45",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2719.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p46",
    "name": "Poco F7 5G",
    "price": 3099.99,
    "img": "https://i.ibb.co/zWVph3HF/30-Poco-F7.png"
  },
  {
    "id": "p47",
    "name": "Xiaomi 15T 5G",
    "price": 3119.99,
    "img": "https://i.ibb.co/8ngMsrSQ/28-Xiaomi-15-T.png"
  }
],
  acessorios: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p9",
    "name": "Poco C71",
    "price": 879.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p10",
    "name": "Realme Note 70",
    "price": 919.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p11",
    "name": "Redmi 15C",
    "price": 939.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p12",
    "name": "Poco C85",
    "price": 939.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p13",
    "name": "Galaxy A07",
    "price": 949.99,
    "img": "https://i.ibb.co/hr7Q2L3/29-Galaxy-A07.png"
  },
  {
    "id": "p14",
    "name": "Poco M7",
    "price": 1069.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p15",
    "name": "Redmi 15C",
    "price": 1079.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p16",
    "name": "Poco C85",
    "price": 1079.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p17",
    "name": "Realme Note 70",
    "price": 1109.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p18",
    "name": "Poco M7",
    "price": 1169.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p19",
    "name": "Realme C71 NFC",
    "price": 1179.99,
    "img": "https://i.ibb.co/GQYy2vGN/14-Realme-C71.png"
  },
  {
    "id": "p20",
    "name": "Redmi 15",
    "price": 1209.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p21",
    "name": "Realme C75X NFC",
    "price": 1269.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p22",
    "name": "Realme C75 NFC",
    "price": 1309.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p23",
    "name": "Redmi Note 14",
    "price": 1309.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p24",
    "name": "Realme C85 NFC",
    "price": 1449.99,
    "img": "https://i.ibb.co/jvCdWrfH/27-Realme-C85-5-G.png"
  },
  {
    "id": "p25",
    "name": "Redmi Pad 2",
    "price": 1469.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p26",
    "name": "Redmi Note 14S NFC",
    "price": 1469.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p27",
    "name": "Redmi Note 15",
    "price": 1469.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p28",
    "name": "Redmi Pad 2",
    "price": 1519.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p29",
    "name": "Redmi Note 14 5G NFC",
    "price": 1569.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p30",
    "name": "Poco M8 5G NFC",
    "price": 1619.99,
    "img": "https://i.ibb.co/pjP3L9Sg/27-Poco-M8.png"
  },
  {
    "id": "p31",
    "name": "Redmi Pad 2 4G",
    "price": 1639.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p32",
    "name": "Redmi Note 14 Pro 4G NFC",
    "price": 1669.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p33",
    "name": "Poco M7 Pro 5g NFC",
    "price": 1769.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p34",
    "name": "Poco X7 5G",
    "price": 1769.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p35",
    "name": "Redmi Note 15 Pro 4g",
    "price": 1779.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p36",
    "name": "Redmi Note 14 Pro 5G NFC",
    "price": 1889.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p37",
    "name": "Poco X7 5G",
    "price": 1949.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p38",
    "name": "Galaxy A56 5G",
    "price": 1999.99,
    "img": "https://i.ibb.co/Xrjs54Rg/24-Galaxy-A56.png"
  },
  {
    "id": "p39",
    "name": "Redmi Note 15 Pro 5g",
    "price": 2049.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p40",
    "name": "Poco X7 PRO 5G",
    "price": 2079.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p41",
    "name": "Poco F6 Pro 5G",
    "price": 2429.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p42",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2439.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p43",
    "name": "Poco X7 PRO 5G",
    "price": 2469.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p44",
    "name": "Redmi Note 14 Pro Plus 5G NFC",
    "price": 2499.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p45",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2719.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p46",
    "name": "Poco F7 5G",
    "price": 3099.99,
    "img": "https://i.ibb.co/zWVph3HF/30-Poco-F7.png"
  },
  {
    "id": "p47",
    "name": "Xiaomi 15T 5G",
    "price": 3119.99,
    "img": "https://i.ibb.co/8ngMsrSQ/28-Xiaomi-15-T.png"
  }
],
  eletronicos: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p9",
    "name": "Poco C71",
    "price": 879.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p10",
    "name": "Realme Note 70",
    "price": 919.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p11",
    "name": "Redmi 15C",
    "price": 939.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p12",
    "name": "Poco C85",
    "price": 939.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p13",
    "name": "Galaxy A07",
    "price": 949.99,
    "img": "https://i.ibb.co/hr7Q2L3/29-Galaxy-A07.png"
  },
  {
    "id": "p14",
    "name": "Poco M7",
    "price": 1069.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p15",
    "name": "Redmi 15C",
    "price": 1079.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p16",
    "name": "Poco C85",
    "price": 1079.99,
    "img": "https://i.ibb.co/MxgVyDGd/09-Poco-C85.png"
  },
  {
    "id": "p17",
    "name": "Realme Note 70",
    "price": 1109.99,
    "img": "https://i.ibb.co/mCLxWV7K/05-Realme-Note-70.png"
  },
  {
    "id": "p18",
    "name": "Poco M7",
    "price": 1169.99,
    "img": "https://i.ibb.co/1Y6fK3gq/11-Poco-M7.png"
  },
  {
    "id": "p19",
    "name": "Realme C71 NFC",
    "price": 1179.99,
    "img": "https://i.ibb.co/GQYy2vGN/14-Realme-C71.png"
  },
  {
    "id": "p20",
    "name": "Redmi 15",
    "price": 1209.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p21",
    "name": "Realme C75X NFC",
    "price": 1269.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p22",
    "name": "Realme C75 NFC",
    "price": 1309.99,
    "img": "https://i.ibb.co/JwBGvVz2/07-Realme-C75-X.png"
  },
  {
    "id": "p23",
    "name": "Redmi Note 14",
    "price": 1309.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p24",
    "name": "Realme C85 NFC",
    "price": 1449.99,
    "img": "https://i.ibb.co/jvCdWrfH/27-Realme-C85-5-G.png"
  },
  {
    "id": "p25",
    "name": "Redmi Pad 2",
    "price": 1469.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p26",
    "name": "Redmi Note 14S NFC",
    "price": 1469.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p27",
    "name": "Redmi Note 15",
    "price": 1469.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p28",
    "name": "Redmi Pad 2",
    "price": 1519.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p29",
    "name": "Redmi Note 14 5G NFC",
    "price": 1569.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p30",
    "name": "Poco M8 5G NFC",
    "price": 1619.99,
    "img": "https://i.ibb.co/pjP3L9Sg/27-Poco-M8.png"
  },
  {
    "id": "p31",
    "name": "Redmi Pad 2 4G",
    "price": 1639.99,
    "img": "https://i.ibb.co/KxnQg0M8/17-Redmi-Pad-2-Capa.png"
  },
  {
    "id": "p32",
    "name": "Redmi Note 14 Pro 4G NFC",
    "price": 1669.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p33",
    "name": "Poco M7 Pro 5g NFC",
    "price": 1769.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p34",
    "name": "Poco X7 5G",
    "price": 1769.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p35",
    "name": "Redmi Note 15 Pro 4g",
    "price": 1779.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p36",
    "name": "Redmi Note 14 Pro 5G NFC",
    "price": 1889.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p37",
    "name": "Poco X7 5G",
    "price": 1949.99,
    "img": "https://i.ibb.co/TBFKXsK8/22-Poco-X7.png"
  },
  {
    "id": "p38",
    "name": "Galaxy A56 5G",
    "price": 1999.99,
    "img": "https://i.ibb.co/Xrjs54Rg/24-Galaxy-A56.png"
  },
  {
    "id": "p39",
    "name": "Redmi Note 15 Pro 5g",
    "price": 2049.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p40",
    "name": "Poco X7 PRO 5G",
    "price": 2079.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p41",
    "name": "Poco F6 Pro 5G",
    "price": 2429.99,
    "img": "https://i.ibb.co/JFwv1ZKz/19-Poco-M7-Pro-5-G.png"
  },
  {
    "id": "p42",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2439.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p43",
    "name": "Poco X7 PRO 5G",
    "price": 2469.99,
    "img": "https://i.ibb.co/N6YF1Tfr/23-Poco-X7-PRO.png"
  },
  {
    "id": "p44",
    "name": "Redmi Note 14 Pro Plus 5G NFC",
    "price": 2499.99,
    "img": "https://i.ibb.co/gbt7nc28/16-Redmi-Note-14.png"
  },
  {
    "id": "p45",
    "name": "Redmi Note 15 Pro Plus 5g",
    "price": 2719.99,
    "img": "https://i.ibb.co/xK5nQTBt/06-Redmi-15-C.png"
  },
  {
    "id": "p46",
    "name": "Poco F7 5G",
    "price": 3099.99,
    "img": "https://i.ibb.co/zWVph3HF/30-Poco-F7.png"
  },
  {
    "id": "p47",
    "name": "Xiaomi 15T 5G",
    "price": 3119.99,
    "img": "https://i.ibb.co/8ngMsrSQ/28-Xiaomi-15-T.png"
  }
],
  seminovos: [
  {
    "id": "p1",
    "name": "iPhone 17 PRO MAX (EUA)",
    "price": 8399.99,
    "img": "https://i.ibb.co/84rgdwWW/25-i-Phone-17-PRO-MAX.png"
  },
  {
    "id": "p2",
    "name": "Apple Watch Series 11",
    "price": 2949.99,
    "img": "https://i.ibb.co/5WSqc0yB/40-Apple-Watch-Series-11.png"
  },
  {
    "id": "p3",
    "name": "Realme Note 60X",
    "price": 769.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p4",
    "name": "Poco C71",
    "price": 789.99,
    "img": "https://i.ibb.co/Q7y2qxK3/02-Poco-C71.png"
  },
  {
    "id": "p5",
    "name": "Redmi A5",
    "price": 799.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  },
  {
    "id": "p6",
    "name": "Galaxy A06",
    "price": 849.99,
    "img": "https://i.ibb.co/VWnwXqzY/03-Galaxy-A06.png"
  },
  {
    "id": "p7",
    "name": "Realme Note 60X",
    "price": 869.99,
    "img": "https://i.ibb.co/LzQSRhP4/04-Realme-Note-60-X.png"
  },
  {
    "id": "p8",
    "name": "Redmi A5",
    "price": 869.99,
    "img": "https://i.ibb.co/Fb3RNPT0/01-Redmi-A5.png"
  }
]
};

window.STATIC_PRODUCTS = STATIC_PRODUCTS_DATA;
