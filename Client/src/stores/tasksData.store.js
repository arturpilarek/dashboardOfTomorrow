import { defineStore } from "pinia"
import { request } from "../_helpers/fetchWrapper.js"
import { useAuthStore } from "./auth.store.js"

export const useTaskDataStore = defineStore({
  id: "teams",
  state: () => ({
    boards: [],
    teams: [],
  }),
  actions: {
    async getAll() {
      const data = await request.get(`/fetchAll/user1`)

      const auth = useAuthStore()
      const useThisInFuture = await request.get(`/fetchAll/${auth.user.userID}`)

      this.boards.push(...data.taskboards)
      this.teams.push(...data.teams)

      console.log(this.boards)
      console.log(this.teams)
    },

    //teams actions
    async createTeam(name, description) {
      this.teams = await request.post("/teams/create", {
        teamName: name,
        teamDescription: description,
      })
    },
    async updateTeam(name, tasks, member, id) {
      this.teams = await request.put(`/teams/${id}`, {
        teamName: name,
        teamDescription: tasks,
        teamMember: member,
      })
    },
    async deleteTeam(id) {
      await request.delete(`/teams/${id}`)
    },

    // boards actions
    async createBoard(name, tasks) {
      this.privateBoards = await request.post("/taskboards/create", {
        taskboardName: name,
        taskboardTasks: tasks,
      })
    },
    async updateBoard(name, tasks, id) {
      this.privateBoards = await request.put(`/taskboards/${id}`, {
        taskboardName: name,
        taskboardTasks: tasks,
      })
    },
    async deleteBoard(id) {
      await request.delete(`/taskboards/${id}`)
    },

    //task actions
    async createTask(name, description, state, completed) {
      this.tasks = await request.post("/todos/create", {
        todoName: name,
        todoDescription: description,
        todoState: state,
        todoCompleted: completed,
      })
    },
    async updateTask(name, description, state, completed, id) {
      this.tasks = await request.put(`/todos/${id}`, {
        //tjek lige her
        todoName: name,
        todoDescription: description,
        todoState: state,
        todoCompleted: completed,
      })
    },
    async deleteTask(id) {
      await request.delete(`/todos/${id}`)
    },
  },
})
