import './project-card.css';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';

export default function ProjectCard(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const imgContainerStyle = {
        backgroundImage: `url("${props.data.img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '200px',
        width: '250px',
        top: '-10px',
        left: '-10px',
        borderRadius: '2px'
    }

    const gifContainer = {
        backgroundImage: `url("${props.data.gif}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '196px',
        width: '70%',
        minWidth: '400px',
        borderRadius: '2px'
    }

    return (
        <div className='project__card'>
            <div className='card__img' style={imgContainerStyle}>

            </div>
            <div className='card__back'>
                <div>
                    <h3>{props.data.name}</h3>
                    <p>{props.data.tools}</p>
                </div>
                <button onClick={handleClickOpen}>View Details</button>
                <button>Visit</button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <div className='dialog__container'>
                <div className='dialog__img-container'>
                    <img src={props.data.gif} alt="porject gif" />
                </div>
                <div className='dialog__info'>
                    <h3 style={{color:'rgb(101 251 154)', fontSize: '1.5rem'}}>{'<'} {props.data.name} {'/>'}</h3>
                    <h4 style={{opacity:'.7'}}>{props.data.tools}</h4>
                    <p>{props.data.description}</p>
                    <button className='home-page__projects-button'>Visit the site</button>

                </div>
                </div>
            </Dialog>
        </div>
    )
}