const express = require("express")

// Her samler vi alle routes i en fil, så vi kan importere dem i index.js.
// Disse routes kan fjernes eller laves om, da de kun er eksempler.

// Routes importeres her

//User
const userRegisterRoute = require('./routes/user/postUser')
const userLoginRoute = require('./routes/user/authUser')
const userIsAuth = require('./routes/user/isAuth') //to authenticate, that user is logged in, when trying to go to page
const updateUser = require('./routes/user/updateUser')


//Todos
const createTodoRoute = require('./routes/todos/createTodosRoute')
const readTodosRoute = require('./routes/todos/readTodosRoute')
const deleteTodoRoute = require('./routes/todos/deleteTodoRoute')
const updateTodoRoute = require('./routes/todos/updateTodosRoute')
const readTodoByIDRoute = require('./routes/todos/readTodoByIDRoute')

//Taskboards
const createTodosBoardRoute = require("./routes/taskboards/createTaskboardRoute");
const readAllTodosOnBoardRoute = require("./routes/taskboards/readAllTasksOnBoardRoute");
const updateTaskboardRoute = require("./routes/taskboards/updateTaskboardRoute");
const deleteTaskboardRoute = require("./routes/taskboards/deleteTaskboardRoute");

//Teams Routes
const createTeamsRoute = require("./routes/teams/createTeamsRoute")
// const readAllTeamsTodosRoute = require("./routes/teams/readTeamTodosRoute")
// const updateTeamsRoute = require("./routes/teams/updateTeamRoute")
// const deleteTeamsRoute = require("./routes/teams/deleteTeamRoute")

//Taskboards
const createTodosBoardRoute = require("./routes/taskboards/createTaskboardRoute");
const readAllTodosOnBoardRoute = require("./routes/taskboards/readAllTasksOnBoardRoute");
const updateTaskboardRoute = require("./routes/taskboards/updateTaskboardRoute");
const deleteTaskboardRoute = require("./routes/taskboards/deleteTaskboardRoute");

//Teams Routes
const createTeamsRoute = require("./routes/teams/createTeamsRoute")
const readAllTeamsTodosRoute = require("./routes/teams/readTeamTodosRoute")
const updateTeamsRoute = require("./routes/teams/updateTeamRoute")
const deleteTeamsRoute = require("./routes/teams/deleteTeamRoute")

// Example route
const exampleRoute = require("./routes/example/getExampleRoute")

const router = express.Router()

// Routes defineres her

// const tokenAuth = require('./middleware/tokenAuth')

//User routes
router.post('/register', userRegisterRoute)
router.post('/login', userLoginRoute)
router.put('/updateUser/:id', updateUser)


//Todos routes
// router.post('/todos/get', tokenAuth, readTodosRoute)
router.post('/todos/create', createTodoRoute)
// router.post('/todos/create',tokenAuth, createTodoRoute)
router.get('/todos', readTodosRoute)
router.get('/todos/:id', readTodoByIDRoute)
router.put('/todos/:id', updateTodoRoute)
router.delete('/todos/:id', deleteTodoRoute)

//Taskboard Routes
router.post("/taskboards/create", createTodosBoardRoute);
router.get("/taskboards/todos/:boardID", readAllTodosOnBoardRoute);
router.put("/taskboards/:taskboardId", updateTaskboardRoute);
router.delete("/taskboards/:taskboardId", deleteTaskboardRoute);

//Team Routes
router.post("/teams/create", createTeamsRoute);
router.get("/teams/:teamId", readAllTeamsTodosRoute);
router.put("/teams/:id", updateTeamsRoute);
router.delete("/teams/:teamId", deleteTeamsRoute);



// Example route
router.get("/getExample", exampleRoute)

module.exports = router
