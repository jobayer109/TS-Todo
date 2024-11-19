interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <div>
      <form
        onSubmit={handleAdd}
        className="flex items-center border border-gray-300 rounded-md p-2 w-1/2 mx-auto mt-3"
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-full px-4 py-2 border-none outline-none text-lg font-medium text-gray-700"
          placeholder="Enter a task"
          style={{ fontFamily: "Poppins, sans-serif" }}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
