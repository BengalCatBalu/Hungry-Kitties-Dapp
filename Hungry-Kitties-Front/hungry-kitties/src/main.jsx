import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { EthosConnectProvider } from 'ethos-connect';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EthosConnectProvider
      dappName="Hungry Kitties KIFT Platform"
      connectMessage='Mew Mew! Welcome!' 
    >
      <App />
    </EthosConnectProvider>
  </React.StrictMode>,
)
