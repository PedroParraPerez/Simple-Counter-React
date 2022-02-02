import React, { useEffect, useState } from "react";
import "../../styles/main.css";

const Main = () => {
	const [seconds, setSeconds] = useState(0);

	setInterval(() => {
		{
			console.log("hola");
		}
	}, 1000);

	return (
		<>
			<div className="back">
				<div className="wrap">
					<div className="icon">
						<img src="https://img.icons8.com/material-outlined/120/000000/clock--v1.png" />
					</div>
					<div className="secounds">{seconds}</div>
				</div>
			</div>
		</>
	);
};

export default Main;
