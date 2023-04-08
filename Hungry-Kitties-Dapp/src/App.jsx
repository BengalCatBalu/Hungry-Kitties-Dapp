import './App.css'
//import { SignInButton, ethos } from "ethos-connect";
//import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
//import Account from "./Pages/Account/Account";
//import Collections from "./Pages/Collections/Collections";
import MainPage from "./Pages/MainPage/MainPage";
import Collections from './Pages/Collections/Collections';
import Account from './Pages/Account/Account';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import GlobalStyles from './GlobalStyles';
import CollectionPage from './Pages/Collections/CollectionOnePage/OneCollectionPage';
import './reloader.jsx';
import Preloader from './Icons/Preloader';
import Navigation from './Components/NavBar/Navigation';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="preloader">
        <Preloader />
        <script src="./reloader.js"></script>
      </div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:id' element={<CollectionPage />} />
        <Route path='/collections/:id/nfts' element={<CollectionPage />} />
        <Route path='/collections/:id/nfts/:nftId' element={<CollectionPage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App