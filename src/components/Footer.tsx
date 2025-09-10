import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="md:col-span-1">
            <Image
              src="/logo.png"
              alt="Sac Maids"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <div className="space-y-2 text-sm">
              <p className="text-white/80">(916) 680-5200</p>
              <p className="text-white/80">hello@sacmaids.com</p>
              <p className="text-white/80">1225 J Street, Sacramento, CA 95814</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Services</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/#services" className="text-white/70 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/#areas" className="text-white/70 hover:text-white transition-colors">Areas We Serve</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Company</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/#reviews" className="text-white/70 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link href="/#faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-base font-semibold mb-3 text-white">Legal</h4>
            <ul className="space-y-1 text-sm">
              <li><Link href="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund" className="text-white/70 hover:text-white transition-colors">Refund Policy</Link></li>
              <li><Link href="/sitemap.xml" className="text-white/70 hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © {currentYear} Sac Maids. All rights reserved.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}