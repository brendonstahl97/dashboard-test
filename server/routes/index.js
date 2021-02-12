const path = require("path");
const router = require("express").Router();
const authRoutes = require("./authRoutes");
const goalController = require("../controllers/goalController");


router.use("/api/auth", authRoutes);
router.post("/api/goals", goalController.create);

// If no API routes are hit, send the React app
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;