
import { Cloud } from 'lucide-react';
import { NavLink } from 'react-router';

import { navigationItems } from '../../app/navigation';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Cloud size={24} aria-hidden="true" />
        <span>CloudPilot</span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="sidebar-nav">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) =>
                    isActive
                      ? 'nav-item nav-item-active'
                      : 'nav-item'
                  }
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        CloudPilot v0.2
      </div>
    </aside>
  );
}
