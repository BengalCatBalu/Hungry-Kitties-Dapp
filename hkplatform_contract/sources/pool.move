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

    //Pool
    struct Pool has key {
        id: UID,
        balance: Balance<SUI>,
    }

    struct PoolOwnerCap has key { id: UID }

    struct Gift has key {
        id: UID,
        balance: Balance<SUI>,
        url: Url,
    }

    fun init(ctx: &mut TxContext) {
        transfer::share_object(Pool {
            id: object::new(ctx),
            balance: balance::zero(),
        });

        transfer::transfer(PoolOwnerCap {
            id: object::new(ctx)
        }, tx_context::sender(ctx));
    }

    // pay functions

    // Add funds to Pool Balance
    public fun pay(self: &mut Pool, payment: &mut Coin<SUI>) {
        let coin_balance = coin::balance_mut(payment);
        let paid = balance::withdraw_all(coin_balance);
        balance::join(&mut self.balance, paid);
    }

    // Send Winners They Gifts
    public fun payToWinner(self: &mut Pool, winner_addresses: vector<address>, ctx: &mut TxContext) {
        //balance::join(user::balance(winner), balance::withdraw_all(&mut self.balance));
        let i = 0;
        let value = balance::value(&self.balance);
        while (i < vector::length(&winner_addresses)) {
            let paid = balance::split(&mut self.balance, value / 20 );
            transfer::transfer(new_Gift(paid, ctx), *vector::borrow(&winner_addresses, i));
        }
    }

    // GIFT FUNCTIONS
    public fun new_Gift(win: Balance<SUI>, ctx: &mut TxContext) : Gift {
        Gift {
            id: object::new(ctx),
            balance: win,
            url: url::new_unsafe_from_bytes(*&IMAGE_URL)
        }
    }
}