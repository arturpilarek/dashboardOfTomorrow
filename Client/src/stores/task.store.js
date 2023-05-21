import { defineStore } from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";


export const useTaskStore = defineStore({
    id: 'task',
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks'))
    }),
    actions: {
        async create (name, description, state, completed) {
            const task = await request.post('/todos/create', {
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
                taskboardID: , // ?????
            })
            this.task = task
            localStorage.setItem('task', JSON.stringify(task))
        },
        async update (name, description, state, completed, id) {
            const task = await request.put(`/todos/${id}`, { //tjek lige her
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
            })
            this.task = task
            localStorage.setItem('task', JSON.stringify(task))
        },
        async delete (id) {
            await request.delete(`/todos/${id}`)
        }
    }
})