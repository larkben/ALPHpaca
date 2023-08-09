import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import styles from '@/styles/Home.module.css'

export default function NavBar() {
  return (
    <div className={`${styles.backgroundone} ${styles.body}`}>
        <div className={styles.linkcontainer}>
            <a className={`${styles.linkone} ${styles.a}`} href="">ALPHpacas</a>
        </div>
        <div className={`${styles.backgroundtwo} ${styles.linkcontainer}`}>
            <a className={`${styles.linktwo} ${styles.a}`} href="">$PACA</a>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <a className={`${styles.linkthree} ${styles.a}`} href="">Tools</a>
        </div>
        <div className={`${styles.backgroundthree} ${styles.linkcontainer}`}>
            <a className={`${styles.linkfour} ${styles.a}`} href="">WhitePaper</a>
        </div>
    </div>
  )
}