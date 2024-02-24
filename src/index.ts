import { Context, Hono } from "hono";
import translateToEn from "./lib/translate";
import { translateMiddleware } from "./middleware";
import { TranslateReqType } from "./lib/schema";

const app = new Hono();

app.get("/healthcheck", (c) => {
  return c.text("Hi there, everything is working fine!");
});

app.post("/", translateMiddleware, async (c: Context) => {
  const body: TranslateReqType = await c.req.json();
  const engText = await translateToEn(body.text);
  if (engText.error) {
    c.status(500);
    return c.json({
      error: engText.error,
    });
  }
  return c.json({
    translation: engText.text,
  });
});

export default app;
