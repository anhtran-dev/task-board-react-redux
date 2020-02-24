import {CHANGE_MODAL_CONTENT, CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL} from "../constants/modal";


let initialState = {
    showModal : false,
    title : '',
    component : null
};
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL : {
            return {
                ...state,
                showModal:  true
            }

        }
        case HIDE_MODAL : {
            return {
                ...state,
                showModal: false
            }
        }
        case CHANGE_MODAL_TITLE : {
            return {
                ...state,
                title: action.payload.title
            }
        }
        case CHANGE_MODAL_CONTENT : {
            return {
                ...state,
                component: action.payload.component
            }
        }
        default : return state;
    }
};

export default modalReducer;