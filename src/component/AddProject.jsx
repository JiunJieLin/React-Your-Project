const AddProject = ({ onStartAdd, projects }) => {
  return (
    <div className=" h-[950px] w-[500px]  rounded-tr-3xl bg-black px-8 py-20">
      <h1 className="mb-8 text-2xl text-white">YOUR PROJECTS</h1>
      <button
        className="rounded-lg bg-gray-800 px-3 py-2 text-gray-400"
        onClick={onStartAdd}
      >
        + Add Project
      </button>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="my-1 w-full rounded-sm px-2 py-2 text-left text-2xl text-stone-400 hover:bg-stone-800 hover:text-stone-200">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddProject;
