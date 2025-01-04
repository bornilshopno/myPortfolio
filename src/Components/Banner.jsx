
import photo from "../assets/manna.png"
import { GrLocation } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";

const Banner = () => {
   
    return (

    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/hdkH7W3/shutterstock-535124956-scaled.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-90"></div>
  <div className="hero-content text-neutral-content text-center p-0">
  <div className=" flex flex-col lg:flex-row gap-10 justify-end" >
        <div className="description flex-1 text-center my-auto">
                 <h2 className="text-4xl text-slate-300 font-semibold">Ashraf Hossain Manna</h2>
                <h3 className="text-xl text-slate-500 font-semibold">Junior Front End Developer</h3>
                <h4 className="flex gap-2 items-center justify-center text-lg text-slate-600">
                    <GrLocation />
                    <p> Sreemangal, Bangladesh</p></h4>
                <button className="btn btn-neutral w-52 mx-auto">
                    <p>DOWNLOAD RESUME</p>
                    <FaFileDownload></FaFileDownload>
                </button>
            </div>
            <div className="profile-picture flex-1">
                <img src={photo} alt="" />
            </div>
        </div>
  </div>
</div>
    );
};

export default Banner;