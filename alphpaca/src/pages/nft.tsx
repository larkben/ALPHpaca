import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

import Router from '../pages/router'

import { connect } from '@planetscale/database'
import { json } from 'stream/consumers'

import { useState, useEffect } from 'react';
import WhitePaper from './whitepaper'

require("dotenv").config()

const config = {
    host: process.env.host,
    username: process.env.username,
    password: process.env.password
}

const conn = connect(config)

async function getAlphPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/alephium?tickers=true&market_data=true');
    const data = await response.json();
    const alphPrice = data.market_data.current_price.usd;
  
    console.log(alphPrice);
}

async function fetchNFTListings() {

    const results = await conn.execute('SELECT * FROM hotels')

    console.log(results)
}

getAlphPrice();

export default function NFT() {

    const [alphPrice, setAlphPrice] = useState(null);

    let NFTlist=[]

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
            <div className={styles.mainOverview}>

                <div className={`${styles.showBorder} ${styles.statsBar}`}>
                    <p className={styles.stats} style={{paddingLeft: 15}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
                    <p className={styles.stats} style={{paddingLeft: 15}}> Total Volume: 0 </p>
                    <p className={styles.stats} style={{paddingLeft: 15}}> 24 Hour Volume: 0 </p>
                </div>

                <div className={styles.NFTheader}>
                    <h1 className={styles.NFTheaderElement}> ALPHpacas Marketplace </h1>
                    <div className={`${styles.NFTheaderElement} ${styles.searchBox}`}>
                        <form name="alphpaca">
                            <input type="text" className={styles.input} name="txt" placeholder="Search NFTS, or Wallets"/>
                        </form>
                    </div>
                    <div className={styles.NFTheaderElement}>
                        <button className={styles.button}> <a href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </a> </button>
                    </div>
                    <div className={styles.NFTheaderElement}>
                        <button className={styles.button}> Create NFT </button>
                    </div>
                    <AlephiumConnectButton></AlephiumConnectButton>
                </div>

            </div>

            <div className={styles.Mint}>
                <p className={styles.comingSoon}> Minting Soon! <br/> </p>
            </div>

            <div className={styles.NFTlisting}>
                <p className={styles.comingSoon}> NFT Markets coming to a blockchain near you... <br/> </p>
            </div>

        </div>
    )
}