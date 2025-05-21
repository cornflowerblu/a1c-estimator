'use client';

import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@a1c/auth'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function UserMenu() {
  const { user, isAuthenticated, signOut } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <Link
        href="/auth/signin"
        className="text-sm font-medium text-gray-700 hover:text-indigo-600"
      >
        Sign in
      </Link>
    );
  }

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="sr-only">Open user menu</span>
          {user.image ? (
            <Image
              className="h-8 w-8 rounded-full"
              src={user.image}
              alt=""
              width={32}
              height={32}
            />
          ) : (
            <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
              {user.name?.charAt(0) || user.email?.charAt(0) || 'U'}
            </div>
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
            <p className="font-medium truncate">{user.name || 'User'}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/profile"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Your Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                href="/dashboard"
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-gray-700'
                )}
              >
                Dashboard
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block w-full text-left px-4 py-2 text-sm text-gray-700'
                )}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
