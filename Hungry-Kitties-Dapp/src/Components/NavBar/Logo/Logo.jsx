import React from 'react'
import Image from '../../../Styled-Components/Image'
import LogoImage from '../../../Images/logo.webp'
import { Link } from 'react-router-dom'
const Logo = () => {
  return (
      <Image src={LogoImage}
        width="15%">
      </Image>
  )
}

export default Logo