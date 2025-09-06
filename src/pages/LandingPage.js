import React, { useEffect } from "react";
import "./LandingPage.css";
import "./PrivacyPolicy"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="landing-page">

      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">LMS Pro</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#stats">Stats</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
              <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
              <li className="nav-item"><Link to="/signup" className="nav-link">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero d-flex flex-column justify-content-center align-items-center text-center">
        <div className="hero-content" data-aos="fade-up">
          <h1 className="hero-title">Empower Your Organization to Learn, Grow, and Excel</h1>
          <p className="hero-subtitle mt-3 px-3 px-md-0">
            Equip your team with interactive courses, real-time progress tracking, and expert guidance.
          </p>
        </div>

        {/* Floating Shapes */}
        <div className="hero-shapes">
          <span className="shape shape1"></span>
          <span className="shape shape2"></span>
          <span className="shape shape3"></span>
          <span className="shape shape4"></span>
          <span className="shape shape5"></span>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="mb-4">About LMS Pro</h2>
          <p className="lead px-3 px-md-5">
            LMS Pro provides quality education for aspiring developers. Our platform makes learning
            interactive, engaging, and trackable. Whether starting or enhancing skills, we provide
            resources and guidance to help your organization succeed.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Features</h2>
          <div className="row text-center">
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
              <div className="card glass-card p-4 h-100 feature-card">
                <h3>Interactive Courses</h3>
                <p>Engage with content that adapts to your team's learning pace.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card glass-card p-4 h-100 feature-card">
                <h3>Progress Tracking</h3>
                <p>Monitor growth with real-time feedback and insightful reports.</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
              <div className="card glass-card p-4 h-100 feature-card">
                <h3>Expert Facilitators</h3>
                <p>Learn from experienced professionals who guide your team to success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="mb-5">Our Impact</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h3>500+</h3>
              <p>Courses Completed</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>1,200+</h3>
              <p>Active Learners</p>
            </div>
            <div className="col-md-4 mb-4">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials py-5 text-center">
        <div className="container" data-aos="fade-up">
          <h2 className="mb-5">What Our Users Say</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4 h-100">
                <p>"LMS Pro transformed our team’s learning experience. The interactive courses keep everyone engaged!"</p>
                <h5 className="mt-3">- Sarah J., Team Lead</h5>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4 h-100">
                <p>"The progress tracking helps me see exactly where I need to improve. Highly recommend!"</p>
                <h5 className="mt-3">- Mark T., Developer</h5>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="testimonial-card p-4 h-100">
                <p>"Our organization has never had such a smooth onboarding and training process."</p>
                <h5 className="mt-3">- Priya S., HR Manager</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="signup" className="cta py-5 text-center">
        <div data-aos="fade-up">
          <h2 className="mb-4">Start Your Learning Journey Today</h2>
          <Link to="/signup" className="btn btn-cta btn-lg">Join Now</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 mt-5 text-center">
        <div className="container">
          <p className="mb-1">&copy; {new Date().getFullYear()} LMS Pro. All rights reserved.</p>
          <p className="mb-0">
            <a href="#about" className="text-decoration-none me-3">About</a>
            <a href="#features" className="text-decoration-none me-3">Features</a>
            <Link to="/privacy-policy" className="text-decoration-none">Privacy Policy</Link>
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
