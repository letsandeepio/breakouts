import { Bars3Icon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Toolbar from "./components/Toolbar/Toolbar";
import Dashboard from "./components/Pages/Dashboard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/Pages/ErrorPage";
import Team from "./components/Pages/Team";
import Projects from "./components/Pages/Projects";
import TeamMember from "./components/Pages/TeamMember";

// route '/' ---> root route
// conditionally render a component called Dashboard

// route '/team'
// conditionally render a component called Team

// and so on

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "team/:teamId",
    element: <TeamMember />,
  },
]);

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className='lg:pl-72'>
          <div className='sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
            <button
              type='button'
              className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>

            {/* Separator */}
            <div
              className='h-6 w-px bg-gray-900/10 lg:hidden'
              aria-hidden='true'
            />
            <Toolbar />
          </div>
          <main className='py-10'>
            {/** Slot to Conditionally render components here */}
            <RouterProvider router={router} />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
