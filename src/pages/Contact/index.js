import './index.scss';
import Navbar from '../../components/Navbar';
import BgFooter from '../../components/BgFooter';

const Contact = () => {
    return (
        <>
                <Navbar />
            <div className='bg_img_contact'>
                <div className="bg_img_contact-Heading">
                    <a href="#">https://elements.envato.com/epic-movie-titles-VUNRC93</a>
                    <h1>Contact Us</h1>
                    <div className='bg_img_contact-items'>
                        <img alt="" src={`/assets/contSale.png`} />
                        <img alt="" src={`/assets/contPong.png`} />
                        <img alt="" src={`/assets/contThunder.png`} />
                    </div>
                </div>
                <div className='contact_container'>
                    <input type="text" className='form-group' placeholder="Your name" />
                    <input type="email" className='form-group' placeholder="Phone Number" />
                    <input type="text" className='form-group' placeholder="Your Email" />
                    <textarea className='form-group' rows="5" placeholder="Message"></textarea>
                    <div className='btn'>
                        <button type="submit">Send</button>
                    </div>
                </div >
            </div >
            
           <BgFooter/>
        </>
    )
}
export default Contact;