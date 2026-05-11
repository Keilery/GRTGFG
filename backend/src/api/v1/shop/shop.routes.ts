import { Router } from "express";

const router = Router();

router.get("/products", (_req, res) => {
  res.json({
    data: [
      { id: "p_1", title: "Official WoW Token Pack", official: true, delivery: "instant", price: 2490 },
      { id: "p_2", title: "CS2 Prime Starter Bundle", official: true, delivery: "auto", price: 1290 },
      { id: "p_3", title: "Dota 2 Battle Pass Boost", official: false, delivery: "manual", price: 790 },
    ],
  });
});

router.get("/promotions", (_req, res) => {
  res.json({
    data: [
      { id: "promo_1", title: "Flash sale", discount: 15, endsInMinutes: 180 },
      { id: "promo_2", title: "Bundle cashback", discount: 8, endsInMinutes: 1440 },
    ],
  });
});

export default router;
