const Nft = ({imageUrl, name, id}) => {
    if (!name) {
        name = "Some NFT"
    }

    if (!imageUrl) {
        imageUrl = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmP3BvWG8B2nuJDjmvYkraZmVk5kkSr5zBUhk3ps3KNEer/balu.webp"
    }
    return (
        <div className="nft__body">
            <img src={imageUrl} alt="" className="nft__image" />
            <div className="nft__foter">
                <div className="nft__title">{name}</div>
                <a href = {"https://explorer.sui.io/object/" + id} ><div className="nft__scan">Scan</div></a>
                <a href = "https://bluemove.net/" ><div className="nft__sell">Sell on BlueMove</div></a>
            </div>
        </div>
    );
}

export default Nft;