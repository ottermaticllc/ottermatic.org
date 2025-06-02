
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="/ottermatic-logo-resize-for-website-mb74lmnn.png"
                alt="OtterMatic Logo"
                width={240}
                height={96}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI & automation solutions designed specifically for small businesses. 
              We help you streamline operations and grow with confidence.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-gray-400 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@ottermatic.org</li>
              <li>+1 (703) 939-4175</li>
              <li>Book a discovery call</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 OtterMatic LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
