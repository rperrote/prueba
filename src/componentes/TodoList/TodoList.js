import React, { useState } from 'react';

const TodoList = (props) => {
    const [todoActual, setTodoActual] = useState("")
    const [lista, setLista] = useState([{
        id: 0,
        title: "Hola mundo",
        done: true
    }])

    const handleClick = () => {
        let listaAux = lista;
        listaAux.push({
            title: todoActual,
            done: false,
            id: listaAux[listaAux.length-1]
        })
        setLista(listaAux)
        setTodoActual("")
    }

    const handleClickTodo = (id) => {
        let listaAux = lista;
        const listaFinal = listaAux.map(item => {
            if(item.id === id){
                let itemAux = item;
                itemAux.done = !itemAux.done;
                return itemAux
            }else{
                return item
            }
        })
        setLista(listaFinal)
    }

    return <div>
        <input type="text" name="todo" onChange={(ev) => setTodoActual(ev.target.value)} value={todoActual}/>
        <button onClick={handleClick}> Agregar todo</button>
        <ul>
            {lista.map(item => {
                return <li 
                    key={"listaTodo-"+item.id} 
                    style={{textDecoration: item.done ? "line-through" : "none"}}
                    onClick={() => handleClickTodo(item.id)}
                    >
                        {item.title}
                </li>
            })}
        </ul>
    </div>
}

export default TodoList


// Function asdasd(){
// }
// =
// () => {
// }