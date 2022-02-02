import React, { useState } from "react";
import "../../styles/main.css";

const Main = () => {
	const [contador, setContador] = useState("");

	return (
		<>
			<div className="back">
				<div className="wrap">
					<div className="icon">
						<img src="https://img.icons8.com/material-outlined/120/000000/clock--v1.png" />
					</div>
					<div className="counter"></div>
				</div>
			</div>
		</>
	);
};

export default Main;
