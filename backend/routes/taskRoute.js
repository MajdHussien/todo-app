import express from "express";
import {
  addTask,
  getTask,
  removeTask,
  editTask,
} from "../controllers/taskController.js";
import requireAuth from "../middleware/requireAuth.js";
const router = express.Router();

router.post("/addTask", requireAuth, addTask);
router.get("/getTask", requireAuth, getTask);
router.delete("/removeTask", removeTask);
router.put("/editTask", editTask);

export default router;
