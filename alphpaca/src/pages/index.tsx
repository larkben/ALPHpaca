import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import '@alephium/web3'

import NavBar from '@/components/NavBar'

//todo Navigation Bar
//todo CSS and Formatting

export default function Home() {
  //const { account } = useAccount()

  return (
      <div className={styles.pagecolor}>
        <style>
          @import url(&quot;https://fonts.googleapis.com/css2?family=Tektur&display=swap&quot;);
        </style>
        <div>
          <NavBar></NavBar>
        </div>
      </div>
  )
}
