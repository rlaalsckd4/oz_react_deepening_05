import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        if (cart.length >= 8){
            alert("카트에 상품을 8개 이상 담을 수 없습니다.")
            return
        }
        setCart([...cart,product])
    };

    return (
        <>
            <div className="container">
                <ProductList addToCart={addToCart} />
            </div>
            <Cart cart={cart} setCart={setCart} />
        </>
    );
};

export default App;
