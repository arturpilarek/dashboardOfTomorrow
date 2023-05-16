const TeamModel = require('../../models/TeamModel');
const TodoModel = require('../../models/TodoModel');

//ReadTeamTodos - 
//1. TeamModel - Lav et array til taskid{type: string}
//2. Hent team objekt
//3. For loop igennem teamModel.ArrayNavn
//4. Console log hvert objekt


module.exports = async (req, res) => {
    const teamId = req.params.teamId;
    try {
        // Find teamet via Id
        let teamObject = await TeamModel.findOne({teamID: teamId});
        
        // teamTodos er de todos teamet har.
        // Laves i en for loop for at "printe" alle todos ud, til den tilhørende team.
        for (let i = 0; i < teamObject.teamTasks.length; i++) {
            // Finder teamObject der indeholder teamTask der indeholder et array med todos i.
            let currentTodo = await TodoModel.findOne({todoID:teamObject.teamTasks[i]})
            console.log(currentTodo)
        }

        res.json(`Succes`)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}