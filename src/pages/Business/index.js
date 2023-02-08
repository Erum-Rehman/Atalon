import './index.scss';
import { useNavigate } from "react-router-dom";
import business from '../../mock/business';
import Navbar from '../../components/Navbar';
import BgFooter from '../../components/BgFooter';

const Business = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_business'>
                <Navbar />
                <div className="bg_img_business_heading">
                    <a href="#">https://elements.envato.com/science-opener-VK58DPX</a>
                    <h2>Business</h2>
                    <p>Founded in 2016. Atalon Venture strives to promote business development with innovation and technology and enterprise services. We have developed a series of patent<br />
                        products worldwide. In 2020, we have successfully expanded our business to 42 cities in 17 countries over the world. With the objective to connect innovation and<br />
                        technology to everyone’s daily lives, we developed functional, easy-to use creative systems and entertaining game consoles.</p>
                    <br/>
                    <p>
                        We aim to create an environment that is conducive to innovation and create advanced and superior innovation and technology products. Meanwhile, we have established a<br />
                        global business network to promote the development of e-commerce and the links between various industries and promote more products to the international market.<br />
                        At the same time, we also actively meet the needs of the innovation and technology industry, continuously upgrade and improve product quality, and strive to be among <br />the
                        world's top innovation and technology provider, so that the development of innovation and technology has gradually become an important pillar of a diversified economy.
                    </p>
                </div>
                <div className="business_container">
                    {
                        business.map((item) => (

                            <div key={item.id} className="business_div">
                                {<div className='img_div'>
                                    <img className="business_img" src={`${window.location.origin}/${item.image}`} />
                                </div>}
                                <div className='content'>
                                    <p className="name">{item.heading}</p>
                                    <p className='para'>{item.para1}</p><br />
                                    <p className='para'>{item.para2}</p>
                                </div>
                                <p className='see'>see more...</p>
                            </div>)
                        )}
                </div>
            </div>
           <BgFooter/>
        </>
    )
}
export default Business;