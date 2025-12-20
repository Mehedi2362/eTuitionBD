// ==================== User Model ====================
import bcrypt from "bcrypt";
import { Filter, ObjectId, UpdateFilter, WithId } from "mongodb";
import { PUBLIC_USER_PROJECTION } from "./constants.js";
import type { IUser, UserRole, UserStatus } from "./types.js";
import { db } from "@/config/db.js";
import { SignUpCreds } from "@etuitionbd/shared/auth";

const DEFAULT_USER_ROLE: UserRole = "student";
const DEFAULT_USER_STATUS: UserStatus = "active";

// ==================== User Model Class ====================
export class UserModel {
    static #collection = db.getDB().collection<IUser>('users')

    // Create new user
    static async create(data: IUser): Promise<WithId<IUser>> {
        const newUser: IUser = {
            name: data.name || '',
            email: data.email,
            phone: data.phone || null,
            role: data.role || DEFAULT_USER_ROLE,
            password: data.password || '',
            photoUrl: data.photoUrl || null,
            status: data.status || DEFAULT_USER_STATUS,
            qualifications: data.qualifications || "",
            experience: data.experience || "",
            subjects: data.subjects || [],
            bio: data.bio || "",
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await this.#collection.insertOne(newUser);
        return { ...newUser, _id: result.insertedId };
    }

    // Find by ID
    static async findById(id: string | ObjectId): Promise<WithId<IUser> | null> {
        const objectId = typeof id === "string" ? new ObjectId(id) : id;
        return this.#collection.findOne({ _id: objectId });
    }

    // Find by email
    static async findByEmail(email: string): Promise<WithId<IUser> | null> {
        return this.#collection.findOne({ email });
    }

    // Find all with pagination
    static async findAll(
        filter: Filter<IUser> = {},
        options: {
            skip?: number;
            limit?: number;
            sort?: Record<string, 1 | -1>;
        } = {}
    ): Promise<{ data: WithId<IUser>[]; total: number }> {
        const { skip = 0, limit = 10, sort = { createdAt: -1 } } = options;

        const [data, total] = await Promise.all([
            this.#collection
                .find(filter, { projection: PUBLIC_USER_PROJECTION })
                .sort(sort)
                .skip(skip)
                .limit(limit)
                .toArray(),
            this.#collection.countDocuments(filter),
        ]);

        return { data, total };
    }

    // Find tutors
    static async findTutors(
        filter: Filter<IUser> = {},
        options: { skip?: number; limit?: number } = {}
    ): Promise<{ data: WithId<IUser>[]; total: number }> {
        const tutorFilter = { ...filter, role: "tutor" as UserRole };
        return this.findAll(tutorFilter, options);
    }

    // Update by UID
    static async updateByUid(uid: string, data: Partial<IUser>): Promise<WithId<IUser> | null> {
        const updateData: UpdateFilter<IUser> = {
            $set: { ...data, updatedAt: new Date() },
        };

        const result = await this.#collection.findOneAndUpdate({ uid }, updateData, { returnDocument: "after" });
        return result;
    }

    // Update by ID
    static async updateById(id: string | ObjectId, data: Partial<IUser>): Promise<WithId<IUser> | null> {
        const objectId = typeof id === "string" ? new ObjectId(id) : id;
        const updateData: UpdateFilter<IUser> = {
            $set: { ...data, updatedAt: new Date() },
        };

        const result = await this.#collection.findOneAndUpdate({ _id: objectId }, updateData, { returnDocument: "after" });
        return result;
    }

    // Update role
    static async updateRole(uid: string, role: UserRole): Promise<WithId<IUser> | null> {
        return this.updateByUid(uid, { role });
    }

    // Ban/Unban user
    static async updateStatus(uid: string, status: UserStatus): Promise<WithId<IUser> | null> {
        return this.updateByUid(uid, { status });
    }

    // Delete by UID
    static async deleteByUid(uid: string): Promise<boolean> {
        const result = await this.#collection.deleteOne({ uid });
        return result.deletedCount > 0;
    }

    // Check if user exists
    static async exists(uid: string): Promise<boolean> {
        const count = await this.#collection.countDocuments({ uid });
        return count > 0;
    }

    // Count users by role
    static async countByRole(role: UserRole): Promise<number> {
        return this.#collection.countDocuments({ role });
    }
}
