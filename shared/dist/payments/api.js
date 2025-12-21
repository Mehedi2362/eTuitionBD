export const PAYMENT_ROUTES = {
    ALL: "/payments",
    MY: "/payments/my",
    BY_ID: (id) => `/payments/${id}`,
    CREATE_INTENT: "/payments/create-intent",
    CREATE_CHECKOUT: "/payments/create-checkout-session",
    CONFIRM: "/payments/confirm",
    WEBHOOK: "/payments/webhook",
    SUCCESS: (sessionId) => `/payments/success/${sessionId}`,
    EARNINGS: "/payments/earnings",
};
// ==================== Payment Constants ====================
export const PAYMENT_COLLECTION = "payments";
export const DEFAULT_PAYMENT_STATUS = "pending";
//# sourceMappingURL=api.js.map