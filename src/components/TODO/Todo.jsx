import React from 'react'
import notDone from '../../assets/notDone.png'
import { Link } from 'react-router-dom'
const Todo = () => {
    return (
        <div className='todoContainer'>
            <img src={notDone} alt="" />
            <Link className='link' to="/">
                <span> Volver al inicio !</span>
            </Link>
        </div>
    )
}

export default Todo
