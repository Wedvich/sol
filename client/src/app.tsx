import { useCallback, useState } from "react";
import { v7 as uuidv7 } from "uuid";

export function App() {
  const [todos, setTodos] = useState([
    {
      id: uuidv7(),
      title: "Do the first thing",
      done: true,
    },
    {
      id: uuidv7(),
      title: "Do the second thing",
      done: false,
    },
    {
      id: uuidv7(),
      title: "Do the third thing",
      done: false,
    },
  ]);

  const toggleTodo = useCallback(
    async (id: any) => {
      const beforeTodos = todos;
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );

      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/apply`,
          {
            method: "POST",
          }
        );
        if (!response.ok) {
          console.error("Failed to apply changes");
          setTodos(beforeTodos);
        }
      } catch {
        console.error("Failed to apply changes");
        setTodos(beforeTodos);
      }
    },
    [todos]
  );

  return (
    <div>
      Sol
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
              />
              {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
