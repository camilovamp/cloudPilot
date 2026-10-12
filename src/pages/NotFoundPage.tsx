
import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section className="not-found-page">
      <h1>404 — Page Not Found</h1>

      <p>
        The page you requested does not exist.
      </p>

      <Link to="/dashboard" className="back-link">
        Return to Dashboard
      </Link>
    </section>
  );
}
