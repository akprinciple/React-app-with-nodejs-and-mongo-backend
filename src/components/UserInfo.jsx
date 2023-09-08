import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const UserInfo = () => {
    const [loading, setloading] = useState(true)
    const [user, setuser] = useState({})
    const{userId} = useParams()
    const dt = {id: userId}
    // console.log(JSON.stringify(dt));
    async function fetchUser() {
        try {
            
            const data = await fetch("http://localhost:5000/user/userDetails", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(dt)
            })

            setloading(false)
            const res = await data.json()
            setuser(res)

        } catch (error) {
            console.log(error);
        }finally{
            setloading(false)
        }
        
    }
    // fetchUser()
    const {_id, name, email, password} = user
    
    useEffect(() => {
        fetchUser()
        
    }, [])
    return (
        <div>
        {
            loading ? <img src="/loader1.gif" alt="" className='d-block rounded-circle mx-auto my-3 col-md-3' /> :
             <div>
            <img src="/avatar2.png" alt="" className='d-block rounded-circle mx-auto my-3'/>
            <h1>{userId}</h1> 
            
            <form action="" className='col-md-6 mx-auto'>
            <label htmlFor="">Name</label>
            <input type="text" className='form-control mb-3' value={name} />

            <label htmlFor="">Email</label>
            <input type="email" className='form-control mb-3' value={email} />

            <label htmlFor="">Password</label>
            <input type="text" className='form-control mb-3' value={password} />
       </form> 
       </div>
        }
    </div>
  )
}

export default UserInfo