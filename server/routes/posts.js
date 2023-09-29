import { verifyToken } from "../middlewares/auth.js";
import express from "express";
import { getFeedPosts, getPost, likePost } from "../controllers/posts.js";

const router = express.Router();
/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getPost);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;
