import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Server() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8089/employee')
        .then(res => {
            // setData(JSON.stringify(res))
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <p>hello</p>
            <p>{data}</p>
        </div>
    )
}
