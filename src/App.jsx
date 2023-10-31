import AddProject from "./component/AddProject.jsx";
import NewProject from "./component/NewProject.jsx";
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";
import SelectedProject from "./component/SelectedProject.jsx";

const Home = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  const handleAddTask = (text) => {
    setProjectState((prevState) => {
      const TaskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: TaskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };
  const handleDeleteTask = (id) => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };
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
  const handleDelete = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
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
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAdd={handleStartAddProject} />;
  }

  return (
    <div className="mx-auto min-h-screen max-w-[1920px] bg-white">
      <div className="flex h-[1000px] w-[1200px] items-end justify-between">
        <AddProject
          onStartAdd={handleStartAddProject}
          projects={projectState.projects}
          onSelected={handleSelected}
          selectedId={projectState.selectedProjectId}
        />
        <div className="h-[950px] w-full  pl-10">{content}</div>
      </div>
    </div>
  );
};

export default Home;
