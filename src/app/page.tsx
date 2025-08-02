import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your Partner in Lifelong Professional Growth
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Empowering youth with tools & opportunities for meaningful employment and entrepreneurship
          </p>
          <a 
            href="#apply"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Join the Program
          </a>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">3,000+</div>
              <div className="text-gray-600">Youth Trained Annually</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-700 mb-2">100</div>
              <div className="text-gray-600">Participants with Disabilities</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-800 mb-2">2,000</div>
              <div className="text-gray-600">Women Participants</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-900 mb-2">10</div>
              <div className="text-gray-600">Coaches & Talent Managers</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">About WorkMasters</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                WorkMasters is an innovative program aimed at enhancing work readiness, employability, 
                and deployment opportunities for unemployed or underemployed youth in Uganda.
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Targets individuals with creative and digital skills
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Recognizes diverse employment avenues including freelancing and entrepreneurship
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Provides hands-on experiences through internships and apprenticeships
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Offers comprehensive career and business coaching
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Aim</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-700">Bridge Education & Employment</h4>
                  <p className="text-gray-600 text-sm">Connect educational achievements with meaningful opportunities</p>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg">
                  <h4 className="font-semibold text-blue-800">Develop Skilled Professionals</h4>
                  <p className="text-gray-600 text-sm">Foster a new generation ready to contribute to Uganda's economy</p>
                </div>
                <div className="p-4 bg-blue-200 rounded-lg">
                  <h4 className="font-semibold text-blue-900">Create Sustainable Impact</h4>
                  <p className="text-gray-600 text-sm">Reduce unemployment and enhance livelihoods across communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Programs</h2>
          
          {/* Program Structure Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-700">Program Structure & Format</h3>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Orientation</h4>
                <p className="text-sm text-gray-600">Onboarding, goal-setting, and readiness check</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Immersive Learning</h4>
                <p className="text-sm text-gray-600">Digital skills training, work ethics, and soft skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Hands-On Practice</h4>
                <p className="text-sm text-gray-600">Internships, apprenticeships, and volunteer work</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Career Coaching</h4>
                <p className="text-sm text-gray-600">Market readiness, business acumen, job search</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <h4 className="font-semibold text-blue-900 mb-2">Deployment</h4>
                <p className="text-sm text-gray-600">Capstone projects and pathway placement</p>
              </div>
            </div>
          </div>

          {/* Program Tracks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Internship */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-600">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mr-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">WorkMasters Internship</h3>
                    <p className="text-gray-600">Hybrid Short-Term Training & Internship</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700">• Workforce strategy and program design</li>
                  <li className="text-sm text-gray-700">• Content development and sales enablement</li>
                  <li className="text-sm text-gray-700">• Professional development workshops</li>
                </ul>
              </div>
            </div>

            {/* Apprenticeship */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-700">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg mr-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">WorkMasters Apprenticeship</h3>
                    <p className="text-gray-600">Full-Time Residential Learning Experience</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700">• Hands-on product development in EdTech</li>
                  <li className="text-sm text-gray-700">• Digital sales and go-to-market execution</li>
                  <li className="text-sm text-gray-700">• Coaching, accountability, and transformational growth</li>
                </ul>
              </div>
            </div>

            {/* Bootcamps */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-800">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-lg mr-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Work Readiness Bootcamps</h3>
                    <p className="text-gray-600">Intensive Skill-Building Programs</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700">• Digital skilling workshops</li>
                  <li className="text-sm text-gray-700">• Work ethics and soft skills training</li>
                  <li className="text-sm text-gray-700">• Industry-specific skill development</li>
                </ul>
              </div>
            </div>

            {/* Coaching */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-gray-600">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg mr-4 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">Career & Business Coaching</h3>
                    <p className="text-gray-600">Professional Growth & Development</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="text-sm text-gray-700">• One-on-one career guidance</li>
                  <li className="text-sm text-gray-700">• Freelance business development</li>
                  <li className="text-sm text-gray-700">• Personal and professional development</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-900">Our Value Proposition</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Workplace Exposure</h4>
                <p className="text-gray-600 text-sm">Build a solid work ethic and habits through real tasks and professional environments.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Multi-Pathway Readiness</h4>
                <p className="text-gray-600 text-sm">Prepares youth for various career paths, including jobs, freelancing, and entrepreneurship.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-800">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Embedded Coaching</h4>
                <p className="text-gray-600 text-sm">Career, business, and personal growth coaching throughout the program.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg font-bold text-blue-900 mb-3">High-Impact Curriculum</h4>
                <p className="text-gray-600 text-sm">Customized to reflect local job market realities and industry demands.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Alumni Network</h4>
                <p className="text-gray-600 text-sm">Ongoing peer support and mentorship for participants beyond graduation.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-700">
                <h4 className="text-lg font-bold text-blue-900 mb-3">Measurable Results</h4>
                <p className="text-gray-600 text-sm">Track progress through job placement rates and participant satisfaction metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Impact</h2>
          {/* Impact Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Employability</h3>
              <p className="text-gray-600 text-sm">Improve employability and earning capacity for over 3,000 youth annually</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Unemployment Reduction</h3>
              <p className="text-gray-600 text-sm">Reduce youth unemployment through experiential and personalized training</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Sustainable Pathways</h3>
              <p className="text-gray-600 text-sm">Launch youth into sustainable work pathways, including jobs, gigs, or startups</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-2">Digital Economy</h3>
              <p className="text-gray-600 text-sm">Strengthen Uganda's digital economy through skilled talent development</p>
            </div>
          </div>
          {/* Success Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-lg font-semibold text-blue-900 mb-1">Job Placement Rate</div>
              <div className="text-gray-600 text-sm">Successful employment within 6 months</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-700 mb-2">92%</div>
              <div className="text-lg font-semibold text-blue-900 mb-1">Satisfaction Rate</div>
              <div className="text-gray-600 text-sm">Participant satisfaction with programs</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-800 mb-2">78%</div>
              <div className="text-lg font-semibold text-blue-900 mb-1">Income Increase</div>
              <div className="text-gray-600 text-sm">Average income improvement post-program</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-gray-600 mb-2">89%</div>
              <div className="text-lg font-semibold text-blue-900 mb-1">Community Impact</div>
              <div className="text-gray-600 text-sm">Positive community contribution score</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Dr. Wilson Tumuhimbise</h3>
              <p className="text-blue-600 font-semibold mb-2">Curriculum Development Expert</p>
              <p className="text-gray-600 text-sm">Leading curriculum design and educational strategy</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Recheal Ainembabazi</h3>
              <p className="text-blue-700 font-semibold mb-2">Talent Development M&E Officer</p>
              <p className="text-gray-600 text-sm">Monitoring, evaluation, and talent development oversight</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">John Magala</h3>
              <p className="text-blue-800 font-semibold mb-2">Work Readiness Trainer</p>
              <p className="text-gray-600 text-sm">Practical skills training and workplace preparation</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Peter Ojwang</h3>
              <p className="text-blue-700 font-semibold mb-2">Work Readiness Lead Trainer</p>
              <p className="text-gray-600 text-sm">Leading training programs and skill development</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Tugume Andrew</h3>
              <p className="text-blue-600 font-semibold mb-2">Inclusion Support Specialist</p>
              <p className="text-gray-600 text-sm">Sign Language & PWD inclusion support</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-1">Tonena Raymond</h3>
              <p className="text-blue-700 font-semibold mb-2">Communication Specialist</p>
              <p className="text-gray-600 text-sm">Program communication and outreach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Future?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of youth who have transformed their careers through WorkMasters
            </p>
          </div>

          {/* Contact and CTA */}
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-blue-200">+256755017384</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-blue-200">info@qraftacademy.com</p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Visit Us</h4>
                <p className="text-blue-200">Plot 4–10 Kiwana Road, Bukoto<br />Kampala, Uganda</p>
              </div>
            </div>

            <Link 
              href="/apply"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
            >
              Submit Your Application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
