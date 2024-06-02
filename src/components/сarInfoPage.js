import React from 'react';
import { cars } from '../database/dataBase.js';
import { useParams } from 'react-router-dom';
import "../style/carinfo.css";

const CarInfoPage = () => {
    const { id } = useParams();
    const car = cars.find(car => car.id === parseInt(id));

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <>
            <div className="car-detail">
                <h1>{car.name}</h1>
                <img src={car.image} alt={car.name}/>
                <p>{car.description}</p>
                <h4>{car.price}€</h4>
            </div>
        </>
    );
}

export default CarInfoPage;
