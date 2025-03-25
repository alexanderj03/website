import React from 'react';
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser'

const Contacts = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [message, setMessage] = React.useState('')
  
  const sendMessage = () => {
    if (name === '' || email === '' || message === '') {
      alert('Please fill out the required fields')
      return
    }

    const serviceId = 'service_kflevbk'
    const publicKey = 'fpCGjtk4Q04I4MTNK'
    const templateId = 'template_cvwngyq'

    const templateValues = {
      from_name: name,
      to_name: 'Alexander',
      phone_number: phone,
      email,
      message
    }

    emailjs.send(serviceId, templateId, templateValues, publicKey)
    .then(function(response) {
      setName('')
      setPhone('')
      setEmail('')
      setMessage('')
    }, function(err) {
      console.log('FAILED...', err);
	});
  }

  return (
    <div className='contact-page' id='contact-page'>
      <h1 className='contact-title'>Contact Me</h1>
      <h2>Get to know me more.</h2>
      <h3>Email: <span>Alexander.jiw@gmail.com</span></h3>
      <h4>...or use the following form</h4>
        <div className='form-container'>
          <div className='left-container'>
            <input value={name} className='form-input' type='text' label='alex' placeholder='Your Name *' onChange={(e) => setName(e.target.value)}/>
            <input value={email} className='form-input' type='text' label='alex' placeholder='Email *' onChange={(e) => setEmail(e.target.value)}/>
            <input value={phone} className='form-input' type='text' label='alex' placeholder='Phone Number' onChange={(e) => setPhone(e.target.value)}/>
          </div>
          <div className='left-container'>
            <textarea value={message} className='form-message' type='text' label='alex' placeholder='Your Message *' onChange={(e) => setMessage(e.target.value)}/>
          </div>
        </div>
        <div className='button-send'>
          <Button variant="contained" sx={btnStyle} fullWidth onClick={() => sendMessage()}>Send</Button>
        </div>
    </div>
  )
}

const btnStyle = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  fontWeight: 'bold',
  fontSize: '100%'
}
export default Contacts