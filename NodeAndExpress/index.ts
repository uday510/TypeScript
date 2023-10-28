import express from "express";
import reminderRouter from "./routers/reminders";
import { json } from "stream/consumers";
const app = express();

app.use(express.json());
app.use("/reminders", reminderRouter);
app.get("/", (req, res) => res.status(200).send("Hello World\n"));
app.listen(4000, () => console.log("Server Started+++"));
