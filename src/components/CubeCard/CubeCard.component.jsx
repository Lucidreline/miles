import React from 'react'
import './CubeCard.styles.scss'
import cardPhoto from '../../public/landmarks/Logo.png'


const CubeCard = ({ progress = 15 }) => {
    const progressBarStyles = {
        width: `${progress}%`
    };
    return (
        <div className="cube-card">
            <div className="photo" style={{ backgroundImage: `url(${cardPhoto})` }}></div>
            <div className="bottom">
                <span className='name'>Home to Big Bear</span>
                <div className='progress-bar-container'>
                    <div className='line-breaker' />
                    <div className='progress-bar' style={progressBarStyles} />
                </div>

                <span className='mile-count'>18/70 Miles</span>
            </div>
        </div>
    )
}

export default CubeCard