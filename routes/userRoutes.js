import express from "express";
import {
  getUserProfileController,
  loginController,
  logoutController,
  passwordResetController,
  registerController,
  udpatePasswordController,
  updateProfileController,
} from "../controllers/userController.js";
import { isAuth } from "../middlwares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/profile", isAuth, getUserProfileController);
router.get("/logout", isAuth, logoutController);
router.put("/profile-update", isAuth, updateProfileController);
router.put("/update-password", isAuth, udpatePasswordController);
router.post("/reset-password", passwordResetController);

export default router;
