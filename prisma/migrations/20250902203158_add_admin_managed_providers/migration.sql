-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_providers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "areas" JSONB NOT NULL,
    "availability" JSONB NOT NULL,
    "rating" REAL DEFAULT 5.0,
    "totalJobs" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "isAdminManaged" BOOLEAN NOT NULL DEFAULT false,
    "adminNotes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_providers" ("active", "areas", "availability", "createdAt", "id", "notes", "rating", "totalJobs", "updatedAt", "userId") SELECT "active", "areas", "availability", "createdAt", "id", "notes", "rating", "totalJobs", "updatedAt", "userId" FROM "providers";
DROP TABLE "providers";
ALTER TABLE "new_providers" RENAME TO "providers";
CREATE UNIQUE INDEX "providers_userId_key" ON "providers"("userId");
CREATE INDEX "providers_active_idx" ON "providers"("active");
CREATE INDEX "providers_rating_idx" ON "providers"("rating");
CREATE INDEX "providers_totalJobs_idx" ON "providers"("totalJobs");
CREATE INDEX "providers_createdAt_idx" ON "providers"("createdAt");
CREATE INDEX "providers_isAdminManaged_idx" ON "providers"("isAdminManaged");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
