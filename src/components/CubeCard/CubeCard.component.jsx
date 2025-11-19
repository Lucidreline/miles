import React from 'react'
import './CubeCard.styles.scss'
import cardPhoto from '../../public/landmarks/Logo.png'


const CubeCard = ({ name, miles }) => {

    const progress = (miles.soFar / miles.total) * 100

    const progressBarStyles = {
        width: `${progress}%`
    };
    return (
        <div className="cube-card">
            <div className="photo" style={{ backgroundImage: `url(${cardPhoto})` }}></div>
            <div className="bottom">
                <span className='name'>{name}</span>
                <div className='progress-bar-container'>
                    <div className='line-breaker' />
                    <div className='progress-bar' style={progressBarStyles} />
                </div>

                <span className='mile-count'>{miles.soFar}/{miles.total} Miles</span>
            </div>
        </div>
    )
}

export default CubeCard