import './index.scss';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import BgFooter from '../../components/BgFooter';

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
                <BgFooter/>
            </div>
        </>
    )
}
export default CompanyScreen;