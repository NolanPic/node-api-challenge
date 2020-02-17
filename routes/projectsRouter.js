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
        res.status(201).json(created);
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

/**
 * Get a project's actions by project id
 */
router.get('/:id/actions', validateProjectId, (req, res) => {
    const { id: projectId } = req.params;
    projectDb.getProjectActions(projectId)
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong getting this project's actions" });
    });
});

/**
 * Update project
 */
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

/**
 * Delete project
 */
router.delete('/:id', validateProjectId, (req, res) => {
    const { id } = req.params;
    projectDb.remove(id)
    .then(() => {
        res.status(204).send();
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong deleting this project" });
    });
});

module.exports = router;
