import styles from '../style';
import GetStarted from './GetStarted';

const Hero = () => (
  <section className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px:16 px-6`}>
      <div className="flex flex-col justify-between items-center w-[1183px] p-2 gap-2">
        <h1 className='font-poppins font-semibold ss:text-[64px] text-[28px] text-blue-400'>
          Your trusted IT Consulting Partner: <br />
          <span className="text-[48px] text-white">Empower Your Digital Journey With Us</span>
        </h1>
      </div>

      <div className="flex flex-col justify-between items-center">
        <p className={`${styles.paragraph} items-start mt-6`}>Transform Your Business and Master the Art of IT with Expert Consulting and Cutting-Edge <br /> Training Solutions, Explore exciting opportunities with us
        </p>
      </div>

      <div className='ss:flex hidden md:mr-4 mr-0'>
        <GetStarted />
      </div>
    </div>
  </section>
);


export default Hero