import htmlImg from '../assets/projects-img/html-project.PNG';
import tetrisImg from '../assets/projects-img/tetris.PNG';
import kanbanImg from '../assets/projects-img/kanban.PNG';
import japongoImg from '../assets/projects-img/japongo.PNG';
import weatherImg from '../assets/projects-img/weather-app.PNG';
import eccomerceImg from '../assets/projects-img/ecommerce-with-redux.png';
import rickMortyImg from '../assets/projects-img/rick-morty.PNG';
import sushiranImg from '../assets/projects-img/sushiran.png';
import harryPotterImg from '../assets/projects-img/harrypotter.png';
import pokemonImg from '../assets/projects-img/pokemon-arena.png';
import landingGif from '../assets/gif/landing-page.gif';
import tetrisGif from '../assets/gif/tetris.gif';
import kanbanGif from '../assets/gif/kanban.gif';
import rickMortyGif from '../assets/gif/rick-morty.gif';
import japongoGif from '../assets/gif/japongo.gif';
import weatherAppGif from '../assets/gif/weather-app.gif';
import ecommerceGif from '../assets/gif/ecommerce-redux.gif';
import sushiranGif from '../assets/gif/sushiran.gif';
import harryPotterGif from '../assets/gif/harrypotter.gif';
import pokemonGif from '../assets/gif/pokemon-arena.gif';
import japanaryImg from '../assets/projects-img/japanary.JPG';
const japanaryGif =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1740898914/japanary_gmjs74.gif';
const pocketMonsterArenaNextImg =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1740897590/pocket-monster-arena-next_t4yzku.png';
const pocketMonsterArenaNextGif =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1740897589/pocket-monster-arena-next_ijmt3a.gif';

const expenseTrackerGif =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1745456198/expense-tracker-opt_z9wrjh.gif';
const expenseTrackerImg =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1745452602/portfolio/expense-tracker_n0zs4o.png';

const portfolioImg =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1745246139/portfolio/portfolio-blog_hupakj.png';

const portfolioGif =
  'https://res.cloudinary.com/dejzrr9lt/image/upload/v1745460212/porfolio-blog_bzm6jt.gif';

