import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    status: "ok",
    name: "NexusMarket API",
    version: "0.1.0",
    timestamp: new Date().toISOString(),
  });
});

export default router;
