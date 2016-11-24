import React from "react";

export default class PhysicalBox extends React.Component {

	render(){

		return(	
	   	<div>
			<div className="card-deck subcard-border-fixed subcard-height-fixed">
      	  	  <div className="card">
      	  		<div className="card-block">
					   <h3 className="card-title">血壓
					   	<img src="img/check.png" className="img-middle float-r" alt="正常" />
					   </h3>
			           <h4 className="card-text text-center">收縮壓</h4>
			           <h4 className="card-text text-center">110mmHg</h4>
			           <hr />
			           <h4 className="card-text text-center">舒張壓</h4>
			           <h4 className="card-text text-center">78mmHg</h4>
				</div>
			  </div>
			  <div className="card">
      	  		<div className="card-block">
		       		   <h3 className="card-title">血糖
					   	<img src="img/cross.png" className="img-middle float-r" alt="警告" />
					   </h3>
		   	           <h3 className="card-text text-center red text-shadow">126</h3>
		   	           <h4>&nbsp;</h4>
		   	           <h4 className="card-text text-center">mg/dl</h4>
				</div>
			  </div>
           	</div>
           	<div className="card-deck subcard-border-fixed">
      	  	  <div className="card">
      	  		<div className="card-block">
		  	  		    <h3 className="card-title">體重
					   	<img src="img/cross.png" className="img-middle float-r" alt="警告" />
					   </h3>
			           <h4 className="card-text text-center">目前</h4>
			           <h3 className="card-text text-center text-shadow red">80kg</h3>
			           <h4 className="card-text text-center">距離目標還有</h4>
			           <h3 className="card-text text-center text-shadow red">-16kg</h3>
	            	</div>
				</div>
				<div className="card">
      	  		<div className="card-block">
		    			<h3 className="card-title">卡路里消耗
					   	<img src="img/check.png" className="img-middle float-r" alt="正常" />
					   </h3>
	           			<div className="div-circle col-sm-8 offset-sm-2">
	           			<div className="p-t-25">
		           		<h3 className="card-text circle-text text-shadow">2345cal</h3>
		           		<h3 className="card-text circle-text gray">2000cal</h3>
	            	</div>
				</div>
			  </div>
           	</div>
           </div>
	   </div>
		);
	}
}