import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Project_Form = () => {

const [projectinput,setProjectinput] = useState({
  startdate: "",
  enddate: "",
  projectname: "",
  description:"",
  clientname: "",
  projectrate:"",
  projectpriority:"",
  members:"",
  projectstatus:""
})


const handleinput = (e:any) => {
  const name:any = e.target.name;
  const value:any = e.target.value;

  setProjectinput({ ...projectinput , [name] : value });
}
const navigate = useNavigate()
const url = "http://localhost:4000/project"
const handlesubmit = (e:any) => { 


    e.preventDefault()

    navigate('/project',{state:projectinput})
    console.log(projectinput);

    axios.post(url,{
      startdate:projectinput.startdate,
      enddate:projectinput.enddate,
      projectname:projectinput.projectname,
      description:projectinput.description,
      clientname:projectinput.clientname,
      projectrate:projectinput.projectrate,
      projectpriority:projectinput.projectpriority,
      members:projectinput.members,
      projectstatus:projectinput.projectstatus
    }).then((res)=>{
      console.log(res.data)
    })
}
  return (
    <>
      <form className="container-fluid" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            Start Date
          </label>
          <input
          onChange={handleinput}
          value={projectinput.startdate}
            type="date"
            className="form-control"
            id="exampleInputDate"
            aria-describedby="dateHelp"
            name="startdate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            End Date
          </label>
          <input
          onChange={handleinput}

          value={projectinput.enddate}
          name="enddate"
            type="date"
            className="form-control"
            id="exampleInputDate"
            aria-describedby="dateHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Project Name
          </label>

          <input
          value={projectinput.projectname}
          onChange={handleinput}
          
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="dateHelp"
            name="projectname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Description
          </label>

          <input
            value={projectinput.description}
            onChange={handleinput}
            type="longtext"
            className="form-control"
            id="exampleInputName"
            aria-describedby="dateHelp"
            name="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleclientName" className="form-label">
            Client Name 
          </label>
          <input
          onChange={handleinput}
          value={projectinput.clientname}
            type="text"
            className="form-control"   
            id="exampleclientName"
            aria-describedby="clientname"
            name="clientname"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleclientName" className="form-label">
            Project Rate
          </label>
          <input
          onChange={handleinput}
          value={projectinput.projectrate}
            type="number"
            className="form-control"
            id="exampleclientName"
            aria-describedby="clientname"
            name="projectrate"
          />
        </div>
        <div> Project Priority
      <br />
        <select
          onChange={handleinput}
          value={projectinput.projectpriority}
          name="projectpriority"
        >
       <option>select</option>
       <option>Low</option>
       <option>Medium</option>
       <option>High</option>

        </select>
        </div>
        <br/>
        <div>Members
        <br />
        <select 
          onChange={handleinput}
          value={projectinput.members}
          name="members"
        >
            <option>select</option>
        </select>

      <br />  <div> Status
         <br />
      <select
          onChange={handleinput}
          value={projectinput.projectstatus}
          name="projectstatus"
        >
       <option>select</option>
       <option>Active</option>
       <option>In-Active</option>
      </select>
      </div>     
        </div>
        <br />
            <button type="submit" className="btn btn-primary">
                 Submit
            </button>            
      </form>
    </>
  );
};
export default Project_Form;
