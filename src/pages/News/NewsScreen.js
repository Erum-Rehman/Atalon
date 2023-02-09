import './index.scss';
import { useNavigate } from "react-router-dom";
import news from '../../mock/news';
import Navbar from '../../components/Navbar';
import BgFooter from '../../components/BgFooter';

const News = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='bg_img_news'>
                <Navbar/>
                <div className="bg_img_news_heading">
                    <a href='#'>https://elements.envato.com/news-24-VREN7DV</a>
                    <h1>News on 2022</h1>
                </div>
                <div className="news_container">
                    {
                        news.map((item) => (
                            <div key={item.id} className="news_div">
                                {<div className="news_div-img">
                                    <img src={`${window.location.origin}/${item.image}`} />
                                </div>}
                                <div className='content'>
                                    <p className="name">{item.heading}</p>
                                    <p className='para'>{item.para1}</p><br />
                                    <p className='para'>{item.para2}</p><br />
                                    <p className='para'>{item.para3}</p><br />
                                    <p className='para'>{item.para4}</p><br />
                                    <p className='para'>{item.para5}</p><br />
                                    <p className='para'>{item.para6}</p>

                                </div>
                                {/* <p className='see'>see more...</p> */}
                            </div>)
                        )}
                </div>
                <h1>Related News</h1>
                <div className='rel_news'>
                    <p>Stanford University Students Create Beer Using 5,000-Year-Old Recipe from China</p>
                    <img alt="" src={`/assets/line.png`} />
                    <p>Avoiding a hangover: Drinking beer instead of spirits lessens effects of hangover</p>
                    <img alt="" src={`/assets/line.png`} />
                    <p>July's best 7 beer tastings, parties one should really go to</p>
                </div>
            <BgFooter/>
            </div>

        </>
    )
}
export default News;