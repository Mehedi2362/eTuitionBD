// ==================== Model Types ====================
// Shared types for MongoDB models
import { ObjectId } from "mongodb";

// ==================== Status Types ====================
export type UserRole = "student" | "tutor" | "admin";
export type UserStatus = "active" | "inactive" | "banned";
export type TuitionStatus = "pending" | "approved" | "rejected" | "completed";
export type ApplicationStatus = "pending" | "approved" | "rejected" | "completed";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

// ==================== User Interface ====================
export interface IUser {
    _id?: ObjectId;
    name?: string;
    email: string;
    phone?: string | null;
    role: UserRole;
    password?: string;
    photoUrl?: string | null;
    status: UserStatus;
    qualifications?: string;
    experience?: string;
    subjects?: string[];
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
}

// ==================== Tuition Interface ====================
export interface ITuition {
    _id?: ObjectId;
    studentId: string;
    studentEmail: string;
    studentName: string;
    subject: string;
    class: string;
    location: string;
    budget: number;
    schedule: string;
    description?: string;
    requirements?: string;
    status: TuitionStatus;
    applicationsCount: number;
    createdAt: Date;
    updatedAt: Date;
}

// ==================== Application Interface ====================
export interface IApplication {
    _id?: ObjectId;
    tuitionId: ObjectId;
    tutorId: string;
    tutorEmail: string;
    tutorName: string;
    tutorPhotoUrl?: string | null;
    qualifications: string;
    experience: string;
    expectedSalary: number;
    coverLetter?: string;
    status: ApplicationStatus;
    createdAt: Date;
    updatedAt: Date;
}

// ==================== Payment Interface ====================
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

// ==================== Query Types ====================
export interface TuitionQuery {
    page?: string;
    limit?: string;
    sort?: string;
    order?: "asc" | "desc";
    subject?: string;
    class?: string;
    location?: string;
    minBudget?: string;
    maxBudget?: string;
    status?: TuitionStatus;
    search?: string;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
