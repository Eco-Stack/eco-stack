import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../utils/Transition';

function DropdownNotifications({ align }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80 ${
          dropdownOpen && 'bg-slate-200'
        }`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Notifications</span>
        <svg className="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-current text-slate-500 dark:text-slate-400"
            d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
          />
          <path
            className="fill-current text-slate-400 dark:text-slate-500"
            d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
          />
        </svg>
        <div className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-rose-500 dark:border-[#182235]"></div>
      </button>

      <Transition
        className={`min-w-80 absolute top-full z-10 -mr-48 mt-1 origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg dark:border-slate-700 dark:bg-slate-800 sm:mr-0 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="px-4 pb-2 pt-1.5 text-xs font-semibold uppercase text-slate-400 dark:text-slate-500">
            Notifications
          </div>
          <ul>
            <li className="border-b border-slate-200 last:border-0 dark:border-slate-700">
              <Link
                className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="mb-2 block text-sm">
                  📣{' '}
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    Edit your information in a swipe
                  </span>{' '}
                  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">Feb 12, 2021</span>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0 dark:border-slate-700">
              <Link
                className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="mb-2 block text-sm">
                  📣{' '}
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    Edit your information in a swipe
                  </span>{' '}
                  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">Feb 9, 2021</span>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0 dark:border-slate-700">
              <Link
                className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-700/20"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="mb-2 block text-sm">
                  🚀
                  <span className="font-medium text-slate-800 dark:text-slate-100">
                    Say goodbye to paper receipts!
                  </span>{' '}
                  Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                </span>
                <span className="block text-xs font-medium text-slate-400 dark:text-slate-500">Jan 24, 2020</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownNotifications;
