import { useAuthStore } from '@/stores';
import axios from "axios";
const baseUrl = 'http://localhost:8081'

export const request = {
    get (url) {
        return axios.get(baseUrl+url)
    },
    post (url, body){
        return axios.post(baseUrl+url, body)
            .then(handleResponse)
    },
    put (url, body){
        return axios.put(baseUrl+url, body)
            .then(handleResponse)
    },
    delete (url, body){
        return axios.delete(baseUrl+url, body)
            .then(handleResponse)
    }
}

function handleResponse (response){
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                logout ();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
}

