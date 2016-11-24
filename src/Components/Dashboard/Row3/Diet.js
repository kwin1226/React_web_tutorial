import React from "react";

export default class Diet extends React.Component {

	render(){
		
		return(	

			<div className="row row-demo row-same-height col-sm-12 p-t-3">
			    <div className="col-xs-5 no-padding align-right">
			      <img src={this.props.imgUrl} alt="breakfast" className="rounded img-full border-default" />
			    </div>
			    <div className="col-xs-2 border-default text-line-height">
			      <div className="p-t-75px text-center text-middle">
				      <p>{this.props.meal}</p>
				      <p>{this.props.cal}cal</p>
				  </div>
			    </div>
			    <div className="col-xs-5 border-default">
					<div className="d-table">
			    	  <p className="text-middle v-center">{this.props.description}</p>
			    	</div>
			    </div>
			  </div>

		);
	}
}