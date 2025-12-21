// ==================== Student Dashboard Routes ====================
export const STUDENT_TUITION_ROUTES = {
    ALL: "/student/tuitions",
    MY: "/student/tuitions/my",
    BY_ID: (id) => `/student/tuitions/${id}`,
    CREATE: "/student/tuitions/create",
    UPDATE: (id) => `/student/tuitions/${id}/update`,
    DELETE: (id) => `/student/tuitions/${id}/delete`,
};
export const STUDENT_APPLICATION_ROUTES = {
    BY_TUITION: (tuitionId) => `/student/tuitions/${tuitionId}/applications`,
    ACCEPT: (applicationId) => `/student/applications/${applicationId}/accept`,
    REJECT: (applicationId) => `/student/applications/${applicationId}/reject`,
};
export const STUDENT_PAYMENT_ROUTES = {
    ALL: "/student/payments",
    BY_ID: (id) => `/student/payments/${id}`,
};
//# sourceMappingURL=student.js.map