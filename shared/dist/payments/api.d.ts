export declare const PAYMENT_ROUTES: {
    readonly ALL: "/payments";
    readonly MY: "/payments/my";
    readonly BY_ID: (id: string) => string;
    readonly CREATE_INTENT: "/payments/create-intent";
    readonly CREATE_CHECKOUT: "/payments/create-checkout-session";
    readonly CONFIRM: "/payments/confirm";
    readonly WEBHOOK: "/payments/webhook";
    readonly SUCCESS: (sessionId: string) => string;
    readonly EARNINGS: "/payments/earnings";
};
export declare const PAYMENT_COLLECTION = "payments";
export declare const DEFAULT_PAYMENT_STATUS: "pending";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";
//# sourceMappingURL=api.d.ts.map