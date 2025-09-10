-- CreateTable
CREATE TABLE "provider_applications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "dateOfBirth" DATETIME,
    "hasExperience" BOOLEAN NOT NULL DEFAULT false,
    "experienceYears" INTEGER,
    "previousJobs" TEXT,
    "whyInterested" TEXT,
    "hasTransportation" BOOLEAN NOT NULL DEFAULT false,
    "vehicleType" TEXT,
    "availableAreas" JSONB NOT NULL,
    "availability" JSONB NOT NULL,
    "backgroundCheckConsent" BOOLEAN NOT NULL DEFAULT false,
    "hasInsurance" BOOLEAN NOT NULL DEFAULT false,
    "canLiftWeight" BOOLEAN NOT NULL DEFAULT false,
    "references" JSONB,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "adminNotes" TEXT,
    "rejectionReason" TEXT,
    "interviewDate" DATETIME,
    "backgroundCheckDate" DATETIME,
    "trainingCompletedAt" DATETIME,
    "convertedToProviderId" TEXT,
    "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" DATETIME,
    "completedAt" DATETIME,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "provider_applications_email_key" ON "provider_applications"("email");

-- CreateIndex
CREATE INDEX "provider_applications_status_idx" ON "provider_applications"("status");

-- CreateIndex
CREATE INDEX "provider_applications_submittedAt_idx" ON "provider_applications"("submittedAt");

-- CreateIndex
CREATE INDEX "provider_applications_email_idx" ON "provider_applications"("email");
