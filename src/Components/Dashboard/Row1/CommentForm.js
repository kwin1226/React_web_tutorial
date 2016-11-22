import React from 'react';
import Moment from 'moment';

export default class CommentForm extends React.Component {

	render(){
		return(
 			<form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
        <textarea className="form-control textarea" id="comment" placeholder="新增紀錄..." ref={(textarea) => this._body = textarea}></textarea>
  			<hr className="m-t-4px" />
  			<div className="btn-comment-submit">
  				<input type="submit" name="" value="上傳" className="btn btn-submit" />
  			</div>
      </form>
		);
	}

  _handleSubmit(event) {
    event.preventDefault();

    const cur_date = Moment().format('YYYY.MM.DD');
    const cur_time = Moment().format('hh:mm');
    const _time = cur_date + " " + cur_time;
    const _author = '小美';

    this.props.addComment(_author, this._body.value, _time);

    this._body.value = '';
  }
}