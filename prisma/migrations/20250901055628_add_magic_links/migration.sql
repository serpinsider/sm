-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "phone" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'CUSTOMER',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastLoginAt" DATETIME,
    "password" TEXT,
    "loginToken" TEXT,
    "tokenExpires" DATETIME,
    "phoneVerified" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_users" ("active", "createdAt", "email", "firstName", "id", "lastLoginAt", "lastName", "password", "phone", "role", "updatedAt") SELECT "active", "createdAt", "email", "firstName", "id", "lastLoginAt", "lastName", "password", "phone", "role", "updatedAt" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");
CREATE INDEX "users_email_idx" ON "users"("email");
CREATE INDEX "users_phone_idx" ON "users"("phone");
CREATE INDEX "users_role_idx" ON "users"("role");
CREATE INDEX "users_active_idx" ON "users"("active");
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");
CREATE INDEX "users_loginToken_idx" ON "users"("loginToken");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
