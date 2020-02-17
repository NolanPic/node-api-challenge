const actionDb = require('../data/helpers/actionModel');

const validateActionId = (req, res, next) => {
    const { id } = req.params;
    actionDb.get(id).then(action => {
        if(!action) {
            res.status(404).json({ error: "Action does not exist" });
        }
        else{
            req.action = action;
            next();
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Server could not get this action" });
    });
};

module.exports = validateActionId;
