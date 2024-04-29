import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import {Outlet} from "react-router-dom";
import {Loading} from "./Loading";
import "./NavBar.scss";

export const NavBar = () => {
  const {user, isAuthenticated, isLoading, loginWithRedirect, logout} = useAuth0();

  const LoginButton = () => {
    return (
      <Button variant="secondary" onClick={() => loginWithRedirect()}>
        Log In
      </Button>
    );
  };

  const LogoutButton = () => {
    return (
      <Button
        variant="secondary"
        onClick={() =>
          logout({
            logoutParams: {returnTo: window.location.origin},
          })
        }
      >
        Log Out
      </Button>
    );
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <a
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Home
            </a>
          </li>

          {isAuthenticated && (
            <li>
              <a
                onClick={() => {
                  window.location.href = "/profile";
                }}
              >
                Profile
              </a>
            </li>
          )}

          {isAuthenticated && <LogoutButton />}
          {!isAuthenticated && <LoginButton />}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
