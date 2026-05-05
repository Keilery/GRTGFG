import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import authRouter from "./api/v1/auth/auth.routes";
import usersRouter from "./api/v1/users/users.routes";
import listingsRouter from "./api/v1/listings/listings.routes";
import ordersRouter from "./api/v1/orders/orders.routes";
import healthRouter from "./api/health.routes";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN ?? "*" }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));
app.use(
  rateLimit({
    windowMs: 60_000,
    limit: 240,
    standardHeaders: "draft-7",
    legacyHeaders: false,
  }),
);

// Routes
app.use("/api/health", healthRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/listings", listingsRouter);
app.use("/api/v1/orders", ordersRouter);

app.use((_req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`✓ NexusMarket API listening on http://0.0.0.0:${PORT}`);
});
