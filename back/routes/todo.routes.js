const router = require("express").Router();
let TodoItem = require("../models/todo-item.model");

router.route("/").get((req, res) => {
  TodoItem.find()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const description = req.body.description;
  const isDone = req.body.isDone;

  const newTodo = new TodoItem({
    description,
    isDone,
  });
  newTodo
    .save()
    .then(() => res.json("Todo Added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/delete/:id").delete((req, res) => {
  console.log(req.params.id);
  TodoItem.findByIdAndDelete(req.params.id)
    .then(() => res.json("Todo Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/update/:id").post((req, res) => {
  TodoItem.findById(req.params.id)
    .then((todo) => {
      todo.description = req.body.description;
      todo.isDone = req.body.isDone;

      todo
        .save()
        .then(() => res.json("Todo Updated"))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
