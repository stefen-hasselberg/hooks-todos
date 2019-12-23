import React, {useContext} from 'react';

import {TodosContext} from '../context/context'

const Todos = () => {
  const {state} = useContext(TodosContext)
  return ( 
    <div>
      <ul>
        {
          state.todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
            </li>
          ))
        }
      </ul>

    </div>
   );
}
 
export default Todos;