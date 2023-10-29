const Home = () => {
  return (
    <div className="  mx-auto min-h-screen max-w-[1920px] bg-white">
      <div className="flex h-[1000px] w-full items-end justify-between">
        <div className=" h-[900px] w-[500px]  rounded-tr-3xl bg-black px-8 py-20">
          <h1 className="mb-8 text-2xl text-white">YOUR PROJECTS</h1>
          <button className="rounded-lg bg-gray-800 px-3 py-2 text-gray-400">
            +Add Project
          </button>
        </div>
        <div className=" flex h-[900px] w-full items-center justify-center border-2">
          <div className=" flex  flex-col items-center gap-4 text-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-[60px] w-[60px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <p className="text-2xl font-bold text-gray-800">
              No Project Selected
            </p>
            <p className="mb-1 text-gray-400">
              select a project or get started with a new one
            </p>
            <button className="rounded-lg bg-gray-800 px-3 py-2 text-gray-400">
              Create new project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
