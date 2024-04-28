import pasonLogo from '../images/Pason.png';
import capstone from '../images/capstone.jpg';
import byteBooks from '../images/bytebookslogo.png';
import byteBooksPhone from '../images/bytebooksphone.png';

export const ProjectData = [
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
        ],
        url: '/'
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

        ],
        url: '/'
    },
]