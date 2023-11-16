import { nanoid } from 'nanoid';


// HEAD DATA
export const headData = {
  title: 'Tony Thomas | Web Analytics Engineer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Tony Thomas',
  name: '| Web Analytics Engineer',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `Hi I'm Tony Thomas. I'm an experienced front-end developer who specializes in web anlaytics and building responsive web applications. I have extensive knowledge in A/B testing, Google Analytics, data visualization, cross funcitonally leading teams, designing with the user experience in mind, and crafting accesible applications.`,
  paragraphTwo: `Fueled by high energy, endless creativity and need to innovate. I'm easily inspired and love to follow my fascinations. I'm passionate, love to win, expressive, and love to work in a team environment.`,
  paragraphThree: `I'm married to my beautiful wife Sydney, and we live in Indinapolis with our labradoodle Dexter. In my free time I love to read, workout, watch movies, play board games, and watch sports.`,
 // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
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
      url: 'https://www.linkedin.com/in/tony-thomas21/',
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
