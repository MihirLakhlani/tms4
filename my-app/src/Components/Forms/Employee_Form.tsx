/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Employee_Form = () => {

    const url = "http://localhost:4000/posts"

  const [employeeinput, setEmployeeinput] = useState({
    firstname: "",
    lastname: "",
    email: "",      
    phone: "",
    password: "",
    designation: "",
  });

const handleinput = (e: any) => {
  const name:any = e.target.name;
  const value:any = e.target.value;

    setEmployeeinput({ ...employeeinput , [name] : value });
    // console.log(name, value);  
  };
const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault();

    navigate('/employee',{state:employeeinput})
    console.log(employeeinput);


    axios.post(url,{
        firstname:employeeinput.firstname,
        lastname:employeeinput.lastname,
        email:employeeinput.email,
        phone:employeeinput.phone,
        password:employeeinput.password,
        designation:employeeinput.designation
    }).then((res)=>
    {
        console.log(res.data)
    })
  };

  return (
    <>
      <div className="container-fluid">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              First_Name
            </label>
            <input
              value={employeeinput.firstname}
              type="text"
              onChange={handleinput}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="firstname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Last_Name
            </label>
            <input
              // onChange={}
              onChange={handleinput}
              value={employeeinput.lastname}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="lastname"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleinput}
              value={employeeinput.email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone" className="form-label">
              Phone
            </label>
            <input
              onChange={handleinput}
              value={employeeinput.phone}
              type="tel"
              className="form-control"
              id="exampleInputPhone"
              aria-describedby="phoneHelp"
              name="phone"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={handleinput}
              value={employeeinput.password}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div>
            designation
            <br />
            <select
              name="designation"
              value={employeeinput.designation}
              onChange={handleinput}
            >
              <option>select</option>
              <option >Front End</option>
              <option >Back End</option>
            </select>{" "}
            <br /> <br />
          </div>
          {/* <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              id="dropdownMenuButton1"
               type="button"
             data-bs-toggle="dropdown"
            >
              aria-expanded="false"
              Dropdown button
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div> br */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Employee_Form;
