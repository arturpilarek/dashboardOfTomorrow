const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    try {
        // Logik for at finde alle todos

        res.json(todos)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}