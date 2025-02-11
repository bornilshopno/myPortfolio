import { Link } from "react-router-dom";
import photo1 from "../assets/lifestyle-circuit.png"
import photo2 from "../assets/chill-gamer.png"
import photo3 from "../assets/gadgetHeaven.png"
import photo4 from "../assets/medcamps.png"

const Project = () => {
    //previous file
    return (
        <div id='projects'>
        <h2 className='text-center text-white bg-gradient-to-t from-gray-400 to-[#495765] py-10 font-bold text-4xl'>Recent Projects</h2>
       
        <div className="grid gird-cols-1 lg:grid-cols-2 gap-5 px-10 lg:px-20 pb-16 bg-gradient-to-b from-gray-400 to-gray-800">
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
            {/* number-4 */}
            <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
                data-aos-duration="3000">
                <figure>
                    <img
                        src={photo4} className='h-52'
                        alt="MedCamps" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Med Camps</h2>
                    <p>Medical Camp Management Interface </p>
                    <div className="card-actions justify-end">
                        <Link to="https://med-camps.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Project;
