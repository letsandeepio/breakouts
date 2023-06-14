import { Link } from "react-router-dom";
import { teamMembers } from "../../utils/mockData";

const Team = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='text-lg'>Team Page</div>
      <div>This page contains all information about your team!</div>
      <ul>
        {teamMembers.map((member) => {
          return (
            <li key={member.id} className='text-blue-500 underline'>
              <Link to={`./${member.id}`}>{member.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Team;
