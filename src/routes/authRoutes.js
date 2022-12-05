const express = require ("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/auth", (req, res) => {
    authController.getAuth(req, res);
});

module.exports = router;
  