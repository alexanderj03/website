import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';

const Resume = () => {
  return (
    <div className='resume-page' id='resume-page'>
      <h1 className='about-me'>Resume</h1>
      <p className='sub-title'>Here are my work experiences and education.</p>
      <h2 className='about-me'>Work Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h2 className='job-company'><u>Optus</u></h2>
          <h4 className='job-length'>April 2024 - PRESENT</h4>
          <h3 className='job-title'>Sale Associate</h3>
          <p className='description'>
            As an Optus Sales Associate, I am responsible for promoting and selling Optus products and services. I am able to create
            a relationship with the customer by providing tailored solutions and delivering excellent customer service. As a result, 
            I have developed strong communication and teamwork skills, allowing me to effectively collaborate with colleagues to 
            engage with customers in a professional manner. 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h2 className='job-company'><u>Elevate Tuition</u></h2>
          <h4 className='job-length'>JAN 2022 - DEC 2024</h4>
          <h3 className='job-title'>Team Leader</h3>
          <p className='description'>
            Team leader at Elevate Tuition where my role is to delegate tasks such as class timetables and programs.
            As a result I have developed critical thinking skills based on company goals.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h2 className='job-company'><u>Woolworths Group</u></h2>
          <h4 className='job-length'>FEB 2022 - AUG 2023</h4>
          <h3 className='job-title'>Team member</h3>
          <p className='description'>
            This role allowed me to develop strong adaptability skills by working efficiently in a fast-paced
            and changing environment. As a result I have developed strong customer service and communication skills by working 
            in a large team and learning different store operations.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h2 className='job-company'><u>Australian Electorial Commission</u></h2>
          <h4 className='job-length'>JAN 2022 - DEC 2023</h4>
          <h3 className='job-title'>Team Member</h3>
          <p className='description'>
            Worked part of a large team by organising voting information allowing for counting votes to go smoothly. In addition
            this role has allowed me to develop strong communication and team working skills in order to work together efficiently.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <h2 className='about-me'>Education</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h2 className='job-company'><u>UNSW</u></h2>
          <h4 className='job-length'>2022 - PRESENT</h4>
          <h3 className='job-title'>Bachelor of Computer Science</h3>
          <p className='description'>
            Currently studying Bachelor of Computer Science with primary interest in front-end development and artificial intelligence.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h2 className='job-company'><u>Higher School Certificate</u></h2>
          <h4 className='job-length'>2016 - 2021</h4>
          <p className='description'>
            Successfully completed the Higher School Certificate (HSC) at Canley Vale High School.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Resume