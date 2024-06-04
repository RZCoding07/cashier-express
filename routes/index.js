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
import {
  getSmartphones,
  getSmartphonesByBrand,
  getSmartphonesById,
} from "../controllers/Smartphones.js";
import {
  getCommunity,
  getCommunityById,
  createCommunity,
  deleteCommunityById,
} from "../controllers/Community.js";
import {
  getCommunity_image,
  getCommunity_imageById,
  getCommunity_imageByUserId,
  createCommunity_image,
} from "../controllers/CommunityImage.js";
import {
  getUserRatings,
  createUserRatings,
  getUserRatingsBySmartphoneId,
} from "../controllers/UserRatings.js";
import {
  getUserSurveys,
  createUserSurveys,
  getUserSurveysByUserId,
} from "../controllers/UserSurveys.js";
import {
  getWishlist,
  getWishlistByUserId,
  createWishlist,
  deleteWishlistById,
} from "../controllers/Wishlist.js";
import{
  getUserClicks,
  createUserClicks,
} from "../controllers/UserClicks.js";

const router = express.Router();

router.get("/users", loginFilter, getUsers);
router.get("/users/:id", loginFilter, getUsersById);
router.get("/user_clicks", getUserClicks);
router.post("/users", createUser);
router.post("/login", loginUser);
router.post("/resetPassword/:id", loginFilter, resetPassword);
router.delete("/logout/:id",loginFilter, logout);

export default router;
