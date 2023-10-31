import AddTask from "./AddTask";
const Task = () => {
  return (
    <div>
      <h2 className="mb-4 text-3xl font-bold text-stone-700">Tasks</h2>
      <AddTask />
      <p>This project does not have any tasks yet</p>
      <ul></ul>
    </div>
  );
};

export default Task;
