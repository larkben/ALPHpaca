## ALPHpaca's Homepage

By downloading and or forking this site for your own personal use you run the risk of not fully understanding the code; possibly even resulting in extreme cases of a loss of funds.

### Install

```
npm install
```

### Install and Run Docker

```
make start-devnet
```

### Deploy the token faucet contract

```bash
# deploys to devnet check package.json for extra commands extending to other networks
npx @alephium/cli deploy -n devnet 
```

## Compilation and Testing

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
to see the ALPHpaca website.
