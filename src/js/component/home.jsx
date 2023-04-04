import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor]=useState("")

	return (
		<div className="container fluid d-flex justify-content-center">

			<div className="trafic-light d-flex flex-column py-3 align-items-center rounded">

				<div onClick={()=>setColor("red")} className= {`${color=="red"?"glow":""} red rounded-circle`}></div>

				<div onClick={()=>setColor("yellow")} className= {`${color=="yellow"?"glow":""} yellow rounded-circle my-3`}></div>

				<div onClick={()=>setColor("green")} className= {`${color=="green"?"glow":""} green rounded-circle`}></div>

			</div>
			
		</div>
		

	);
};

export default Home;
