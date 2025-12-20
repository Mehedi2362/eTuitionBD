import type { Express } from "express";
import { getEnv } from "@/components/utils/getEnv.js";
import { db } from "./db.js";

export class Server {
    static #PORT = getEnv.number('PORT', 5000)
    static #CLIENT = getEnv.string('CLIENT_URL', 'http://localhost:3000')
    static #API_BASE = 'api/v1'

    static async start(app: Express) {
        try {
            await db.connect()
            app.listen(this.#PORT, () => {
                this.logs.start.success()
            })
        } catch (err) {
            const message = err instanceof Error ? err.message : String(err)
            this.logs.start.failed(message)
            process.exit(1)
        }
    }

    static logs = {
        start: {
            success: () => {
                console.log(`🚀 Server running on port ${this.#PORT}`)
                console.log(`🌐 Client URL: ${this.#CLIENT}`)
                console.log(`📡 API Base: ${this.#API_BASE}`)
            },
            failed: (err = '') =>
                console.error("❌ Failed to start server:", err)
        }
    }
}
