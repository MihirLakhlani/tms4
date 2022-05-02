import React from "react";
import { NavLink } from "react-router-dom";

const Task_Table = () => {
  return (
    <>
    <br />
        <NavLink to={"/task_form"}>
        <button className="btn bg-info">Add Task</button>
        </NavLink>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Status</th>
            <th scope="col">Type</th>
            <th scope="col">Project</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Task_Table;
