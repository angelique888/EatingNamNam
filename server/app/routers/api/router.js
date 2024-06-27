const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./user/router");
const commentRouter = require("./comment/router");
const recipesRouter = require("./recipe/router");
const ingredientRouter = require("./ingredient/router");

router.use("/user", userRouter);
router.use("/comment", commentRouter);
router.use("/recipe", recipesRouter);
router.use("/ingredient", ingredientRouter);

/* ************************************************************************* */

module.exports = router;
