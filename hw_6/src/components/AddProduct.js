import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeProduct, addProduct } from "../reducers/productsSlice";

const AddProduct = () => {
    const favoriteItems = useSelector(state => state.productsList.productsList);
    console.log(favoriteItems);


    const [name, setName] = useState('name');
    const [description, setDescription] = useState('description')
    const [price, setPrice] = useState(0);
    const dispatch = useDispatch();
    const handleAddProduct = (item) => {
        dispatch(addProduct(item));
        setName(name);
        setDescription(description)


    };
    const item = { id: Date.now(), name: name, description: description, price: price }

    const handleRemove = (item) => {
        dispatch(removeProduct(item));
    };

    return (
        <div>

            <h2>Предложить свой продукт</h2>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
                <p>Название продукта: </p>
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => (setName(e.target.value))}
                />
                <p>Описание продукта: </p>
                <input
                    type="text"
                    value={item.description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <p>Цена продукта: </p>
                <input
                    type="number"
                    value={item.price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <br></br>
            <button onClick={() => handleAddProduct(item)}>Добавить продукт</button>

            <h2>Добавленные продукты</h2>
            <div >
                <div>
                    {favoriteItems.map(item => (
                        <div
                            key={item.id}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <button onClick={() => handleRemove(item)}>Удалить из списка продуктов</button>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;