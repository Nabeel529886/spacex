import React from "react"
import { useLaunchesQuery } from '../../generated/graphql'
import {Launches, OwnProps} from './Launches'


const LaunchesContainer = (props: OwnProps) => {
    const { data, error, loading } = useLaunchesQuery()


    if (loading){
        return <div>
            Loading
        </div>
    }

    if (error || !data){
        return <div>
            Error
        </div>
    }

    return <Launches data={data} {...props} />
}

export default LaunchesContainer