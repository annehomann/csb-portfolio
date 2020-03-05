const express = require('express');
const shortId = require('shortid');
const router = express.Router();

const projects = [
  {
    id: shortId.generate(),
    title: "Portfolio Website",
    isCompleted: false,
  },
  {
    id: shortId.generate(),
    title: "Python Command Line App",
    isCompleted: true,
  },
  {
    id: shortId.generate(),
    title: "Rails Two-Sided Marketplace",
    isCompleted: true,
  },
  {
    id: shortId.generate(),
    title: "React + Node API Project",
    isCompleted: false,
  },
];

router.get('/projects', function(req, res) {
  res.json(projects);
});

// Insert into the projects array
router.post('/projects', function(req, res) {
  const id = shortId.generate();
  const project = Object.assign({}, req.body, { id });
  projects.push(project);
  console.dir(project)
  res.status(201).send();
});


// Update an existing project
router.put('/projects', function(req, res) {
  const id = req.body.id;
  const { title, isCompleted } = req.body;
  const project = projects.find(p => (p.id === id))
  project.isCompleted = isCompleted;
  project.title = title;
  res.status(204).send();
});

module.exports = router;
