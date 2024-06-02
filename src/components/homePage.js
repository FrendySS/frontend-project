import React, {useState} from 'react';
import "../style/base.css";
import "../style/carousel.css";
import "../style/slider.css";
import "../source/bootstrap-3.3.6-dist/css/bootstrap.css";
import "../style/features.css";
import "../style/favones.css";
import mazda from '../image/mazda.jpg';
import nissan350z from '../image/nissan350z.jpg';
import silviaS13 from '../image/silviaS13.jpg';
import border from "../image/border.png";
import newsimage from "../image/patrik-storm-alstra-pictures-5RSqU21ia7Q-unsplash.jpg";

function HomePage(){
    const [readMore, setReadMore] = useState({ RX7: false, Skyline: false });

    const toggleReadMore = (car) => {
        setReadMore(prevState => ({
            ...prevState,
            [car]: !prevState[car]
        }));
    };
    return (
        <div className="allcontain">
            <div id="carousel-up" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner " role="listbox">
                    <div className="item active">
                        <img src={mazda} alt="mazda"/>
                        <div className="carousel-caption">
                            <h2>HACARZ DEALERSHIP</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let us know in the contact
                                list what you want to buy.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={nissan350z} alt="nissan350z"/>
                        <div className="carousel-caption">
                            <h2>HACARZ DEALERSHIP</h2>
                            <p>Welcome to our JDM cars showroom. Find a car to your liking and let us know in the contact
                                list what you want to buy.</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src={silviaS13} alt="silvia"/>
                        <div className="carousel-caption">
                            <h2>HACARZ DEALERSHIP</h2>
                            <p>Welcome to our JDM cars showroom. Find a car to your liking and let us know in the contact
                                list what you want to buy.</p>
                        </div>
                        <div className="newslettercontent">
                            <div className="leftside">
                                <img src={border} alt="border"/>
                                <h1>NEWSLETTER</h1>
                                <p>Subscribe to the COLLECTIONCARS mailing list to <br/>
                                    receive updates on new arrivals, special offers <br/>
                                    and other discount information.</p>
                            </div>
                            <div className="rightside">
                                <img src={newsimage} alt="newsletter"/>
                                <input type="text" className="form-control" id="subemail" placeholder="EMAIL"/>
                                <button>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;