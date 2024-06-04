import express from "express";
import db from "../config/Database.js";
import {
  getUsers,
  getUsersById,
  createUser,
  loginUser,
  resetPassword,
  logout
} from "../controllers/Users.js";
import { loginFilter } from "../filters/LoginFilter.js";


const router = express.Router();

router.get("/users", loginFilter, getUsers);
router.get("/users/:id", loginFilter, getUsersById);
router.post("/users", createUser);
router.post("/login", loginUser);
router.post("/resetPassword/:id", loginFilter, resetPassword);
router.delete("/logout/:id",loginFilter, logout);

export default router;
