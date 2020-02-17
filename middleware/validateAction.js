
const validateAction = (req, res, next) => {
    const action = req.body;
    if(!action.project_id || !action.description || !action.notes) {
        res.status(400).json({ error: "'project_id', 'description', and 'notes' are required for an action" });
    }
    else {
        next();
    }
};

module.exports = validateAction;
