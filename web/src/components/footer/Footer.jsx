import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsPinMap} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

const Footer = () => {
  return (
     <footer>
      <a href='#' className='footer__logo'> ITB </a>
      <ul className='permalinks'>
        <li><a href='#'> Home </a></li>
        <li><a href='#about'> About </a></li>
        <li><a href='##visimisi'> Visi Misi </a></li>
        <li><a href='#strength'> Strength </a></li>
        <li><a href='#portfolio'> Portfolio </a></li>
        <li><a href='#contact'> Contact </a></li>
      </ul>

      <div className='footer__social'>
        <a href='mailto:infotekmatitb@gmail.com'><MdOutlineEmail/></a>
        <a href=''><BsPinMap/></a>
        <a href='mailto:infotekmatitb@gmail.com'><AiOutlinePhone/></a>
      </div>

      <div className='footer__copyright'>
        <smol>&copy; Informatika Teknologi Bersama. Innovative IT Solution. All rights reserved. </smol>


      </div>



     </footer>
  )
}

export default Footer