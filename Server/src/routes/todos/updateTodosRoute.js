const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    const {id} = req.params
    
    try {
        res.status(200).json(todo)

        // Logik for at finde en todo og opdatere den

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}