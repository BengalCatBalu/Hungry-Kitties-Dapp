
import './style.css'
import icon from '../../img/icon1.svg'


const Home = () => {
    return ( 
      <>
        <div className="home">
            <div className="home__container">
                <div className="home__title title__home">
                    <h1 className="title__header">KIFT PLATFORM</h1>
                    <h2 className="title__text">Transforming digital art into tangible impact with Hungry Kitties charitable NFTs.</h2>
                </div>
                <div className="home__buttons buttons__home">
                    <ul className="buttons__items">
                        <li className="buttons__item">How it works</li>
                        <li className="buttons__item">Distribution</li>
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
        </div>
        </>
     );
}
 
export default Home;