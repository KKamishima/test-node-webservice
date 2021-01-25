const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/tasks')
    .get(all_tasks);

app.route('/tasks/:taskId')
    .get(load_task);

const tasks = [
    { id: '1', name: 'task 1' },
    { id: '2', name: 'task 2' },
];

function all_tasks(req, res) {
    res.json(tasks);
};

function load_task(req, res) {
    const taskId = req.params.taskId;
    const task = tasks.find(e => e.id == taskId);
    if (task) {
        res.json(task);
    } else {
        res.status(404).end();
    }
}

app.listen(3000);
