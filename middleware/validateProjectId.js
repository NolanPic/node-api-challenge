const projectDb = require('../data/helpers/projectModel');

const validateProjectId = (req, res, next) => {
    const { id } = req.params;
    projectDb.get(id).then(project => {
        if(!project) {
            res.status(404).json({ error: "Project does not exist" });
        }
        else{
            next();
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server could not get this project" });
    });
};

module.exports = validateProjectId;
