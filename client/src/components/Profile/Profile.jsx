import axios from "axios";
import React, { useEffect, useState } from "react";

function Profile() {


  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES


  useEffect(() => {
    axios.get('/auth/current-session').then(({ data }) => {
      setAuth(data);
    })
  }, [])




  return (

      <header className="">
        <h3>
          Вы под погонялом {auth && auth.nickname ? auth.nickname : null}
        </h3>
      </header>
  );
}

export default Profile;
