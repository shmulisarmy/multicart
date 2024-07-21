type ProductComponentProps = {
    product: Item[];                            
    storeName: string;                          
    productName: string;                        
    storeComponentsRerenderFunction: () => void; 
};

function ProductComponent({product, storeName, productName, storeComponentsRerenderFunction}: ProductComponentProps){
    const {indexOfItemViewing, itemInVirtualCartCount} = virtualCart[storeName][productName]
    function previousItem(){
        if (virtualCart[storeName][productName].indexOfItemViewing > 0){
            virtualCart[storeName][productName].indexOfItemViewing--
        }
        storeComponentsRerenderFunction()
    }
    function nextItem(){
        if (virtualCart[storeName][productName].indexOfItemViewing < product.length-1){
            virtualCart[storeName][productName].indexOfItemViewing++
        }
        storeComponentsRerenderFunction()
    }
    function lessItems(){
        if (virtualCart[storeName][productName].itemInVirtualCartCount > 0){
            virtualCart[storeName][productName].itemInVirtualCartCount--
        }
        storeComponentsRerenderFunction()
    }
    function moreItems(){
            virtualCart[storeName][productName].itemInVirtualCartCount++
        storeComponentsRerenderFunction()
    }

    const item = product[indexOfItemViewing]
    console.log(indexOfItemViewing)
    return (
        <div className="product">
            <div className="header">
                <h2>{productName}</h2>
            </div>
            

            <div className="item">
                <div className="img">
                    <img src={item.imageUrl} alt="" />
                </div>
                <p>quantity: {item.quantity}</p>
                <p>size: {item.size}</p>
                <p>price: {item.price}</p>
            </div>

            
            <button onClick={lessItems} className='lt'>-</button>
                {` `}items in cart: {itemInVirtualCartCount}{` `}
            <button onClick={moreItems} className='gt'>+</button>

            <br />

            <button onClick={previousItem} className="lt">{`<`}</button>
            {` `}item number: {indexOfItemViewing+1} out of {product.length}{` `}
            <button onClick={nextItem} className="gt">{`>`}</button>
        </div>
    )
}