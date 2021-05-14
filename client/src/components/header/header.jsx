import React from 'react';

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import {fetchAllInfa} from '../../redux/AC/ac'


export default function Header() {

const state = useSelector(state=>state)
const dispatch = useDispatch()

const getNews = () => {
  // fetchAllInfa()
  dispatch(fetchAllInfa())
}

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Under theSole</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                          
{/* /////////////////////////////////////////////////////////// */}
                            <li className="nav-item" onClick={getNews}>

                                <Link className="nav-link active" aria-current="page" to='/homepage'>Home</Link>

                            </li>

                        </ul>

                        <div className=" navbar-nav mx-5 ">
                          
                            <Link className="nav-link active" aria-current="page" to='/singin'>Sing in</Link>
                            <Link className="nav-link active" aria-current="page" to='/singup'>Sing up</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div >
    );
}
