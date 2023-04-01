import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
//import './index.css'
import { EthosConnectProvider } from 'ethos-connect';
import { BrowserRouter } from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <EthosConnectProvider
        ethosConfiguration={{
          hideEmailSignIn: true, // defaults to false
          connectMessage: 'Your connect message goes here!',
          dappName: "Hungry Kitties"
        }}
      >
        <App />
      </EthosConnectProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

