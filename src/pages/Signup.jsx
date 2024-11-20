import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Signup(props){
  const navigate= useNavigate()
  const user = props.user
  const setusers = props.setusers
  const[euser,seteuser]=useState()
    const[epass,setepass]=useState()

    function handleUinput(event){
        seteuser(event.target.value)
    }
    function handlePinput(event){
         setepass(event.target.value)
    }
    function addUser(){
     setusers([...user,{username:euser,password:epass}])
     navigate("/")
    }
    return(
        <div className="bg-black p-10">
         <div className="bg-[#EFEFEF] p-10 rounded-md">
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          <p>Singup up here:)</p>
          <div className="flex flex-col gap-2 my-2">
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username" onChange={handleUinput}/>
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password" onChange={handlePinput}/>
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Confirm Password"/>
            <button className="bg-[#FCA201] w-24 p-1 rounded-md " onClick={addUser}>Signup</button>

            <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
          </div>
         </div>
        </div>
    )
}
export default Signup