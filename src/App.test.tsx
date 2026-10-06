import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import App from './App';

describe('App',()=>{
    it('renders dashboard metrics',()=>{
        render(<App/>);
        expect(
            screen.getByText('Monthly Spend'),
        ).toBeInTheDocument();

        expect(
            screen.getByText('Potential Savings')
        ).toBeInTheDocument();

        expect(
            screen.getByText('Active Resources')
        ).toBeInTheDocument();
    });
})