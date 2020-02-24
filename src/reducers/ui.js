import {GLOBAL_HIDE_LOADING, GLOBAL_SHOW_LOADING} from "../constants/ui";

let initialState = {
    showLoading : false,
};
const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBAL_SHOW_LOADING : {
            return {
                ...state,
                showLoading: true
            }
        }
        //
        case GLOBAL_HIDE_LOADING : {
            return {
                ...state,
                showLoading: false
            }
        }
        //
        default : return state;
    }
};

export default uiReducer;