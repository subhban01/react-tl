export const showModal = (show, modalData) => ({
    type: 'SHOW_MODAL',
    payload: {
        show,
        modalData
    }
});

export const hideModal = () => ({
    type: 'HIDE_MODAL'
});