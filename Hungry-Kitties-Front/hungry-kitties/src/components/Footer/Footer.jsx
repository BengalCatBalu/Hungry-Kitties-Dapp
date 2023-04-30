import medium from '../../img/medium.svg'
import discord from '../../img/discord.svg'
import twitter from '../../img/twitter.svg'
import './footer.css'
import { NavLink } from 'react-router-dom';
import ScrollToTop from '../../utils/scrollToTop';
const Footer = () => {
    return (
        <>
           <footer className="footer">
                <div className="footer__container">
                    <div className="footer__upper upper__footer">
                        <div className="upper__social">
                            <ul className="upper__icons">
                                <li className="upper__icon"> <a href=""> <img src={medium} alt="" className="upper__image upper__image-medium" /></a></li>
                                <li className="upper__icon"><a href=""> <img src={discord} alt="" className="upper__image upper__image-discord" /></a></li>
                                <li className="upper__icon"><a href=""> <img src={twitter} alt="" className="upper__image  " /></a></li>
                            </ul>
                        </div>
                        <div className="upper__links links__upper">
                            <ul className="links__items">                  
                              <NavLink to='/'> <li className="links__item">Home</li></NavLink>
                                <li className="links__item"><a href="#">Main Site</a></li>
                                <li className="links__item"><a href="#">Parnerships</a></li>
                                <li className="links__item"><a href="#">GitHub</a></li>                              
                            </ul>
                        </div>
                        
                    </div>
                    <div className="footer__line"></div>
                <div className="footer__bottom bottom__footer">
                    <div className="bottom__text">© 2023 Hungry Kitties. All rights reserved.</div>
                    <div className="bottom__text">hungrykittties@gmail.com</div>
                </div>



                </div>
            
            
            
            
            
            </footer> 
        
        
        </>

    );
}
 
export default Footer;