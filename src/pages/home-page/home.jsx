import './home.css';
import { scroller } from 'react-scroll';
import { useState, useRef, useEffect } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { projects } from '../../projects/projects';
import { TabsComponent } from '../../components/tabs-component/Tabs';

export default function Home() {
  const [onScrollClass, setOnScrollClass] = useState('');
  const [onScrollClassProjects, setOnScrollClassProjects] = useState('');
  const aboutRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    const onChange = (entries) => {
      entries.forEach((el) => {
        if (el.isIntersecting && el.target.className.includes('about-me'))
          setOnScrollClass('home-page__onOpacity');
        if (el.isIntersecting && el.target.className.includes('projects'))
          setOnScrollClassProjects('home-page__onOpacity-projects');
      });
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '0px',
    });

    const toObserve = [projectsRef.current, aboutRef.current];
    toObserve.forEach((element) => {
      if (element) observer.observe(element);
    });
    // observer.observe(aboutRef.current)
    // observer.observe(projectsRef.current)
  }, []);

  const handleProjectsButton = () => {
    scroller.scrollTo('home-page__projects', {
      duration: 200,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    scroller.unmount();
  };

  const handleAboutButton = () => {
    scroller.scrollTo('home-page__about-me', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
    scroller.unmount();
  };

  return (
    <div className="home">
      <aside className="email-aside">
        <div className="email-aside__stripe"></div>
        <div className="contact-aside__email">
          <a href="mailto: atzarco37@gmail.com">Send Email</a>
        </div>
      </aside>
      <aside className="contact-aside">
        <div className="contact-aside__icons">
          <a href="https://github.com/tejeoner34/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%A1lvaro-tejedor-zarco/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
        <div className="contact-aside__stripe"></div>
      </aside>
      <section className="home-page__intro home-page__container">
        <div className="home-page__info-container">
          <div>
            <p className="info-container__hello">Welcome, my name is</p>
            <div className="nameWrapper">
              <h2 className="name">
                Alvaro<div className="name__writing-line">|</div>
              </h2>
              <div className="name__bottom-border"></div>
            </div>
            <p>Front-end Developer</p>
          </div>
          <button onClick={handleProjectsButton} className="home-page__projects-button">
            Go to Projects!
          </button>
          <button onClick={handleAboutButton} className="home-page__projects-button">
            About Me
          </button>
        </div>
      </section>
      <section ref={aboutRef} className={`home-page__section home-page__about-me ${onScrollClass}`}>
        <h2 className="home__heading">About me</h2>
        <div className="about-me__container">
          <div className="home-page__profile-img__container">
            <div className="home-page__img-container"></div>
          </div>
          <div className="about-me__info">
            <p>
              Hello! My name is Alvaro, I started my career studying and working in the{' '}
              <span className="home-page__info__p-outstanding">business and digital marketing</span>{' '}
              world. After some years of experience in both, big companies (EA, KIA...) and Start
              Ups, I decided to jump into the{' '}
              <span className="home-page__info__p-outstanding">programming world</span> . For the
              past 3 years I have been working in{' '}
              <span className="home-page__info__p-outstanding">
                NTT Data as a front end developer
              </span>{' '}
              using different technologies.
            </p>
            <p>
              I decided I wanted some new challenges so currently I am residing in Japan (Toykyo)
              studying Japanese in a Japanese language school. While studying Japanese I am also
              focusing on improving my programming skills such as NextJS framework or React Native.
            </p>
            <div>
              <p>Some of the skills or technologies I have been working with are:</p>
              <div className="about-me__tecnologies__container">
                <ul>
                  <li>React.JS</li>
                  <li>React Native</li>
                  <li>Lit element (Web components building a hybrid mobile app)</li>
                  <li>Angular</li>
                  <li>Ionic</li>
                  <li>Express.JS</li>
                </ul>
                <ul>
                  <li>Tailwind</li>
                  <li>Styled-components</li>
                  <li>Material UI</li>
                  <li>Sass</li>
                  <li>Shadcn</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
                <ul>
                  <li>Git Flow</li>
                  <li>Agile methodology</li>
                  <li>TypeScript</li>
                  <li>Redux</li>
                  <li>Hybrid Mobile Apps</li>
                </ul>
              </div>
            </div>
            <p>
              For further information feel free to visit my
              <a
                className="inline-links"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/%C3%A1lvaro-tejedor-zarco/?locale=en_US"
              >
                &nbsp;LinkedIn&nbsp;
              </a>
              profile.
            </p>
          </div>
        </div>
      </section>
      <section
        ref={projectsRef}
        className={`home-page__section home-page__projects ${onScrollClassProjects}`}
      >
        <div className="projects__info">
          <h2 className="home__heading">Projects</h2>
          <p className="projects__p">
            Here you can see a list of projects I have been working on filtered by framework.
            <span className="home-page__info__p-outstanding">
              {' '}
              You can find a tab at the end that contains my most recent projects
            </span>
            .
          </p>
          <p className="projects__p">
            *The projects that have a back-end have been deployed using Heroku, so please take into
            consideration that the first time you enter in the site, it may take a few seconds for
            the server to respond.
          </p>
        </div>
        <div className="projects__container">
          <TabsComponent projects={projects} />
        </div>
      </section>
    </div>
  );
}
