import * as React from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listTodos } from "../graphql/queries";

function ListaServicios() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await API.graphql(graphqlOperation(listTodos));
      setTodos(data.listTodos.items);
    })();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>{todo.name}</h2>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default ListaServicios;
