import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('📱 Creating phone-based customer for magic link testing...');

  // Create a customer with just phone number (like real booking flow)
  const phoneCustomer = await prisma.user.upsert({
    where: { phone: '+18582579506' },
    update: {},
    create: {
      phone: '+18582579506',
      firstName: 'Phone',
      lastName: 'Customer',
      role: 'CUSTOMER',
      active: true,
      phoneVerified: false
    },
  });

  // Create customer profile
  await prisma.customer.upsert({
    where: { userId: phoneCustomer.id },
    update: {},
    create: {
      userId: phoneCustomer.id,
      email: 'eric.phone.test@example.com', // Optional email
      phone: '+18582579506',
      addresses: [
        {
          street: '456 Phone Street',
          city: 'Mobile',
          state: 'CA',
          zip: '90210'
        }
      ],
      preferences: {
        serviceInstructions: 'Customer created via phone booking',
        emailNotifications: false,
        smsNotifications: true
      },
      notes: 'Phone-only customer for magic link testing',
    },
  });

  console.log('✅ Created phone customer:', phoneCustomer.phone);
  console.log('\n📱 Test Magic Link Login:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('📞 PHONE CUSTOMER:');
  console.log('   Phone: +1 (858) 257-9506');
  console.log('   URL: /auth/phone-login');
  console.log('   Method: Enter phone → Get SMS → Tap link');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Phone customer creation failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
