follow TODO.md for specific tasks.

## Architecture Overview

- **Monorepo** with three main packages:
  - `client/`: Vite + React TypeScript frontend
  - `server/`: Node.js backend (TypeScript, Express-style structure)
  - `shared/`: Common business logic, types, and validators (TypeScript)
- **Data flow**: Client communicates with Server via REST APIs. Shared code is imported by both client and server for type safety and logic reuse.
- **Directory conventions**:
  - `client/src/components/ui/`: UI primitives (shadcn/ui pattern)
  - `client/src/features/`: Feature-based modular structure (about, auth, dashboard, etc.)
  - `server/src/features/`: Backend feature modules (auth, dashboard, payments, etc.)
  - `shared/src/`: Cross-cutting logic, types, and validators
