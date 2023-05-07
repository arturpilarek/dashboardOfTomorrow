const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    //Taking all properties from query and assign to value
    let {todoID, todoName, todoDescription, todoState, todoCompleted } = req.query
    console.log("this is createTodoModel Body: ")
    console.log(req);

    try {
        let todoTask = new TodoModel({
            //Finde på en metode til at calculate ID
            //Count alle tasks i db som i quiz opgave?

            todoName: todoName,
            todoDescription: todoDescription,
            todoState: todoState,
            todoCompleted: todoCompleted
        })
      

        await todoTask.save();
        console.log(todoTask);
        res.json(todoTask)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}