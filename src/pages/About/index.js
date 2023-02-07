import './index.scss';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';

const About = () => {
    const navigate = useNavigate();

    return (
        <>
                <Navbar/>
            <div className='bg_img_about'>
                <div className="bg_img_about_heading">
                    <h2>About Atalon Ventures</h2>
                    <p>Founded in 2016. Atalon Venture strives to promote business development with innovation and technology and enterprise services. We have developed a series of patent<br />
                        products worldwide. In 2020, we have successfully expanded our business to 42 cities in 17 countries over the world. With the objective to connect innovation and<br />
                        technology to everyone’s daily lives, we developed functional, easy-to use creative systems and entertaining game consoles.</p>
                        <br/>
                    <p>We aim to create an environment that is conducive to innovation and create advanced and superior innovation and technology products. Meanwhile, we have established a<br />
                        global business network to promote the development of e-commerce and the links between various industries and promote more products to the international market. At<br />
                        the same time, we also actively meet the needs of the innovation and technology industry, continuously upgrade and improve product quality, and strive to be among the<br />
                        world's top innovation and technology provider, so that the development of innovation and technology has gradually become an important pillar of a diversified economy.</p>
                        <img alt="" className='map' src={`/assets/abt_bg.png`} />

                    <a href="#">https://elements.envato.com/matrix-technology-data-slideshow-VG6WXR9</a>

                    <h3>Management Team</h3>
                    <p>We continue to build and develop innovation and technology professionals and are committed to seizing opportunities and staying<br />
                        ahead of others in the development of innovation and technology.</p>

                    <div className='main_abt'>
                    <div className='main_abt_detail'>
                            <div className='main_abt_info'>
                                <img alt="" src={`/assets/ronald.png`} />
                                <div>
                                    <h1>Ronald Chiu</h1>
                                    <h4>Chairman & President</h4></div>
                            </div>
                            <p>"Pong offers F&B concepts combined with a tech twist - the pre-eminent lifestyle hub for this millennial day and ages."
                                Having studied business and wealth management on 3 continents, Ronald Chiu was inspired to digitalise the popular beerpong movement. Following his award-winning launch of PONGConnect the first online application for the game, alongside his established background in CLSA Capital Partners, one of Asia's leading private equity platforms, Ronald opened the first PONG venue in 2015.<br/>
                                Amongst PONG Group's growing collection of bar, restaurant and liftstyle venues across the globe are the newly opened locations in Singapore, London and Xiamen, along with the current 4 in Hong Kong and Taipei. Each PONG outlet focuses on different concepts and offerings, in order to suit local preferences, but never ceases its focus on bringing innovation and the latest technology to every market around the world.</p>
                        </div>
                        <div className='main_abt_detail'>
                            <div className='main_abt_info'>
                                <img alt="" src={`/assets/steven.png`} />
                                <div>
                                    <h1>Steven Yip</h1>
                                    <h4>Chief Executive Officer</h4></div>
                            </div>
                            <p>Steven is the Chief Executive Officer of Atalon Ventures (International) Limited, where he heads the development
                                 and execution high quality business strategies and plans. He has more than ten years experience in information 
                                 technology projects, not only experienced in project management and customer communication, but also skilled in web and APP development. Prior to Atalon Ventures (International) Limited, he served as Digital Senior Project Manager at Saatchi & Saatchi and possessing eight years’ experience in the field of web and platform development and maintenance.</p>
                        </div>
                        
                    </div>
                </div>

                <img alt="" style={{ width: '111.15%', marginTop: 'auto' }} src={`/assets/Group 7654.png`} />
            </div>
        </>
    )
}
export default About;