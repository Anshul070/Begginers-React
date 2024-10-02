import React, { useState } from 'react'
import Card from './components/Card'

function App() {
  const data = [
    { name: 'John', profile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D", profession: "Rapper" , friends:false},
    { name: 'Jane', profile: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D", profession: "Traveler", friends:false},
    { name: 'Mike', profile: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", profession: "Rider", friends:false},
  ];
  const [info,setInfo] = useState(data);

  function handleStateChange(profileIndex){
    setInfo((state) => state.map((val , index)=> profileIndex===index ?({...val, friends: !val.friends}) : val ))
    console.log("State changed");
  }

  return (
    <>
    <div className='w-full h-screen bg-zinc-500 flex justify-center items-center gap-5'>
      {info.map((info, index) => <Card key={index} values={info} index={index}  handleStateChange={handleStateChange}/>)}
    </div>
      
    </>
  )
}

export default App
