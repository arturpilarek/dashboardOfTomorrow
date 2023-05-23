import { defineStore } from "pinia"
import { request } from "../_helpers/fetchWrapper.js"
import { fakeTaskboards } from "./fakeTaskboardsData.js"

export const useBoardsStore = defineStore({
  id: "boards",
  state: () => ({
    boards: fakeTaskboards,
  }),
  actions: {
    async create(name, tasks) {
      this.boards = await request.post("/taskboards/create", {
        taskboardName: name,
        taskboardTasks: tasks,
      })
    },
    async update(name, tasks, id) {
      this.boards = await request.put(`/taskboards/${id}`, {
        taskboardName: name,
        taskboardTasks: tasks,
      })
    },
    async delete(id) {
      await request.delete(`/taskboards/${id}`)
    },
  },
})
