// eslint-disable-next-line no-unused-vars
import axios from "axios";
class callApi {
    constructor() {
        let instance;
        instance = axios.create();
        instance.interceptors.response.use(this.handleSuccess,this.handleError);
        this.instance = instance;

    }
    handleSuccess(response){
        return response;
    }
    handleError(error){
        return Promise.reject(error);
    }
    get(url) {
        return this.instance.get(url);
    }
    post(url,data){
        return this.instance.post(url,data);
    }
    delete(url){
        return this.instance.delete(url);
    }
}
export default new callApi();