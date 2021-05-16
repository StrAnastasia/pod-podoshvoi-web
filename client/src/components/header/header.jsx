import React, { useState, useEffect } from "react";
import axios from 'axios';
import './headerStyle.scss'
import hederLogo from '../../images/pngegg.png'


import { Link } from "react-router-dom";
import {fetchAllNews} from '../../redux/AC/ac'
import { useDispatch } from "react-redux";

export default function Header() {

  const [auth, setAuth] = useState(null); // IF WE CHANGE THIS INITIAL VALUE WE GET DIFFERENT PAGES


  const dispatch = useDispatch()

  const allnewsHandler = async () => {
      dispatch(fetchAllNews()); //-- thunk 

  }



  useEffect(() => {
    axios.get('/auth/current-session').then(({ data }) => {
      setAuth(data);
    })
  }, [])


  return (

 <div className='backGroung' style={{ position: 'sticky', top: '0', zIndex: '1' }}>

<div className='logoContainer'>

<img className='logo' src={hederLogo}/>

<Link style={{marginLeft:10, fontSize: 25}} className="textHeader" aria-current="page" to='/homepage'>под подошвой</Link>

</div>

<div>

<Link style={{ marginRight: 20 }} className="textHeader" aria-current="page" to='/homepage'>новости</Link>
<Link className="textHeader" aria-current="page" to='/allgigsmap'>концерты</Link>
</div>
<div style={{marginRight: 30}}>
{auth ? (
                <>
                  <Link
                    className="textHeader" style={{ marginRight: 20 }} aria-current="page" 
                    to="/profile"
                  >
                    Профиль
                  </Link>
                  <a className="textHeader" style={{ marginRight: 20 }} aria-current="page" href='http://localhost:8080/auth/logout'>выход</a>
                </>
              ) : (
                <>
                 <a className="textHeader" style={{ marginRight: 20 }} aria-current="page" href='http://localhost:8080/auth/login'>вход</a>
                 <a className="textHeader" aria-current="page" href='http://localhost:8080/auth/login'>регистрация</a>
                </>
              )}

</div>
</div> 
);
}
