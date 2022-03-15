import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllMovements } from "../Redux/Actions"
import Movements from "./Movements"
const { Link } = require("react-router-dom")

export const ABM = () => {
    const allMovements = useSelector( state => state.allMovements)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovements())
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <Link to='/'>
                <button>Back</button>
            </Link>
            <h1> Estos son todos los movimientos</h1>
            <Movements allMovements={allMovements}/>
        </div>
            )
}