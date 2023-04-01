// Collection of NFT that Admin will make

module hkplatform::DonationCollection {
    use sui::object::{Self, UID};
    use std::string::{Self, String};
    use sui::url::{Self, Url};
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    //use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    //use sui::event::emit;
    use std::vector;
    use sui::transfer;
    use hkplatform::user::{Self, User};
    use hkplatform::admin::{Self, Admin};

    const ETooManyNfts: u64 = 0;
    const EInsufficientBalance: u64 = 0;


    struct DonationCollection has key {
        id: UID,
        // Number of Nft in collection
        supply: u64,
        created: u64,
        name: String,
        description: String,
        // With this link we will receive images of nft
        ipfs_folder_url: vector<u8>,
        owner: address,
        // Addresses that donated
        //addresses: vector<address>;
    }

    struct NFT has key, store {
        id: UID,
        url: Url,
        donated: u64,
    }

    fun init(ctx: &mut TxContext) {
        transfer::transfer(
            Admin {id: object::new(ctx)}
        , tx_context::sender(ctx))
    }

    public entry fun createCollection(_admin: &Admin, supply_: u64, name_:vector<u8>, description_: vector<u8>, owner_: address, ctx: &mut TxContext) {
        transfer::share_object(DonationCollection { id: object::new(ctx),
            supply: supply_,
            created: 0,
            name: string::utf8(name_),
            description: string::utf8(description_),
            ipfs_folder_url: vector::empty<u8>(),
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

    public entry fun buy_nft(cap: &mut DonationCollection, payment: &mut Coin<SUI>, paymentValue: u64, user: &mut User, ctx: &mut TxContext) {
        assert!(cap.created <= cap.supply - 1, ETooManyNfts);
        cap.created = cap.created + 1;
        let val = coin::value(payment);
        assert!(val >= paymentValue, EInsufficientBalance);
        user::inc_number_of_donations(user);

        let profits = coin::split(payment, paymentValue, ctx);
        transfer::public_transfer(profits, cap.owner);

        transfer::transfer(NFT {
            id: object::new(ctx),
            url: returnImageUrl(cap.ipfs_folder_url, cap.created),
            donated: 0,
        }, tx_context::sender(ctx));

    }



    // ===== Utilities ======

    fun returnImageUrl(ipfsUrl: vector<u8>, _number: u64) : Url {
        vector::append(&mut ipfsUrl, b"1");
        vector::append(&mut ipfsUrl, b".png");

        url::new_unsafe_from_bytes(ipfsUrl)
    }
    
}