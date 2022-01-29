import React from 'react'
import { LaunchesQuery } from '../../generated/graphql'
import './styles.css'


export interface OwnProps{
    handleIdChange: (newId: number) => void
}

interface Props extends OwnProps{
    data: LaunchesQuery
}

export const Launches: React.FC<Props> = ({ data, handleIdChange }) =>  {
    return (
        <div>
            <h1>Launches</h1>
            <div className="labels">
            <div className="success_label"></div>
            <span>Success</span>
            <div className="failed_label"></div>
            <span>Failed</span>
            <div className="upcoming_label"></div>
            <span>Upcoming</span>
          </div>
            <div className="launch_list">
                {
                    !!data.launches && 
                    data.launches.map((launch, i) => 
                        !!launch && (
                            <div key={i} className="launches" onClick={() => handleIdChange(launch.flight_number!)}>
                                <p>Flight Number: <b>{launch.flight_number}</b></p>
                                <hr className="underline"/>
                                <h3 className={`launchName ${launch.launch_success ? "success" : launch.launch_success === null ? "upcoming" : "failed"}`}>
                                    {launch.mission_name}
                                </h3>
                                <p><span>Launch Year: </span><span>{launch.launch_year}</span></p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}