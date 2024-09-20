'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    name: 'Teams', 
    href: '/teams', 
  },
  {
    name: 'Sales',
    href: '/teams/sales',
  },
  {
    name: 'Webdesign',
    href: '/teams/webdesign',
  },
  {
    name: 'Development',
    href: '/teams/development',
  }
];

export default function Links() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'text-white': pathname === link.href,
              },
            )}
            >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
