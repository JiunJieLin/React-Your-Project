import AddTask from "./AddTask.jsx";
const Task = ({ tasks, onAdd, onDelete }) => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-stone-700">Tasks</h2>
      <AddTask onAdd={onAdd} />
      {tasks.length === 0 && <p>This project does not have any tasks yet</p>}
      {tasks.length > 0 && (
        <ul className="mt-8 w-[500px] rounded-md bg-stone-100 p-2">
          {tasks.map((task) => (
            <li key={task.id} className=" flex justify-between">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Task;
