import React, { useState } from "react";
import styled from "styled-components";
import Underline from "../../../Styled-Components/Underline";

const Menu = styled.div`
  display: flex;
  align-items: "left";
`;

const MenuItem = styled.div`

  position: relative;
  justify-self: center;
  cursor: pointer;

  &:hover ul {
    display: block;
    margin-top: 1vh;
  }
`;

const MenuContent = styled.ul`
  display: none;
  list-style: none;
  margin: "0 0";
  padding: "1rem 0";
  position: absolute;


  background-color: #ffffff;
  z-index: 999;
  border-radius: 3vh;
`;

const MenuLink = styled.li`
  padding: 1.2vh 1.5vw;
  font-size: 2.5vh;
  color: black;
`;

const BurgerMenu = styled.div`
  display: none;
  cursor: pointer;

  @media () {
    display: block;
  }
`;

const BurgerIcon = styled.div`
  width: 5vh;
  height: 0.5vh;
  background-color: #000;
  margin: 1.5vh 0;
  transition: all 0.3s;

  &:hover {
    background-color: #161108;
  }


`;

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Menu>
        <MenuItem>
            <a href = "/">Home</a>
          <MenuContent className="menu-content">
                <MenuLink>
                    <Underline>
                        Link
                    </Underline>
                </MenuLink>
                <MenuLink>
                    <Underline>
                        Link
                    </Underline>
                </MenuLink>
                <MenuLink>
                    <Underline>
                        Link
                    </Underline>
                    
                </MenuLink>
            
            
          </MenuContent>
        </MenuItem>
        
        <BurgerMenu onClick={handleBurgerClick}>
          <BurgerIcon open={open} />
          <BurgerIcon open={open} />
          <BurgerIcon open={open} />
        </BurgerMenu>
      </Menu>
    </div>
  );
};

export default Home;