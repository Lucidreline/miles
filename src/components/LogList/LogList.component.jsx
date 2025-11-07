import React, { useState, useEffect } from 'react'
import logData from '../../fakeData';
import LogListItem from '../LogListItem/LogListItem.component';

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
        <div>
            {logs.map(log => (
                <LogListItem key={log.timestamp} log={log} />
            ))}
        </div>
    )
}

export default LogList