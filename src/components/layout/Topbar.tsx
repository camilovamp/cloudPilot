
import { Bell, CircleUserRound, Search } from 'lucide-react';

export function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <Search size={18} aria-hidden="true" />
        <span>Cloud Management Dashboard</span>
      </div>

      <div className="topbar-actions">
        <button
          type="button"
          className="icon-button"
          aria-label="Notifications"
          disabled
          title="Notifications coming soon"
        >
          <Bell size={20} />
        </button>

        <div className="user-profile">
          <CircleUserRound size={24} />
          <span>Demo User</span>
        </div>
      </div>
    </header>
  );
}
