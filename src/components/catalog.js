import React from 'react';
import { cars } from '../database/dataBase.js';
import "../source/font-awesome-4.5.0/css/font-awesome.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/catalog.css";
import {Link} from "react-router-dom";

const CatalogPage = () => {
    return (
        <div className="allcontain">
            <div className="row">
                {cars.map(Car => (
                    <div key={Car.name} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="txthover">
                            <img src={Car.image} alt={Car.name} className="cars1 img-fluid" />
                            <div className="txtcontent">
                                <div className="stars">
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                    <div className="glyphicon glyphicon-star"></div>
                                </div>
                                <div className="simpletxt">
                                    <input className="id" value={Car.id} type="hidden"/>
                                    <h3 className="name">{Car.name}</h3>
                                    <p className="description">{Car.description}</p>
                                    <h4 className="price">{Car.price}€</h4>
                                    <button className="button"><Link to="/carinfopage"> More info </Link></button>
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
}

export default CatalogPage;
