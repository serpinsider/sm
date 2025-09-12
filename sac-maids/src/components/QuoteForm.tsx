'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type AddonsType = {
  organization: boolean;
  insideFridge: boolean;
  insideOven: boolean;
  bedroomBathroomCabinets: boolean;
  insideKitchenCabinets: boolean;
  interiorWindows: boolean;
  microwave: boolean;
  dishes: boolean;
  laundry: boolean;
  hardwood: boolean;
  basementCleaning: boolean;
  petCleaning: boolean;
  wallStainRemoval: boolean;
  baseboardCleaning: boolean;
  officeCleaning: boolean;
  townhouse: boolean;
  extraHour: boolean;
  washerDryer: boolean;
  movingServices: boolean;
  handymanServices: boolean;
};

const cleaningTypes = [
  {
    id: 'standard',
    name: 'Standard Clean',
    description: 'Regular maintenance cleaning',
    price: 'From $99'
  },
  {
    id: 'deep',
    name: 'Deep Clean',
    description: 'Thorough, detailed cleaning',
    price: 'From $149'
  },
  {
    id: 'super',
    name: 'Super Clean',
    description: 'Ultimate deep cleaning service',
    price: 'From $199'
  },
  {
    id: 'moveout',
    name: 'Move Out Clean',
    description: 'Complete move-out cleaning',
    price: 'From $249'
  },
  {
    id: 'post-construction',
    name: 'Post Construction',
    description: 'Post-construction cleanup',
    price: 'From $299'
  }
];

