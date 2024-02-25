const logotext = "SIEGFRIED";
const meta = {
    title: "Siegfried Porterfield",
    description: "DevOps Engineer _ Cloud Architect, currently working in Germany",
};

const introdata = {
    title: "I’m Siegfried Porterfield",
    animated: {
        first: "I love DevOps and programming",
        second: "I use cloud technology to enable bankers at Sparkasse Bremen",
        third: "I created Rebutify to help social justice advocates make their case",
    },
    description: "Check that out!",
    your_img_url: "https://sporterfield.sirv.com/Images/sitebackground.png",
};

const dataabout = {
    title: "who is this guy? ",
    aboutme: `Most people call me Ziggy, but you can call me Siegfried if you like opera and dressing up in suits and ties,
    or just want to be extra endearing.
    <br>
    ...
    <br>
    Lightning round: math geek, linux nerd, crunchy outdoorsy vegan hiker, runner, calisthenics enthusiast, singer,
    moved to Europe but hardly travels, likes to complain about North German weather
    
    `,
};
const worktimeline = [{
        jobtitle: "Solutions Architect",
        where: "Sparkasse Bremen",
        date: "Aug 2023 to present",
    },
    {
        jobtitle: "Data Scientist",
        where: "Merentis",
        date: "Oct 2022 to Jul 2023",
    },
    {
        jobtitle: "Undergrad Research Assistant",
        where: "Rochester Institute of Technology",
        date: "May 2021 to Jul 2021",
    },
    {
        jobtitle: "Computer Repair Technician",
        where: "Computer Answers",
        date: "May 2018 to Aug 2018",
    },
];

const skills = [{
        name: "Python",
        value: 95,
    },
    {
        name: "Docker",
        value: 85,
    },
    {
        name: "Azure Pipelines",
        value: 75,
    },
    {
        name: "Azure Provisioning",
        value: 60,
    },
    {
        name: "Rust",
        value: 35,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [{
        img: "https://picsum.photos/400/?grayscale",
        description: "The wisdom of life consists in the elimination of non-essentials.",
        link: "#",
    },
];

const contactConfig = {
    YOUR_EMAIL: "siegfriedporterfield@gmail.com",
    YOUR_FONE: "0170 2492612",
    description: "Shoot me an email anytime, and if you call and have nothing else to talk about, ask me about why I got rid of my couch. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: process.env.YOUR_SERVICE_ID,
    YOUR_TEMPLATE_ID: process.env.YOUR_TEMPLATE_ID,
    YOUR_USER_ID: process.env.YOUR_USER_ID,
};

const socialprofils = {
    github: "https://github.com/seporterfield",
    linkedin: "https://www.linkedin.com/in/siegfried-porterfield",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};