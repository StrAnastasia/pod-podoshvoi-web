import zIndex from '@material-ui/core/styles/zIndex';
import React from 'react';
import './headerStyle.scss'
import hederLogo from '/home/egor/elbrus/finalProject/pod-podoshvoi-web/client/src/components/homepage/pngegg.png'


import { Link } from "react-router-dom";




export default function Header() {

    return (

        <>
            {/* <div style={{position: 'sticky', top: '0', zIndex: '1'}}>
            <nav className="navbar navbar-fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                          

                            <li className="nav-item">

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
        </div > */}

            <div className='backGroung' style={{ position: 'sticky', top: '0', zIndex: '1' }}>

                <div className='logoContainer'>

                    <img className='logo' src={hederLogo}/>
                   
                    <Link style={{marginLeft:10, fontSize: 25}} className="textHeader" aria-current="page" to='/homepage'>под подошвой</Link>
                    
                </div>

                <div>

                    <Link style={{ marginRight: 20 }} className="textHeader" aria-current="page" to='/homepage'>новости</Link>
                    <Link className="textHeader" aria-current="page" to='/homepage'>концерты</Link>
                </div>
                <div style={{marginRight: 30}}>
                    <Link className="textHeader" style={{ marginRight: 20 }} aria-current="page" to='/singin'>вход</Link>
                    <Link className="textHeader" aria-current="page" to='/singup'>регистрация</Link>
                </div>
            </div>

        </>
    );
}