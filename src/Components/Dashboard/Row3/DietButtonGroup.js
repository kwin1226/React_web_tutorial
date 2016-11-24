import React from "react";

export default class DietButtonGroup extends React.Component {

	render(){

		return(	

			<div className="col-sm-8 offset-sm-4 p-t-3">
				<div className="btn-group" role="group">
				  <button type="button" className="btn btn-secondary" src="#" data-meal="1" onClick={this._handleDiet.bind(this)}>早</button>
				  <button type="button" className="btn btn-secondary" src="#" data-meal="2" onClick={this._handleDiet.bind(this)}>中</button>
				  <button type="button" className="btn btn-secondary" src="#" data-meal="3" onClick={this._handleDiet.bind(this)}>晚</button>
				</div>
			</div>

		);
	}

	_handleDiet(e){
		const meal = e.target.dataset.meal;
		this.props.fetchDiets(meal);
	}
}