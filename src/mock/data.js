import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: 'Tony Thomas | Software Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Tony Thomas',
  name: '| Software Engineer',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi I'm Tony Thomas. I'm a multi-talented software engineer, looking for a full stack or front-end role. I completed the Eleven Fifty Academy Full Stack Web Development bootcamp with 500+ hours of real world coding expereince.`,
  paragraphTwo: `Fueled by high energy, endless creativity and need to innovate. Coding is for me. I'm easily inspired and love to follow my fascinations. I'm never satisfied with ideas. Instead I have an almost impulsive need to act on creating them. I'm passionate, love to win, expressive, and love to work in a team environment.`,
  paragraphThree: `I'm married to my beautiful wife Sydney, and we live in Indinapolis with our labradoodle Dexter. In my free time I love to read, workout with my wife, watch movies, play board games, and watch sports.`,
  resume: 'https://drive.google.com/file/d/1pdvUsnpKwI2eaQzVe9f9PaRaz4iquhQL/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Netflix-new-icon.png',
    title: 'Netflix-Clone',
    info: 'A Netflix-Clone built using React.js, TMDBs API, and deployed with Firebase',
    url: 'https://tt-netflix-clone.web.app/',
    repo: 'https://github.com/tonythomas504/netflix-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'MovieView',
    info: 'MovieView is a full stack application deployed to heroku utilizing Node.js & React.js',
    info2: 'Users can rate and see the latest films.',
    url: 'https://nas-movieview-client.herokuapp.com/',
    repo: 'https://github.com/derek101225/blueBadgeClient', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VibeCast.jpg',
    title: 'VibeCast',
    info: 'VibeCast is a full stack application deployed to heroku utilizing Node.js & React.js ',
    info2: 'Users can sign in, type in their playlist, and comment. Full CRUD on Playlist and Comments',
    url: 'https://tt-netflix-clone.web.app/',
    repo: 'https://github.com/tonythomas504/netflix-clone', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expenseTracker.jpeg',
    title: 'Expense Tracker',
    info: 'I created an expense tracker utiilizing React.js & React Hooks',
    info2: 'You can add, delete, and see the balance of your expenses',
    url: 'https://expense-tracker-tony-thomas.netlify.app/',
    repo: 'https://github.com/tonythomas504/expenseTracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GIPHYICON.png',
    title: 'Giphy API Search',
    info: 'I created a Giphy API search applicaiton deployed to Firebase utilizing HTML, CSS, and JS',
    info2: 'Search any word to find a great gif!',
    url: 'https://tt-giphy-api.web.app/',
    repo: 'https://github.com/tonythomas504/api_Challenge2', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tonythomas504@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tony-thomas-ab8966a5/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tonythomas504',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
