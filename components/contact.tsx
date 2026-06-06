"use client"

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, CheckCircle, X } from 'lucide-react'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  guests?: string
  date?: string
  time?: string
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number'
    }
    
    if (!formData.guests) {
      newErrors.guests = 'Please select number of guests'
    }
    
    if (!formData.date) {
      newErrors.date = 'Please select a date'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date'
      }
    }
    
    if (!formData.time) {
      newErrors.time = 'Please select a time'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setShowSuccessPopup(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      message: '',
    })
    setErrors({})
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  return (
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-md w-full text-center animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Reservation Confirmed!
            </h3>
            <p className="text-foreground/70 mb-6">
              Thank you for your reservation request. We will contact you shortly to confirm your booking.
            </p>
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
              Contact Us
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
              {`We'd love to hear from you. Make a reservation, ask a question, or simply say hello.`}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                Visit Us
              </h3>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-foreground/60">
                      123 Gourmet Avenue<br />
                      Manhattan, New York 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-foreground/60">+1 (212) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-foreground/60">reservations@foodieshub.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Opening Hours</h4>
                    <p className="text-foreground/60">
                      Monday - Thursday: 5:00 PM - 10:00 PM<br />
                      Friday - Saturday: 5:00 PM - 11:00 PM<br />
                      Sunday: 4:00 PM - 9:00 PM<br />
                      <span className="text-primary">Brunch: Sat-Sun 10:00 AM - 2:00 PM</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-64 bg-card rounded-lg border border-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919364!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1630456789012!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Restaurant location"
                />
              </div>
            </div>

            {/* Reservation Form */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
                Make a Reservation
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground placeholder:text-muted-foreground ${
                        errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground placeholder:text-muted-foreground ${
                        errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground placeholder:text-muted-foreground ${
                        errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                      Number of Guests <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground ${
                        errors.guests ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                    >
                      <option value="">Select guests</option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7+">7+ Guests</option>
                    </select>
                    {errors.guests && <p className="text-red-400 text-sm mt-1">{errors.guests}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={getMinDate()}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground ${
                        errors.date ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                    />
                    {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-card border rounded-lg focus:ring-1 outline-none transition-colors text-foreground ${
                        errors.time ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-border focus:border-primary focus:ring-primary'
                      }`}
                    >
                      <option value="">Select time</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                    {errors.time && <p className="text-red-400 text-sm mt-1">{errors.time}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Any dietary restrictions, celebrations, or special requests..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Request Reservation'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
