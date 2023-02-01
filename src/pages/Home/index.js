import './index.scss';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img'>
                    <video autoPlay loop muted playsInline src='assets/Earth.mp4'/>                    
                <div className="bg_img_heading">
                    <a href="#">https://elements.envato.com/earth-infographic-elements-SB78PYN</a>
                    <h2>Connecting to the innovation and technology era</h2>
                    <p>Atalon Ventures is committed to promote innovation and technology and aiming to included it<br />
                        in everyone’s daily lives. We strive to integrate innovative technology<br />
                        into create industries and services around the world.
                    </p>
                    <img className='atalon' alt="" src={`/assets/home_logo.png`} />
                    
                </div>
                    <img alt="" className='grp_div' style={{ width: '101%', marginTop: 'auto' }} src={`/assets/Group 7654.png`} />
            </div>
        </>
    )
}
export default Home;