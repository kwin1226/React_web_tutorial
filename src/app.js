import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import App from './Components/App';

jQuery(function() {
	const app = document.getElementById('main-app');
	ReactDOM.render(
    	<App />, app);
});