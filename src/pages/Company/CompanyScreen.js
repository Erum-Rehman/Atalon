import './index.scss';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';

const CompanyScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_mission'>
                <Navbar/>
                <div className="bg_img_mission_heading">
                    <h2>Mission</h2>
                    <p>Drive innovation and technology into various creative industries and services and<br />
                        create sustainable development environment with different stakeholders.</p>
                </div>
                <img alt="" style={{ width: '119%', marginTop: 'auto' }} src={`/assets/Group 7654.png`} />
            </div>
        </>
    )
}
export default CompanyScreen;