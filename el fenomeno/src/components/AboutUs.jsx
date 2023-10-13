import styles from "../style";
import why from "../assets/why.png";
import  plane from "../assets/plane.svg";
import clock from "../assets/clock.svg"
import phone from "../assets/phone.svg";
import star from "../assets/star.png";

const AboutUs = () => (
  <section className={`flex md:flex-row flex-col bg-gray-gradient`}>
    <div className={`flex flex-col md:w-[860px] w-full xs:items-start items-center gap-2 xs:space-x-10`}>
      <div className="sm:ml-16 md:mt-10 mt-2">
        <h2 className="font-poppins font-semibold xs:text-[36px] text-[16px] xs:leading-[52.8px] leading-[36.8px] text-white w-full">Why Choose Us?</h2>
      </div>
      <div className='grid sm:grid-cols-2 grid-cols-1 m-[1.5rem] sm:gap-[4rem] gap-[2rem]'>
        <article className="flex flex-row gap-2">
          <div className='w-[32px] h-[32px] block object-cover'>
              <img src={star} />
          </div>
          <div>
              <h4 className="font-poppins font-semibold xs:text-[20px] text-[16px] xs:leading-[26.8px] leading-[18.8px] text-white w-full">Reliabilty</h4>
              <p className={`font-poppins font-normal xs:text-[18px] text-[16px] text-white`}>24-hour turnaround time</p>
          </div>
        </article>
        <article className="flex flex-row gap-2">
          <div className='w-[32px] h-[32px] block object-cover'>
              <img src={clock} />
          </div>
          <div>
              <h4 className="font-poppins font-semibold xs:text-[20px] text-[16px] xs:leading-[26.8px] leading-[18.8px] text-white w-full">Shortest Lead Time</h4>
              <p className={`font-poppins font-normal xs:text-[18px] text-[16px] text-white`}>We find Candidate at the fastest pace</p>
          </div>
        </article>
        <article className="flex flex-row gap-2">
          <div className='w-[32px] h-[32px] block object-cover'>
              <img src={plane} />
          </div>
          <div>
              <h4 className="font-poppins font-semibold xs:text-[20px] text-[16px] xs:leading-[26.8px] leading-[18.8px] text-white w-full">Result - Driven</h4>
              <p className={`font-poppins font-normal xs:text-[18px] text-[16px] text-white`}>100% Client retention</p>
          </div>
        </article>
        <article className="flex flex-row gap-2">
          <div className='w-[32px] h-[32px] block object-cover'>
              <img src={phone} />
          </div>
          <div>
              <h4 className="font-poppins font-semibold xs:text-[20px] text-[16px] xs:leading-[26.8px] leading-[18.8px] text-white w-full">Most Competitive Rate</h4>
              <p className={`font-poppins font-normal xs:text-[18px] text-[16px] text-white`}>We are the most affordable consulting and <br className="sm:hidden block"/>recruitment agency across Africa</p>
          </div>
        </article>
      </div>
    </div>

    <div className={`flex-1 md:flex hidden ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 h-fit w-fit relative`}>
        <img src={why}/>
    </div>
  </section>
);

export default AboutUs