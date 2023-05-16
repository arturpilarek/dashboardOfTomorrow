const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    //Get todo ID from Params
    const todoId = req.params.id
    

    //Get variables from query
    let {todoName, todoDescription, todoState, todoCompleted} = req.query
    
    try {
        // Find todo with id
        let todoObject = await TodoModel.findOne({todoID: todoId})
        
        //Add this data to new model
        const updateModel = {
            todoName: todoName,
            todoDescription: todoDescription,
            todoState: todoState,
            todoCompleted: todoCompleted
        };
        //Update the model on MongoDB
        const result = await TodoModel.updateOne(todoObject, updateModel );
        
        res.status(200).json('success!')

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}