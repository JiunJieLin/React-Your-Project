import { useState } from "react";
const AddTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };
  const handleClick = () => {
    onAdd(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="mb-4 flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        className=" w-64 rounded-md bg-stone-200 p-1 text-stone-900"
        onChange={handleChange}
      ></input>
      <button className="hover:text-stone-600" onClick={handleClick}>
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
