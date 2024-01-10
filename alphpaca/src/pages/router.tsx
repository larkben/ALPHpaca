// Router

// Imports
import { useRouter } from 'next/router'
import Home from './index'
import Swaps from './swaps'
import Token from './token_create'
import Whitepaper from '../components/whitepaper'
import Tools from './tools'
import NFT from './swaps'
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
    path: '/tools',
    component: Tools
  },
  {
    path: '/swaps',
    component: Swaps
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
    return <div>Page not found, ALPHpaca&apos;s pulled the plug.</div>
  }

  const { component: Component } = route

  return <Component />
}
