const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    try {
        // Logik for at finde alle todos
<<<<<<< HEAD
=======
        let todos = await TodoModel.find();
>>>>>>> 9777bd3 (todo read single+/All added)

        res.json(todos)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}