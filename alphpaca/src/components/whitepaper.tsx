import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
//import { TokenDapp } from '@/components/FaucetDapp'
import { AlephiumConnectButton } from '@alephium/web3-react'
import { TokenFaucetConfig } from '@/services/utils'

import Image from 'next/image'

import ALPHpacas from "../assets/ALPHpacas.jpg"
import Link from 'next/link'

/* Image Implementation

<div className={styles.whitepaperText} style={{marginLeft: 250}}>
    <Image src={ALPHpacas} alt='ALPHpaca'/>
</div>

<p className={styles.whitepaperText} style={{color: 'yellow', fontSize: 12, marginLeft: 190}}> This is not the final product. This is a teaser. </p>

*/

export default function WhitePaper() {
  
    return (
        <div className={`${styles.alignCenter} ${styles.textBox}`}>
            <div>
                <div className={styles.NFTheaderElement}>
                    <button className={styles.button}> <Link href='/' className={styles.noDeco} style={{color: 'white'}}>  ALPHpaca HUB </Link> </button>
                </div>
            </div>
            <style>
                @import url(&apos;https://fonts.googleapis.com/css2?family=Tektur&display=swap&apos;);
            </style>
            <h1 className={`${styles.whitepaperText} ${styles.whitepaperHeading}`}> Whitepaper: </h1>
            <div>
                <p className={styles.whitepaperText}> ALPHpaca&apos;s is so much more than just NFTs and tokens. 
                <br/> <br/> Here at ALPHpaca headquarters we believe in an experimental method of development. <br/> <br/> 
                We aim to be rapidly evolving our potential tools and if we decide to, &apos;Dapps&apos;. </p>
                <br/> <br/>
                <br/> <br/>
                <p className={styles.whitepaperText} style={{color: 'orangered'}}> <i style={{fontSize: 35, color: 'orange'}}> $PACA </i> is the native token for ALPHpacas and everything within our Ecosystem. Supply: 100 Million <br/> <br/>
                A quick breakdown of our Tokenomics and Trust  <br/> <br/>
                - 35% of $PACA will be given away, added as liquidity or burned. <i style={{color: 'orange'}}> All at the discretion of our community holders. </i> <br/> <br/>
                - 15% of $PACA will be thrown towards strictly adding liquidity. 10 million have already been added to <b> <Link href='https://www.ayin.app/swap' className={styles.whitepaperLink} style={{color: 'orange'}}> Ayin Dex </Link> </b> <br/> <br/> 
                - 50% or the rest of $PACA will be used as a staking reward for our NFT series <Link href='/nft' className={styles.whitepaperLink} style={{color: 'orange'}}> ALPHpaca&apos;s </Link> . <br/> <br/> 
                
                Our main wallet will be secured through a 3/6 <Link href='https://explorer.alephium.org/addresses/9wgsavEg4KTAd4bEreii3rEc7Dc5VY76yznzj9j8fyXPQJyEZkNfA8ESsBHnBeyzGBZsygr3Lvm3NrTTPWgJ3oLaHKWX6tYSzPXmKN6n25t7Zx5BYgLeuSTB9gMtrjPXjKeZT38NCnQ4Q3U5kw8fMSKNvCVfuK3qE1tepuMAdDxFprrWpr' className={styles.whitepaperLink} style={{color: 'orange'}}> multi-signature wallet </Link>. Our <Link href='https://explorer.alephium.org/addresses/181BB3YnQz2BchzV6ksfwxL95KMdYV28r6JKu1wc7cLaT' className={styles.whitepaperLink} style={{color: 'orange'}}> &apos;hot wallet&apos; </Link> (non multi-sig) at any one time will not have more than 50K $PACA for giveaways and testing. <br/> <br/> 
                
                All <i style={{color: 'orange'}}> liquidity tokens </i> are locked for 100 years; I will be long gone by then; as will my wallet. <br/> <br/> 
                
                <i style={{fontSize: 35, color: 'orange'}}> The Utility </i>: what can I do with $PACA? <br/> <br/> 
                Users who decide to hold $PACA should be under the impression and knowledge that $PACA is part alpaca, part meme, part ecosystem and part coin. <br/> <br/> 
                With that said users can use $PACA to buy ALPHpacas and mint early. $PACA holders can also see reduced fees when using tooling and or potential dapps.</p>
                <br/>
                <br/>
                <p className={styles.whitepaperText} style={{color: 'cyan'}}> <i style={{fontSize: 35, color: 'blue'}}> ALPHpaca&apos;s </i> are the NFT component of our ecosystem. </p>
                <br/>
                <p className={styles.whitepaperText} style={{color: 'cyan'}}> There is and will ever be <i style={{color: 'blue'}}> 1152 ALPHpaca&apos;s </i> on the Alephium chain. They can be bought for <i style={{color: 'blue'}}> 30k $PACA each for 24 hours &apos;early&apos; </i>. 
                Otherwise they can be bought with 30k $PACA after 24 hours or <i style={{color: 'blue'}}> &apos;60 Alephium&apos;. </i> <br/> <br/> About our Pricing? What will you do with 70,000 ALPH? Why so expensive? <br/> <br/> 
                - Due to the circulation of $PACA not everyone will be able to buy an ALPHpaca, with $PACA, in fact roughly 512 ALPHpacas will be able to be bought with $PACA. <br/> <br/> 
                - ALPH that is received from purchasing ALPHpacas will be divided 90 / 10. <br/> <br/> 90% Towards adding more $PACA liquidity on the dex. <br/> <br/> 10% Towards Development and Funding. <br/> <br/> 
                - If ALPHpacas were priced at 12 ALPH there is a much higher chance those who will have wanted one will not be able to snag one at mint. This also means $PACA and further liquidity can be established on Ayin Dex. <br/> <br/>
                - 30k PACA at the time of writing is worth ~60 ALPH. 
                </p>
            </div>
        </div>
    )
}