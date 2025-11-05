import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//1. we want the current inputs to have the current values.
//2. the user changes the inputs and is able to update the document.

function EditProjectPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const params = useParams()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`)
    .then((response) => {
      console.log(response.data)
      setTitle(response.data.title)
      setDescription(response.data.description)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // ...updated logic should be here

    const updatedProject = {
      title, 
      description
    }

    try {
      
      const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`, updatedProject)

      console.log("all good, document updated")

      // maybe redirect the user somewhere else

    } catch (error) {
      console.log(error)
    }

  };

  const deleteProject = () => {
    // ...delete logic should be here
    
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`)
    .then(() => {
      console.log("document deleted!")
      // then we should redirect the user to maybe home or list of projects.
    })
    .catch((error) => {
      console.log(error)
    })

  }; 


  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>      
    </div>
  );
}

export default EditProjectPage;
