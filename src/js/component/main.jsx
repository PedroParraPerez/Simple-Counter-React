import React, { useEffect, useState } from "react";
import "../../styles/main.css";

const Main = () => {
	const [seconds, setSeconds] = useState(0);
	const [decseconds, setDecseconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [decminutes, setDecminutes] = useState(0);

	useEffect(() => {
		//Se ejecuta la función cada segundo y se suma uno a seconds
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
	}, []);

	return (
		<>
			<div className="back">
				<div className="wrap">
					<div className="icon">
						<img src="https://img.icons8.com/material-outlined/120/000000/clock--v1.png" />
					</div>
					{/* Decenas de horas */}
					<div className="time">{}</div>
					{/* Horas */}
					<div className="time">{}</div>
					{/* Decenas de minutos */}
					<div className="time">{Math.floor(seconds / 600)}</div>
					{/* Minutos */}
					<div className="time">{Math.floor(seconds / 60)}</div>
					{/* Decenas de segundos */}
					<div className="time">{Math.floor(seconds / 10)}</div>
					{/* Segundos */}
					<div className="time">{Math.floor(seconds)}</div>
				</div>
			</div>
		</>
	);
};

export default Main;
