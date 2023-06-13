/* eslint-disable react/prop-types */

const Button = ({ onClick, label }) => {
  return (
    <button
      type='button'
      className='inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      onClick={onClick}
      data-cy='newAccount'
    >
      {label}
    </button>
  );
};

export default Button;
