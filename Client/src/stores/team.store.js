import { defineStore } from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";


export const useTeamStore = defineStore({
    id: 'team',
    state: () => ({
        team: JSON.parse(localStorage.getItem('team'))
    }),
    actions: {
        async create (name, description) {
            const team = await request.post('/teams/create', {
                teamName: name,
                teamDescription: description,
            })
            this.team = team
            localStorage.setItem('team', JSON.stringify(team))
        },
        async update (name, tasks, member, id) {
            const team = await request.put(`/teams/${id}`, {
                teamName: name,
                teamDescription: tasks,
                teamMember: member
            })
            this.team = team
            localStorage.setItem('team', JSON.stringify(team))
        },
        async delete (id) {
            await request.delete(`/teams/${id}`)
        }
    }
})