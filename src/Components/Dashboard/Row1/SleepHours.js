import React from "react";

export default class SleepHours extends React.Component {

	render(){
		return(
   	     <div className="card">
   	       <div className="card-block">
   	         <h3 className="card-title float-l">睡眠</h3>
   	         <div className="text-right p-t-1">
   	         	<span className="purple">11月17日 (四) </span>
   	         	<div className="btn-group p-l-3" role="group">
   	         	  <button type="button" className="btn btn-secondary" src="#">日</button>
   	         	  <button type="button" className="btn btn-secondary" src="#">週</button>
   	         	  <button type="button" className="btn btn-secondary" src="#">月</button>
   	         	</div>
   	         </div>
   	         <iframe height="350" scrolling="no" className="full-width iframeStyle" src="https://plot.ly/~j2315807/6/?share_key=aSBhbWb0Xt3prIx57E59Ja"></iframe>
   	       </div>
   	     </div>
		);
	}
}