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
    "Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate.",

  experiences: [
    {
      title: "work 1",
      date: "2018 - 2020",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "work 2",
      date: "2016 - 2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "work 3",
      date: "2014 - 2016",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ],
  educations: [
    {
      title: "education 1",
      date: "2018 - 2020",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "education 2",
      date: "2016 - 2018",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
    {
      title: "education 3",
      date: "2014 - 2016",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
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
      description: [
        "Git",
        "Github",
        "Scrum/Agile",
      ],
    },
  ],
};