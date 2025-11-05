import { Link } from "react-router-dom";

function ProjectCard (props) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${props.potato.id}`}>
        <h3>{props.potato.title}</h3>
      </Link>
      <p>{props.potato.description}</p>
    </div>
  );
}

export default ProjectCard;