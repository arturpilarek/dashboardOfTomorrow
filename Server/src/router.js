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
const readTodosByIDRoute = require('./routes/todos/readTodoByIDRoute')
const deleteTodoRoute = require('./routes/todos/deleteTodoRoute')
const updateTodoRoute = require('./routes/todos/updateTodosRoute')


//Taskboards
const createTodosBoardRoute = require("./routes/taskboards/createTaskboardRoute");
const readAllTodosOnBoardRoute = require("./routes/taskboards/readAllTasksOnBoardRoute");
const updateTaskboardRoute = require("./routes/taskboards/updateTaskboardRoute");
const deleteTaskboardRoute = require("./routes/taskboards/deleteTaskboardRoute");

//Teams Routes
const createTeamsRoute = require("./routes/teams/createTeamsRoute");
const readAllTeamsTodosRoute = require("./routes/teams/readTeamTodosRoute");
const updateTeamsRoute = require("./routes/teams/updateTeamRoute");
const deleteTeamsRoute = require("./routes/teams/deleteTeamRoute");
const addUserToTeamRoute = require("./routes/teams/addToTeamRoute");
const removeUserFromTeamRoute = require("./routes/teams/removeUserFromTeamRoute")
const userAndTeamsRoute = require("./routes/teams/userAndTeamsRoute")

//Super Route
const superIDRoute = require("./routes/fetchAll/superRoute");
const superTeamRoute = require("./routes/fetchAll/getAllTeams")
const superBoardsRoute = require("./routes/fetchAll/getAllPrivateBoards")

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
router.get('/todos/:id', readTodosByIDRoute)
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
router.post("/teams/addToTeam/:teamID", addUserToTeamRoute);
router.post("/teams/removeUserFromTeam/:teamID", removeUserFromTeamRoute);

//Super Routes
router.get("/fetchAll/:userid", superIDRoute)
router.get("/fetchAllTeams/:userID", superTeamRoute)
router.get("/fetchAllPrivateBoards/:userID", superBoardsRoute)



// Example route
router.get("/getExample", exampleRoute)

module.exports = router
