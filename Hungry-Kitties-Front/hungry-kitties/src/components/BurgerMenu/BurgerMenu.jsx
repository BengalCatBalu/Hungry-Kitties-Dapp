import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './burgerMenu.css'
import Burger from '../../img/burger.svg'
import Cross from '../../img/cross.svg'
class BurgerMenu extends React.Component {
    
  showSettings(event) {

    event.preventDefault();
  }

  render() {
    return (
        
      <Menu customBurgerIcon={ <img src={Burger} /> } 
      customCrossIcon={ <img src={Cross} /> }>
        <a className="menu-item" href="/profile">
          Profile
        </a>
        <a className="menu-item" href="/explore">
          Explore
        </a>
        <a className="menu-item" href=''>Scan</a>
     
      </Menu>
    );
  }
}

export default BurgerMenu;