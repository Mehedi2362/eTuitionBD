import { z } from "zod";
export type ApplicationFormData = z.infer<typeof applicationFormSchema>;
export declare const applicationFormSchema: z.ZodObject<{
    tuitionId: z.ZodString;
    qualifications: z.ZodString;
    experience: z.ZodString;
    expectedSalary: z.ZodNumber;
    coverLetter: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=validator.d.ts.map