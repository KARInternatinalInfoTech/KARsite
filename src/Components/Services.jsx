import React from 'react';
import './CSS/Services.css';
import s5 from './assets/s5.jpg';
import s3 from './assets/s3.jpg';
import s2 from './assets/s2.jpg';
import s1 from './assets/s1.jpg';
import pr6 from './assets/pr6.jpg';

function Services() {
  return (
    <div>
      <div className='container'>
        <div className='main'>
          <center>
            <h3> Our Services</h3>
            <p className='sub'>Revolutionizing your digital landscape, one innovation at a time. Elevating efficiency, transforming challenges into triumphs. Experience the power of tailored IT solutions for unparalleled success.</p>          </center>
        </div>
        <div className='product'>
          <div className="pic">
            <img src='https://www.karinternationalinfotech.com/img/serv1.jpg' alt='Enter' className='image' />
            <div className="head">
              <h5 className="heading">Web Development</h5>
              <p className="card-text">Crafting Digital Experiences That Captivate And Engage, Leveraging React.Js For Front-End And Employing The Latest Technologies To Deliver Cutting-Edge Solutions.</p>
            </div>
            </div>
            <div className="pic">
              <div className="head">
              <h5 className="heading">Mobile Application Development</h5>
              <p className="card-text">Creating Customized Mobile Applications Tailored To Your Business Requirements, Ensuring Seamless Functionality And Exceptional User Experiences.</p>
              </div>
              <img src={s2} alt='Enter' className='image' />
            </div>
            <div className="pic">
              <img src={s3} alt='Enter' className='image' />
              <div className="head">
              <h5 className="heading">Graphic designing</h5>
              <p className="card-text">Brand Designing Transforming Brands With Logos And Video Editing. Proficient In PhotoShop, Illustrator, Corel Draw, InDesign, And After Effects</p>
              </div>
            </div>
            <div className="pic">
              <div className="head">
              <h5 className="heading">Digital marketing</h5>
              <p className="card-text">We Excel In Digital Marketing, Offering SEO, Meta Ads, Google Ads, And Comprehensive Brand Research Services To Optimize Your Online Presence.</p>
              </div>
              <img src={s1} alt='Enter' className='image' />
            </div>
            <div className="pic">
              <img src={pr6} alt='Enter' className='image' />
              <div className="head">
              <h5 className="heading">UI & UX designing</h5>
              <p className="card-text">Crafting Intuitive UI/UX Designs To Enhance User Experiences, Blending Creativity With Functionality For User-Friendly Interfaces.</p>
              </div>
            </div>
            <div className="pic">
              <div className="head">
              <h5 className="heading">Big Data</h5>
              <p className="card-text">Unlocking Insights With Big Data Solutions, Harnessing Its Power For Informed Decision-Making And Strategic Business Growth.</p>
              </div>
              <img src={s5} alt='Enter' className='image' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services