import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes } from "../domains/auth/auth.routes";
import { clientsRoutes } from "../domains/clients/clients.routes";
import { serviceOrdersRoutes } from "../domains/service-orders/serviceOrders.routes";
import { errorHandler } from "../middlewares/errorHandler";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRoutes);
app.use("/clients", clientsRoutes);
app.use("/service-orders", serviceOrdersRoutes);

app.use(errorHandler);

export { app };
