import './nav.scss';
import React, { useState } from 'react';
import {Menu} from '@material-ui/icons';
import pdf from "../../Kyle_Ruban_Resume.pdf";

function Nav() {

  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className='navbar'>
      <div className='links' id={showLinks ? 'hidden': ''}>
        <a href='#home' onClick={() => setShowLinks(!showLinks)}>Home</a>
        <a href='#about' onClick={() => setShowLinks(!showLinks)}>About</a>
        <a href='#skills' onClick={() => setShowLinks(!showLinks)}>Skills</a>
        <a href='#projects' onClick={() => setShowLinks(!showLinks)}>Projects</a>
        <a href='#contact' onClick={() => setShowLinks(!showLinks)}>Contact</a>
        <a href={pdf} target='_blank' rel='noopener noreferrer' onClick={() => setShowLinks(!showLinks)}>Resume</a>
      </div>
      <button onClick={() => setShowLinks(!showLinks)} ><Menu className="icon" /></button>
    </div>
  )
}

export default Nav;
