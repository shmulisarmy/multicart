let React;
const { useState } = React;

type ProductComponentProps = {
        product: Item[];
        storeName: string;
        productName: string;
        storeComponentsRerenderFunction: () => void;
    };
    
    function ProductComponent({ product, storeName, productName, storeComponentsRerenderFunction }: ProductComponentProps) {
        const [isModalOpen, setIsModalOpen] = useState(false);
    
        const { indexOfItemViewing, itemInVirtualCartCount } = virtualCart[storeName][productName];
    
        const previousItem = () => {
            if (virtualCart[storeName][productName].indexOfItemViewing > 0) {
                virtualCart[storeName][productName].indexOfItemViewing--;
            }
            storeComponentsRerenderFunction();
        };
    
        const nextItem = () => {
            if (virtualCart[storeName][productName].indexOfItemViewing < product.length - 1) {
                virtualCart[storeName][productName].indexOfItemViewing++;
            }
            storeComponentsRerenderFunction();
        };
    
        const lessItems = () => {
            if (virtualCart[storeName][productName].itemInVirtualCartCount > 0) {
                virtualCart[storeName][productName].itemInVirtualCartCount--;
            }
            storeComponentsRerenderFunction();
        };
    
        const moreItems = () => {
            virtualCart[storeName][productName].itemInVirtualCartCount++;
            storeComponentsRerenderFunction();
        };
    
        const item = product[indexOfItemViewing];
    
        return (
            <div className="product" id={productName}>
                <div className="header">
                    <h2>{productName}</h2>
                </div>
    
                <div className="item">
                    <button onClick={() => setIsModalOpen(true)}>open in modal</button>
                    <div className="img">
                        <img src={item.imageUrl} alt={item.name} />
                    </div>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                    <p>Price: ${item.price}</p>
                </div>
    
                <div className="buttons">
                    <button onClick={lessItems} className='lt'>-</button>
                    {` Items in cart: ${itemInVirtualCartCount} `}
                    <button onClick={moreItems} className='gt'>+</button>
                </div>
    
                <br />
    
                <div className="buttons <>">
                    <button onClick={previousItem} className="lt">{`<`}</button>
                    {` Item number: ${indexOfItemViewing + 1} out of ${product.length} `}
                    <button onClick={nextItem} className="gt">{`>`}</button>
                </div>
                {isModalOpen && (
                    <ProductFullView
                        product={product}
                        storeName={storeName}
                        productName={productName}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        );
    }