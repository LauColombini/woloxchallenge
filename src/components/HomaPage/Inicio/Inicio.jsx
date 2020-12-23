import React from 'react'
import img from "../../../assets/Img Hero/Ic_ilustra_Hero@2x.png"

function Inicio() {
    return (
        <div className="section1Container" id="Inicio">
            <div className="text">
                Bienvenido a tu <span>Entrevista Tecnica</span> <p> <span>en</span>  Wolox</p>
            </div>

            <img src={img} alt="" />

        </div>
    )
}

export default Inicio
