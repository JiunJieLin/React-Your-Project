const AddProject = ({ onStartAdd }) => {
  return (
    <div className=" h-[950px] w-[500px]  rounded-tr-3xl bg-black px-8 py-20">
      <h1 className="mb-8 text-2xl text-white">YOUR PROJECTS</h1>
      <button
        className="rounded-lg bg-gray-800 px-3 py-2 text-gray-400"
        onClick={onStartAdd}
      >
        + Add Project
      </button>
    </div>
  );
};

export default AddProject;
