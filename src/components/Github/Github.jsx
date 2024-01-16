// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    if(data) console.log(data)

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Priyanshu-Ganatra')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    // }, [])

    return (
        <div className='justify-center m-4 bg-gray-700 text-white p-4 text-3xl flex items-center flex-col gap-y-4'>
        <p>Name: {data.name}</p>
        <p>Github Followers: {data.followers}</p>
        <img src={data.avatar_url} className="w-28" alt="GitHub pfp" />
        </div>
    )
}

export default Github

