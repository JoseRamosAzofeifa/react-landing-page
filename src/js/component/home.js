import React from "react";

import { Jumbotrom } from "./jumbotrom.js";
import { Navbar } from "./navbar.js";
import { Footer } from "./bottom.js";
import { Cards } from "./cards.js";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotrom />
				<Cards />
			</div>
			<Footer />
		</div>
	);
}
