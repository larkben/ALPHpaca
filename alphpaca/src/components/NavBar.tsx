import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import Router from '../pages/router'

export default function NavBar() {
  return (
    <div className={`${styles.backgroundone} ${styles.body}`}>
        <div className={styles.linkcontainer}>
            <Link className={`${styles.linkone} ${styles.a}`} href="/nft">ALPHpacas</Link>
        </div>
        <div className={`${styles.backgroundtwo} ${styles.linkcontainer}`}>
            <Link className={`${styles.linktwo} ${styles.a}`} href="/token">$PACA</Link>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <Link className={`${styles.linkthree} ${styles.a}`} href="/tools">Tools</Link>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <Link className={`${styles.linkfour} ${styles.a}`} href="/whitepaper">WhitePaper</Link>
        </div>
    </div>
  )
}