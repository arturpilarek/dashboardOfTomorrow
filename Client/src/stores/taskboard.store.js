import { defineStore } from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";


export const useBoardStore = defineStore({
    id: 'boars',
    state: () => ({
        board: JSON.parse(localStorage.getItem('board'))
    }),
    actions: {
        async create (name, tasks) {
            const board = await request.post('/taskboards/create', {
                taskboardName: name,
                taskboardTasks: tasks,
            })
            this.board = board
            localStorage.setItem('board', JSON.stringify(board))
        },
        async update (name, tasks, id) {
            const board = await request.put(`/taskboards/${id}`, {
                taskboardName: name,
                taskboardTasks: tasks,
            })
            this.board = board
            localStorage.setItem('board', JSON.stringify(board))
        },
        async delete (id) {
            await request.delete(`/taskboards/${id}`)
        }
    }
})