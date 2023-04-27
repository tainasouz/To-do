import React, { useState } from "react";
import './Body.css'
import Formulario from "../Formulário/Formulario";
import Tarefa from "../Tarefa/Tarefa";


interface tarefasType {
    name: string
    id: number
}

function Body() {
    const [tarefas, setTarefas] = useState<tarefasType[]>([]);

    const adicionaTarefa = (tarefa: tarefasType) => {
        setTarefas([...tarefas, tarefa])
    }

    const removeTarefa = (tarefa: tarefasType) => {
        console.log(tarefas)
        console.log(tarefa)
        setTarefas(tarefas.filter((e) => 
            e.id !== tarefa.id
        ))
    }


    return (
        <div id="body">
            <h2>To-do</h2>
            <Formulario adicionaTarefa={adicionaTarefa} />
            {
                tarefas.length == 0
                    ? <></>
                    :
                    <div id="Tarefas">
                        {
                            tarefas.map((tarefa) => {
                                return(
                                    <Tarefa key={tarefa.id} name={tarefa.name} id={tarefa.id} removeTarefa={removeTarefa}/>
                                );
                            })
                        }
                    </div>
            }

        </div>
    );
}

export default Body