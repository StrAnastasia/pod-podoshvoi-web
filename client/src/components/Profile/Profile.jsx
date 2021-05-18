import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './profileModule.scss'

function Profile() {


  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES


  useEffect(() => {
    axios.get('/auth/current-session').then(({ data }) => {
      setAuth(data);
    })
  }, [])




  return (

    <header className="">
      <div className='profileBackground' />
      <div className='profileStyle'>
        <div className='favorite'>

        </div>
        <div className='wish'>

        </div>


      </div>

    </header>
  );
}

export default Profile;
