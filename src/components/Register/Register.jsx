import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Register = ({ setModal }) => {
    const [checkbox, setCheckbox] = useState(false)
    const [msgError, setMsgError] = useState({
        name: false,
        last_name: false,
        mail: false,
        phone: false,
        phone2: false,
        country: false,
        province: false,
        password: false,
        passwordRe: false,
        checkbox: false
    })
    const [country, setCountry] = useState(false)
    const [datos, setDatos] = useState({
        name: '',
        last_name: '',
        mail: '',
        phone: '',
        country: '',
        province: '',
        password: ''
    })

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,30}$/,
        password: /^.{6,12}$/,
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,10}$/
    }




    const handleChange = (e) => {
        const value = e.target.value
        if (e.target.name === 'name') {
            if (!value.length) setMsgError({ ...msgError, name: false })
            else if (expresiones.nombre.test(value)) setMsgError({ ...msgError, name: false })
            else setMsgError({ ...msgError, name: true })
        }
        if (e.target.name === 'last_name') {
            if (!value.length) setMsgError({ ...msgError, last_name: false })
            if (expresiones.nombre.test(value) && value.length) setMsgError({ ...msgError, last_name: false })
            else setMsgError({ ...msgError, last_name: true })
        }
        if (e.target.name === 'mail') {
            setMsgError({ ...msgError, mail: false })
        }
        if (e.target.name === 'phone') {
            if (!Number.isInteger(Number(value))) setMsgError({ ...msgError, phone: true })
            else setMsgError({ ...msgError, phone: false })
        }
        if (e.target.name === 'password') {
            if (expresiones.password.test(value) && value.length) setMsgError({ ...msgError, password: false })
            else setMsgError({ ...msgError, password: true })
        }
        if (e.target.name === 'passwordRe') {
            if (value === datos.password) setMsgError({ ...msgError, passwordRe: false })
            else setMsgError({ ...msgError, passwordRe: true })
        }
        if (e.target.name === 'country') {
            console.log('country!!')
        }
        if (e.target.name === 'province') {
            if (value === '') setMsgError({ ...msgError, province: true })
            else setMsgError({ ...msgError, province: false })
            console.log('province!!')
        }
        setDatos({ ...datos, [e.target.name]: e.target.value });
    }

    const handleCheckbox = () => {
        if (checkbox) {
            setCheckbox(false)
            setMsgError({ ...msgError, checkbox: true })
        }
        else {
            setCheckbox(true)
            setMsgError({ ...msgError, checkbox: false })
        }
    }


    const handleChangeCountry = (e) => {
        setDatos({ ...datos, [e.target.name]: e.target.value });
        setCountry(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!expresiones.telefono.test(datos.phone) && !expresiones.correo.test(datos.mail) && !expresiones.nombre.test(datos.name) && !expresiones.nombre.test(datos.last_name) && !expresiones.password.test(datos.password)) {
            setMsgError({ ...msgError, mail: true, phone: true, name: true, last_name: true, password: true })
        } else if (!expresiones.correo.test(datos.mail)) {
            setMsgError({ ...msgError, mail: true })
        } else if (!expresiones.telefono.test(datos.phone)) {
            setMsgError({ ...msgError, phone: true })
        } else if (!expresiones.nombre.test(datos.name)) {
            setMsgError({ ...msgError, name: true })
        } else if (!expresiones.nombre.test(datos.last_name)) {
            setMsgError({ ...msgError, last_name: true })
        } else if (!expresiones.password.test(datos.password)) {
            setMsgError({ ...msgError, password: true })
        } else if (msgError.checkbox) {
            console.log('entre aca')
            setMsgError({ ...msgError, checkbox: true })
        }
        else {
            console.log('entro aca')
            axios.post("https://private-anon-1ad05c16c7-woloxfrontendinverview.apiary-mock.com/signup", datos)
                .then((res) => localStorage.setItem('token', res.data.token))
            setModal(false)
        }
    }

    const modalHandle = () => {
        setModal(false)
    }

    return (
        <div className='registerContainer'>
            <div className='registerForm'>
                <button onClick={modalHandle} className='closeForm'>X</button>
                <span>Registrate en <p>Wolox</p></span>
                <form onSubmit={handleSubmit} className='form'>
                    <input type="text" onChange={handleChange} name='name' placeholder="Ingrese su nombre" />
                    {msgError.name ?

                        <h5><span>X</span> No puede contener caracteres o simbolos.</h5>
                        : null}

                    <input type="text" onChange={handleChange} name='last_name' placeholder="Ingrese su apellido" />
                    {msgError.last_name ?

                        <h5> <span>X</span> No puede contener caracteres o simbolos.</h5>
                        : null}


                    <input type="text" onChange={handleChange} name='mail' placeholder="Ingrese su mail" />
                    {msgError.mail ?

                        <h5><span>X</span>Por favor introduzca una direccion de email valida.</h5>
                        : null}

                    <input type="tel" onChange={handleChange} name='phone' placeholder="Ingrese su numero de telefono" />
                    {msgError.phone ?

                        <h5><span>X</span>Ingrese un minimo de 7 numeros y un maximo de 10.</h5>
                        : null}
                    <div className='paisProvincia'>
                        <select id="country" name="country" onChange={handleChangeCountry}>
                            <option disabled selected value> -- Selecciona un pais -- </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                            <option value="Colombia">Colombia</option>
                            <option value="México">México</option>
                            <option value="Perú">Perú</option>
                        </select>
                        {country ?
                            <select id="province" name="province" type="text" onChange={handleChange} >
                                {country === "Argentina" ?
                                    <>
                                        <option disabled selected value> -- Selecciona una provincia -- </option>
                                        <option value="buenos_aires">Buenos Aires</option>
                                        <option value="córdoba">Córdoba</option>
                                        <option value="santa_fe">Santa Fe</option>
                                        <option value="mendoza">Mendoza</option>
                                        <option value="chaco">Chaco</option>

                                    </> : null}
                                {country === "Chile" ?
                                    <>
                                        <option disabled selected value> -- Selecciona una provincia -- </option>
                                        <option value="chile1">chile1</option>
                                        <option value="chile2">chile2</option>
                                        <option value="chile3">chile3</option>
                                        <option value="chile4">chile4</option>
                                        <option value="chile5">chile5</option>

                                    </> : null}
                                {country === "Colombia" ?
                                    <>
                                        <option disabled selected value> -- Selecciona una provincia -- </option>
                                        <option value="bolívar">Bolívar</option>
                                        <option value="boyacá">Boyacá</option>
                                        <option value="caldas">Caldas</option>
                                        <option value="cauca">Cauca</option>
                                        <option value="magdalena">Magdalena</option>

                                    </> : null}
                                {country === "México" ?
                                    <>
                                        <option disabled selected value> -- Selecciona una provincia -- </option>
                                        <option value="México1">México1</option>
                                        <option value="México2">México2</option>
                                        <option value="México3">México3</option>
                                        <option value="México4">México4</option>
                                        <option value="México5">México5</option>

                                    </> : null}
                                {country === "Perú" ?
                                    <>
                                        <option disabled selected value> -- Selecciona una provincia -- </option>
                                        <option value="Perú1">Perú1</option>
                                        <option value="Perú2">Perú2</option>
                                        <option value="Perú3">Perú3</option>
                                        <option value="Perú4">Perú4</option>
                                        <option value="Perú5">Perú5</option>

                                    </> : null}

                            </select>
                            : null}
                        {msgError.province ?
                            <h5><span>X</span>Ingrese los campos requeridos.</h5>

                            : null}
                    </div>
                    <input type="password" onChange={handleChange} name='password' placeholder="Ingrese su contrase;a" />
                    {msgError.password ?
                        <h5><span>X</span>La contraseña tiene que tener un minimo de 6 caracteres.</h5>

                        : null}
                    <input type="password" name='passwordRe' onChange={handleChange} placeholder="Confirme su contrase;a" />

                    {msgError.passwordRe ?
                        <h5><span>X</span>Ambas contraseñas deben ser iguales.</h5>

                        : null}
                    <div className='checkbox'>
                        <input onClick={handleCheckbox} type="checkbox" id='checkbox' name='checkbox' />
                        <label htmlFor='checkbox'> <Link to='/notfound'>Acepto terminos y condiciones</Link> </label>
                    </div>
                    {msgError.checkbox ?
                        <h5><span>X</span>Para registrarse necesita aceptar los terminos y condiciones.</h5>

                        : null}
                    <button type="submit" >Registrar usuario</button>
                </form>

            </div>
        </div>
    )
}
export default Register