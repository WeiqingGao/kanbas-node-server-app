import PathParameters from './PathParameters.js';
import WorkingWithArrays from './WorkingWithArrays.js';
import WorkingWithObjects from './WorkingWithObjects.js';
import { todos } from './WorkingWithArrays.js';

export default function Lab5(app) {
    app.get("/lab5/welcome", (req, res) => {
      res.send("Welcome to Lab 5");
    });

    app.get("/lab5/todos/:id/description/:description", (req, res) => {
      const { id, description } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      if (!todo) {
          res.status(404).send("Todo not found.");
          return;
      }
      todo.description = description;
      res.json(todos);
    });
  
  app.get("/lab5/todos/:id/completed/:completed", (req, res) => {
      const { id, completed } = req.params;
      const todo = todos.find((t) => t.id === parseInt(id));
      if (!todo) {
          res.status(404).send("Todo not found.");
          return;
      }
      todo.completed = completed === "true";
      res.json(todos);
  });
  
    PathParameters(app);
    WorkingWithObjects(app);
    WorkingWithArrays(app);
}
  
  