// ==================== Admin Dashboard Routes ====================
export const ADMIN_ROUTES = {
    DASHBOARD: "/admin/dashboard",
    ANALYTICS: "/admin/analytics",
};
export const ADMIN_USER_ROUTES = {
    ALL: "/admin/users",
    BY_ID: (uid) => `/admin/users/${uid}`,
    UPDATE_ROLE: (uid) => `/admin/users/${uid}/role`,
    DELETE: (uid) => `/admin/users/${uid}`,
};
export const ADMIN_TUITION_ROUTES = {
    ALL: "/admin/tuitions",
    BY_ID: (id) => `/admin/tuitions/${id}`,
    UPDATE_STATUS: (id) => `/admin/tuitions/${id}/status`,
};
export const ADMIN_APPLICATION_ROUTES = {
    ALL: "/admin/applications",
    BY_ID: (id) => `/admin/applications/${id}`,
};
export const ADMIN_PAYMENT_ROUTES = {
    ALL: "/admin/payments",
    BY_ID: (id) => `/admin/payments/${id}`,
};
//# sourceMappingURL=admin.js.map