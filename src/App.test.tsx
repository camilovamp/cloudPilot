
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
} from 'vitest';

import App from './App';

describe('CloudPilot routing', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/dashboard');
  });

  afterEach(() => {
    window.history.replaceState({}, '', '/');
  });

  it('renders the dashboard by default', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Cloud Overview',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('$42,817'),
    ).toBeInTheDocument();
  });

  it('navigates to Cost Explorer', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('link', {
        name: 'Cost Explorer',
      }),
    );

    expect(
      screen.getByRole('heading', {
        name: 'Cost Explorer',
      }),
    ).toBeInTheDocument();

    expect(window.location.pathname).toBe(
      '/cost-explorer',
    );
  });

  it('keeps the application layout when navigating', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('link', {
        name: 'Resources',
      }),
    );

    expect(
      screen.getByRole('navigation', {
        name: 'Main navigation',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('CloudPilot'),
    ).toBeInTheDocument();
  });

  it('renders a resource details page', () => {
    window.history.replaceState(
      {},
      '',
      '/resources/i-123456',
    );

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: 'Resource Details',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByText('i-123456'),
    ).toBeInTheDocument();
  });

  it('renders a 404 page for unknown routes', () => {
    window.history.replaceState(
      {},
      '',
      '/unknown-page',
    );

    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /404.*page not found/i,
      }),
    ).toBeInTheDocument();
  });

  it('updates the dashboard period', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole('button', {
        name: '7 Days',
      }),
    );

    expect(
      screen.getByText('$10,240'),
    ).toBeInTheDocument();
  });
});
