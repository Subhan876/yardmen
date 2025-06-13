import { Facebook, Twitter, Instagram, Youtube, Leaf } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-forest-green text-ivory">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8 text-gold" />
              <span className="text-2xl font-lora font-bold">Yard Men</span>
            </div>
            <p className="text-ivory/70 mb-2">
              We build it right, right from the start.
            </p>
            <p className="text-ivory/60 text-sm mb-6">
              Transforming outdoor spaces with quality craftsmanship since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-ivory/70 hover:text-gold transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-ivory/70 hover:text-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="#gallery" className="text-ivory/70 hover:text-gold transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#about" className="text-ivory/70 hover:text-gold transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-ivory/70 hover:text-gold transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Fences</a>
              </li>
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Decks</a>
              </li>
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Concrete Work</a>
              </li>
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Pavers & Gazebos</a>
              </li>
              <li>
                <a href="#services" className="text-ivory/70 hover:text-gold transition-colors">Sod Installation</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="text-ivory/70 mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+15873250786" className="hover:text-gold transition-colors">(587) 325-0786</a>
              </p>
              <p className="text-ivory/70">
                <strong>Email:</strong>{' '}
                <a href="mailto:yardmenltd@gmail.com" className="hover:text-gold transition-colors">yardmenltd@gmail.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <hr className="border-ivory/20 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-ivory/60 text-sm">
            &copy; {new Date().getFullYear()} Yard Men Landscaping. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/privacy" className="text-ivory/60 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-ivory/60 hover:text-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}