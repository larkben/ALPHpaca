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
import { Navbar } from '@/components/NavBar';

export default function HomePage() {

    useEffect(() => {
        
    }, []);

  return (
      <div>

        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        {/*<ThreeTorus config={TokenFaucetConfig}></ThreeTorus> causing too much server load on client side */}  
        <Navbar/>       
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
            ]}
            speed={30}
            repeat={Infinity}
          />
        </div>
        <br/>
      </div>
  )
}
