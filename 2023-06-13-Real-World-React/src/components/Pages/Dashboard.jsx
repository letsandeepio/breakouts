import { useContextValue } from "../context/StateProvider";

const Dashboard = () => {
  const { userLoggedIn } = useContextValue();

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='text-lg'>Dashboard</div>
      {userLoggedIn
        ? "Hey User, welcome to app"
        : "You need to be logged in to use the app"}
    </div>
  );
};

export default Dashboard;
