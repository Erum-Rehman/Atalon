import './index.scss';
import { useNavigate } from "react-router-dom";
import mission from '../../mock/mission';

const MobileScreen = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_mission'>
                <div className="bg_img_mission_heading">
                    <h2>Mission</h2>
                    <p>Drive innovation and technology into various creative industries and services and<br />
                        create sustainable development environment with different stakeholders.</p>
                </div>
                <div className="mission_container">
                    {
                        mission.map((item) => (

                            <div key={item.id} className="mission_div">
                                {<div>
                                    <img className="mission_img" src={`${window.location.origin}/${item.image}`} />
                                </div>}
                                <div className='content'>
                                    <p className="name">{item.heading}</p>
                                    <p className='para'>{item.para1}</p><br />
                                </div>
                            </div>)
                        )}
                </div>
                <img alt="" style={{ width: '119%', marginTop: 'auto' }} src={`/assets/Group 7654.png`} />
            </div>
        </>
    )
}
export default MobileScreen;