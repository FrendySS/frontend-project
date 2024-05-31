import React from 'react';
import "../style/base.css";
import "../style/carousel.css";
import mazda from '../image/mazda.jpg';
import nissan350z from '../image/nissan350z.jpg';
import silviaS13 from '../image/silviaS13.jpg';

function HomePage(){
    return (
        <div className="allcontain">
            <div id="carousel-up" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner " role="listbox">
                    <div className="item active">
                        <img src={mazda} alt="mazda"/>
                        <div className="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nissan350z} alt="nissan350z"/>
                        <div className="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={silviaS13} alt="silvia"/>
                        <div className="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;