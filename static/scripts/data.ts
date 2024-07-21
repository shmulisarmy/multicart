const stores: Stores = {
    "Costco": {
        name: "Costco",
        products: {
            "Toilet Paper": [
                { quantity: 24, size: 1, price: 15.99, imageUrl: "https://picsum.photos/id/1/200/300" },
                { quantity: 12, size: 2, price: 19.99, imageUrl: "https://picsum.photos/id/2/200/300" },
                { quantity: 36, size: 1, price: 22.99, imageUrl: "https://picsum.photos/id/3/200/300" },
                { quantity: 48, size: 2, price: 29.99, imageUrl: "https://picsum.photos/id/4/200/300" }
            ],
            "Laundry Detergent": [
                { quantity: 10, size: 5, price: 24.5, imageUrl: "https://picsum.photos/id/5/200/300" },
                { quantity: 15, size: 3, price: 18.99, imageUrl: "https://picsum.photos/id/6/200/300" },
                { quantity: 20, size: 2, price: 15.99, imageUrl: "https://picsum.photos/id/7/200/300" }
            ],
            "Frozen Pizza": [
                { quantity: 30, size: 1, price: 5.99, imageUrl: "https://picsum.photos/id/8/200/300" },
                { quantity: 25, size: 1.5, price: 7.99, imageUrl: "https://picsum.photos/id/9/200/300" },
                { quantity: 20, size: 2, price: 9.99, imageUrl: "https://picsum.photos/id/10/200/300" }
            ],
            "LED TV": [
                { quantity: 5, size: 55, price: 499.99, imageUrl: "https://picsum.photos/id/11/200/300" },
                { quantity: 3, size: 65, price: 799.99, imageUrl: "https://picsum.photos/id/12/200/300" },
                { quantity: 10, size: 43, price: 299.99, imageUrl: "https://picsum.photos/id/13/200/300" }
            ],
            "Microwave Oven": [
                { quantity: 8, size: 1, price: 79.99, imageUrl: "https://picsum.photos/id/14/200/300" },
                { quantity: 12, size: 1.5, price: 59.99, imageUrl: "https://picsum.photos/id/15/200/300" },
                { quantity: 15, size: 2, price: 89.99, imageUrl: "https://picsum.photos/id/16/200/300" }
            ],
            "Baby Diapers": [
                { quantity: 50, size: 1, price: 19.99, imageUrl: "https://picsum.photos/id/17/200/300" },
                { quantity: 40, size: 2, price: 24.99, imageUrl: "https://picsum.photos/id/18/200/300" },
                { quantity: 30, size: 3, price: 29.99, imageUrl: "https://picsum.photos/id/19/200/300" }
            ],
            "Coffee Maker": [
                { quantity: 15, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/20/200/300" },
                { quantity: 10, size: 1, price: 39.99, imageUrl: "https://picsum.photos/id/21/200/300" },
                { quantity: 8, size: 1.5, price: 49.99, imageUrl: "https://picsum.photos/id/22/200/300" }
            ],
            "Bed Sheets": [
                { quantity: 20, size: 1, price: 19.99, imageUrl: "https://picsum.photos/id/23/200/300" },
                { quantity: 25, size: 1.5, price: 24.99, imageUrl: "https://picsum.photos/id/24/200/300" },
                { quantity: 15, size: 2, price: 29.99, imageUrl: "https://picsum.photos/id/25/200/300" }
            ],
            "Hair Dryer": [
                { quantity: 30, size: 0.5, price: 24.99, imageUrl: "https://picsum.photos/id/26/200/300" },
                { quantity: 25, size: 1, price: 34.99, imageUrl: "https://picsum.photos/id/27/200/300" },
                { quantity: 20, size: 1.5, price: 44.99, imageUrl: "https://picsum.photos/id/28/200/300" }
            ],
            "Bluetooth Speaker": [
                { quantity: 50, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/29/200/300" },
                { quantity: 30, size: 1, price: 49.99, imageUrl: "https://picsum.photos/id/30/200/300" },
                { quantity: 20, size: 1.5, price: 69.99, imageUrl: "https://picsum.photos/id/31/200/300" }
            ],
            "Smartphone": [
                { quantity: 100, size: 6, price: 699.99, imageUrl: "https://picsum.photos/id/32/200/300" },
                { quantity: 80, size: 7, price: 799.99, imageUrl: "https://picsum.photos/id/33/200/300" },
                { quantity: 50, size: 8, price: 899.99, imageUrl: "https://picsum.photos/id/34/200/300" }
            ],
            // Add more products as needed
        }
    },
    "Walmart": {
        name: "Walmart",
        products: {
            "Toilet Paper": [
                { quantity: 30, size: 1, price: 17.99, imageUrl: "https://picsum.photos/id/35/200/300" },
                { quantity: 18, size: 2, price: 21.99, imageUrl: "https://picsum.photos/id/36/200/300" },
                { quantity: 40, size: 1, price: 24.99, imageUrl: "https://picsum.photos/id/37/200/300" },
                { quantity: 50, size: 2, price: 31.99, imageUrl: "https://picsum.photos/id/38/200/300" }
            ],
            "Laundry Detergent": [
                { quantity: 15, size: 5, price: 25.5, imageUrl: "https://picsum.photos/id/39/200/300" },
                { quantity: 20, size: 3, price: 19.99, imageUrl: "https://picsum.photos/id/40/200/300" },
                { quantity: 25, size: 2, price: 16.99, imageUrl: "https://picsum.photos/id/41/200/300" }
            ],
            "Frozen Pizza": [
                { quantity: 40, size: 1, price: 6.99, imageUrl: "https://picsum.photos/id/42/200/300" },
                { quantity: 35, size: 1.5, price: 8.99, imageUrl: "https://picsum.photos/id/43/200/300" },
                { quantity: 30, size: 2, price: 10.99, imageUrl: "https://picsum.photos/id/44/200/300" }
            ],
            "LED TV": [
                { quantity: 8, size: 55, price: 529.99, imageUrl: "https://picsum.photos/id/45/200/300" },
                { quantity: 5, size: 65, price: 849.99, imageUrl: "https://picsum.photos/id/46/200/300" },
                { quantity: 12, size: 43, price: 319.99, imageUrl: "https://picsum.photos/id/47/200/300" }
            ],
            "Microwave Oven": [
                { quantity: 10, size: 1, price: 89.99, imageUrl: "https://picsum.photos/id/48/200/300" },
                { quantity: 14, size: 1.5, price: 69.99, imageUrl: "https://picsum.photos/id/49/200/300" },
                { quantity: 18, size: 2, price: 99.99, imageUrl: "https://picsum.photos/id/50/200/300" }
            ],
            "Baby Diapers": [
                { quantity: 60, size: 1, price: 18.99, imageUrl: "https://picsum.photos/id/51/200/300" },
                { quantity: 50, size: 2, price: 23.99, imageUrl: "https://picsum.photos/id/52/200/300" },
                { quantity: 40, size: 3, price: 28.99, imageUrl: "https://picsum.photos/id/53/200/300" }
            ],
            "Coffee Maker": [
                { quantity: 20, size: 0.5, price: 34.99, imageUrl: "https://picsum.photos/id/54/200/300" },
                { quantity: 15, size: 1, price: 44.99, imageUrl: "https://picsum.photos/id/55/200/300" },
                { quantity: 12, size: 1.5, price: 54.99, imageUrl: "https://picsum.photos/id/56/200/300" }
            ],
            "Bed Sheets": [
                { quantity: 30, size: 1, price: 22.99, imageUrl: "https://picsum.photos/id/57/200/300" },
                { quantity: 35, size: 1.5, price: 27.99, imageUrl: "https://picsum.photos/id/58/200/300" },
                { quantity: 20, size: 2, price: 32.99, imageUrl: "https://picsum.photos/id/59/200/300" }
            ],
            "Hair Dryer": [
                { quantity: 40, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/60/200/300" },
                { quantity: 30, size: 1, price: 39.99, imageUrl: "https://picsum.photos/id/61/200/300" },
                { quantity: 25, size: 1.5, price: 49.99, imageUrl: "https://picsum.photos/id/62/200/300" }
            ],
            "Bluetooth Speaker": [
                { quantity: 60, size: 0.5, price: 34.99, imageUrl: "https://picsum.photos/id/63/200/300" },
                { quantity: 40, size: 1, price: 49.99, imageUrl: "https://picsum.photos/id/64/200/300" },
                { quantity: 30, size: 1.5, price: 64.99, imageUrl: "https://picsum.photos/id/65/200/300" }
            ],
            "Smartwatch": [
                { quantity: 80, size: 1, price: 199.99, imageUrl: "https://picsum.photos/id/66/200/300" },
                { quantity: 60, size: 1.5, price: 249.99, imageUrl: "https://picsum.photos/id/67/200/300" },
                { quantity: 40, size: 2, price: 299.99, imageUrl: "https://picsum.photos/id/68/200/300" }
            ],
            // Add more products as needed
        }
    },
        "publix": {
            name: "publix",
            products: {
                "Toilet Paper": [
                    { quantity: 24, size: 1, price: 15.99, imageUrl: "https://picsum.photos/id/1/200/300" },
                    { quantity: 12, size: 2, price: 19.99, imageUrl: "https://picsum.photos/id/2/200/300" },
                    { quantity: 36, size: 1, price: 22.99, imageUrl: "https://picsum.photos/id/3/200/300" },
                    { quantity: 48, size: 2, price: 29.99, imageUrl: "https://picsum.photos/id/4/200/300" }
                ],
                "Laundry Detergent": [
                    { quantity: 10, size: 5, price: 24.5, imageUrl: "https://picsum.photos/id/5/200/300" },
                    { quantity: 15, size: 3, price: 18.99, imageUrl: "https://picsum.photos/id/6/200/300" },
                    { quantity: 20, size: 2, price: 15.99, imageUrl: "https://picsum.photos/id/7/200/300" }
                ],
                "Frozen Pizza": [
                    { quantity: 30, size: 1, price: 5.99, imageUrl: "https://picsum.photos/id/8/200/300" },
                    { quantity: 25, size: 1.5, price: 7.99, imageUrl: "https://picsum.photos/id/9/200/300" },
                    { quantity: 20, size: 2, price: 9.99, imageUrl: "https://picsum.photos/id/10/200/300" }
                ],
                "LED TV": [
                    { quantity: 5, size: 55, price: 499.99, imageUrl: "https://picsum.photos/id/11/200/300" },
                    { quantity: 3, size: 65, price: 799.99, imageUrl: "https://picsum.photos/id/12/200/300" },
                    { quantity: 10, size: 43, price: 299.99, imageUrl: "https://picsum.photos/id/13/200/300" }
                ],
                "Microwave Oven": [
                    { quantity: 8, size: 1, price: 79.99, imageUrl: "https://picsum.photos/id/14/200/300" },
                    { quantity: 12, size: 1.5, price: 59.99, imageUrl: "https://picsum.photos/id/15/200/300" },
                    { quantity: 15, size: 2, price: 89.99, imageUrl: "https://picsum.photos/id/16/200/300" }
                ],
                "Baby Diapers": [
                    { quantity: 50, size: 1, price: 19.99, imageUrl: "https://picsum.photos/id/17/200/300" },
                    { quantity: 40, size: 2, price: 24.99, imageUrl: "https://picsum.photos/id/18/200/300" },
                    { quantity: 30, size: 3, price: 29.99, imageUrl: "https://picsum.photos/id/19/200/300" }
                ],
                "Coffee Maker": [
                    { quantity: 15, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/20/200/300" },
                    { quantity: 10, size: 1, price: 39.99, imageUrl: "https://picsum.photos/id/21/200/300" },
                    { quantity: 8, size: 1.5, price: 49.99, imageUrl: "https://picsum.photos/id/22/200/300" }
                ],
                "Bed Sheets": [
                    { quantity: 20, size: 1, price: 19.99, imageUrl: "https://picsum.photos/id/23/200/300" },
                    { quantity: 25, size: 1.5, price: 24.99, imageUrl: "https://picsum.photos/id/24/200/300" },
                    { quantity: 15, size: 2, price: 29.99, imageUrl: "https://picsum.photos/id/25/200/300" }
                ],
                "Hair Dryer": [
                    { quantity: 30, size: 0.5, price: 24.99, imageUrl: "https://picsum.photos/id/26/200/300" },
                    { quantity: 25, size: 1, price: 34.99, imageUrl: "https://picsum.photos/id/27/200/300" },
                    { quantity: 20, size: 1.5, price: 44.99, imageUrl: "https://picsum.photos/id/28/200/300" }
                ],
                "Bluetooth Speaker": [
                    { quantity: 50, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/29/200/300" },
                    { quantity: 30, size: 1, price: 49.99, imageUrl: "https://picsum.photos/id/30/200/300" },
                    { quantity: 20, size: 1.5, price: 69.99, imageUrl: "https://picsum.photos/id/31/200/300" }
                ],
                "Smartphone": [
                    { quantity: 100, size: 6, price: 699.99, imageUrl: "https://picsum.photos/id/32/200/300" },
                    { quantity: 80, size: 7, price: 799.99, imageUrl: "https://picsum.photos/id/33/200/300" },
                    { quantity: 50, size: 8, price: 899.99, imageUrl: "https://picsum.photos/id/34/200/300" }
                ],
                // Add more products as needed
            }
        },
        "windexy": {
            name: "windexy",
            products: {
                "Toilet Paper": [
                    { quantity: 30, size: 1, price: 17.99, imageUrl: "https://picsum.photos/id/35/200/300" },
                    { quantity: 18, size: 2, price: 21.99, imageUrl: "https://picsum.photos/id/36/200/300" },
                    { quantity: 40, size: 1, price: 24.99, imageUrl: "https://picsum.photos/id/37/200/300" },
                    { quantity: 50, size: 2, price: 31.99, imageUrl: "https://picsum.photos/id/38/200/300" }
                ],
                "Laundry Detergent": [
                    { quantity: 15, size: 5, price: 25.5, imageUrl: "https://picsum.photos/id/39/200/300" },
                    { quantity: 20, size: 3, price: 19.99, imageUrl: "https://picsum.photos/id/40/200/300" },
                    { quantity: 25, size: 2, price: 16.99, imageUrl: "https://picsum.photos/id/41/200/300" }
                ],
                "Frozen Pizza": [
                    { quantity: 40, size: 1, price: 6.99, imageUrl: "https://picsum.photos/id/42/200/300" },
                    { quantity: 35, size: 1.5, price: 8.99, imageUrl: "https://picsum.photos/id/43/200/300" },
                    { quantity: 30, size: 2, price: 10.99, imageUrl: "https://picsum.photos/id/44/200/300" }
                ],
                "LED TV": [
                    { quantity: 8, size: 55, price: 529.99, imageUrl: "https://picsum.photos/id/45/200/300" },
                    { quantity: 5, size: 65, price: 849.99, imageUrl: "https://picsum.photos/id/46/200/300" },
                    { quantity: 12, size: 43, price: 319.99, imageUrl: "https://picsum.photos/id/47/200/300" }
                ],
                "Microwave Oven": [
                    { quantity: 10, size: 1, price: 89.99, imageUrl: "https://picsum.photos/id/48/200/300" },
                    { quantity: 14, size: 1.5, price: 69.99, imageUrl: "https://picsum.photos/id/49/200/300" },
                    { quantity: 18, size: 2, price: 99.99, imageUrl: "https://picsum.photos/id/50/200/300" }
                ],
                "Baby Diapers": [
                    { quantity: 60, size: 1, price: 18.99, imageUrl: "https://picsum.photos/id/51/200/300" },
                    { quantity: 50, size: 2, price: 23.99, imageUrl: "https://picsum.photos/id/52/200/300" },
                    { quantity: 40, size: 3, price: 28.99, imageUrl: "https://picsum.photos/id/53/200/300" }
                ],
                "Coffee Maker": [
                    { quantity: 20, size: 0.5, price: 34.99, imageUrl: "https://picsum.photos/id/54/200/300" },
                    { quantity: 15, size: 1, price: 44.99, imageUrl: "https://picsum.photos/id/55/200/300" },
                    { quantity: 12, size: 1.5, price: 54.99, imageUrl: "https://picsum.photos/id/56/200/300" }
                ],
                "Bed Sheets": [
                    { quantity: 30, size: 1, price: 22.99, imageUrl: "https://picsum.photos/id/57/200/300" },
                    { quantity: 35, size: 1.5, price: 27.99, imageUrl: "https://picsum.photos/id/58/200/300" },
                    { quantity: 20, size: 2, price: 32.99, imageUrl: "https://picsum.photos/id/59/200/300" }
                ],
                "Hair Dryer": [
                    { quantity: 40, size: 0.5, price: 29.99, imageUrl: "https://picsum.photos/id/60/200/300" },
                    { quantity: 30, size: 1, price: 39.99, imageUrl: "https://picsum.photos/id/61/200/300" },
                    { quantity: 25, size: 1.5, price: 49.99, imageUrl: "https://picsum.photos/id/62/200/300" }
                ],
                "Bluetooth Speaker": [
                    { quantity: 60, size: 0.5, price: 34.99, imageUrl: "https://picsum.photos/id/63/200/300" },
                    { quantity: 40, size: 1, price: 49.99, imageUrl: "https://picsum.photos/id/64/200/300" },
                    { quantity: 30, size: 1.5, price: 64.99, imageUrl: "https://picsum.photos/id/65/200/300" }
                ],
                "Smartwatch": [
                    { quantity: 80, size: 1, price: 199.99, imageUrl: "https://picsum.photos/id/66/200/300" },
                    { quantity: 60, size: 1.5, price: 249.99, imageUrl: "https://picsum.photos/id/67/200/300" },
                    { quantity: 40, size: 2, price: 299.99, imageUrl: "https://picsum.photos/id/68/200/300" }
                ],
                // Add more products as needed
            }
        },
        // Add more stores as needed
    
    
};



const virtualCart: VirtualCart = {}
Object.entries(stores).forEach(([storeName, storeData]) => {
    virtualCart[storeName] = {}
    Object.entries(storeData.products).forEach(([productName, productData]) => {
        virtualCart[storeName][productName] = {indexOfItemViewing: 0, itemInVirtualCartCount: 1}
    })      
})


console.log(virtualCart)
