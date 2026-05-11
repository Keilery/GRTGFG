import { Router } from "express";

const router = Router();

const bots = [
  {
    id: "bot_funpay_1",
    platform: "FunPay",
    status: "online",
    mode: "auto-delivery",
    rules: ["auto-reply", "price-sync", "stock-sync", "fraud-score"],
    lastRunAt: "2026-05-11T18:30:00.000Z",
  },
  {
    id: "bot_steam_1",
    platform: "Steam",
    status: "paused",
    mode: "trade-guard",
    rules: ["inventory-import", "trade-confirmation", "escrow-check"],
    lastRunAt: "2026-05-11T17:05:00.000Z",
  },
];

router.get("/bots", (_req, res) => {
  res.json({ total: bots.length, data: bots });
});

router.post("/bots", (req, res) => {
  const bot = {
    id: `bot_${Date.now()}`,
    platform: String(req.body.platform ?? "Custom"),
    status: "draft",
    mode: String(req.body.mode ?? "manual"),
    rules: Array.isArray(req.body.rules) ? req.body.rules : [],
    lastRunAt: null,
  };

  res.status(201).json({ data: bot });
});

router.post("/bots/:id/run", (req, res) => {
  res.json({
    data: {
      botId: req.params.id,
      status: "queued",
      jobId: `job_${Date.now()}`,
      actions: ["sync inventory", "repricing", "auto delivery check"],
    },
  });
});

router.get("/rules", (_req, res) => {
  res.json({
    data: [
      "auto-reply templates",
      "smart price floor",
      "stock reservation",
      "delivery retry",
      "fraud score threshold",
      "cross-platform sync",
    ],
  });
});

router.post("/integrations/funpay/connect", (_req, res) => {
  res.status(202).json({
    data: {
      provider: "funpay",
      status: "pending_2fa",
      scopes: ["orders:read", "inventory:write", "messages:send"],
    },
  });
});

router.post("/webhooks/replay", (req, res) => {
  res.json({
    data: {
      replayId: `replay_${Date.now()}`,
      target: req.body.target ?? "all",
      status: "scheduled",
    },
  });
});

export default router;
