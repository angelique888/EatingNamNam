const express = require("express");

const router = express.Router();

const recipesRouter = require("./recipe/router");
const userRouter = require("./user/router");
const menuRouter = require("./menu/router");
const commentRouter = require("./comment/router");
const recipeLabelRouter = require("./recipeLabel/router");
const labelsRouter = require("./labels/router");
const badgeRouter = require("./badges/router");
const ingredientRouter = require("./ingredient/router");
const recipeIngredientRouter = require("./recipeIngredient/router");
const authRouter = require("./auth/router");
const contactRouter = require("./contact/router");

router.use("/recipe", recipesRouter);
router.use("/user", userRouter);
router.use("/menu", menuRouter);
router.use("/comment", commentRouter);
router.use("/recipe-label", recipeLabelRouter);
router.use("/labels", labelsRouter);
router.use("/badges", badgeRouter);
router.use("/ingredient", ingredientRouter);
router.use("/recipe-ingredient", recipeIngredientRouter);
router.use("/auth", authRouter);
router.use("/contact", contactRouter);

/* ************************************************************************* */

module.exports = router;
