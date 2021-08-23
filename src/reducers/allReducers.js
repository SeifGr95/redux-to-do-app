import addTask from './addTask';
import { combineReducers } from 'redux';
const allReducers=combineReducers({add:addTask});
export default allReducers;