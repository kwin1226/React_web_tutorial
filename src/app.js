import React from 'react';
import ReactDOM from 'react-dom';
import jQuery from 'jquery';
import Root from './Components/Root';

jQuery(function() {
	const app = document.getElementById('main-app');
	ReactDOM.render(<Root />, app);

	var scroll_start = 0;
	var startchange = jQuery('#startchange');
	var offset = startchange.offset();
	jQuery(document).scroll(function() { 
	   scroll_start = jQuery(this).scrollTop();
	   if(scroll_start > offset.top) {
	        jQuery('#Panel-normal').stop(true).hide();
	        jQuery('#Panel-small').stop(true).fadeIn();
	    } else {
	    	jQuery('#Panel-small').stop(true).hide();
	    	jQuery('#Panel-normal').stop(true).fadeIn();
	    }
	});
	jQuery(".svg-container").css({'background-color':'#fcfcfc'});
});