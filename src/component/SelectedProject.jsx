const SelectedProject = ({ project, onDelete }) => {
  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="pt-20">
      <header>
        <div className="flex justify-between ">
          <h1 className="mb-2 text-3xl font-bold text-stone-700">
            {project.title}
          </h1>
          <button
            className="rounded-md bg-stone-300 px-2 text-stone-800 hover:bg-stone-400 "
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-lg  text-stone-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap  text-lg text-stone-700">
          {project.description}
        </p>
      </header>
      Task
    </div>
  );
};

export default SelectedProject;
