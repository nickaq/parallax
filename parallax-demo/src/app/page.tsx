'use client';

import { ParallaxSection, ParallaxLayer } from '@/components/parallax';
import { ContactForm, NewsletterForm } from '@/components/forms';
import { useAnalytics } from '@/hooks/useAnalytics';
import styles from './page.module.css';

export default function Home() {
  useAnalytics('/');
  
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <ParallaxSection className={styles.hero} id="hero">
        {/* Background gradient orbs */}
        <ParallaxLayer speed={-0.5} amplitude={400} className={styles.bgLayer} mouseParallax mouseIntensity={0.02}>
          <div className={`${styles.orb} ${styles.orb1}`} />
          <div className={`${styles.orb} ${styles.orb2}`} />
          <div className={`${styles.orb} ${styles.orb3}`} />
        </ParallaxLayer>

        {/* Grid pattern background */}
        <ParallaxLayer speed={-0.2} amplitude={150} className={styles.bgLayer} mouseParallax mouseIntensity={0.01}>
          <div className={`${styles.gridOverlay} grid-pattern`} />
        </ParallaxLayer>

        {/* Floating decorative elements */}
        <ParallaxLayer speed={0.8} amplitude={500} className={styles.decorLayer} mouseParallax mouseIntensity={0.06}>
          <div className={styles.floatingCard}>
            <span className={styles.cardIcon}>✨</span>
            <span>60fps Smooth</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.9} amplitude={550} axis="both" className={styles.decorLayer} mouseParallax mouseIntensity={0.08}>
          <div className={`${styles.floatingCard} ${styles.cardRight}`}>
            <span className={styles.cardIcon}>🎯</span>
            <span>GPU Optimized</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.6} amplitude={400} className={styles.decorLayer} mouseParallax mouseIntensity={0.05}>
          <div className={`${styles.floatingCard} ${styles.cardBottom}`}>
            <span className={styles.cardIcon}>♿</span>
            <span>Accessible</span>
          </div>
        </ParallaxLayer>

        {/* Main content - interactive layer */}
        <ParallaxLayer speed={0} amplitude={0} className={styles.contentLayer} interactive>
          <div className={styles.heroContent}>
            <span className={styles.badge}>Production Ready</span>
            <h1 className={styles.title}>
              <span className="gradient-text">Parallax</span>
              <br />
              Scrolling Effects
            </h1>
            <p className={styles.subtitle}>
              Smooth, accessible, and performant parallax components for React & Next.js.
              Built with GPU-accelerated transforms and full accessibility support.
            </p>
            <div className={styles.buttonGroup}>
              <a href="#features" className="btn-primary">
                Explore Features
              </a>
              <a href="#demo" className="btn-secondary">
                View Demo
              </a>
            </div>
          </div>
        </ParallaxLayer>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel} />
          </div>
          <span>Scroll to explore</span>
        </div>
      </ParallaxSection>

      {/* Features Section */}
      <ParallaxSection className={styles.features} id="features">
        <ParallaxLayer speed={-0.15} amplitude={40} className={styles.bgLayer}>
          <div className={`${styles.orb} ${styles.orbFeature1}`} />
          <div className={`${styles.orb} ${styles.orbFeature2}`} />
        </ParallaxLayer>

        <ParallaxLayer speed={0} amplitude={0} className={styles.contentLayer} interactive>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Features</span>
            <h2 className={styles.sectionTitle}>
              Built for <span className="gradient-text">Performance</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Every aspect optimized for smooth 60fps animations
            </p>
          </div>

          <div className={styles.featureGrid}>
            <FeatureCard
              icon="⚡"
              title="GPU Accelerated"
              description="Uses only transform: translate3d() for hardware-accelerated animations"
            />
            <FeatureCard
              icon="🎯"
              title="IntersectionObserver"
              description="Activates parallax only when elements are visible in viewport"
            />
            <FeatureCard
              icon="🖼️"
              title="RequestAnimationFrame"
              description="Batched updates synchronized with browser paint cycles"
            />
            <FeatureCard
              icon="📱"
              title="Responsive"
              description="Automatically adjusts or disables on mobile devices"
            />
            <FeatureCard
              icon="♿"
              title="Accessible"
              description="Respects prefers-reduced-motion for users who need it"
            />
            <FeatureCard
              icon="🧩"
              title="Modular"
              description="Composable components that work independently or together"
            />
          </div>
        </ParallaxLayer>
      </ParallaxSection>

      {/* Demo Section */}
      <ParallaxSection className={styles.demo} id="demo">
        {/* Multiple floating layers at different speeds */}
        <ParallaxLayer speed={1.0} amplitude={600} className={styles.decorLayer} mouseParallax mouseIntensity={0.07}>
          <div className={`${styles.demoShape} ${styles.shape1}`}>
            <span>1.0x</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.7} amplitude={450} axis="both" className={styles.decorLayer} mouseParallax mouseIntensity={0.06}>
          <div className={`${styles.demoShape} ${styles.shape2}`}>
            <span>0.7x</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.6} amplitude={400} className={styles.decorLayer} mouseParallax mouseIntensity={0.05}>
          <div className={`${styles.demoShape} ${styles.shape3}`}>
            <span>-0.6x</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.9} amplitude={550} className={styles.decorLayer} mouseParallax mouseIntensity={0.08}>
          <div className={`${styles.demoShape} ${styles.shape4}`}>
            <span>-0.9x</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} amplitude={300} axis="x" className={styles.decorLayer} mouseParallax mouseIntensity={0.04}>
          <div className={`${styles.demoShape} ${styles.shape5}`}>
            <span>X: 0.5x</span>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0} amplitude={0} className={styles.contentLayer} interactive>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Interactive Demo</span>
            <h2 className={styles.sectionTitle}>
              Watch the <span className="gradient-text">Layers</span> Move
            </h2>
            <p className={styles.sectionSubtitle}>
              Each floating element has a different speed multiplier.
              Scroll to see them move at different rates!
            </p>
          </div>

          <div className={styles.demoInfo}>
            <div className={styles.infoCard}>
              <h3>Positive Speed</h3>
              <p>Elements move in the same direction as scroll</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Negative Speed</h3>
              <p>Elements move opposite to scroll direction</p>
            </div>
            <div className={styles.infoCard}>
              <h3>Mouse Parallax</h3>
              <p>Some elements also react to mouse movement (desktop)</p>
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxSection>

      {/* Code Example Section */}
      <ParallaxSection className={styles.codeSection} id="code">
        <ParallaxLayer speed={-0.1} amplitude={30} className={styles.bgLayer}>
          <div className={`${styles.orb} ${styles.orbCode}`} />
        </ParallaxLayer>

        <ParallaxLayer speed={0} amplitude={0} className={styles.contentLayer} interactive>
          <div className={styles.sectionHeader}>
            <span className={styles.badge}>Usage</span>
            <h2 className={styles.sectionTitle}>
              Simple <span className="gradient-text">API</span>
            </h2>
          </div>

          <div className={styles.codeBlock}>
            <pre>
              <code>{`import { ParallaxProvider, ParallaxSection, ParallaxLayer } from './components/parallax';

// Wrap your app
<ParallaxProvider>
  <App />
</ParallaxProvider>

// Create parallax sections
<ParallaxSection>
  {/* Background layer - slow movement */}
  <ParallaxLayer speed={-0.2} amplitude={50}>
    <BackgroundElement />
  </ParallaxLayer>

  {/* Content layer - interactive */}
  <ParallaxLayer speed={0} interactive>
    <YourContent />
  </ParallaxLayer>

  {/* Floating decoration - fast movement + mouse */}
  <ParallaxLayer 
    speed={0.5} 
    amplitude={100}
    mouseParallax
    mouseIntensity={0.02}
  >
    <FloatingElement />
  </ParallaxLayer>
</ParallaxSection>`}</code>
            </pre>
          </div>
        </ParallaxLayer>
      </ParallaxSection>

      {/* Contact Section */}
      <ParallaxSection className={styles.contact} id="contact">
        <ParallaxLayer speed={-0.1} amplitude={80} className={styles.bgLayer} mouseParallax mouseIntensity={0.01}>
          <div className={`${styles.orb} ${styles.orb1}`} style={{ opacity: 0.3 }} />
        </ParallaxLayer>
        
        <ParallaxLayer speed={0} amplitude={0} className={styles.contentLayer} interactive>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Get in Touch</span>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionSubtitle}>Have a question or want to work together?</p>
          </div>
          <div className={styles.contactGrid}>
            <ContactForm />
            <div className={styles.contactInfo}>
              <h3>Stay Updated</h3>
              <p>Subscribe to our newsletter for updates and tips.</p>
              <NewsletterForm />
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxSection>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Built with ❤️ using Next.js, TypeScript, and CSS Modules</p>
        <p className={styles.footerNote}>
          Try enabling &quot;Reduce Motion&quot; in your system settings to see accessibility in action
        </p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className={`${styles.featureCard} glass hover-lift`}>
      <span className={styles.featureIcon}>{icon}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}
