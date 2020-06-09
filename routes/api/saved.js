const router = require("express").Router();
const savedController = require("../../controllers/savedController");

// Matches with "/api/saved"
router.route("/")
  .get(savedController.findAll)
  .post(savedController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .delete(savedController.remove);

  module.exports = router;