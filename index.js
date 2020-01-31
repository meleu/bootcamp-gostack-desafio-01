const express = require('express');
const server = express();

server.use(express.json());

const projects = [
    {
        "id": "1",
        "title": "My First Project",
        "tasks": []
    }
];

// ---[ middlewares ]-----------------------------------------------------------
function checkIdExists(req, res, next) {
    const { id } = req.params;
    const index = projects.findIndex((proj) => proj.id === id);
    if (index === -1) {
        return res.status(400).json({ error: "Project not found" });
    }
    return next();
};

function requestCounter(req, res, next) {
    console.count(`Request #`);
    return next();
}

server.use(requestCounter);


// ---[ CRUD ]------------------------------------------------------------------

// Create
server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    if (projects.findIndex((proj) => proj.id === id) !== -1) {
        return res.status(400).json({ error: `Project ${id} already exists`});
    }

    projects.push({ id, title, tasks: [] });
    return res.json(projects);
});

server.post('/projects/:id/tasks', checkIdExists, (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find((proj) => proj.id === id);
    project.tasks.push(title)
    return res.json(project);
})


// Read all
server.get('/projects', (req, res) => {
    return res.json(projects);
});

// Read
server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    return res.json(projects.find((proj) => proj.id === id));
});

// Update
server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find((proj) => proj.id === id);
    project.title = title;
    return res.json(project);
});

// Delete
server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const deleteIndex = projects.findIndex((proj) => proj.id === id);
    projects.splice(deleteIndex, 1);
    return res.send();
});

server.listen(3333);
