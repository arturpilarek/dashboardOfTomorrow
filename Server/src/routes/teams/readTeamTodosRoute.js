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
        // Finde todo via id??
        let teamTodo = await TeamModel.find({teamID: teamId});

        // teamTodos er de todos teamet har.
        // Laves i en for loop for at "printe" alle todos ud, til den tilhørende team.
        console.log(teamTodo.teamTasks)
        for (let i = 0; i < teamTodo.teamTasks.length; i++) {
            console.log()
        }

        // Hvert team har nogle todos. Dvs. hver bruger kan se disse todo.
        // Finder team for at se todo
        
        res.json(`Succes`)
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}