//used as a profile of the person who donates through the platform, this structure collects donation statistics
//minted once during user registration
module hkplatform::user {
    use sui::object::{Self, UID};
    use std::string;
    use sui::tx_context::{Self, TxContext};
    use sui::event::emit;
    use sui::transfer;

    // Mistakes


    // Structs

    struct User has key {
        id: UID,
        number_of_donations: u64,
        name: string::String,
    }

    //========== Events ===========

    struct UserCreated has drop, copy {
        name: string::String,
    }

    struct NewDonation has copy, drop {
        from_address: address,
        to_address: address
    }
    
    //========== View Functions ===========

    public fun number_of_donations(self: &User) : u64 {
        self.number_of_donations
    }

    public fun inc_number_of_donations(self: &mut User) {
        self.number_of_donations = self.number_of_donations + 1;
    }

    public fun name(self: &User) : &string::String {
        &self.name
    }

    public fun new(name: vector<u8>, ctx: &mut TxContext): User {
        User{
            id: object::new(ctx),
            number_of_donations: 0,
            name: string::utf8(name),
        }
    }

    //========== User Functions ===========

    public entry fun change_name(new_name: vector<u8>, self: &mut User) {
        self.name = string::utf8(new_name);
    }

    public entry fun create(name: vector<u8>, ctx: &mut TxContext) {
        let donator = new(name, ctx);
        emit(UserCreated {name:string::utf8(name)});
        transfer::transfer(donator, tx_context::sender(ctx))
    }

    public entry fun make_donation(self: &mut User, _to_address: address) {
        //emit(NewDonation{from_address: self.owner, to_address: to_address});
        self.number_of_donations = self.number_of_donations + 1;
    }
}