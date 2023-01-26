import './index.scss';
import { useNavigate } from "react-router-dom";
import newsMobile from '../../mock/newsMobile';

const News = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_news'>
                <div className="bg_img_news_heading">
                    <a href='#'>https://elements.envato.com/news-24-VREN7DV</a>
                    <h2 className='news_h'>News on 2022</h2>
                </div>
                <div className="news_container">
                    {
                        newsMobile.map((item) => (
                            <div key={item.id} className="news_div">
                                {<div className="news_div-img_M">
                                    <img src={`${window.location.origin}/${item.image}`} />
                                </div>}
                                <div className='content_M'>
                                    <p className="name">{item.heading}</p>
                                    <p className='para'>{item.para1}</p><br />
                                    <p className='para'>{item.para2}</p><br />
                                    <p className='para'>{item.para3}</p><br />
                                    <p className='para'>{item.para4}</p><br />
                                    <p className='para'>{item.para5}</p><br />
                                    <p className='para'>{item.para6}</p><br />
                                    <p className='para'>{item.para7}</p><br />
                                    <p className='para'>{item.para8}</p><br />
                                    <p className='para'>{item.para9}</p><br />
                                    <p className='para'>{item.para10}</p><br />
                                    <p className='para'>{item.para11}</p><br />
                                    <p className='para'>{item.para12}</p><br />
                                </div>
                                {/* <p className='see'>see more...</p> */}
                            </div>)
                        )}
                </div>
                <h2 className='rel_h'>Related News</h2>
                <div className='rel_news'>
                    <p>Stanford University Students Create Beer Using 5,000-Year-Old Recipe from China</p>
                    <img alt="" src={`/assets/MobLine.png`} />
                    <p>Avoiding a hangover: Drinking beer instead of spirits lessens effects of hangover</p>
                    <img alt="" src={`/assets/MobLine.png`} />
                    <p>July's best 7 beer tastings, parties one should really go to</p>
                </div>
                <img className='bott_img' alt="" src={`/assets/Group 7654.png`} />
            </div>
        </>
    )
}
export default News;