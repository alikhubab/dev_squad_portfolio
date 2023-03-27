import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h5 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='700'>The things we can do for you</h5>
      <h2 data-aos="fade-up" data-aos-anchor="#services"  data-aos-duration='900'>Our Services</h2>
      
      <div className="container services__container">
        <article className="service" data-aos="fade-right" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Conducting user research and user testing to understand user needs.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing user personas and user journeys to represent target audience.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Creating wireframes, prototypes, and mockups to visualize and test ideas.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing the layout, navigation, and visual elements of the user interface.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Continuously testing and iterating on the design to improve usability and effectiveness.</p>
             </li>
             <li>
                <BiCheck className='service__list-icon'/>
               <p>Continuously testing and iterating on the design to improve usability.</p>
             </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service" data-aos="fade-up" data-aos-anchor=".services__container"  data-aos-duration="1200">

          <div className="service__head">
            <h3>Android/IOS Development</h3>
          </div>

          <ul className="service__list">
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Designing and building Android and IOS Apps using best practices.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Developing responsive, mobile-friendly Apps that work on any device.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Implementing features and functionality using server-side languages</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Integrating Apps and applications with databases and APIs.</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Setting up and configuring servers and hosting environments</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Testing and debugging websites and applications to ensure functionality</p>
            </li>
            <li>
                <BiCheck className='service__list-icon'/>
                <p>Providing technical support and assistance to website users and clients.</p>
            </li>
          </ul>
        </article>

        {/* End of web development  */}


        <article className="service" data-aos="fade-left" data-aos-anchor=".services__container"  data-aos-duration="900">

          <div className="service__head">
            <h3>Revisions & Testing</h3>
          </div>

          <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Comprehensive testing and quality assurance of all software before release.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Prompt resolution of any bugs or issues that may arise during testing.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Regular revisions and updates to ensure optimal performance and user experience.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p> Thorough testing of software compatibility with various devices and operating systems.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p> Continuous monitoring of software performance to ensure continued satisfaction and success.</p>
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Delivering software with complete documentation and tutorial for easy usage and maintenance.</p> 
              </li>
              <li>
                  <BiCheck className='service__list-icon'/>
                 <p>Communication with client throughout the development process and after delivery for feedback and suggestions.</p> 
              </li>
            </ul>
          </article>

          {/* End of digital marketting  */}



      </div>
    </section>
  )
}

export default Services