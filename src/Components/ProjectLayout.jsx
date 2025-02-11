
import { Link } from 'react-router-dom';

const ProjectLayout = () => {
    return (
        <div className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
            data-aos-duration="3000">
            <figure>
                <img
                    src="https://i.ibb.co.com/xtWRQCxx/lifestyle-circuit-netlify-app.png" className='h-52'
                    alt="MedCamps" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Med Camps</h2>
                <p>Medical Camp Management Interface </p>
                <div className="card-actions justify-end">
                    <Link to="/projects/1" className="btn btn-primary">View Details</Link>
                    <Link to="https://med-camps.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit Live Page</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectLayout;