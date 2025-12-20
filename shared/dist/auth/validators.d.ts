import { z } from "zod";
export type SignInCreds = z.infer<typeof SignInSchema>;
export declare const SignInSchema: z.ZodObject<{
    email: z.ZodEmail;
    password: z.ZodString;
}, z.core.$strip>;
export type SignUpCreds = z.infer<typeof SignUpSchema>;
export declare const SignUpSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodEmail;
    phone: z.ZodString;
    role: z.ZodEnum<{
        student: "student";
        tutor: "tutor";
    }>;
    password: z.ZodString;
    confirmPassword: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=validators.d.ts.map