import { BiBook, BiBriefcase, BiCodeAlt, BiMessageDetail } from 'react-icons/bi';
import { SiLinkedin, SiIndeed, SiGithub, SiCodewars } from 'react-icons/si';

import portfolio1 from './portfolio1.png';
import portfolio2 from './portfolio2.png';
import portfolio3 from './portfolio3.png';
import portfolio4 from './portfolio4.png';

const certData = [
    {
        title: 'Responsive Web Design',
        url: 'https://www.freecodecamp.org/certification/mai-reason/responsive-web-design',
        detail: 'freecodecamp',
        id: 'cert1',
    },
    {
        title: 'Javascript Algorithms and Data Structures',
        url: 'https://www.freecodecamp.org/certification/mai-reason/javascript-algorithms-and-data-structures',
        detail: 'freecodecamp',
        id: 'cert2',
    },
    {
        title: 'Advanced CSS and SASS',
        url: 'https://www.udemy.com/certificate/UC-d81b2395-2c38-44fe-8c36-80b9d47777cb/',
        detail: 'Udemy',
        id: 'cert3',
    },
    {
        title: 'Complete jQuery Course',
        url: 'https://www.udemy.com/certificate/UC-66914547-14c7-4ed5-a444-2caff107cf51/',
        detail: 'Udemy',
        id: 'cert3',
    },
    {
        title: 'Modern React with Redux',
        url: 'https://www.udemy.com/certificate/UC-e4cba17d-9e2e-4b03-9a98-765145da4ea1/',
        detail: 'Udemy',
        id: 'cert4',
    },
];

const skillsData = [
    {
        title: 'Technology',
        logo: <BiCodeAlt />,
        details: ['HTML, CSS, E6 javascript', 'SASS/SCSS, React JS, jQuery', 'Visual Code Studio, Node, Git Bash', 'Microsoft Office suite & Google suite',]
    },
    {
        title: 'Skills',
        logo: <BiBriefcase />,
        details: ['Legal & Administrative support', 'Event planning & Time management', 'Document & Data organization', 'Client Relations', 'Academic research & writing']
    },
    {
        title: 'Education',
        logo: <BiBook />,
        details: ['Masters in Global Politics', 'Bachelors in Political Science']
    },
    {
        title: 'Languages',
        logo: <BiMessageDetail />,
        details: ['English (fluent/native)', 'Tagalog (fluent/native)', 'French (intermediate)', 'Japanese (intermediate)']
    },
];
const portfolioData = [
    {
        image: portfolio1,
        title: 'List Trackers',
        url: 'https://alex-reason.github.io/list-trackers/',
        detail: 'A React application using Redux and Redux-toolkit; there are 2 kinds of lists: an item-cost list and a task list tracker.',
        id: 'portfolio1'
    },
    {
        image: portfolio2,
        title: 'Art Portfolio',
        url: 'https://alex-reason.github.io/vince-reasonda/',
        detail: 'Plain html and javascript, and SCSS. Showcasing use of grid and media queries. Artworks are by Vince Reasonda.',
        id: 'portfolio2'
    },
    {
        image: portfolio3,
        title: 'Online shop',
        url: 'https://alex-reason.github.io/product-project-1/',
        detail: 'Plain html and javascript, and SCSS. Showcasing use of grid and media queries. Not with full functions.',
        id: 'portfolio3'
    },
    {
        image: portfolio4,
        title: 'Personal Website',
        url: 'https://alex-reason.github.io/personal-website-3/#contact',
        detail: 'Plain html and javascript, and CSS. This is a showcase of interactions that utilize event listeners.',
        id: 'portfolio4'
    },
];

const experienceData = [
    {
        id: 'experience1',
        label: 'Paralegal',
        content: [
            'From September 2020',
            'Works on around 10-20 immigration related cases a week with minimal supervision from the attorneys.',
            'Uses AWS and other web services to efficiently file applications.',
            'Maintains relationships with around 100 clients yearly by gathering, evaluating, and organizing extensive amounts of client data in a digital filing system throughout the case process.',
            'Organizes and maintains the electronic database of clients as the company shifts to full digitalization.',
        ]
    },
    {
        id: 'experience2',
        label: 'Legal Assistant',
        content: [
            'November 2018 - March 2020',
            'Prepared immigration related applications with the supervision of 1-2 attorneys.',
            'Stayed in constant communication with around 10 new and current clients a day by gathering information, updating clients of their cases, and maintaining comprehensive spreadsheets of cases and clients along with their respective timetables.',
            'Managed schedules of 5 attorneys.',
            'Handled accounting by billing and documenting income / expenses to monitor if income for the month reached the target.',
        ]
    },
    {
        id: 'experience3',
        label: 'Coordinator',
        content: [
            'April 2018 - March 2020',
            'Class coordinator and assistant to the music school director.',
            'Proposed schedules for music classes for around 10 clients a week through connecting students and teachers to match their schedules.',
            'Managed the 3-4 recitals twice a year for about 30 students by coordinating with teachers, parents and students, preparing the schedule, assisting the director, and creating event posters and paraphernalia for the school.',
            'Created a system for tracking inquiries and potential clients for the music school.',
        ]
    },
    {
        id: 'experience4',
        label: 'Nonprofit Intern',
        content: [
            'June 2015 - July 2015',
            'Worked directly under the Human Rights Officer and head of the Campaigns Office.',
            'Collaborated with government agencies and other non profits for 2-3 human rights campaign projects under the supervision of the head of the Campaigns office.',
        ]
    }
];

const socialData = [
    {
        url: 'https://www.linkedin.com/in/alexandra-reasonda/',
        icon: <SiLinkedin />
    },

    {
        url: 'https://my.indeed.com/p/alexandrar-mje63u7',
        icon: <SiIndeed />
    },

    {
        url: 'https://github.com/alex-reason',
        icon: <SiGithub />
    },

    {
        url: 'https://www.codewars.com/users/alex-reason',
        icon: <SiCodewars />
    },
];

export { certData, skillsData, portfolioData, socialData, experienceData };