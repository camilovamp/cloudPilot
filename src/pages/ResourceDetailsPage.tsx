
import { Link, useParams } from 'react-router';

type ResourceRouteParams = {
  resourceId: string;
};

export function ResourceDetailsPage() {
  const { resourceId } =
    useParams<keyof ResourceRouteParams>();

  return (
    <section className="feature-page">
      <Link to="/resources" className="back-link">
        ← Back to Resources
      </Link>

      <h1>Resource Details</h1>

      <div className="dashboard-panel">
        <h2>Resource ID</h2>

        <p>{resourceId ?? 'Unknown resource'}</p>
      </div>
    </section>
  );
}
