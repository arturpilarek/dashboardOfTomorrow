const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async(req,res) => {
    //get id from req.params
    let taskboardId = req.params.taskboardId;

    try {
        //Find and delete taskboard with matching ID
        await TaskboardModel.findOneAndDelete({taskboardID:taskboardId});
        res.json("Deleted Taskboard: " * taskboardId)

    } catch (err) {
        res.status(500).json({error: err.message});
        
    }
}