const { deleteOne } = require('../../models/TaskboardModel');
const TodoModel = require('../../models/TodoModel')
const UserModel = require("../../models/UserModel")

module.exports = async (req, res) => {
    try {
        // Skal bruge ID til at slette
        // Den ID vi gerne vil søge plus en variable til at holde ID
        let todoId = req.params.id
        //Fetch todo by ID
        let todoObject = await TodoModel.findOne({ todoID: todoId });

        // Finder ID fra databasen som matcher med den ID vi søger + sletter
        // Hvis der er fejl
        if (!todoObject) {
            return res.status(404).json({ msg: 'Task not found' })
        }
        //Get User id from todo
        let userId = todoObject.userID;
        //find user from userID
        let userObject = await UserModel.findOne({ userID: userId })
        //variable to hold users todo array
        let userTodoArray = userObject.todos_id;
        //Get the index of wanted todo
        let todoIndex = userTodoArray.indexOf(todoId);
        //Delete todo from array
        userObject.todos_id.splice(todoIndex, 1);
        //save User object to MongoDB
        userObject.save();

        //delete the todo from MongoDB
        let result = await TodoModel.deleteOne({ todoID: todoId });


        // respons på 
        res.status(200).json(`Task ${todoId} deleted`)

    }
    // Hvis det ikke virker...
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

    // Huske at have routes koblet til!!!

}

