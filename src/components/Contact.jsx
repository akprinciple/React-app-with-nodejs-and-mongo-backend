import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {
    const [users, setusers] = useState([])
    async function user() {
        try {
            const data = await fetch("http://localhost:5000/user/userList");
            const res = await data.json()
            console.log(res);
            setusers(res)
        } catch (error) {
            console.log(error);
        }
    }
    // user()
    useEffect(() => {
        user()
        
      }, [])
  return (
    <div className=' p-3'>
        <h1 className='text-center my-4' >All Users</h1>

        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>password</td>
                    <td>Action</td>

                </tr>
            </thead>
            <tbody>
                
           
        {
           
            users.map(({_id, name, email, password},i)=>{
                return (
                    <tr key={_id}>
                        <td>{i+1}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>
                            <Link to={`/contact/${_id}`}>
                            <button className='btn btn-primary'>View</button>
                            </Link>
                            </td>
                         </tr>
                    )
            })
            // users.map((id, name)=>(

            // ))
        }
         </tbody>
        </table>
    </div>
  )
}

export default Contact