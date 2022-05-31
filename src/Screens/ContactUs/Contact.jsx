import React from 'react'
import './Contact.css'
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Roll from 'react-reveal/Roll';

const Contact = () => {
  return (
    <div>
      <div class="contain">

<div class="wrapper">

  <div class="form">
    <h4>GET IN TOUCH</h4>
    <h2 class="form-headline">Send us a message</h2>
    <form id="submit-form" action="">
      <p>
        <input id="name" class="form-input" type="text" placeholder="Your Name*"/>
        <small class="name-error"></small>
      </p>
      <p>
        <input id="email" class="form-input" type="email" placeholder="Your Email*"/>
        <small class="name-error"></small>
      </p>
      <p class="full-width">
        <input id="company-name" class="form-input" type="text" placeholder="Company Name*" required/>
        <small></small>
      </p>
      <p class="full-width">
        <textarea  minlength="20" id="message" cols="30" rows="7" placeholder="Your Message*" required></textarea>
        <small></small>
      </p>
      <p class="full-width">
        <input type="checkbox" id="checkbox" name="checkbox" checked/> Yes, I would like to receive communications by call / email about Company's services.
      </p>
      <p class="full-width">
        <input type="submit" class="submit-btn" value="Submit" onclick="checkValidations()"/>
        <button class="reset-btn" onclick="reset()">Reset</button>
      </p>
    </form>
  </div>

  <div class="contacts contact-wrapper">

    <ul>
      <li>We've driven online revenues of over <span class="highlight-text-grey">$2
          billion</span> for our clients. Ready to know
        how we can help you?</li>
      <span class="hightlight-contact-info">
        <li class="email-info"><i class="fa fa-envelope" aria-hidden="true"></i> info@demo.com</li>
        <li><i class="fa fa-phone" aria-hidden="true"></i> <span class="highlight-text">+91 11 1111 2900</span></li>
      </span>
    </ul>
  </div>
</div>
</div>
      
        {/* <h3 className='contact_heading'>CONTACT US</h3>
    <div className=" contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12" id="col0">
            <a href="http://facebook.com"><FacebookSharpIcon  className='socialIcon'/> </a>
            <a href="http://twitter.com"><TwitterIcon className='socialIcon'/> </a>
            <a href="http://google.com"><GoogleIcon className='socialIcon'/></a>
            <a href="http://youtube.com"><YouTubeIcon className='socialIcon'/> </a>
          </div>
         <Roll right>
          <div className="col-lg-4 col-md-6 col-sm-12" id="col1">
            <i className="fa fa-map-marker"></i><h6>Address</h6><p>your address here</p>
            <i className="fa fa-phone"></i><h6>Lets Talk</h6><p>+9231.......</p>
            <i className="fa fa-briefcase"></i><h6>General Support</h6><p><a href="mailto:reebasiddiqui456@gmail.com">
                    reebasiddiqui456@gmail.com
                </a></p>       
          </div>
          </Roll> 
          <div className="col-lg-9 col-md-5 col-sm-12" id="col2" style={{textAlign: "center",display:'block'}}>
            <h4>Send Us A Message</h4>
            <form>
            <TextField
            fullWidth
        id="input-with-icon-textfield"
        label="Email"
        className='textField'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        />
            <TextField
            fullWidth
        id="input-with-icon-textfield"
        label="Your Name"
        className='textField'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
        />
            <TextField
            fullWidth
        id="input-with-icon-textfield"
        label="Phone Number"
        className='textField'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
          <LocalPhoneIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
        />
             <TextareaAutosize
             fullWidth
      aria-label="empty textarea"
      placeholder="Message"
      style={{ width: '100%', height:150}}
    />
             </form>
          </div>
        </div>
        
      </div>
    </div>     */}
    </div>
  )
}

export default Contact