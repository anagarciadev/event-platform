import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id 
      title
    }
  }
`

function App() {

  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
    <h1 className="text-5xl">Hello</h1>
    )
}

export default App
