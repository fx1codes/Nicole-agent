import { z } from "zod";

export const agentTestSchema = z.object({
  mode: z.enum(["text", "audio", "live"]).default("text"),
  prompt: z.string().trim().min(1).max(400).optional(),
  destination: z.string().regex(/^\+[1-9]\d{10,14}$/).optional(),
});
