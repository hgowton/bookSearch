const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//Matches with "/api"
router.route("/")
.get(booksController.findAll)
.post(booksController.create);

//Matches with "/api/:id"
router.route("/:id")
.delete(booksController.remove);

module.exports = router;