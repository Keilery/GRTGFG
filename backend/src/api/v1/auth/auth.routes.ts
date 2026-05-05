import { Router } from "express";
import { z } from "zod";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET ?? "dev-secret";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const RegisterSchema = LoginSchema.extend({
  username: z.string().min(3).max(32),
});

router.post("/login", (req, res) => {
  const parsed = LoginSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  // Mock: accept any well-formed credentials.
  const token = jwt.sign({ email: parsed.data.email }, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.json({
    token,
    user: {
      id: "u_1",
      email: parsed.data.email,
      username: "ShadowKing",
      avatar: "https://avatars.githubusercontent.com/u/1?v=4",
      role: "USER",
    },
  });
});

router.post("/register", (req, res) => {
  const parsed = RegisterSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }
  const token = jwt.sign({ email: parsed.data.email }, JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(201).json({
    token,
    user: {
      id: "u_new",
      email: parsed.data.email,
      username: parsed.data.username,
      role: "USER",
    },
  });
});

router.post("/logout", (_req, res) => {
  res.json({ ok: true });
});

router.post("/refresh", (_req, res) => {
  const token = jwt.sign({ refresh: true }, JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
});

export default router;
