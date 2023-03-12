import dotenv from 'dotenv';
dotenv.config();

export const appConfig = {
  enableTracing: !!process.env.ENABLE_TRACING,
  port: process.env.PORT || 3001,
  service: process.env.SERVICE || 'API',
};

export const constants = {
  BASE_TOKEN_ADDRESS_MAINNET: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  BASE_TOKEN_ADDRESS_RINKEBY:'0xc778417E063141139Fce010982780140Aa0cD5Ab',
  BASE_TOKEN_AMOUNT_MAINNET: '10000000000000000',
  BASE_TOKEN_AMOUNT_RINKEBY: '10000000000000000',
  BASE_TOKEN_DECIMALS_MAINNET:'18',
  BASE_TOKEN_DECIMALS_RINKEBY:'18',
  BASE_TOKEN_SYMBOL_MAINNET: 'WETH',
  BASE_TOKEN_SYMBOL_RINKEBY:'WETH',

  CENSORED_VERIFIERS: [
    '0x89d2d7803f8dc44ed24dccebe4222e35b0756a33',
    '0x47b16a209c757fa4a34bbfbbe48204906c4fde5d',
    '0x1bd48256f81254a245ffdd813efd22fefb542249',
    '0x53d468e719694f3e542dda96a237af08eb394f2c',
  ],
  ETHER_TOKEN: {
    decimals: 18,
    logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
    name: 'Ether',
    symbol: 'ETH',
  },
  ETH_INPUT: ['ETH','0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE','0x0000000000000000000000000000000000000000'],
  WETH_ADDRESS_MAINNET:'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  WETH_ADDRESS_RINKEBY:'0xc778417E063141139Fce010982780140Aa0cD5Ab',
};

export const openSea = {
  url: 'https://api.opensea.io',
};

export const reservoir = {
  url: 'https://api.reservoir.tools',
};

export const brink = {
  quoteApiUrl: 'http://quotes.brink.trade',
  url: 'https://app-api.brink.trade',
};

export const looksRare = {
  url: 'https://api.looksrare.org/api/v1',
};

export const x2y2 = {
  url: 'https://api.x2y2.org/v1',
};

export const supportedNFTNetworks= ['mainnet'];
export const supportedNetworks = ['mainnet', 'localhost', 'hardhat'];

export const cacheTime = {
  GAS_PRICE_CACHE_TIME: 15000,
  NFT_COLLECTION_FETCH_CACHE_TIME: 3600000,
  NFT_FLOOR_CACHE_TIME: 3600000,
  NFT_SEARCH_CACHE_TIME: 3600000,
  QUOTE_CACHE_TIME: 15000,
  TOKEN_DATA_CACHE_TIME: 3600000,
  TX_GAS_CACHE_TIME: 604800000,
};

export const marketplaceImages = {
  brink: 'https://brink-public.s3.us-east-2.amazonaws.com/brink.svg',
  larvalabs: 'https://www.gem.xyz/assets/larvalabs.svg',
  looksrare: 'https://www.gem.xyz/assets/looksrare.svg',
  nftx: 'https://www.gem.xyz/assets/nftx.svg',
  opensea: 'https://www.gem.xyz/assets/opensea.svg',
  seaport: 'https://www.gem.xyz/assets/opensea.svg',
  sudoswap: 'https://www.gem.xyz/assets/sudoswap.svg',
  x2y2: 'https://www.gem.xyz/assets/x2y2.svg',
};

export const gem = {
  origin: 'https://www.gem.xyz',
  publicUrl:  'https://gem-public-api-v2.herokuapp.com',
  referer: 'https://www.gem.xyz/',
  url: 'https://gem-api-v2-{segment}.herokuapp.com',
};

export const dbConfig = {
  logging: false,
  network: 'mainnet',
};