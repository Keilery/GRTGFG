import { Router } from "express";

const router = Router();

const USERS = [
  {
    id: "u_1",
    username: "ShadowKing",
    email: "shadow@nexus.local",
    role: "USER",
    rating: 4.9,
    salesCount: 342,
    level: "GOLD",
  },
  {
    id: "u_2",
    username: "FrostMage",
    email: "frost@nexus.local",
    role: "USER",
    rating: 4.6,
    salesCount: 88,
    level: "SILVER",
  },
];

router.get("/", (_req, res) => {
  res.json({ data: USERS });
});

router.get("/:id", (req, res) => {
  const user = USERS.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ data: user });
});

router.get("/me", (_req, res) => {
  res.json({ data: USERS[0] });
});

export default router;
