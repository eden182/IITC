import express from "express";
import protectRoute from "../Middlewares/ProtectRoute.js";
import {
  getMessages,
  sendMessage,
  getConversations,
} from "../Controllers/MessageController.js";

const router = express.Router();

router.get("/conversations", protectRoute, getConversations);
router.get("/:otherUserId", protectRoute, getMessages);
router.post("/", protectRoute, sendMessage);

export default router;
