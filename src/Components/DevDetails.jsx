import Marquee from 'react-fast-marquee';
import photo1 from "../assets/lifestyle-circuit.png"
import photo2 from "../assets/chill-gamer.png"
import photo3 from "../assets/gadgetHeaven.png"
import { Link } from 'react-router-dom';

import Aos from 'aos';




const DevDetails = () => {
    Aos.init()

    return (
        <div>
            <div>
                <h2 className='text-center bg-gradient-to-b from-[#273344] to-[#234668] py-10 font-bold text-5xl text-amber-400 '>Skills and Expertises</h2>
                <Marquee autoFill={true} pauseOnHover={true} className="bg-gradient-to-b from-[#234668] to-[#495765]">
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>HTML 5</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold text-center'>CSS 3</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold '>Tailwind CSS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>JavaScript</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-8 text-amber-400 font-bold'>React.JS</h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>Firebase<br /><span className='text-xl'>Authentication</span></h1>
                    </div>
                    <div className='border-2 border-amber-400 rounded-xl mr-10 my-10'>
                        <h1 className='text-4xl px-4 py-3 text-amber-400 font-bold'>MONGO DB<br /><span className='text-xl'>Basic CRUD</span></h1>
                    </div>
                </Marquee>
            </div>
            <div id='projects'>
                <h2 className='text-center text-white bg-gradient-to-t from-gray-400 to-[#495765] py-10 font-bold text-4xl'>Recent Projects</h2>
               
                <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-20 pb-16 bg-gradient-to-b from-gray-400 to-gray-800">
                    {/* number-1 */}
                    <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
                        data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo1} className='h-52 w-full object-cover'
                                alt="blog-website-ui" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">LifeStyle Cuitcuit</h2>
                            <p>Blogging Website </p>
                            <div className="card-actions justify-end">
                                <Link to="https://lifestyle-circuit.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                    {/* number-2 */}
                    <div className="card card-compact bg-sky-100 border-2 border-amber-400" data-aos="fade-up"
                        data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo2} className='h-52'
                                alt="Chill-Gamer-Website_UI" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">ChillGamer</h2>
                            <p>Game Review Platform </p>
                            <div className="card-actions justify-end">
                                <Link to="https://chill-gamer-site.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                    {/* number-3 */}
                    <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
                        data-aos-duration="3000">
                        <figure>
                            <img
                                src={photo3} className='h-52'
                                alt="Gadget Heaven" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Gadget Heaven</h2>
                            <p>Gadget Selling Platform </p>
                            <div className="card-actions justify-end">
                                <Link to="https://gadget-gallary.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DevDetails;