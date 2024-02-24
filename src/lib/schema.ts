import { z } from "zod";

const translateSchema = z
  .object({
    text: z.string({
      required_error: "text is required",
    }),
  })
  .strict();

export type TranslateReqType = z.infer<typeof translateSchema>;

export default translateSchema;
