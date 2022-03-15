import { Movement } from "./Movement"
import './Movement.css'

const movements = ({allMovements}) => {
    return (
       
        <div className="table-container" role='table'> 
            <div className="flex-table header" role='rowgroup'>
                <div className="flex-row first" role='columnheader'>Tipo</div>
                <div className="flex-row" role='columnheader'>Fecha</div>
                <div className="flex-row" role='columnheader'>Concepto</div>
                <div className="flex-row" role='columnheader'>Monto</div>  
                <div className="flex-row" role='columnheader'>#</div>  
                <div className="flex-row" role='columnheader'>#</div> 
            </div>          
        {allMovements?.map(m => {
            return(
            <Movement
            key={m.id}
            amount={m.amount}    
            type={m.type}
            date={m.date}
            concept = {m.concept}
            id = {m.id}    
            />
                )}
        )}
        </div>
    )
}

export default movements;