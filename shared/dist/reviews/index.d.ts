export declare const REVIEW_ROUTES: {
    readonly CREATE: "/reviews";
    readonly GET_BY_TUTOR: (tutorId: string) => string;
    readonly GET_STUDENT_REVIEW: (tutorId: string, studentId: string) => string;
    readonly UPDATE: (reviewId: string) => string;
    readonly DELETE: (reviewId: string) => string;
};
export * from "./types.js";
export * from "./validators.js";
//# sourceMappingURL=index.d.ts.map