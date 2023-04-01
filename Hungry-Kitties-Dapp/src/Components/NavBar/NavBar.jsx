import React from 'react'
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE } from '../../Constants'
import Container from '../../Styled-Components/Container'
import Section from '../../Styled-Components/Section'
import Collection from './Collection/Collection'
import Home from './Home/Home'
import Logo from './Logo/Logo'
import Profile from './Profile/Profile'



const NavBar = () => {
  return (
    <Section min_height = "10vh"
    bgcolor ={COLOR_BLACK}
    txtcolor = {COLOR_ORANGE}
    size_text = "2vw"
    weight_text = "bold">
      <Container bgcolor = {COLOR_BLACK}
      gap = "10vw"
>
        <Logo />
        <Home />
        <Collection />
        <Profile />
        <div>Connect Button</div>
        
      </Container>
      
    </Section>
    
  )
}

export default NavBar