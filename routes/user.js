import express from "express";
import { register, login, getUserbyId, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);

router.post("/login", login);

router.get("/logout", logout);

router.get("/getuser", isAuthenticated, getUserbyId);

// router.post(
//   "/upload",
//   isAuthenticated,
//   photoMiddleware.array("photos", 100),
//   upload
// );

export default router;
