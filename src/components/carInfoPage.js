import React, { useState } from 'react';
import { cars } from '../database/dataBase.js';
import "../style/base.css";
import "../style/features.css";
import rx7 from '../image/anthony-bautista-wWxL1jHPmKc-unsplash.png'
import skyline from '../image/anthony-bautista-wWxL1jHPmKc-unsplash.png'

function CarInfoPage() {
    const [readMore, setReadMore] = useState({ RX7: false, Skyline: false });

    const toggleReadMore = (car) => {
        setReadMore(prevState => ({
            ...prevState,
            [car]: !prevState[car]
        }));
    };

    return (
        <div className="feturedimage">
            <h1 className="text-center">
                <span className="bdots">&bullet;</span> F A V <span className="carstxt"> O N E S</span>&bullet;
            </h1>
            <div className="row firstrow">
                <div className="col-lg-6 costumcol colborder1">
                    <div className="row costumrow">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img1colon">
                            <img src={rx7} alt="RX-7"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon">
                            <div className="featurecontant">
                                <h1>Mazda RX-7</h1>
                                <p>The Mazda RX-7 is a front-engine, rear-wheel-drive, rotary engine-powered sports
                                    car</p>
                                <h2>Price &euro;</h2>
                                <button id="btnRM" onClick={() => toggleReadMore('RX7')}>READ MORE</button>
                                {readMore.RX7 && (
                                    <div id="readmore">
                                        <h1>Mazda RX-7</h1>
                                        <p>
                                            The Mazda RX-7 is a front-engine, rear-wheel-drive, rotary engine-powered
                                            sports car
                                            that was manufactured and marketed by Mazda from 1978 until 2002 across
                                            three generations,
                                            all of which made use of a compact, lightweight Wankel rotary engine.
                                        </p>
                                        <button id="btnRL" onClick={() => toggleReadMore('RX7')}>READ LESS</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 costumcol colborder2">
                    <div className="row costumrow">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 img2colon">
                            <img src={skyline} alt="Nissan"/>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 txt1colon">
                            <div className="featurecontant">
                                <h1>Nissan Skyline</h1>
                                <p>The Nissan Skyline (Japanese: 日産・スカイライン, Hepburn: Nissan Sukairain)</p>
                                <h2>Price &euro;</h2>
                                <button id="btnRM2" onClick={() => toggleReadMore('Skyline')}>READ MORE</button>
                                {readMore.Skyline && (
                                    <div id="readmore2">
                                        <h1>Nissan Skyline</h1>
                                        <p>
                                            The Nissan Skyline (Japanese: 日産・スカイライン, Hepburn: Nissan Sukairain)
                                            is a brand of automobile
                                            originally produced by the Prince Motor Company starting in 1957, and then
                                            by Nissan after the
                                            two companies merged in 1967. After the merger, the Skyline and its larger
                                            counterpart, the Nissan Gloria,
                                            were sold in Japan at dealership sales channels called Nissan Prince Shop.
                                        </p>
                                        <button id="btnRL2" onClick={() => toggleReadMore('Skyline')}>READ LESS</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarInfoPage;
