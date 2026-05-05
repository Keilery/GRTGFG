import { Router } from "express";

const router = Router();

const LISTINGS = [
  {
    id: "l_1",
    title: "Аккаунт WoW Lich King 80lvl + Геар 285",
    price: 4500,
    currency: "RUB",
    game: "World of Warcraft",
    category: "Аккаунты",
    deliveryTime: "15 минут",
    sellerId: "u_1",
    rating: 4.9,
    reviews: 124,
    isHot: true,
  },
  {
    id: "l_2",
    title: "10 000 Gold — Stormrage US",
    price: 1280,
    currency: "RUB",
    game: "World of Warcraft",
    category: "Валюта",
    deliveryTime: "5 минут",
    sellerId: "u_2",
    rating: 5.0,
    reviews: 482,
    isHot: false,
  },
];

router.get("/", (req, res) => {
  const game = req.query.game as string | undefined;
  const category = req.query.category as string | undefined;
  let result = LISTINGS;
  if (game) result = result.filter((l) => l.game === game);
  if (category) result = result.filter((l) => l.category === category);
  res.json({ data: result, total: result.length });
});

router.get("/:id", (req, res) => {
  const listing = LISTINGS.find((l) => l.id === req.params.id);
  if (!listing) return res.status(404).json({ error: "Listing not found" });
  res.json({ data: listing });
});

router.post("/", (req, res) => {
  const id = "l_" + Math.random().toString(36).slice(2, 8);
  // Spread `req.body` first so server-controlled `id` cannot be overridden.
  res.status(201).json({ data: { ...req.body, id } });
});

export default router;
