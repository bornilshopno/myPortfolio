
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';

const ProjectLayout = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch("/projects.json") // Relative path to the public folder
            .then((response) => response.json())
            .then((jsonData) => setData(jsonData))
            .catch((error) => console.error("Error fetching JSON:", error));
    }, []);


    return (
        <div><Element name='projects'>

            {
                data ? <>
                    <h1 className='text-4xl font-bold text-center py-5  text-amber-400 bg-gradient-to-t from-gray-400 to-[#495765] lg:py-10 '>LATEST PROJECTS</h1>
                    <div className="grid gird-cols-1 lg:grid-cols-3 gap-5 px-10 lg:px-20 pb-16 bg-gradient-to-b from-gray-400 to-gray-800">
                        {data.map(project =>
                            <div key={project.id} className="card card-compact bg-sky-100  border-2 border-amber-400" data-aos="fade-up"
                                data-aos-duration="3000">
                                <figure>
                                    <img
                                        src={project.thumbnail} className='h-52 w-full object-cover'
                                        alt="MedCamps" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{project.projectName}</h2>
                                    <p>{project.shortDescription}</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/projects/${project.id}`} className="btn bg-amber-400">View Details</Link>
                                        <Link
                                            to={project.live_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn bg-amber-400"
                                        >Visit Live Page</Link>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </>
                    :
                    <div className='m-auto'>
                        <span className="loading loading-ring loading-lg"></span>
                    </div>
            }
        </Element>
        </div>
    );
};

export default ProjectLayout;