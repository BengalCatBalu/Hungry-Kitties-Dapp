import './style.css'
import React, { useState } from 'react';
import icon from '../../img/icon.png'
import { NavLink } from 'react-router-dom';

import { ethos, EthosConnectStatus, SignInButton  } from 'ethos-connect'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { slide as Menu } from 'react-burger-menu'

const Navigation = () => {
    const { wallet } = ethos.useWallet()
    const { status } = ethos.useWallet()

const Navigation = () => {
    
    return (
        <div className="header">
            <ToastContainer />
            <div className="header__container">
                <div className="header__block">
                    <NavLink className="header__icon icon__header" to="/">
                        <img src={icon} alt="" className="icon__img" />
                        <div className="icon__title">Hungry Kitties</div>
                    </NavLink>


                    <Menu>
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                    </Menu>
                    

                    <nav className="header__navigation navigation__header">
                        <ul className="navigation__items">
                            <NavLink to='/profile'><li className="navigation__item">Profile</li></NavLink>
                            <li className="navigation__item">Explore</li>
                            <li className="navigation__item">Our Media</li>
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
                        <li className="right-block__navigation-item navigation__item-scan "
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
                    </ul>
                </div>
            </div>
        </div>


    );
    }
}

export default Navigation;
