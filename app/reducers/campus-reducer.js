import axios from 'axios';

const INITIALIZE_CAMPUS = "INITIALIZE_CAMPUS";
const UPDATE_CAMPUS = "UPDATE_CAMPUS";
const REMOVE_CAMPUS = "DELETE_CAMPUS";
const CREATE_CAMPUS = "CREATE_CAMPUS";

const init = campuses => ({type: INITIALIZE_CAMPUS, campuses});
const update = campus => ({type: UPDATE_CAMPUS, campus});
const remove = id => ({type: REMOVE_CAMPUS, id});
const create = campus => ({type: CREATE_CAMPUS, campus})

const initialCampusState = {
	oneCampus: {},
	allCampuses:[]
};

export default function reducer (state = initialCampusState, action){
	switch(action.type){
		case INITIALIZE_CAMPUS:
			return Object.assign({}, state, {allCampuses: action.campus});
		case UPDATE_CAMPUS:
			state.map(campus => (
				action.campus.id === campus.id ? action.campus : campus
				));
		case REMOVE_CAMPUS:
			return state.filter(campus => campus.id !== action.id);
			//need to create a state for campus that includes id
		case CREATE_CAMPUS:
			return Object.assign({}, state, {allCampuses: action.allCampuses.concat(state)});
																		//maybe state.state
		default:
		return state;
	}
}

//write async axios
export const initCampuses = () => dispatch => {
	axios.get('/api/campus')
	.then(res => dispatch(init(res.data)))
	.catch(err => console.error('Initializing campuses unsuccessful', err));
}
