-- AlterTable
ALTER TABLE "bookings" ADD COLUMN "assignedAt" DATETIME;
ALTER TABLE "bookings" ADD COLUMN "confirmedAt" DATETIME;

-- CreateTable
CREATE TABLE "time_entries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookingId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "clockInTime" DATETIME NOT NULL,
    "clockOutTime" DATETIME,
    "totalMinutes" INTEGER,
    "location" JSONB,
    "notes" TEXT,
    "clockInMethod" TEXT NOT NULL DEFAULT 'SMS',
    "clockOutMethod" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "time_entries_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "time_entries_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "providers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "time_entries_bookingId_idx" ON "time_entries"("bookingId");

-- CreateIndex
CREATE INDEX "time_entries_providerId_idx" ON "time_entries"("providerId");

-- CreateIndex
CREATE INDEX "time_entries_clockInTime_idx" ON "time_entries"("clockInTime");

-- CreateIndex
CREATE INDEX "time_entries_isActive_idx" ON "time_entries"("isActive");

-- CreateIndex
CREATE INDEX "time_entries_createdAt_idx" ON "time_entries"("createdAt");

-- CreateIndex
CREATE INDEX "bookings_assignedAt_idx" ON "bookings"("assignedAt");

-- CreateIndex
CREATE INDEX "bookings_confirmedAt_idx" ON "bookings"("confirmedAt");
