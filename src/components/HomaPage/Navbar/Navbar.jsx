import React from 'react'
import { Link as Scroll } from "react-scroll";
import { Link, useLocation } from 'react-router-dom'
import logo_full_color from "../../../assets/logo_full_color.svg";
// eslint-disable-next-line react/prop-types
function Navbar({ setModal }) {
    const modalHandle = () => {
        setModal(true)
    }
    const token = localStorage.getItem('token')
    const techs = JSON.parse(localStorage.getItem('techFavs'))
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className='NavbarContainer'>
            <div className='Navbar'>
                <Link to="/">
                    <img src={logo_full_color} alt="asdasd" />
                </Link>
                <div className='NavbarMenu'>
                    {currentPath !== '/listado' ?
                        <>
                            <Scroll
                                to="Inicio"
                                spy={true}
                                smooth={true}
                                offset={-40}
                                duration={500}
                            >
                                <span>Inicio</span>
                            </Scroll>
                            <Scroll
                                to="beneficios"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                <span>Beneficios </span>
                            </Scroll>
                        </>
                        : <>
                            <Link
                                to="/"
                                className='navbarLink'
                            >
                                <span>Inicio</span>
                            </Link>
                            <Link
                                to="/"
                                className='navbarLink'
                            >
                                <span>Beneficios </span>
                            </Link>
                        </>}


                    {!token ?
                        <button onClick={modalHandle}>Register</button>
                        : <Link className='navbarLink' to="/listado">
                            <span>Tecnologías favoritas: {techs ? techs.length : 0}</span>
                        </Link>}


                </div>
            </div>


        </div>
    )
}

export default Navbar
