import AddProject from "./component/AddProject";
import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
const Home = () => {
  return (
    <div className="  mx-auto min-h-screen max-w-[1920px] bg-white">
      <div className="flex h-[1000px] w-full items-end justify-between">
        <AddProject />
        <div className="  h-[950px] w-full  border-2 pl-10">
          <NoProjectSelected />
        </div>
      </div>
    </div>
  );
};

export default Home;
