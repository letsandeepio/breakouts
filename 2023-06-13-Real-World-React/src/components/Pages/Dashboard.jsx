import { useContextValue } from "../context/StateProvider";

const Dashboard = () => {
  const { userLoggedIn } = useContextValue();

  return (
    <div>
      {userLoggedIn
        ? "Hey User, welcome to app"
        : "You need to be logged in to use the app"}
    </div>
  );
};

export default Dashboard;
