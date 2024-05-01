import pasonLogo from '../resources/Pason.png';
import capstone from '../resources/capstone.jpg';
import byteBooks from '../resources/bytebookslogo.png';
import byteBooksPhone from '../resources/bytebooksphone.png';
import panZoomPhone from '../resources/pan-zoom-phone.gif';
import panZoomPc from '../resources/pan-zoom-pc.gif';
import mysql from '../resources/mysql.png';
import express from '../resources/expressjs.png';
import reactLogo from '../resources/reactlogo.png';
import docker from '../resources/docker.png';


export const SectionType = {
    main: "main",
    basic: "basic",
    multiParagraph: "multiParagraph",
    image: "image",
    imageParagraph: "imageParagraph",
    paragraphImage: "paragraphImage",
    subsections: "subsections",
    pointGrid: "pointGrid",
}

export const LandingPageProjects = [
    {
        id: 0,
        title: 'Pason Live Mobile',
        description: 'Modified a large scale desktop app to be have complex mobile capabilities. Placed 2nd in capstone design fair',
        images: [
            {
                data: pasonLogo,
                fit: "cover"
            },
            {
                data: capstone,
                fit: "cover"
            }
        ]
    },
    {
        id: 1,
        title: 'Byte Books',
        description: 'A mobile app that helps people with short attentions spans to read more',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
        ]
    },
    {
        id: 2,
        title: 'Byte Books',
        description: 'A mobile app that helps people with short attentions spans to read more',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
        ]
    },
    {
        id: 2,
        title: 'Byte Books',
        description: 'A mobile app that helps people with short attentions spans to read more',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
        ]
    },
    {
        id: 2,
        title: 'Byte Books',
        description: 'A mobile app that helps people with short attentions spans to read more',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
        ]
    },
    {
        id: 2,
        title: 'Byte Books',
        description: 'A mobile app that helps people with short attentions spans to read more',
        images: [
            {
                data: byteBooksPhone,
                fit: "contain"
            },
            {
                data: byteBooks,
                fit: "contain"
            },
        ]
    }
]

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
                data: panZoomPhone,
                fit: "contain",
            },
            {
                data: panZoomPc,
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
                data: null
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
        ]
    },
]