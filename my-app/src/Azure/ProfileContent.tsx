import React, { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
// import { ProfileData } from "./ProfileData";
import { callMsGraph } from "./graph";
import { AccountInfo } from "@azure/msal-common";
import { IPublicClientApplication } from '@azure/msal-browser';

interface IProfileContentProps {
   homeId: string;
   name: string;
}

const ProfileContent = (props: IProfileContentProps) => {
  
  const { instance } = useMsal();
  const [graphData, setGraphData] = useState("");

  const account = instance.getAccountByHomeId(props.homeId);

  const request = {
    scopes: ["User.Read"],
    account: account as AccountInfo
  };

  useEffect(()=>{
    instance.acquireTokenSilent(request).then((response) => {
      callMsGraph(response.accessToken).then(response => setGraphData(response));
    }).catch((e) => {
      instance.acquireTokenPopup(request).then((response) => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
      });
    });
  },[])
  // Silently acquires an access token which is then attached to a request for Microsoft Graph data
 

  function handleLogout(instance: IPublicClientApplication, homeId: string) {

    const currentAccount = instance.getAccountByHomeId(homeId);
    instance.logoutRedirect({
      account: currentAccount
    });
  }

  return (
    <>
      {/* <h5 className="card-title">Welcome {props.name}</h5> */}
      {/* { <ProfileData graphData={graphData} />} */}
      {/* <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance, props.homeId)}>Sign out</Button> */}
    </>
  );
};

export default ProfileContent;
