import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Button from "../UI/Button";
import Profile from "./Profile";
import { useContextValue } from "../context/StateProvider";

const Toolbar = () => {
  const { userLoggedIn, logIn } = useContextValue();

  return (
    <div className='flex flex-1 gap-x-4 self-stretch lg:gap-x-6'>
      <form className='relative flex flex-1' action='#' method='GET'>
        <label htmlFor='search-field' className='sr-only'>
          Search
        </label>
        <MagnifyingGlassIcon
          className='pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400'
          aria-hidden='true'
        />
        <input
          id='search-field'
          className='block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm'
          placeholder='Search...'
          type='search'
          name='search'
        />
      </form>
      <div className='flex items-center gap-x-4 lg:gap-x-6'>
        <button
          type='button'
          className='-m-2.5 p-2.5 text-gray-400 hover:text-gray-500'
        >
          <span className='sr-only'>View notifications</span>
          <BellIcon className='h-6 w-6' aria-hidden='true' />
        </button>

        {/* Separator */}
        <div
          className='hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10'
          aria-hidden='true'
        />

        {userLoggedIn ? <Profile /> : <Button label='Login' onClick={logIn} />}
      </div>
    </div>
  );
};

export default Toolbar;
