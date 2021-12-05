import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BroseRouter, Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

export default function GetEmployees(props) {

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
            <br />
            <p>Get Employees</p>
            <button><Link to={`/`}>View All</Link></button>
            <button><Link to={`/post_employee`}>Post</Link></button>
            <button><Link to={`/employee`}>Get By ID</Link></button>
            <button><Link to={`/update_employee`}>Update</Link></button>
            <button><Link to={`/delete_employee`}>Delete</Link></button>
            <div>
                {
                    data.map(item => (
                        <p>{item}</p>
                    ))
                }    
            </div>
        </div>
    )
}
