const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    //Taking all properties from query and assign to value
    let {todoID, todoName, todoDescription, todoState, todoCompleted } = req.query

    //Get the last element in todo Tasks and get the id from it
    //Search database for objects matching TodoModel
    const todoCounter = await TodoModel.find({TodoModel});

    //Get the last element from array
    let lastTodoObject = todoCounter.slice(-1);

    //Regex to get number from end of String
    let numberRegex = /\d+$/;

    //Use regex and convert string to Int
    let todoIdFromDB = parseInt(lastTodoObject[0].todoID.match(numberRegex));

    //Increment the ID
    todoIdFromDB++;
  
    try {
        let todoTask = new TodoModel({
            todoID: `todoTask${todoIdFromDB}`,
            todoName: todoName,
            todoDescription: todoDescription,
            todoState: todoState,
            todoCompleted: todoCompleted
        })

        await todoTask.save();
        res.json(todoTask)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}