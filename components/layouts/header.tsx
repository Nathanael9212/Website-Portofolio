'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ui/ThemeToggle';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand">
          <span className="brand-dot"></span>
          <span>Nathanael Kristian</span>
        </Link>

        <nav>
          <Link
            href="/"
            className={`navlink ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`navlink ${isActive('/projects') ? 'active' : ''}`}
          >
            Projects
          </Link>
          <Link
            href="/guestbook"
            className={`navlink ${isActive('/guestbook') ? 'active' : ''}`}
          >
            Guestbook
          </Link>
          <Link
            href="/about"
            className={`navlink ${isActive('/about') ? 'active' : ''}`}
          >
            About Me
          </Link>
          <Link
            href="/resume"
            className={`navlink ${isActive('/resume') ? 'active' : ''}`}
          >
            My Resume
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}