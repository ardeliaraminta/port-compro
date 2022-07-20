import React from 'react'
import './portfolio.css'
import koperasi from '../../assets/koperasi.jpg'
const Portfolio = () => {
  return (
    <section id='portfolio'> 
    <h5> Solusi Software Kami</h5>
    <h2> Portfolio </h2>

    <div className='container portfolio__container'>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
        {/* <img src={koperasi}  alt="koperasi" /> */}
        <h3> Software Manajemen Koperasi</h3>
        <div className="portofolio__item-cta">
        <a href="#proj2" className='btn btn-primary' target='_blank'> Test </a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
        {/* <img src={} alt=""/> */}
        <h3> Radar High Frequency : Unidalog</h3>
        <div className="portofolio__item-cta">
        <a href="#proj2" className='btn btn-primary' target='_blank'> Test </a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
        {/* <img src={} alt=""/> */}
        <h3>Autonomos Weather Station </h3>
        <div className="portofolio__item-cta">
        <a href="#proj2" className='btn btn-primary' target='_blank'> Test </a>
        </div>
      </article>
      <article className='portfolio__item'>
        <div className='portfolio__item-image'></div>
        {/* <img src={} alt=""/> */}
        <h3> Aplikasi Koperasi Simpan Pinjam </h3>
        <div className="portofolio__item-cta">
        <a href="#proj2" className='btn btn-primary' target='_blank'> Test </a>
        </div>
      </article>
    </div>

    </section>
  )
}

export default Portfolio