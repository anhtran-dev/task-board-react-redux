import {CHANGE_MODAL_TITLE, HIDE_MODAL, SHOW_MODAL} from "../constants/modal";

export const showModal = () => {
    return {
        type : SHOW_MODAL,

    }
};

export const hideModal = () => {
      return{
          type : HIDE_MODAL
      }
};

export const changeTitleModal = (title) => {
    return {
        type : CHANGE_MODAL_TITLE,
        payload : {
            title
        }
    }
};
export const changeContentModal = (component) => {
    return {
        type : CHANGE_MODAL_TITLE,
        payload : {
            component
        }

    }
};