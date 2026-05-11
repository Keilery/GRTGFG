import { Router } from "express";

const router = Router();

router.get("/accounts", (_req, res) => {
  res.json({
    data: [
      { id: "rent_1", game: "Baldur's Gate 3", tariff: "7d", status: "available", price: 890 },
      { id: "rent_2", game: "Helldivers 2", tariff: "24h", status: "reserved", price: 240 },
    ],
  });
});

router.post("/bookings", (req, res) => {
  res.status(201).json({
    data: {
      id: `booking_${Date.now()}`,
      accountId: req.body.accountId ?? "rent_1",
      status: "escrow_locked",
      timerMinutes: req.body.minutes ?? 1440,
      credentialsVault: "sealed",
    },
  });
});

router.post("/bookings/:id/extend", (req, res) => {
  res.json({
    data: {
      bookingId: req.params.id,
      status: "extended",
      addedMinutes: req.body.minutes ?? 1440,
    },
  });
});

export default router;
