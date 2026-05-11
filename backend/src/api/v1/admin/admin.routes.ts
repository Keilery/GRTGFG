import { Router } from "express";

const router = Router();

router.get("/stats", (_req, res) => {
  res.json({
    data: {
      gmv: 18_420_000,
      orders: 84_320,
      disputes: 127,
      activeUsers: 38_450,
      conversionRate: 7.4,
      fraudScore: 0.18,
      uptime: 99.98,
    },
  });
});

router.get("/users", (_req, res) => {
  res.json({
    data: [
      { id: "u_1", username: "ArcaneSeller", kyc: true, level: "platinum", status: "active" },
      { id: "u_2", username: "RaidBuyer", kyc: false, level: "silver", status: "review" },
    ],
  });
});

router.patch("/users/:id/ban", (req, res) => {
  res.json({
    data: {
      userId: req.params.id,
      status: "banned",
      reason: req.body.reason ?? "policy violation",
      auditId: `audit_${Date.now()}`,
    },
  });
});

router.get("/moderation", (_req, res) => {
  res.json({
    data: [
      { id: "mod_1", type: "listing", risk: "duplicate", status: "queued" },
      { id: "mod_2", type: "message", risk: "external-payment", status: "escalated" },
    ],
  });
});

router.get("/analytics", (_req, res) => {
  res.json({
    data: {
      cohorts: ["buyers", "sellers", "renters", "developers"],
      funnels: ["listing_view", "add_to_cart", "checkout", "delivery_confirmed"],
      experiments: ["card-ab-test", "checkout-fee-copy", "trust-widget"],
    },
  });
});

router.get("/audit-logs", (_req, res) => {
  res.json({
    data: [
      { id: "audit_1", actor: "admin", action: "listing.approve", target: "l_100", at: "2026-05-11T18:00:00.000Z" },
      { id: "audit_2", actor: "system", action: "fraud.flag", target: "u_2", at: "2026-05-11T18:05:00.000Z" },
    ],
  });
});

export default router;
