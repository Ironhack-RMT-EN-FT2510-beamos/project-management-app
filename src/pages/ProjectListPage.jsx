import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useEffect, useState } from "react";
import axios from "axios";

// "https://project-management-api.edu.ironhack.com/projects"

// fetch(URL)
// .then() .catch() (with json transformation)
// useEffect => componentDidMount
// state for holding the data from the API

function ProjectListPage() {

  const [projects, setProjects] = useState(null)

  useEffect(() => {

    axios.get(`${import.meta.env.VITE_SERVER_URL}/projects`)
    .then((response) => {
      console.log(response.data)
      setProjects(response.data)
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  if (!projects) {
    return <h3>Searching...</h3>
  }
  
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}

      {projects.map((eachProject) => {
        console.log(eachProject)
        return <ProjectCard key={eachProject.id} potato={eachProject}/>
      })}
       
    </div>
  );
}

export default ProjectListPage;