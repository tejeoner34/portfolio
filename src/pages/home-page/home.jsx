import { useHistory } from 'react-router-dom';
import image from '../../assets/img/foto-cv.jpg';
import './home.css';
import { scroller } from 'react-scroll';
import ProjectCard from '../../components/project-card/project-card';
import htmlImg from '../../assets/projects-img/html-project.PNG';
import tetrisImg from '../../assets/projects-img/tetris.PNG';
import kanbanImg from '../../assets/projects-img/kanban.PNG';
import japongoImg from '../../assets/projects-img/japongo.PNG';
import rickMortyImg from '../../assets/projects-img/rick-morty.PNG';

export default function Home() {

    const projects = [
        {
            name: "Pure HTML and CSS",
            tools: "HTML / CSS",
            img: htmlImg
        },
        {
            name: "Tetris JS",
            tools: "HTML / CSS / JS",
            img: tetrisImg
        },
        {
            name: "Kanban",
            tools: "HTML / CSS / JS / React",
            img: kanbanImg
        },
        {
            name: "Weather App",
            tools: "HTML / CSS / MUI / React / JS"
        },
        {
            name: "Japongo Project",
            tools: "HTML / CSS / MUI / React / JS / NodeJS / MongoDB",
            img: japongoImg
        },
        {
            name: "Rick & Morty Browser",
            tools: "HTML / CSS / React / JS",
            img: rickMortyImg
        },

    ]

    const handleProjectsButton = ()=>{
        scroller.scrollTo("home-page__projects", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
    }

    const history = useHistory()

    const handleClick = (e) => {
        history.push('/projects')
    }

    const imgContainerStyle = {
        backgroundImage: `url("${image}")`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        height: '200px',
        width: '200px',
        position: 'absolute',
        top:'-10px',
        left:'-10px',
        borderRadius: '2px'
    }


    return (
        <div className="home">
            <section className='home-page__container'>
                <div className="home-page__info-container">
                    <div>
                        <p className='info-container__hello'>Hi, my name is</p>
                        <h2>Álvaro Tejedor</h2>
                        <p>Junior Full Stack Developer</p>
                    </div>
                    <button onClick={handleProjectsButton} className='home-page__projects-button' >Projects</button>
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
                        Hello! My name is Alvaro, I started my career studying and working in the business and marketing world.
                        After some years of experience in both big companies (EA, KIA...) and Start Ups, I have decided to jump into the programming world.
                    </p>
                    <p>
                        To accomplish this I have both been studying on my own as well as enrolling into a Full Stack programming Bootcamp.
                        Until this moment I have been focusing on MERN stack.
                    </p>
                </div>
                <div className='about-me__img-container'>
                    <img src="https://static.platzi.com/media/blog/mern-stack-284eedb6-ee6b-4441-b181-5064a453a15a.png" alt="" />
                </div>
                </div>

            </section>
            <section className='home-page__projects'>
                <div>
                    <h2 className='home__heading'>Projects</h2>
                    <p>Here you can see a list of projects I have worked on. They are listed following my learning path. Going from pure HTML and CSS to a full end to end WebSite</p>
                </div>
                <div className='projects__container'>

                    {projects.map((e, i)=> <ProjectCard data={e} key={i}></ProjectCard>)}
                    
                </div>

            </section>

        </div>
    )
}