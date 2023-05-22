import {defineStore} from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";


export const useTasksStore = defineStore({
    id: 'tasks',
    state: () => ({
        tasks: [],
    }),
    actions: {
        async create (name, description, state, completed) {
            this.tasks = await request.post('/todos/create', {
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
                taskboardID:, // ?????
            })
        },
        async update (name, description, state, completed, id) {
            this.tasks = await request.put(`/todos/${id}`, { //tjek lige her
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
            })
        },
        async delete (id) {
            await request.delete(`/todos/${id}`)
        }
    }
})