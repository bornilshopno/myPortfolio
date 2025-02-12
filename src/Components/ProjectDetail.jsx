import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLogoWebComponent } from "react-icons/io5";
import { SiListmonk } from "react-icons/si";
import { TiTick } from "react-icons/ti";
import { Link, useParams } from "react-router-dom";


const ProjectDetail = () => {
    const { id } = useParams()
    // console.log(id)
    const [project, setProject] = useState(null);
    useEffect(() => {
        fetch("/projects.json") // Relative path to the public folder
            .then((response) => response.json())
            .then((jsonData) => {
                const project = jsonData.find(data => data.id == id);
                setProject(project)
            })
            .catch((error) => console.error("Error fetching JSON:", error));
    }, [id]);

    console.log(project)
    return (
        <div>
            {project ?
                <div className="bg-gray-700 text-gray-200">
                    <h2 className="text-xl font-bold text-center bg-gray-700 text-gray-200 pt-3 lg:py-5">Project Details: {project.projectName}<br /> <span className="text-thin text-base"> {project.shortDescription}</span> </h2>

                    <h2 className="mx-auto w-10/12 max-w-screen-md text-center py-2 lg:py-10"> {project.description}</h2>
                    <div className="lg:hidden bg-gray-700 p-4">
                        <img src={project?.thumbnail} alt="" className="rounded-lg" />
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4 w-11/12 mx-auto pb-5">
                        <div className="hidden lg:block h-[90vh] overflow-y-auto">
                            <img src={project.image} alt="" />
                        </div>
                        <div>


                            <h2>Technologies Used :<br>
                            </br>
                                <ul className="flex flex-wrap">
                                    {project.technology.map((tech, index) => <li className="flex gap-1 mr-2 items-center " key={index}><SiListmonk />{tech}</li>)}
                                </ul></h2>
                            <h2 className="pt-3">Key Features :<br>
                            </br>
                                <ul className="">
                                    {project.key_features.map((feature, index) => <li className="flex gap-1 mr-2 items-center " key={index}><TiTick />{feature}</li>)}
                                </ul> { }</h2>
                            {project.challenges && <h2 className="pt-3">Challenges Faced :<br /> {project.challenges}</h2>}

                            <h2 className="pt-3">Short Comings :<br />
                                {project.shortcomings}</h2>
                            <h2 className="pt-3">Improvement Plans :<br /> {project.improvements}</h2>
                            <div className="py-4 flex justify-end gap-3">
                                <Link to={project.github_client} target="_blank" rel="noopener noreferrer" className="btn btn-sm"> <FaGithub />Front End</Link>
                                {
                                    project.github_server && <Link to={project.github_server} target="_blank" rel="noopener noreferrer" className="btn btn-sm"><FaGithub />Back End</Link>
                                }
                                <Link to={project.live_link} target="_blank" rel="noopener noreferrer" className="btn btn-sm"><IoLogoWebComponent />Live Page</Link>
                            </div>
                        </div>

                        {/* style={{ width: "300px", height: "200px", overflowY: "auto", border: "1px solid #ccc" }} */}

                    </div></div>
                :
                <p>
                    Project Loading</p>}
        </div>
    );
};

export default ProjectDetail;