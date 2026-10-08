import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import App from './App';

describe('CloudPilot Dashboard', () => {
  it('renders the dashboard heading', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /cloudpilot/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /cloud overview/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders default 30-day metrics', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Monthly Spend',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$42,817'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('Potential Savings'),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: '30 Days',
      }),
    ).toBeDisabled();
  });

  it('updates metrics when selecting 7 days', async () => {
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
    ).toBeDisabled();

    expect(
      screen.queryByText('Monthly Spend'),
    ).not.toBeInTheDocument();
  });

  it('updates metrics when selecting 90 days', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: '90 Days',
      }),
    );

    expect(
      screen.getByText('Quarterly Spend'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$121,540'),
    ).toBeInTheDocument();
  });

  it('updates metrics when selecting 12 months', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: '12 Months',
      }),
    );

    expect(
      screen.getByText('Annual Spend'),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$487,260'),
    ).toBeInTheDocument();
  });
});