import { Router } from "express";

const router = Router();

const ORDERS = [
  {
    id: "o_1",
    buyerId: "u_2",
    sellerId: "u_1",
    total: 8190,
    status: "COMPLETED",
    paymentStatus: "PAID",
    createdAt: "2026-04-30T14:22:00Z",
  },
];

router.get("/", (_req, res) => {
  res.json({ data: ORDERS });
});

router.get("/:id", (req, res) => {
  const order = ORDERS.find((o) => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json({ data: order });
});

router.post("/", (req, res) => {
  const id = "o_" + Math.random().toString(36).slice(2, 8);
  // Spread `req.body` first so server-controlled fields (id, status, etc.)
  // cannot be overridden by client input.
  res.status(201).json({
    data: {
      ...req.body,
      id,
      status: "PENDING",
      paymentStatus: "UNPAID",
      createdAt: new Date().toISOString(),
    },
  });
});

export default router;
