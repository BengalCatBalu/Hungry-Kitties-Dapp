import { useState } from 'react'

import './css/style.css'
import Main from './Pages/Home/Main.jsx'
import Profile from './Pages/Profile/Profile';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation/Navigation';
import ScrollToTop from './utils/scrollToTop';
import Explore from './Pages/Explore/Explore';
import ShelterPage from './Pages/ShelterPage/ShelterPage';
import Footer from './components/Footer/Footer.jsx';



function App() {

  return (
    
    <div className="App">
      <Router>
        <ScrollToTop></ScrollToTop>
        
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Main className='main'></Main>}></Route>
        <Route path='/profile' element={<Profile className='main'></Profile>}></Route>
        <Route path='/explore' element={<Explore className='main'></Explore>}></Route>
        <Route path='/shelter' element={<ShelterPage className='main'></ShelterPage>}></Route>
      </Routes>
      <Footer></Footer>
      </Router>

    </div>
  )
}

export default App;
