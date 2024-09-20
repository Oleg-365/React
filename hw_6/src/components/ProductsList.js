import React from "react";
import { useDispatch } from "react-redux"
import { addProduct } from "../reducers/productsSlice";

const ProductsList = ({ products }) => {
    const dispatch = useDispatch();
    const handleAdd = (product) => {
        dispatch(addProduct(product));
    };


    return (
        <div>
            <h2>Предложенные продукты</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
                {products.map(product => (
                    <div key={product.id}>
                        <h2>Name: {product.name}</h2>
                        <p>Description:{product.description}</p>
                        <p>price: {product.price}</p>
                        <button onClick={() => handleAdd(product)}>Добавить продукт</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;