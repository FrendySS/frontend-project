import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { cars } from '../database/dataBase.js';
import "../style/carinfo.css";

function CarInfoPage() {
    const { id } = useParams();
    const car = cars.find(car => car.id === parseInt(id));

    if (!car) {
        return <div>Car not found</div>;
    }

    const formattedDescription = car.description.replace(/\n/g, '<br />');

    const getClassNames = (index) => {
        if (index % 5 === 0) return 'gallery-item large';
        if (index % 5 === 1) return 'gallery-item medium';
        return 'gallery-item small';
    };

    return (
        <div className="carInfoContainer">
            <div className="title">
                <h1 className={car.name}>{car.name}</h1>
            </div>
            <div className="info-block">
                <div className="info-text">{car.info}</div>
                <div className="info-image"></div>
                <img src={car.image} alt={car.name} className="infoImage"/>
            </div>
            <div className="description-block">
                <a dangerouslySetInnerHTML={{__html: formattedDescription}}></a>
            </div>
            <div className="details">
                <h2 className="order">WANNA BUY?</h2>
                <button className="button"><Link to="/contactpage"><a className="contUS">CONTACT US</a></Link></button>
            </div>
            <div className="gallery">
                {car.images.map((image, index) => (
                    <div key={index} className={getClassNames(index)}>
                        <img src={image} alt={`${car.name} ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CarInfoPage;
