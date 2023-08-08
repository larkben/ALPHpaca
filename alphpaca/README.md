This is a Alephium template project for the
[Next.js](https://nextjs.org/) framework, it is bootstrapped with the
following command:

```
npx @alephium/cli init $project-name --template next
```

This template project demonstrates how to implement a simple token
faucet and expose it with a Web UI using Next.js.

## Getting Started

### Install

```
npm install
```

### Start a local devnet for testing and development

```
npx @alephium/cli@latest devnet start
```

### Deploy the token faucet contract

```bash
# In this case devnet
npx @alephium/cli deploy -n devnet
```

This will compile and deploy the token faucet contracts to all of the
4 groups on devnet.

Before deployment, you might want to just compile and test the
contracts first:

```bash
# Compile
npx @alephium/cli compile

# Test
npx @alephium/cli test
```

### Run the development server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser
to see the token faucet application.

Download the [Alephium Extension Wallet](https://github.com/alephium/extension-wallet)
to interact with the application.

## Learn More

To learn more about smart contract development on Alephium, take a
look at the following resources:

- [Alephium Web3 SDK Guide](https://docs.alephium.org/dapps/alephium-web3/) - Learn about Alephium Web3 SDK
- [Ralph Language](https://docs.alephium.org/ralph/getting-started) - A guide to the Ralph programming language

You can check out the [Alephium GitHub
repositories](https://github.com/alephium) for more information - your
feedback and contributions are welcome!
