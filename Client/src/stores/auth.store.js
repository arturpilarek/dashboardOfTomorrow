import { defineStore } from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";
import { useTasksStore, useTeamsStore, useBoardsStore } from '@/stores';


export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    // initialize state from local storage to enable user to stay logged in
    user: JSON.parse(localStorage.getItem('user')),
  }),
  actions: {
    async login(email, password) {
      const user = await request.post('/login', {email: email, password: password})

      // update pinia state
      this.user = user;

      // store user details and jwt in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))

      useTasksStore()

    },

    logout (){
      this.user = null;
      localStorage.removeItem('user')
    },

    async register (email, password, firstName, lastName) {
      const user = await request.post('/register', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    },

    async update (email, password, firstName, lastName) {
      const user = await request.put(`/updateUser/${this.user.id}`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      })
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user))
    }
  }
})