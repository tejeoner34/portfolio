import './header.css';
import Box from '@mui/material/Box';
import { useState, Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {scroller} from 'react-scroll';


export default function Header() {



    const [isOpen, setOpen] = useState(false)
    const handleClick = (event) => {
        setOpen(!isOpen)
    };
    const handleClose = () => {
        setOpen(false)
    };

    const handleScrollProjects = ()=>{
        scroller.scrollTo("home-page__projects", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        handleClose();
    }

    const handleScrollAbout = ()=>{
        scroller.scrollTo("home-page__about-me", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        handleClose();
    }

    const handleScrollHome = ()=>{
        scroller.scrollTo("home", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        handleClose();
    }

    return (
        <Fragment>
            <header className="header">

                <nav className='header__nav'>
                    <ul className='header__ul'>
                        <li onClick={handleScrollHome} className='header__item'>Home</li>
                        <li onClick={handleScrollProjects} className='header__item'>Projects</li>
                        <li onClick={handleScrollAbout} className='header__item'>About</li>
                    </ul>

                    <Box onClose={handleClose} className='header__mobile' display={{ xs: 'flex', sm: 'none' }} sx={{ alignItems: 'center', textAlign: 'center' }}>

                       
                            <IconButton
                                onClick={handleClick}
                                
                                size="small"
                                sx={{ ml: 2 }}

                            >
                                {!isOpen ?
                                    <MenuIcon sx={{ width: 32, height: 32, color: '#ffffff' }}></MenuIcon>
                                    :
                                    <CloseIcon sx={{ width: 32, height: 32, color: '#ffffff' }}></CloseIcon>
                                }
                            </IconButton>
        
                    </Box>

                </nav>


            </header>

            <aside className={isOpen ? 'aside' : 'aside-none'}>
                <div onClick={handleClose} className='aside__close'></div>
                <nav className='aside__nav'>
                    <ul className='aside__ul'>
                        <li onClick={handleScrollHome} className='aside__item'>Home</li>
                        <li onClick={handleScrollProjects} className='aside__item'>Projects</li>
                        <li onClick={handleScrollAbout} className='aside__item'>About</li>
                    </ul>
                </nav>

            </aside>
        </Fragment>
    )
}