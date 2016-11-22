import React from "react";

export default class Row2 extends React.Component {

	render(){

		return(	
		<div>	
			<div className="card-deck">
		     <div className="card">
	   	  	   <div className="card-block">
	     		  <h3 className="card-title float-l">步數</h3>
	     		  <div className="text-right p-t-1">
	     		  	<span className="purple">11月17日 (四) </span>
	     		  	<div className="btn-group p-l-3" role="group">
	     		  	  <button type="button" className="btn btn-secondary" src="#">日</button>
	     		  	  <button type="button" className="btn btn-secondary" src="#">週</button>
	     		  	  <button type="button" className="btn btn-secondary" src="#">月</button>
	     		  	</div>
	     		  </div>
	     		  <div>
	     		  	<span>This is a pen.</span>
	     		  </div>
	     		  <div className="height-300px"></div>
			   </div>
		     </div>
		     <div className="card">
		       <div className="card-block">
		         <h3 className="card-title">心率</h3>
		         <p className="card-text">This is an apple.</p>
		       </div>
		     </div>
		   </div>

		   	<div className="card-deck">
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
		     <div className="card">
		       <div className="card-block">
		         <h3 className="card-title m-b-0-5">飲食</h3>
		        <div className="div-circle col-sm-8 offset-sm-4">
		           		<div className="p-t-25">
			           		<h3 className="card-text circle-text text-shadow">500cal</h3>
			           		<h3 className="card-text circle-text gray">1500cal</h3>
		           		</div>
		        </div>
				<div className="col-sm-8 offset-sm-4 p-t-3">
					<div className="btn-group" role="group">
					  <button type="button" className="btn btn-secondary" src="#">日</button>
					  <button type="button" className="btn btn-secondary" src="#">週</button>
					  <button type="button" className="btn btn-secondary" src="#">月</button>
					</div>
				</div>
		
				<div className="row row-demo row-same-height col-sm-12 p-t-3">
				    <div className="col-xs-5 no-padding align-right">
				      <img src="img/meal_breakfast.png" alt="breakfast" className="rounded img-full border-default" />
				    </div>
				    <div className="col-xs-2 border-default text-line-height">
				      <div className="p-t-75px text-center">
					      <p>早餐</p>
					      <p>500cal</p>
					  </div>
				    </div>
				    <div className="col-xs-5 border-default">
				      <p className="p-t-25">蘋果牛奶麥片 (低脂奶1杯240c.c、蘋果半個、麥片20g)吐司包蛋 (白吐司1片、蛋1個、植物油5g)</p>
				    </div>
				  </div>
		       </div>
		     </div>
		   </div>
		</div>
		);
	}
}