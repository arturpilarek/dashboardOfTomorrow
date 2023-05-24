import {defineStore} from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";


export const useTeamsStore = defineStore({
    id: 'teams',
    state: () => ({
        teams: {},
    }),
    actions: {
        async create (name, description) {
            this.teams = await request.post('/teams/create', {
                teamName: name,
                teamDescription: description,
            })
        },
        async update (name, tasks, member, id) {
            this.teams = await request.put(`/teams/${id}`, {
                teamName: name,
                teamDescription: tasks,
                teamMember: member
            })
        },
        async delete (id) {
            await request.delete(`/teams/${id}`)
        }
    }
})
