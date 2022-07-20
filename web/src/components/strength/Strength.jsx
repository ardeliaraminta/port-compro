import React from 'react'
import './strength.css'
import itmanage from '../../assets/itmanage.jpg'

const Strength = () => {
  return (
   <section id = 'strength'>
    <h5>Our Services </h5>
    <h2> Layanan Kami </h2>

    <div className='container services__container'>
      <article className='services'>
        <div className='client__avatar'>
          <img src={itmanage} alt='avatar'/>
          </div>
          <h5 className='details'> IT Manage Services</h5>
          <testi className='details_review'>
          Kami menyediakan layanan pengelolaan untuk semua perangkat dan infrastruktur TI dari bisnis skala kecil hingga besar dengan layanan lokasi kami tersebar.
          </testi>
      </article>
      <article className='services'>
        <div className='client__avatar'>
          <img src={itmanage} alt='avatar'/>
          </div>
          <h5 className='details'> IT Manage Services</h5>
          <testi className='details_review'>
          Kami menyediakan layanan pengelolaan untuk semua perangkat dan infrastruktur TI dari bisnis skala kecil hingga besar dengan layanan lokasi kami tersebar.
          </testi>
      </article>
      <article className='services'>
        <div className='client__avatar'>
          <img src={itmanage} alt='avatar'/>
          </div>
          <h5 className='details'> IT Manage Services</h5>
          <testi className='details_review'>
          Kami menyediakan layanan pengelolaan untuk semua perangkat dan infrastruktur TI dari bisnis skala kecil hingga besar dengan layanan lokasi kami tersebar.
          </testi>
      </article>
      
    </div>
     </section>
  )
}

export default Strength
