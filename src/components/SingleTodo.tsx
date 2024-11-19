import { useState } from "react";
import { RiCheckLine, RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import TodoModel from "../TodoModel";

interface Props {
  todo: TodoModel;
  todos: TodoModel[];
  setTodos: React.Dispatch<React.SetStateAction<TodoModel[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSaveEdit = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <div className="bg-white rounded-md p-4 shadow-md border border-gray-300 flex justify-between  w-2/3 mx-auto">
      {edit ? (
        <input
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSaveEdit(todo.id);
            }
          }}
          className="w-full px-2 py-1 border-none outline-none"
        />
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span className="text-lg font-bold">{todo.todo}</span>
      )}

      <div className="flex space-x-2">
        <RiEdit2Line
          onClick={() => setEdit(!edit && !todo.isDone)}
          className="h-5 w-5 text-gray-500 hover:text-gray-700"
        />
        <RiDeleteBin2Line
          onClick={() => handleDelete(todo.id)}
          className="h-5 w-5 text-red-500 hover:text-red-700"
        />
        <RiCheckLine
          onClick={() => handleComplete(todo.id)}
          className="h-5 w-5 text-green-500 hover:text-green-700"
        />
      </div>
    </div>
  );
};

export default SingleTodo;
