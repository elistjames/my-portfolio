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
import MLCartoon from '../resources/ml_cartoon.png';
import NeuralNetwork from '../resources/neural_network.png';
import loanIcon from '../resources/loan_icon.png';
import dataset from '../resources/dataset.png';
import preprocessing from '../resources/preprocessing.png';
import results from '../resources/results.png';
import confusion from '../resources/confusion-matrix.png';
import byteBooksMobile from '../resources/bytebooksmobile.mp4';


export const SectionType = {
    main: "main",
    basic: "basic",
    multiParagraph: "multiParagraph",
    image: "image",
    video: "video",
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
            }
        ]
    },
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
]