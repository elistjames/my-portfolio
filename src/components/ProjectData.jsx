import pasonLogo from '../resources/Pason.png';
import capstone from '../resources/capstone.webp';
import byteBooks from '../resources/bytebookslogo.webp';
import byteBooksPhone from '../resources/bytebooksphone.webp';
import panZoomPhone from '../resources/pan-zoom-phone.mp4';
import panZoomPhonePoster from '../resources/pan-zoom-phone-poster.webp';
import panZoomPhoneMask from '../resources/pan-zoom-phone-mask.png';
import panZoomPc from '../resources/pan-zoom-pc.mp4';
import panZoomPcPoster from '../resources/pan-zoom-pc-poster.webp';
import panZoomPcMask from '../resources/pan-zoom-pc-mask.png';
import mysql from '../resources/mysql.webp';
import express from '../resources/expressjs.webp';
import reactLogo from '../resources/reactlogo.webp';
import docker from '../resources/docker.webp';
import MLCartoon from '../resources/ml_cartoon.webp';
import NeuralNetwork from '../resources/neural_network.webp';
import loanIcon from '../resources/loan_icon.webp';
import dataset from '../resources/dataset.webp';
import preprocessing from '../resources/preprocessing.webp';
import results from '../resources/results.webp';
import confusion from '../resources/confusion-matrix.webp';
import byteBooksMobile from '../resources/bytebooksmobile.mp4';
import cofiLogo from '../resources/cofi-logo.svg';
import cofiIcon from '../resources/cofi-icon.webp';
import oldDashboard from '../resources/old_dashboard.webp';
import newDashboard from '../resources/new_dashboard.webp';
import oldModel from '../resources/old_model.webp';
import newModel from '../resources/new_model.webp';
import cofiTali from '../resources/cofi-tali.mp4';
import {BsDiagram3, BsStars, BsBoxes, BsGrid3X3Gap, BsRocketTakeoff, BsRobot} from 'react-icons/bs';


export const SectionType = {
    main: "main",
    mainImage: "mainImage",
    heroTerminal: "heroTerminal",
    basic: "basic",
    multiParagraph: "multiParagraph",
    image: "image",
    video: "video",
    paragraphImage: "paragraphImage",
    subsections: "subsections",
    pointGrid: "pointGrid",
    statBand: "statBand",
    beforeAfter: "beforeAfter",
    cta: "cta",
}

