import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';

import '@alephium/web3'
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlephiumConnectButton } from '@alephium/web3-react'

import { AlephiumWalletProvider } from '@alephium/web3-react';
import { NodeProvider } from '@alephium/web3';

const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);

export default function HomePage() {
  
    const [alphPrice, setAlphPrice] = useState(null);
    const [blockHeight, setBlockHeight] = useState<number>();
    const [showContent, setShowContent] = useState(true);
    const [showMint, setShowMint] = useState(false);
    const [showBuild, setShowBuild] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const toggleContent = () => {
      setShowContent(!showContent);
      setShowMint(false);
      setShowBuild(false);
      setShowAbout(false);
    };

    const toggleMint = () => {
      setShowMint(!showMint);
      setShowContent(false);
      setShowBuild(false);
      setShowAbout(false);
    };

    const toggleBuild = () => {
      setShowMint(false);
      setShowContent(false);
      setShowBuild(!showBuild);
      setShowAbout(false);
    };

    const toggleAbout = () => {
      setShowMint(false);
      setShowContent(false);
      setShowBuild(false);
      setShowAbout(!showAbout);
    };

    useEffect(() => {
        async function fetchAlphPrice() {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/alephium?tickers=true&market_data=true');
            const data = await response.json();
            const alphPrice = data.market_data.current_price.usd;

            setAlphPrice(alphPrice)
        }

        async function fetchBlockHeight() {
          let blockHeight = await nodeProvider.blockflow.getBlockflowChainInfo({
            fromGroup: 0,
            toGroup: 0
          })

          setBlockHeight(blockHeight.currentHeight)
        }

        fetchAlphPrice();
        fetchBlockHeight();
    }, []);

  return (
      <div>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <div className={`${styles.showBorder} ${styles.statsBar}`}>
          <p className={styles.statsPrice} style={{paddingLeft: 15, width: 250}}> Alephium Price: <i style={{color: 'pink'}}> {alphPrice} </i> </p>
          <p className={styles.statsPrice} style={{paddingLeft: 15, width: 250}}> Block Height: <i style={{color: 'pink'}}> {blockHeight} </i> </p>
          <div className={styles.statsConnect}>
            <AlephiumConnectButton></AlephiumConnectButton>
          </div>
        </div>
        <br/>
        <div className={styles.NFTheader}>
        <h1 className={styles.alphpacaTitleGlow}> ALPHpaca&apos;s </h1>
        <h5 className={styles.pacaDescript}> A cute cuddly project blessed upon by Alephium. </h5>
        </div>

        <div className={styles.movingText}>
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
            speed={30}
            style={{ fontSize: '50px' }}
            repeat={Infinity}
          />
        </div>

        <div className={styles.uiHub}>
          <div className={`${styles.showBorder} ${styles.uiNav}`} style={{height: 300}}>
            <table className={styles.uiNavItems}>
              <tr> <button className={styles.buttonSite} onClick={toggleContent}>Dapps</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleMint}>Coming Soon: Mint</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleBuild}>Building on ALPH?</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleAbout}>About</button> </tr>
            </table>
          </div>
          <div className={`${styles.showBorder} ${styles.uiContent}`} style={{height: 300}}>
            <div>
              {showContent && (
                <div>
                  <div className={styles.horizontalLinks}>
                    <div className={styles.dappcard}>
                    <h3 style={{color: 'white', paddingBottom: 20, textAlign: 'center'}}> Token Builder </h3>
                      <div className={styles.dapp}>
                        <Link className={`${styles.horizontalLink} ${styles.showBorder} ${styles.textNFT}`} style={{padding: 25, color: "black", backgroundColor: "white", fontSize: 20, margin: 20}} href="/token_create"> Token Builder </Link>
                      </div>
                    </div>
                    <div className={styles.dappcard}>
                    <h3 style={{color: 'white', paddingBottom: 20, textAlign: 'center'}}> A Youtube Series </h3>
                      <div className={styles.dapp}>
                        <Link className={`${styles.horizontalLink} ${styles.showBorder} ${styles.textNFT}`} style={{padding: 25, color: "black", backgroundColor: "white", fontSize: 20, margin: 20}} href="https://www.youtube.com/watch?v=Hl8-Jj_trT4&list=PL7hY7WrcPQBp0d-IEDIcvDYGqzwJjVv67"> Building on Alph? </Link>
                      </div>  
                    </div>
                    <div className={styles.dappcard}>
                      <h3 style={{color: 'white', paddingBottom: 20, textAlign: 'center'}}> Viral and Number Go Up</h3>
                      <div className={styles.dapp}>
                        <Link className={`${styles.horizontalLink} ${styles.showBorder} ${styles.textNFT}`} style={{padding: 25, color: "black", backgroundColor: "white", fontSize: 20, margin: 20}} href=""> Token ICO's </Link>
                      </div>  
                    </div>
                  </div>
                </div>
              )}
              {showMint && (
                <div>
                </div>
              )}
              {showBuild && (
                <div>
                </div>
              )}
              {showAbout && (
                <div>
                </div>
              )}
            </div>
          </div>
        </div>

        <br/>
      </div>
  )
}
