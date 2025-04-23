import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const cards = [
	{
		title: "Card title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque",
	},
	{
		title: "Card title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque",
	},
	{
		title: "Card title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque",
	},
	{
		title: "Card title",
		description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque",
	},
];

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container mb-5">
				<Jumbotron />
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
					{cards.map((item, index) => (
						<div className="col" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;