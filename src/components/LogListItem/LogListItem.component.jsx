import React from 'react'
import './LogListItem.styles.scss'
import breakUpTimeStamp from './LogList.utils'

const LogListItem = ({ log }) => {
    console.log(log)

    const { timestamp, distanceMiles, calories, durration } = log

    return (
        <div className="log-list-item-container">
            <div className="item-section">
                <span>{breakUpTimeStamp(timestamp)}</span>
            </div>
            <div className="item-section">
                <span>{distanceMiles} Miles</span>
            </div>
            <div className="item-section">
                <span>{calories}cal</span>
            </div>
            <div className="item-section">
                <span>{durration}</span>
            </div>
        </div>
    )
}

export default LogListItem
