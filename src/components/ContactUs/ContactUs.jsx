import React , {useEffect,useState} from 'react';
import './ContactUs.css'; 
import sendEmail from '../EmailHelper/sendEmail';
const ContactUs = () => {
    const [formData , setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    })
    const handleChange = (e, type) => {
        console.log(e.target.value)
        setFormData({ ...formData, [type]: e.target.value })
    }

    const handleClick = (e) => {
        e.preventDefault()
        sendEmail(formData)
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        })
    }
    
    useEffect(() => {
        // unmount component
        console.log(formData)
        return () => {
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
        }
    }, [])

    return (
        <div className='contact-us-container'>
            {/* map location section */}
            <div className='contact-us-map-container'>
                <img src="/images/maps.svg" alt="map" />
            </div>
                
            {/* form section */}
            <div className='contact-us-form-container'>
                <h1>Contact Us</h1>
                <p>If you have any questions please feel free to contact with us.</p>
                <div className='form-container'>
                    <div className='contact-us-input-container'>
                    <div className='input-container'>
                        <label htmlFor="name">Name</label>
                        <input type="text" name ="name" placeholder='Name' onChange={(e)=> handleChange(e, 'name')} value = {formData.name} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="email">Email</label>
                        <input type="text"  name ="email" placeholder='Email' onChange={(e)=> handleChange(e, 'email')} value={formData.email} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name ="phone" placeholder='Phone' onChange={(e)=> handleChange(e, 'phone')} value={formData.phone} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="phone">Subject</label>
                        <input type="text" name ="subject" placeholder='Subject' onChange={(e)=> handleChange(e, 'subject')} value={formData.subject} />
                    </div>
                    <div className='input-container'>
                        <label htmlFor="message">Message</label>
                        <textarea placeholder='Message' name="message" onChange={(e)=> handleChange(e, 'message')} value={formData.message} ></textarea>
                    </div>
                    </div>
                    <button className='contact-us-button' onClick={(e)=> handleClick(e)} >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs