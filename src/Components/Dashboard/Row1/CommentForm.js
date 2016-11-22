import React from "react";

export default class CommentForm extends React.Component {

	render(){
		return(
 			<form>
        <textarea className="form-control textarea" id="comment" placeholder="新增紀錄..."></textarea>
  			<hr className="m-t-4px" />
  			<div className="btn-comment-submit">
  				<input type="submit" name="" value="上傳" className="btn btn-submit" />
  			</div>
      </form>
		);
	}
}