export const projects = {
  react: [
    {
      name: 'Japanary',
      tools: 'React / TS / Shadcn / Firebase / ExpressJS / OpenAi',
      img: japanaryImg,
      gif: japanaryGif,
      description: 'Dictionary and flashcard website for Japanese language learning',
      url: 'https://japanary.netlify.app/dictionary/',
      framework: 'react',
    },
    {
      name: 'Rick & Morty Browser',
      tools: 'HTML / CSS / React / JS',
      img: rickMortyImg,
      gif: rickMortyGif,
      description:
        'First project using React. This is a characters browser done by fetching from external API',
      url: 'https://tejeoner34.github.io/rick-morty-browser-reactjs/',
      framework: 'react',
    },
    {
      name: 'Kanban',
      tools: 'HTML / CSS / JS / React',
      img: kanbanImg,
      gif: kanbanGif,
      description:
        'Kanban board done in React. There is aldo a drag and drop funcitonality added. this is only front-end so all the inputs added are saved in local storage',
      url: 'https://tejeoner34.github.io/practica-3-new/',
      framework: 'react',
    },
    {
      name: 'Weather App',
      tools: 'HTML / CSS / MUI / React / JS / NodeJS / ExpressJS',
      img: weatherImg,
      gif: weatherAppGif,
      description:
        'This weather app was done in combination with UI/UX designers. The main theme was retro gaming.',
      url: 'https://tejeoner34.github.io/weather-page/',
      framework: 'react',
    },
    {
      name: 'Japongo Project',
      tools: 'HTML / CSS / MUI / React / JS / NodeJS / ExpressJS / MongoDB',
      img: japongoImg,
      gif: japongoGif,
      description:
        'My favourite project so far. Full end to end application using MERN stack. It consists of a business website which allows to search for schools in Tokyo and has a private area with online courses',
      url: 'https://tejeoner34.github.io/japongo/',
      framework: 'react',
    },
    {
      name: 'Ecommerce Redux',
      tools: 'Styled-components / React / Redux / NodeJS / ExpressJS / MongoDB',
      img: eccomerceImg,
      gif: ecommerceGif,
      description:
        'The main objective of this project was to learn and practice React Redux and Styled-components.',
      url: 'https://tejeoner34.github.io/ecommerce-redux/',
      framework: 'react',
    },
    {
      name: 'Restaurant Reservations',
      tools: 'Sass / Bootstrap / TS / React / NodeJS / ExpressJS / MongoDB',
      img: sushiranImg,
      gif: sushiranGif,
      description:
        'The main objective of this project was to learn and practice React with TS, Bootstrap and Sass. You will be able to choose an specific date and time and you will get a confirmation email.',
      url: 'https://tejeoner34.github.io/front-sushiran/',
      framework: 'react',
    },
  ],
  angular: [
    {
      name: 'Angular & Harry Potter',
      tools: 'TS / Angular',
      img: harryPotterImg,
      gif: harryPotterGif,
      description:
        'Project focused on learning Angular by creating a characters browser with HTTP requests, infinite scroll...etc',
      url: 'https://tejeoner34.github.io/angular-first-project/',
      framework: 'angular',
    },
    {
      name: 'Pocket Monster Arena',
      tools: 'TS / Angular / MongoDB / ExpressJS',
      img: pokemonImg,
      gif: pokemonGif,
      description: 'Creation of Pokemon arena game with both player vs computer and online mode',
      url: 'https://startling-cupcake-ce0148.netlify.app/home',
      framework: 'angular',
    },
  ],
  nextjs: [
    {
      name: 'Pocket Monster Arena',
      tools: 'NextJS / Tailwind / SocketIO / ExpressJS',
      img: pocketMonsterArenaNextImg,
      gif: pocketMonsterArenaNextGif,
      description: 'Creation of Pokemon arena game with both player vs computer and online mode',
      url: 'https://pocket-monster-arena.vercel.app/en',
      framework: 'nextjs',
    },
    {
      name: 'Expense tracker',
      tools:
        'NextJS / Tailwind / PostgreSQL with Prisma ORM / NextAuth / Recharts / React Query / Jest',
      img: expenseTrackerImg,
      gif: expenseTrackerGif,
      description:
        'A modern, full-stack expense tracking application built with Next.js, featuring real-time expense management, currency conversion, and comprehensive data visualization.',
      url: 'https://expense-tracker-9cb8.vercel.app/',
      framework: 'nextjs',
    },
    {
      name: 'Portfolio Blog',
      tools: 'NextJS / Tailwind / SSG / Headless Wordpress',
      img: portfolioImg,
      gif: portfolioGif,
      description: 'Creation of a portfolio blog using NextJS and Headless Wordpress',
      url: 'https://portfolio-blog-coral.vercel.app/blog',
      framework: 'nextjs',
    },
  ],
  js: [
    {
      name: 'Pure HTML and CSS',
      tools: 'HTML / CSS',
      img: htmlImg,
      gif: landingGif,
      description:
        'First project using just HTML and CSS to create a landing page, form and some CSS to create a chess board',
      url: 'https://tejeoner34.github.io/practica-1/',
      framework: 'js',
    },
    {
      name: 'Tetris JS',
      tools: 'HTML / CSS / JS',
      img: tetrisImg,
      gif: tetrisGif,
      description:
        'In this project I used Vanilla JS to create a tetris game with an old-style look',
      url: 'https://tejeoner34.github.io/classic-tetris-with-JS/',
      framework: 'js',
    },
  ],
  recent: [
    {
      name: 'Japanary',
      tools: 'React / TS / Shadcn / Firebase / ExpressJS / OpenAi / Cloudinary',
      img: japanaryImg,
      gif: japanaryGif,
      description: 'Dictionary and flashcard website for Japanese language learning',
      url: 'https://japanary.netlify.app/dictionary/',
      framework: 'react',
    },
    {
      name: 'Pocket Monster Arena',
      tools: 'NextJS / Tailwind / SocketIO / ExpressJS',
      img: pocketMonsterArenaNextImg,
      gif: pocketMonsterArenaNextGif,
      description: 'Creation of Pokemon arena game with both player vs computer and online mode',
      url: 'https://pocket-monster-arena.vercel.app/en',
      framework: 'nextjs',
    },
  ],
};
