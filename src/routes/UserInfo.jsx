import React, { useEffect, useState } from 'react'
import './userInfo.css'
import { useLocation } from 'react-router-dom'
function UserInfo() {
    const path = useLocation().pathname
    const userId = path.split('/').pop();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(Response => Response.json())
            .then(data => setUserData(data))
    })

    return (
        <div className='userDetail'>
            <div className="userInformation">
                <h1>USER INFORMATION</h1>
                <h2>USER Details</h2>
                <div className="name about">name: {userData.name} </div>
                <div className="email about">email: {userData.email} </div>
                <div className="phone about">Contact: {userData.phone} </div>
                <h2>Company Info:</h2>
                <div className="name about">Company name: {userData.company?.name} </div>
                <div className="descriptin about">Description :{userData.company?.catchPhrase} </div>
                <div className="business about">Business: {userData.company?.bs} </div>
                <h2>Address:</h2>
                <div className="city about">City : {userData.address?.city}</div>
                <div className="street about">Street : {userData.address?.street}</div>
                <div className="zipcode about">Pin-Code :{userData.address?.zipcode} </div>
            </div>
        </div>
    )
}

export default UserInfo
