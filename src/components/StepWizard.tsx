'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface FormData {
  // Step 1 - Location
  zipCode: string;
  
  // Step 2 - Property & Service Details
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bedrooms: string;
  bathrooms: string;
  squareFootage: string;
  serviceType: string;
  frequency: string;
  
  // Step 3 - Add-ons (Boolean Object)
  addons: {
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
}

interface StepWizardProps {
  onFormExpand?: (expanded: boolean, immediate?: boolean) => void;
}

export default function StepWizard({ onFormExpand }: StepWizardProps = {}) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string>('');
  const prevExpandedStateRef = useRef<boolean | undefined>(undefined);
  
  const [formData, setFormData] = useState<FormData>({
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bedrooms: '2',
    bathrooms: '1',
    squareFootage: 'Under 1,000 sqft',
    serviceType: '',
    frequency: 'Once',
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
    }
  });



  const addOnOptions = [
    { key: 'organization', label: 'Organization', icon: 'organization.svg' },
    { key: 'insideFridge', label: 'Inside Fridge', icon: 'fridge.svg' },
    { key: 'insideOven', label: 'Inside Oven', icon: 'oven.svg' },
    { key: 'bedroomBathroomCabinets', label: 'Bedroom & Bathroom Cabinets', icon: 'cabinets.svg' },
    { key: 'insideKitchenCabinets', label: 'Inside Kitchen Cabinets', icon: 'cabinets.svg' },
    { key: 'interiorWindows', label: 'Interior Windows', icon: 'windows.svg' },
    { key: 'microwave', label: 'Microwave', icon: 'microwave.svg' },
    { key: 'dishes', label: 'Dishes', icon: 'dishes.svg' },
    { key: 'laundry', label: 'Laundry', icon: 'laundry.svg' },
    { key: 'hardwood', label: 'Hardwood Care', icon: 'hardwood.svg' },
    { key: 'basementCleaning', label: 'Basement Cleaning', icon: 'basement.svg' },
    { key: 'petCleaning', label: 'Pet Hair Cleaning', icon: 'pet.svg' },
    { key: 'wallStainRemoval', label: 'Wall Stain Removal', icon: 'wall-stain.svg' },
    { key: 'baseboardCleaning', label: 'Baseboard Cleaning', icon: 'baseboard.svg' },
    { key: 'officeCleaning', label: 'Office Cleaning', icon: 'office.svg' },
    { key: 'townhouse', label: 'Townhouse Fee', icon: 'townhouse.svg' },
    { key: 'extraHour', label: 'Extra Hour', icon: 'extra-hour.svg' },
    { key: 'washerDryer', label: 'Washer/Dryer Cleaning', icon: 'washer-dryer.svg' },
    { key: 'movingServices', label: 'Moving Services', icon: 'moving.svg' },
    { key: 'handymanServices', label: 'Handyman Services', icon: 'handyman.svg' },
  ];

  // Initialize mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    return cleanPhone.length >= 10 && phoneRegex.test(cleanPhone);
  };

  const validateZipCode = (zipCode: string): boolean => {
    const zipRegex = /^\d{5}(-\d{4})?$/;
    return zipRegex.test(zipCode);
  };

  const validateStep = (step: number): Record<string, string> => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'Zip code is required';
      } else if (!validateZipCode(formData.zipCode)) {
        newErrors.zipCode = 'Please enter a valid zip code';
      }
    }

    if (step === 2) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number';
      }
      if (!formData.serviceType) {
        newErrors.serviceType = 'Please select a service type';
      }
    }

    return newErrors;
  };

  // Notify parent when form expands beyond step 1
  useEffect(() => {
    if (onFormExpand && isMounted) {
      const isCurrentlyExpanded = currentStep > 1;
      if (typeof prevExpandedStateRef.current === 'undefined' || prevExpandedStateRef.current !== isCurrentlyExpanded) {
        prevExpandedStateRef.current = isCurrentlyExpanded;
        onFormExpand(isCurrentlyExpanded, true); // immediate=true for step changes
      }
    }
  }, [currentStep, onFormExpand, isMounted]);

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Real-time validation
    if (field === 'email') {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      } else {
        setErrors(prev => ({ ...prev, email: '' }));
      }
    } else if (field === 'phone') {
      if (value && !validatePhone(value)) {
        setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
      } else {
        setErrors(prev => ({ ...prev, phone: '' }));
      }
    } else {
      // Clear error for other fields when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
      }
    }
    
    // Clear submit error when user makes changes
    if (submitError) {
      setSubmitError('');
    }
  };

  const toggleAddOn = (addonKey: string) => {
    setFormData(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        [addonKey]: !prev.addons[addonKey as keyof typeof prev.addons]
      }
    }));
  };



  const nextStep = () => {
    const stepErrors = validateStep(currentStep);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    
    if (currentStep < 6) {
      setErrors({});
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // If going back to step 1, notify parent to collapse form and scroll to hero
      if (currentStep - 1 === 1 && onFormExpand) {
        onFormExpand(false, true);
        // Scroll to top of hero section
        setTimeout(() => {
          const heroElement = document.querySelector('#hero') || document.querySelector('main');
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  };

  const handleSubmit = async (retryCount = 0) => {
    // Validate before submitting
    const stepErrors = validateStep(2);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');
    setErrors({});

    try {
      const confirmationNumber = 'BAYSIDE-' + Math.random().toString(36).substring(2, 8).toUpperCase();

      // Flatten the form data but keep addons as one grouped object
      const flattenedData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        zipCode: formData.zipCode,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        squareFootage: formData.squareFootage,
        serviceType: formData.serviceType,
        frequency: formData.frequency,
        addons: formData.addons,
        confirmationNumber,
        _subject: `Quote Request for Sac Maids from ${formData.firstName} ${formData.lastName} - #${confirmationNumber}`,
      };

      const response = await fetch('https://formspree.io/f/xeoebodr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(flattenedData),
      });
      
      if (response.ok) {
        setCurrentStep(4); // Success page
        // Scroll to top to show confirmation
        setTimeout(() => {
          const heroElement = document.querySelector('#hero') || document.querySelector('main');
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Retry logic for network errors
      if (retryCount < 2 && (error instanceof TypeError || error.message.includes('fetch'))) {
        setTimeout(() => handleSubmit(retryCount + 1), 1000);
        return;
      }
      
      // Show user-friendly error message
      if (error.message.includes('fetch') || error instanceof TypeError) {
        setSubmitError('Network error. Please check your connection and try again.');
      } else if (error.message.includes('400')) {
        setSubmitError('Please check your information and try again.');
      } else {
        setSubmitError('Something went wrong. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-sm sm:text-base text-white/70 mb-2">
                Let&apos;s see if we serve your area!
              </h3>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Zip Code
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="Enter your zip code"
                maxLength={5}
                className={`w-full px-3 py-3 border rounded-lg bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-[#0C6F47] focus:border-white backdrop-blur-sm ${
                  errors.zipCode ? 'border-red-400 ring-1 ring-red-400' : 'border-white/30'
                }`}
                required
              />
              {errors.zipCode && (
                <p className="mt-1 text-sm text-red-300">{errors.zipCode}</p>
              )}
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Tell us about your cleaning needs
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  First Name*
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="ex. Jane"
                  className={`w-full p-3 border rounded-lg bg-white/10 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm ${
                    errors.firstName ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'
                  }`}
                  required
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-300">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Last Name*
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="ex. Smith"
                  className={`w-full p-3 border rounded-lg bg-white/10 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm ${
                    errors.lastName ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'
                  }`}
                  required
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-300">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Email*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="email@example.com"
                  className={`w-full p-3 border rounded-lg bg-white/10 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm ${
                    errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-300">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Phone*
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                  placeholder="(916) 680-5200"
                  className={`w-full p-3 border rounded-lg bg-white/10 text-white placeholder-white/50 focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm ${
                    errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-white/20'
                  }`}
                  required
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-300">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2 text-white">
                  Bedrooms*
                </label>
                <select
                  value={formData.bedrooms}
                  onChange={(e) => updateFormData('bedrooms', e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/10 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm"
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
                  onChange={(e) => updateFormData('bathrooms', e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/10 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm"
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
                  onChange={(e) => updateFormData('frequency', e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/10 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm"
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
                  onChange={(e) => updateFormData('squareFootage', e.target.value)}
                  className="w-full p-3 border border-white/20 rounded-lg bg-white/10 text-white appearance-none focus:border-[#968642] focus:ring-1 focus:ring-[#968642] backdrop-blur-sm"
                >
                  <option value="Under 1,000 sqft">Under 1,000 sqft</option>
                  <option value="1,000-2,000 sqft">1,000-2,000 sqft</option>
                  <option value="3,000+ sqft">3,000+ sqft</option>
                </select>
              </div>
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Service Type*
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
                    onClick={() => updateFormData('serviceType', id)}
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
              {errors.serviceType && (
                <p className="mt-2 text-sm text-red-300">{errors.serviceType}</p>
              )}
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-white">
                Add-ons (Optional)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {[
                  { key: 'organization', label: 'Organization', description: 'Organize spaces' },
                  { key: 'insideFridge', label: 'Inside Fridge', description: 'Deep clean fridge' },
                  { key: 'insideOven', label: 'Inside Oven', description: 'Deep clean oven' },
                  { key: 'bedroomBathroomCabinets', label: 'Cabinet Cleaning', description: 'Clean all cabinets' },
                  { key: 'interiorWindows', label: 'Interior Windows', description: 'Clean windows' },
                  { key: 'microwave', label: 'Microwave', description: 'Clean microwave' },
                  { key: 'dishes', label: 'Dishes', description: 'Wash dishes' },
                  { key: 'laundry', label: 'Laundry', description: 'Wash & fold' },
                  { key: 'hardwood', label: 'Hardwood Care', description: 'Wood treatment' },
                  { key: 'basementCleaning', label: 'Basement', description: 'Full service' },
                  { key: 'petCleaning', label: 'Pet Cleaning', description: 'Pet hair removal' },
                  { key: 'wallStainRemoval', label: 'Wall Stains', description: 'Stain removal' },
                  { key: 'officeCleaning', label: 'Office', description: 'Clean workspace' },
                  { key: 'washerDryer', label: 'Appliances', description: 'Clean appliances' },
                  { key: 'handymanServices', label: 'Handyman (New)', description: 'Basic repairs' },
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
                      onChange={() => toggleAddOn(addon.key)}
                      className="sr-only peer"
                    />
                    <div className={`w-full p-3 rounded-lg text-center text-white transition-all backdrop-blur-sm ${
                      formData.addons[addon.key as keyof typeof formData.addons]
                        ? 'ring-2 ring-[rgba(15,23,42,1)] bg-white/40 animate-glow font-semibold border-[0.5px] border-white animate-selected-pulse'
                        : 'ring-1 ring-white/20 bg-white/10 hover:ring-2 hover:ring-white/40'
                    }`} style={formData.addons[addon.key as keyof typeof formData.addons] ? {boxShadow: '0 0 20px rgba(15, 23, 42, 0.3)'} : {}}>
                      <div className="flex flex-col gap-1">
                        <div className="text-sm font-medium">{addon.label}</div>
                        <div className="text-xs text-white/70">{addon.description}</div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Error Display */}
            {submitError && (
              <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 mb-4">
                <p className="text-red-300 text-sm text-center">{submitError}</p>
              </div>
            )}

            <p className="text-xs text-white/60 text-center mb-4">
              By submitting this form, you agree to receive communications from Sac Maids regarding your quote request. We respect your privacy and will never share your information.
            </p>
          </div>
        );
        

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Any add-ons?
              </h3>
              <p className="text-white/80 text-sm">Select any additional services (optional)</p>
            </div>
            
            {/* Add-ons */}
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {addOnOptions.map((addOn) => (
                  <label key={addOn.key} className="relative cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.addons[addOn.key as keyof typeof formData.addons]}
                      onChange={() => toggleAddOn(addOn.key)}
                      className="sr-only peer"
                    />
                    <div className="w-full p-4 border-2 border-white/30 rounded-lg text-center text-white bg-white/10 hover:bg-white/20 transition-all peer-checked:border-[#0C6F47] peer-checked:bg-[#0C6F47]/20 peer-checked:text-white peer-checked:font-semibold backdrop-blur-sm">
                      <div className="w-12 h-12 mx-auto mb-2">
                        <Image
                          src={`/icons/addons/${addOn.icon}`}
                          alt={addOn.label}
                          width={48}
                          height={48}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="text-xs">{addOn.label}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-serif font-bold text-[#CEC28D] mb-4">
              Your Request Has Been Submitted!
            </h3>
            <p className="text-white/80 mb-6">
              A member of our Tampa Bay team will reach out shortly.
            </p>
            <div className="rounded-lg p-4">
              <p className="text-white text-sm">
                <strong>What&apos;s next?</strong><br />
                • You&apos;ll receive a quote by text<br />
                • We&apos;ll answer any questions you have<br />
                • We&apos;ll confirm your details and help you book
              </p>
            </div>
            <button
              onClick={() => {
                window.location.href = '/';
              }}
              className="w-full bg-white/30 text-white py-3 rounded-lg hover:bg-white/40 font-semibold transition-colors"
            >
              Back to Home Page
            </button>
          </div>
        );

    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.zipCode;
      case 2:
        return formData.bedrooms && formData.bathrooms && formData.serviceType && formData.frequency && formData.squareFootage && formData.firstName && formData.lastName && formData.email && formData.phone;
      case 3:
        return true; // Addons are optional
      default:
        return false;
    }
  };

  if (currentStep === 4) {
    return (
      <div className="w-full">
        {renderStep()}
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2 drop-shadow-lg">
          Get a free quote instantly!
        </h2>
      </div>
      


      {/* Step Content */}
      {renderStep()}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
            currentStep === 1
              ? 'bg-white/20 text-white/50 cursor-not-allowed'
              : 'bg-white/30 text-white hover:bg-white/40'
          }`}
        >
          Back
        </button>
        
        {currentStep === 2 ? (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || isSubmitting}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
              canProceed() && !isSubmitting
                ? 'bg-[#0C6F47] text-white hover:bg-[#0a5a3a]'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Request'
            )}
          </button>
        ) : (
          <button
            onClick={nextStep}
            disabled={!canProceed()}
            className={`flex-1 py-3 rounded-lg font-semibold transition-colors ${
              canProceed()
                ? 'bg-[#0C6F47] text-white hover:bg-[#0a5a3a]'
                : 'bg-white/20 text-white/50 cursor-not-allowed'
            }`}
          >
            Next
          </button>
        )}
      </div>

      {/* Reviews Section - Only show on step 2 (after buttons) */}
      {currentStep === 2 && (
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
      )}
    </div>
  );
}
 



