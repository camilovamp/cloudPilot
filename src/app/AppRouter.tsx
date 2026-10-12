
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router';

import { AppLayout } from '../components/layout/AppLayout';
import { DashboardPage } from '../features/dashboard/DashboardPage';

import { FeaturePage } from '../pages/FeaturePage';
import { ResourceDetailsPage } from '../pages/ResourceDetailsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route
            index
            element={<Navigate to="/dashboard" replace />}
          />

          <Route
            path="dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="cost-explorer"
            element={
              <FeaturePage
                title="Cost Explorer"
                description="Analyze AWS spending by service and account."
              />
            }
          />

          <Route
            path="resources"
            element={
              <FeaturePage
                title="Resources"
                description="Review cloud infrastructure resources."
              />
            }
          />

          <Route
            path="resources/:resourceId"
            element={<ResourceDetailsPage />}
          />

          <Route
            path="optimization"
            element={
              <FeaturePage
                title="Optimization"
                description="Identify cloud cost savings opportunities."
              />
            }
          />

          <Route
            path="budgets"
            element={
              <FeaturePage
                title="Budgets"
                description="Monitor AWS budgets and spending thresholds."
              />
            }
          />

          <Route
            path="alerts"
            element={
              <FeaturePage
                title="Alerts"
                description="Review cost and infrastructure alerts."
              />
            }
          />

          <Route
            path="reports"
            element={
              <FeaturePage
                title="Reports"
                description="Explore AWS spending reports."
              />
            }
          />

          <Route
            path="ai-advisor"
            element={
              <FeaturePage
                title="AI Advisor"
                description="Explore AI-powered cloud recommendations."
              />
            }
          />

          <Route
            path="settings"
            element={
              <FeaturePage
                title="Settings"
                description="Manage CloudPilot preferences."
              />
            }
          />

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
