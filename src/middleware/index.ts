import { Context, Next } from "hono";
import translateSchema from "../lib/schema";

export const translateMiddleware = async (c: Context, next: Next) => {
  const body = await c.req.json();
  const parsedBody = translateSchema.safeParse(body);
  if (!parsedBody.success) {
    c.status(400);
    return c.json({
      error: parsedBody.error.issues,
    });
  }
  await next();
};
