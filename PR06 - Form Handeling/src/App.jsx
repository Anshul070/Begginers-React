import React,{useState} from "react";
import Cards from "./components/cards";
import Form from "./components/Form";
import { useForm } from 'react-hook-form';

function App() {
  const {handleSubmit,register} = useForm();
  const [users,setUsers] = useState([]);

  function userRemover(userIndex){
    setUsers(prev => prev.filter((user,index) => index !== userIndex))
  }

  return <div className="w-full h-screen bg-zinc-300 flex flex-col justify-center items-center gap-10 ">
    <div className="mx-auto p-8">
    <Cards allUsers={users} removeHandler={userRemover}/>
    </div>
    <div className="mx-auto w-full">
    <Form registerHandler={register} submitHandler={handleSubmit} userHandler={setUsers}/>
    </div>
  </div>;
}

export default App;
