import React from "react";
import {useAuth0} from "@auth0/auth0-react";
import {Loading} from "../components/Loading";

export const Profile = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    window.location.href = "/";
  }

  if (user === undefined) {
    return <div>Unexpected error occured</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
