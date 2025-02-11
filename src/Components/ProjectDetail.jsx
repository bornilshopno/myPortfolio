import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ProjectDetail = () => {
    const {id}=useParams()
    // console.log(id)
        const [project, setProject] = useState(null);
        useEffect(() => {
            fetch("/projects.json") // Relative path to the public folder
                .then((response) => response.json())
                .then((jsonData) => {
                    const project= jsonData.find(data=>data.id==id);
                    setProject(project)
                })
                .catch((error) => console.error("Error fetching JSON:", error));
        }, [id]);

        console.log(project)
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <img src={project.thumbnail} alt="" />
               <div>
               <h2>Project Name : {project.projectName}</h2>
               </div>
            </div>
            <div>
                <img src={project.image} alt="" />
            </div>
        </div>
    );
};

export default ProjectDetail;