import React from "react";
import CommentBox from "./CommentBox";
import SleepHours from "./SleepHours";


export default class Row1 extends React.Component {

	render(){
		return(
   	   <div className="card-deck">
         	<CommentBox />
            <SleepHours />
   	   </div>
		);
	}
}