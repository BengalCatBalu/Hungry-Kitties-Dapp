//used as a profile of the person who donates through the platform, this structure collects donation statistics
//minted once during user registration

/*
module hkplatform::user {
    use sui::object::{Self, UID};
    use std::string;
    use sui::tx_context::{Self, TxContext};
    use sui::event::emit;
    use sui::transfer;
    use sui::balance::{Self, Balance};
    use sui::sui::SUI;
    use sui::coin;

    // Mistakes


    // Structs

    struct User has key, store {
        id: UID,
        number_of_donations: u64,
        number_of_HungryKitties: u64,
        extra_points: u64,
        user_address: address
    }

    //========== Events ===========

    struct UserCreated has drop, copy {
    }

    struct NewDonation has copy, drop {
        from_address: address,
        to_address: address
    }
    
    //========== View Functions ===========

    public fun number_of_donations(self: &User) : u64 {
        self.number_of_donations
    }

    public fun number_of_HungryKitties(self: &User) : u64 {
        self.number_of_HungryKitties
    }

    public fun user_address(self: &User) : address {
        self.user_address
    }

    public fun get_number_of_donations(self: &User) : u64 {
        self.number_of_donations
    }

    public fun get_number_of_HungryKitties(self: &User) : u64 {
        self.number_of_HungryKitties
    }

    public fun get_extra_points(self: &User) : u64 {
        self.extra_points
    }

    //========== Constructor ===========

    public fun new(ctx: &mut TxContext) : User {
        User{
            id: object::new(ctx),
            number_of_donations: 0,
            number_of_HungryKitties: 0,
            extra_points: 0,
            user_address: tx_context::sender(ctx),
        }
    }

    public entry fun create(ctx: &mut TxContext) {
        let donator = new(ctx);
        emit(UserCreated {});
        transfer::transfer(donator, tx_context::sender(ctx))
    }

    //========== User Functions ===========

    public entry fun inc_number_of_donations(self: &mut User) {
        self.number_of_donations = self.number_of_donations + 1;
    }

    public entry fun change_number_of_Hungry_Kitties(new_counter: u64, self: &mut User) {
        self.number_of_HungryKitties = new_counter;
    }

    public entry fun make_donation(self: &mut User, _to_address: address) {
        //emit(NewDonation{from_address: self.owner, to_address: to_address});
        self.number_of_donations = self.number_of_donations + 1;
    }
    public entry fun collect_profit(self: &mut User, ctx: &mut TxContext) {
        let amount = balance::value(&self.balance);
        let profits = coin::take(&mut self.balance, amount, ctx);

        transfer::transfer(profits, tx_context::sender(ctx))
    }
}
*/