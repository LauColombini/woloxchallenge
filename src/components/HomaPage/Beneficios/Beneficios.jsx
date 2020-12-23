import React from 'react'
import Ic_Hour from "../../../assets/Ic_Hour.svg";
import Ic_HomeOffice from "../../../assets/Ic_HomeOffice.svg";
import Ic_Workshops from "../../../assets/Ic_Workshops.svg";
import Ic_DrinkSnacks from "../../../assets/Ic_DrinkSnacks.svg";
import Ic_laptop from "../../../assets/Ic_laptop.svg";
import Ic_brain from "../../../assets/Ic_brain.svg";

function Beneficios() {
    return (
        <div className='beneficiosContainer' id="beneficios">
            <div className='title'>
                Entre los beneficios que ofrecemos se encuentran <span>;)</span>
            </div>
            <div className='beneficios'>
                <div>
                    <img src={Ic_Hour} alt="asdasd" />
                    <span>Flexibilidad Horaria</span>
                </div>
                <div>
                    <img src={Ic_HomeOffice} alt="asdasd" />
                    <span>Home Office</span>
                </div>
                <div>
                    <img src={Ic_Workshops} alt="asdasd" />
                    <span>Capacitaciones y workshops</span>
                </div>
                <div>
                    <img src={Ic_DrinkSnacks} alt="asdasd" />
                    <span>Snacks, frutas y bebidas gratis</span>
                </div>
                <div>
                    <img src={Ic_laptop} alt="asdasd" />
                    <span className='laptop67px'>Semana Remota</span>
                </div>
                <div>
                    <img src={Ic_brain} alt="." />
                    <span>Trabajar en ultimas tecnologias</span>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Beneficios
{/* <div className='beneficios'>
                <div className='logosBeneficios'>
                    <img src={Ic_Hour} alt="asdasd" />
                    <img src={Ic_HomeOffice} alt="asdasd" />
                    <img src={Ic_Workshops} alt="asdasd" />
                    <img src={Ic_DrinkSnacks} alt="asdasd" />
                    <img src={Ic_laptop} alt="asdasd" />
                    <img src={Ic_brain} alt="." />
                </div>
                <div className='namesBeneficios'>
                    <span>Flexibilidad Horaria</span>
                    <span>Home Office</span>
                    <span>Capacitaciones y workshops</span>
                    <span>Snacks, frutas y bebidas gratis</span>
                    <span>Semana Remota</span>
                    <span>Trabajar en ultimas tecnologias</span>
                </div>
            </div> */}
