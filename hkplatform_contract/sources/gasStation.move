/*
module hkplatform::GasStation {
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
    //use hkplatform::admin::{Self, Admin};
    // Constants
    const IMAGE_URL: vector<u8> = b"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/kift.webp";


    // Structs

    struct GasStation has key {
        id: UID,
        gas: Coin<SUI>,
    }

    public entry fun createStation(gas1: Coin<SUI>, ctx: &mut TxContext) {
        transfer::share_object(GasStation {
            id: object::new(ctx),
            gas: gas1
        })
    }

    public entry fun SendGas(station: &mut GasStation, ctx: &mut TxContext ) {
        let payment = coin::split<SUI>(&mut station.gas, 10000000, ctx);
        transfer::public_transfer(payment, tx_context::sender(ctx));
    }
}
*/