/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { Axios } from "axios";
import { data } from "jquery";
import React, { useEffect, useState } from "react";
import * as AiIcons from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import Project_Filter from "../Forms/Filter_Forms/Project_Filter";


const Project_table = () => {

  const[user,setUser] = useState<any[]>([])
  const url = "http://localhost:4000/project"

  async function getData() {
    const result =  axios.get(url).then((req) => {
          console.log(req.data)
          setUser(req.data)
    })
  }
  useEffect(()=>{
    getData()
  },[])

 
  const handleChange = () => {
  }
  return (
    <>
   <div className="Filter_table_with_Add">
        <table className="table table-bordered table-info">
          <thead>
            <tr>
              <th className="uk-table-expand">Start Date</th>
              <th className="uk-table-expand">End Date</th>
              <th className="uk-table-expand">Project Priority </th>
              <th className="uk-table-expand">Project Status</th>
              <th className="uk-table-expand"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="uk-table-expand">
                <input
                onChange={handleChange}
                  type="date"
                  name="Start_Date"
                  placeholder="Start_Date"
                >
                </input>
              </td>
              <td className="uk-table-expand">
                <input
                  onChange={handleChange}
                  type="date"
                  name="End_Date"
                  placeholder="End_Date"
                ></input>
              </td>
              <td className="uk-table-expand">
                <select name="PP"  
                  onChange={handleChange}
                >
                  <option>SELECT</option>
                  <option value={"Low"}>Low</option>
                  <option value={"Medium"}>Mediume</option>
                  <option value={"High"}>High</option>
                </select>
              </td>
              <td className="uk-table-expand">
                <select name="PS" 
                  onChange={handleChange}
                
                >
                  <option>SELECT</option>
                  <option value={"Active"}>Active</option>
                  <option value={"In-Active"}>In-Active</option>
                </select>
              </td>
              <td>
                <button>
                  Search
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

     <NavLink to={"/project_Form"}>
      <button className="btn bg-info">
          Add Project
        </button>
      </NavLink>
      <table className="table">
      </table>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Check</th>
            <th scope="col">#</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Name</th>
            <th scope="col">Client Name</th>
            <th scope="col">Project Rate</th>
            <th scope="col">Project Priority</th>
            <th scope="col">Project Status</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td><input type="checkbox" /></td>
            <td>1</td>
            <td>12/05/2000</td>
            <td>25/05/2000</td>
            <td>Mihir</td>
            <td>Mihir</td>
            <td>20$</td>
            <td>High</td>
            <td>Active</td>
            <td><button className="btn bg-info">Edit</button></td>
           <td><button className="btn bg-danger">Delete</button></td>
          </tr> */}
          {
            user.map((element,index)=> {
                return(
                  <>
                  <tr>
                    {/* <td>{element.id}</td> */}
                    <td> <input type="checkbox" /> </td>
                    <td>{index+1}</td>
                    <td>{element.startdate}</td>
                    <td>{element.enddate}</td>
                    <td> {element.name} </td>
                    <td> {element.clientname}</td>
                    <td> {element.projectrate}</td>
                    <td> {element.projectpriority} </td>
                    <td>{element.projectstatus}</td>
                    <td>
                      <NavLink to={`/projectedit/${element.id}`}>
                      <button className="btn bg-info">Edit</button>
                      </NavLink>
                      </td>
                      <td>
                     <NavLink to={"/projectdelete"}> 
                      <button className="btn bg-danger">Delete</button>
                    </NavLink>
                    </td>
                  </tr>
                  </>
                )
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Project_table
