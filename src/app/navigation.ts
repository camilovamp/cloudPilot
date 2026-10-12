
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
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

export type NavigationItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  end?: boolean;
};

export const navigationItems = [
  {
    label: 'Overview',
    path: '/dashboard',
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: 'Cost Explorer',
    path: '/cost-explorer',
    icon: ChartNoAxesCombined,
  },
  {
    label: 'Resources',
    path: '/resources',
    icon: Server,
  },
  {
    label: 'Optimization',
    path: '/optimization',
    icon: Zap,
  },
  {
    label: 'Budgets',
    path: '/budgets',
    icon: Wallet,
  },
  {
    label: 'Alerts',
    path: '/alerts',
    icon: Bell,
  },
  {
    label: 'Reports',
    path: '/reports',
    icon: FileBarChart,
  },
  {
    label: 'AI Advisor',
    path: '/ai-advisor',
    icon: Bot,
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: Settings,
  },
] satisfies NavigationItem[];
