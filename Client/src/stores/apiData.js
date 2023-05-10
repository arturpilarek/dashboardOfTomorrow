import axios from "axios"
import { defineStore } from "pinia"

export const useExpressRoute = defineStore({
  id: "exempleData",
  state: () => ({
    apiData: {},
  }),
  getters: {},
  mutations: {
    setApiData(data) {
      this.apiData = data
    },
  },
  actions: {
    async getData() {
      try {
        // put correct url here
        const data = await axios.get("http://localhost:8082/getExample")
        this.apiData = data.data
      } catch (error) {
        alert(error)
        console.log(error)
      }
    },
  },
})
