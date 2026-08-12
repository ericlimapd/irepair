import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes } from "../domains/auth/auth.routes";
import { errorHandler } from "../middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);

app.use(errorHandler);

export { app };
