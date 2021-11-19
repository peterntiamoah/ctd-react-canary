import React from 'react';


function AddTodoForm(props) {

    function handleAddTodo(event) {
        event.preventDefault();
        //const todoTitle = document.getElementById("todoTitle");
        //console.log(todoTitle.value);
        //const todoTitle = event.target;
        props.onAddTodo(event.target.todoTitle.value);
        event.target.reset();
        //todoTitle.value = '';

        //document.getElementById("todoForm").reset();

    }

    return (
        <form onSubmit={handleAddTodo} id="todoForm">
            <label htmlFor="todoTitle">Title</label>
            <input id="todoTitle" type="text" name="title" />
            <button>Add</button>
        </form>
    );
}

export default AddTodoForm;