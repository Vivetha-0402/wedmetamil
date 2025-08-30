import React, { useState } from 'react';
import { Heart, Star, MapPin, Phone, Mail,  Users, Camera, Utensils, Car, Palette, Shirt, Gift, Menu, X,  CheckCircle } from 'lucide-react';
import './App.css';

const WeddingPlannerWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: '',
    message: ''
  });
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const services = [
    { id: 'venue', name: 'Venue', icon: MapPin, color: '#ec4899', description: 'Beautiful venues for your special day' },
    { id: 'catering', name: 'Catering', icon: Utensils, color: '#8b5cf6', description: 'Delicious food for your guests' },
    { id: 'photography', name: 'Photography', icon: Camera, color: '#3b82f6', description: 'Capture every precious moment' },
    { id: 'makeup', name: 'Makeup', icon: Palette, color: '#10b981', description: 'Look stunning on your big day' },
    { id: 'outfits', name: 'Outfits', icon: Shirt, color: '#f59e0b', description: 'Perfect attire for bride and groom' },
    { id: 'decoration', name: 'Decoration', icon: Gift, color: '#ef4444', description: 'Beautiful decorations and themes' },
    { id: 'car-rental', name: 'Car Rental', icon: Car, color: '#6366f1', description: 'Luxury cars for your wedding' },
    { id: 'invitation', name: 'Invitation', icon: Mail, color: '#14b8a6', description: 'Elegant wedding invitations' }
  ];

  const vendors = {
    venue: [
      { id: 1, name: 'Royal Gardens', rating: 4.8, price: '₹2,50,000', location: 'Chennai', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=300', features: ['Garden View', 'AC Halls', '500+ Capacity'] },
      { id: 2, name: 'Palace Manor', rating: 4.9, price: '₹4,00,000', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=300', features: ['Heritage Property', 'Luxury Suites', '300+ Capacity'] },
      { id: 3, name: 'Seaside Resort', rating: 4.7, price: '₹3,50,000', location: 'Madurai', image: 'https://images.unsplash.com/photo-1587719371436-b0ba9add111a?w=300', features: ['Beach View', 'Pool Side', '400+ Capacity'] }
    ],
    catering: [
      { id: 1, name: 'Spice Route Catering', rating: 4.9, price: '₹800/plate', location: 'Chennai', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300', features: ['Multi-Cuisine', 'Live Counters', 'Veg & Non-Veg'] },
      { id: 2, name: 'Royal Kitchen', rating: 4.8, price: '₹1,200/plate', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300', features: ['Traditional Food', 'Dessert Station', 'Premium Service'] },
      { id: 3, name: 'Coastal Delights', rating: 4.6, price: '₹950/plate', location: 'Madurai', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=300', features: ['Seafood Special', 'South Indian', 'Fresh Ingredients'] }
    ],
    photography: [
      { id: 1, name: 'Moments Studio', rating: 4.9, price: '₹75,000', location: 'Chennai', image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300', features: ['Candid Photography', 'Drone Shots', 'Same Day Edit'] },
      { id: 2, name: 'Eternal Frames', rating: 4.8, price: '₹1,20,000', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300', features: ['Pre-Wedding', 'Traditional', 'Destination Shoots'] },
      { id: 3, name: 'Lens Magic', rating: 4.7, price: '₹60,000', location: 'Madurai', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300', features: ['Cinematic Style', '4K Videos', 'Photo Albums'] }
    ],
    makeup: [
      { id: 1, name: 'Glam Studio', rating: 4.9, price: '₹25,000', location: 'Chennai', image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=300', features: ['Bridal Makeup', 'Hair Styling', 'Saree Draping'] },
      { id: 2, name: 'Beauty Bliss', rating: 4.8, price: '₹35,000', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300', features: ['HD Makeup', 'Trial Session', 'Groom Makeup'] },
      { id: 3, name: 'Radiant Touch', rating: 4.7, price: '₹20,000', location: 'Madurai', image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=300', features: ['Natural Look', 'Airbrush', 'Mehendi Design'] }
    ],
    outfits: [
      { id: 1, name: 'Royal Couture', rating: 4.8, price: '₹80,000', location: 'Chennai', image: 'https://images.unsplash.com/photo-1594736797933-d0dc47eaa26a?w=300', features: ['Designer Lehengas', 'Custom Fitting', 'Groom Sherwanis'] },
      { id: 2, name: 'Ethnic Elegance', rating: 4.9, price: '₹1,20,000', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=300', features: ['Heavy Work', 'Bridal Collection', 'Jewelry Included'] },
      { id: 3, name: 'Modern Traditions', rating: 4.6, price: '₹60,000', location: 'Madurai', image: 'https://images.unsplash.com/photo-1566479179817-c9c6dcfc01d8?w=300', features: ['Contemporary Style', 'Light Weight', 'Quick Delivery'] }
    ],
    decoration: [
      { id: 1, name: 'Dream Decorators', rating: 4.9, price: '₹1,50,000', location: 'Chennai', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=300', features: ['Floral Arrangements', 'Stage Decoration', 'Lighting Setup'] },
      { id: 2, name: 'Fairy Tale Events', rating: 4.8, price: '₹2,00,000', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=300', features: ['Theme Decoration', 'Mandap Design', 'Entry Decor'] },
      { id: 3, name: 'Elegant Affairs', rating: 4.7, price: '₹1,20,000', location: 'Madurai', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=300', features: ['Minimalist Style', 'Fresh Flowers', 'Custom Themes'] }
    ],
    'car-rental': [
      { id: 1, name: 'Luxury Rides', rating: 4.8, price: '₹15,000/day', location: 'Chennai', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300', features: ['BMW 7 Series', 'Decorated Car', 'Professional Driver'] },
      { id: 2, name: 'Royal Cars', rating: 4.9, price: '₹25,000/day', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=300', features: ['Vintage Rolls Royce', 'Red Carpet', 'VIP Service'] },
      { id: 3, name: 'Classic Wheels', rating: 4.7, price: '₹12,000/day', location: 'Madurai', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300', features: ['Mercedes E-Class', 'Flower Decoration', 'Chauffeur Service'] }
    ],
    invitation: [
      { id: 1, name: 'Creative Cards', rating: 4.9, price: '₹150/card', location: 'Chennai', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300', features: ['Custom Design', 'Premium Paper', 'Digital Version'] },
      { id: 2, name: 'Elegant Invites', rating: 4.8, price: '₹200/card', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1613769049987-b31b641f25b1?w=300', features: ['Handmade Paper', 'Gold Foiling', 'Video Invites'] },
      { id: 3, name: 'Modern Prints', rating: 4.7, price: '₹120/card', location: 'Madurai', image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=300', features: ['Eco-Friendly', 'QR Code', 'Fast Delivery'] }
    ]
  };

  const testimonials = [
    { name: 'Priya & Rahul', location: 'Chennai', text: 'Amazing service! Our wedding was absolutely perfect thanks to the team.', rating: 5 },
    { name: 'Sneha & Arjun', location: 'Coimbatore', text: 'Professional and reliable. They handled everything beautifully.', rating: 5 },
    { name: 'Kavya & Rohan', location: 'Madurai', text: 'Best decision ever! Stress-free wedding planning experience.', rating: 5 }
  ];

  const handleBooking = (vendor) => {
    setSelectedVendor(vendor);
    setBookingForm({ ...bookingForm, service: selectedService });
    setIsBookingModalOpen(true);
  };

  const submitBooking = () => {
    alert(`Booking request sent for ${selectedVendor.name}! We'll contact you soon.`);
    setIsBookingModalOpen(false);
    setBookingForm({ name: '', email: '', phone: '', date: '', service: '', message: '' });
  };

  const renderHeader = () => (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" onClick={() => setCurrentPage('home')}>
            <Heart className="logo-icon" />
            <span className="logo-text">DreamWedding</span>
          </div>
          
          <nav className="nav-desktop">
            <button onClick={() => setCurrentPage('home')} className="nav-link">Home</button>
            <button onClick={() => setCurrentPage('services')} className="nav-link">Services</button>
            <button onClick={() => setCurrentPage('vendors')} className="nav-link">Vendors</button>
            <button onClick={() => setCurrentPage('gallery')} className="nav-link">Gallery</button>
            <button onClick={() => setCurrentPage('about')} className="nav-link">About</button>
            <button onClick={() => setCurrentPage('contact')} className="nav-link">Contact</button>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="nav-mobile">
            <button onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }} className="nav-mobile-link">Home</button>
            <button onClick={() => { setCurrentPage('services'); setIsMenuOpen(false); }} className="nav-mobile-link">Services</button>
            <button onClick={() => { setCurrentPage('vendors'); setIsMenuOpen(false); }} className="nav-mobile-link">Vendors</button>
            <button onClick={() => { setCurrentPage('gallery'); setIsMenuOpen(false); }} className="nav-mobile-link">Gallery</button>
            <button onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }} className="nav-mobile-link">About</button>
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="nav-mobile-link">Contact</button>
          </div>
        )}
      </div>
    </header>
  );

  const renderHome = () => (
    <div>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Your Dream Wedding</h1>
          <p className="hero-subtitle">Planning the perfect wedding has never been easier. Let us make your special day unforgettable.</p>
          <div className="hero-buttons">
            <button 
              onClick={() => setCurrentPage('services')}
              className="btn btn-primary"
            >
              Explore Services
            </button>
            <button 
              onClick={() => setCurrentPage('vendors')}
              className="btn btn-secondary"
            >
              Find Vendors
            </button>
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Everything you need for your perfect wedding</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="service-card"
                  onClick={() => {
                    setSelectedService(service.id);
                    setCurrentPage('vendors');
                  }}
                >
                  <div className="service-icon" style={{ backgroundColor: service.color }}>
                    <Icon size={32} color="white" />
                  </div>
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Happy Couples</h2>
            <p className="section-subtitle">What our clients say about us</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.name}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderServices = () => (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Our Wedding Services</h1>
          <p className="section-subtitle">Complete wedding solutions under one roof</p>
        </div>
        
        <div className="services-detailed-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-detailed-card">
                <div className="service-detailed-icon" style={{ backgroundColor: service.color }}>
                  <Icon size={64} color="white" />
                </div>
                <div className="service-detailed-content">
                  <h3 className="service-detailed-name">{service.name}</h3>
                  <p className="service-detailed-description">{service.description}</p>
                  <button 
                    onClick={() => {
                      setSelectedService(service.id);
                      setCurrentPage('vendors');
                    }}
                    className="btn btn-primary btn-full"
                  >
                    View Vendors
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const renderVendors = () => {
    const currentServiceVendors = selectedService ? vendors[selectedService] || [] : [];
    const serviceName = services.find(s => s.id === selectedService)?.name || 'All Services';

    return (
      <div className="page">
        <div className="container">
          <div className="section-header">
            <h1 className="page-title">
              {selectedService ? `${serviceName} Vendors` : 'All Vendors'}
            </h1>
            <p className="section-subtitle">Choose from our verified and trusted vendors</p>
          </div>

          <div className="service-filters">
            <button 
              onClick={() => setSelectedService(null)}
              className={selectedService === null ? 'filter-btn active' : 'filter-btn'}
            >
              All Services
            </button>
            {services.map((service) => (
              <button 
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={selectedService === service.id ? 'filter-btn active' : 'filter-btn'}
              >
                {service.name}
              </button>
            ))}
          </div>

          {selectedService && currentServiceVendors.length > 0 && (
            <div className="vendors-grid">
              {currentServiceVendors.map((vendor) => (
                <div key={vendor.id} className="vendor-card">
                  <img src={vendor.image} alt={vendor.name} className="vendor-image" />
                  <div className="vendor-content">
                    <div className="vendor-header">
                      <h3 className="vendor-name">{vendor.name}</h3>
                      <div className="vendor-rating">
                        <Star size={16} fill="#fbbf24" color="#fbbf24" />
                        <span>{vendor.rating}</span>
                      </div>
                    </div>
                    <div className="vendor-location">
                      <MapPin size={16} />
                      <span>{vendor.location}</span>
                    </div>
                    <p className="vendor-price">{vendor.price}</p>
                    <div className="vendor-features">
                      {vendor.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="vendor-actions">
                      <button 
                        onClick={() => handleBooking(vendor)}
                        className="btn btn-primary btn-small"
                      >
                        Book Now
                      </button>
                      <button className="btn btn-outline btn-small">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!selectedService && (
            <div className="empty-state">
              <Heart size={64} color="#ec4899" />
              <h3>Select a Service</h3>
              <p>Choose a service category above to view our amazing vendors</p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="btn btn-primary"
              >
                Browse All Services
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderGallery = () => (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Wedding Gallery</h1>
          <p className="section-subtitle">Beautiful moments from weddings we've planned</p>
        </div>
        
        <div className="gallery-grid">
          {[
            'https://images.unsplash.com/photo-1519741497674-611481863552?w=400',
            'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=400',
            'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400',
            'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400',
            'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=400',
            'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400',
            'https://images.unsplash.com/photo-1583391733956-6c78276477e1?w=400',
            'https://images.unsplash.com/photo-1594736797933-d0dc47eaa26a?w=400',
            'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=400'
          ].map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image} alt={`Wedding ${index + 1}`} className="gallery-image" />
              <div className="gallery-overlay">
                <Camera size={32} color="white" />
                <p>View Full Album</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAbout = () => (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">About DreamWedding</h1>
          <p className="section-subtitle">We are passionate about creating unforgettable wedding experiences that reflect your unique love story.</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600" alt="About Us" />
          </div>
          <div className="about-text">
            <h2>Your Wedding, Our Passion</h2>
            <p>
              With over 10 years of experience in wedding planning, we have helped thousands of couples create their dream weddings. 
              Our team of expert planners works tirelessly to ensure every detail is perfect, from the grandest gestures to the smallest touches.
            </p>
            <p>
              We believe that every love story is unique, and your wedding should reflect that uniqueness. That's why we offer 
              personalized planning services tailored to your vision, budget, and cultural preferences.
            </p>
            <div className="stats-grid">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Weddings Planned</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Trusted Vendors</div>
              </div>
              <div className="stat">
                <div className="stat-number">15</div>
                <div className="stat-label">Cities Covered</div>
              </div>
              <div className="stat">
                <div className="stat-number">99%</div>
                <div className="stat-label">Happy Couples</div>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose DreamWedding?</h2>
          <div className="features-grid">
            <div className="feature">
              <CheckCircle size={48} color="white" />
              <h3>Verified Vendors</h3>
              <p>All our vendors are thoroughly vetted and verified for quality and reliability.</p>
            </div>
            <div className="feature">
              <Heart size={48} color="white" />
              <h3>Personalized Service</h3>
              <p>Every wedding is unique, and we tailor our services to match your vision perfectly.</p>
            </div>
            <div className="feature">
              <Users size={48} color="white" />
              <h3>Expert Team</h3>
              <p>Our experienced team handles every detail so you can focus on enjoying your special day.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="page">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="section-subtitle">Let's start planning your dream wedding together</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="contact-item">
              <Phone size={24} color="#ec4899" />
              <div>
                <p className="contact-label">Phone</p>
                <p className="contact-value">+91 98765 43210</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} color="#ec4899" />
              <div>
                <p className="contact-label">Email</p>
                <p className="contact-value">hello@dreamwedding.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} color="#ec4899" />
              <div>
                <p className="contact-label">Address</p>
                <p className="contact-value">123 Wedding Street, Coimbatore, Tamil Nadu</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form">
              <h2>Send us a Message</h2>
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label>Wedding Date</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={4} placeholder="Tell us about your dream wedding..."></textarea>
              </div>
              <button 
                type="button"
                onClick={() => alert('Message sent! We\'ll get back to you soon.')}
                className="btn btn-primary btn-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookingModal = () => {
    if (!isBookingModalOpen) return null;

    return (
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <h2>Book {selectedVendor?.name}</h2>
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="modal-close"
            >
              <X size={24} />
            </button>
          </div>
          
          <form className="booking-form">
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                value={bookingForm.name}
                onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                value={bookingForm.email}
                onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input 
                type="tel" 
                value={bookingForm.phone}
                onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="form-group">
              <label>Wedding Date</label>
              <input 
                type="date" 
                value={bookingForm.date}
                onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea 
                rows={3}
                value={bookingForm.message}
                onChange={(e) => setBookingForm({...bookingForm, message: e.target.value})}
                placeholder="Special requirements or questions..."
              ></textarea>
            </div>
            <button 
              type="button"
              onClick={submitBooking}
              className="btn btn-primary btn-full"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    );
  };

  const renderFooter = () => (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Heart size={32} color="#ec4899" />
              <span>DreamWedding</span>
            </div>
            <p className="footer-description">Making your wedding dreams come true with personalized planning and exceptional service.</p>
            <div className="social-links">
              <div className="social-link">f</div>
              <div className="social-link">i</div>
              <div className="social-link">t</div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.id}>
                  <button 
                    onClick={() => {
                      setSelectedService(service.id);
                      setCurrentPage('vendors');
                    }}
                    className="footer-link"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentPage('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="footer-link">About Us</button></li>
              <li><button onClick={() => setCurrentPage('gallery')} className="footer-link">Gallery</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="footer-link">Contact</button></li>
              <li><button className="footer-link">Blog</button></li>
              <li><button className="footer-link">FAQ</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <span>hello@dreamwedding.com</span>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Coimbatore, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 DreamWedding. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="app">
      {renderHeader()}
      
      {currentPage === 'home' && renderHome()}
      {currentPage === 'services' && renderServices()}
      {currentPage === 'vendors' && renderVendors()}
      {currentPage === 'gallery' && renderGallery()}
      {currentPage === 'about' && renderAbout()}
      {currentPage === 'contact' && renderContact()}
      
      {renderBookingModal()}
      {renderFooter()}
    </div>
  );
};

export default WeddingPlannerWebsite;