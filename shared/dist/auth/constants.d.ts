export declare const ROLES: {
    readonly STUDENT: "student";
    readonly TUTOR: "tutor";
    readonly ADMIN: "admin";
};
export type UserRole = (typeof ROLES)[keyof typeof ROLES];
export declare const USER_STATUS: {
    readonly ACTIVE: "active";
    readonly INACTIVE: "inactive";
    readonly BANNED: "banned";
};
export type UserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];
//# sourceMappingURL=constants.d.ts.map