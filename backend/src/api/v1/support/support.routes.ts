import { Router } from "express";

const router = Router();

router.get("/faq", (_req, res) => {
  res.json({
    data: [
      { question: "Как работает гарант-сервис?", answer: "Оплата удерживается в escrow до подтверждения доставки." },
      { question: "Как открыть диспут?", answer: "Откройте заказ, нажмите dispute и приложите доказательства." },
      { question: "Как подключить бота?", answer: "Используйте automation center и OAuth/API ключи провайдера." },
    ],
  });
});

router.post("/tickets", (req, res) => {
  res.status(201).json({
    data: {
      id: `ticket_${Date.now()}`,
      subject: req.body.subject ?? "New ticket",
      priority: req.body.priority ?? "normal",
      status: "open",
      slaMinutes: 30,
    },
  });
});

router.get("/tickets", (_req, res) => {
  res.json({
    data: [
      { id: "ticket_1", subject: "Order delivery", priority: "high", status: "open" },
      { id: "ticket_2", subject: "KYC review", priority: "normal", status: "pending" },
    ],
  });
});

router.post("/chat/messages", (req, res) => {
  res.status(201).json({
    data: {
      id: `msg_${Date.now()}`,
      text: req.body.text ?? "",
      status: "sent",
      realtimeEvent: "chat:message",
    },
  });
});

export default router;
