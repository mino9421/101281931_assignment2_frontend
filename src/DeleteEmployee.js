import axios from 'axios'
import React from 'react'
import { BroseRouter, Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

export default function DeleteEmployee(props) {

    let employeeDelete = (id) => {
        axios.delete(`http://localhost:8089/employee${id}`)
        .then((res) => {
            console.log(res)
            window.location.reload(false)
        })
        .catch(err => console.error(err))
    }

    return (
        <div>
            <br />
            <p>Delete Employee</p>
            <button><Link to={`/`}>View All</Link></button>
            <button><Link to={`/post_employee`}>Post</Link></button>
            <button><Link to={`/employee`}>Get By ID</Link></button>
            <button><Link to={`/update_employee`}>Update</Link></button>
            <button><Link to={`/delete_employee`}>Delete</Link></button>
            {/* <p key={props.employee.id}>{props.employee.id} - {props.employee.firstName} - {props.employee.lastName}</p> */}
        </div>
    )
}