export default function QuoteForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bedrooms: '1',
    bathrooms: '1',
    frequency: 'One Time',
    squareFootage: 'Under 1,000 sqft',
    serviceType: 'standard',
    addons: {
      organization: false,
      insideFridge: false,
      insideOven: false,
      bedroomBathroomCabinets: false,
      insideKitchenCabinets: false,
      interiorWindows: false,
      microwave: false,
      dishes: false,
      laundry: false,
      hardwood: false,
      basementCleaning: false,
      petCleaning: false,
      wallStainRemoval: false,
      baseboardCleaning: false,
      officeCleaning: false,
      townhouse: false,
      extraHour: false,
      washerDryer: false,
      movingServices: false,
      handymanServices: false,
    } as AddonsType
  });

  const handleServiceTypeChange = (type: string) => {
    const resetAddons = {
      organization: false,
      insideFridge: false,
      insideOven: false,
      bedroomBathroomCabinets: false,
      insideKitchenCabinets: false,
      interiorWindows: false,
      microwave: false,
      dishes: false,
      laundry: false,
      hardwood: false,
      basementCleaning: false,
      petCleaning: false,
      wallStainRemoval: false,
      baseboardCleaning: false,
      officeCleaning: false,
      townhouse: false,
      extraHour: false,
      washerDryer: false,
      movingServices: false,
      handymanServices: false,
    };

    const serviceTypeAddons = type === 'deep' ? {
      deepCleaning: true,
      baseboardCleaning: true,
      wallStainRemoval: true
    } : type === 'moveout' ? {
      moveInOut: true,
      bedroomBathroomCabinets: true,
      baseboardCleaning: true,
      wallStainRemoval: true
    } : {};

    setFormData(prev => ({
      ...prev,
      serviceType: type,
      addons: {
        ...resetAddons,
        ...serviceTypeAddons
      }
    }));
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length === 0) return '';
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const isValidEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };

  const isValidPhone = (phone: string) => {
    const numericPhone = phone.replace(/\D/g, '');
    return numericPhone.length === 10;
  };

  const handleSubmit = async () => {
    try {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        alert('Please fill in all required fields');
        return;
      }

      if (!isValidEmail(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }

      if (!isValidPhone(formData.phone)) {
        alert('Please enter a valid phone number');
        return;
      }

      const confirmationNumber = 'BAYSIDE-' + Math.random().toString(36).substring(2, 8).toUpperCase();

      // Create structured data like StepWizard
      const structuredData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        squareFootage: formData.squareFootage,
        serviceType: formData.serviceType,
        frequency: formData.frequency,
        addons: formData.addons,
        confirmationNumber,
        _subject: `Quote Request for Santa Monica Maids from ${formData.firstName} ${formData.lastName} - #${confirmationNumber}`,
      };

      const formspreeResponse = await fetch('https://formspree.io/f/xeoebodr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(structuredData),
      });


      if (!formspreeResponse.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Thank you! We will contact you shortly with a quote.');
      router.push('/');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again or contact us directly.');
    }
  };

  return (
    <div className="w-full max-w-full sm:container mx-auto px-4 pt-48 pb-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/10">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Get a free quote instantly!</h1>
          <p className="text-white/80 mb-6">
            Fill out the form and we&apos;ll send you a detailed quote.
          </p>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  First Name*
                </label>
                <input
                  type="text"
                  placeholder="ex. Jane"
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Last Name*
                </label>
                <input
                  type="text"
                  placeholder="ex. Smith"
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Email*
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className={`w-full p-3 border rounded-lg bg-slate-900/50 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] ${
                      formData.email && !isValidEmail(formData.email) 
                        ? 'border-red-500' 
                        : 'border-white/20'
                    }`}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  {formData.email && !isValidEmail(formData.email) && (
                    <p className="absolute text-red-300 text-sm mt-1">Please enter a valid email address</p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Phone*
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="(916) 680-5200"
                    className={`w-full p-3 border rounded-lg bg-slate-900/50 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] ${
                      formData.phone && !isValidPhone(formData.phone) 
                        ? 'border-red-500' 
                        : 'border-white/20'
                    }`}
                    value={formData.phone}
                    onChange={(e) => {
                      const formatted = formatPhoneNumber(e.target.value);
                      setFormData({ ...formData, phone: formatted });
                    }}
                    maxLength={14}
                  />
                  {formData.phone && !isValidPhone(formData.phone) && (
                    <p className="absolute text-red-300 text-sm mt-1">Please enter a valid phone number</p>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Bedrooms*
                </label>
                <select
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                >
                  <option value="Studio">Studio</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Bathrooms*
                </label>
                <select
                  value={formData.bathrooms}
                  onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                >
                  <option value="1">1 Bathroom</option>
                  <option value="1.5">1.5 Bathrooms</option>
                  <option value="2">2 Bathrooms</option>
                  <option value="2.5">2.5 Bathrooms</option>
                  <option value="3">3 Bathrooms</option>
                  <option value="3.5">3.5 Bathrooms</option>
                  <option value="4">4+ Bathrooms</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Service Frequency*
                </label>
                <select
                  value={formData.frequency}
                  onChange={(e) => setFormData({ ...formData, frequency: e.target.value })}
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                >
                  <option value="One Time">One Time</option>
                  <option value="Weekly">Weekly (Save 10%)</option>
                  <option value="Bi-Weekly">Bi-Weekly (Save 5%)</option>
                  <option value="Monthly">Monthly (Save $10)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Square Footage*
                </label>
                <select
                  value={formData.squareFootage}
                  onChange={(e) => setFormData({ ...formData, squareFootage: e.target.value })}
                  className="w-full p-3 border border-white/20 rounded-lg bg-slate-900/50 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642]"
                >
                  <option value="Under 1,000 sqft">Under 1,000 sqft</option>
                  <option value="1,000-2,000 sqft">1,000-2,000 sqft</option>
                  <option value="3,000+ sqft">3,000+ sqft</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Service Type
              </label>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { id: 'standard', name: 'Standard Clean', description: 'Regular maintenance cleaning' },
                  { id: 'deep', name: 'Deep Clean', description: 'Thorough deep cleaning' },
                  { id: 'moveout', name: 'Move Out Clean', description: 'Complete move-out service' },
                  { id: 'post-construction', name: 'Post Construction', description: 'Post-renovation cleanup' }
                ].map(({ id, name, description }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => handleServiceTypeChange(id)}
                    className={`relative cursor-pointer group ${
                      formData.serviceType === id
                        ? 'ring-2 ring-[rgba(15,23,42,1)] animate-glow border-[0.5px] border-white animate-selected-pulse'
                        : 'ring-1 ring-white/20 hover:ring-2 hover:ring-white/40'
                    } rounded-lg p-6 flex flex-col items-center justify-center text-center transition-all ${
                      formData.serviceType === id ? 'bg-white/40' : 'bg-white/10'
                    } backdrop-blur-sm`}
                    style={formData.serviceType === id ? {boxShadow: '0 0 20px rgba(15, 23, 42, 0.3)'} : {}}
                    onMouseEnter={(e) => {
                      if (formData.serviceType !== id) {
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (formData.serviceType !== id) {
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-base font-medium text-white">{name}</span>
                      <span className="text-sm text-white/70">{description}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Add-ons (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {[
                  { key: 'organization', label: 'Organization', description: 'Organize spaces', image: '/icons/addons/organization.png' },
                  { key: 'insideFridge', label: 'Inside Fridge', description: 'Deep clean fridge', image: '/icons/addons/inside-fridge.png' },
                  { key: 'insideOven', label: 'Inside Oven', description: 'Deep clean oven', image: '/icons/addons/inside-oven.png' },
                  { key: 'bedroomBathroomCabinets', label: 'Cabinet Cleaning', description: 'Clean all cabinets', image: '/icons/addons/cabinets.png' },
                  { key: 'interiorWindows', label: 'Interior Windows', description: 'Clean windows', image: '/icons/addons/blinds.png' },
                  { key: 'microwave', label: 'Microwave', description: 'Clean microwave', image: '/icons/addons/microwave-clean.png' },
                  { key: 'dishes', label: 'Dishes', description: 'Wash dishes', image: '/icons/addons/dishes.png' },
                  { key: 'laundry', label: 'Laundry', description: 'Wash & fold', image: '/icons/addons/laundry.png' },
                  { key: 'hardwood', label: 'Hardwood Care', description: 'Wood treatment', image: '/icons/addons/hardwood.png' },
                  { key: 'basementCleaning', label: 'Basement', description: 'Full service', image: '/icons/addons/basement-cleaning.png' },
                  { key: 'petCleaning', label: 'Pet Cleaning', description: 'Pet hair removal', image: '/icons/addons/pet-cleaning.png' },
                  { key: 'wallStainRemoval', label: 'Wall Stains', description: 'Stain removal', image: '/icons/addons/wall-stain-removal.png' },
                  { key: 'officeCleaning', label: 'Office', description: 'Clean workspace', image: '/icons/addons/office-cleaning.png' },
                  { key: 'washerDryer', label: 'Appliances', description: 'Clean appliances', image: '/icons/addons/washing-machine.png' },
                  { key: 'handymanServices', label: 'Handyman (New)', description: 'Basic repairs', image: '/icons/addons/helmet.png' },
                ].map((addon) => (
                  <label key={addon.key} className="relative cursor-pointer"
                    onMouseEnter={(e) => {
                      if (!formData.addons[addon.key as keyof typeof formData.addons]) {
                        const div = e.currentTarget.querySelector('div');
                        if (div) div.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.2)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!formData.addons[addon.key as keyof typeof formData.addons]) {
                        const div = e.currentTarget.querySelector('div');
                        if (div) div.style.boxShadow = 'none';
                      }
                    }}>
                    <input
                      type="checkbox"
                      checked={formData.addons[addon.key as keyof typeof formData.addons]}
                      onChange={() => {
                        setFormData(prev => ({
                          ...prev,
                          addons: {
                            ...prev.addons,
                            [addon.key]: !prev.addons[addon.key as keyof typeof prev.addons]
                          }
                        }));
                      }}
                      className="sr-only peer"
                    />
                    <div className={`w-full p-3 rounded-lg text-center text-white transition-all backdrop-blur-sm ${
                      formData.addons[addon.key as keyof typeof formData.addons]
                        ? 'ring-2 ring-[rgba(15,23,42,1)] bg-white/40 animate-glow font-semibold border-[0.5px] border-white animate-selected-pulse'
                        : 'ring-1 ring-white/20 bg-white/10 hover:ring-2 hover:ring-white/40'
                    }`} style={formData.addons[addon.key as keyof typeof formData.addons] ? {boxShadow: '0 0 20px rgba(15, 23, 42, 0.3)'} : {}}>
                      <div className="flex flex-col gap-2">
                        <div className="w-8 h-8 mx-auto">
                          <Image
                            src={addon.image}
                            alt={addon.label}
                            width={32}
                            height={32}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-sm font-medium">{addon.label}</div>
                        <div className="text-xs text-white/70">{addon.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <p className="text-xs text-white/60 text-center mb-4">
              By submitting this form, you agree to receive communications from Santa Monica Maids regarding your quote request. We respect your privacy and will never share your information.
            </p>

            <button
              onClick={handleSubmit}
              disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !isValidEmail(formData.email) || !isValidPhone(formData.phone)}
              className="button-quaternary w-full"
            >
              Submit Quote Request
            </button>

            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-[#968642]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-white/80">4.9 (500+ Reviews)</span>
              </div>
              <div className="text-sm text-white/80">
                <span className="font-semibold">5,000+</span> Homes Cleaned
              </div>
            </div>

            <p className="text-sm text-white/60 text-center mt-4">
              We&apos;ll contact you shortly with your personalized quote!
            </p>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-white/10">


          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Quote Summary</h3>
              <div className="space-y-4">
                {formData.firstName && formData.lastName && (
                  <div>
                    <span className="text-base font-semibold text-white">Name:</span>
                    <p className="text-base text-white/80">{formData.firstName} {formData.lastName}</p>
                  </div>
                )}
                {formData.email && (
                  <div>
                    <span className="text-base font-semibold text-white">Email:</span>
                    <p className="text-base text-white/80">{formData.email}</p>
                  </div>
                )}
                {formData.phone && (
                  <div>
                    <span className="text-base font-semibold text-white">Phone:</span>
                    <p className="text-base text-white/80">{formData.phone}</p>
                  </div>
                )}
                <div>
                  <span className="text-base font-semibold text-white">Property Size:</span>
                  <p className="text-base text-white/80">{formData.bedrooms} Bedroom{formData.bedrooms !== '1' && 's'}, {formData.bathrooms} Bathroom{formData.bathrooms !== '1' && 's'}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-white">Frequency:</span>
                  <p className="text-base text-white/80">{formData.frequency}</p>
                </div>
                <div>
                  <span className="text-base font-semibold text-white">Service Type:</span>
                  <p className="text-base text-white/80">
                    {cleaningTypes.find(type => type.id === formData.serviceType)?.name}
                  </p>
                </div>
                <div>
                  <span className="text-base font-semibold text-white">Selected Add-ons:</span>
                  <div className="mt-1">
                    {Object.entries(formData.addons).some(([, value]) => value) ? (
                      <ul className="list-disc list-inside text-base text-white/80">
                        {Object.entries(formData.addons).map(([key, value]) => {
                          if (value) {
                            const addon = [
                              { key: 'organization', label: 'Organization' },
                              { key: 'insideFridge', label: 'Inside Fridge' },
                              { key: 'insideOven', label: 'Inside Oven' },
                              { key: 'bedroomBathroomCabinets', label: 'Cabinet Cleaning' },
                              { key: 'interiorWindows', label: 'Interior Windows' },
                              { key: 'microwave', label: 'Microwave' },
                              { key: 'dishes', label: 'Dishes' },
                              { key: 'laundry', label: 'Laundry' },
                              { key: 'hardwood', label: 'Hardwood Care' },
                              { key: 'basementCleaning', label: 'Basement Cleaning' },
                              { key: 'petCleaning', label: 'Pet Cleaning' },
                              { key: 'wallStainRemoval', label: 'Wall Stain Removal' },
                              { key: 'officeCleaning', label: 'Office Cleaning' },
                              { key: 'washerDryer', label: 'Appliance Cleaning' },
                              { key: 'movingServices', label: 'Moving Services (New)' },
                              { key: 'handymanServices', label: 'Handyman (New)' }
                            ].find(addon => addon.key === key)?.label;
                            return addon && <li key={key}>{addon}</li>;
                          }
                          return null;
                        })}
                      </ul>
                    ) : (
                      <p className="text-white/80">No add-ons selected</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <h3 className="text-xl font-serif font-bold mb-4 text-white">Need Help?</h3>
              <div className="space-y-6">
                <div className="space-y-3">
                  <a 
                    href="tel:+19166805200" 
                    className="flex items-center space-x-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(916) 680-5200</span>
                  </a>
                  <a 
                    href="sms:+19166805200" 
                    className="flex items-center space-x-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Text us</span>
                  </a>
                  <a 
                    href="mailto:hello@sacmaids.com" 
                    className="flex items-center space-x-3 text-base text-white/80 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>hello@pinemaids.com</span>
                  </a>
                </div>

                <div className="space-y-4">
                  <h4 className="text-base font-semibold text-white">Frequently Asked Questions</h4>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">What times are available?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        We have flexible scheduling with plenty of availability.<br />
                        Just reach out and we&apos;ll find a time that works for you.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">What areas do you serve?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        We serve Santa Monica, Venice, Brentwood, Pacific Palisades, and Marina del Rey.<br />
                        Contact us to confirm service in your area.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">What products do you use?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        We use eco-friendly, professional-grade cleaning products<br />
                        that are safe for your home and family.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">Standard vs Deep Clean?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Standard is perfect for regular maintenance, while Deep Clean<br />
                        includes extras like baseboards, door frames, and detailed<br />
                        attention to buildup.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">How long is a Deep Clean?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Deep Cleans typically take 25-50% longer than Standard<br />
                        Cleans to ensure thorough attention to detail.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">How do we pay?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Payment is collected after service completion via card or Zelle.<br />
                        We ensure you&apos;re completely satisfied before processing payment.
                      </p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm font-medium text-white/90">Are there discounts for regular service?</p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        Yes! Save 10% with weekly service, 5% with bi-weekly,<br />
                        or $10 off monthly cleanings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
