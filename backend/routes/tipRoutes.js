// start here
import express from "express";
import {} from "../controllers/tipController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// router.post('/', registerUser);
router.post("/tip", addTip);
// router.post('/logout', logoutUser);
router
  //   .route('/profile')
  //   .get(protect, getUserProfile)
  .put("/tip", updateTip);

export default router;
