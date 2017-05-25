'use strict'
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import axios from 'axios';
import store from './store';
import Root from './components/Root';
import App from './components/App';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import SidebarContainer from './containers/SidebarContainer';
import StudentsContainer from './containers/StudentsContainer';
import StudentContainer from './containers/StudentContainer';

const onAppEnter = () => {
  const campuses = axios.get('/api/campus');
  const students = axios.get('/api/student');

  return Promise.all([campuses,students])
  .then(res => res.map(r => r.data))
  .then(([campuses, students]) => {
    store.dispatch()
    store.dispatch()
  })
}

render (
  <Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<Route path="/campus" component={Campuses} />
  			<Route path="/campus/:campusId" component={Campus} />
  			<Route path="/student" component={Students} />
  			<Route path="/student/:studentId" component={Student} /> 
  		</Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
