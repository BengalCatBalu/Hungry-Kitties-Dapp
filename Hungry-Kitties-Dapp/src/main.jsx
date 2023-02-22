import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { EthosConnectProvider } from 'ethos-connect';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EthosConnectProvider
      ethosConfiguration={{
        hideEmailSignIn: true, // defaults to false
        connectMessage:'Your connect message goes here!',
        dappName:"Hungry Kitties"
      }}
    >
      <App />
    </EthosConnectProvider>
  </React.StrictMode>,
)
