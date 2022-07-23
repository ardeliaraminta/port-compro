import React from 'react'
import './visimisi.css'
import {FaRegEye} from 'react-icons/fa'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import {HiOutlinePuzzle, HiOutlineLightBulb} from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
import {GrWorkshop} from 'react-icons/gr'
import {GiTeamUpgrade} from 'react-icons/gi'
import {IoThumbsUpOutline} from 'react-icons/io5'
 
const Visimisi = () => {
  return (
    <section id='visimisi'>
      <h5> Perusahaan </h5>
      <h2> Visi dan Misi </h2>

    
      <div className='container services__container'>
      <article className='service'>
        <div className='service__head'>
          <h3> Visi </h3>

          <ul className='service__list'>
            <li> 
            <FaRegEye className='service__list-icon'/>
            <p> Menjadi perusahaan IT Solusi terpercaya yang
mengutamakan konsistensi dalam kualitas dan
layanan sempurna dengan reputasi global. </p>
            </li>
          </ul>
          </div>
      </article>
      <article className='service'>
        <div className='service__head'>
          <h3>Misi </h3>
          <ul className='service__list'>
            <li> 
            <HiOutlineLightBulb className='service__list-icon'/>
            <p> Fokus pada solisi komprehensif dengan inovasi
produk terbaru dan layanan sempurna sebagai
bentuk hubungan jangka panjang yang
berkelanjutan
 </p>
            </li>
          </ul>
          </div>
      </article>
    </div>
    </section>
  )
}
export default Visimisi