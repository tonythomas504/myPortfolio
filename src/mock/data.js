import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
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
    img: 'project.jpg',
    title: 'MovieView',
    info: 'MovieView is a full stack application deployed to heroku utilizing team GitHub Node.js & React',
    info2: 'Users can rate and see the latest films.',
    url: 'https://nas-movieview-client.herokuapp.com/',
    repo: 'https://github.com/derek101225/blueBadgeClient', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'VibeCast.jpg',
    title: 'VibeCast',
    info: 'VibeCast is a full stack application deployed to utilizing Node.js, TypeScript, React',
    info2: 'VibeCast enables a user to type out their playlist and post it to the feed.',
    url: 'http://tt-vibe-cast.herokuapp.com/',
    repo: 'https://github.com/tonythomas504/RedBadgeClient', // if no repo, the button will not show up
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
  {
    id: nanoid(),
    img: 'pikachu.jpg',
    title: 'Pokemon Api',
    info: 'I created an assortment of Pokemon cards with the Pokemon API utilizing HTML, CSS, and JS',
    info2: 'Flip the card over and see the pokemon evolve!',
    url: 'https://tonythomas504.github.io/apiChallenge_1/',
    repo: 'https://github.com/tonythomas504/apiChallenge_1', // if no repo, the button will not show up
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
