import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database with test users...');

  // Hash password for all test users (using "password123" for simplicity)
  const hashedPassword = await bcrypt.hash('password123', 12);

  // Create Admin User
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@pinemaids.com' },
    update: {},
    create: {
      email: 'admin@pinemaids.com',
      firstName: 'Admin',
      lastName: 'User',
      password: hashedPassword,
      role: 'ADMIN',
      active: true,
    },
  });

  console.log('✅ Created Admin user:', adminUser.email);

  // Create Provider User
  const providerUser = await prisma.user.upsert({
    where: { email: 'provider@pinemaids.com' },
    update: {},
    create: {
      email: 'provider@pinemaids.com',
      firstName: 'Sarah',
      lastName: 'Provider',
      password: hashedPassword,
      role: 'PROVIDER',
      active: true,
    },
  });

  // Create Provider Profile
  await prisma.provider.upsert({
    where: { userId: providerUser.id },
    update: {},
    create: {
      userId: providerUser.id,
      areas: ['22201', '22202', '22314'], // Arlington, Alexandria areas
      availability: {
        monday: [{ start: '08:00', end: '17:00' }],
        tuesday: [{ start: '08:00', end: '17:00' }],
        wednesday: [{ start: '08:00', end: '17:00' }],
        thursday: [{ start: '08:00', end: '17:00' }],
        friday: [{ start: '08:00', end: '17:00' }],
        saturday: [{ start: '09:00', end: '15:00' }],
      },
      rating: 4.8,
      totalJobs: 150,
      active: true,
    },
  });

  console.log('✅ Created Provider user:', providerUser.email);

  // Create Customer User
  const customerUser = await prisma.user.upsert({
    where: { email: 'customer@pinemaids.com' },
    update: {},
    create: {
      email: 'customer@pinemaids.com',
      firstName: 'John',
      lastName: 'Customer',
      password: hashedPassword,
      role: 'CUSTOMER',
      active: true,
    },
  });

  // Create Customer Profile
  await prisma.customer.upsert({
    where: { userId: customerUser.id },
    update: {},
    create: {
      userId: customerUser.id,
      email: customerUser.email!,
      phone: '+1-555-123-4567',
      addresses: [
        {
          street: '123 Main Street',
          city: 'Arlington',
          state: 'VA',
          zip: '22201'
        }
      ],
      preferences: {
        serviceInstructions: 'Key is under the doormat. Please be gentle with antique furniture.',
        emailNotifications: true,
        smsNotifications: true
      },
      notes: 'Regular customer since 2023. Prefers eco-friendly products.',
    },
  });

  console.log('✅ Created Customer user:', customerUser.email);

  // Create some sample leads for testing
  const sampleLead = await prisma.lead.upsert({
    where: { confirmationNumber: 'PINE-ABC123' },
    update: {},
    create: {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      phone: '+1-555-987-6543',
      bedrooms: '3',
      bathrooms: '2',
      frequency: 'Weekly',
      squareFootage: '1,500 sqft',
      serviceType: 'STANDARD',
      addons: {
        insideFridge: true,
        interiorWindows: true
      },
      basePrice: 120,
      addonsTotal: 70,
      finalPrice: 190,
      status: 'NEW',
      customBookingLink: '/book/sample-lead-123',
      confirmationNumber: 'PINE-ABC123',
      notes: 'Interested in weekly service starting next month',
      source: 'website'
    }
  });

  console.log('✅ Created sample lead:', sampleLead.email);

  // Get the customer record (not the user record)
  const customerRecord = await prisma.customer.findUnique({
    where: { userId: customerUser.id }
  });

  // Get the provider record (not the user record)  
  const providerRecord = await prisma.provider.findUnique({
    where: { userId: providerUser.id }
  });

  // Create sample booking
  const sampleBooking = await prisma.booking.create({
    data: {
      customerId: customerRecord!.id,
      providerId: providerRecord!.id,
      serviceType: 'STANDARD',
      serviceDate: new Date('2024-02-15T10:00:00Z'),
      serviceTime: '10:00 AM - 1:00 PM',
      address: {
        street: '123 Main Street',
        city: 'Arlington',
        state: 'VA',
        zip: '22201'
      },
      addons: ['Interior Windows', 'Inside Fridge'],
      estimatedPrice: 150,
      finalPrice: 150,
      status: 'CONFIRMED',
      notes: 'First-time customer booking',
      customerNotes: 'Please ring doorbell twice'
    }
  });

  console.log('✅ Created sample booking:', sampleBooking.id);

  console.log('\n🎉 Database seeded successfully!');
  console.log('\n📋 Test Login Credentials:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👑 ADMIN (CRM Access):');
  console.log('   Email: admin@pinemaids.com');
  console.log('   Password: password123');
  console.log('   URL: /crm');
  console.log('');
  console.log('🧹 PROVIDER:');
  console.log('   Email: provider@pinemaids.com');
  console.log('   Password: password123');
  console.log('   URL: /provider');
  console.log('');
  console.log('👤 CUSTOMER:');
  console.log('   Email: customer@pinemaids.com');
  console.log('   Password: password123');
  console.log('   URL: /account');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
