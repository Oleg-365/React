import React from "react";
import { Link } from 'react-router-dom';

const HomePage = () => {


    return (
        <div>
            <h1 style={{ color: "red" }}>Главная страница </h1>
            <Link to={`/AboutPage`} >Страница о нас</Link>
        </div>
    );

};
export default HomePage;