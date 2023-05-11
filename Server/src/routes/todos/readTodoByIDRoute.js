const TodoModel = require('../../models/TodoModel')

module.exports = async (req, res) => {
    try {
        let todosById = req.params.id
        // Logik for at finde todos via ID
        // Variable for at finde todo ID fra TodoModel der har alle ID'er.
        console.log("me is here" + todosById)
        todosById = await TodoModel.findOne({todoID: todosById});
        console.log(todosById)
        
        res.json(todosById)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}