import axios from "axios";

export async function ServerComponent() {
  const res = await axios.get<{ title: string }[]>(
    "https://jsonplaceholder.typicode.com/todos",
  );
  const todos = res.data;

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>{todo.title}</li>
      ))}
    </ul>
  );
}
