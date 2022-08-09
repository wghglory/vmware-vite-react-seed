import {useRef, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useClickAway} from 'react-use';

import {RoutePath} from '@/core/const/routePath';
import {useAuth} from '@/core/context/AuthContext';

import {User, VcdSession} from '../models/user';
import ThemeSwitcher from './ThemeSwitcher';

const TheNav = () => {
  const {user, signOut} = useAuth();
  const navigate = useNavigate();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const profileRef = useRef(null);
  useClickAway(profileRef, () => {
    setShowProfileMenu(false);
  });
  const menuRef = useRef(null);
  useClickAway(menuRef, () => {
    setShowMenu(false);
  });

  const location = useLocation();

  // if (!user) {
  //   return null;
  // }

  const links = generateNavLinks(user);

  const activeClass = 'text-white bg-gray-900';
  const inactiveClass = 'text-gray-300 hover:text-white hover:bg-gray-700';

  function navigateTo(destination: string) {
    setShowMenu(false);
    navigate(destination);
  }

  return (
    <header className="fixed z-50 w-full bg-gray-800">
      {/* large screen */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] items-stretch justify-between">
          {/* logo navlinks */}
          <div className="flex items-center">
            <h1>
              <Link className="flex flex-shrink-0 items-center" to="/">
                <svg
                  className="mr-4 inline-block h-8 w-8 text-sky-600"
                  viewBox="0 0 35 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z"
                  />
                </svg>
                <span className="text-xl text-gray-100">PRODUCT</span>
              </Link>
            </h1>
            <nav className="hidden h-full md:block">
              <ul className="ml-10 flex h-full items-stretch">
                {links?.map((link, i) => (
                  <li key={link.text} className="flex items-stretch">
                    <Link
                      to={link.to}
                      className={`flex items-center px-4 text-sm font-medium ${
                        location.pathname === link.to ? activeClass : inactiveClass
                      }`}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* right side */}
          <div className="hidden md:block">
            <div className="ml-4 flex h-full items-center md:ml-6">
              <ThemeSwitcher />

              <div className="relative z-50">
                {user && (
                  <button
                    className="ml-4 text-sm font-medium capitalize text-gray-300"
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                  >
                    {user?.user}
                  </button>
                )}

                {/*
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}
                {showProfileMenu && (
                  <div
                    ref={profileRef}
                    className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-700"
                  >
                    <div
                      className="shadow-xs rounded-md bg-white py-1 dark:bg-gray-700"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700
                          hover:bg-gray-100
                          dark:text-gray-300
                          dark:hover:bg-gray-900"
                        role="menuitem"
                      >
                        Your Profile
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700
                          hover:bg-gray-100
                          dark:text-gray-300
                          dark:hover:bg-gray-900"
                        role="menuitem"
                      >
                        Settings
                      </button>
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700
                          hover:bg-gray-100
                          dark:text-gray-300
                          dark:hover:bg-gray-900"
                        role="menuitem"
                        onClick={signOut}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button hide in md screen*/}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
            >
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Small screen menu open!!! Menu open: "block", Menu closed: "hidden" */}
      <div ref={menuRef} className={`md:hidden ${showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links?.map((link, i) => (
            <button
              key={link.text}
              onClick={() => navigateTo(link.to)}
              className={`block w-full rounded-md px-3 py-2 text-sm font-medium ${
                location.pathname === link.to ? activeClass : inactiveClass
              } ${i > 0 && 'mt-1'}`}
            >
              {link.text}
            </button>
          ))}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          <div className="flex items-center justify-center px-5">
            <div className="">
              <div className="text-base font-medium capitalize leading-none text-white">{user?.user}</div>
              <div className="text-sm font-medium leading-none text-gray-400">{user?.userId}</div>
            </div>
          </div>
          <div className="mt-3 space-y-1 px-2">
            <button className="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Your Profile
            </button>
            <button className="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
              Settings
            </button>
            <button
              onClick={signOut}
              className="block w-full rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TheNav;

function generateNavLinks(user: VcdSession | null) {
  if (!user) return null;

  if (user.roles === 'System Administrator') {
    return [
      {text: 'Home', to: RoutePath.dashboard},
      {text: 'Datagrid', to: 'datagrid'},
    ];
  }
  if (user.roles === 'Organization Administrator' || user.roles === 'Organization User') {
    return [
      {text: 'Home', to: RoutePath.tenantHome},
      {text: 'Datagrid', to: 'datagrid'},
    ];
  }
}
