import { useState } from 'react'

import './css/style.css'
import Main from './Pages/Home/Main.jsx'
import Profile from './Pages/Profile/Profile';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';
import ScrollToTop from './utils/scrollToTop';


function App() {

  return (
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Main></Main>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
      </Router>

    </div>
  )
}

export default App;
