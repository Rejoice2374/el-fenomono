import styles from '../style';

const Hero = () => (
  <section className={`flex flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px:16 px-6`}>
      <div className="flex flex-col justify-center items-center w-[1183px] p-2 gap-2">
        <h1 className='font-poppins font-semibold ss:text-[52px] text-[72px] text-gradient'>
          Your trusted IT Consulting Partner: <br />
          <span className="text-white">Empower Your Digital Journey With Us</span>
        </h1>
      </div>

      <div className="flex flex-col justify-between items-center">
        <p className={`${styles.paragraph} mt-5`}>Transform Your Business and Master the Art of IT with Expert Consulting and Cutting-Edge <br /> Training Solutions, Explore exciting opportunities with us
        </p>
      </div>
    </div>
  </section>
);


export default Hero