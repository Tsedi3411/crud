import React, { useEffect, useState } from 'react'
import './user.css'
import axios from "axios"
import { Link } from 'react-router-dom'


function User() {


    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responce = await axios.get("http://localhost:8000/api/users")
                setUsers(responce.data)

            } catch (error) {
                console.log("error occures when fetching the data")
            }
        };
        fetchData();
    }, [])


    return (
        <div className='userTable'>
            <Link to="/add" type="button" class="btn btn-primary">
                Add User <i class="fa-solid fa-user-plus"></i>
            </Link>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th scop="col">s.no</th>
                        <th scop="col">Name</th>
                        <th scop="col">Email</th>
                        <th scop="col">Address</th>
                        <th scop="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => {
                        return (<>
                           
                            <tr>
                            <td>{index+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td className='actionbutton'>   
                                <button type="button" class="btn btn-info">
                                    <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" class="btn btn-danger">
                                    <i className="fa-solid fa-trash"></i>
                                </button>
    
                            </td>
                        </tr>
                        </> );
                    })}
                   
                </tbody>
            </table>

        </div>
    )
}

export default User