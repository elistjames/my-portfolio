import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import ProjectPage from './ProjectPage';

const renderAt = (path) => render(
    <MemoryRouter initialEntries={[path]}>
        <Routes>
            <Route path="/project/:id" element={<ProjectPage/>}/>
        </Routes>
    </MemoryRouter>
);

beforeEach(() => {
    // jsdom does not implement scrollTo, so it has to be replaced outright.
    vi.stubGlobal('scrollTo', vi.fn());
});

afterEach(() => {
    vi.unstubAllGlobals();
});

test('resets the scroll position when a project page mounts', () => {
    renderAt('/project/0');

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
});

test('resets the scroll position again when switching between projects', () => {
    const {unmount} = renderAt('/project/0');
    unmount();
    window.scrollTo.mockClear();

    renderAt('/project/1');

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(screen.getByText('Byte Books')).toBeInTheDocument();
});
