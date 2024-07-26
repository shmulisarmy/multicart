let ReactDOM;
type ProductFullViewProps = {
    product: Item[];
    storeName: string;
    productName: string;
    onClose: () => void;
};

function ProductFullView({ product, storeName, productName, onClose }: ProductFullViewProps) {
    const [placeholder, setPlaceholder] = React.useState(true);
    const rerender = () => setPlaceholder(!placeholder);
    const { indexOfItemViewing, itemInVirtualCartCount } = virtualCart[storeName][productName];
    const item = product[indexOfItemViewing];

    const previousItem = () => {
        if (indexOfItemViewing > 0) {
            virtualCart[storeName][productName].indexOfItemViewing--;
            rerender();
        }
    };

    const nextItem = () => {
        if (indexOfItemViewing < product.length - 1) {
            virtualCart[storeName][productName].indexOfItemViewing++;
            rerender();

        }
    };

    const lessItems = () => {
        if (itemInVirtualCartCount > 0) {
            virtualCart[storeName][productName].itemInVirtualCartCount--;
            rerender();

        }
    };

    const moreItems = () => {
        virtualCart[storeName][productName].itemInVirtualCartCount++;
        rerender();

    };

    const thisItem = product[indexOfItemViewing];

    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <div className="product-fullview">
                    <div className="product-header">
                        <h2>{productName}</h2>
                    </div>
                    <div className="item">
                        <div className="img">
                            <img src={item.imageUrl} alt={thisItem.name} />
                        </div>
                        <p>Quantity: {item.quantity}</p>
                        <p>Size: {thisItem.size}</p>
                        <p>Price: ${item.price}</p>
                    </div>
                    <div className="product-controls">
                        <button onClick={lessItems} className='lt'>-</button>
                        {` Items in cart: ${itemInVirtualCartCount} `}
                        <button onClick={moreItems} className='gt'>+</button>
                    </div>
                    <div className="item-controls">
                        <button onClick={previousItem} className="lt">{`<`}</button>
                        {` Item number: ${indexOfItemViewing + 1} out of ${product.length} `}
                        <button onClick={nextItem} className="gt">{`>`}</button>
                    </div>
                </div>
            </div>
        </div>,
        document.body // Modal is attached to the body for global overlay
    );
}

