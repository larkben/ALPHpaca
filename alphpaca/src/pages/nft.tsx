import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

import { connect } from '@planetscale/database'
import { json } from 'stream/consumers'

import { useState, useEffect } from 'react';

require("dotenv").config()

const config = {
    host: process.env.host,
    username: process.env.username,
    password: process.env.password
}

const conn = connect(config)
if (conn == null) {
    console.log("Not Hello World")
}
else {
    console.log("Hello World")
}

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
                @import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');
            </style>
            <div className={`${styles.showBorder} ${styles.statsBar}`}>
                <p className={styles.stats} style={{paddingLeft: 15}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
                <p className={styles.stats} style={{paddingLeft: 15}}> Total Volume: </p>
                <p className={styles.stats} style={{paddingLeft: 15}}> 24 Hour Volume: </p>
            </div>
            <div className={styles.alignCenter}>
                <h1 className={styles.NFTheader}> ALPHpacas </h1>
            </div>
        </div>
    )
}