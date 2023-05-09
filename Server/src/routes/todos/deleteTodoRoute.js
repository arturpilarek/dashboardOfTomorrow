const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    try{
        // Skal bruge ID til at slette
        // Den ID vi gerne vil søge plus en variable til at holde ID
        let todoId = req.params.id
        console.log(todoId)
        // Finder ID fra databasen som matcher med den ID vi søger
        todoId = await TodoModel.findOneAndDelete({todoID: todoId});
        // Hvis der er fejl
        if (!todoId) {
            return res.status(404).json({msg: 'Task not found'})
        }

        res.status(200).json(`Task ${todoId.todoID} deleted`)
        // Funktionen deleteOne bruges på ID (sender og venter på respons)
        //await todoId.deleteOne();
        //res.send("deleted task with ID: " + todoId);

    }
    // Hvis det ikke virker...
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }

    // Huske at have routes koblet til!!!

}

