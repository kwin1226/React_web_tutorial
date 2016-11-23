import React from "react";
import DatePicker from "./DatePicker/DatePicker";
import Row1 from "./Row1/Row1";
import Row2 from "./Row2/Row2";
import Row3 from "./Row3/Row3";

export default class Dashboard extends React.Component {

	render(){
		return(	
			<div id="card-container" className="p-t-12">
				{/*<DatePicker />*/}
				<Row1 />
				<Row2 />
				<Row3 />
			</div>
		);
	}
}