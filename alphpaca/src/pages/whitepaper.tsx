import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton, useAccount } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'

import Image from 'next/image'

import ALPHpacas from "../assets/ALPHpacas.jpg"

/* Image Implementation

<div className={styles.whitepaperText} style={{marginLeft: 250}}>
    <Image src={ALPHpacas} alt='ALPHpaca'/>
</div>

<p className={styles.whitepaperText} style={{color: 'yellow', fontSize: 12, marginLeft: 190}}> This is not the final product. This is a teaser. </p>

*/

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
                <p className={styles.whitepaperText} style={{color: 'orangered'}}> <i style={{fontSize: 35, color: 'orange'}}> $PACA </i> is the native token for ALPHpacas and everything within our Ecosystem. Supply: 100 Million <br/> <br/>
                A quick breakdown of our Tokenomics and Trust  <br/> <br/>
                - 35% of $PACA will be given away, added as liquidity or burned. <i style={{color: 'orange'}}> All at the discretion of our community holders, for circulating purposes this can be considered circulating. </i> <br/> <br/>
                - 15% of $PACA will be thrown towards strictly adding liquidity. 10 million have already been added to <b> <a href='https://www.ayin.app/swap' className={styles.whitepaperLink} style={{color: 'orange'}}> Ayin Dex </a></b> <br/> <br/> 
                - 50% or the rest of $PACA will be used as a staking reward for our NFT series <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> ALPHpaca's </a> . <br/> <br/> 
                
                Our main wallet will be secured through a 3/6 <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> multi-signature wallet </a>. Our <a href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> 'hot wallet' </a> (non multi-sig) at any one time will not have more than 50K $PACA for giveaways and testing. <br/> <br/> 
                
                All <i style={{color: 'orange'}}> liquidity tokens </i> are locked for 100 years. <br/> <br/> 
                
                <i style={{fontSize: 35, color: 'orange'}}> The Utility </i>: what can I do with $PACA? <br/> <br/> 
                Users who decide to hold $PACA should be under the impression and knowledge that $PACA is part alpaca, part meme, part ecosystem and part coin. <br/> <br/> 
                With that said users can use $PACA to buy ALPHpacas and mint early. $PACA holders can also see reduced fees when using tooling and or potential dapps.</p>
                <br/>
                <br/>
                <p className={styles.whitepaperText} style={{color: 'cyan'}}> <i style={{fontSize: 35, color: 'blue'}}> ALPHpaca's </i> are the NFT component of our ecosystem. </p>
                <br/>
                <p className={styles.whitepaperText} style={{color: 'cyan'}}> There is and will ever be <i style={{color: 'blue'}}> 1152 ALPHpaca's </i> on the Alephium chain. They can be bought for <i style={{color: 'blue'}}> 30k $PACA each for 24 hours 'early' </i>. 
                Otherwise they can be bought with 30k $PACA after 24 hours or <i style={{color: 'blue'}}> '120 Alephium'. </i> <br/> <br/> About our Pricing? What will you do with 153,600 ALPH? Why so expensive? <br/> <br/> 
                - Due to the circulation of $PACA not everyone will be able to buy an ALPHpaca, with $PACA, in fact roughly 512 ALPHpacas will be able to be bought with $PACA. <br/> <br/> 
                - ALPH that is received from purchasing ALPHpacas will be divided 90 / 10. <br/> <br/> 90% Towards adding more $PACA liquidity on the dex. <br/> <br/> 10% Towards Development and Funding. <br/> <br/> 
                - ALPHpaca's are priced as such because we don't want one whale to scoop up the entire collection. ALPHpaca's should start distributed. Part of our model is to never devalue holders, this funding allows us to never be stretched for options but restricted enough to think carefully. <br/> <br/>
                - 30k PACA at the time of writing is worth 103 ALPH. 
                </p>
            </div>
        </div>
    )
}