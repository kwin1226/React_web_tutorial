import React from "react";

export default class HeartRateBox extends React.Component {

	render(){
		return(
        <div className="card">
             <div className="card-block">
               <h3 className="card-title">心率</h3>
                <iframe height="350" scrolling="no" className="full-width iframeStyle" src="https://plot.ly/~j2315807/14/"></iframe>
             </div>
        </div>
		);
	}
}