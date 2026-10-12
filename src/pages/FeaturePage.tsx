
type FeaturePageProps = {
  title: string;
  description: string;
};

export function FeaturePage({
  title,
  description,
}: FeaturePageProps) {
  return (
    <section className="feature-page">
      <h1>{title}</h1>
      <p>{description}</p>

      <div className="dashboard-panel">
        <h2>Coming Soon</h2>
        <p>
          This feature will be implemented using
          React, TypeScript, and mocked data.
        </p>
      </div>
    </section>
  );
}