export const ProjectData = [
    {
        id: 0,
        title: 'Pason Live Mobile',
        images: [
            {
                data: pasonLogo,
                fit: "cover"
            },
            {
                data: capstone,
                fit: "cover"
            },
            {
                data: panZoomPhonePoster,
                video: panZoomPhone,
                mask: panZoomPhoneMask,
                fit: "contain",
            },
            {
                data: panZoomPcPoster,
                video: panZoomPc,
                mask: panZoomPcMask,
                fit: "contain",
            }
        ],
        videos: [
            {
                data: null
            }
        ],
        sections: [
            {
                sectionType: SectionType.main,
                header: "Pason Live Mobile",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 1,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.multiParagraph,
                header: "Summary",
                body: "",
                paragraphs: [
                    "Originally tasked with taking a desktop-class web application (Pason Live) and turning into a mobile " +
                    "application using the same code base, my team was able to deliver beyond expectations and deliver " +
                    "production-ready code to our sponsor, Pason Systems.",

                    "Pason Systems is a leading energy services and technology company specializing in " +
                    "the development and delivery of high-value hardware, software, and services, primarily for the oil " +
                    "and gas drilling industry in 12 countries.",

                    "Prior to our implementation, Pason had historically relied on three separate code bases for its " +
                    "client-facing applications. One for iOS, one for Android, and one for desktop. " +
                    "In addition, limitations of the existing desktop app prohibited the use of touch screen laptops " +
                    "and tablets, despite them having complete access and control of the site using external peripherals. " +
                    "This led to inconsistencies, feature delays, and difficulty testing and maintaining each of the applications.",

                    "The final implementation was able to illustrate that as a viable solution to these problems, a single code-base could perform " +
                    "the same features with parallel performance to the individual native applications. We were able to " +
                    "create a fully-featured, mobile-first application, using the same React code base that exists for " +
                    "the desktop class application. Integrated into the new app include numerous multi-touch gestures, " +
                    "such as zoom, scroll, and triple tap. In addition, numerous device orientations are supported, " +
                    "including both portrait and landscape modes. Server side processing detects which type of device the " +
                    "client is connecting from, and delivers an UI-optimized layout of the Pason Live application. " +
                    "Settings, profiles, and saved views are shared seamlessly across devices, and integrated unit " +
                    "testing allows for all device instances to be tested at once. Most importantly however, production " +
                    "changes can now be pushed to each client environment simultaneously without duplication of work."
                ],
                videoIndex: 0,
                imageIndex: 1,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.basic,
                header: "The End Result",
                body: "The result of this project was fantastic. Not only was the team able to achieve silver at the " +
                    "2024 Capstone Design Fair, but Pason is actively pursuing our proven method of mobile application " +
                    "development to simplify their full-stack development process.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 3,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.paragraphImage,
                header: "My Role",
                body: "My job was implementing the touch scroll, zoom and inertia features. Pason was very invested in " +
                    "the scroll and zoom specifically, so it was a great responsibility on my part to deliver. The interesting " +
                    "thing about these touch features is that they dont act as if you are transforming an image. Instead, they " +
                    "manipulate the range of data you are viewing in the graph traces. For the scroll I simply calculated " +
                    "how far a single touch move event traveled as a percentage of the graph component's pixel height, then " +
                    "I increment or decrement the top and bottom bounds of the graph by the same percentage but in respect to " +
                    "the range of drilling data displayed. The zoom was a bit more difficult, as the 2 finger move events had to control " +
                    "the top and bottom bounds at different ratios. These ratios depend on the percentage client Y location of each finger " +
                    "with respect to the graph component height. This was necessary in making the zoom behaviour perfectly follow the position " +
                    "of the finger, such that the data point you finger is touching, is always under that finger. Finally the inertia is triggered when a touch up event occurs. " +
                    "The touch up event handler records the velocity at which the finger was moving before it was released, then will " +
                    "call a async function that essentially loops a touch move event at that velocity, white tapering it off each iteration.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 2,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.image,
                header: "",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 3,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
        ]
    },
    {
        id: 1,
        title: 'Byte Books',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
            {
                data: reactLogo,
                fit: "contain"
            },
            {
                data: express,
                fit: "contain"
            },
            {
                data: mysql,
                fit: "contain"
            },
            {
                data: docker,
                fit: "contain"
            },
        ],
        videos: [
            {
                data: byteBooksMobile
            }
        ],
        sections: [
            {
                sectionType: SectionType.main,
                header: "Byte Books",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.pointGrid,
                header: "The Motivation",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "1. Declining Reading Rates",
                        body: "Fewer people, especially young adults, are reading books regularly",
                        imageIndex: 0
                    },
                    {
                        header: "2. Competing Distractions",
                        body: "Digital media and technology competing for our attention",
                        imageIndex: 0
                    },
                    {
                        header: "3. Lack of Accessibility",
                        body: "Books can be expensive and hard to find in some communities",
                        imageIndex: 0
                    },
                    {
                        header: "4. Short and Simple",
                        body: "Have a diverse collection of short and engaging reads for those who prefer shorter books",
                        imageIndex: 0
                    },
                    {
                        header: "5. On the Go",
                        body: "Have access to a library of books anytime, anywhere, right at your fingertips",
                        imageIndex: 0
                    },
                ]
            },
            {
                sectionType: SectionType.basic,
                header: "The Answer",
                body: "Byte Books is a web-based application designed to empower users to post, share, and discover " +
                    "short stories and written snippets, tailored for quick consumption. By providing a dedicated space " +
                    "for short-form written content, our solution not only addresses the need for a literary equivalent " +
                    "to popular visual platforms but also elevates the voices of writers focusing on short stories, an " +
                    "often underrepresented group in the literary community. This approach not only caters to the modern " +
                    "user's attention span but also fosters a community for those who express creativity through words, " +
                    "not just visuals.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.subsections,
                header: "Implementation",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "ReactJS Front End",
                        body: "When it comes to web development, React is my favourite and definitely where I am my strongest." +
                            " Aside from that, react was a great choice for its ability to handle dynamic user interfaces with" +
                            "its amazing React life cycle protocols.",
                        imageIndex: 2
                    },
                    {
                        header: "ExpressJS API",
                        body: "ExpressJS was new to me on this project, as I had only ever used Python Flask, but I decided to give it a" +
                            "go considering it's good common knowledge to have. After implementing the API I was very pleased with expressJS." +
                            "There was endless documentation for learning and the use of the node mysql package allowed me to connect to the database" +
                            "without any problems.",
                        imageIndex: 3
                    },
                    {
                        header: "MySQL Database",
                        body: "I have worked with MySQL since 2019, I really like the structure it provides for my backend." +
                            " I will be honest, I wish had went with a NoSQL database like MongoDB, only because it would be consistent" +
                            " with the JSON data structures used in the upper layers, and I wouldn't have to worry about any dreaded SQL queries.",
                        imageIndex: 4
                    },
                    {
                        header: "Docker Deployment",
                        body: "Docker was another new service to me, I used it for the fist time in Fall 2023 when I was starting my Capstone project." +
                            "I think it's a very handy tool for easy deployment and containerization. I ended up having three docker containers," +
                            "for the React app, Express API and MySQL database respectively. This allowed me to run all three layers inside docker.",
                        imageIndex: 5
                    },
                ]
            },
            {
                sectionType: SectionType.video,
                header: "",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
        ]
    },
    {
        id: 2,
        title: 'Bank Loan Predictor',
        description: 'A machine learning model that can give a prediction weather to approve a bank loan request or not',
        images: [
            {
                data: MLCartoon,
                fit: "contain"
            },
            {
                data: NeuralNetwork,
                fit: "contain"
            },
            {
                data: loanIcon,
                fit: "contain"
            },
            {
                data: dataset,
                fit: "contain",
            },
            {
                data: preprocessing,
                fit: "contain",
            },
            {
                data: results,
                fit: "contain",
            },
            {
                data: confusion,
                fit: "contain",
            }
        ],
        videos: [
            {
                data: null
            }
        ],
        sections: [
            {
                sectionType: SectionType.main,
                header: "Bank Loan Predictor",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.paragraphImage,
                header: "Motivation",
                body: "For the simple banker worker, approving loans can be a time consuming and complex process. There " +
                    "are many factors to consider such as credit score, income, married or not, number of dependants etc. I " +
                    "decided to try and make a model in python pandas that could streamline this process, and act as sort of a helper to" +
                    " whomever is approving or disproving a loan. Considering the ethical fact that a human should make the final decision, " +
                    "I was not worried about the model having extremely high validation (prediction accuracy) scores. The general goal was for the model," +
                    " to sway the banker to a certain decision with at least an accuracy score of 75%.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 2,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.pointGrid,
                header: "Tested Models",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "Decision Tree Classifier",
                        body: "Good first step for a decision making model",
                        imageIndex: 0
                    },
                    {
                        header: "Random Forest Classifier",
                        body: "Random forest could possibly alleviate some over-fitting as opposed to the decision tree classifier",
                        imageIndex: 0
                    },
                    {
                        header: "Support Vector Classifier",
                        body: "May be able to learn how important each of the training points is to represent the decision" +
                            " boundary",
                        imageIndex: 0
                    },
                    {
                        header: "Gradient Boosting Classifier",
                        body: "Same as Random forest but good to try for max prediction time and accuracy.",
                        imageIndex: 0
                    },
                ]
            },
            {
                sectionType: SectionType.image,
                header: "The Dataset",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 3,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.basic,
                header: "Preprocessing",
                body: "The first step was to remove and data points that have missing values. The reason I did not fill in these values with" +
                    " an average or the data point above it is because each data point is independent as they are each different loan requests from different people. " +
                    "Next, I had to convert any categorical or nominal data to numerical data. I did this using one hot encoding with the get_dummies function. Lastly, there were a few columns" +
                    " that were boolean but as \"True\" and \"False\", so I just simply mapped those to 1 and 0 respectively.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 0,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.image,
                header: "",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 4,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.basic,
                header: "Results",
                body: "After running GridSearchCV on the selected models and hyperparameters, it was determined determined " +
                    "that the SVC model was the most accurate model with these specific parameters; C = 0.005, gamma = 0.0001, kernel = linear. " +
                    "these parameters just control how strict the decision boundary is and how defined the support vector points are. " +
                    "The model manage to exceed my goal with a training accuracy score of 84% and testing accuracy score of 80%. The testing score being a few % lower" +
                    " than training score inferred that there was a but of overwriting but not enough to be a problem in this case.",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 5,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.image,
                header: "",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 5,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
            {
                sectionType: SectionType.image,
                header: "Other Visualization",
                body: "",
                paragraphs: [],
                videoIndex: 0,
                imageIndex: 6,
                subsections: [
                    {
                        header: "",
                        body: "",
                        imageIndex: 0
                    }
                ]
            },
        ]
    },
    // `id` must equal this entry's array position — ProjectPage looks the
    // project up as ProjectData[id].
    {
        id: 3,
        title: 'cofi.ai',
        images: [
            {
                data: cofiLogo,
                fit: "contain"
            },
            {
                data: cofiIcon,
                fit: "cover"
            }
        ],
        videos: [
            {
                data: cofiTali
            }
        ],
        sections: [
            {
                sectionType: SectionType.heroTerminal,
                id: "top",
                kicker: "> case_study / cofi.ai",
                title: "cofi.ai",
                lead: "Two years as a software engineer building the product end to end — the frontend rebuild, the dashboards, the modeling grid, and Tali, the AI copilot.",
                actions: [
                    {label: "See Tali in action", href: "#tali"},
                    {label: "What I built", href: "#build", variant: "outline"},
                ],
                terminal: [
                    {prompt: "whoami", value: "Eli St. James — Software Engineer"},
                    {prompt: "where", value: "cofi.ai · portfolio command center for PE"},
                    {prompt: "when", value: "Sep 2024 → Jul 2026"},
                    {prompt: "stack", value: "Vue 3 · Nuxt · Yjs/Hocuspocus · Python", caret: true},
                ],
            },
            {
                sectionType: SectionType.statBand,
                stats: [
                    {value: "324", label: "PRs authored"},
                    {value: "292", label: "merged to prod"},
                    {value: "186", label: "teammate PRs reviewed"},
                    {value: "200+", label: "issues scoped & filed"},
                    {value: "153K", label: "lines added"},
                    {value: "41", label: "dashboard feature PRs"},
                ],
            },
            {
                sectionType: SectionType.multiParagraph,
                id: "summary",
                header: "Overview",
                paragraphs: [
                    "Cofi is a real-time portfolio command center for private equity firms and their portfolio companies — a shared, live view of financial and non-financial performance that both sides use to plan, report, and decide faster. Think Bloomberg-terminal density with a modern, keyboard-first feel.",
                    "I joined in September 2024 and stayed through July 2026, when the company wound down operations. Over that time I became the dominant author of the frontend: I led a full rebuild in Vue 3 / Nuxt, set up the component architecture the rest of the team built on, and owned the biggest feature areas — the interactive dashboards, the modeling grid, and Tali, our AI copilot. I worked directly with the CTO on a small team, gathering requirements from PE-firm stakeholders and taking features from idea to production.",
                ],
            },
            {
                sectionType: SectionType.beforeAfter,
                id: "rebuild",
                header: "The rebuild — before & after",
                body: <>The clearest way to show the rebuild is to see it. Here's the <strong>old frontend</strong> next to the <strong>redesigned frontend</strong> I led — the surfaces that changed most. Drag each divider to wipe between them.</>,
                comparisons: [
                    {
                        index: "01",
                        title: "Dashboards",
                        desc: <>White summary cards with a bordered delta pill became <strong>centered stat blocks</strong> — big headline value, a rounded sentiment badge and sparkline — beside an AI narrative callout and instrument-glow charts on the dark cockpit surface.</>,
                        before: oldDashboard,
                        after: newDashboard,
                        beforeLabel: "Before · old frontend",
                        afterLabel: "After · redesigned frontend",
                        beforeAlt: "Cofi dashboards — old frontend",
                        afterAlt: "Cofi dashboards — redesigned frontend",
                        aspect: "3820 / 1900",
                    },
                    {
                        index: "02",
                        title: "The modeling grid",
                        desc: <>The old grid already had named line items, <strong>period columns</strong> and an <strong>f(x) formula bar</strong> — but on a flat white spreadsheet. The rebuild keeps the model semantics and moves them onto the dark cockpit surface: @mention metric pills, scenario/period controls and highlighted override cells.</>,
                        before: oldModel,
                        after: newModel,
                        beforeLabel: "Before · old frontend",
                        afterLabel: "After · redesigned frontend",
                        beforeAlt: "Cofi modeling grid — old frontend",
                        afterAlt: "Cofi modeling grid — redesigned frontend",
                        aspect: "3820 / 1900",
                    },
                ],
            },
            {
                sectionType: SectionType.basic,
                id: "build",
                header: "What I built",
            },
            {
                sectionType: SectionType.multiParagraph,
                id: "tali",
                index: "01",
                header: "Tali — the AI copilot",
                paragraphs: [
                    "Tali is Cofi's AI copilot — a chat assistant that lives beside the data and can read, explain, and act on it. I built the chat surface end to end and most of the product features that hang off it. It's the work I'm most excited about, so it leads.",
                    <><strong>The chat experience.</strong> I built the TaliChat overlay in the v2 shell and the panel itself: streaming responses, <strong>@-mentions</strong> for attaching databases, models, dashboards and specific entities as context, copy-to-clipboard on any response, and computing/thinking indicators so the user always knows what Tali is doing.</>,
                    <><strong>Acting on the data.</strong> Beyond answering, Tali produces <strong>Modeler action plans</strong> that propose concrete changes to a model, and <strong>pivot-table AI summaries</strong> that turn a dense grid into a plain-language read. These are the features that make it a copilot rather than a chatbot — it works against the same entities the rest of the product operates on.</>,
                    <><strong>The plumbing.</strong> On the infrastructure side I shipped <strong>MCP</strong> work in production so Tali could reach external tools: a PKCE method fallback for providers that don't support S256, and token refresh for Tali's MCP extensions — the auth edge cases that decide whether an integration actually holds up in production.</>,
                ],
            },
            {
                sectionType: SectionType.video,
                framed: true,
                videoIndex: 0,
                caption: "Tali screen recording · sample data, no customer information",
            },
            {
                sectionType: SectionType.multiParagraph,
                index: "02",
                header: "The frontend rebuild & design system",
                paragraphs: [
                    <>I was the primary author of the Vue 3 / Nuxt rebuild — <strong>283 commit-touches to the app</strong> versus 151 for the next contributor — and of the shared <strong>design-system library</strong> (465 touches) that the rest of the frontend team consumed: menus, selects, date pickers, master-detail editors, overlays, sidebar primitives. Setting those patterns is what let a small team move fast without the UI drifting. Reviewing 186 teammate PRs along the way was a big part of keeping that consistent.</>,
                ],
            },
            {
                sectionType: SectionType.multiParagraph,
                index: "03",
                header: "Interactive dashboards",
                paragraphs: [
                    "This was my single biggest feature area — 40+ block types across 41 PRs: radar, scatter, combo bar+line on a secondary axis, treemaps, histograms, pivot tables with per-row formatting, summary and dimension tables, media blocks, filters, drag-reorder of dimensions and metrics, relative and rolling periods, unit-aware summary cards.",
                    <>The part people miss is that a dashboard isn't chart rendering — it's a real-time collaborative block <em>document</em> built on tiptap + Yjs. I worked on inline text-block editing with Yjs writeback and persisted block reorder and row-resize, so two people editing the same board stay in sync. You can see the block grid in the <a className="inline-link" href="#rebuild">before &amp; after above</a>.</>,
                ],
            },
            {
                sectionType: SectionType.multiParagraph,
                index: "04",
                header: "The modeling grid",
                paragraphs: [
                    <>The modeling grid is a spreadsheet-style, multi-user P&amp;L synced over Yjs + Hocuspocus. I'm the dominant author of the spreadsheet components, and this is where the most complex work lived: a floating <strong>f(x) formula editor</strong> with real error handling, @-mention metric pills and grouped autocomplete, multi-cell range formulas (Ctrl+Right fills), inline cell editing and renaming, scenario / period / dimension controls, leaf overrides and adjustments, and — the piece I'm most proud of — <strong>cell-level comments with conversation anchoring</strong>, so a discussion stays pinned to the exact cell it's about. You can see the grid in the <a className="inline-link" href="#rebuild">before &amp; after above</a>.</>,
                ],
            },
            {
                sectionType: SectionType.basic,
                variant: "callout",
                kicker: "// architecture note",
                header: "Two real-time collaborative surfaces",
                body: "Both the dashboard and the modeling grid are CRDT-synced over Yjs + Hocuspocus. They're worth contrasting: one is a document tree of blocks, the other a cell grid — different conflict semantics, different presence models. Building both taught me how these systems actually behave under real multi-user load, not just in theory.",
            },
            {
                sectionType: SectionType.pointGrid,
                id: "experience",
                header: "Experience I gained",
                subsections: [
                    {icon: BsDiagram3, header: "Real-time collaborative systems", body: "Two CRDT-backed surfaces on Yjs + Hocuspocus — a block-document dashboard and a multi-user spreadsheet, with presence, conflict resolution and offline writeback."},
                    {icon: BsStars, header: "AI product surfaces + MCP", body: "Built Tali's chat, @-mentions and AI summaries, and shipped MCP token-refresh and PKCE fallbacks in production — the auth edge cases of the protocol."},
                    {icon: BsBoxes, header: "Owning a design system", body: "Primary author of the Vue 3 / Nuxt rebuild and the shared component library the rest of the team built on — architecture and patterns, not just screens."},
                    {icon: BsGrid3X3Gap, header: "Complex data UI", body: "A formula editor with error handling, multi-cell range fills, pivot tables with per-row formatting, and 40+ dashboard block types."},
                    {icon: BsRocketTakeoff, header: "Shipping end to end", body: "Gathered requirements from PE-firm stakeholders, scoped 200+ issues, implemented and shipped — working directly with the CTO on a small team."},
                    {icon: BsRobot, header: "Agentic engineering", body: "Planned and shipped large features with Claude Code, using CodeRabbit review gates in CI — leverage paired with review discipline."},
                ],
            },
            {
                sectionType: SectionType.cta,
                id: "connect",
                header: "Two years, idea to production",
                body: "Cofi wound down operations in July 2026. The work stands on its own — and I'm carrying the same lifecycle-ownership and real-time / AI systems experience into what's next.",
                actions: [
                    {label: "View my GitHub", href: "https://github.com/elistjames"},
                    {label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/eli-stjames/", variant: "outline"},
                ],
            },
        ]
    },
]