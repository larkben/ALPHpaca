import { useRouter } from 'next/router'
import Home from './index'
import Swaps from './swaps'
import Token from './token'
import Whitepaper from '../components/whitepaper'
import Tools from './tools'
import NFT from './swaps'
import Faucet from './faucet'
import TokenAuto from './token_create'

import React from 'react'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/whitepaper',
    component: Whitepaper
  },
  {
    path: '/token',
    component: Token
  },
  {
    path: '/tools',
    component: Tools
  },
  {
    path: '/swaps',
    component: Swaps
  },
  {
    path: '/faucet',
    component: Faucet
  },
  {
    path: '/token_create',
    component: TokenAuto
  }
]

export default function Router() {
  const router = useRouter()
  const { pathname } = router

  const route = routes.find(route => route.path === pathname)

  if (!route) {
    return <div>Page not found, sorry better luck next refresh.</div>
  }

  const { component: Component } = route

  return <Component />
}
