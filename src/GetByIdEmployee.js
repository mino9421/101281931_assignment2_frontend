import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { BroseRouter, Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

export default function GetByIdEmployee() {

    const {id} = useParams()
    const [state, setState] = useState()
    let employeeId = ("" + id)

    useEffect(() => {
        getEmployeeById(employeeId)
    }, [])


    const getEmployeeById = (employeeId) => {
        axios.get(`http://localhost:3000/employees/${employeeId}`)
        .then((res) => {
            const data = res.data
            setState(data)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <br />
            <p>Get By Id Employee</p>
            <button><Link to={`/`}>View All</Link></button>
            <button><Link to={`/post_employee`}>Post</Link></button>
            <button><Link to={`/employee`}>Get By ID</Link></button>
            <button><Link to={`/update_employee`}>Update</Link></button>
            <button><Link to={`/delete_employee`}>Delete</Link></button>
        </div>
    )
}
