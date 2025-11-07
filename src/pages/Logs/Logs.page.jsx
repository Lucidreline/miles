import React from 'react'
import LogList from '../../components/LogList/LogList.component'
import './Logs.styles.scss'

const Logs = () => {
    return (
        <div className="logs-page">
            <div className="logs-header">
                <div className="logs-page-header">
                    <h1>Logs</h1>
                    <button>+ Add New Log</button>
                </div>
            </div>
            <LogList />
        </div>
    )
}

export default Logs