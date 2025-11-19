import React, { useState, useEffect } from 'react'
import { challengeData } from '../../fakeData'
import CubeCard from '../CubeCard/CubeCard.component'
import './CubeCardList.styles.scss'

const CubeCardList = () => {
    const [challenges, setChallenges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Define the async function to fetch data
        async function fetchLogs() {
            try {
                const data = challengeData
                console.log(data)
                setChallenges(data);
            }
            finally {
                setLoading(false);
            }
        }
        fetchLogs();
    }, []);

    if (loading) {
        return <div>Loading Challenges...</div>;
    }
    return (
        < div className="cube-card-list" >
            {
                challenges.map(challenge => (
                    <CubeCard key={challenge.id} {...challenge} />
                ))
            }
        </div >
    )
}

export default CubeCardList