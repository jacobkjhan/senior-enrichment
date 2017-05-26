import React, {Component} from 'react';
import SidebarContainer from '../containers/SidebarContainer';


export default function App ({children}){
	console.log(children);
	return (
		<div id="app" className="container-fluid">
		<SidebarContainer />
	      <div className="col-xs-2">
	      </div>
	      <div className="col-xs-10">
	        { children }
	      </div>
	    </div>
	)
}