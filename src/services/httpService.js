import axios from 'axios';
import { toast } from 'react-toastify';

axios.interceptors.response.use(null, error => {
    const expectedError = error.response.status && error.response.status < 500 && error.response.status >= 400;
    if(!expectedError){
        toast.error('An unexpected error has occurred.');
    }

    return Promise.reject(error);
});

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete
}