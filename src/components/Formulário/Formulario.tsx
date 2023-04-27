import React, { useState } from "react";
import './Formulario.css'
import { TbPlus} from "react-icons/tb";

function Formulario({adicionaTarefa}:any) {

    const [tarefa, setTarefa] = useState("");
    const [count, setCount] = useState(0)

    const tarefaHandle = () =>{
        adicionaTarefa({name: tarefa, id: count })
        setTarefa("")
        setCount(count + 1)
    }

    

    return (
        <div id="formualario">
            <label>
                <input
                    type="text"
                    placeholder="Adicionar tarefa"
                    value={tarefa}
                    onChange={(e) => setTarefa(e.target.value)}
                />
            </label>
             <TbPlus size={20} onClick={() => {
                if (tarefa !== "") {
                    tarefaHandle()
                }
             }}/>
        </div>

    );
}

export default Formulario