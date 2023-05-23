import { useAuthStore } from '../stores/auth.store.js';
import axios from "axios";
const baseUrl = 'http://localhost:8081'

export const request = {
    get (url) {
        return axios.get(baseUrl+url)
            .then(handleResponse)
    },
    async post (url, body){
        return await axios.post(baseUrl+url, body)
            .then(handleResponse)
    },
    async put (url, body){
        return await axios.put(baseUrl+url, body)
            .then(handleResponse)
    },
    async delete (url, body){
        return await axios.delete(baseUrl+url, body)
            .then(handleResponse)
    }
}

function handleResponse(response) {
    const authStore = useAuthStore();
    if (!response.ok) {
        if ([401, 403].includes(response.status) && authStore.user) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from API
            authStore.logout();
            throw error.response.data
        }
    }
    return response.data;

}

