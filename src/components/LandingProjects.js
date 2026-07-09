import pasonLogo from '../resources/Pason.png';
import capstone from '../resources/capstone.webp';
import byteBooks from '../resources/bytebookslogo.webp';
import byteBooksPhone from '../resources/bytebooksphone.webp';
import MLCartoon from '../resources/ml_cartoon.webp';
import NeuralNetwork from '../resources/neural_network.webp';
import loanIcon from '../resources/loan_icon.webp';
import cofiLogo from '../resources/cofi-logo.svg';
import cofiIcon from '../resources/cofi-icon.webp';

// Card summaries only. Kept apart from ProjectData so the landing page does not
// pull the full per-project page content into its chunk.
//
// This array's order is the order the cards appear in — newest first. Each `id`
// must match that project's position in the ProjectData array, which is what
// ProjectPage indexes into. The two orderings are independent on purpose.
export const LandingPageProjects = [
    {
        id: 3,
        title: 'cofi.ai',
        description: 'Two years at an early-stage fintech startup, building an AI SaaS platform for private-equity firms',
        images: [
            {
                data: cofiLogo,
                fit: "contain"
            },
            {
                data: cofiIcon,
                fit: "cover"
            }
        ]
    },
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
