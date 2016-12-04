import { combineReducers } from 'redux';
import jobs from '../modules/jobs/jobs.reducer';

const rootReducer = combineReducers({
	jobs
});

export default rootReducer;
