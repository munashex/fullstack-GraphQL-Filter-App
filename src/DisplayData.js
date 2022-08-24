import React from 'react'
import {gql, useQuery, useLazyQuery} from '@apollo/client'


let QUERY_ALL = gql` 
query allUser {
users{
name 
nationality
}}
`

let QUERY_USER = gql`  
query Username($name: String!){
username(name: $name){
name 
nationality
age 
}
}
`

function DisplayData() {

    const [nameSearched, setNameSearched] = React.useState('') 
    const [fetchUser, {data: userData}] = useLazyQuery(QUERY_USER)

    let {data} = useQuery(QUERY_ALL) 
    if(data) {
        console.log(data)
    }
   
  return (
    <div>
        {data && data.users.map((item, i) => {
            return (
                <div key={i}>
                  <h1>{item.name}</h1>
                  <pre>{item.age}</pre>
                </div>
            )
        }) }


        <div>
            <input  onChange={(e) => {
                setNameSearched(e.target.value)
            }}/>
            <button onClick={() => fetchUser({variables: {
                name: nameSearched
            }})}>fetch data</button>

            {
                userData && (
                    <div>
                        <h1>{userData.username.name}</h1> 
                        <h1>{userData.username.age}</h1>
                        <h1>{userData.username.nationality}</h1>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default DisplayData