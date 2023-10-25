import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import '@alephium/web3'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

import WhitePaper from '@/pages/whitepaper'

export default function HomePage() {
  
    const [alphPrice, setAlphPrice] = useState(null);

    useEffect(() => {
        async function fetchAlphPrice() {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/alephium?tickers=true&market_data=true');
            const data = await response.json();
            const alphPrice = data.market_data.current_price.usd;

            setAlphPrice(alphPrice)
        }

        fetchAlphPrice();
    }, []);

  return (
      <div style={{margin: '0'}}>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
        <div className={styles.mainOverview} style={{marginBottom: '50px'}}>

                <div className={`${styles.showBorder} ${styles.statsBar}`}>
                    <p className={styles.stats} style={{paddingLeft: 15}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
                </div>

                <div className={styles.NFTheader}>
                    <h1 className={styles.NFTheaderElement}> ALPHpaca's </h1>
                </div>

        </div>
        <div style={{textAlign: 'center', marginTop: '50'}}>
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                "Building with a rarity.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Building with a purpose.",
                1000,
                'Building with a passion.',
                1000,
                'Building with a community.',
                1000,
                'Coming 12.25.23.',
                1000
            ]}
            speed={35}
            style={{ fontSize: '50px' }}
            className={`${styles.textNFT}`}
            repeat={Infinity}
        />
        </div>
      </div>
  )
}