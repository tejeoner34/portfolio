import './header.css';
import Box from '@mui/material/Box';
import { useState, Fragment, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {scroller} from 'react-scroll';


export default function Header() {




    const [onScrollClass, setOnScrollClass] = useState('header');
    const [prevPosition, setPrevPosition] = useState(0);
    
    
    useEffect(()=>{
        const onScrollHeader = () =>{
            const currentScrollPosition = window.pageYOffset;
            if(currentScrollPosition>prevPosition){
                setOnScrollClass('headerOut')
            }
            if(currentScrollPosition<prevPosition){
                setOnScrollClass('header')
            }
            setPrevPosition(currentScrollPosition);
        };
        window.addEventListener('scroll', onScrollHeader);
        return ()=> window.removeEventListener('scroll', onScrollHeader);
    }, [prevPosition, onScrollClass])
    


    const [isOpen, setOpen] = useState(false)
    const handleClick = (event) => {
        if(isOpen === false){
            document.body.style.overflow = "hidden";
            document.querySelector('.header__mobile').style.marginRight = '15px'

        }
        if(isOpen === true){
            document.body.style.overflow = "visible";
            document.querySelector('.header__mobile').style.marginRight = '0'

        }
        setOpen(!isOpen)
    };
    const handleClose = () => {
        setOpen(false)
        document.body.style.overflow = "visible"
        document.querySelector('.header__mobile').style.marginRight = '0'


    };

    const handleScrollProjects = ()=>{
        scroller.scrollTo("home-page__projects", {
            duration: 200,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        handleClose();
        scroller.unmount();

    }

    const handleScrollAbout = ()=>{
        scroller.scrollTo("home-page__about-me", {
            duration: 300,
            delay: 0,
            smooth: "easeInOutQuart",
          });
          
        handleClose();
        scroller.unmount();
    }

    const handleScrollHome = ()=>{
        scroller.scrollTo("home", {
            duration: 800,
            delay: 0,
            smooth: "easeInOutQuart",
          });
        handleClose();
        scroller.unmount();

    }

    return (
        <Fragment>
            <header className={onScrollClass}>

                <nav className='header__nav'>
                    <ul className='header__ul'>
                        <li onClick={handleScrollHome} className='header__item'>Home</li>
                        <li onClick={handleScrollProjects} className='header__item'>Projects</li>
                        <li onClick={handleScrollAbout} className='header__item'>About</li>
                    </ul>

                    <Box onClose={handleClose} className='header__mobile' display={{ xs: 'flex', md: 'none' }} sx={{ alignItems: 'center', textAlign: 'center' }}>

                       
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