import NFT from '../../img/nft.webp'

const Nft = () => {
    return ( 
        <div className="nft__body">
        <img src={NFT} alt="" className="nft__image" />
        <div className="nft__foter">
        <div className="nft__title">Hungry Kitties #5555</div>
        <div className="nft__scan">Scan</div>
        <div className="nft__sell">Sell on BlueMove</div>
        </div>
    </div>
     );
}
 
export default Nft;