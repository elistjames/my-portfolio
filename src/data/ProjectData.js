import pasonLogo from '../resources/Pason.png';
import capstone from '../resources/capstone.jpg';
import byteBooks from '../resources/bytebookslogo.png';
import byteBooksPhone from '../resources/bytebooksphone.png';

export const SectionType = {
    main: "main",
    basic: "basic",
    video: "video",
    imageParagraph: "imageParagraph",
    paragraphImage: "paragraphImage",
    roles: "roles",
    subsections: "subsections"
}

export const LandingPageProjects = [
    {
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
        title: 'Pason Live Mobile',
        images: [
            {
                data: pasonLogo,
                fit: "cover"
            },
            {
                data: capstone,
                fit: "cover"
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
                header: "Summary",
                body: "",
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
        ]
    },
    {
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