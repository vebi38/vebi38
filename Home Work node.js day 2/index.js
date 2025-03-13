const express = require('express');
const app = express();

app.use(express.json()); // Middleware for JSON parsing

let todos = [
    { id: 1, task: "Learn JavaScript" },
    { id: 2, task: "Practice Node.js" }
];

app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(todo => todo.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({ error: `TODO with ID ${id} not found` });
    }

    todos.splice(todoIndex, 1); // Remove the todo
    res.status(200).json({ message: `TODO with ID ${id} was deleted successfully` });
});

app.listen(3000, () => console.log('Server running on port 3000'));
