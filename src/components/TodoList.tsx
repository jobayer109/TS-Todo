import TodoModel from "../TodoModel";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  console.log(todos);
  return (
    <div className="flex flex-col p-4 space-y-2">
      {todos &&
        todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </div>
  );
};

export default TodoList;
