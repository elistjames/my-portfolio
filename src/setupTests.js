// jest-dom adds custom matchers for asserting on DOM nodes, e.g.
// expect(element).toHaveTextContent(/react/i)
import '@testing-library/jest-dom/vitest';
import {afterEach} from 'vitest';
import {cleanup} from '@testing-library/react';

// Vitest has no globals-based auto-cleanup the way CRA's jest preset did.
afterEach(() => {
    cleanup();
});

// jsdom implements neither of these, and react-responsive / framer-motion both
// reach for them on mount.
if (!window.matchMedia) {
    window.matchMedia = (query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
    });
}

if (!window.ResizeObserver) {
    window.ResizeObserver = class {
        observe() {}
        unobserve() {}
        disconnect() {}
    };
}

// framer-motion's useInView needs this; jsdom has no layout, so nothing is ever
// reported as visible.
if (!window.IntersectionObserver) {
    window.IntersectionObserver = class {
        constructor() {
            this.root = null;
            this.rootMargin = '';
            this.thresholds = [];
        }
        observe() {}
        unobserve() {}
        disconnect() {}
        takeRecords() { return []; }
    };
}
