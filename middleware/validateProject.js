
const validateProject = (req, res, next) => {
    const project = req.body;
    if(!project.name || !project.description) {
        res.status(400).json({ error: "'name' and 'description' are required for a project" });
    }
    else {
        next();
    }
};

module.exports = validateProject;
