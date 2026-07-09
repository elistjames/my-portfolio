import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {MemoryRouter, Route, Routes, useLocation} from 'react-router-dom';
import ProjectCards from './ProjectCards';

const Where = () => <div data-testid="loc">{useLocation().pathname}</div>;

const setup = () => render(
    <MemoryRouter initialEntries={['/landing-title']}>
        <Where/>
        <Routes>
            <Route path="/:section" element={<ProjectCards excludeId={-1}/>}/>
            <Route path="/project/:id" element={<div>project page</div>}/>
        </Routes>
    </MemoryRouter>
);

const path = () => screen.getByTestId('loc').textContent;

test('the whole card is a link to its project', async () => {
    const user = userEvent.setup();
    const {container} = setup();

    await user.click(container.querySelector('#card-title'));

    expect(path()).toBe('/project/0');
});

// The card is an anchor, so anything clickable inside it must not bubble a
// navigation. Indicators used to; they are disabled for exactly that reason.
test('the carousel renders no indicator dots', () => {
    const {container} = setup();

    expect(container.querySelector('.carousel-indicators')).toBeNull();
});

test('the carousel arrow changes slide without navigating', async () => {
    const user = userEvent.setup();
    const {container} = setup();

    await user.click(container.querySelector('.carousel-control-next'));

    expect(path()).toBe('/landing-title');
});
