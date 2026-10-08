
import {
  LayoutDashboard,
  ChartNoAxesCombined,
  Server,
  Zap,
  Wallet,
  Bell,
  FileBarChart,
  Bot,
  Settings,
  Cloud,
} from 'lucide-react';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Cost Explorer', icon: ChartNoAxesCombined },
  { label: 'Resources', icon: Server },
  { label: 'Optimization', icon: Zap },
  { label: 'Budgets', icon: Wallet },
  { label: 'Alerts', icon: Bell },
  { label: 'Reports', icon: FileBarChart },
  { label: 'AI Advisor', icon: Bot },
  { label: 'Settings', icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <Cloud size={24} />
        <span>CloudPilot</span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="sidebar-nav">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <span
                  className={
                    item.label === 'Overview'
                      ? 'nav-item nav-item-active'
                      : 'nav-item'
                  }
                  aria-current={
                    item.label === 'Overview'
                      ? 'page'
                      : undefined
                  }
                >
                  <Icon size={18} aria-hidden="true" />
                  <span>{item.label}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        CloudPilot v0.1
      </div>
    </aside>
  );
}
