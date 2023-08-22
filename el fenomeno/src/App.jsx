import { Navbar, Hero, AboutUs, Stats, Features, Team, Jobs, Projects, Blog, Newsletter, Contact, Footer } from "./components";
import styles from './style';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
       <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <AboutUs />
        <Stats />
        <Features />
        <Team />
        <Jobs />
        <Projects />
        <Blog />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
);

export default App