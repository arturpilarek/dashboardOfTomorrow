const express = require("express")

// Her samler vi alle routes i en fil, så vi kan importere dem i index.js.
// Disse routes kan fjernes eller laves om, da de kun er eksempler.

// Routes importeres her

//User
// const userRegisterRoute = require('./routes/user/userRegisterRoute')
// const userLoginRoute = require('./routes/user/userLoginRoute')

//Todos
const createTodoRoute = require('./routes/todos/createTodosRoute')
// const readTodosRoute = require('./routes/todos/readTodosRoute')
// const deleteTodoRoute = require('./routes/todos/deleteTodoRoute')
// const updateTodoRoute = require('./routes/todos/updateTodoRoute')

// Example route
const exampleRoute = require("./routes/example/getExampleRoute")

const router = express.Router()

// Routes defineres her

// const tokenAuth = require('./middleware/tokenAuth')

//User routes
// router.post('/register', userRegisterRoute)
// router.post('/login', userLoginRoute)

//Todos routes
// router.post('/todos/get', tokenAuth, readTodosRoute)

//Testing Create route without Auth
router.post('/todos/create', createTodoRoute)
// router.post('/todos/create',tokenAuth, createTodoRoute)

// router.put('/todos/:id',tokenAuth, updateTodoRoute)
// router.delete('/todos/:id',tokenAuth, deleteTodoRoute)

// Example route
router.get("/getExample", exampleRoute)

module.exports = router
