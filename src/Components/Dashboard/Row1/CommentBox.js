import React from "react";
import jQuery from 'jquery';
import Comment from './Comment';
import CommentForm from "./CommentForm";

export default class CommentBox extends React.Component {

  constructor(){
    super();
    this.state = {
      comments :[]
    };
  }

  componentWillMount() {
    this._fetchComments();  
  }

	render(){
    const comment = this._getComments();
		return(
      <div>
   	    <div className="card-deck subcard-border-fixed subcard-height-fixed">
   	  	  <div className="card">
     	  		<div className="card-block">
            <CommentForm />
  			    </div>
          </div>
        </div>
        {comment}
      </div>
		);
	}

  _getComments(){
    return this.state.comments.map((comment) => {  
      //Notice: ()=> Arrow functions bind to the scope of where they are defined, not where they are called
      return <Comment
               id={comment.id}
               author={comment.author}
               body={comment.body}
               time={comment.time}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />
    });
  }

  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://localhost:3000/comments',
      success: (comments) => {
        this.setState({ comments })
      }
    });
  }
}