import { Router } from "express";

const router = Router();

router.get("/apps", (_req, res) => {
  res.json({
    data: [
      { id: "app_1", name: "Seller Ops", scopes: ["orders:read", "listings:write"], status: "active" },
      { id: "app_2", name: "Analytics Export", scopes: ["analytics:read"], status: "sandbox" },
    ],
  });
});

router.post("/apps", (req, res) => {
  res.status(201).json({
    data: {
      id: `app_${Date.now()}`,
      name: req.body.name ?? "New app",
      clientId: `nm_${Date.now()}`,
      status: "sandbox",
      scopes: req.body.scopes ?? ["profile:read"],
    },
  });
});

router.get("/webhooks", (_req, res) => {
  res.json({
    data: [
      "order.created",
      "order.updated",
      "dispute.opened",
      "bot.status_changed",
      "payout.completed",
    ],
  });
});

router.post("/webhooks/test", (req, res) => {
  res.json({
    data: {
      deliveryId: `wh_${Date.now()}`,
      endpoint: req.body.endpoint ?? "https://example.com/webhook",
      status: "delivered",
      signatureHeader: "X-Nexus-Signature",
    },
  });
});

export default router;
