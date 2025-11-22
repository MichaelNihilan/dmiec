import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactSection = ({ isActive }) => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()

    // Get form values
    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email').value.trim()
    const phone = document.getElementById('phone').value.trim()
    const message = document.getElementById('message').value.trim()

    // Simple validation
    if (!name || !email || !phone || !message) {
      alert('⚠️ Please fill all fields before sending.')
      return
    }

    setIsSubmitting(true)

    // Prepare template parameters
    const templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message,
      to_name: 'Admissions Team'
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_z37tvui',      // Your Service ID
        'template_l18s7ov',     // Your Template ID
        templateParams,
        'FqPkpZHNcHID3XXMn'      // Your Public Key
      )

      console.log('SUCCESS!', response.status, response.text)
      alert('✅ Your message has been sent successfully!')
      
      // Clear form fields
      form.current.reset()
    } catch (error) {
      console.log('FAILED...', error)
      alert('❌ Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className={`content-section ${isActive ? 'active' : ''}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">Admission Form</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get in touch with us for admissions, information, or any questions about DMI Engineering College.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h4>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 text-xl">📍</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Campus Address</h5>
                <p className="text-gray-600">
                  123 University Avenue<br />
                  Education City, State 12345<br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 text-xl">📞</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Phone Numbers</h5>
                <p className="text-gray-600">
                  Main: +1 (555) 123-4567<br />
                  Admissions: +1 (555) 123-4568<br />
                  International: +1 (555) 123-4569
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 text-xl">✉️</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Email Addresses</h5>
                <p className="text-gray-600">
                  General: info@excellenceuni.edu<br />
                  Admissions: admissions@excellenceuni.edu<br />
                  International: international@excellenceuni.edu
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 text-xl">🕒</span>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Office Hours</h5>
                <p className="text-gray-600">
                  Monday - Friday: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
          <h4 className="text-2xl font-bold text-gray-800 mb-6">Send us an Email</h4>
          <form ref={form} className="space-y-4" onSubmit={sendEmail}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
              <input 
                id="name"
                name="from_name"
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input 
                id="email"
                name="from_email"
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input 
                id="phone"
                name="phone"
                type="tel" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your Phone Number"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea 
                id="message"
                name="message"
                rows={4} 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your message"
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Kindly give your valid details. Our team will contact you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
