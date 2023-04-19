import './style.css'
import icon from '../../img/icon.png'
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className="header">
             <div className="header__container">
                <div className="header__block">
                    <NavLink to="/">
                    <div className="header__icon icon__header">
                        <img src={icon} alt="" className="icon__img" />  
                        <div className="icon__title">Hungry Kitties</div>
                    </div>   
                    </NavLink>
                    
                    <nav className="header__navigation navigation__header">
                        <ul className="navigation__items">
                            <NavLink  to='/profile'><li className="navigation__item">Profile</li></NavLink>
                            <li className="navigation__item">Explore</li>
                            <li className="navigation__item">Our Media</li>
                        </ul>
                    </nav>
            
                </div>
                <div className="header__block-right right-block__header">
                    <div className="right-block__navigation"></div>
                        <ul className="right-block__navigation-items">
                            <li className="right-block__navigation-item">Connect Wallet</li>
                            <li className="right-block__navigation-item navigation__item-scan "></li>
                        </ul>
                </div>
             </div>
        </div>


      );
}
 
export default Navigation;
