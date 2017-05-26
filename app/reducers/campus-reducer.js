import axios from 'axios';

const INITIALIZE_CAMPUS = "INITIALIZE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const REMOVE_CAMPUS = "DELETE_CAMPUS";
const CREATE_CAMPUS = "CREATE_CAMPUS";

export const initCampus = campuses => ({type: INITIALIZE_CAMPUS, campuses});
export const updateCampus = campus => ({type: UPDATE_CAMPUS, campus});
export const removeCampus = id => ({type: REMOVE_CAMPUS, id});
export const createCampus = campus => ({type: CREATE_CAMPUS, campus})

const initialCampusState = {
	oneCampus: {},
	allCampuses:[]
};

export default function reducer (state = initialCampusState, action){
	switch(action.type){
		case INITIALIZE_CAMPUS:
			return Object.assign({}, state, {allCampuses: action.campuses});
		case UPDATE_CAMPUS:
			state.allCampuses.map(campus => (
				action.campus.id === campus.id ? action.campus : campus
				));
		case REMOVE_CAMPUS:
			return state.allCampuses.filter(campus => campus.id !== action.id);
			//need to create a state for campus that includes id
		case CREATE_CAMPUS:
			return Object.assign({}, state, {allCampuses: action.allCampuses.concat(state.allCampuses)});
																		
		default:
		return state;
	}
}

//write async axios
export const initCampuses = () => 
	dispatch => {
		axios.get('/api/campus')
		.then(res => dispatch(init(res.data)))
		.catch(err => console.error('Initializing campuses unsuccessful', err));
};

export const removeACampus = (id) => 
	dispatch => {
		axios.delete(`/api/campus/${id}`)
		.then(res => res.data)
		.then(campusData => dispatch(removeCampus(campusData.id)))
		.catch(err => console.error('Removing campus unsuccessful', err));
};

export const addACampus = (campus) => 
	dispatch => {
		axios.post('/api/campus', {campus})
		.then(res => res.data)
		.then(newCampusData => dispatch(createCampus(newCampusData)))
		.catch(err => console.error('Adding campus unsuccessful', err));
};

export const updateACampus = (campus) => 
	dispatch => {
		axios.put(`/api/campus/${id}`)
		.then(res => res.data)
		.then(updatedCampus => dispatch(updateCampus(updatedCampus)))
		.catch(err => console.error('Updating campus unsuccessful', err));
};
