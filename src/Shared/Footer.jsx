import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
          <div className='footer bg-gradient-to-b from-gray-900 to-black text-white px-10 lg:px-20 flex items-center justify-between flex-col md:flex-row py-5 lg:py-10 '>
                <div>
                    <h2 className='mx-auto font-bold'>Md. Ashraf Manna</h2>
                    <p className=' font-semibold'>Junior Front End Developer</p>
                </div>
                <div className=''>
                    <p className='font-semibold mx-auto'>Connect to Social Media</p>
                   <div className='flex gap-5'>
                   <a href="https://www.facebook.com/hopefulmanna/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><FaSquareFacebook className='text-4xl'></FaSquareFacebook></a>
                    <a href="https://github.com/bornilshopno" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><FaSquareGithub className='text-4xl'></FaSquareGithub></a>
                    <a href="https://www.linkedin.com/in/md-ashraf-hossain-a8772284/" target="_blank" rel="noopener noreferrer" className="btn btn-sm h-12"><IoLogoLinkedin className='text-4xl'></IoLogoLinkedin></a>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;