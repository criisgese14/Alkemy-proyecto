import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteMovement, getAllMovements, putMovement } from '../Redux/Actions'
import './Movement.css'

export const Movement = ({amount, type, date, concept, id}) => {
    const [edit, setEdit] = useState(false);
    
    const [input, setInput] = useState({
        id : id,
        concept : concept,
        date: date,
        type: type,
        amount: amount,
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    const changeEdit = () => {
        edit === false ? setEdit(true) : setEdit(false);
        setInput({
            id: id,
            concept : concept,
            date: date,
            type: type,
            amount: amount,
        })
    };
    const dispatch = useDispatch();
    function deleteMovements(){
        dispatch(deleteMovement(id))
    }

    function putMovements(){
        dispatch(putMovement(input))
        dispatch(getAllMovements())
        changeEdit();
    }
    return (
            <div>
            {edit === false ? (
            <div className='flex-table row' role='rowgroup'> 
            <div className='flex-row first' role='cell'>{type}</div>

            <div className='flex-row' role='cell'>{date}</div>

            <div className='flex-row' role='cell'>{concept}</div>

            <div className='flex-row' role='cell'>${amount}</div>
            <Link to={`/editForm/${id}`} className='flex-row' role='cell'>
            <button>editar </button>
            </Link>
            <div className='flex-row' role='cell'>
            <button onClick={deleteMovements}>borrar</button>
            </div>
            </div> ) : (
                <form className='edit'>
                <label>Tipo</label>    
                <input value={input.type} readOnly='readOnly' type='text' name="type"></input>
                <label>Fecha</label>
                <input value={input.date} type='date' onChange={e => handleChange(e)} name="date"></input>
                <label>Concepto</label>
                <textarea value={input.concept} onChange={e => handleChange(e)} name="concept"></textarea>
                <label>Monto</label>
                <input value={input.amount} type='number' onChange={e => handleChange(e)} name="amount"></input>
                <button onClick={changeEdit}>cancelar edicion</button>
                <button onClick={e => putMovements(e)}>editar</button>
                </form>
            ) 
        }
            </div>
    )
}