import { useRouter } from 'next/router'
import Home from './index'
import Nft from './nft'
import Token from './token'
import Whitepaper from './whitepaper'
import Tools from './tools'
import NFT from './nft'

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
    path: '/nft',
    component: NFT
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