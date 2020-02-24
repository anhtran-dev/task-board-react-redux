import {GLOBAL_HIDE_LOADING, GLOBAL_SHOW_LOADING} from "../constants/ui";

export const showLoading = () => {
    return {
        type : GLOBAL_SHOW_LOADING
    }
};

export const hideLoading = () => {
    return {
        type : GLOBAL_HIDE_LOADING
    }
};