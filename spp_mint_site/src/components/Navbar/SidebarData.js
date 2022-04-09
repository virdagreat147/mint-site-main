import React from 'react'
import magicEden from './me1.png';
import twitter from './twitter1.png';
import opensea from './os1.png';

export const SidebarData = [
  {
    title: 'Stake',
    path: 'https://sppstake.com',
    icon: 'Stake',
    cName: 'nav-text'
  },
  {
    title: 'Auctions',
    path: 'https://shop.puppypound.io',
    icon: 'Auctions',
    cName: 'nav-text'
  },
  {
    title: 'Raffles',
    path: 'https://sppstake.com',
    icon: 'Raffles',
    cName: 'nav-text'
  },
  {
    title: 'Roadmap',
    path: 'https://sppstake.com',
    icon: 'Roadmap',
    cName: 'nav-text'
  },
  {
    title: '$TREATS',
    path: 'https://raydium.io/swap/?inputCurrency=sol&outputCurrency=14r8dWfzmUUBpw59w5swNRb5F1YWqmUnSPgD6djUs1Jj&outputAmount=0&fixed=in',
    icon: '$TREATS',
    cName: 'nav-text'
  },
  {
    title: 'Twitter',
    path: 'https://https://twitter.com/solpuppypound',
    icon: <img src={twitter} />,
    cName: 'nav-text'
  },
  {
    title: 'Magic Eden',
    path: 'https://magiceden.io/creators/solana_puppy_pound',
    icon: <img src={magicEden} />,
    cName: 'nav-text'
  },
  {
    title: 'Open Sea',
    path: 'https://opensea.io/collection/solana-puppy-pound',
    icon: <img src={opensea} />,
    cName: 'nav-text'
  }
]
