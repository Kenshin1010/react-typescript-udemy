import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    // const enteredText = todoTextInputRef.current!.value;
    // ? - Optional Chaining và ! - Non-Null Assertion

    if (enteredText?.trim().length === 0) {
      // Throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label className={classes.label} htmlFor="text">
        Todo text
      </label>
      <input
        className={classes.input}
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
