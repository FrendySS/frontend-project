import React from 'react';
import '../style/mystyle.css';
import {cars} from '../database/dataBase.js';

const HomePage = () => {
    return (
        <div class="allcontain">
            <div id="carousel-up" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner " role="listbox">
                    <div class="item active">
                        <img src="image/mazda.jpg" alt="mazda"/>
                        <div class="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="image/nissan350z.jpg" alt="350z"/>
                        <div class="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                    <div class="item">
                        <img src="image/silviaS13.jpg" alt="silvia"/>
                        <div class="carousel-caption">
                            <h2>Chporik showroom</h2>
                            <p>Welcome to my JDM cars showroom. Find a car to your liking and let me know in the contact
                                list if you want to buy.</p>
                        </div>
                    </div>
                </div>
            </div>



            <div id="Footer">
                <footer class="footer">
                    <div className="newslettercontent">
                        <div className="leftside">
                            <img src="image/border.png" alt="border" />
                            <h1>NEWSLETTER</h1>
                            <p>Subscribe to the COLLECTIONCARS mailing list to <br/>
                                receive updates on new arrivals, special offers <br/>
                                and other discount information.</p>
                        </div>
                        <div className="rightside">
                            <img className="newsimage" src="image/patrik-storm-alstra-pictures-5RSqU21ia7Q-unsplash.jpg" alt="newsletter" />
                            <input type="text" className="form-control" id="subemail" placeholder="EMAIL" />
                            <button>SUBSCRIBE</button>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;