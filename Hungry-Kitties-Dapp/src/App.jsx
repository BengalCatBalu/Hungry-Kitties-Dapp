//import './App.css'
//import { SignInButton, ethos } from "ethos-connect";
//import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'
//import Account from "./Pages/Account/Account";
//import Collections from "./Pages/Collections/Collections";
import MainPage from "./Pages/MainPage/MainPage";
import Collections from './Pages/Collections/Collections';
import Account from './Pages/Account/Account';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/account' element={<Account/>} />
      </Routes>
    </>
  )
}

export default App