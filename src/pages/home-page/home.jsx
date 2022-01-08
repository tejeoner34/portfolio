import image from '../../assets/img/foto-cv.jpg';
import './home.css';
import { scroller } from 'react-scroll';
import ProjectCard from '../../components/project-card/project-card';
import htmlImg from '../../assets/projects-img/html-project.PNG';
import tetrisImg from '../../assets/projects-img/tetris.PNG';
import kanbanImg from '../../assets/projects-img/kanban.PNG';
import japongoImg from '../../assets/projects-img/japongo.PNG';
import weatherImg from '../../assets/projects-img/weather-app.PNG';
import rickMortyImg from '../../assets/projects-img/rick-morty.PNG';
import landingGif from '../../assets/gif/landing-page.gif';
import tetrisGif from '../../assets/gif/tetris.gif';
import kanbanGif from '../../assets/gif/kanban.gif';
import rickMortyGif from '../../assets/gif/rick-morty.gif';
import japongoGif from '../../assets/gif/japongo.gif';
import weatherAppGif from '../../assets/gif/weather-app.gif';
import { useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export default function Home() {

    const projects = [
        {
            name: "Pure HTML and CSS",
            tools: "HTML / CSS",
            img: htmlImg,
            gif: landingGif,
            description: "First project using just HTML and CSS to create a landing page, form and some CSS to create a chess board",
            url: "https://tejeoner34.github.io/practica-1/"
        },
        {
            name: "Tetris JS",
            tools: "HTML / CSS / JS",
            img: tetrisImg,
            gif: tetrisGif,
            description: "In this project I used Vanilla JS to create a tetris game with an old-style look",
            url: "https://tejeoner34.github.io/classic-tetris-with-JS/"
        },
        {
            name: "Rick & Morty Browser",
            tools: "HTML / CSS / React / JS",
            img: rickMortyImg,
            gif: rickMortyGif,
            description: "First project using React. This is a characters browser done by fetching from external API",
            url: "https://tejeoner34.github.io/rick-morty-browser-reactjs/"
        },
        {
            name: "Kanban",
            tools: "HTML / CSS / JS / React",
            img: kanbanImg,
            gif: kanbanGif,
            description: "Kanban board done in React. There is aldo a drag and drop funcitonality added. this is only front-end so all the inputs added are saved in local storage",
            url: "https://tejeoner34.github.io/practica-3-new/"
        },
        {
            name: "Weather App",
            tools: "HTML / CSS / MUI / React / JS / NodeJS / ExpressJS",
            img: weatherImg,
            gif: weatherAppGif,
            description: "This weather app was done in combination with UI/UX designers. The main theme was retro gaming",
            url: "https://tejeoner34.github.io/weather-page/"

        },
        {
            name: "Japongo Project",
            tools: "HTML / CSS / MUI / React / JS / NodeJS / ExpressJS / MongoDB",
            img: japongoImg,
            gif: japongoGif,
            description: "My favourite project so far. Full end to end application using MERN stack. It consists of a business website which allows to search for schools in Tokyo and has a private area with online courses",
            url: "https://tejeoner34.github.io/japongo/"
        },
    ]

    const [nameClass, setNameClass] = useState('name')


    const intervalForName = () => {
        setTimeout(() => {
            setNameClass('name-with-opacity')
        }, 1500);
    }

    intervalForName()

    const handleProjectsButton = () => {
        scroller.scrollTo("home-page__projects", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    };

    const handleAboutButton = () => {
        scroller.scrollTo("home-page__about-me", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
        });
    }



    const imgContainerStyle = {
        backgroundImage: `url("${image}")`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        position: 'absolute',
        top: '-10px',
        left: '-10px',
        borderRadius: '2px'
    }


    return (
        <div className="home">
            <aside className='email-aside'>
            <div className='email-aside__stripe'></div>
                <div className='contact-aside__email'>
                    <a href = "mailto: atzarco37@gmail.com">Send Email</a>
                </div>
                
            </aside>
            <aside className='contact-aside'>
                <div className='contact-aside__icons'>
                    <a href="https://github.com/tejeoner34/" target="_blank" rel="noopener noreferrer" ><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/%C3%A1lvaro-tejedor-zarco/?locale=en_US" target="_blank" rel="noopener noreferrer"><LinkedInIcon></LinkedInIcon></a>
                </div>
                <div className='contact-aside__stripe'></div>
            </aside>
            <section className='home-page__container'>
                <div className="home-page__info-container">
                    <div>
                        <p className='info-container__hello'>Hi, my name is</p>
                        <div className='nameWrapper'>
                            <h2 className={nameClass}>Álvaro Tejedor<div className='name__writing-line'>|</div></h2>
                            <div className='name__bottom-border'></div>
                        </div>
                        <p>Junior Full Stack Developer</p>
                    </div>
                    <button onClick={handleProjectsButton} className='home-page__projects-button' >Go to Projects!</button>
                    <button onClick={handleAboutButton} className='home-page__projects-button' >About Me</button>
                </div>

            </section>
            <section className='home-page__about-me'>
                <h2 className='home__heading'>About me</h2>
                <div className='about-me__container'>
                    <div className='home-page__profile-img__container'>
                        <div style={imgContainerStyle} className="home-page__img-container">
                        </div>
                    </div>
                    <div className='about-me__info'>

                        <p>
                            Hello! My name is Alvaro, I started my career studying and working in the <span className='home-page__info__p-outstanding'>business and marketing</span> world.
                            After some years of experience in both big companies (EA, KIA...) and Start Ups, I have decided to jump into the programming world.
                        </p>
                        <p>
                            To accomplish this I have both been studying on my own as well as enrolling into a <span className='home-page__info__p-outstanding'>Full Stack programming Bootcamp</span>.
                            Until this moment I have been focusing on <span className='home-page__info__p-outstanding'>MERN stack</span>.
                        </p>
                        <p>
                            Some other technologies I am currently studying are <span className='home-page__info__p-outstanding'>TypeScript and Redux</span>.
                        </p>
                    </div>
                    <div className='about-me__img-container'>
                        <img src="https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png" alt="" />
                    </div>
                </div>

            </section>
            <section className='home-page__projects'>
                <div className='projects__info'> 
                    <h2 className='home__heading'>Projects</h2>
                    <p className='projects__p'>Here you can see a list of projects I have been working on.
                     They are listed following <span className='home-page__info__p-outstanding'>my learning path</span>.
                      Going from pure HTML and CSS (first project) to a <span className='home-page__info__p-outstanding'>full end to end WebSite (last project, "Japongo Project")</span></p>
                    <p className='projects__p'>*The projects that have a back-end have been deployed using Heroku, so please take into consideration that the first time you enter in the site, it may take a few seconds for the server to respond.</p>
                </div>
                <div className='projects__container'>

                    {projects.map((e, i) => <ProjectCard data={e} key={i}></ProjectCard>)}

                </div>

            </section>

        </div>
    )
}