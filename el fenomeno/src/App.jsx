import { Navbar, Hero, AboutUs, Stats, Features, Team, Jobs, Projects, Blog, Newsletter, Contact, Footer } from "./components";
import styles from './style'

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
       <Navbar />
      </div>
    </div>

    <div>
      <Hero />
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
);

export default App