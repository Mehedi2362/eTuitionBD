// ==================== Reviews Routes ====================
export const REVIEW_ROUTES = {
    CREATE: "/reviews",
    GET_BY_TUTOR: (tutorId) => `/reviews/tutor/${tutorId}`,
    GET_STUDENT_REVIEW: (tutorId, studentId) => `/reviews/tutor/${tutorId}/student/${studentId}`,
    UPDATE: (reviewId) => `/reviews/${reviewId}`,
    DELETE: (reviewId) => `/reviews/${reviewId}`,
};
// ==================== Exports ====================
export * from "./types.js";
export * from "./validators.js";
//# sourceMappingURL=index.js.map