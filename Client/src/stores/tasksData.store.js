import {defineStore} from 'pinia'
import {request} from "../_helpers/fetchWrapper.js";

export const useTaskDataStore = defineStore({
    id: 'teams',
    state: () => ({
        boards: [],
        teams: []
    }),
    getters: {
        getBoards() {
            return this.boards
        }
    },
    actions: {
        //get all actions
        async getAll () {
            const data = await request.get(`/fetchAll/user1`)

            this.boards = data.taskboards
            this.teams = data.teams
            
            console.log(this.boards)
            console.log(this.teams)
        },
        async getAllTeams (){
            this.teams = await request.get(`/fetchAllTeams/user1`)
        },
        async getAllPrivateBoards () {
            this.boards = await request.get(`/fetchAllPrivateBoards/user1`)
        },

        //teams actions
        async createTeam (name, description) {
            await request.post('/teams/create', {
                teamName: name,
                teamDescription: description,
                userID: user.userID
            })
            await this.getAllTeams()
        },
        async updateTeam (name, description, members, teamId) {
            const updatedTeam = await request.put(`/teams/${teamId}`, {
                teamName: name,
                teamDescription: description,
                teamMember: members
            })
            await this.getAllTeams()
        },
        async addUserToTeam (userId, teamId){
            await request.post(`/teams/addToTeam/${teamId}`, {
                userID: userId
            })
            await this.getAllTeams()
        },
        async removeUserFromTeam (userId, teamId){
            await request.post(`/teams/removeUserFromTeam/${teamId}`, {
                userID: userId
            })
            await this.getAllTeams()
        },
        async deleteTeam (teamId) {
            await request.delete(`/teams/${teamId}`)
            await this.getAllTeams()
        },

        // boards actions
        async createBoard (name, teamID) {
            const newBoard = await request.post('/taskboards/create', {
                taskboardName: name,
                teamID: teamID,
                userID: user.userID
            })

            if (teamID) {
                return this.getAllTeams()
            }
            await this.getAllPrivateBoards()
        },
        async updateBoard (name, boardID) {
            await request.put(`/taskboards/${boardID}`, {
                taskboardName: name,
            })
            await this.getAll()
        },
        async deleteBoard (boardID) {
            await request.delete(`/taskboards/${boardID}`)
            await this.getAll()
        },


        //task actions
        async createTask (name, description, state, completed, taskboardId, teamId) {
            this.tasks = await request.post('/todos/create', {
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
                taskboardID: taskboardId,
                userID: user.userID,
                teamID: teamId
            })
            if (teamID) {
                return this.getAllTeams()
            }
            await this.getAllPrivateBoards()
        },
        async updateTask (name, description, state, completed, taskId) {
            this.tasks = await request.put(`/todos/${taskId}`, {
                todoName: name,
                todoDescription: description,
                todoState: state,
                todoCompleted: completed,
            })
            await this.getAll()
        },
        async deleteTask (taskId) {
            await request.delete(`/todos/${taskId}`)
            await this.getAll()
        }
    }
})
