import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram, faGithub , faXTwitter} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div>
      <div className="flex space-x-2 justify-center mb-10 mt-10">
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
        <FontAwesomeIcon icon={faCircle} style={{ color: "#ffcc6c" }} />
      </div>

      <div>
        <div className='font-serif text-3xl m-10 mt-12'>Contact</div>
        <form className='grid grid-flow-row gap-4 justify-center' action="https://formsubmit.co/rushishinde17292@gmail.com" method="POST">
          <input className=' bg-slate-700 rounded-md text-left pl-2 pt-2 pb-2 m-2 text-white' type='text' name='name' placeholder='Name' />
          <input className=' bg-slate-700 rounded-md text-left pl-2 pt-2 pb-2 m-2 text-white' type='tel' name='number' placeholder='Contact Number' />
          <textarea className=' bg-slate-700 rounded-md text-left pl-2 pt-2 pb-2 m-2 text-white' type='text' name='message' placeholder='Message' />
          <input type="hidden" name="_captcha" value="false"/>
          <button className='bg-yellow-300 rounded-full' type='submit'>Send</button>
        </form>
        <div className='text-3xl'>------</div>
        <div className='flex justify-center space-x-6 mt-4 pb-10'>
          <a href="tel:+917620789514" aria-label="Phone">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#ffcc6c" }} />
          </a>
          <a href="mailto:rushishinde17292@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffcc6c" }} />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
          </a>
          <a href="https://github.com/Rocky17292" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} style={{ color: '#ffffff' }} />
          </a>
          <a href="https://www.instagram.com/rushi__r_07/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F' }} />
          </a>
          <a href="https://x.com/rushike15478953" target="_blank" rel="noopener noreferrer" aria-label="X-Twitter">
            <FontAwesomeIcon icon={faXTwitter} style={{ color: '#ffffff' }} />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm mb-4">
        &copy; {new Date().getFullYear()} Rushikesh. All rights reserved.
      </div>
    </div>
  );
}

export default Contact;
