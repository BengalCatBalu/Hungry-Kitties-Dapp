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


function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/collections/:id' element={<CollectionPage />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App