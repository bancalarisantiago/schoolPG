//from modules
import { Router } from "express";
import { tokenValidation } from "../libs/verifyToken/verifyToken";

//controller
import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/cEvent";

const router = Router();

//private routes
router.get("/event", getAllEvents);
router.post("/event", createEvent);
router.put("/event/:id", updateEvent);
router.delete("/event/:id", deleteEvent);

export default router;
