import Input from "./Input";
const NewProject = () => {
  return (
    <div className="">
      <div className="mt-16 flex justify-end">
        <button className="rounded-lg px-8 py-4 text-gray-400 hover:bg-slate-300">
          Cancel
        </button>
        <button className="rounded-lg bg-gray-800 px-8 py-4 text-white hover:bg-gray-700">
          Save
        </button>
      </div>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;
