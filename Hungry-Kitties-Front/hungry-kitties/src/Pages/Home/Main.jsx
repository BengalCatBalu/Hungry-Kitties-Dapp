
import './main.css'
import icon from '../../img/icon1.svg'
import { App } from '../../components/Donut/Donut';
import { NavLink } from 'react-router-dom';


const Home = () => {
    return ( 
      <>
        <div  className="home">
            <div className="home__container">
                <div   className="home__title title__home">
                
                    <h1 className="title__header">KIFT PLATFORM</h1>
                    <h2 className="title__text">Transforming digital art into tangible impact with Hungry Kitties charitable NFTs.</h2>
                    <ul className="buttons__items">
                      <NavLink to = "https://4a89rkoz1ve.typeform.com/to/ubTZDERp?typeform-source=hungry-kitties.com" ><li className="buttons__item">Suggest your Shelter</li></NavLink>
                    </ul>
                </div>
                
                   

            </div>
            <div className="home__cards cards__home">
                <div className="cards__container">
                    <div className="card__title">Our Goals</div>
                    <div className="cards__items">
                        <div className="cards__item item__cards">
                            <div    className="item__body">
                                <img src={icon} alt="" className="item__icon" />
                                <div className="item__title">Charity</div>
                                <div className="item__text">By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity.</div>
                            </div>
                            <div className="item__body">
                                <img src={icon} alt="" className="item__icon" />
                                <div className="item__title">Charity</div>
                                <div className="item__text">By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity.</div>
                            </div>
                            <div className="item__body">
                                <img src={icon} alt="" className="item__icon" />
                                <div className="item__title">Charity</div>
                                <div className="item__text">By buying and selling NFT art, you can help those in need: a portion of the proceeds goes to charity.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__distribution distribution__home">
                <div className="distribution__container">
                <div className="distribution__title">Distribution</div>
                <div className="distribution__content">
                    <div className="distribution__text">It is important to note that the percentage for shelters and the team may vary up or down depending on the agreement with a particular shelter. But we will always give almost all of the funds to shelters. It is also important to add that we are an open source project, you can check the honesty of our contracts personally</div>
                    <div className="distribution__donut"><App></App></div>
                </div>
                </div>
            </div>
            
        </div>
        </>
     );
}
 
export default Home;