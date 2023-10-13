import styles from "../style";

const Features = () => (
  <section className="offerings flex md:justify-start justify-center items-center">
    <div className="md:ml-[4rem] ml-[2rem] w-[80%]">
      <h2 className={`font-poppins font-semibold md:text-[36px] text-[24px] w-full text-white`}>Current job openings</h2>
      <p className="font-poppins font-medium md:text-[16px] text-[10px] text-white">Elevate your career in the world of Technology by exploring exciting <br className="md:hidden block" />opportunities at TechProCraft</p>
      <h4 className="font-poppins font-semibold ss:text-[16px] text-[10px] mt-2 text-blue-500">View Available Positions</h4>
    </div>

    <div className={`${styles.flexCenter} md:ml-[18rem] mr-[2rem] box hover:bg-blue-gradient hover:border-transparent cursor-pointer md:w-[15%]`}>
      <p className="font-poppins font-normal md:text-[24px] text-[16px] text-[white]">Read More</p>
    </div>
  </section>
);

export default Features