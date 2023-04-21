//used as a profile of the person who donates through the platform, this structure collects donation statistics
//minted once during user registration
/*
module hkplatform::pool {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::coin::{Self, Coin};
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    use std::vector;
    use sui::transfer;
    use hkplatform::user::{Self, User};
    use hkplatform::admin::{Self, Admin};
    //use hkplatform::admin::{Self, Admin};
    // Mistakes


    // Structs

    //Lottery Profile
    struct Pool has key {
        id: UID,
        balance: Balance<SUI>,
        participants: vector<User>,
    }

    fun init(ctx: &mut TxContext) {
        transfer::transfer(Lottery {
            id: object::new(ctx),
            balance: balance::zero(),
            participants: vector::empty(),
        }, tx_context::sender(ctx))
    }

    // pay functions

    // Add funds to Lottery Balance
    public fun pay(self: &mut Lottery, payment: &mut Coin<SUI>) {
        let coin_balance = coin::balance_mut(payment);
        let paid = balance::withdraw_all(coin_balance);
        balance::join(&mut self.balance, paid);
    }

    // Pay winner all funds from Lottery Balance
    public fun payToWinner(self: &mut Lottery, winner: &mut User) {
        balance::join(user::balance(winner), balance::withdraw_all(&mut self.balance));
    }

    // lottery functions

    public fun makeLottery(_: &Admin, self: &mut Lottery) {
        //TODO
        // Write winner selection algorithm
        payToWinner(self, vector::borrow_mut(self.participants, 0));
    }

    fun chooseWinner(self: &mut Lottery) : &mut User {
        return vector::borrow_mut(&mut self.participants, 0)
    }
}
*/