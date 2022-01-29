import React, { useEffect } from "react"
import { useLaunchInfoQuery } from '../../generated/graphql'
import LaunchInfo from './LaunchInfo'


interface OwnProps{
    id: number
    handleBackBtn: () => void
}

const LaunchInfoContainer = ({id, handleBackBtn}: OwnProps) => {
    const { data, error, loading, refetch } = useLaunchInfoQuery({ variables: {id: String(id)}})

    useEffect(() => {
        refetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


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

    return <LaunchInfo data={data} handleBackBtn={handleBackBtn} />
}

export default LaunchInfoContainer