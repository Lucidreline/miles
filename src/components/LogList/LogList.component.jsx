import React, { useState, useEffect } from 'react'
import { logData } from '../../fakeData';
import LogListItem from '../LogListItem/LogListItem.component';
import './LogList.styles.scss'

const LogList = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the async function to fetch data
        async function fetchLogs() {
            try {
                const data = logData
                console.log(data)
                setLogs(data);
            }
            finally {
                setLoading(false);
            }
        }
        fetchLogs();
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    console.log(logs)
    return (
        <div className='log-list'>
            <div className="list-header">
                <span className="timestamp-item">Timestamp</span>
                <span className="distance-item">Distance (Miles)</span>
                <span className="steps-item">Steps</span>
                <span className="calories-item">Calories</span>
                <span className="duration-item">Duration</span>

            </div>
            <div className='line-breaker' />
            <div className="list-items">
                {logs.map(log => (
                    <LogListItem key={log.timestamp} log={log} />
                ))}

            </div>
        </div>
    )
}

export default LogList