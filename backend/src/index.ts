import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import adminRouter from "./api/v1/admin/admin.routes";
import authRouter from "./api/v1/auth/auth.routes";
import automationRouter from "./api/v1/automation/automation.routes";
import developersRouter from "./api/v1/developers/developers.routes";
import listingsRouter from "./api/v1/listings/listings.routes";
import notificationsRouter from "./api/v1/notifications/notifications.routes";
import ordersRouter from "./api/v1/orders/orders.routes";
import planRouter from "./api/v1/plan/plan.routes";
import rentalRouter from "./api/v1/rental/rental.routes";
import shopRouter from "./api/v1/shop/shop.routes";
import supportRouter from "./api/v1/support/support.routes";
import usersRouter from "./api/v1/users/users.routes";
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
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/automation", automationRouter);
app.use("/api/v1/developers", developersRouter);
app.use("/api/v1/listings", listingsRouter);
app.use("/api/v1/notifications", notificationsRouter);
app.use("/api/v1/orders", ordersRouter);
app.use("/api/v1/plan", planRouter);
app.use("/api/v1/rental", rentalRouter);
app.use("/api/v1/shop", shopRouter);
app.use("/api/v1/support", supportRouter);
app.use("/api/v1/users", usersRouter);

app.use((_req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`✓ NexusMarket API listening on http://0.0.0.0:${PORT}`);
});
