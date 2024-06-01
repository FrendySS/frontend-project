
import React from 'react';
import Slider from 'react-slick';
import '../style/aboutUs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
	'https://via.placeholder.com/800x400?text=Image+1',
	'https://via.placeholder.com/800x400?text=Image+2',
	'https://via.placeholder.com/800x400?text=Image+3',
];

const cards = [
	{
		image: 'https://via.placeholder.com/200x200?text=Card+1',
		title: 'Our Mission',
		description: 'We aim to provide the best services to our customers with utmost dedication and integrity.',
	},
	{
		image: 'https://via.placeholder.com/200x200?text=Card+2',
		title: 'Our Vision',
		description: 'To be a global leader in our industry and set standards of excellence.',
	},
	{
		image: 'https://via.placeholder.com/200x200?text=Card+3',
		title: 'Our Values',
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
				Welcome to our company. We are dedicated to providing the best service in the industry.
				Our team is made up of highly skilled professionals who are passionate about what they do.
				We believe in innovation, integrity, and customer satisfaction.
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
