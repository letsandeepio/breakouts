import { useRef } from "react";

const Projects = () => {
  // Step 1: Create the ref using useRef
  const myRef = useRef();

  const handleButtonClick = () => {
    // Step 3: Access the native html methods on the ref element
    myRef.current.focus();
  };

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='text-lg'>Projects Page</div>
      <div>This page contains all information about your projects!</div>
      <div>
        {/*Step 2: Assign it to the HTML element*/}
        <input type='text' id='projectName' className='border' ref={myRef} />
      </div>
      <div>
        <button onClick={handleButtonClick}>Focus text box</button>
      </div>
    </div>
  );
};

export default Projects;
