// ==================== Payment Types ====================
import type { PaymentStatus } from "@etuitionbd/shared/payments";
import { ObjectId } from "mongodb";

export interface IPayment {
    _id?: ObjectId;
    applicationId: ObjectId;
    tuitionId: ObjectId;
    studentId: string;
    tutorId: string;
    amount: number;
    platformFee: number;
    tutorEarnings: number;
    stripePaymentIntentId?: string;
    stripeSessionId?: string;
    status: PaymentStatus;
    paidAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
