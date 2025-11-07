import React from 'react'
import LogList from '../../components/LogList/LogList.component'

const Logs = () => {
    return (
        <div className="logs-page">
            <div className="logs-header">
                <h1>Logs</h1>
                <button>+ Add New Log</button>
            </div>
            <LogList />
        </div>
    )
}

export default Logs