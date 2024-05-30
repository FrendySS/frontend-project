import React from 'react';
import '../style/mystyle.css';
import { cars } from '../database/dataBase.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const CatalogPage = () => {
    return (
        <div className="container">
            <div className="row">
                {cars.map(car => (
                    <div key={car.id} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="txthover">
                            <img src={car.image} alt={car.name} className="cars1 img-fluid" />
                            <div className="txtcontent">
                                <div className="stars">
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                </div>
                                <div className="simpletxt">
                                    <h3 className="name">{car.name}</h3>
                                    <p className="description">{car.description}</p>
                                    <h4 className="price">{car.price}€</h4>
                                    <button className="button">More info</button>
                                </div>
                                <div className="stars2">
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
