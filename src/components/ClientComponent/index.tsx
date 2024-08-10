import axios from "axios";
import { useEffect, useState } from "react";

export function ClientComponent() {
  const [todos, setTodos] = useState<{ title: string }[]>([]);

  useEffect(() => {
    (async function () {
      const todos = (
        await axios.get<{ title: string }[]>(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
        )
      ).data;
      console.log({ todos });
      setTodos(todos);
    })();
  });

  console.log({ todos });

  if (todos.length === 0) {
    return <div>Loading todos...</div>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
}
