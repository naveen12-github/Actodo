import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(props){
    const navigate= useNavigate()
    const[euser,seteuser]=useState()
    const[epass,setepass]=useState()
    const [ruser,setruser] = useState(true)
    
    const user = props.user

    function handleUinput(event){
        seteuser(event.target.value)
    }
    function handlePinput(event){
         setepass(event.target.value)
    }
    function checkUser(){
        var usernotfound = false
        console.log(user)
      user.forEach(function(item)
      {
        if(item.username === euser && item.password === epass){
            console.log("login success")
            usernotfound = true
            navigate("/landing",{state:{user:euser}})
        }

      })
      if(usernotfound === false)
      {
        console.log("login failed")
        setruser(false)
      }

    }
    return(
        <div className="bg-black p-10">
         <div className="bg-[#EFEFEF] p-10 rounded-md">
          <h1 className="text-3xl font-medium">Hey Hi</h1>
          {ruser?<p>I help you manage your activites after you Login:)</p>:<p className="text-red-500">"Please signup before login"</p>}
          <div className="flex flex-col gap-2 my-2">
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Username"  onChange={handleUinput}/>
            <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="Password"  onChange={handlePinput}/>
           
            <button className="bg-[#8272DA] w-24 p-1 rounded-md " onClick={checkUser}>Login</button>

            <p>Don't have an account? <Link to={'/signup'} className="underline">Signup</Link></p>
          </div>
         </div>
        </div>
    )
}
export default Login