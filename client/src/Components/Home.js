import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllMovements } from "../Redux/Actions";
import Movements from "../Components/Movements";

export const Home = () => {

    const TenMovements = useSelector( state => state.allMovements.slice(0,10))
    const allMovements = useSelector( state => state.allMovements)
    console.log(allMovements)
    function totalMovements (){
    var total = 0;
    for (let i = 0; i < allMovements.length; i++) {
        if (allMovements[i].type === 'Ingreso') {
            total = total + allMovements[i].amount
        }
        else { 
            total = total - allMovements[i].amount
        }
    }
    console.log('este es el total', total)
    return total;
}



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovements())
        // eslint-disable-next-line
    }, []);
    return (
        TenMovements.length ? (
            <div>
            <h1> Saldo actual: {totalMovements()}$</h1>
            <Link to = '/form' className="boton">
                <button className="boton-home">Nuevo movimiento</button>
            </Link>
            <Movements allMovements={TenMovements}/>
            <Link to = '/movements' className="boton">
                <button className="boton-home">Ver todos los movimientos</button>
            </Link>
        </div>
        ) : (
            <div>
            <h1> Saldo actual: {totalMovements()}$</h1>
            <Link to = '/form' className="boton">
                <button>Nuevo movimiento</button>
            </Link>
            <h2> No hay movimientos</h2>
            </div>
        )
        
    )
}