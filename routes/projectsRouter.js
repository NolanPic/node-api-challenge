const express = require('express');
const { validateProject, validateProjectId } = require('../middleware');
const projectDb = require('../data/helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    projectDb.get().then(projects => {
        res.status(200).json(projects);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: "Something went wrong getting projects" });
    });
});

module.exports = router;
