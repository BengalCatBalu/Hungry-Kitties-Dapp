const collection_name = "Ikka cat! Mew!"; // Add your name here
const collection_description = "Ikka is the cutest cat in the world"; // Add your description here


const ipfsUrl = "https://harlequin-written-whippet-307.mypinata.cloud/ipfs/QmWikBUUC1ceuoyopiWoJ1KsDze3bYRzLvVCEGQEZEfAjm/"; // Paste ipfs url here

const main_Image = ipfsUrl + 1 + ".webp"; // Add link to main image


const slider_Images = [ipfsUrl + 1 + ".webp",
ipfsUrl + 2 + ".webp",
ipfsUrl + 3 + ".webp",
ipfsUrl + 4 + ".webp",
ipfsUrl + 5 + ".webp"                    

]; // Add links here

const total_raised = 0;

const collection_supply = 56; // Paste your supply here

const shelterAddress = "0xf6ece1888163eac90dd9076511c569808439b1d48259e67e2e310bfafc428659"; // Paste shelter address here

const collectionObjectId = "0xef23fd956aaf429e915710ff370ae982b1ca8ce5cd2bf92ccf8a52637452bf51"; // Paste object id here


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