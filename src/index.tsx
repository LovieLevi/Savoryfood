import React from "react";
import {createRoot} from "react-dom/client";
import {Auth0Provider} from "@auth0/auth0-react";
import {App} from "src/App";
import "./index.scss";

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
  <Auth0Provider
    domain="dev-bvb83dg3ruznht8f.us.auth0.com"
    clientId="Wt9a3hEQLbJOsLOh2FvDicbvCJXD4IAa"
    authorizationParams={{
      redirect_uri: window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1),
    }}
  >
    <App />
  </Auth0Provider>
);
