import './navigation.css'
import React, { useState } from 'react';
import icon from '../../img/icon.png'
import { NavLink } from 'react-router-dom';
import { ethos, EthosConnectStatus, SignInButton  } from 'ethos-connect'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


const Navigation = () => {
    const { wallet } = ethos.useWallet()
    const { status } = ethos.useWallet()
    return (
        <div className="header">
            <ToastContainer />
            <div className="header__container">
                <div className="header__block">
                    <div className="header__icon icon__header">
                        <NavLink to="/"><img src={icon} alt="" className="icon__img" /></NavLink>
                        <NavLink to="/"><div className="icon__title">Hungry Kitties</div></NavLink>
                        </div>

                    <nav className="header__navigation navigation__header">
                        <ul className="navigation__items">
                            <li className="navigation__item" onClick={
                                () => {
                                    if (!wallet) {
                                        toast.warning('Please, connect your wallet', {
                                            duration: 1500,
                                            closeOnClick: false,
                                            closeButton: true,
                                            position: 'bottom-center',
                                          });
                                    } else {
                                        window.location.href = "/profile";
                                    }
                                }
                            } >Profile</li>
                            <NavLink to='/explore'><li className="navigation__item">Explore</li></NavLink> 
                        </ul>
                        
                    </nav>

                </div>
                <div className="header__block-right right-block__header">
                    <div className="right-block__navigation"></div>
                    <ul className="right-block__navigation-items">
                        {!wallet ? (
                            <li className="right-block__navigation-item" onClick={ethos.showSignInModal}>Connect Wallet</li>
                        ) : (
                            <li className="right-block__navigation-item" onClick={wallet.disconnect}>Disconnect</li>
                        )
                        }
                        <li className="right-block__navigation-item right-block__navigation-item-scan"
                            onClick={() => {
                                if (!wallet) {
                                    toast.warning('Please, connect your wallet', {
                                        duration: 1500,
                                        closeOnClick: false,
                                        closeButton: true,
                                        position: 'bottom-center',
                                      });
                                } else {
                                    window.location.href = "https://explorer.sui.io/address/" + wallet.address;
                                }
                            }
                        }
                        
                        ></li>
                        <BurgerMenu></BurgerMenu>
                    </ul>
                </div>
            </div>
        </div>


    );
}

export default Navigation;
