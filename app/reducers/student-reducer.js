import axios from 'axios';

const INITIALIZE_STUDENTS = "INITIALIZE_STUDENTS";
const UPDATE_STUDENT = "UPDATE_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const CREATE_STUDENT = "CREATE_STUDENT";

export const initStudent = students => ({type: INITIALIZE_STUDENTS, students});
export const updateStudent = student => ({type: UPDATE_STUDENT, student});
export const removeStudent = id => ({type: REMOVE_STUDENT, id});
export const createStudent = student => ({type: CREATE_STUDENT, student})

const initialStudentState = {
	oneStudent: {},
	allStudents:[]
};

export default function reducer (state = initialStudentState, action){
	switch(action.type){
		case INITIALIZE_STUDENTS:
			return Object.assign({}, state, {allStudents: action.students});
		case UPDATE_STUDENT:
			state.allStudents.map(student => (
				action.student.id === student.id ? action.student : student
				));
		case REMOVE_STUDENT:
			return state.allStudents.filter(student => student.id !== action.id);
			//need to create a state for student that includes id
		case CREATE_STUDENT:
			return action.allStudents.concat(state);
		default:
		return state;
	}
}

export const removeAStudent = (id) => {
	return dispatch => {
		axios.delete(`/api/student/${id}`)
		.then(res => res.data)
		.then(studentData => {
			dispatch(removeStudent(studentData.id))
			hashHistory.push('/api/student')
		})
		.catch(err => console.error('Expelling student unsuccessful', err));
	};
};

export const addAStudent = (student) => {
	return dispatch => {
		axios.post('/api/student')
		.then(res => res.data)
		.then(newStudentData => dispatch(createStudent(student)))
		.catch(err => console.error('Student has died in space', err));
	};
};

export const updateAStudent = (student) => {
	return dispatch => {
		axios.put(`/api/student/${id}`)
		.then(res => res.data)
		.then(updatedStudent => dispatch(updateStudent(updatedStudent)))
		.catch(err => console.error('Updating... failed...', err));
	};
};