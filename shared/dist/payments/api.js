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
//# sourceMappingURL=api.js.map