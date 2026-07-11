import {ProjectData} from "../components/ProjectData";
import {useParams} from "react-router-dom";
import React, {useLayoutEffect} from "react";
import {SectionType} from "../components/ProjectData";
import "./ProjectPage.css";
import AnimateContainer from "../components/AnimateContainer";
import PointGridComponent from "../components/PointGridComponent";
import SectionMedia from "../components/SectionMedia";
import SubSectionsComponent from "../components/SubSectionsComponent";
import BeforeAfterComponent from "../components/BeforeAfterComponent";


// Shared by any section that offers a row of links styled as buttons (the hero
// and the closing call-to-action). External links open in a new tab; in-page
// ones (#section-id) jump to a section that carries a matching id.
const renderActions = (actions = []) => actions.map((action, i) => {
    const external = /^https?:/.test(action.href || "");
    return (
        <a key={i}
           href={action.href}
           className={`action-btn${action.variant === "outline" ? " outline" : ""}`}
           {...(external ? {target: "_blank", rel: "noreferrer"} : {})}>
            {action.label}
        </a>
    );
});


const ProjectPage = () =>{
    const { id } = useParams();
    const project = ProjectData[id];

    // The browser keeps the scroll offset across a client-side route change, so
    // arriving from a scrolled landing page would drop you into the middle of
    // this one. Before paint, not after, or the wrong position flashes first.
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <div className="page">
            {project.sections.map((section, index) => {
                switch(section.sectionType) {
                    case SectionType.main:
                        return(
                            <AnimateContainer key={index}>
                                <section  className="main">
                                    <div className="side-to-side-div main">
                                        <div className="page-title">
                                            {project.title}
                                        </div>
                                        <div className="image-container">
                                            <SectionMedia className="section-image main"
                                                          image={project.images[section.imageIndex]}
                                                          alt={project.title}
                                                          eager/>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.mainImage:
                        return(
                            <AnimateContainer key={index}>
                                <section className="main">
                                    <div className="div-inline-center span-div">
                                        {/* This image is the whole hero, so it carries the page's
                                            accessible name — section.header is empty here. */}
                                        <SectionMedia className="section-image fill"
                                                        image={project.images[section.imageIndex]}
                                                        alt={project.title}
                                                        eager/>
                                    </div>
                                    <div className="span-div"></div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.heroTerminal:
                        // A hero split between a copy column (kicker / gradient title /
                        // lead / action buttons) and a terminal-styled card whose lines
                        // are supplied by the data.
                        return(
                            <AnimateContainer key={index}>
                                <section className="hero-terminal" id={section.id}>
                                    <div className="hero-terminal-grid">
                                        <div className="hero-terminal-copy">
                                            <div className="hero-kicker">{section.kicker}</div>
                                            {/* The gradient title carries the page's accessible name. */}
                                            <h1 className="hero-title">{section.title}</h1>
                                            <p className="hero-lead">{section.lead}</p>
                                            <div className="actions">{renderActions(section.actions)}</div>
                                        </div>
                                        <div className="hero-terminal-card">
                                            <div className="card-gradient fill">
                                                <div className="card-gradient-inner terminal">
                                                    <div className="terminal-dots" aria-hidden="true">
                                                        <span/><span/><span/>
                                                    </div>
                                                    {section.terminal.map((line, i) => (
                                                        <div key={i} className="terminal-line">
                                                            <div className="terminal-prompt">
                                                                <span className="terminal-arrow">&gt;</span> {line.prompt}
                                                            </div>
                                                            <div className="terminal-value">
                                                                {line.value}
                                                                {line.caret && <span className="terminal-caret" aria-hidden="true"/>}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.statBand:
                        // A responsive row of gradient-bordered metric tiles.
                        return(
                            <AnimateContainer key={index}>
                                <section className="stat-band" id={section.id}>
                                    <div className="span-div stat-grid">
                                        {section.stats.map((stat, i) => (
                                            <div key={i} className="card-gradient fill">
                                                <div className="card-gradient-inner stat-tile">
                                                    <div className="stat-value">{stat.value}</div>
                                                    <div className="stat-label">{stat.label}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.multiParagraph:
                        // A frosted panel of paragraphs. An optional `index` turns the
                        // heading into a numbered sub-section header (01, 02, …).
                        return (
                            <AnimateContainer key={index}>
                                <section id={section.id}>
                                    <div className="span-div">
                                        {section.index
                                            ? <div className="numbered-header">
                                                <span className="section-index">{section.index}</span>
                                                <h3 className="section-subtitle">{section.header}</h3>
                                              </div>
                                            : <div className="header">{section.header}</div>}
                                        <div className="blur-container">
                                            {section.paragraphs.map((paragraph, i) => (
                                                <div key={i}><p>{paragraph}</p><br/></div>
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.image:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                    <div className="span-div">
                                        <div className="span-div">
                                            <div className="header">
                                                {section.header}
                                            </div>
                                        </div>
                                        <div className="div-inline-center span-div">
                                            <SectionMedia className="section-image fill"
                                                          image={project.images[section.imageIndex]}
                                                          alt={section.header}/>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.video: {
                        const video = project.videos[section.videoIndex];
                        // The framed variant sits inside a gradient border with an
                        // optional caption. Plain videos keep the old full-height
                        // layout so existing projects are untouched.
                        if (section.framed) {
                            return (
                                <AnimateContainer key={index}>
                                    <section id={section.id}>
                                        <div className="span-div">
                                            {section.header && <div className="header">{section.header}</div>}
                                            <div className="card-gradient fill video-frame">
                                                <div className="card-gradient-inner video-frame-inner">
                                                    <video
                                                        className="framed-video"
                                                        title={section.header || "project video"}
                                                        src={`${video.data}#t=0.1`}
                                                        poster={video.poster}
                                                        preload="metadata"
                                                        controls
                                                        playsInline
                                                    />
                                                </div>
                                            </div>
                                            {section.caption && <div className="video-caption">{section.caption}</div>}
                                        </div>
                                    </section>
                                </AnimateContainer>
                            );
                        }
                        return(
                            <AnimateContainer key={index}>
                                <section className="main">
                                    <div className="span-div">
                                        <div className="span-div">
                                            <div className="header">
                                                {section.header}
                                            </div>
                                        </div>
                                        <div className="div-inline-center span-div" style={{height: "100%"}}>
                                            {/* #t=0.1 makes the browser render the first frame as a
                                                poster without preloading the whole file. */}
                                            <video
                                                width="100%"
                                                height="100%"
                                                className="section-video"
                                                title="project video"
                                                src={`${video.data}#t=0.1`}
                                                preload="metadata"
                                                controls
                                                playsInline
                                            />
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    }
                    case SectionType.beforeAfter:
                        return (
                            <AnimateContainer key={index}>
                                <section id={section.id}>
                                    <div className="span-div">
                                        <div className="header">{section.header}</div>
                                        {section.body && <p className="section-lead">{section.body}</p>}
                                        <BeforeAfterComponent comparisons={section.comparisons}/>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.paragraphImage:
                        return (
                            <AnimateContainer key={index}>
                                <section>
                                    <div className="span-div">
                                        <div className="header">{section.header}</div>
                                        <div className="side-to-side-div">
                                            <div className="paragraph-image-text blur-container">{section.body}</div>

                                            <AnimateContainer slideIn={true} amount={0}>
                                                <div className="image-container">
                                                    <SectionMedia className="section-image"
                                                                  image={project.images[section.imageIndex]}
                                                                  alt={section.header}/>
                                                </div>
                                            </AnimateContainer>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.subsections:
                        return(
                            <SubSectionsComponent key={index} header={section.header} subsections={section.subsections} images={project.images}/>
                        );
                    case SectionType.pointGrid:
                        return (
                            <AnimateContainer key={index} >
                                <PointGridComponent id={section.id} header={section.header} points={section.subsections}/>
                            </AnimateContainer>
                        );
                    case SectionType.cta:
                        // Centered closing panel: heading + short body + action buttons.
                        return (
                            <AnimateContainer key={index}>
                                <section id={section.id}>
                                    <div className="span-div">
                                        <div className="blur-container cta">
                                            <h3 className="cta-title">{section.header}</h3>
                                            <p className="cta-body">{section.body}</p>
                                            <div className="actions actions-center">
                                                {renderActions(section.actions)}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    case SectionType.basic:
                        // A gradient-card callout, or a numbered/plain write-up. The
                        // plain branch matches the old default markup so the existing
                        // basic sections render unchanged.
                        if (section.variant === "callout") {
                            return (
                                <AnimateContainer key={index}>
                                    <section id={section.id}>
                                        <div className="span-div">
                                            <div className="card-gradient fill">
                                                <div className="card-gradient-inner callout">
                                                    {section.kicker && <div className="callout-kicker">{section.kicker}</div>}
                                                    <h3 className="section-subtitle">{section.header}</h3>
                                                    <p className="callout-body">{section.body}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </AnimateContainer>
                            );
                        }
                        return (
                            <AnimateContainer key={index}>
                                <section id={section.id}>
                                    <div className="span-div">
                                        {section.index
                                            ? <div className="numbered-header">
                                                <span className="section-index">{section.index}</span>
                                                <h3 className="section-subtitle">{section.header}</h3>
                                              </div>
                                            : <div className="header">{section.header}</div>}
                                        {section.body &&
                                            <div className="blur-container"><p>{section.body}</p></div>}
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                    default:
                        return (
                            <AnimateContainer key={index}>
                                <section >
                                    <div className="span-div">
                                        <div className="header">
                                            {section.header}
                                        </div>
                                        <div className="blur-container">
                                            <p>{section.body}</p>
                                        </div>
                                    </div>
                                </section>
                            </AnimateContainer>
                        );
                }
            })}
        </div>
    );
}

export default ProjectPage;
