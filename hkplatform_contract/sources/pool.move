module hkplatform::pool {
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
    const IMAGE_URL: vector<u8> = b"https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmYVcyMvx4J5u7QSqEtL2PJ1NfLGmW4fqgQfBZkM2kpHYv";


    // Structs

    struct PoolOwnerCap has key { id: UID }

    struct Gift has key {
        id: UID,
        rewards: Coin<SUI>,
        url: Url,
    }

    fun init(ctx: &mut TxContext) {
        let poolAddress: address = @0xeecd9e5384ffcf63b67793e2496d2f48fbc195c2009a19d7e715a347e335ec6e;
        transfer::transfer(PoolOwnerCap {
            id: object::new(ctx)
        }, poolAddress);
    }

    // pay functions

    // Send Winners They Gifts
    public entry fun payToWinners(_admin: &Admin, winner_addresses: vector<address>, rewards: &mut Coin<SUI>, value: u64, ctx: &mut TxContext) {
        let i = 0;
        let perc_of_win = 10;
        if (vector::length(&winner_addresses) > 10) {
            perc_of_win = vector::length(&winner_addresses);
        };
        while (i < vector::length(&winner_addresses)) {
            let reward = coin::split<SUI>(rewards, value / perc_of_win, ctx);
            transfer::transfer(new_Gift(reward, ctx), *vector::borrow(&winner_addresses, i));
        }
    }

    public entry fun payToWinner(_admin: &Admin, winner_address: address, rewards: &mut Coin<SUI>, value: u64, ctx: &mut TxContext) {
        let reward = coin::split<SUI>(rewards, value, ctx);
        transfer::transfer(new_Gift(reward, ctx), winner_address);
    }

    // GIFT FUNCTIONS
    public fun new_Gift(win: Coin<SUI>, ctx: &mut TxContext) : Gift {
        Gift {
            id: object::new(ctx),
            rewards: win,
            url: url::new_unsafe_from_bytes(*&IMAGE_URL)
        }
    }

    public entry fun CollectRewards(gift : Gift, ctx: &mut TxContext) {
        let Gift {
            id,
            rewards,
            url: _
        } = gift;
        transfer::public_transfer(rewards, tx_context::sender(ctx));
        object::delete(id);
    }
}