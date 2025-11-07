import React from 'react'
import './LogListItem.styles.scss'

const LogListItem = ({ log }) => {
    console.log(log)

    const { timestamp, distanceMiles, steps, calories, durration } = log

    return (
        <div className="log-list-item-container">
            <div className="item-section timestamp-item">
                <span>{timestamp}</span>
            </div>
            <div className="item-section distance-item">
                <span>{distanceMiles}</span>
            </div>
            <div className="item-section steps-item">
                <span>{steps}</span>
            </div>
            <div className="item-section calories-item">
                <span>{calories}</span>
            </div>
            <div className="item-section duration-item">
                <span>{durration}</span>
            </div>
            <div className="item-section edit-item">
                <span>...</span>
            </div>
        </div>
    )
}

export default LogListItem
