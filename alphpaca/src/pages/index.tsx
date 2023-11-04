import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

import '@alephium/web3'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import WhitePaper from '@/pages/whitepaper'
import pacaOne from "../assets/10.png"
import pacaTwo from "../assets/59.png"
import pacaThree from "../assets/72.png"
import pacaFour from "../assets/139.png"

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
      <div>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <div className={styles.mainOverview} style={{marginBottom: '50px'}}>
                <div className={`${styles.showBorder} ${styles.statsBar}`}>
                    <p className={styles.stats} style={{paddingLeft: 15, width: 250}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
                </div>

                <div className={styles.NFTheader}>
                    <h1 className={styles.NFTheaderElement}> ALPHpaca&apos;s </h1>
                </div>
                <div className={styles.NFTheader}>
                    <h5 className={styles.NFTheaderElement}> A cute cuddly project blessed upon by Alephium. </h5>
                </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '75', paddingBottom: 20}}>
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

        <div className={styles.NFTheader}>
          <h2 className={styles.NFTheaderElement}> Some of our dapps...  </h2>
        </div>

        <div className={styles.horizontalLinks}>
          <Link className={`${styles.horizontalLink} ${styles.showBorder} ${styles.textNFT}`} style={{padding: 25, color: "black", backgroundColor: "white", fontSize: 20, margin: 20}} href="/token_create"> Token Builder </Link>

          <Link className={`${styles.horizontalLink} ${styles.showBorder} ${styles.textNFT}`} style={{padding: 25, color: "black", backgroundColor: "white", fontSize: 20, margin: 20}} href="https://www.youtube.com/watch?v=Hl8-Jj_trT4&list=PL7hY7WrcPQBp0d-IEDIcvDYGqzwJjVv67"> Building on Alph? </Link>      
        </div>
      
        <div>
          <div className={styles.NFTheader}>
            <h2 className={styles.NFTheaderElement}> Meet the ALPHpacas! </h2>
          </div>
          <div className={styles.mainOverview} style={{marginBottom: '50px'}}>
                <div className={`${styles.showBorder} ${styles.statsBar}`}>
                  <div>
                    <Image className={styles.stats} src={pacaOne} alt="Wild ALPHpaca"/>
                      <div>
                        <h3 style={{textAlign: "center"}} className={styles.textNFT}> AstroAlpaca </h3>
                        <p className={styles.statsDescription}> These ALPHpaca&apos;s arrived from another blockchain to feed on the best hay they have found yet. </p>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
  )
}
