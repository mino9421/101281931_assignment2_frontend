import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Server() {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8089/employee')
        .then(res => {
            // console.log(res.data)
            setData(res.data)
            console.log("this is in success")
        })
        .catch(err => {
            console.log(err)
            console.log("this is in error scope")
        })
    }, [])

    return (
        <div>
            <p>hello</p>
            <p>{data.map(item => item)}</p>
        </div>
    )
}
