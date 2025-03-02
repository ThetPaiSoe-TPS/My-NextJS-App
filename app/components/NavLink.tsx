// app/components/NavLink.tsx
'use client'; // Mark the component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
    const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={isActive ? 'text-blue-500 font-bold' : 'text-gray-500'}
    >
      {children}
    </Link>
  );
}