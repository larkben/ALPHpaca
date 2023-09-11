import React from 'react'
import styles from '@/styles/Home.module.css'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { useState, useEffect } from 'react';

async function getAlphPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/alephium?tickers=true&market_data=true');
    const data = await response.json();
    const alphPrice = data.market_data.current_price.usd;
  
    console.log(alphPrice);
}

getAlphPrice();

export default function NFT() {

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
                @import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);
            </style>
            <div className={styles.mainOverview}>

                <div className={`${styles.showBorder} ${styles.statsBar}`}>
                    <p className={styles.stats} style={{paddingLeft: 15}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
                    <p className={styles.stats} style={{paddingLeft: 15}}> Total Volume: 0 </p>
                    <p className={styles.stats} style={{paddingLeft: 15}}> 24 Hour Volume: 0 </p>
                </div>

                <div className={styles.NFTheader}>
                    <h1 className={styles.NFTheaderElement}> ALPHpacas Swap Market </h1>
                    <AlephiumConnectButton></AlephiumConnectButton>
                </div>

            </div>
        </div>
    )
}