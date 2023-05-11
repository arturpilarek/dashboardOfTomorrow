const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    try {
        // Logik for at finde alle todos
        let todos = await TodoModel.find();


        res.json(todos)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}