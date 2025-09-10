-- CreateTable
CREATE TABLE "automation_triggers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "phone" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'CUSTOMER',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "lastLoginAt" DATETIME
);

-- CreateTable
CREATE TABLE "leads" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "bedrooms" TEXT NOT NULL,
    "bathrooms" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "squareFootage" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "addons" JSONB NOT NULL,
    "basePrice" REAL,
    "addonsTotal" REAL,
    "finalPrice" REAL,
    "status" TEXT NOT NULL DEFAULT 'NEW',
    "customBookingLink" TEXT NOT NULL,
    "confirmationNumber" TEXT NOT NULL,
    "notes" TEXT,
    "source" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "convertedAt" DATETIME
);

-- CreateTable
CREATE TABLE "quote_history" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "leadId" TEXT NOT NULL,
    "serviceType" TEXT NOT NULL,
    "bedrooms" TEXT NOT NULL,
    "bathrooms" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "squareFootage" TEXT NOT NULL,
    "addons" JSONB NOT NULL,
    "basePrice" REAL NOT NULL,
    "addonsTotal" REAL NOT NULL,
    "finalPrice" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quote_history_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "leadId" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "addresses" JSONB,
    "preferences" JSONB,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "customers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "customers_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "providers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "areas" JSONB NOT NULL,
    "availability" JSONB NOT NULL,
    "rating" REAL DEFAULT 5.0,
    "totalJobs" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "providers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "bookings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "providerId" TEXT,
    "serviceType" TEXT NOT NULL,
    "serviceDate" DATETIME NOT NULL,
    "serviceTime" TEXT NOT NULL,
    "address" JSONB NOT NULL,
    "addons" JSONB NOT NULL,
    "estimatedPrice" REAL,
    "finalPrice" REAL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "notes" TEXT,
    "customerNotes" TEXT,
    "providerNotes" TEXT,
    "completedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "bookings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "bookings_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "providers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "booking_applications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookingId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "message" TEXT,
    "estimatedTime" TEXT,
    "appliedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    CONSTRAINT "booking_applications_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "booking_applications_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "providers" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "calendar_events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bookingId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "startTime" DATETIME NOT NULL,
    "endTime" DATETIME NOT NULL,
    "allDay" BOOLEAN NOT NULL DEFAULT false,
    "color" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "calendar_events_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "automations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "trigger" TEXT NOT NULL,
    "conditions" JSONB NOT NULL,
    "actions" JSONB NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "automation_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "automationId" TEXT NOT NULL,
    "leadId" TEXT,
    "bookingId" TEXT,
    "userId" TEXT,
    "status" TEXT NOT NULL,
    "error" TEXT,
    "data" JSONB,
    "executedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "automation_logs_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "automations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "automation_logs_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "automation_logs_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "communication_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "to" TEXT NOT NULL,
    "from" TEXT NOT NULL,
    "subject" TEXT,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "externalId" TEXT,
    "sentAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "automation_triggers_name_key" ON "automation_triggers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_phone_idx" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_role_idx" ON "users"("role");

-- CreateIndex
CREATE INDEX "users_active_idx" ON "users"("active");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "users"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "leads_customBookingLink_key" ON "leads"("customBookingLink");

-- CreateIndex
CREATE UNIQUE INDEX "leads_confirmationNumber_key" ON "leads"("confirmationNumber");

-- CreateIndex
CREATE INDEX "leads_email_idx" ON "leads"("email");

-- CreateIndex
CREATE INDEX "leads_phone_idx" ON "leads"("phone");

-- CreateIndex
CREATE INDEX "leads_status_idx" ON "leads"("status");

-- CreateIndex
CREATE INDEX "leads_serviceType_idx" ON "leads"("serviceType");

-- CreateIndex
CREATE INDEX "leads_createdAt_idx" ON "leads"("createdAt");

-- CreateIndex
CREATE INDEX "leads_convertedAt_idx" ON "leads"("convertedAt");

-- CreateIndex
CREATE INDEX "leads_source_idx" ON "leads"("source");

-- CreateIndex
CREATE INDEX "quote_history_leadId_idx" ON "quote_history"("leadId");

-- CreateIndex
CREATE INDEX "quote_history_createdAt_idx" ON "quote_history"("createdAt");

-- CreateIndex
CREATE INDEX "quote_history_serviceType_idx" ON "quote_history"("serviceType");

-- CreateIndex
CREATE UNIQUE INDEX "customers_userId_key" ON "customers"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_leadId_key" ON "customers"("leadId");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_key" ON "customers"("email");

-- CreateIndex
CREATE UNIQUE INDEX "customers_phone_key" ON "customers"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "customers_stripeCustomerId_key" ON "customers"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "customers_email_idx" ON "customers"("email");

-- CreateIndex
CREATE INDEX "customers_phone_idx" ON "customers"("phone");

-- CreateIndex
CREATE INDEX "customers_stripeCustomerId_idx" ON "customers"("stripeCustomerId");

-- CreateIndex
CREATE INDEX "customers_createdAt_idx" ON "customers"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "providers_userId_key" ON "providers"("userId");

-- CreateIndex
CREATE INDEX "providers_active_idx" ON "providers"("active");

-- CreateIndex
CREATE INDEX "providers_rating_idx" ON "providers"("rating");

-- CreateIndex
CREATE INDEX "providers_totalJobs_idx" ON "providers"("totalJobs");

-- CreateIndex
CREATE INDEX "providers_createdAt_idx" ON "providers"("createdAt");

-- CreateIndex
CREATE INDEX "bookings_customerId_idx" ON "bookings"("customerId");

-- CreateIndex
CREATE INDEX "bookings_providerId_idx" ON "bookings"("providerId");

-- CreateIndex
CREATE INDEX "bookings_serviceType_idx" ON "bookings"("serviceType");

-- CreateIndex
CREATE INDEX "bookings_serviceDate_idx" ON "bookings"("serviceDate");

-- CreateIndex
CREATE INDEX "bookings_status_idx" ON "bookings"("status");

-- CreateIndex
CREATE INDEX "bookings_createdAt_idx" ON "bookings"("createdAt");

-- CreateIndex
CREATE INDEX "bookings_completedAt_idx" ON "bookings"("completedAt");

-- CreateIndex
CREATE UNIQUE INDEX "booking_applications_bookingId_providerId_key" ON "booking_applications"("bookingId", "providerId");
