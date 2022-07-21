import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsPinMap} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
      <h5> Get in touch </h5>
      <h2> Kontak Kami </h2>


      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail  className='contact__option-icon'/>
            <h6> Email </h6>
            <h5> infotekmatitb@gmail.com </h5>
            <a href='mailto:infotekmatitb@gmail.com'> Kirim surel </a>
          </article>
          <article className='contact__option'>
          <BsPinMap  className='contact__option-icon'/>
            <h6> Lokasi </h6>
            <h5> Jl. Cijawura Girang VI No. 20 Sekejati, Kec. Buahbatu Kota Bandung 40286 </h5>
            </article>
          <article className='contact__option'>
           <AiOutlinePhone  className='contact__option-icon'/>
            <h6> Telfon </h6>
            <h5>(+62)8212827777</h5>
            <a href="sms:08212827777"> Kirim pesan </a>
            </article>
        </div>
        <form action="">
          <input type="text" name= 'name' placeholder="Nama Lengkap" required/>
          <input type="email" name= 'name' placeholder="Email" required/>
          <textarea name="message" rows="7" placeholder="Pesan" required/><textarea/>
          <button type='submit' className='btn btn-primary'> Kirim </button>
        </form>
      </div>
    </section>
  )
}

export default Contact