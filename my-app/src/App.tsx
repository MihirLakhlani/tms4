/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React, { useEffect } from "react";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
  useMsalAuthentication,
} from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import { InteractionType } from "@azure/msal-browser";
import ProfileContent from "./Azure/ProfileContent";
// import "bootstrap/dist/js/bootstrap.js";
import SideNav from "./Components/Tables/SideNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Routing from "./Routing/Routing";
import "./App.css";
import Dashboard from "./Components/pages/Dashboard";
import EmployeeTable from "./Components/pages/EmployeeTable";
import Task_Table from "./Components/pages/TaskTable";
import Project_table from "./Components/pages/Projecttable";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Employee_Form from "./Components/Forms/Employee_Form";
import Project_Form from "./Components/Forms/Project_Form";
import Task_Form from "./Components/Forms/Task_Form";
import ProjectEdit from "./Components/pages/ProjectEdit";
import ProjectDelete from "./Components/pages/ProjectDelete";

const App: React.FunctionComponent = () => {
  const request = {
    scopes: ["User.Read"],
    prompt: "select_account",
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { login, result, error } = useMsalAuthentication(
    InteractionType.Silent,
    request
  );

  // useEffect(() => {
  //     if (error) {
  //         login(InteractionType.Redirect, request);
  //     }
  // }, [error]);

  // useEffect(() => {
  //   if (result) {
  //     console.log(result);
  //   }
  // }, [result]);

  const { accounts } = useMsal();

  function handleLogin() {
    login(InteractionType.Redirect, request);
  }
  return (
    <BrowserRouter>
      <AuthenticatedTemplate>
        <SideNav />
        <div className="collapsess">
          <Routes>
          <Route path="/employee" element={<EmployeeTable/>} />
            <Route path="/dashboard" element={<Dashboard/>} />          
            <Route path="/project" element={<Project_table/>} />
            <Route path="/task" element={<Task_Table/>} />
            <Route path="/employee_form" element={<Employee_Form/>} />
            <Route path="/project_form" element={<Project_Form/>} />
            <Route path="/task_form" element={<Task_Form/>} />
            <Route path="/projectedit/:id" element={<ProjectEdit/>}></Route>
            <Route path="/projectdelete" element={<ProjectDelete/>}></Route>
          </Routes>
        </div>

        {accounts.map((account) => {
          return (
            <>
              <div key={account.homeAccountId}>
                <ProfileContent
                  homeId={account.homeAccountId}
                  name={account.name as string}
                />
              </div>
            </>
          );
        })}
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <p>No users are signed in!</p>
      </UnauthenticatedTemplate>

      <Button variant="secondary" onClick={handleLogin}>
        Sign in new user
      </Button>
    </BrowserRouter>
  );
};

export default App;
