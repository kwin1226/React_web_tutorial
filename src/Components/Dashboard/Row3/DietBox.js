import React from "react";
import jQuery from 'jquery';
import DietButtonGroup from "./DietButtonGroup";
import Diet from "./Diet";

export default class DietBox extends React.Component {

	constructor(){
		super();
		this.state = {
			diets :[]
		};
	}

	componentWillMount(){
		this._fetchDiets(1);
	}

	render(){

		return(	
	     <div className="card">
	       <div className="card-block">
	         <h3 className="card-title m-b-0-5">飲食</h3>
	        <div className="div-circle col-sm-8 offset-sm-4">
	           		<div className="p-t-25">
		           		<h3 className="card-text circle-text text-shadow">500cal</h3>
		           		<h3 className="card-text circle-text gray">1500cal</h3>
	           		</div>
	        </div>

			<DietButtonGroup fetchDiets={this._fetchDiets.bind(this)} />
			<Diet 
			id={this.state.diets.id}
			meal={this.state.diets.meal}
			cal={this.state.diets.cal}
			description={this.state.diets.description}
			imgUrl={this.state.diets.imgUrl}
			key={this.state.diets.id} />

	       </div>
	     </div>
		);
	}

	_fetchDiets(dietID){
		const url = 'http://localhost:3000/diets/' + dietID;
		jQuery.ajax({
		  method: 'GET',
		  url: url,
		  success: (diets) => {
		  	this.setState({ diets });
		  }
		});
	}
	
}