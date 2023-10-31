import AddProject from "./component/AddProject.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject.jsx";

const Home = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  };
  const handleCancel = () => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  };
  const handleSelected = (id) => {
    setProjectState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  };
  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={handleStartAddProject} />;
  }

  return (
    <div className="mx-auto min-h-screen max-w-[1920px] bg-white">
      <div className="flex h-[1000px] w-full items-end justify-between">
        <AddProject
          onStartAdd={handleStartAddProject}
          projects={projectState.projects}
          onSelected={handleSelected}
          selectedId={projectState.selectedProjectId}
        />
        <div className="h-[950px] w-full border-2 pl-10">{content}</div>
      </div>
    </div>
  );
};

export default Home;
