export declare const STUDENT_TUITION_ROUTES: {
    readonly ALL: "/student/tuitions";
    readonly MY: "/student/tuitions/my";
    readonly BY_ID: (id: string) => string;
    readonly CREATE: "/student/tuitions/create";
    readonly UPDATE: (id: string) => string;
    readonly DELETE: (id: string) => string;
};
export declare const STUDENT_APPLICATION_ROUTES: {
    readonly BY_TUITION: (tuitionId: string) => string;
    readonly ACCEPT: (applicationId: string) => string;
    readonly REJECT: (applicationId: string) => string;
};
export declare const STUDENT_PAYMENT_ROUTES: {
    readonly ALL: "/student/payments";
    readonly BY_ID: (id: string) => string;
};
//# sourceMappingURL=student.d.ts.map