import React from 'react';
import './CSS/AboutUs.css';
import s1 from './assets/s2.jpg';

function AboutUs() {
  return (
    <div>
      <div className='container'>
        <div className='main'>
          <center>
            <h3> Our About Us</h3>
            <p className='sub'>Discover our range of innovative products designed to streamline your operations, enhance productivity, and drive business growth.</p>
          </center>
        </div>
        <div>
          <div className="head-1">
            <div className="text-1">
              <h5 className="sub-head">Who We Are</h5>
              <p className="sub-text">KAR International Infotech is a leading provider of innovative solutions in the realm of technology services and products. Founded on February 23, 2023, by Karthikeyan, our company is dedicated to offering unparalleled expertise and cutting-edge solutions to meet the diverse needs of our clients.</p>

              <h5 className="sub-head">Our Mission</h5>
              <p className="sub-text">At KAR International Infotech, our mission is clear: to deliver exceptional services and products while prioritizing affordability and customer satisfaction. We believe in harnessing the power of technology to transform businesses and enhance operational efficiency, ultimately contributing to the success of our clients.</p>
            </div>
            <div className="col-md-4">
              <img src="https://www.karinternationalinfotech.com/img/abt02.jpg" className="image" alt="..." />
            </div>
          </div>
        </div>
        <div>
          <div className="head-2" >
            <div className="image">
              <img src="https://www.karinternationalinfotech.com/img/abt01.jpg" className="image" alt="..." />
            </div>
            <div className="text-2">
              <h5 className="sub-head">Our Offerings</h5>
              <p className="sub-text">We specialize in a wide range of services, including web development, graphic designing, digital marketing, and UI & UX designing. Our team of experienced professionals is committed to delivering bespoke solutions tailored to meet the unique requirements of each client.</p>
              <p>In addition to our services, we offer a suite of cutting-edge products designed to streamline operations and drive business growth. From Big Data solutions to billing software, HRMS, CMR, and ERP systems, our products are built to empower businesses and drive success.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="head-3">
            <div className="text-3">
              <h5 className="sub-head">Our Commitment</h5>
              <p className="sub-text">At the heart of our company lies a dedication to excellence. We are committed to providing our clients with the highest quality solutions and unparalleled customer service. We strive to exceed expectations, delivering results that drive tangible value and foster long-term relationships.</p>
              <h5 className="sub-head">Empowering People, Driving Success</h5>
              <p className="sub-text">At KAR International Infotech, we believe in empowering our team members to thrive and succeed. We are dedicated to providing a supportive and collaborative work environment where creativity and innovation are encouraged. By investing in our people, we ensure that they have the tools and resources they need to deliver excellence in everything they do.</p>
              <h5 className="sub-head">Your Partner in Success</h5>
              <p className="sub-text">Whether you're looking to enhance your online presence, streamline your operations, or drive business growth, KAR International Infotech is here to help. Partner with us, and let's embark on a journey towards success together.</p>
            </div>
            <div className="image1">
              <img src={s1} className="image1" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs