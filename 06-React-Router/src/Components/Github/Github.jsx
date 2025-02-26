import React from 'react'
import { useLoaderData } from 'react-router'

function Github() {
 
        const data = useLoaderData()
        return (
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
             <h3 className='text-3xl'>UserName: {data.login}</h3>
            <h3 className='text-3xl'>Name: {data.name}</h3>
            <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>     
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prateek21a')
    return response.json()
}