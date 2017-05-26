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
import {initCampus} from './reducers/campus-reducer';
import {initStudent} from './reducers/student-reducer';
// import bootstrap from 'bootstrap';

const onAppEnter = () => {
  const campuses = axios.get('/api/campus');
  const students = axios.get('/api/student');

  return Promise.all([campuses,students])
  .then(res => res.map(r => r.data))
  .then(([campuses, students]) => {
    store.dispatch(initCampus(campuses));
    store.dispatch(initStudent(students));
  });
};

render (
  <Provider store={store}>
  	<Router history={hashHistory}>
  		<Route path="/" component={App} onEnter={onAppEnter}>
        <IndexRedirect to='/campus' />
  			<Route path="/campus" component={CampusesContainer} />
  			<Route path="/campus/:campusId" component={CampusContainer} />
  			<Route path="/students" component={StudentsContainer} />
  			{/*<Route path="/students/:studentId" component={StudentContainer} /> */}
  		</Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
