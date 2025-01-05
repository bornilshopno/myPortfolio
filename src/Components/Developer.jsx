import { Link } from "react-router-dom";
import DevDetails from "./DevDetails";
import { IoGameControllerSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import ContactMe from "./ContactMe";

const Deveoper = () => {
  // let navigate=useNavigate()

  return (
    <div className="bg-gradient-to-t from-[#273344] to-[#283848]">
      <Helmet>
        <title>Ashraf Hossain || Portfolio</title>
      </Helmet>
      <div id="about"
        className="hero "
        style={{
          backgroundImage: "url(https://i.ibb.co.com/hdkH7W3/shutterstock-535124956-scaled.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-3xl border-2 border-amber-400 p-5 rounded-3xl border- ">
            <h1 className="mb-5 text-4xl text-slate-300 font-bold">ABOUT ME</h1>
            <hr />
            <div className="flex items-center justify-center gap-5 flex-col md:flex-row pt-5">
              {/* <img src="https://i.ibb.co.com/gjycxrZ/IMG-6639.jpg" alt="profile" className=" w-24 rounded-3xl border-x-indigo-700 border-y-amber-400 border-2" /> */}
              <div>
                <p className=" text-slate-400 font-bold text-lg">I’m a junior web developer with a background in textile engineering. After spending 12 years in the textile industry, I realized that my true passion was in coding, which had always intrigued me. Over the last year, I’ve dedicated my time to exploring web development, building a strong foundation in coding and learning new technologies. Now, I’m excited to pursue a career in web development, where I can combine my creativity with technical skills and develop websites and applications that prioritize user experience and functionality. I’m always eager to learn and grow, and I’m excited to continue exploring new technologies and challenges in the web development field. </p>
                <a href="#contact">
                <button className="btn bg-amber-400 text-lg text-gray-800 mt-5">Contact Me</button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <DevDetails></DevDetails>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Deveoper;