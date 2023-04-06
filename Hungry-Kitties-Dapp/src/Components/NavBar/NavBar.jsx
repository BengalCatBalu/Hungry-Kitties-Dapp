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
      max_height="15vh"
      bgcolor={COLOR_BLACK}
      txtcolor={COLOR_ORANGE}
      size_text="1.5vw"
      weight_text="bold"
    >
      <Container
        gap="15vw"
        margin = "0"
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