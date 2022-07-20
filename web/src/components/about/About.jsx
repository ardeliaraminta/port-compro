import React from 'react'
import './about.css'
import me from '../../assets/ME.jpg'
import {HiOutlinePuzzle, HiOutlineLightBulb} from 'react-icons/hi'
import {BsFillPersonCheckFill, BsPersonLinesFill} from 'react-icons/bs'
import {GrWorkshop} from 'react-icons/gr'
import {GiTeamUpgrade} from 'react-icons/gi'
import {IoThumbsUpOutline} from 'react-icons/io5'


const About = () => {
  return (
   <section id = 'about'>

    <h5>PT INFORMATIKA TEKNOLOGI BERSAMA</h5>
    <h2> Nilai Perusahaan</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
        <img src = {me} alt = "About Image"/>
        </div>
      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <HiOutlinePuzzle className='about__icon' color='white'/>
            <h6> Integritas </h6>
          </article>
          <article className='about__card'>
            <BsFillPersonCheckFill className='about__icon' color='white'/>
            <h6> Profesional </h6>
          </article>
          <article className='about__card'>
            <BsPersonLinesFill className='about__icon' color='white'/>
            <h6> Bertanggung Jawab </h6>
          </article>
          <article className='about__card'>
            <HiOutlineLightBulb className='about__icon' color='white'/>
            <h6> Inovasi </h6>
          </article>
          <article className='about__card'>
            <GiTeamUpgrade className='about__icon' color='white'/>
            <h6> Kerjasama Tim </h6>
          </article>
          <article className='about__card'>
            <IoThumbsUpOutline className='about__icon' color='white'/>
            <h6>Kepuasan Klien </h6>
          </article>
        </div>
        <p>
        PT. Informatika Teknologi Bersama adalah perusahaan yang bergerak di bidang Integrator. Kami menawarkan solusi terintegrasi lengkap untuk bisnis Anda dalam lingkup konsultan, penyediaan, desain, aplikasi, dan pemeliharaan perangkat dalam sistem teknologi informasi. Produk dan layanan kami dihasilkan dari inovasi yang dikembangkan terus menerus berdasarkan kebutuhan klien dalam setiap proses bisnis. Kami memiliki tim yang andal dan profesional serta memiliki lokasi layanan yang konprehensif di berbagai daerah di Indonesia yang siap memberikan layanan terbaik untuk Anda.
        </p>

        <a href='#contact' className='btn btn-primary'> Our Contact </a>

      </div>
    </div>
   </section>
  )
}

export default About