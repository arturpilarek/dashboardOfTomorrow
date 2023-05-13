const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async(req,res) => {
    //Get variabels from query
    let {taskboardName} = req.query


    //Get ID
    let taskboardId = req.params.taskboardId;
    try {
        //Find model and update variabels {WhatToUpdate:UpdatedData}
        await TaskboardModel.findOneAndUpdate({taskboardID: taskboardId}, {taskboardName: taskboardName});

        res.json("Updated taskboard: " + taskboardId);

    
    } catch (err) {
        //catch error
        res.status(500).json({error: err.message})
        
    }


}