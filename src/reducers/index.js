'use strict'

import {combineReducers} from 'redux';

//HERE IMPORT REDUCERS TO BE COMBINED.

import {employeeReducers} from './employeeReducers';
import {modalReducer} from './modalReducer';

export default combineReducers({
    employee: employeeReducers,
    modal: modalReducer
});