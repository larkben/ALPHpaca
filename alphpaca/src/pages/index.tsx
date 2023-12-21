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

//const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
//const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);
import { GameWindow } from '@/components/GameWindow';
import { PinBallLottery, TokenFaucetConfig } from '@/services/utils';

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
        
    }, []);

  return (
      <div>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <GameWindow config={TokenFaucetConfig}></GameWindow>
        <div className={styles.walletconnect}>
          <AlephiumConnectButton></AlephiumConnectButton>
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
              <tr> <button className={styles.buttonSite} onClick={toggleContent}>Token Creator</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleMint}>Swaps</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleBuild}>Youtube</button> </tr>
              <tr> <button className={styles.buttonSite} onClick={toggleAbout}>Coming Soon!</button> </tr>
            </table>
          </div>
        </div>
        <br/>
      </div>
  )
}
