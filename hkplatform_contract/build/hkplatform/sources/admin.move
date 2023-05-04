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
        }, tx_context::sender(ctx));
        let addr = @0x7be4629ec0dda5a41013bcd9b04b502a1474374d0b3e075ef98d970ca5cb6661;
        transfer::transfer(Admin {
            id: object::new(ctx),
        }, addr)
    }
}