import React, { useState } from 'react';
import './index.scss';

const ScreenGrp = () => {
    return (
        <>
            <div className='grp_div'>
                <div>
                    <img alt="" className='sport' src={`/assets/sale.png`} />
                    <h3>Lifestyle</h3>
                    <p>An one stop smart business solution</p>
                    <p>{`Learn more>>`}</p>
                </div>
                <div>
                    <img className='sport' alt="" src={`/assets/pongConnect.png`} />
                    <h3>E-Sport</h3>
                    <p>The world's first digital beer pong system.</p>
                    <p>{`Learn more>>`}</p>
                </div>
                <div className='Nft_div'>
                    <img alt="" className='Nft' src={`/assets/thunderAll.png`} />
                    <h3>NFT</h3>
                    <p>The world's first digital beer pong system.</p>
                    <p>{`Learn more>>`}</p>

                </div>
                <div className='Nft_div'>
                    <img alt="" className='Nft' src={`/assets/WFT.png`} />
                    <h3>World's first tournament</h3>
                    <p>International sport rivalry between the strongs</p>
                    <p>{`Learn more>>`}</p>
                </div>
            </div>
        </>
    )
}
export default ScreenGrp;