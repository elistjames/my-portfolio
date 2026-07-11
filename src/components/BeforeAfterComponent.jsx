import React, {useCallback, useRef, useState} from "react";
import "./BeforeAfter.css";

/**
 * A draggable before/after wipe. The stage holds two same-size images stacked on
 * top of each other; the "after" pane is clipped by a CSS custom property `--x`
 * that the drag updates, so dragging the divider reveals more or less of it.
 *
 * All copy — the tag labels, alt text, the per-row title/description — comes from
 * the section data, so the component knows nothing about any particular project.
 *
 * Pointer capture (set on pointerdown) means a release always registers even if
 * the pointer leaves the stage mid-drag. `touch-action: pan-y` lets a vertical
 * swipe still scroll the page — the browser then fires pointercancel and we stop.
 */
const Comparison = ({
    index,
    title,
    desc,
    before,
    after,
    beforeLabel = "Before",
    afterLabel = "After",
    beforeAlt,
    afterAlt,
    aspect,
}) => {
    const stageRef = useRef(null);
    const dragging = useRef(false);
    const [pos, setPos] = useState(50);

    const setFromClientX = useCallback((clientX) => {
        const el = stageRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const pct = ((clientX - rect.left) / rect.width) * 100;
        setPos(Math.max(0, Math.min(100, pct)));
    }, []);

    const onPointerDown = (e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        setFromClientX(e.clientX);
    };
    const onPointerMove = (e) => {
        if (dragging.current) setFromClientX(e.clientX);
    };
    const endDrag = (e) => {
        dragging.current = false;
        if (e.currentTarget.hasPointerCapture?.(e.pointerId)) {
            e.currentTarget.releasePointerCapture(e.pointerId);
        }
    };
    const onKeyDown = (e) => {
        if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
        else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
    };

    const stageStyle = {"--x": `${pos}%`};
    if (aspect) stageStyle["--ba-aspect"] = aspect;

    return (
        <div className="ba">
            <div className="ba-head">
                {index && <span className="ba-num">{index}</span>}
                <h4 className="ba-title">{title}</h4>
            </div>
            {desc && <p className="ba-desc">{desc}</p>}
            <div className="ba-stage"
                 ref={stageRef}
                 style={stageStyle}
                 onPointerDown={onPointerDown}
                 onPointerMove={onPointerMove}
                 onPointerUp={endDrag}
                 onPointerCancel={endDrag}
                 onKeyDown={onKeyDown}
                 role="slider"
                 tabIndex={0}
                 aria-label={`${title}: drag to compare before and after`}
                 aria-valuemin={0}
                 aria-valuemax={100}
                 aria-valuenow={Math.round(pos)}>
                <img className="ba-img" src={before} alt={beforeAlt || `${title} (before)`} draggable="false" loading="lazy"/>
                <div className="ba-after-pane">
                    <img className="ba-img" src={after} alt={afterAlt || `${title} (after)`} draggable="false" loading="lazy"/>
                </div>
                <span className="ba-tag ba-tag-before">{beforeLabel}</span>
                <span className="ba-tag ba-tag-after">{afterLabel}</span>
                <div className="ba-divider" aria-hidden="true"/>
                <div className="ba-knob" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 7-5 5 5 5"/>
                        <path d="m15 7 5 5-5 5"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

const BeforeAfterComponent = ({comparisons = []}) => (
    <div className="ba-wrap">
        {comparisons.map((comparison, i) => (
            <Comparison key={i} {...comparison}/>
        ))}
    </div>
);

export default BeforeAfterComponent;
