module hkplatform::admin {
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::transfer;

    //Lottery Profile
    struct Admin has key{
        id: UID,
    } 

    // need to send Admin Structure to other admin, not only my wallet
    fun init(ctx: &mut TxContext) {
        transfer::transfer(Admin {
            id: object::new(ctx),
        }, tx_context::sender(ctx))
    }
}