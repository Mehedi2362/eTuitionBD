// ==================== Tutor Dashboard Routes ====================
export const TUTOR_APPLICATION_ROUTES = {
    ALL: "/tutor/applications",
    MY: "/tutor/applications/my",
    BY_ID: (id) => `/tutor/applications/${id}`,
    CREATE: "/tutor/applications/create",
    UPDATE: (id) => `/tutor/applications/${id}/update`,
    DELETE: (id) => `/tutor/applications/${id}/delete`,
};
export const TUTOR_TUITION_ROUTES = {
    ONGOING: "/tutor/tuitions/ongoing",
};
export const TUTOR_PAYMENT_ROUTES = {
    EARNINGS: "/tutor/earnings",
    HISTORY: "/tutor/payments",
};
//# sourceMappingURL=tutor.js.map