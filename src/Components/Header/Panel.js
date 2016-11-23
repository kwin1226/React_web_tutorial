import React from 'react';
import PanelSmall from './Panel-small';

export default class Panel extends React.Component{

	render(){
		return(
      <div>
       <div id="Panel-normal" className="row sub-nav-p sub-nav-yellow">
         <div className="col-sm-1 pull-left">
             <img className="img-large" src="img/head_male.png" alt="王威力" />
         </div>
         <div className="col-sm-11 no-padding">
           <div className="col-sm-2 no-padding">
             <div className="p-t-3">
               <h3>王威力 <span className="alert-icon text-small">注意</span></h3>
               <p className="no-line-height text-small gray"><span>68歲 0989051144</span></p>
               <p className="no-line-height text-small gray"><span>2016.03.05</span></p>
             </div>
           </div>
           <div className="col-sm-2 text-center">
             <p className="p-l-11">今日睡眠<span className="p-l-8"><img src="img/cross.png" className="img-icon-small" /></span></p>
             <h3>3H</h3>
           </div>
           <div className="col-sm-3 text-center border-black">
             <p className="p-l-11">今日步數<span className="p-l-8"><img src="img/check.png" className="img-icon-small" /></span></p>
             <h3>4346</h3>
           </div>
           <div className="col-sm-2 text-center">
             <p className="p-l-11">本小時步數<span className="p-l-8"><img src="img/cross.png" className="img-icon-small" /></span></p>
             <h3>57</h3>

           </div>
           <div className="col-sm-1"></div>
           <div className="col-sm-2 p-l-3 p-r-3 p-t-0-7">
             <button className="full-width btn-block text-middle">查看健檢資料</button>
             <button className="full-width btn-block text-middle">個人資料</button>
           </div>
         </div>
       </div>

        <PanelSmall />

      </div>
        );
	}
}


