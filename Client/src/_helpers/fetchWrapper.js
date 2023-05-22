import { useAuthStore } from '@/stores';
import axios from "axios";
const baseUrl = 'http://localhost:8081'

export const request = {
    get (url) {
        return axios.get(baseUrl+url)
            .then(handleResponse)
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
            const authStore = useAuthStore();
            if ([401, 403].includes(response.status) && authStore.user) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                authStore.logout ();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    })
}

