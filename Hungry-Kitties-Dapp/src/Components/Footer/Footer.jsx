import React from 'react';
import styled from 'styled-components';
import { BUTTON_TEXT, COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE } from '../../Constants';
import Link from '../../Styled-Components/Link';
import Banner from './Banner';
import Text from '../../Styled-Components/Text';

const Section = styled.div`
    min-height: 70vh;
    min-width: 95vw;
    background-color: ${COLOR_BLACK} ;
    margin-top: 10vh;
    position: relative;
    display: flex;
    //justify-content: center;
    //align-items: center;
    flex-direction: column;
`

const Container = styled.div`
    width:85vw;
    height: 25vh;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${COLOR_WHITE};
    @media (max-width: 64em) {
        flex-direction: column;
        gap:5vw;
    }
`

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const IconsList = styled.div`
    display: flex;
    align-items: center;
    gap: 2vw;
    margin: 1rem auto;
    @media (max-width: 64em) {
        gap:5vw;
        justify-content: center;
        align-items: center;
    }
`

const MenuItems = styled.ul`
    list-style: none;
    width: 50%;
    margin-bottom: 1vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    @media (max-width: 64em) {
        justify-content: center;
        grid-column-gap: 30vw;
        margin-bottom: 5vh;
    }
`

const Item = styled.li`
    width: fit-content;
    cursor: pointer;
    font-size: 1vw;
    color: ${COLOR_WHITE}
    &::after{
        content:' ';
        display: block;
        width:0%;
        height:2px;
        background: ${props => props.theme.text};
        transition:width 0.3s ease;
    }
    
    &:hover::after{
        width:100%;
    }
    @media (max-width: 64em) {
        font-size: 2vw;
    }
`
const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: auto;
    }
`
const Bottom = styled.div`
    width: 90%;
    margin: 1vh auto;
    margin-bottom: 5vh;
    display: flex;
    justify-content: space-between;
    font-size: 1vw;
    align-items: center;
    color: ${COLOR_WHITE};
`
const Btn = styled.button`
    display: flex;
    background-color: ${props => props.theme.black};
    color: ${props => props => props.theme.white};
    outline: none;
    border: none;
    white-space: nowrap;
    font-size: ${props => props.theme.fontlg};
    justify-content: center;
    align-items: center;
    padding: 0.9rem 2.5rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(0.9);
    }
    @media (max-width: 64em) {
        max-width: 5vw;
        font-size: 2vw;
        :hover{
            transform: none;
        }
    }
`


function Footer() {
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <IconsList>
            <Link href="https://twitter.com/hungrykitties?s=21&t=odV5PsLZW6-35sR9Tsb9Gg">
              <Btn>
                <Text font_weight = "1200" fsize={BUTTON_TEXT}>Twitter</Text>
              </Btn>
            </Link>
            <Link href="https://discord.gg/byERdrCCRf">
              <Btn>
                <Text font_weight = "1200" fsize={BUTTON_TEXT}>Discord</Text>
              </Btn>
            </Link>
            <Link href="https://medium.com/@HungryKitties">
              <Btn>
                <Text font_weight = "1200" fsize={BUTTON_TEXT}>Medium</Text>
              </Btn>
            </Link>
          </IconsList>
        </Left>
        <MenuItems>
          <Item>
            <Link href="/">
              Home
            </Link>
          </Item>
          <Item > <Link href="https://hungry-kitties-team.gitbook.io/whitepaper/">Whitepaper</Link></Item>
          <Item >
            <Link href="/tools">
              Tools
            </Link>
          </Item>
          <Item> <Link href='/roadmap'>Roadmap</Link></Item>
          <Item> <Link href="https://4a89rkoz1ve.typeform.com/to/iBZZFgIR">Partnerships</Link></Item>
          <Item><Link href="https://github.com/BengalCatBalu/Tools-Components">Github</Link></Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; 2023 Hungry Kitties. All rights reserved.
        </span>
        <span>
          hungrykittties@gmail.com
        </span>
      </Bottom>
    </Section>
  );
}

export default Footer;