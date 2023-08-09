import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import styles from '@/styles/Home.module.css'

import Router from '../pages/router'

export default function NavBar() {
  return (
    <div className={`${styles.backgroundone} ${styles.body}`}>
        <div className={styles.linkcontainer}>
            <a className={`${styles.linkone} ${styles.a}`} href="/nft">ALPHpacas</a>
        </div>
        <div className={`${styles.backgroundtwo} ${styles.linkcontainer}`}>
            <a className={`${styles.linktwo} ${styles.a}`} href="/token">$PACA</a>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <a className={`${styles.linkthree} ${styles.a}`} href="/tools">Tools</a>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <a className={`${styles.linkfour} ${styles.a}`} href="/whitepaper">WhitePaper</a>
        </div>
    </div>
  )
}