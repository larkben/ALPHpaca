import React from 'react'
import { FC, useState } from 'react'
import styles from '../styles/Home.module.css'
import { withdraw } from '@/services/token.service'
import { TxStatus } from './TxStatus'
import { useAlephiumConnectContext } from '@alephium/web3-react'
import { node } from '@alephium/web3'
import { TokenFaucetConfig } from '@/services/utils'

