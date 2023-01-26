import { useLocation } from "react-router-dom";
import InputText from '../TextField';
import './index.scss';

const ScreenFooter = () => {

    const location = useLocation();

    return (
        <>
            <div className="sec_footer">
                <div className="footer_logo">
                    <div style={{ paddingRight: '30px' }}>
                        <img alt="" style={{ width: '160px' }} src={`/assets/logo.png`} />
                    </div>
                    <div>
                        <p>Subscribe Atalon Newsletter</p>
                        <p>Don't miss any updates of our new promotion</p>
                        <InputText
                            id="Atalon"
                            label="Subscribe Atalon Newletter"
                        />
                    </div>
                </div>
                <div className="footer_logo">
                    <div className='footer_logo_icons'>
                        <p >Find us on?</p>
                        <img alt="" src={`/assets/socialIcons.png`} /></div>
                    <div>
                    </div>
                    <div style={{ paddingLeft: '30px' }}>
                        <p>info@atalonventures.com</p>
                        <p>49/F China Online Centre, 333 Lockhart Road,</p>
                        <p>Wanchai, Hong Kong</p>
                        <p>(+852) 2129 2696</p>
                    </div>
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
export default ScreenFooter;