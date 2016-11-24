import React from "react";
import PhysicalBox from "./PhysicalBox";
import DietBox from "./DietBox";

export default class Row3 extends React.Component {

	render(){
		return(	
	   	<div className="card-deck">
			<PhysicalBox />
			<DietBox />
	   </div>
		);
	}
}