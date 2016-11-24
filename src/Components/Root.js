import React from 'react';
import Header from './Header/Header';
import Navigation from './Header/Navigation';
import Panel from './Header/Panel';
import DashBoard from './DashBoard/DashBoard';

export default class Root extends React.Component{
      render() {
        return (
        	<div>
	            <Header>
		            <Navigation>
		            {"Casa Vida"}
		            </Navigation>
		            <Panel />
	            </Header>
				<DashBoard />
            </div>
          );
      }
    }