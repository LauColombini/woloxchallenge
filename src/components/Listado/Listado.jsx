/* eslint-disable react/prop-types */
import React from 'react'
import Navbar from '../HomaPage/Navbar/Navbar'
import Footer from '../HomaPage/Footer/Footer'


const Listado = ({ list, handleClickFav, handleSearch, newArrTech, favsTechs, handleSortAsc, handleSortDes }) => {
    return (
        <>
            <Navbar />
            <div className='inputListado'>
                <input type="text" onChange={handleSearch} name='inputSearch' placeholder='Busca tu tecnologia favorita...' />
                <div>
                    <button onClick={handleSortAsc}>Ordenar Asc</button> <button onClick={handleSortDes}>Ordenar Des</button>
                </div>
            </div>
            {newArrTech.length ?
                <div key className='listadoContainer'>

                    {newArrTech.map((list, i) => {
                        return (
                            <div key={i} className='listCard'>
                                <div key className='firstView'>
                                    <img src={list.logo} alt="" />
                                </div>
                                <div className='secondView'>
                                    <img src={list.logo} alt="" />
                                    <span>Autor: {list.author}</span>
                                    <span>Lenguaje: {list.language}</span>
                                    <span>Licencia: {list.license}</span>
                                    <span>Tecnología: {list.tech}</span>
                                    <span>Tipo: {list.type}</span>
                                    <span>Año: {list.year}</span>
                                    <button onClick={handleClickFav} name={list.tech}> {favsTechs.includes(list.tech) ? "Agregado" : "Agregar a fav"}</button>
                                </div>
                            </div>)
                    })}
                </div>
                :
                <div key className='listadoContainer'>
                    {list.map((list, i) => {
                        return (
                            <div key={i} className='listCard'>
                                <div key className='firstView'>
                                    <img src={list.logo} alt="" />
                                </div>
                                <div className='secondView'>
                                    <img src={list.logo} alt="" />
                                    <span>Autor: {list.author}</span>
                                    <span>Lenguaje: {list.language}</span>
                                    <span>Licencia: {list.license}</span>
                                    <span>Tecnología: {list.tech}</span>
                                    <span>Tipo: {list.type}</span>
                                    <span>Año: {list.year}</span>
                                    <button onClick={handleClickFav} name={list.tech}>{favsTechs.includes(list.tech) ? "Agregado" : "Agregar a fav"}</button>
                                </div>
                            </div>)
                    })}
                </div>}

            <Footer />
        </>
    )
}


export default Listado

