import React from "react";

const Task_Form = () => {
  return (
    <>
    <br />
    <div className="container-fluid">
      <form className="container-fluid">
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            aria-describedby="titleHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEnddate" className="form-label">
            End Date
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputEnddate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Project Name
          </label>
         <br /> <select>
              <option>Select</option>
          </select>
        </div>
        <br />
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <br />
         <textarea></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Status
          </label>
         <br />
          <select>
              <option>Select</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Type of Task
          </label>
         <br /> <select>
              <option>Select</option>
          </select>
        </div>
         <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Members
          </label>
         <br /> <select required>
              <option>Select</option>
          </select>
        </div>


        
        
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default Task_Form;
