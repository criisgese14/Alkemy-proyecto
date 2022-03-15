import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { postMovement } from "../Redux/Actions";
import './Form.css'

export const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory()
    const [input, setInput] = useState({
        concept : '',
        date: '',
        type: '',
        amount: 0,
    })
    const minfecha = new Date(Date());
    const minfechaaño = minfecha.getFullYear();
    const minfechames = minfecha.getMonth() + 1;
    let minfechames1 = minfechames.length !== 1 ? `0${minfechames}` : minfechames;
    const minfechadia = minfecha.getDate();
    const fechadehoy = new String( minfechaaño + '-' + minfechames1 + '-' + minfechadia);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(postMovement(input))
        alert('Movimiento creado');
        setInput({
            concept : '',
            date: '',
            type: '',
            amount: 0,
        })
        history.push("/")
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className='form'>
            <div className="option">
            <h1>Agregar nuevo movimiento</h1>
                <label className="subtitulo">Tipo</label>
                <select onChange={e => handleChange(e)} name='type' className='input'>
                    <option>default</option>
                    <option value='Ingreso'>Ingreso</option>
                    <option value='Egreso'>Egreso</option>
                </select>
                </div>
                <div className="option">
                <label className="subtitulo">Fecha</label>
                <input className='input' type='date' name="date" value={input.date} onChange={e => handleChange(e)} min={fechadehoy} max={fechadehoy}></input>
                </div>
                <div className="option">
                <label className="subtitulo">Monto</label>
                <input className='input' type='number' name="amount" value={input.amount} onChange={e => handleChange(e)}></input>
                </div>
                <div className="option">
                <label className="subtitulo">Concepto</label>
                <textarea className='input' type='text' name="concept" value={input.name} onChange={e => handleChange(e)}></textarea>
                </div>
                <div className="botones">
                <button className="boton-agregar">Agregar</button>
                <Link to='/' className="boton">
                <button className="boton-back">Volver</button>
            </Link>
                </div>
            </form>
        </div>
        )
}