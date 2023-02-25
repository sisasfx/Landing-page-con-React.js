import React from "react";
import NavBar from "./navBar.jsx";
import JumboTron from "./JumboTron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";


import RingoImage from "../../img/rigo-baby.jpg"

let cards = [{
	title: "One",
	description: "Esta es la primera carta amigo",
	link: "Go to link",
	img: RingoImage
},
{
	title: "Two",
	description: "Esta es la segunda carta amigo",
	link: "Go to link",
	img: RingoImage
},
{
	title: "Three",
	description: "Esta es la tercera carta amigo",
	link: "Go to link",
	img: RingoImage
},
{
	title: "Four",
	description: "Esta es la cuarta carta amigo",
	link: "Go to link",
	img: RingoImage
},
]


//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<NavBar/>
			<div className="container">
				<JumboTron/>				
				<div className="card-group">
				{cards.map((card) => {
					return <Card img={card.img} title={card.title} description={card.description} link={card.link} />
				})}	
				</div>					
			</div>
			<Footer/>			
		</div>
	);
};

export default Home;
