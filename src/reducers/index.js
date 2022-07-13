import changeClassReducer from "./changeClass";
import {combineReducers} from 'redux';

const allReducers=combineReducers({
    change:changeClassReducer,
})

export default allReducers;