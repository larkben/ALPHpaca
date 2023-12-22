// Page swaps.tsx
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

// Components
import { Navbar } from '@/components/NavBar';

//const API_KEY = "q4YJcksGa1ISzWPspxpSlKppgoHzodnpyWANx8nxtsUIFhtJ";
//const nodeProvider = new NodeProvider('http://98.227.84.182:12973', API_KEY);

export default function Swaps() {

  return (
      <div>
        <Navbar></Navbar>
      </div>
  )
}