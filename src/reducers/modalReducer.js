const initialState = {
    show: false,
    modalData: {}
};

export function modalReducer (state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return {
                ...state,
                show: action.payload.show,
                modalData: action.payload.modalData
            };
        case 'HIDE_MODAL':
            return initialState;
        default:
            return state;
    }
}
