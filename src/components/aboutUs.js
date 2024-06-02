
import React from 'react';
import Slider from 'react-slick';
import '../style/aboutUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aibek from '../image/Aibek.jpg';
import Tashmit from '../image/Tashmit.jpg'
import Oraz from '../image/Oraz.jpg'

const images = [
	'https://via.placeholder.com/800x400?text=Image+1',
	'https://via.placeholder.com/800x400?text=Image+2',
	'https://via.placeholder.com/800x400?text=Image+3',
];

const cards = [
	{
		image: Aibek,
		title: 'Aibek',
		description: 'au mau',
	},
	{
		image: Tashmit,
		title: 'Tashmit',
		description: 'ПЛЮНЬ НА МОДУ И ПОГОДУ, ДАЙ УГЛА - ЦЕНИ СВОБОДУ.',
	},
	{
		image: Oraz,
		title: 'Oraz',
		description: 'Innovation, customer satisfaction, and integrity are at the core of everything we do.',
	},
];

function AboutUsPage() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="about-container">
			<h1 className="about-header">About Us</h1>
			<div className="slider-container">
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<img src={image} alt={`Slide ${index + 1}`} className="slider-image" />
						</div>
					))}
				</Slider>
			</div>
			<p className="about-content">
				<h1> What is JDM? <br/> </h1>

				JDM (Japanese Domestic Market) refers to cars and auto parts manufactured in Japan and intended solely
				for sale in the Japanese market. These vehicles are renowned for their high performance, unique design,
				and build quality. Japanese automakers such as Toyota, Nissan, Honda, Subaru, and Mitsubishi create
				iconic models that become the object of admiration and the dream of many car enthusiasts around the
				world. JDM cars are often equipped with powerful engines, advanced technologies, and exclusive design
				solutions, making them the ideal choice for those who value speed, style, and reliability.<br/>

				<h1> Why is a dealership website necessary?<br/> </h1>

					A dealership website plays a crucial role in the modern automotive business. It is not just a
					showcase
					for cars — it is the first step towards making the dream of a new car come true. Here are several
					reasons why a dealership website is so important:<br/>

					1. Convenience for the customer: On the website, you can browse the full range of available cars,
					learn
					the details of each model, and compare their specifications without leaving your home.<br/>
					2. Transparency and trust: The website provides complete information on prices, purchasing
					conditions,
					and available promotions and special offers. This helps the customer make an informed decision and
					feel
					confident.<br/>
					3. Test drive scheduling: The ability to schedule a test drive directly on the website saves time
					and
					speeds up the car selection process.<br/>
					4. Customer support: Through the website, you can contact dealership representatives, ask questions,
					and
					get consultations, making the buying process simpler and more enjoyable.<br/>

				<h1> Why buy a car from us?<br/> </h1>

					When you think about buying a car, you want to find something special that will delight you every
					day,
					providing comfort and confidence on the road. Our dealership offers just such cars — with soul, with
					history, with character.<br/>

					Imagine sitting behind the wheel of a car crafted with Japanese precision and a love for detail.
					Every
					element is thought out, every detail is perfect. A powerful engine, responsive handling, modern
					technologies — all of this turns every drive into a pleasure.<br/>

					We understand that buying a car is an important decision. That’s why we offer you not just a car but
					a
					true friend and loyal companion. Our specialists will help you make the right choice, answer all
					your
					questions, and provide the necessary support at every stage of the purchase.<br/>

				<h1> When you buy a car from us, you get:<br/> </h1>

					- Quality and reliability: We offer only proven models that have undergone thorough inspection and
					are
					ready for use.<br/>
					- Individual approach: We take into account all your wishes and needs to find the perfect car just
					for
					you.<br/>
					- Professional support: Our experts are always ready to help you with selection, technical
					maintenance,
					and any questions related to the car.<br/>

					Don’t miss the chance to turn your dream into reality. Visit our website, schedule a test drive, and
					feel what it’s like to be the owner of a true JDM car. Your perfect car is waiting for you!
			</p>


			<div className="cards-container">
				{cards.map((card, index) => (
					<div className="card" key={index}>
						<img src={card.image} alt={card.title} className="card-image" />
						<h3 className="card-title">{card.title}</h3>
						<p className="card-description">{card.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default AboutUsPage;
