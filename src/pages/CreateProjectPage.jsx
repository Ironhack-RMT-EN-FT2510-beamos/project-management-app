import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectPage() {

  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here

    // how do we gather the info for the new project? local obj with states
    // how do we contact the backend for creating a new project? axios.post and Base URL
    // how to we pass the info for the new project on the request? ....
    // how do we process the response from the backend? then/catch
    // what do we do with the user once the project is created? navigate("/")

    const newProject = {
      title,
      description
    }

    axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, newProject)
    .then(() => {
      console.log("document created!")
      navigate("/projects")
    })
    .catch((error) => {
      console.log(error)
    })

  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;