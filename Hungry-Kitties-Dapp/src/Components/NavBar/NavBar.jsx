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
    <Section
      max_height="12vh"
      txtcolor={COLOR_WHITE}
      bgcolor = {COLOR_BLACK}
      size_text="1.5vw"
      weight_text="bold"
      width = "90%"
      margin_left = "5%"
      margin_top = "3vh"
      borderRadius = "50px"
    >
      <Container
        gap="12vw"
        margin = "0"
        bgcolor={COLOR_ORANGE}
        borderRadius = "50px"
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