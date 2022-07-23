import React from 'react'
import './services.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {HiOutlinePuzzle, HiOutlineLightBulb} from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {GrWorkshop} from 'react-icons/gr'
import {GiTeamUpgrade} from 'react-icons/gi'
import {IoThumbsUpOutline} from 'react-icons/io5'

const Services = () => {
  return (
    <section id='services'>
    <h5> Our Strength </h5>
    <h2> Kekuatan Kami </h2>


    <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3> Service Management System and Have The Best Partners  </h3>

          <ul className='service__list'>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p> Kami menyederhanakan proses penanganan masalah bagi pelanggan </p>
            </li>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p> Kami bermitra dengan beberapa perusahaaan besar dan termuka  </p>
            </li>
          </ul>
          </div>
      </article>
      <article className='service'>
        <div className='service__head'>
          <h3> Service point and Great Support </h3>
          <ul className='service__list'>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p> Kami memiliki lokasi layanan di berberapa kota di Indonesia </p>
            </li>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p>  Respon cepat adalah bagian dari komitmen kami untuk memberikan layanan terbaik</p>
            </li>
          </ul>
          </div>
      </article>
      <article className='service'>
        <div className='service__head'>
          <h3> Fokus kepada Solusi dan Profesional </h3>
          <ul className='service__list'>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p>Kami selalu berpikir untuk memberikan solusi terbaik dan tepat untuk kebutuhan perusahaan anda </p>
            </li>
            <li> 
            <HiOutlinePuzzle className='service__list-icon'/>
            <p>  Kami memiliki sumber daya manusia yang profesional dan berdedikasi tinggi dan bersertifikat </p>
            </li>
          </ul>
          </div>
      </article>

    </div>
    </section>
  )
}

export default Services