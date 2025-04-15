import { useState, useEffect } from 'react';
import './App.css';
import myImage from './assets/new purple.webp';
import mypadding from './assets/padding.webp';
import mymaterial from './assets/material.jpg';
import wrist from './assets/wrist.jpg';
import aoki from './assets/aoki.webp';
import kimura from './assets/Kimura.jfif';
import kamogawa from './assets/kamogawa.jpg';



export default function BoxingGloveLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Dynamically adding Google Fonts link
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    document.head.appendChild(link2);

    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap';
    document.head.appendChild(link3);

    // Cleanup the added links when component is unmounted
    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);
return(
  <div className="container">
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h1>KnockOut</h1>
        </div>

        <div className="mobile-menu-button">
          <button onClick={toggleMenu}>
          </button>
        </div>
    
      <div className="desktop-nav">
        <a href="#features" className='nav-link'>Features</a>
        <a href="#benefits" className='nav-link'>Benefits</a>
        <a href="#testimonials" className='nav-link'>Testimonials</a>
        <a href="#contact" className='nav-link'>Contact</a>
        </div>  
      <div className="buy-button-container">
        <button className="btn btn-primary">Buy Now</button>
      </div>
      </div>

      {isMenuOpen &&(
      <div className="mobile-nav">
        <a href="#features" className='mobile-nav-link'>Features</a>
        <a href="#benefits" className='mobile-nav-link'>Benefits</a>
        <a href="#testimonials" className='mobile-nav-link'>Testimonials</a>
        <a href="#contact" className='mobile-nav-link'>Contact</a>
        <button className='btn btn-primary mobile-btn'>Buy Now</button>
      </div>
    )}
    </nav>
    <section className='hero'>
      <div className='hero-content'>
        <div className='hero-text'>
          <h1>The Ultimate Boxing Glove</h1>
          <p>Professional grade protection with unmatched comfort. 
            Take your Boxing to the next level</p>
        <div className='hero-buttons'>
          <button className='btn btn-white'>Shop Now</button>
          <button className='btn btn-outline'>Learn More</button>
        </div>
        </div>
        <div className='hero-image'>
          <img src={myImage} alt='Premium Boxing Gloves'/>
        </div>
      </div>
    </section>

    <section id='features' className='features'>
      <div className='section-container'>
       <h2 className='section-title'>Premium Features</h2>
       <div className='features-grid'>
        
        <div className='feature-item'>
          <div className='feature-icon'>
            <img src={mypadding} alt='Padding icon' className='feature-img' />
          </div>
          <h3>Superior Padding</h3>
          <p>The layered structure effectively dissipates the force of impact, 
            significantly reducing the risk of hand and knuckle injuries. This allows fighters to train and spar with confidence, knowing their hands are well-protected.</p>
        </div>

        <div className='feature-item'>
          <div className='feature-icon'>
            <img src={mymaterial} alt='Material icon' className='feature-img' />
          </div>
          <h3>Premium Leather</h3>
          <p>The leather is not only durable but also supple and comfortable against the skin. This contributes to a secure and comfortable fit, minimizing chafing and irritation.</p>
        </div>

        <div className='feature-item'>
          <div className='feature-icon'>
            <img src={wrist} alt='Wrist icon' className='feature-img'/>
          </div>
          <h3>Secure Wrist Lock</h3>
          <p> Strategically placed internal padding and sometimes a degree of internal stiffening within the wrist area further enhance stability and prevent excessive bending or twisting upon impact.</p>
        </div>
        </div> 
      </div>
    </section>

    <section id="benefits" className="benefits">
        <div className="section-container">
          <h2 className="section-title">Why Choose Our Gloves</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Injury Prevention</h3>
                <p>Our advanced padding system reduces the risk of hand and wrist injuries during training.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Enhanced Performance</h3>
                <p>Ergonomic design allows for natural hand positioning, improving your punching technique.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>All-Day Comfort</h3>
                <p>Moisture-wicking lining keeps your hands dry and comfortable during extended training sessions.</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Professional Quality</h3>
                <p>Used by professional boxers worldwide, our gloves meet the highest standards of quality and durability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="section-container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <div className="stars">★★★★★</div>
              <p>"These are by far the best boxing gloves I've ever used. The padding is perfect and my hands feel protected even during intense sessions."</p>
              <div className="testimonial-author">
                <img src={kimura} alt="Customer" />
                <div>
                  <h4>Tatsuya Kimura</h4>
                  <p>Professional Boxer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="stars">★★★★★</div>
              <p>"After trying numerous brands, I finally found gloves that don't cause wrist pain. The support is amazing and they look great too!"</p>
              <div className="testimonial-author">
                <img src={aoki} alt="Customer" />
                <div>
                  <h4>Masaru Aoki</h4>
                  <p>Fitness Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="stars">★★★★★</div>
              <p>"I've been coaching for 15 years and recommend these gloves to all my students. The quality is unmatched and they last much longer than competitors."</p>
              <div className="testimonial-author">
                <img src={kamogawa} alt="Customer" />
                <div>
                  <h4>Genji Kamogawa</h4>
                  <p>Boxing Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='cta'>
        <div className='cta-container'>
          <h2>Ready to Elevate Your Boxing Experience?</h2>
          <p>Join Thousands of Customers and Experience the Difference</p>
          <button className='btn btn-white'>Get Yours Now</button>
        </div>
      </section>

      <footer id='contact' className='footer'>
        <div className='footer-content'>
          <div className='footer-section'>
             <h3>KnockOut</h3>
             <p>Premium Boxing Gloves for Champions</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>1234 Boxing Lane</p>
            <p>Fightville, FT 12345</p>
            <p>info@knockoutgloves.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        
      </footer>
  </div>
)
}
