import express from "express";
import db from "../config/Database.js";
import {
  getUsers,
  getUsersById,
  createUser,
  editUser,
  loginUser,
  resetPassword,
  deleteUser,
  logout
} from "../controllers/Users.js";
import { loginFilter } from "../filters/LoginFilter.js";


const $routes = express.Router();

$routes.get("/users", loginFilter, getUsers);
$routes.get("/users/:id", loginFilter, getUsersById);
$routes.delete("/users/:id", loginFilter, deleteUser);
$routes.put("/users/:id", loginFilter, editUser);
$routes.post("/users", createUser);
$routes.post("/login", loginUser);
$routes.post("/resetPassword/:id", loginFilter, resetPassword);
$routes.delete("/logout/:id",loginFilter, logout);

export default $routes;
