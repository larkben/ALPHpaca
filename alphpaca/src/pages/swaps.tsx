import React from 'react'
import styles from '@/styles/Home.module.css'
//import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton } from '@alephium/web3-react'

import { useState, useEffect } from 'react';
import Link from 'next/link'
import { NodeProvider } from '@alephium/web3'

async function getAlphPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/alephium?tickers=true&market_data=true');
    const data = await response.json();
    const alphPrice = data.market_data.current_price.usd;
  
    console.log(alphPrice);
}

getAlphPrice();

export default function Swaps() {

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
    
      </div>
  )
}