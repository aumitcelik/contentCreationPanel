import { ReactNode } from 'react';
import { ChevronRight } from 'react-feather';
import { NavLink } from 'react-router-dom';

interface NavBarItemProps {
  children: ReactNode;
  to: string;
  active?: boolean;
}

export default function NavBarItem({
  children,
  to,
  active = false,
}: NavBarItemProps) {
  return (
    <NavLink
      to={to}
    >
      <span>
        {children} {active ? <ChevronRight /> : null}
      </span>
    </NavLink>
  );
}
