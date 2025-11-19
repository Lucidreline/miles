import React from 'react'
import cardPhoto from '../../public/landmarks/Logo.png'
import './HorizontalCard.styles.scss'

const LandscapeCard = () => {
    return (
        <div className="landscape-card">
            <div className="photo" style={{ backgroundImage: `url(${cardPhoto})` }}></div>
            <div className="info">
                <div className="top">
                    <span className="name">Great Wall of China</span>
                    <span className="description">So Called impossible to walk completely...</span>
                </div>
                <div className='line-breaker' />
                <div className="bottom">
                    <span className="times-completed">Completed 5x</span>
                </div>
            </div>
        </div>
    )
}

export default LandscapeCard