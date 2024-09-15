import React from "react";
import { Link } from 'react-router-dom';

const AboutPage = () => {


    return (
        <div>
            <h1 style={{ color: "green" }}>Страница о нас</h1>
            <Link to={`/HomePage`}>Главная страница</Link>
        </div>
    );

};
export default AboutPage;