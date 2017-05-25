import { combineReducers } from 'redux';
import campus from './campus-reducer';
import student from './student-reducer';

export default combineReducers({campus, student});