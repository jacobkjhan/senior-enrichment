import React from 'react';
import {Link} from 'react-router';

export default function Sidebar (props){
	return(
		<nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand">Pila llena Intergaláctica</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/campus">Campuses</Link></li>
              <li ><Link to="/students">Students</Link></li>
            </ul>
          </div>
        </nav>
	);
}

//link to students
//link to home