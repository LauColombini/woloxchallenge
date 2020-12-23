/* eslint-disable no-const-assign */
import React, { useState } from 'react'
import Navbar from "./Navbar/Navbar"
import Inicio from "./Inicio/Inicio"
import Siguenos from './Siguenos/Siguenos'
import Beneficios from './Beneficios/Beneficios'
import Footer from './Footer/Footer'
import Register from "../Register/Register"

function HomePage() {


    const [modal, setModal] = useState(false)


    return (
        <>
            {modal ? <Register setModal={setModal} /> : null}
            <Navbar setModal={setModal} />
            <Inicio />
            <Siguenos />
            <Beneficios />
            <Footer />

        </>
    )
}

export default HomePage
