import React from 'react';
import AddTodoForm from './AddTodoForm'
import TodoList from './TodoList';

function App() {

  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      <AddTodoForm onAddTodo={setNewTodo} />
      
      <p>{newTodo}</p>

      <TodoList />

    </div>
  );
}

export default App;
