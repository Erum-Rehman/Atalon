import { useLocation } from "react-router-dom";
import InputText from '../TextField';
import './index.scss';

const MobileFooter = () => {

    const location = useLocation();

    return (
        <>
            <div className="sec_footer">
                <div className='sec_footer_icons'>
                    <p >Find us on?</p>
                    <img alt="" style={{cursor: 'pointer'}} src={`/assets/MobIcons.png`} />
                </div>
                <div>
                    <p>info@atalonventures.com</p>
                    <p>49/F China Online Centre, 333 Lockhart Road,</p>
                    <p>Wanchai, Hong Kong</p>
                    <p>(+852) 2129 2696</p>
                </div>
            </div>
            <div className='prim_footer'>
                <div>
                    <p>
                        Copyright@ 2022 Atalon Ventures (international) Limited All Rights Reserved
                    </p>
                </div>
                <div className='footer_policy'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>

        </>
    )
}
export default MobileFooter;