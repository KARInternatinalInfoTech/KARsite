import React from 'react';
import './CSS/Home.css';
import react from './assets/react.png';
import wordpress from './assets/wordpress.png';
import flutter from './assets/flutter.png';
import mysql from './assets/mysql.png';
import blender from './assets/blender.png';
import aws from './assets/aws.png';
import unreal from './assets/unreal.jpeg';
import photoshop from './assets/photoshop.png';

function Home() {
  return (
    <div className='container'>
      <div>
        <img src='https://media.istockphoto.com/id/986497102/photo/thinking-robot.jpg?s=612x612&w=0&k=20&c=4jhWixCL5wPVfy5yF0cWwJ-IKIRbIx7rbap49Mo8MPo=' alt='' />
      </div>
      <div className='home-main'>
        <h3>Our Expertise</h3>
        <p>We have extensive experience across various industries including healthcare, finance, education, retail, and more. Our solutions are customized to meet the specific needs of each sector.</p>
      </div>
      <div className='home-main'>
        <h3>Technology Stack</h3>
        <p>We leverage the latest technologies and frameworks to ensure that our solutions are scalable, secure, and efficient. Our expertise includes but is not limited to:</p>
      </div>
      <div className='sample-image'>
        <img src={react} alt='React' className='samples' />
        <img src={flutter} alt='Flutter' className='samples' />
        <img src={wordpress} alt='WordPress' className='samples' />
        <img src={mysql} alt='MySQL' className='samples' />
        <img src={blender} alt='Blender' className='samples' />
        <img src={aws} alt='AWS' className='samples' />
        <img src={unreal} alt='Unreal Engine' className='samples' />
        <img src={photoshop} alt='Photoshop' className='samples' />
      </div>
    </div>
  );
}

export default Home;
