// Collection of NFT that Admin will make

module hkplatform::DonationCollection {
    use sui::object::{Self, UID};
    use std::string::{Self, String};
    use sui::url::{Self, Url};
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    //use sui::event::emit;
    use std::vector;
    use sui::transfer;
    use hkplatform::admin::{Self, Admin};


    const ETooManyNfts: u64 = 0;
    const EINSUFFICIENT_FUNDS: u64 = 0;

    struct DonationCollection has key {
        id: UID,
        // Number of Nft in collection
        created: u64,
        name: String,
        description: String,
        percent_to_shelter: u64,
        // address of shelter, in future may be will integrate name service
        owner: address,
        // Addresses that donated
        //addresses: vector<address>;
    }

    struct NFT has key, store {
        id: UID,
        name: String,
        url: Url,
        donated: u64,
    }

    public entry fun createCollection(_admin: &Admin, supply_: u64, name_:vector<u8>, description_: vector<u8>, percent_to_shelter_: u64, owner_: address, ctx: &mut TxContext) {
        if (percent_to_shelter_ > 90) {
            percent_to_shelter_ = 90;
        };
        // make collection shared object
        transfer::share_object(DonationCollection { 
            id: object::new(ctx),
            supply: supply_,
            created: 0,
            name: string::utf8(name_),
            description: string::utf8(description_),
            percent_to_shelter: percent_to_shelter_,
            owner: owner_,
         })
    }
    /*
    public entry fun mint(cap: &mut DonationCollection, user: &mut User, ctx: &mut TxContext) {
        assert!(cap.created <= cap.supply - 1, ETooManyNfts);
        cap.created = cap.created + 1;

        user::inc_number_of_donations(user);

        let nft = NFT { id: object::new(ctx), url:returnImageUrl(cap.ipfs_folder_url, cap.created), donated: 0 };
        transfer::transfer(nft, tx_context::sender(ctx));
    }
    */

    public entry fun buy_nft(cap: &mut DonationCollection, paymentValue: u64, url: vector<u8>, ctx: &mut TxContext) {
        assert!(cap.created < cap.supply, ETooManyNfts);
        cap.created = cap.created + 1;
        transfer::transfer(NFT {
            id: object::new(ctx),
            url: url::new_unsafe_from_bytes(url),
            name: cap.name,
            donated: paymentValue,
        }, tx_context::sender(ctx))

    }



    // ===== Utilities ======
    /*
    fun returnImageUrl(ipfsUrl: vector<u8>, num: u64) : Url {
        // need to make string from number creator
        vector::append(&mut ipfsUrl, sui::hex::encode(num));
        vector::append(&mut ipfsUrl, b".png");

        url::new_unsafe_from_bytes(ipfsUrl)
    }
    */
    
}