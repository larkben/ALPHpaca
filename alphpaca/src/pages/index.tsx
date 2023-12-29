// Page index.tsx
import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Alephium Imports
import { AlephiumConnectButton } from '@alephium/web3-react'
import { AlephiumWalletProvider } from '@alephium/web3-react';
import { NodeProvider } from '@alephium/web3';

// Graphics
import { ThreeTorus } from '@/components/ThreeTorus';
import { TokenFaucetConfig } from '@/services/utils';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div>

        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <ThreeTorus config={TokenFaucetConfig}></ThreeTorus>
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
            repeat={Infinity}
          />
        </div>

        <div className={styles.uiHub}>
          <div className={`${styles.showBorder} ${styles.uiNav}`} style={{height: 300}}>
            <table className={styles.uiNavItems}>
              <tr> <button className={styles.buttonSite}> <Link href="/token_create" className={styles.link}> Token Creator </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/swaps" className={styles.link}> Swaps </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/" className={styles.link}> Minting </Link></button> </tr>
              <tr> <button className={styles.buttonSite}> <Link href="/alphpaca_farm" className={styles.link}> Coming Soon! </Link></button> </tr>
            </table>
          </div>
        </div>
        <br/>
      </div>
  )
}
