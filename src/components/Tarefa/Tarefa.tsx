import React, { useState } from "react";
import { TbX } from "react-icons/tb";
import './Tarefa.css'

interface tarefasType {
    name: string
    id: number
    removeTarefa: (tarefa: {name: string, id: number}) => void;
}

function Tarefa({ name, id, removeTarefa }: tarefasType) {

    const [checkbox, setCheckbox] = useState(false)

    const checkboxHandle = () =>{
        setCheckbox(!checkbox)
    }

    return (
        <div className="tarefa" id={`tarefa-${id}`}>
            <div className="texto-tarefa">
                <input 
                className="checkbox-tarefa"
                type="checkbox" 
                onChange={() => checkboxHandle()}/>
                {
                    checkbox === false
                    ? <label className="nome-tarefa">{name}</label>
                    : 
                    <label className="nome-tarefa" style={{ textDecoration: "line-through" }}>{name}</label>

                }
            </div>

            <TbX size={20} onClick={() => removeTarefa({name, id})}/>

        </div>
    );
}

export default Tarefa