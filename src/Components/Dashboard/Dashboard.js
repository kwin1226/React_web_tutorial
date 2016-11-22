import React from "react";
import DatePicker from "./DatePicker/DatePicker";
import Row1 from "./Row1/Row1";
import Row2 from "./Row2/Row2";

export default class Dashboard extends React.Component {

	render(){
		return(	
			<div id="card-container">
				<DatePicker />
				<Row1 />
				<Row2 />
			</div>
		);
	}
}