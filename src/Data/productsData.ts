// productsData.ts
export interface SubProduct {
  name: string;
  price?: string;
}

export interface Product {
  title: string;
  imageUrl: string;
  badgeText: string;
  top?: boolean;
  url: string;
  subProducts?: SubProduct[];
  accessMethods?: string[];
}


export const allProducts: Product[] = [
  {
    title: 'Free Fire',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745528795/ICONO_FREE_vulwy8.png',
    badgeText: 'Recarga por id',
    url: '/recargas/freefire',
    top: true,
    subProducts: [
      { name: '100 + 10 Diamante' },
      { name: '300 + 31 Diamante' },
      { name: '500 + 52 Diamante' },
      { name: '1000 + 105 Diamante' },
      { name: '2000 + 218 Diamante' },
      { name: '5000 + 560 Diamante' },
    ]
  },
  {
    title: 'Call of Duty: Mobile',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595249/ICONO_COD_t2xsng.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    top: true,
    accessMethods: ['Facebook', 'Google', 'Activision'],
    subProducts: [
      { name: '80 COD point' },
      { name: '420 COD point' },
      { name: '880 COD point' },
      { name: '2400 COD point' },
      { name: '5000 COD point' },
      { name: '10800 COD point' },
    ]
  },
  {
    title: 'Call of Duty: Warzone',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558943/ICONO_WARZONE_lubztp.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
  },
  {
    title: 'Mobile Legends: Bang Bang',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595243/ICONO_MLBB_wuetpi.png',
    badgeText: 'Recarga por id',
    url: '/recargas/freefire',
    top: true,
    subProducts: [
      { name: '55 Diamantes' },
      { name: '86 Diamantes' },
      { name: '165 Diamantes' },
      { name: '172 Diamantes' },
      { name: '257 Diamantes' },
      { name: '275 Diamantes' },
      { name: '565 Diamantes' },
      { name: '706 Diamantes' },
      { name: '2195 Diamantes' },
      { name: '3688 Diamantes' },
      { name: '5532 Diamantes' },
      { name: '9288 Diamantes' },
    ]
  },
  {
    title: 'Roblox',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595241/ICONO_ROBLOX_wqiypb.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    top: true,
    subProducts: [
      { name: '80 Robux' },
      { name: '400 Robux' },
      { name: '800 Robux' },
      { name: '1700 Robux' },
      { name: '4500 Robux' },
      { name: '10000 Robux' },
    ]
  },
  {
    title: 'EA Sports FC Mobile',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595242/ICONO_FC_MOBILE_ck1hlz.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    accessMethods: ['Facebook', 'Google', 'EA'],
    subProducts: [
      { name: '40 FC Points' },
      { name: '100 FC Points' },
      { name: '500 FC Points' },
      { name: '1000 FC Points' },
      { name: '2000 FC Points' },
      { name: '5000 FC Points' },
      { name: '10000 FC Points' },
    ]
  },
  {
    title: 'eFootball',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595244/ICONO_EFOOTBALL_cwmavr.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '130 Monedas' },
      { name: '300 Monedas' },
      { name: '550 Monedas' },
      { name: '750 Monedas' },
      { name: '1040 Monedas' },
      { name: '2130 Monedas' },
      { name: '3250 Monedas' },
      { name: '5700 Monedas' },
      { name: '12800 Monedas' },
    ]
  },
  {
    title: 'Dream League Soccer',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558938/ICONO_DLS25_m0nogt.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '90 Gemas' },
      { name: '400 Gemas' },
      { name: '910 Gemas' },
      { name: '2700 Gemas' },
      { name: '900 MONEDAS' },
      { name: '1750 MONEDAS' },
      { name: '3000 MONEDAS' },
      { name: '5000 MONEDAS' },
      { name: '9000 MONEDAS' },
      { name: '22000 MONEDAS' },
    ]
  },
  {
    title: 'Blood strike',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595236/ICONO_BLOOD_opplht.png',
    badgeText: 'Recarga por id',
    url: '/recargas/freefire',
    accessMethods: ['Facebook', 'Google'],
    subProducts: [
      { name: '100 + 11 Oro' },
      { name: '300 + 20 Oro' },
      { name: '500 + 40 Oro' },
      { name: '1000 + 100 Oro' },
      { name: '2000 + 260 Oro' },
      { name: '5000 + 800 Oro' },
    ]
  },
  {
    title: 'Brawl stars',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595241/ICONO_BRAWL_STARS_mhqkhq.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '30 Gemas' },
      { name: '80 Gemas' },
      { name: '170 Gemas' },
      { name: '360 Gemas' },
      { name: '950 Gemas' },
      { name: '2000 Gemas' },
    ]
  },
  {
    title: 'Clash Royale',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595245/ICONO_CLASH_ROYALE_mm2q7q.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '80 Gemas' },
      { name: '500 Gemas' },
      { name: '1200 Gemas' },
      { name: '2500 Gemas' },
      { name: '6500 Gemas' },
      { name: '14000 Gemas' },
    ]
  },
  {
    title: 'Clash Of Clans',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595246/ICONO_CLASH_OF_CLANS_m6lnc5.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '80 Gemas' },
      { name: '500 Gemas' },
      { name: '1200 Gemas' },
      { name: '2500 Gemas' },
      { name: '6500 Gemas' },
      { name: '14000 Gemas' },
    ]
  },
  {
    title: 'PUBG: Battlegrounds',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745871755/ICONO_PUBG_MOBILE_rowunw.png',
    badgeText: 'Recarga por id',
    url: '/recargas/freefire',
  },
  {
    title: 'Delta Force',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745871758/ICONO_DELTA_FORCE_l7sevg.png',
    badgeText: 'Recarga por id',
    url: '/recargas/freefire',
    subProducts: [
      { name: '18 Monedas Delta' },
      { name: '30 Monedas Delta' },
      { name: '60 Monedas Delta' },
      { name: '300 Monedas Delta' },
      { name: '420 Monedas Delta' },
      { name: '680 Monedas Delta' },
      { name: '1280 Monedas Delta' },
      { name: '1680 Monedas Delta' },
      { name: '3280 Monedas Delta' },
      { name: '6480 Monedas Delta' },
      { name: '12960 Monedas Delta' },
      { name: '19940 Monedas Delta' },
    ]
  },
  {
    title: 'PlayStation',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745871750/ICONO_GIFT_CARD_PLAY_bactzl.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    top: true,
    subProducts: [
      { name: 'Gift Card $10' },
      { name: 'Gift Card $25' },
      { name: 'Gift Card $50' },
      { name: 'Gift Card $74' },
      { name: 'Gift Card $100' },
      { name: 'Gift Card $250' },
    ]
  },
  {
    title: 'Fortnite',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558938/ICONO_GIFT_CARD_FORTNITE_evovi0.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $23' },
      { name: 'Gift Card $37' },
      { name: 'Gift Card $90' },
    ]
  },
  {
    title: 'Gift Card Roblox',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746560227/ICONO_GIFT_CARD_ROBLOX_2_kc3e9n.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $10' },
      { name: 'Gift Card $20' },
      { name: 'Gift Card $50' },
      { name: 'Gift Card $100' },
      { name: 'Gift Card $150' },
    ]
  },
  {
    title: 'Steam USA',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745871752/ICONO_GIFT_CARD_STEAM_hh5oun.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $10' },
      { name: 'Gift Card $20' },
      { name: 'Gift Card $50' },
      { name: 'Gift Card $100' },
      { name: 'Gift Card $100' },
    ]
  },
  {
    title: 'Apple USA',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558934/ICONO_GIFT_CARD_APPLE_qsj3ef.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $5' },
      { name: 'Gift Card $10' },
      { name: 'Gift Card $15' },
      { name: 'Gift Card $20' },
      { name: 'Gift Card $25' },
      { name: 'Gift Card $50' },
      { name: 'Gift Card $100' },
    ]
  },
  {
    title: 'Nintendo USA ',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558932/ICONO_GIFT_CARD_NINTENDO_r5f6cm.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $10' },
      { name: 'Gift Card $20' },
      { name: 'Gift Card $35' },
      { name: 'Gift Card $50' },
    ]
  },
  {
    title: 'Xbox USA ',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745871748/ICONO_GIFT_CARD_XBOX_lbvhpp.png',
    badgeText: 'Gift Cards',
    url: '/recargas/freefire',
    subProducts: [
      { name: 'Gift Card $5' },
      { name: 'Gift Card $10' },
      { name: 'Gift Card $15' },
      { name: 'Gift Card $20' },
      { name: 'Gift Card $25' },
      { name: 'Gift Card $50' },
      { name: 'Gift Card $100' },
    ]
  },
  {
    title: 'Arena Breakout',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558937/ICONO_ARENA_BREAKOUT_qviy5u.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '60 BONDS' },
      { name: '310 BONDS' },
      { name: '630 BONDS' },
      { name: '1580 BONDS' },
      { name: '3200 BONDS' },
      { name: '6500 BONDS' },
    ]
  },
  {
    title: 'League of Legends WR',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1745595237/ICONO_WILD_RIFT_duid0g.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    accessMethods: ['Facebook', 'Google', 'Riot'],
    subProducts: [
      { name: '425 Wild Cores' },
      { name: '1000 Wild Cores' },
      { name: '1850 Wild Cores' },
      { name: '3275 Wild Cores' },
      { name: '4800 Wild Cores' },
      { name: '10000 Wild Cores' },
    ]
  },
  {
    title: 'Stumble Guys',
    imageUrl: 'https://res.cloudinary.com/di0btw2pi/image/upload/v1746558944/ICONO_STUMBLE_GUYS_hkc7qc.png',
    badgeText: 'Recarga interna',
    url: '/recargas/freefire',
    subProducts: [
      { name: '90 Gemas' },
      { name: '250 Gemas' },
      { name: '800 Gemas' },
      { name: '1600 Gemas' },
      { name: '5000 Gemas' },
      { name: '13750 Gemas' },
      { name: '30000 Gemas' },
    ]
  },
];
