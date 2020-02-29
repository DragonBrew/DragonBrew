import express from "express";
import AccountController from "../controllers/AccountController";

const router = express.Router();

router.get("/", AccountController.getUsers);
router.post("/", AccountController.createUser);
router.delete("/", AccountController.deleteUser);

export default router;
