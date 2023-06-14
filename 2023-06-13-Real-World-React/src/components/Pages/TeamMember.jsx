import { useParams } from "react-router-dom";
import { teamMembers } from "../../utils/mockData";

const TeamMember = () => {
  const { teamId } = useParams();

  const teamMember = teamMembers.find((member) => member.id === Number(teamId));

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='text-lg'>Individual TeamMember Page</div>
      <div>This page contains all information about your team member!</div>
      <div className='text-lg'>Team Member Info</div>
      <div>Name: {teamMember.name}</div>
      <div>Position: {teamMember.designation}</div>
      <div>Email: {teamMember.email}</div>
    </div>
  );
};

export default TeamMember;
