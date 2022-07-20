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
        <div className='service__name'>
        </div>
        
        <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <HiOutlinePuzzle className='about__icon'/>
            <h6> Service Management System </h6>
            <det> Kami menyederhanakan proses penanganan masalah bagi pelanggan </det>
          </article>
          <article className='about__card'>
            <BsFillPersonCheckFill className='about__icon'/>
            <h6> Service point </h6>
            <det> Kami memiliki lokasi layanan di berberapa kota di Indonesia </det>
          </article>
          <article className='about__card'>
            <GrWorkshop className='about__icon'/>
            <h6> Great Support </h6>
            <det> Respon cepat adalah bagian dari komitmen kami untuk memberikan layanan terbaik</det>
          </article>
          <article className='about__card'>
            <HiOutlineLightBulb className='about__icon'/>
            <h6> Focus on Solution </h6>
            <det> Kami selalu berpikir untuk memberikan solusi terbaik dan tepat untuk kebutuhan perusahaan anda </det>
          </article>
          <article className='about__card'>
            <GiTeamUpgrade className='about__icon'/>
            <h6> Have The Best Partners </h6>
            <det> Kami bermitra dengan beberapa perusahaaan besar dan termuka </det>
          </article>
          <article className='about__card'>
            <IoThumbsUpOutline className='about__icon'/>
            <h6> Professional </h6>
            <det> Kami memiliki sumebr daya manusia yang profesional dan berdedikasi tinggi dan bersetifikat </det>
          </article>
        </div>
        </div>





      </article>




    </div>


    </section>
  )
}

export default Services