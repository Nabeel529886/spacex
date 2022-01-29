import React from 'react'
import { LaunchInfoQuery } from '../../generated/graphql'
import './styles.css'

interface Props{
    data: LaunchInfoQuery
    handleBackBtn: () => void
}

const LaunchInfo: React.FC<Props> = ({data, handleBackBtn}) => {
    const launch = data.launch

    if (!launch){
        return <div>
            No Launch Available
        </div>
    }

    return (
        <div className="launch">
            
            {!!launch.links && !!launch.links.flickr_images && launch.links.flickr_images.length > 0? (
                
                <img src={`${launch.links.flickr_images[0]}`} alt={`${launch.mission_name}`} width="350" height="350"/>
            ): null}

            <p>Flight Number: {launch.flight_number}</p>
            <hr />
            <h1>{launch.mission_name}</h1>
            <p>{launch.details}</p>
            <button onClick={handleBackBtn}>Back To Main Page</button>
        </div>
    )
}

export default LaunchInfo
