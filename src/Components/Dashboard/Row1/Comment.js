import React from "react";

export default class Comment extends React.Component {


	render(){
		return(

  	    <div className="card">
  	  		<div className="card-block">
   			    <img className="img-float-l img-tiny img-circle" src={this.props.avatarUrl} />
         		<div className="p-t-3">
           		<p className="card-text">{this.props.body}</p>
            	<p className="card-text text-right "><small className="text-muted">{this.props.author} 於 {this.props.time} 紀錄</small></p>
          	</div>
  	     </div>
        </div>

		);
	}

}