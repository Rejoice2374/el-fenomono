import styles from "../style";

const Features = () => (
  <section className="offeringss">
    <div className="md:ml-[6rem] ml-[4rem]">
      <h2 className={`font-poppins font-semibold sm:text-[36px] text-[24px] sm:leading-[66.8px] leading-[36.8px] w-full text-white`}>Current job openings</h2>
      <p className="font-poppins font-medium ss:text-[16px] text-[10px] text-white">Elevate your career in the world of Technology by exploring exciting opportunities at TechProCraft</p>
      <h4 className="font-poppins font-semibold ss:text-[16px] text-[10px] mt-2 text-blue-500">View Available Positions</h4>
    </div>

    <div className={`${styles.flexCenter} md:ml-[16rem] mr-[4rem] box cursor-pointer`}>
      <p className="font-poppins font-normal text-[24px] leading[23px] text-[white]">Read More</p>
    </div>
  </section>
);

export default Features