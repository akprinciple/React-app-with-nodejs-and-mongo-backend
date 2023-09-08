import React, { useState } from 'react'

const Register = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [loading, setloading] = useState(false)
    const [message, setmessage] = useState("")


   async function submit(e) {
        e.preventDefault()
        const data = {name, email, password}
        // console.log(name);
    setloading(true)
        try {
            const info = await fetch("http://localhost:5000/user/register", {
                method: "POST",
                headers: {"Content-Type" : "Application/json"},
                body: JSON.stringify(data)
                
            })
            const actualres = await info.json()
            console.log(actualres);
            
            if (actualres.code === 11000) {
                alert('the email is  existing')
            }else if(_id) {
                const {email, name, password, _id} = await info.json()

                setmessage(<div className='bg-success col-md-6 mx-auto text-light p-2 text-center'>Registration was successful. Your registration id is  {_id}</div>)
            }
        } catch (error) {
            console.log(error);
           setmessage(<div className='bg-danger col-md-6 mx-auto p-2 text-light text-center'>Network Error</div>)
            
        }finally{
    setloading(false)
        
        }
    }
  return (
    <div>
        <h1 className='text-center'>Registration Page</h1>

        {message}
    <form action="" id='form'>

        <div className="col-md-6 mx-auto mt-5">
            <label htmlFor="" className='font-weight-bold'>Name</label>
            <input type="text" className='form-control mb-3' onChange={(e)=>setname(e.target.value)} placeholder='Input your name' />
            <label htmlFor="" className='font-weight-bold'>Email</label>
            <input type="email" className='form-control mb-3' placeholder='Input your Email'  onChange={(e)=>setemail(e.target.value)}/>
            <label htmlFor="" className='font-weight-bold'>Password</label>
            <input type="password" className='form-control mb-3' placeholder='Input your Password'  onChange={(e)=>setpassword(e.target.value)}/>
           
           
            {/* <button type='submit' className='btn btn-info' onClick={submit}>Submit</button> */}
           
            {
                loading ?
            <button className='btn btn-warning' >loading</button>
                :
            <button type='submit' className='btn btn-info' onClick={submit}>Submit</button>
            }
        </div>
    </form>

    </div>
  )
}

export default Register