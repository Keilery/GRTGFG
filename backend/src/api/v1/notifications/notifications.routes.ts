import { Router } from "express";

const router = Router();

const notifications = [
  { id: "n_1", type: "order", title: "Заказ оплачен", channel: "in-app", isRead: false },
  { id: "n_2", type: "security", title: "Новый вход", channel: "email", isRead: true },
  { id: "n_3", type: "bot", title: "FunPay sync complete", channel: "telegram", isRead: false },
];

router.get("/", (_req, res) => {
  res.json({ total: notifications.length, data: notifications });
});

router.patch("/:id/read", (req, res) => {
  res.json({ data: { id: req.params.id, isRead: true } });
});

router.get("/preferences", (_req, res) => {
  res.json({
    data: {
      channels: ["in-app", "email", "push", "telegram", "discord", "sms"],
      quietHours: { enabled: true, from: "23:00", to: "08:00" },
      digest: "daily",
    },
  });
});

export default router;
