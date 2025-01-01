import express from "express";
import {
  followUnFollowUser,
  getUserProfile,
  loginUser,
  logoutUser,
  signUp,
  updateUser,
  getSuggestedUsers,
} from "../Controllers/UserController";
// import protectRoute from "../Middlewares/ProtectRoute";

const router = express.Router();

router.get("/profile/:query", getUserProfile);
router.get("/suggested", getSuggestedUsers);
router.post("/sign-up", signUp);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", followUnFollowUser);
router.put("/update/:id", updateUser);

export default router;
