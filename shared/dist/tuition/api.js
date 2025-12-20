export const TUITION_ROUTES = {
    // Public routes
    ALL: "/tuitions",
    FEATURED: "/tuitions/featured",
    BY_ID: (id) => `/tuitions/${id}`,
    // Student routes
    MY: "/student/tuitions",
    CREATE: "/student/tuitions/create",
    UPDATE: (id) => `/student/tuitions/${id}/update`,
    DELETE: (id) => `/student/tuitions/${id}/delete`,
    // Admin routes
    APPROVE: (id) => `/admin/tuitions/${id}/status/approve`,
    REJECT: (id) => `/admin/tuitions/${id}/status/reject`,
};
//# sourceMappingURL=api.js.map