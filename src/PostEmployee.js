import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BroseRouter, Link, Route, Routes, Navigate, BrowserRouter } from 'react-router-dom'

export default function PostEmployee() {
    return (
        <div>
            <br />
            <p>Post Employee</p>
            <button><Link to={`/`}>View All</Link></button>
            <button><Link to={`/post_employee`}>Post</Link></button>
            <button><Link to={`/employee`}>Get By ID</Link></button>
            <button><Link to={`/update_employee`}>Update</Link></button>
            <button><Link to={`/delete_employee`}>Delete</Link></button>
        </div>
    )
}
