import { useState } from "react"

function AddTodoForm(props){
    const activityArr = props.activityArr
    const setActivityArr=props.setActivityArr
    const[newactivity,setNewActivity] = useState("")
    function handleChange(event){
        setNewActivity(event.target.value)
    }
    function addActivity(){
        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewActivity("");
    }
   return(
    <div className="flex flex-col gap-3" >
    <h1 className="text 2xl font-medium">Manage Activity</h1>
    <div>
    <input type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity..?" onChange={handleChange} value={newactivity}></input>
    <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
    </div>
 
</div>
   )
}
export default AddTodoForm