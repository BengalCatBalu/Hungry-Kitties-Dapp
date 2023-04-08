import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import { Menu, MenuItem, ControlledMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
//import './../Styles/suiet-wallet-kit-custom.css'

import logo from '../../Images/logo.webp';
import { COLOR_BLACK, COLOR_ORANGE, COLOR_WHITE } from '../../Constants';
import Logo from './Logo/Logo';
import Text from '../../Styled-Components/Text';


const Section = styled.section`
    width:90vw;
    margin-left:5vw;
    margin-top: 2vh;
    max-height: 10vh;
    background-color: ${COLOR_ORANGE};
    overflow: visible;
    justify-self: center;
    border-radius: 40px;
    align-items: center;
    justify-content: center;
`

const NavBar = styled.nav`
    display:flex;
    //justify-content: flex-start;
    align-items: center;
    width:85%;
    margin: 0 auto;
    img{
        width: 4rem;
        height: auto;
        margin-left: -4.5vw;
        transition: all 0.5s ease;
    }
    img:hover{
        transform: scale(1.1);
    }
`;

const Menu1 = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    list-style: none;
    //margin-right: -15.5vw;
`

const MenuItem1 = styled.li`
    margin:0 1rem;
    color:${COLOR_BLACK};
    cursor:pointer;
    margin-top: 0vh;
    font-size: "2vh";
    &::after{
        content:' ';
        display: block;
        width:0%;
        height:2px;
        background: ${COLOR_BLACK};
        transition:width 0.3s ease;
    }
    
    &:hover::after{
        width:100%;
    }
`
const BigMenuItem1 = styled.li`
    margin:0 auto;

    color:${COLOR_BLACK};
    cursor:pointer;
    margin-top: 0vh;
    margin-left: 3vw;
    font-size: "2vh";
`

const Btn = styled.button`
    display: inline-block;
    background-color: #272727;
    color: ${COLOR_WHITE};
    outline: none;
    border: none;
    white-space: nowrap;
    //font-size: "2vh";
    justify-items: center;
    align-items: center;
    padding: 0.8rem 2.4rem;
    border-radius: 50px;
    cursor:pointer;
    position: relative;

    transition: all 0.2s ease;


    &:hover{
        transform: scale(0.9);
    }

    @media (max-width: 64em) {
        /*1024px*/
        font-size: 4vw;
        background-color: ${COLOR_ORANGE};
    }
    
`

const BtnContainer = styled.div`
    display: flex;

    @media (max-width: 64em) {
        /*1024px*/
        display: none;
    }
`

const Navigation = () => {

    const [click, setClick] = useState(false);

    const ref = useRef(null);
    const [isOpen, setOpen] = useState();
    const [display, setDisplay] = useState('arrow');
    const ref1 = useRef(null);
    const [isOpen1, setOpen1] = useState();
    const [display1, setDisplay1] = useState('arrow');

    return (
        <>
            <Section>
                <NavBar>
                    <Logo />
                    <Text fsize="4vh" color={COLOR_WHITE} font_weight="1100">
                        Mew!
                    </Text>
                    <Menu1 click={click}>
                        <BigMenuItem1>
                            <a href='/' ref={ref} className="btn" onPointerEnter={() => {
                                setOpen(true)
                            }
                            }> <Btn>
                                    <Text fsize="2vh" color={COLOR_WHITE} font_weight="1100">
                                        Home
                                    </Text>
                                </Btn> </a>
                            <ControlledMenu
                                state={isOpen ? 'open' : 'closed'}
                                anchorRef={ref}
                                arrow={true}
                                onPointerLeave={() => setOpen(false)}
                                onClose={() => setOpen(false)}
                                offsetY={display === 'arrow'
                                    ? 15 : 0}
                            >
                                <MenuItem1 >Partners</MenuItem1>
                                <MenuItem1 >FAQ</MenuItem1>
                            </ControlledMenu>
                        </BigMenuItem1>
                        <BigMenuItem1><a href='https://hungry-kitties-team.gitbook.io/whitepaper/'><Btn>
                            <Text fsize="2vh" color={COLOR_WHITE} font_weight="1100">
                                Profile
                            </Text>
                        </Btn></a></BigMenuItem1>
                        <BigMenuItem1><a href='/tools' ref={ref1} className="btn" onPointerEnter={() => {
                            setOpen1(true)
                        }}> <Btn>
                                <Text fsize="2vh" color={COLOR_WHITE} font_weight="1100">
                                    Explore
                                </Text>
                            </Btn> </a>
                            <ControlledMenu
                                state={isOpen1 ? 'open' : 'closed'}
                                anchorRef={ref1}
                                arrow={true}
                                onPointerLeave={() => setOpen1(false)}
                                onClose={() => setOpen1(false)}
                                offsetY={display1 === 'arrow'
                                    ? 15 : 0}
                            >
                                <MenuItem1 > Generate NFT</MenuItem1>
                                <MenuItem1 > Check our Github</MenuItem1>
                            </ControlledMenu></BigMenuItem1>
                        <BigMenuItem1>
                            <Btn>
                                <Text fsize="2vh" color={COLOR_WHITE} font_weight="1100" white_space = "nowrap">
                                    Our Media
                                </Text>
                            </Btn>
                        </BigMenuItem1>
                        <BigMenuItem1>
                            <Btn>
                                <Text fsize="2vh" color={COLOR_WHITE} font_weight="1100" white_space = "nowrap">
                                    Connect Wallet
                                </Text>
                            </Btn>
                        </BigMenuItem1>
                    </Menu1>
                </NavBar>
            </Section>
        </>
    );
};

export default Navigation;