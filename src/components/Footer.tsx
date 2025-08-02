import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">WorkMasters</h3>
            <p className="text-gray-300 mb-4">
              Empowering youth with the skills, mindset, and tools for meaningful employment and entrepreneurship in Uganda.
            </p>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold">Phone:</span> +256755017384
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Email:</span> info@qraftacademy.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Website:</span> qraftacademy.com
              </p>
              <p className="text-gray-300">
                <span className="font-semibold">Location:</span> Kampala, Uganda<br />
                Plot 4–10 Kiwana Road, Bukoto
              </p>
            </div>
          </div>
          {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
                <li><Link href="/#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
                <li><Link href="/#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Programs</Link></li>
                <li><Link href="/#impact" className="text-gray-300 hover:text-blue-400 transition-colors">Impact</Link></li>
                <li><Link href="/#team" className="text-gray-300 hover:text-blue-400 transition-colors">Team</Link></li>
                <li><Link href="/apply" className="text-gray-300 hover:text-blue-400 transition-colors">Apply</Link></li>
              </ul>
            </div>
          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Internship</Link></li>
              <li><Link href="/#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Apprenticeship</Link></li>
              <li><Link href="/#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Bootcamps</Link></li>
              <li><Link href="/#programs" className="text-gray-300 hover:text-blue-400 transition-colors">Coaching</Link></li>
            </ul>
          </div>
        </div>
        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 WorkMasters. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Media Icons - LinkedIn, Twitter/X, Instagram */}
            <a href="https://www.linkedin.com/company/qraftacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/>
              </svg>
            </a>
            <a href="https://twitter.com/qraftacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="https://instagram.com/qraftacademy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
