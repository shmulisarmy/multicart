



function StoreComponent({store, appRerender}){
    const [ph, setPh] = React.useState(true)
    const rerender = () => setPh(!ph)

    let thisStoresPriceTotal = 0
    const mappedProductsHtml = Object.entries(store.products).map(([productName, product]) => 
        {
            const {indexOfItemViewing, itemInVirtualCartCount} = virtualCart[store.name][productName]
            thisStoresPriceTotal+= Math.round(product[indexOfItemViewing].price)*itemInVirtualCartCount
            return   <ProductComponent product={product} storeName={store.name} productName={productName} storeComponentsRerenderFunction={rerender}/>
        }
    )
    return(
        <>

        <div className="header">
                        <h1>{store.name}</h1>
                        <h4>total: ${thisStoresPriceTotal}</h4>
                        
            <div className="buttons">
                            <button className="x" onClick={() => {delete stores[store.name]; appRerender()}}>X</button>
                            <button className="add" onClick={() => addStoreToFavoriotes(store.name)}>add to favoriates</button>
                        </div>
            </div>
            {mappedProductsHtml}
        </>
    )
}

function addStoreToFavoriotes(storeName){
    const favoritateStores = JSON.parse(localStorage.getItem("favoritateStores") || "[]")
    favoritateStores.push(storeName)
    localStorage.setItem("favoritateStores", JSON.stringify(favoritateStores))

}



const App = () => {
    const [ph, setPh] = React.useState(true)
    const rerender = () => setPh(!ph)

    return (
        <>
            {Object.entries(stores).map(([key, storeObject]) => 
                <div className="store">
                        <StoreComponent store={storeObject} appRerender={rerender}/>
                </div>
            )}
        </>
    );
  };

  ReactDOM.render(<App />, root);