'use strict'

export function employeeReducers(state = {
    employee: {}

}, action) {
    switch (action.type) {
        case 'GET_EMPLOYEES':
            return {...state, employee: {...action.payload}};
            break;

    };
    return state;
};
