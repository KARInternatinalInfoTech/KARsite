import React from 'react';
import './CSS/Products.css';
import pr5 from './assets/pr5.jpg'
import pr7 from './assets/pr7.jpg';
import pr3 from './assets/pr3.jpg';
import pr2 from './assets/pr2.jpg';
import pr6 from './assets/pr6.jpg';
function Products() {
  return (
    <div>
      <div className='container'>
        <div className='main'>
          <center>
            <h3> Our Products</h3>
            <p className='sub'>Discover our range of innovative products designed to streamline your operations, enhance productivity, and drive business growth.</p>
          </center>
        </div>
        <div className="product">
          <div className="pic">
            <img src={pr5} alt='Enter' className='image' />
            <div className="head">
              <h5 className="heading">Enterprise Resource Planning</h5>
              <p className="card-text">It's a type of software that helps organizations automate and manage business processes. ERP can help with accounting, procurement, project management, risk management, compliance, and supply chain operations.</p>
            </div>
          </div>
          <div className="pic">
            <div className="head">
              <h5 className="heading">Human Resources Management System</h5>
              <p className="card-text">Human resources management system (HRMS) software is a suite of applications that help HR professionals manage human resources functions. HRMS software helps with every stage of the employment lifecycle, from recruitment to retirement.</p>
            </div>
            <img src={pr7} alt='Enter' className='image' />
          </div>
          <div className="pic">
            <img src={pr3} alt='Enter' className='image' />
            <div className="head">
              <h5 className="heading">Customer Managed Relationship</h5>
              <p className="card-text">CMR is about engagement wherever the consumer is in their buying journey. Whether they're… browsing in-store. chatting online with your company's help desk.</p>
            </div>
          </div>
          <div className="pic">
            <div className="head">
              <h5 className="heading">Billing System</h5>
              <p className="card-text">Billing system software is an accounting application that can automate and streamline invoice processing and payment services</p>
            </div>
            <img src={pr2} alt='Enter' className='image' />
          </div>

          <div className="pic">
            <img src={pr6} alt='Enter' className='image' />
            <div className="head">
              <h5 className="heading">Apache Hadoop</h5>
              <p className="card-text" >Organizations can manage and analyze massive amounts of data quickly and effectively with the help of Apache Hadoop’s dynamic big data governance solutions.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Products