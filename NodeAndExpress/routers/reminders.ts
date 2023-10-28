import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("List of Reminders\n");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateReminderDto;

  console.log(req.body);

  return res.status(200).json(title);
});

export default router;
