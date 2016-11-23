import React from "react";

export default class Header extends React.Component {

	render(){
        return <header className="navbar-fixed-top">{this.props.children}</header>;
	}
}