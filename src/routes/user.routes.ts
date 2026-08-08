import { Router } from "express";
import * as userController from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUser);

export default router;
