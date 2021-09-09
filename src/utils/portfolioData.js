import projectImage from '../assets/images/project-1.jpg'
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from '@material-ui/icons/Visibility';
export default {
  projects: [
    {
      title: "Quiz App React",
      description: "The api taken from Open Trivia Database",
      image: projectImage,
      GithubLink: "https://github.com/linaskitm/quiz-app-react",
      GithubIcon: <GitHubIcon />,
      liveIcon: <VisibilityIcon />,
      liveLink: "https://www.google.com/",
    },
    {
      image: projectImage,
      title: "Client review",
      description: "First touches with laravel, search bar, some filters",
      GithubLink: "https://github.com/linaskitm/Laravel-client_review",
      GithubIcon: <GitHubIcon />,
      liveIcon: <VisibilityIcon />,
      liveLink: "http://client-review.herokuapp.com/",
    },
    {
      image: projectImage,
      title: "WCC Academy homework",
      description: "Created autocomplete search bar and style by scketch",
      GithubLink: "https://github.com/linaskitm/homework",
      GithubIcon: <GitHubIcon />,
      liveIcon: <VisibilityIcon />,
      liveLink: "https://homework-wcc.herokuapp.com/",
    },
  ],
};