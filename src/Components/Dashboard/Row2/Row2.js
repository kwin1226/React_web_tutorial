import React from "react";
import StepCountsBox from "./StepCountsBox";
import HeartRateBox from "./HeartRateBox";

export default class Row2 extends React.Component {

	render(){

		return(	
			<div className="card-deck">
				<StepCountsBox />
				<HeartRateBox />
		   </div>
		);
	}
}