import Logo from "../assets/logo1.png";
import { UilTwitter, UilFacebookF, UilYoutube, UilInstagram } from "@iconscout/react-unicons";

const Footer = () => (
  <footer className="flex flex-col bg-secondary w-full sm:mt-[16rem] sm:pt-0 pt-[2rem] relative sm:justify-start justify-center">
    <div className="flex flex-row sm:absolute sm:top-[-40%] sm:left-[10%] self-center bg-blue-900 w-[80%] sm:h-[240px] h-[180px] sm:p-[4rem] p-[1rem] items-center rounded-[2rem] sm:gap-[30%] gap-[1rem]">
      <h2 className="font-manrope font-normal text-white md:text-[48px] sm:text-[36px] text-[28px] sm:w-[30%]">Want to Get in Touch ?</h2>
      <div className="sm:w-[40%] space-y-4">
        <p className="font-nunito font-normal sm:text-[16px] text-[10px] text-white">Let`s Connect and Collaborate, Reach Out to Us Today You`ll be glad you do so</p>
        <button className="bg-transparent font-roboto sm:ml-[60%] sm:px-[32px] px-[16px] sm:py-[12px]  border-2 border-solid border-blue-500 rounded-lg text-white hover:border-transparent focus:outline-none">
            Subscribe
        </button>
      </div>
    </div>


    <div className="flex sm:flex-row flex-col md:px-[8rem] sm:mt-[8rem] mt-[1rem] items-center md:gap-[12rem] sm:gap-[4rem] gap-[2rem]">
      <article className="flex flex-col justify-center items-center">
        <div className="Logo">
          <img src={Logo} alt="el feno" className="w-auto h-[84px]"/>
        </div>

        {/** Address */}
        <div className="ml-4">
          <ul className="font-nunito text-[12px]">
            <li><b>Phone No:</b> +(234)8100000000</li>
            <li><b>Email:</b> techprocraft@gmail.com</li>
            <li><b>Address:</b> 123 @Lorem Ipsum city, site country, the world</li>
            <li><b>Consultation Hours</b> 24 hours</li>
          </ul>
        </div>

        {/** Social LInks container */}
        <div className="flex gap-[1rem] sm:self-start sm:ml-8 ">
          {/** Link 1 */}
            <a href="./Welcome.jsx">
              <UilYoutube className="h-8 text-blue-800 hover:text-gray-300 p-1 rounded-full hover:bg-blue-800" />
            </a>

          {/** Link 2 */}
            <a href="./Welcome.jsx">
              <UilTwitter className="h-8 text-blue-800 hover:text-gray-300 p-1 rounded-full hover:bg-blue-800"  />
            </a>

          {/** Link 3 */}
            <a href="./Welcome.jsx">
              <UilInstagram className="h-8 text-blue-800 hover:text-gray-300 p-1 rounded-full hover:bg-blue-800" />
            </a>

          {/** Link 4 */}
            <a href="./Welcome.jsx">
              <UilFacebookF className="h-8 text-blue-800 hover:text-gray-300 p-1 rounded-full hover:bg-blue-800" />
            </a>    
        </div>
      </article>

      <article className="sm:ml-[4rem]">
        <h4 className="font-manrope font-normal text-blue-900 md:text-[24px] text-[16px]">Useful Links</h4>
        <ul className="font-nunito font-normal mt-4 md:text-[16px] text-[14px] text-blue-900">
          <li><a href="#" className="hover:text-blue-500">Home</a></li>
          <li><a href="#" className="hover:text-blue-500">Services</a></li>
          <li><a href="#" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#" className="hover:text-blue-500">Contacts</a></li>
        </ul>
      </article>
    </div>

    <div className="flex-1 bg-blue-900 text-white w-full mt-2 justify-center items-[18px] text-center">
      <small>Copyright &copy; <b>TECHPROCRAFT</b> 2023. All rights Reserved</small>
    </div>
  </footer>
  );

export default Footer