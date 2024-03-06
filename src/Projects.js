import React from 'react';
import Dialog from '@mui/material/Dialog';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Projects = () => {
  const [openTODO, setOpenTODO] = React.useState(false);
  const [openWEB, setOpenWEB] = React.useState(false);
  const [openAIR, setOpenAIR] = React.useState(false);

  const handleClose = () => {
    setOpenTODO(false);
    setOpenWEB(false)
    setOpenAIR(false)
  };
  return (
    <div className='project-page' id='project-page'>
      <div className='project-title'>
        <p className='project-text'>PORTFOLIO</p>
        <h1 className='personal-projects'>Personal Projects</h1>
        <h2 className='personal-projects'>Check out some of my creations.</h2>
      </div>
      <div className='project-container'>
        <div className='projects todo' onClick={() => setOpenTODO(true)}>
          <div className='content'>
            Todo list website
          </div>
        </div>
        <div className='projects website' onClick={() => setOpenWEB(true)}>
          <div className='content'>
            Personal website
          </div>
        </div>
        <div className='projects frontend' onClick={() => setOpenAIR(true)}>
          <div className='content'>
            Airbnb website clone for practice
          </div>
        </div>
      </div>
      <React.Fragment>
        <Dialog
          open={openWEB}
          onClose={handleClose}
        >
          <div className='popup'>
            <img className='popup-img-web' alt=''/>
            <div className='info-container'>
              <h1>Personal Website</h1>
              <p>Created own personal website for showing resume using react and javascript</p>
            </div>
            <div className='langauge-container'>
              <LocalOfferIcon/>
              <p className='language'>JAVASCRIPT, CSS, HTML, REACT, WEBDESIGN </p>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
      <React.Fragment>
        <Dialog
          open={openTODO}
          onClose={handleClose}
        >
          <div className='popup'>
            <img className='popup-img-todo' alt=''/>
            <div className='info-container'>
              <h1>TO-DO Website</h1>
              <p>Created own TO-DO app using firebase database to store information. I have also implemented a darkmode toggle feature using css</p>
            </div>
            <div className='langauge-container'>
              <LocalOfferIcon/>
              <p className='language'>JAVASCRIPT, CSS, HTML, REACT, WEBDESIGN</p>
            </div>
            <div className='details-container'>
              <a href="https://github.com/alexanderj03/todo-list" style={{ textDecoration: 'none', color: 'black'}}>Details</a>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
      <React.Fragment>
        <Dialog
          open={openAIR}
          onClose={handleClose}
        >
          <div className='popup'>
            <img className='popup-img-airbrb' alt=''/>
            <div className='info-container'>
              <h1>AirBRB Website</h1>
              <p>
                Created website similar to airbrb to learn how the backend and frontend of a website interact.
                This project allowed me to develop skills using REACT, HTML and CSS by creating features similar to the airbnb website for learning purposes

              </p>
            </div>
            <div className='langauge-container'>
              <LocalOfferIcon/>
              <p className='language'>JAVASCRIPT, CSS, HTML, REACT, WEBDESIGN, HTTP</p>
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    </div>
  )
}

export default Projects