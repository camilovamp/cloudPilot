
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('CloudPilot Dashboard', () => {
  it('renders the application layout', () => {
    render(<App />);

    expect(
      screen.getByRole('navigation', {
        name: 'Main navigation',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Cloud Overview',
      }),
    ).toBeInTheDocument();
  });

  it('renders the default 30-day metrics', () => {
    render(<App />);

    expect(
      screen.getByText('Monthly Spend'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$42,817'),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: '30 Days',
      }),
    ).toHaveAttribute('aria-pressed', 'true');
  });

  it('updates the metrics when selecting 7 days', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: '7 Days',
      }),
    );

    expect(
      screen.getByText('Weekly Spend'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$10,240'),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: '7 Days',
      }),
    ).toHaveAttribute('aria-pressed', 'true');

    expect(
      screen.queryByText('Monthly Spend'),
    ).not.toBeInTheDocument();
  });

  it('renders four KPI cards', () => {
    render(<App />);

    const cards = document.querySelectorAll('.metric-card');

    expect(cards).toHaveLength(4);
  });
});
