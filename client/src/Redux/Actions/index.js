import axios from "axios";

export const GET_ALL_MOVEMENTS = "GET_ALL_MOVEMENTS"
export const POST_MOVEMENT = "POST_MOVEMENT"
export const DELETE_MOVEMENT = "DELETE_MOVEMENT"
export const PUT_MOVEMENT = "PUT_MOVEMENT"

export function getAllMovements(){
    return async dispatch => {
        console.log('hola');
        const allMovements = await axios.get('http://localhost:3001/movements')
        dispatch({
            type: GET_ALL_MOVEMENTS,
            payload: allMovements.data, 
        })
    }
}

export function postMovement(data){
    return async dispatch => {
        const newMovement = await axios.post('http://localhost:3001/movement', data)
        dispatch({
            type: POST_MOVEMENT,
            payload: newMovement,
        })
    }
}

export function deleteMovement(id){
    console.log(id)
    return async dispatch => {
        await axios.delete('http://localhost:3001/movement/' + id)
        dispatch({
            type: DELETE_MOVEMENT,
            payload: id,
        })
    } 
}

export function putMovement(data){
    console.log(data)
    return async dispatch => {
        await axios.put('http://localhost:3001/movement/', data)
        dispatch({
            type: PUT_MOVEMENT,
            payload: data
        })
    }
}