import profilePic from "../assets/face-profile.png"
import { GrLocation } from "react-icons/gr";
import { FaFileDownload } from "react-icons/fa";
import { FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Banner = () => {

    return (

        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://i.ibb.co.com/hdkH7W3/shutterstock-535124956-scaled.jpg)",
            }}>
            <div className="hero-overlay bg-opacity-90"></div>
            <div className="hero-content text-neutral-content text-center p-0">
                <div className=" flex flex-col-reverse lg:flex-row-reverse gap-10 justify-end" >
                    <div className="description flex-2 text-center my-auto">
                        <h2 className="text-4xl text-slate-300 font-semibold">Ashraf Hossain Manna</h2>
                        <h3 className="text-xl text-slate-400 font-semibold">Junior Front End Developer</h3>
                        <h4 className="flex gap-2 items-center justify-center text-lg text-slate-400">
                            <GrLocation />
                            <p className="text-slate-400"> Sreemangal, Bangladesh</p></h4>
                        <div className='flex gap-5 w-32 my-2 mx-auto'>
                            <a href="https://www.facebook.com/hopefulmanna/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-8 px-2"><FaSquareFacebook className='text-xl'></FaSquareFacebook></a>
                            <a href="https://github.com/bornilshopno" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-8 px-2"><FaSquareGithub className='text-xl'></FaSquareGithub></a>
                            <a href="https://www.linkedin.com/in/md-ashraf-hossain-a8772284/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-8 px-2"><IoLogoLinkedin className='text-xl'></IoLogoLinkedin></a>
                        </div>
                        <a href="https://docs.google.com/document/d/1SmbpHEZMzeQWxk6aXHOPhLcbKkShlC-Sa4WjzSDcx1o/edit?tab=t.0" target="_blank"
                            rel="noopener noreferrer">
                            <button className="btn btn-neutral w-52 mx-auto">
                                <p>DOWNLOAD RESUME</p>
                                <FaFileDownload></FaFileDownload>
                            </button>
                        </a>
                    </div>
                    <div className="profile-picture flex-2 lg:flex-1 mx-auto">
                        <img src={profilePic} alt="" className="border-4 border-slate-400 rounded-xl h-44" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;