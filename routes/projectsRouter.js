const express = require('express');
const { validateProject, validateProjectId } = require('../middleware');
const projectDb = require('../data/helpers/projectModel');

const router = express.Router();

/**
 * Create project
 */
router.post('/', validateProject, (req, res) => {
    const project = req.body;
    projectDb.insert(project).then(created => {
        res.status(201).json(project);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong creating this project" });
    });
});

/**
 * Get all projects
 */
router.get('/', (req, res) => {
    projectDb.get().then(projects => {
        res.status(200).json(projects);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong getting projects" });
    });
});

/**
 * Get project by id
 */
router.get('/:id', validateProjectId, (req, res) => {
    res.status(200).json(req.project);
});

router.put('/:id', validateProjectId, (req, res) => {
    const { id } = req.params;
    const project = req.body;
    projectDb.update(id, project)
    .then(updated => {
        res.status(200).json(updated);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong updating this project" });
    });
});

module.exports = router;
