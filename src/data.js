// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "allanqin";

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I enjoy learning about technology and helping others use it to improve their lives and be more productive. I built this site with React, React Bootstrap, Redux, and the GitHub REST API.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML5",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS3",
  },{
    id: 0,
    skill: <Icon icon="mdi:sass" className="display-4" />,
    name: "SCSS",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="devicon-plain:typescript" className="display-4" />,
    name: "TypeScript",
  },{
    id: 9,
    skill: <Icon icon="fa6-brands:python" className="display-4" />,  
    name: "Python",
  },
  
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  
  {
    id: 7,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux toolkit",
  },
  {
    id: 0,
    skill: <Icon icon="devicon-plain:reactrouter" className="display-4" />,
    name: "React Router",
  },{
    id: 10,
    skill: <Icon icon="fa-brands:node-js" className="display-4" />,
    name: "Node.js",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:express" className="display-4" />,
    name: "Express.js",
  },{
    id: 0,
    skill: <Icon icon="fa-brands:vuejs" className="display-4" />,
    name: "Vue3",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:jirasoftware" className="display-4" />,
    name: "Jira",
  },
  {
    id: 0,
    skill: <Icon icon="iconoir:agile" className="display-4" />,
    name: "Agile/Scrum",
  },
  {
    id: 0,
    skill: <Icon icon="mdi:webpack" className="display-4" />,
    name: "Webpack",
  },
  {
    id: 0,
    skill: <Icon icon="mdi:babel" className="display-4" />,
    name: "Babel",
  },
  {
    id: 0,
    skill: <Icon icon="devicon-plain:mysql" className="display-4" />,
    name: "MySQL",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:lodash" className="display-4" />,
    name: "Lodash",
  },
  {
    id: 0,
    skill: <Icon icon="mdi:jquery" className="display-4" />,
    name: "jQuery",
  },
  
  {
    id: 0,
    skill: <Icon icon="file-icons:jest" className="display-4" />,
    name: "Jest",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:testinglibrary" className="display-4" />,
    name: "React Testing Library",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:storybook" className="display-4" />,
    name: "Storybook",
  },
  {
    id: 0,
    skill: <Icon icon="simple-icons:postman" className="display-4" />,
    name: "Postman",
  },
  
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mlekygjv";
