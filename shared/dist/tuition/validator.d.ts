import { z } from "zod";
export type CreateTuitionInput = z.infer<typeof TuitionSchema>;
export declare const TuitionSchema: z.ZodObject<{
    subject: z.ZodString;
    class: z.ZodString;
    location: z.ZodString;
    budget: z.ZodNumber;
    schedule: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    requirements: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=validator.d.ts.map