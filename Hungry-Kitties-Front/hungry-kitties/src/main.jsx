import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { EthosConnectProvider, Chain } from 'ethos-connect';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EthosConnectProvider
      dappName="Hungry Kitties KIFT Platform"
      connectMessage='Mew Mew! Welcome!' 
      ethosConfiguration={{
      chain: Chain.SUI_TESTNET,
        //network: "https://fullnode.testnet.sui.io/"
      }}
    >
      <App />
    </EthosConnectProvider>
  </React.StrictMode>,
)
