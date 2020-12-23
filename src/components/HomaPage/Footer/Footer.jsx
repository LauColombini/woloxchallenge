import React from 'react'
import { Link } from 'react-router-dom'
import Ic_Wolox_Footer from "../../../assets/Ic_Wolox_Footer.svg";
function Footer() {
    return (
        <div className="footerContainer">
            <div className='textAndButton'>
                <h2>Gracias por <span>completar el ejercicio</span> </h2>
                <span>Te invitamos a ver mas informacion</span>
                <Link to="/wolox">
                    <button>Conocer mas</button>
                </Link>

            </div>
            <img src={Ic_Wolox_Footer} alt="" />
        </div>
    )
}


export default Footer