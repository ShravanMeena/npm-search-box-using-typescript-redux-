import React, { useState } from "react";

interface childProps {}

const TodoList: React.FC<childProps> = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const todoHandler = () => {
    if (!todo) {
      return;
    }
    setTodo("");
    setTodos([...todos, todo]);
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      todoHandler();
    }
  };

  const deleteTodoHandler = (index: number) => {
    const restTodos = todos.filter((item, i) => i !== index);
    setTodos(restTodos);
  };

  const editTodoHandler = (item: string, index: any) => {
    setIsEdit(true);
    setTodo(item);
    setActiveIndex(index);
  };

  const editTodoSubmit = () => {
    let items = todos;

    var foundIndex = items.findIndex((x, index) => index === activeIndex);
    items[foundIndex] = todo;

    setTodos([]);

    setTimeout(() => {
      setTodos(items);
      setIsEdit(false);
      setTodo("");
    }, 1);
  };

  return (
    <div>
      <h1>{todos?.length === 0 ? "Add Some Todos" : "Your Todos"}</h1>
      <ul>
        {todos?.map((todo, index) => {
          return (
            <li key={index}>
              <span>{todo}</span>
              {!isEdit && (
                <span
                  onClick={() => deleteTodoHandler(index)}
                  style={{
                    marginLeft: 20,
                    fontSize: 14,
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </span>
              )}

              <span
                onClick={() => editTodoHandler(todo, index)}
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: "green",
                  cursor: "pointer",
                }}
              >
                Edit
              </span>
            </li>
          );
        })}
      </ul>

      <br />

      <input
        type="text"
        value={todo}
        name="todo"
        onChange={(e) => setTodo(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      {isEdit ? (
        <>
          <button onClick={editTodoSubmit}>Update</button>
          <button
            onClick={() => {
              setIsEdit(false);
              setTodo("");
            }}
          >
            Back
          </button>
        </>
      ) : (
        <button disabled={!todo} onClick={todoHandler}>
          Add Me
        </button>
      )}
    </div>
  );
};

export default TodoList;
