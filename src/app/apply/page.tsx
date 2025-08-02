import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Apply() {
  return (
    <div className="min-h-screen">
      {/* Only one Navbar at the top, remove any duplicate rendering below */}
      {/* Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Apply Now</h1>
          <p className="text-xl text-blue-100">
            Start your journey to professional growth and meaningful employment
          </p>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2"><a href="/#apply">Apply Online</a></h3>
              <p className="text-gray-600 text-sm">Submit your application form with required documents</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2"><a href="/#about">Assessment</a></h3>
              <p className="text-gray-600 text-sm">Skills assessment and interview process</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2"><a href="/#programs">Selection</a></h3>
              <p className="text-gray-600 text-sm">Review and selection of qualified candidates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-blue-900 mb-2"><a href="/#team">Enrollment</a></h3>
              <p className="text-gray-600 text-sm">Program orientation and enrollment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Who Can Apply?</h3>
              <h4 className="text-lg font-semibold text-blue-700 mb-4">Ideal For:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Recent graduates seeking career clarity and skill-building</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Early professionals transitioning to tech or innovation roles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-800 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Workforce enthusiasts passionate about employability and learning</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-800 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Startup and NGO talent looking to build scalable digital solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Unemployed or underemployed youth with creative and digital interests</span>
                </li>
              </ul>
              
              <div className="border-t pt-6">
                <h4 className="text-lg font-semibold text-blue-700 mb-3">Special Focus:</h4>
                <p className="text-blue-900">
                  We prioritize inclusion with dedicated support for participants with disabilities 
                  and maintain a commitment to gender balance in our programs.
                </p>
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Requirements</h3>
              <h4 className="text-lg font-semibold text-blue-700 mb-4">Basic Requirements:</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Age 18-35 years</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  </svg>
                  <span className="text-blue-900">Minimum secondary education (O-level or equivalent)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-800 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                  <span className="text-blue-900">Basic computer literacy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Commitment to complete the program</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-blue-700 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 002 0V3a2 2 0 012 0v1a1 1 0 002 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 1h6v4H7V6z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-blue-900">Valid identification documents</span>
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-blue-800 mb-3">Preferred Skills:</h4>
              <ul className="space-y-2 text-blue-900">
                <li>• Interest in digital technologies</li>
                <li>• Creative or technical background</li>
                <li>• Communication skills (English/Local languages)</li>
                <li>• Willingness to learn and adapt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Application Form</h2>
            
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="+256 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Age *
                  </label>
                  <input
                    type="number"
                    min="18"
                    max="35"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Age (18-35)"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gender *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              {/* Program Interest */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Program *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="">Select a Program</option>
                  <option value="internship">WorkMasters Internship</option>
                  <option value="apprenticeship">WorkMasters Apprenticeship</option>
                  <option value="bootcamp">Work Readiness Bootcamp</option>
                  <option value="coaching">Career & Business Coaching</option>
                </select>
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Level of Education *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="">Select Education Level</option>
                  <option value="o-level">O-Level (Secondary)</option>
                  <option value="a-level">A-Level</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Skills & Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Skills & Experience
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Describe your current skills, experience, and any relevant background..."
                ></textarea>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why do you want to join WorkMasters? *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your goals and why you're interested in this program..."
                ></textarea>
              </div>

              {/* Special Needs */}
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-600 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-gray-700">
                    I have special accessibility needs or require disability support
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Questions About Your Application?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100"><a href="/">+256755017384</a></p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100"><a href="/">info@qraftacademy.com</a></p>
            </div>

            <div>
              <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100"><a href="/">Plot 4–10 Kiwana Road, Bukoto<br />Kampala, Uganda</a></p>
            </div>
          </div>
        </div>
      </section>
      {/* Only one Footer at the bottom, remove any duplicate rendering above */}
    </div>
  );
}
