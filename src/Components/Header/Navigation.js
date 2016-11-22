import React from 'react';

export default class Navigation extends React.Component{

	render(){
		return(
       <nav className="navbar navbar-brown">
          <a className="navbar-brand" href="#">{this.props.children}</a>
          
          <form className="form-inline float-xs-right">
            <div className="input-group"> 
              <input id="search_keyword" type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button id="search_bt" className="btn btn-default" type="button">Search</button>
              </span>
            </div>
          </form>
        </nav>
        );
	}
}


