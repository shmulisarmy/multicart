let React;


type Item = {
    quantity: number;
    size: number;
    price: number;
    imageUrl: string; // New property for image URL
};

type Product = {
    [key: string]: Item[]; // Change from array to key-value object
};

type Store = {
    name: string;
    products: Product; // Change to key-value object of products
};

type Stores = {
    [key: string]: Store;
};


type VirtualCart = {
    [storeName: string]: {
        [productName: string]: {
            indexOfItemViewing: number;
            itemInVirtualCartCount: number;
        };
    };
};

