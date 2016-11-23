import React from "react";
import jQuery from 'jquery';
import Comment from './Comment';
import CommentForm from "./CommentForm";

export default class CommentBox extends React.Component {

  constructor(){
    super();
    this.state = {
      comments :[],
      comments_num :0
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
            <CommentForm addComment={this._addComment.bind(this)} />
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
      return ( this._getCommentHead(comment, this.state.comments_num) );
    });
  }

  _getCommentHead(comment, commentCount){  
    //The last comment component doesn't need "subcard-height-fixed" class to fix padding-bottom
    if(comment.id === commentCount){
      return (
            <div className="card-deck subcard-border-fixed" key={comment.id}>
              <Comment
               id={comment.id}
               author={comment.author}
               body={comment.body}
               time={comment.time}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />
            </div>
        );
    }else{
      return (
            <div className="card-deck subcard-border-fixed subcard-height-fixed" key={comment.id}>
              <Comment
               id={comment.id}
               author={comment.author}
               body={comment.body}
               time={comment.time}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />
            </div>
        );
    }
  }

  _addComment(commentAuthor, commentBody, commentTime) {

    const comment = {
      id: this.state.comments.length + 1,
      author: commentAuthor,
      body: commentBody,
      time: commentTime,
      avatarUrl: 'img/head_1.jpg'
    };

    this.setState({
      comments: this.state.comments.concat([comment])
    });

    this.setState({
      comments_num: this.state.comments.length + 1
    });
  }

  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: 'http://localhost:3000/comments',
      success: (comments) => {
        const n = comments.length;
        this.setState({ comments });
        this.setState({'comments_num':n});
      }
    });
  }
}