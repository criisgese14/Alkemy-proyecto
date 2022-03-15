import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory, useParams } from "react-router-dom";
import { getAllMovements, putMovement } from "../Redux/Actions";

export const EditForm = () => {
    let {id} = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const allMovements = useSelector( state => state?.allMovements)
    useEffect( () => {
        dispatch(getAllMovements())
        // eslint-disable-next-line
    }, [])

    const movement = allMovements.find( m => m.id.toString() === id)
    console.log(movement)
    const [input, setInput] = useState({
        id : id,
        concept : movement?.concept,
        amount: movement?.amount,
        type: movement?.type,
        date: movement?.date,
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(putMovement(input))
        setInput({
            id : '',
            concept : '',
            date: '',
            type: '',
            amount: '',
        })
        history.push('/')

    }

    return (
    <div>
        <form className='form' onSubmit={e => handleSubmit(e)}>
                <h1>Editar movimiento</h1>
                <div className="option">
                <label className="subtitulo">Tipo</label>    
                <input value={input?.type} readOnly='readOnly' type='text' name="type" className='input'></input>
                </div>
                <div className="option">
                <label className="subtitulo">Fecha</label>
                <input value={input?.date} type='date' onChange={e => handleChange(e)} name="date" className='input'></input>
                </div>
                <div className="option">
                <label className="subtitulo">Concepto</label>
                <textarea value={input?.concept} onChange={e => handleChange(e)} name="concept" className='input'></textarea>
                </div>
                <div className="option">
                <label className="subtitulo">Monto</label>
                <input className='input' value={input?.amount} type='number' onChange={e => handleChange(e)} name="amount" ></input>
                </div>
                <div className=" botones">
                <Link to='/' className="boton">
                <button className="boton-back">cancelar edicion</button>
                </Link>
                <button className="boton-agregar">editar</button>
                </div>
                </form>
    </div> )
}