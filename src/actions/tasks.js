import {getAllRequest} from "../apis/tasks";
import {GET_ALL} from "../constants/tasks/actionTypes";

export const getListTask = () => {
    let listTasks =  getAllRequest()
        .then(res => res.data)
        .catch(error => {
            console.log(error);
    });
    return  {
        type : GET_ALL,
        payload : listTasks
    };
};