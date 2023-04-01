import React, { useState } from "react";
import styled from "styled-components";
import Underline from "../../../Styled-Components/Underline";

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`

  position: relative;
  cursor: pointer;

  &:hover ul {
    display: block;
  }
`;

const MenuContent = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;


  background-color: #ffffff;
  z-index: 999;
  border-radius: 3vh;
`;

const MenuLink = styled.li`
  padding: 2vh 1.5vw;
  font-size: 4vh;
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


const Collection = () => {
  const [open, setOpen] = useState(false);

  const handleBurgerClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Menu>
        <MenuItem>
          Collection
          <MenuContent className="menu-content">
            <MenuLink>
                <Underline>
                   Link 1 
                </Underline>
            </MenuLink>
            <MenuLink>
                <Underline>
                   Link 2 
                </Underline>
            </MenuLink>
            <MenuLink>
                <Underline>
                   Link 3 
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

export default Collection;