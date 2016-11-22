import React from "react";
import CommentBox from "./CommentBox";
import SleepHoursBox from "./SleepHoursBox";


export default class Row1 extends React.Component {

	render(){
		return(
   	   <div className="card-deck">
         	<CommentBox />
            <SleepHoursBox />
   	   </div>
		);
	}
}