import React from "react";
import Card from "./card";

export function Cards() {
	return (
		<div>
			<div className="row">
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
				<div className="col-3">
					<Card />
				</div>
			</div>
		</div>
	);
}
