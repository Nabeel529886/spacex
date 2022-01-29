import gql from 'graphql-tag'

export const QUERY_LAUNCH_LIST = gql`
    query Launches{
  launches{
    flight_number
    launch_success
    launch_year
    mission_name
    upcoming
  }
}
`