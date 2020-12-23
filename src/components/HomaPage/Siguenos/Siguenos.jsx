import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../assets/img_woloxer@2x.png"
const twIcon = "https://icon-library.com/images/twitter-icon-white-transparent/twitter-icon-white-transparent-0.jpg"
function Siguenos() {
    return (
        <div className="siguenosContainer">
            <div className="imgContainer">
                <img src={img} alt="" />
                <div className="text-block">
                    <span>350 + <p>Woloxers</p></span>
                    <div className='imgTw'>
                        <img src={twIcon} alt="" />   @Wolox
                    </div>
                    <Link to='/twitter'>
                        <button>Siguenos</button>
                    </Link>

                </div>
            </div>
            <div className="text">
                Trabajamos para <br /> <span>convertir <p>ideas</p></span> en productos.
            </div>



        </div>
    )
}

export default Siguenos
