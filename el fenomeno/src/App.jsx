import { Navbar, Hero, Welcome, AboutUs, Testimonial, Features, Team, Jobs, Projects, Blog, Newsletter, Contact, Footer } from "./components";
import styles from './style';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
       <Navbar />
      </div>
    </div>

    <div className={`${styles.flexStart} Hero -mt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Welcome />
      </div>
    </div>

    <div className={`${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
      <AboutUs />
      </div>
    </div>

    <div>
      <Jobs />
      <Testimonial />
      <Team />
      <Features />
      <Projects />
      <Blog />
      <Newsletter />
    </div>

    <div className="relative">
      <Contact />
      <Footer />
    </div>
  </div>
);

export default App