const express = require('express');
const { validateAction, validateActionId } = require('../middleware');
const actionDb = require('../data/helpers/actionModel');

const router = express.Router();

/**
 * Create action
 */
router.post('/', validateAction, (req, res) => {
    const action = req.body;
    actionDb.insert(action).then(created => {
        res.status(201).json(created);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong creating this action" });
    });
});

/**
 * Get all actions
 */
router.get('/', (req, res) => {
    actionDb.get().then(actions => {
        res.status(200).json(actions);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong getting actions" });
    });
});

/**
 * Get action by id
 */
router.get('/:id', validateActionId, (req, res) => {
    res.status(200).json(req.action);
});

/**
 * Update action
 */
router.put('/:id', validateActionId, (req, res) => {
    const { id } = req.params;
    const action = req.body;
    actionDb.update(id, action)
    .then(updated => {
        res.status(200).json(updated);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong updating this action" });
    });
});

/**
 * Delete action
 */
router.delete('/:id', validateActionId, (req, res) => {
    const { id } = req.params;
    actionDb.remove(id)
    .then(() => {
        res.status(204).send();
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong deleting this action" });
    });
});

module.exports = router;
