import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📱 Setting up phone-based users with specific roles...');

  // 1. Make Eric's number (8582579506) an ADMIN
  const adminUser = await prisma.user.upsert({
    where: { phone: '+18582579506' },
    update: { 
      role: 'ADMIN',
      firstName: 'Eric',
      lastName: 'Admin'
    },
    create: {
      phone: '+18582579506',
      firstName: 'Eric',
      lastName: 'Admin',
      role: 'ADMIN',
      active: true,
      phoneVerified: true
    },
  });

  console.log('✅ Updated Eric to ADMIN:', adminUser.phone);

  // 2. Create Provider user (828) 469-0800
  const providerUser = await prisma.user.upsert({
    where: { phone: '+18284690800' },
    update: {},
    create: {
      phone: '+18284690800',
      firstName: 'Test',
      lastName: 'Provider',
      role: 'PROVIDER',
      active: true,
      phoneVerified: false
    },
  });

  // Create provider profile
  await prisma.provider.upsert({
    where: { userId: providerUser.id },
    update: {},
    create: {
      userId: providerUser.id,
      areas: ['22201', '22202', '90210'], // Service areas
      availability: {
        monday: [{ start: '08:00', end: '18:00' }],
        tuesday: [{ start: '08:00', end: '18:00' }],
        wednesday: [{ start: '08:00', end: '18:00' }],
        thursday: [{ start: '08:00', end: '18:00' }],
        friday: [{ start: '08:00', end: '18:00' }],
        saturday: [{ start: '09:00', end: '16:00' }],
      },
      rating: 4.9,
      totalJobs: 75,
      active: true,
    },
  });

  console.log('✅ Created Provider user:', providerUser.phone);

  // 3. Create Customer user (727) 820-1230
  const customerUser = await prisma.user.upsert({
    where: { phone: '+17278201230' },
    update: {},
    create: {
      phone: '+17278201230',
      firstName: 'Test',
      lastName: 'Customer',
      role: 'CUSTOMER',
      active: true,
      phoneVerified: false
    },
  });

  // Create customer profile
  await prisma.customer.upsert({
    where: { userId: customerUser.id },
    update: {},
    create: {
      userId: customerUser.id,
      email: 'test.customer.727@example.com',
      phone: '+17278201230',
      addresses: [
        {
          street: '789 Customer Lane',
          city: 'Tampa',
          state: 'FL',
          zip: '33701'
        }
      ],
      preferences: {
        serviceInstructions: 'Test customer for phone login',
        emailNotifications: true,
        smsNotifications: true
      },
      notes: 'Phone-based test customer',
    },
  });

  console.log('✅ Created Customer user:', customerUser.phone);

  console.log('\n📱 Phone Login Test Setup Complete!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('👑 ADMIN (Eric):');
  console.log('   Phone: +1 (858) 257-9506');
  console.log('   Role: ADMIN (can view all dashboards)');
  console.log('');
  console.log('🧹 PROVIDER:');
  console.log('   Phone: +1 (828) 469-0800');
  console.log('   Role: PROVIDER');
  console.log('');
  console.log('👤 CUSTOMER:');
  console.log('   Phone: +1 (727) 820-1230');
  console.log('   Role: CUSTOMER');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('🔗 Test URL: /auth/phone-login');
  console.log('📱 All numbers will receive real SMS via OpenPhone!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Setup failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
