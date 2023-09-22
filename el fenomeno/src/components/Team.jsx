import styles from "../style";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";
import team4 from "../assets/team4.png";

const team = () => (
  <section className="bg-secondary">
    <div className="sm:p-[6rem] p-[1rem]">
      <h2 className={`${styles.heading2}`}>Our Team: We are committed to Team excellence</h2>
      <div className={`grid md:grid-cols-4 grid-cols-2 sm:gap-[2rem] gap-[0.7rem] md:m-[2rem] m-[5rem]`}>
        <article className="bg-primary border border-solid border-transparent sm:rounded-2xl rounded-lg relative overflow-hidden hover:bg-transparent hover:border-blue-500">
          <div className="inline-block items-center h-fit w-fit">
            <img src={team1} />
          </div>
          <div className="text-center">
              <h4 className="font-poppins font-semibold ss:text-[24px] text-[16px] text-blue-800">Adebayo Kwame</h4>
              <p className="font-poppins font-medium ss:text-[16px] text-[10px]">CEO</p>
          </div>
          <div className="team__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </article>

        <article className="bg-primary border border-solid border-transparent sm:rounded-2xl rounded-lg relative overflow-hidden hover:bg-transparent hover:border-blue-500">
          <div className="inline-block items-center h-fit w-fit">
            <img src={team2} />
          </div>
          <div className="text-center">
              <h4 className="font-poppins font-semibold ss:text-[24px] text-[16px] text-blue-800">Grace Bais</h4>
              <p className="font-poppins font-medium ss:text-[16px] text-[10px]">CTO</p>
          </div>
          <div className="team__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </article>

        <article className="bg-primary border border-solid border-transparent sm:rounded-2xl rounded-lg relative overflow-hidden hover:bg-transparent hover:border-blue-500">
          <div className="inline-block items-center h-fit w-fit">
            <img src={team3} />
          </div>
          <div className="text-center">
              <h4 className="font-poppins font-semibold ss:text-[24px] text-[16px] text-blue-800">Josh Brown</h4>
              <p className="font-poppins font-medium ss:text-[16px] text-[10px]">Product Designer</p>
          </div>
          <div className="team__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </article>

        <article className="bg-primary border border-solid border-transparent sm:rounded-2xl rounded-lg relative overflow-hidden hover:bg-transparent hover:border-blue-500">
          <div className="inline-block items-center h-fit w-fit">
            <img src={team4} />
          </div>
          <div className="text-center">
              <h4 className="font-poppins font-semibold ss:text-[24px] text-[16px] text-blue-800">Elizabeth Queen</h4>
              <p className="font-poppins font-medium ss:text-[16px] text-[10px]">Social manager</p>
          </div>
          <div className="team__socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"></a>
          </div>
        </article>
      </div>

      <div className="mt-[4rem] cursor-pointer">
        <h4 className="font-poppins text-center font-semibold ss:text-[24px] text-[16px] leading-[30.8px]">View All Team</h4>
      </div>
    </div>
  </section>
  )

export default team