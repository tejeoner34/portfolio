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
        backgroundImage: `url("${props.data.img}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        height: '200px',
        width: '250px',
        top: '-10px',
        left: '-10px',
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
                <div style={gifContainer}>

                </div>
                <div>

                </div>
            </Dialog>
        </div>
    )
}