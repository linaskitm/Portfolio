import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlinedIcon from '@material-ui/icons/WebOutlined';

export default {
  name: "Linas Pelenis",
  title: "Software developer",
  birthday: "26th November 1991",
  job: "Software developer",
  email: "lpelenis@gmail.com",
  phone: "+37062464551",
  phoneToCall: "tel:+37062464551",
  city: "Kaunas, ",

  socials: {
    Linkedin: {
      link: "https://www.linkedin.com/in/linas-pelenis-83402b153/",
      text: "Linas Pelenis",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/linaskitm",
      text: "Linas Pelenis",
      icon: <GitHubIcon />,
    },
  },
  about:
    "I have found a passion for programming and began searching for career opportunities in this industry. Every day I spent as many hours as l can of learning, coding and expanding knowledge about programming.",

  experiences: [
    {
      title: "Beekeeper",
      date: "2016 - Present",
      description:
        "Bee farming - from maintaining equipment to selling production.",
    },
    {
      title: "UAB Centras - Accountant",
      date: "2018 - 2019",
      description:
        "Household goods store, position – accountant, responsible for transition from total to quantitative accounting, software adaptation/training, automation.",
    },
    {
      title: "UAB Investra - Assistant",
      date: "2015 - 2016",
      description:
        " Evaluation of the receipt of EU support. Responsible for all required data, preparation of development plan, calculation of possible support and etc.",
    },
  ],
  educations: [
    {
      title: "We Can Code Academy",
      date: "Mar 2021 - May 2021, Online",
      description: "From Front to Back",
    },
    {
      title: "Kaunas Information Technology School",
      date: "Sep 2020 - Mar 2021, Kaunas",
      description: "Web development",
    },
    {
      title: "Kaunas Coding School",
      date: "Nov 2017",
      description: "Full-stack web development boot-camp 160 hours",
    },
    {
      title: "Kolping College",
      date: "2011 - 2014, Kaunas",
      description: "Finance",
    },
  ],

  services: [
    {
      title: "Web dev",
      description: "some info about this kind of service",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Web dev",
      description: "some info about this kind of service",
      icon: <WebOutlinedIcon />,
    },
    {
      title: "Web dev",
      description: "some info about this kind of service",
      icon: <WebOutlinedIcon />,
    },
  ],
  skills: [
    {
      title: "Front-end",
      description: [
        "ReactJS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Material UI",
      ],
    },
    {
      title: "Backend-end",
      description: ["NodeJS", "PHP", "Laravel"],
    },
    {
      title: "Databases",
      description: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      title: "Source Control",
      description: ["Git", "Github", "Scrum/Agile"],
    },
  ],
};