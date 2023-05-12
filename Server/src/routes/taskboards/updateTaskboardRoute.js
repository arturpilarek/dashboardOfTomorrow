const TaskboardModel = require("../../models/TaskboardModel");

module.exports = async(req,res) => {
    //Get variabels from query
    let {taskboardName} = req.query


    //Get ID
    let taskboardId = req.params.taskboardId;
    try {


        //Fetch model
        let taskboardObject = await TaskboardModel.findOne({taskboardID: taskboardId});
        console.log(taskboardObject);    
    
        //Assign changes to new model

        taskboardObject.taskboardName = taskboardName;

        taskboardObject.save();

        
        //Save model

        res.json(taskboardObject);

    
    } catch (err) {
        //catch error
        res.status(500).json({error: err.message})
        
    }


}