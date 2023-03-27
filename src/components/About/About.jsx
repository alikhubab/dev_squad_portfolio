import React from 'react'
import './about.scss'
import { FaAward, FaTelegramPlane } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BsClipboardCheck } from 'react-icons/bs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Brand Svg icons
import {
  faNode,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  // react native
  faReacteurope,
  // sql
  faDatabase,
} from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <section id='about'>
      {/* <h5 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='900'>Unlock the mysteries of me</h5> */}
      <h2 data-aos="fade-up" data-aos-anchor="#about"  data-aos-duration='700'>About US</h2>

      <div className="container about__container">
      <div className="stage-cube-cont" data-aos="fade-right" data-aos-anchor=".about__container"  data-aos-duration="500">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#3C873A" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReacteurope} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            
            {/* Experience  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="500">
                <FaAward className='about__icon'/>
                <h5>Our Experience</h5>
                <small>Working Since 2020 Experience</small>
            </article>

            {/* Collaborators  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="700">
                <FiUsers className='about__icon'/>
                <h5>Collaborators</h5>
                <small>10+ Worldwide</small>
            </article>

            {/* Projects  */}
            <article className="about__card" data-aos="fade-left" data-aos-anchor=".about__cards"  data-aos-duration="900">
                <BsClipboardCheck className='about__icon'/>
                <h5>Projects</h5>
                <small>15+ Completed projects</small>
            </article>
          </div>

           <p style={{textAlign: 'justify'}} data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1000">
           Welcome to our portfolio website! We are a team of developers that specialize in creating innovative and user-friendly mobile apps using React Native for both Android and iOS platforms. Our team of experts work closely together to bring your ideas to life and understand client needs. We stay up-to-date with the latest technologies to help take your mobile presence to the next level. Thank you for considering us for your next project, we look forward to working with you!
               </p>

           <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-anchor=".about__content"  data-aos-duration="1200">Let's chat <FaTelegramPlane/></a>
        </div>
      </div>
    </section>
  )
}

export default About