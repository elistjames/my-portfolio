import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BeforeAfterComponent from './BeforeAfterComponent';

const comparisons = [
    {index: '01', title: 'Dashboards', before: 'before-a.webp', after: 'after-a.webp', beforeLabel: 'Old', afterLabel: 'New'},
    {index: '02', title: 'The grid', before: 'before-b.webp', after: 'after-b.webp'},
];

test('renders one slider per comparison, with data-driven and default labels', () => {
    render(<BeforeAfterComponent comparisons={comparisons}/>);

    expect(screen.getByText('Dashboards')).toBeInTheDocument();
    expect(screen.getByText('The grid')).toBeInTheDocument();
    // First row's labels come from the data...
    expect(screen.getByText('Old')).toBeInTheDocument();
    expect(screen.getByText('New')).toBeInTheDocument();
    // ...the second row falls back to the component's generic defaults.
    expect(screen.getByText('Before')).toBeInTheDocument();
    expect(screen.getByText('After')).toBeInTheDocument();
    expect(screen.getAllByRole('slider')).toHaveLength(2);
});

test('the wipe starts centered and moves with the arrow keys', async () => {
    const user = userEvent.setup();
    render(<BeforeAfterComponent comparisons={comparisons}/>);

    const slider = screen.getAllByRole('slider')[0];
    expect(slider).toHaveAttribute('aria-valuenow', '50');

    slider.focus();
    await user.keyboard('{ArrowRight}');
    expect(slider).toHaveAttribute('aria-valuenow', '52');

    await user.keyboard('{ArrowLeft}{ArrowLeft}');
    expect(slider).toHaveAttribute('aria-valuenow', '48');
});
