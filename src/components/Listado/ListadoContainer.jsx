/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchList } from '../../redux/action-creators/listado'
import spinner from '../../assets/spinner.gif'

import Listado from './Listado'
const ListadoContainer = () => {
    const techsFavs = JSON.parse(localStorage.getItem('techFavs')) || []
    const list = useSelector(state => state.list)
    const [favsTechs, setFavsTechs] = useState(techsFavs)
    const [searchTech, setSearchTech] = useState("")
    const [newArrTech, setNewArrTech] = useState(list)
    const [sort, setSort] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchList())
    }, [])
    useEffect(() => {
        localStorage.setItem('techFavs', JSON.stringify(favsTechs))

    }, [favsTechs])

    useEffect(() => {
        if (list.length) {
            setNewArrTech(list.filter(e => e.tech.toLowerCase().includes(searchTech.toLowerCase()) || e.type.toLowerCase().includes(searchTech.toLowerCase())))
        }
    }, [searchTech])

    const handleClickFav = (e) => {
        if (!favsTechs.includes(e.target.name)) setFavsTechs(prev => [...prev, e.target.name])
        else setFavsTechs(prev => {
            let idx = prev.indexOf(e.target.name);
            prev.splice(idx, 1)
            return prev
        })
    }
    const handleSearch = (e) => {
        setSearchTech(e.target.value)
    }

    const handleSortAsc = () => {
        list.sort((a, z) => {
            if (a.tech.toLowerCase() < z.tech.toLowerCase()) return -1
            if (a.tech.toLowerCase() > z.tech.toLowerCase()) return 1
            return 0
        })
        newArrTech.length && newArrTech.sort((a, z) => {
            if (a.tech.toLowerCase() < z.tech.toLowerCase()) return -1
            if (a.tech.toLowerCase() > z.tech.toLowerCase()) return 1
            return 0
        })
        //switch
        setSort(sort => !sort)
    }

    const handleSortDes = () => {
        list.sort((z, a) => {
            if (a.tech.toLowerCase() < z.tech.toLowerCase()) return -1
            if (a.tech.toLowerCase() > z.tech.toLowerCase()) return 1
            return 0
        })
        newArrTech.length && newArrTech.sort((z, a) => {
            if (a.tech.toLowerCase() < z.tech.toLowerCase()) return -1
            if (a.tech.toLowerCase() > z.tech.toLowerCase()) return 1
            return 0
        })
        //switch
        setSort(sort => !sort)
    }

    console.log(favsTechs)


    return (
        <>
            {list.length ?
                <Listado handleSortAsc={handleSortAsc} handleSortDes={handleSortDes} favsTechs={favsTechs} list={list} handleSearch={handleSearch} handleClickFav={handleClickFav} newArrTech={newArrTech} />
                : <div className='spinnerListado'>
                    <img src={spinner} />
                </div>
            }
        </>
    )
}
export default ListadoContainer