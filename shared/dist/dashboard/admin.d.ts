export declare const ADMIN_ROUTES: {
    readonly DASHBOARD: "/admin/dashboard";
    readonly ANALYTICS: "/admin/analytics";
};
export declare const ADMIN_USER_ROUTES: {
    readonly ALL: "/admin/users";
    readonly BY_ID: (uid: string) => string;
    readonly UPDATE_ROLE: (uid: string) => string;
    readonly DELETE: (uid: string) => string;
};
export declare const ADMIN_TUITION_ROUTES: {
    readonly ALL: "/admin/tuitions";
    readonly BY_ID: (id: string) => string;
    readonly UPDATE_STATUS: (id: string) => string;
};
export declare const ADMIN_APPLICATION_ROUTES: {
    readonly ALL: "/admin/applications";
    readonly BY_ID: (id: string) => string;
};
export declare const ADMIN_PAYMENT_ROUTES: {
    readonly ALL: "/admin/payments";
    readonly BY_ID: (id: string) => string;
};
//# sourceMappingURL=admin.d.ts.map