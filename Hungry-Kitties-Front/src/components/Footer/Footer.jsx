import medium from '../../img/medium.svg'
import discord from '../../img/discord.svg'
import twitter from '../../img/twitter.svg'
import './footer.css'
import { NavLink } from 'react-router-dom';
import { CONTRACT_ID } from '../../constants';
const Footer = () => {
    return (     
            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__upper upper__footer">
                        <div className="upper__social">
                            <ul className="upper__icons">
                                <li className="upper__icon"> <a target='_blank' href="https://medium.com/@HungryKitties"> <img src={medium} alt="" className="upper__image upper__image-medium" /></a></li>
                                <li className="upper__icon"><a target='_blank' href="https://discord.com/invite/byERdrCCRf"> <img src={discord} alt="" className="upper__image upper__image-discord" /></a></li>
                                <li className="upper__icon"><a target='_blank' href="https://twitter.com/hungrykitties"> <img src={twitter} alt="" className="upper__image  " /></a></li>
                            </ul>
                        </div>
                        <div className="upper__links links__upper">
                            <ul className="links__items">
                                <NavLink className="links__item" onClick={
                                    () => {
                                        if (window.location.pathname !== "/") {
                                            window.location.href = '/';
                                        } else {
                                            const topElement = document.querySelector('body');
                                            topElement.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}> <li>Home</li></NavLink>                            
                                <NavLink target="_blank" className="links__item" to="https://hungry-kitties.com/"> <li >Main Site</li></NavLink>
                                <NavLink target="_blank" className="links__item" to="https://4a89rkoz1ve.typeform.com/to/iBZZFgIR?typeform-source=hungry-kitties.com"> <li >Parnerships</li></NavLink>
                                <NavLink target="_blank" className="links__item" to={"https://explorer.sui.io/object/" + CONTRACT_ID + "?module=DonationCollection&network=mainnet"}> <li >Contract</li></NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footer__bottom bottom__footer">
                        <div className="bottom__text">© 2023 Hungry Kitties. All rights reserved.</div>
                        <a href='mailto:hungrykittties@gmail.com' className="bottom__text">hungrykittties@gmail.com</a>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;