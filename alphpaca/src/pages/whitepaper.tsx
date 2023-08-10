import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

export default function WhitePaper() {
  
    return (
        <div className={`${styles.alignCenter} ${styles.textBox}`}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Tektur&display=swap');
            </style>
            <h1 className={`${styles.whitepaperText} ${styles.whitepaperHeading}`}> Whitepaper: </h1>
            <div>
                <p className={styles.whitepaperText}> ALPHpaca's is so much more than just NFTs and tokens. 
                <br/> <br/> Here at ALPHpaca headquarters we believe in an experimental method of development. <br/> <br/> 
                We aim to be rapidly evolving our potential tools and if we decide to, 'Dapps'. </p>
                <br/> <br/>
                <br/> <br/>
                <p className={styles.whitepaperText} style={{color: 'orangered'}}> <i style={{fontSize: 35, color: 'orange'}}> $PACA </i> is the native token for ALPHpacas and everything within our Ecosystem.  <br/> <br/>
                A quick breakdown of our Tokenomics and Trust  <br/> <br/>
                - 35% of $PACA will be given away, added as liquidity or burned. <i style={{color: 'orange'}}> All at the discretion of our community holders, for circulating purposes this can be considered circulating. </i> <br/> <br/>
                - 15% of $PACA will be thrown towards strictly adding liquidity. 10 million have already been added to <b> <a href='https://www.ayin.app/swap' className={styles.whitepaperLink} style={{color: 'orange'}}> Ayin Dex </a></b> <br/> <br/> 
                - 50% or the rest of $PACA will be used as a staking reward for our NFT series <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> ALPHpaca's </a> . <br/> <br/> 
                
                Our main wallet will be secured through a 3/6 <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> multi-signature wallet </a>. Our <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> 'hot wallet' </a> (non multi-sig) at any one time will not have more than 50K $PACA for giveaways and testing. <br/> <br/> 
                
                All <i style={{color: 'orange'}}> liquidity tokens </i> are locked for 100 years. </p>
            </div>
        </div>
    )
}