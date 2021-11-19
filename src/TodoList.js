import React from 'react';
import TodoListItem from './TodoListItem';

// Above the App() function, create an empty Array and store it in a variable named todoList
//const todoList = [];

/**
 * Inside the Array, create at least 3 Objects with the following properties:
   id: unique identifier (ex. 1, 2, 3)
   title: summary of the todo item (ex. "Complete assignment")
 */
   const todoList = [
    {
      id: 1,
      title: 'Complete homework assignment',
    },
  
    {
      id: 2,
      title: 'Do the laundry',
    },
  
    {
      id: 3,
      title: 'Take out the trash',
    },
  ];

function TodoList() {
    return (
          <ul>
              {todoList.map( (item) => (
                      <TodoListItem key={item.id} todo={item} />
                  )
              )}
          </ul>
    );
}

export default TodoList;