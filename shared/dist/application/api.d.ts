export declare const APPLICATION_ROUTES: {
    readonly ALL: "/tutor/applications";
    readonly BY_ID: (id: string) => string;
    readonly BY_TUITION: (tuitionId: string) => string;
    readonly CREATE: "/tutor/applications/create";
    readonly UPDATE: (id: string) => string;
    readonly DELETE: (id: string) => string;
    readonly ACCEPT: (applicationId: string) => string;
    readonly REJECT: (applicationId: string) => string;
};
//# sourceMappingURL=api.d.ts.map