import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import ProjectPage from './ProjectPage';
import {ProjectData} from '../components/ProjectData';
import {LandingPageProjects} from '../components/LandingProjects';

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

// ProjectPage looks a project up as ProjectData[id], so an id that disagrees
// with its array position silently serves the wrong page.
test('every project id matches its position in ProjectData', () => {
    expect(ProjectData.map((p) => p.id)).toEqual(ProjectData.map((_, i) => i));
});

test('every landing card points at a project that exists', () => {
    LandingPageProjects.forEach((card) => {
        expect(ProjectData[card.id], `no project for card "${card.title}"`).toBeDefined();
        expect(ProjectData[card.id].id).toBe(card.id);
    });
});

// Every project page must announce which project it is. Most do it with a
// heading; an image-only hero (SectionType.mainImage) does it through alt text.
test('every project page names itself, in text or in alt text', () => {
    ProjectData.forEach((project) => {
        const {unmount} = renderAt(`/project/${project.id}`);

        const named = screen.queryAllByText(project.title).length
            + screen.queryAllByAltText(project.title).length;

        expect(named, `"${project.title}" is never announced`).toBeGreaterThan(0);
        unmount();
    });
});

test('renders the cofi.ai page across its new section types', () => {
    renderAt('/project/3');

    // heroTerminal title, statBand tile, multiParagraph header
    expect(screen.getByRole('heading', {name: 'cofi.ai'})).toBeInTheDocument();
    expect(screen.getByText('324')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();
    // numbered multiParagraph and the basic callout render as sub-headings
    expect(screen.getByRole('heading', {name: 'Tali — the AI copilot'})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: 'Two real-time collaborative surfaces'})).toBeInTheDocument();
    // pointGrid header
    expect(screen.getByText('Experience I gained')).toBeInTheDocument();

    // beforeAfter renders one draggable slider per comparison
    expect(screen.getAllByRole('slider')).toHaveLength(2);

    // hero action jumps to an in-page anchor; cta actions go out to the profiles
    expect(screen.getByRole('link', {name: 'What I built'})).toHaveAttribute('href', '#build');
    expect(screen.getByRole('link', {name: 'View my GitHub'}))
        .toHaveAttribute('href', 'https://github.com/elistjames');
    expect(screen.getByRole('link', {name: 'Connect on LinkedIn'}))
        .toHaveAttribute('href', 'https://www.linkedin.com/in/eli-stjames/');
});

test('resets the scroll position again when switching between projects', () => {
    const {unmount} = renderAt('/project/0');
    unmount();
    window.scrollTo.mockClear();

    renderAt('/project/1');

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
    expect(screen.getByText('Byte Books')).toBeInTheDocument();
});
