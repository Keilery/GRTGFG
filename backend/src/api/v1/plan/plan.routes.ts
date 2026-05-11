import { Router } from "express";
import {
  PLAN_API_ENDPOINTS,
  PLAN_FEATURES,
  PLAN_MODULES,
  PLAN_SECURITY_CONTROLS,
  PLAN_WEBSOCKET_EVENTS,
} from "./plan-data";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    modules: PLAN_MODULES.length,
    features: PLAN_FEATURES.length,
    endpoints: PLAN_API_ENDPOINTS.length,
    websocketEvents:
      PLAN_WEBSOCKET_EVENTS.client.length + PLAN_WEBSOCKET_EVENTS.server.length,
    securityControls: PLAN_SECURITY_CONTROLS.length,
    moduleSummary: PLAN_MODULES.map((module) => ({
      id: module.id,
      number: module.number,
      title: module.title,
      plannedCount: module.plannedCount,
      implementedCount: module.features.length,
    })),
  });
});

router.get("/features", (req, res) => {
  const moduleId = typeof req.query.module === "string" ? req.query.module : undefined;
  const features = moduleId
    ? PLAN_FEATURES.filter((feature) => feature.moduleId === moduleId)
    : PLAN_FEATURES;

  res.json({ total: features.length, data: features });
});

router.get("/modules/:id", (req, res) => {
  const module = PLAN_MODULES.find((item) => item.id === req.params.id);

  if (!module) {
    return res.status(404).json({ error: "Module not found" });
  }

  return res.json({ data: module });
});

router.get("/endpoints", (_req, res) => {
  res.json({ total: PLAN_API_ENDPOINTS.length, data: PLAN_API_ENDPOINTS });
});

router.get("/websocket", (_req, res) => {
  res.json({ data: PLAN_WEBSOCKET_EVENTS });
});

router.get("/security", (_req, res) => {
  res.json({ total: PLAN_SECURITY_CONTROLS.length, data: PLAN_SECURITY_CONTROLS });
});

export default router;
