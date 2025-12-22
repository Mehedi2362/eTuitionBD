import { z } from "zod";
export declare const CreateReviewSchema: z.ZodObject<{
    tutorId: z.ZodString;
    rating: z.ZodNumber;
    comment: z.ZodString;
}, z.core.$strip>;
export declare const UpdateReviewSchema: z.ZodObject<{
    rating: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=validators.d.ts.map