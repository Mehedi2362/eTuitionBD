export const APPLICATION_ROUTES = {
    // Tutor's my applications
    ALL: "/tutor/applications",
    // Tutor application by ID
    BY_ID: (id) => `/tutor/applications/${id}`,
    // Student can view tutor applications for a specific tuition
    BY_TUITION: (tuitionId) => `/student/tuitions/${tuitionId}/applications`,
    // Tutor creates a new application
    CREATE: "/tutor/applications/create",
    // Tutor updates application
    UPDATE: (id) => `/tutor/applications/${id}/update`,
    // Tutor deletes application
    DELETE: (id) => `/tutor/applications/${id}/delete`,
    // Student accepts tutor application
    ACCEPT: (applicationId) => `/student/applications/${applicationId}/accept`,
    // Student rejects tutor application
    REJECT: (applicationId) => `/student/applications/${applicationId}/reject`,
};
//# sourceMappingURL=api.js.map