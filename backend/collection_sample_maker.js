const collection_name = "Balu"; // Add your name here
const collection_description = "Test collection with my cat images"; // Add your description here


const main_Image = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/1.webp"; // Add link to main image

const slider_Images = ["https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/7.webp",
                    "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/20.webp",
                    "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/19.webp",
                    "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/11.webp",
                    "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/16.webp"]; // Add links here

const total_raised = 0;

const collection_supply = 20; // Paste your supply here

const shelterAddress = "0x318fa082a4aee524b6c5abb1ef4f41e9b46e322c95bd1a9486822ab146f16bff"; // Paste shelter address here

const collectionObjectId = "0x7ab6ac8ddf3ed4b82676b558a147634c85249c751038be875524a0650525b364"; // Paste object id here

const ipfsUrl = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmcSxAZTTCyde2rihnJbnEHZTmy2iygzG9QwFZLbGT1gfK/Balu/"; // Paste ipfs url here

const jsonData = {
    name: collection_name,
    description: collection_description,
    image: main_Image,
    additional_images: slider_Images,
    totalRaised: total_raised,
    supply: collection_supply,
    shelter_address: shelterAddress,
    collection_object_id: collectionObjectId,
    ipfs_url: ipfsUrl
}

console.log(JSON.stringify(jsonData));