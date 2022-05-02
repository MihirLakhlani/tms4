  /* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as AiIcons from "react-icons/ai";
import axios from "axios";


const EmployeeTable = () => {
const [data,setData] = useState<any[]>([])
const url = "http://localhost:4000/posts"

  
   async function getData() {
       const result = axios.get(url).then((req)=> {
         setData(req.data)
       }) 
  }
    // getData()
    useEffect(()=> {
      console.log(data)
      getData()
    },[])
  // const userdata = () => {
  //     axios.get(url).then((res)=> {
  //       setData(res.data)
  //       // console.log(setData)

  //     })
  // }
// console.log(userdata)

// const loaduser = async () => {
//     const result = await axios.get(url)
//     console.log(result.data)
//     return result.data
// }
  
  return (
    <>
    <div className="cpntainer-fluid">
          <table>
            <thead>
              Designation
            </thead>
            <tbody>
              <td>
                <select>
                  <option>xyz</option>
                </select>
              </td>
            </tbody>
          </table>
<br />
      <NavLink to={"/employee_form"}>
        <button className="btn bg-info">
             Add Employee
        </button>
        <br />
      </NavLink>
      <br />

      <table className="table table-bordered table-dark">

        <thead>
          <tr>
            <th scope="col">first_name</th> 
            <th scope="col">last_name</th>
            <th scope="col">email</th>
            <th scope="col">phone</th>
            <th scope="col">Designation</th>
          </tr>
        </thead> 
          <tbody>
            {
              data.map((element,index) => {
                    return (
                      <>
                      <tr>
                        {/* <td>{index+1}</td> */}
                        <td>{element.firstname}</td>
                        <td>{element.lastname}</td>
                        <td>{element.email}</td>
                        <td>{element.phone}</td>
                        <td>{element.designation}</td>
                      </tr>
                      </>
                    )
              })
            }
        </tbody>
      </table>
      </div>  
    </>
  );
};
export default EmployeeTable;
