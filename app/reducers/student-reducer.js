import axios from 'axios';

const INITIALIZE_STUDENTS = "INITIALIZE_STUDENTS";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const CREATE_STUDENT = "CREATE_STUDENT";

const init = students => ({type: INITIALIZE_STUDENTS, students});
const update = student => ({type: UPDATE_STUDENT, student});
const remove = id => ({type: REMOVE_STUDENT, id});
const create = student => ({type: CREATE_STUDENT, student})

const initialStudentState = {
	oneStudent: {},
	allStudents:[]
};

export default function reducer (state = initialStudentState, action){
	switch(action.type){
		case INITIALIZE_STUDENTS:
			return Object.assign({}, state, {allStudents: action.state});
		case UPDATE_STUDENT:
			state.map(student => (
				action.student.id === student.id ? action.student : student
				));
		case REMOVE_STUDENT:
			return state.filter(student => student.id !== action.id);
			//need to create a state for student that includes id
		case CREATE_STUDENT:
			return action.allStudents.concat(state);
		default:
		return state;
	}
}