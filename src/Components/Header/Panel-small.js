import React from 'react';

export default class PanelSmall extends React.Component{

	render(){
		return(
       <div id="Panel-small" className="row sub-nav-p sub-nav-yellow hide">
         <div className="col-sm-2">
             <img className="img-small2 img-float-l" src="img/head_male.png" alt="王威力" />
             <h5 className="p-t-3 img-float-l">王威力</h5>
             <div className="p-t-4"><span className="alert-icon text-small">注意</span></div>
         </div>
         <div className="col-sm-10 no-padding">
           <div className="col-sm-1 no-padding">
             
           </div>
           <div className="col-sm-2 text-center p-t-0-8 no-line-height">
             <p className="p-l-11">今日睡眠 3H<span className="p-l-8"><img src="img/cross.png" className="img-icon-middle" /></span></p>

           </div>
           <div className="col-sm-3 text-center p-t-0-8 no-line-height border-black">
             <p className="p-l-6">今日步數 4346<span className="p-l-8"><img src="img/check.png" className="img-icon-middle" /></span></p>

           </div>
           <div className="col-sm-2 text-center p-t-0-8 no-line-height">
             <p className="p-l-11">本小時步數 57<span className="p-l-8"><img src="img/cross.png" className="img-icon-middle" /></span></p>

           </div>
           <div className="col-sm-3 p-l-5 p-t-0-7">
            <h5>2016.11.17 (三)</h5>
           </div>
         </div>
       </div>
        );
	}
}


