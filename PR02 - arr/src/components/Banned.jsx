import {React , useState} from 'react';

function Banned() {
    const [Banned,setBanned] = useState(false);
    return ( 
        <>
      <div>
      <h1 className='text-xl'>{Banned ? "Banned" : "Unbanned"}</h1>
      <button className ={`${Banned ? "bg-red-500" : "bg-blue-500"} px-4 py-2`} onClick={
        () => setBanned(Banned ? false : true)
      }> click</button>
      </div>
    </>
     );
}

export default Banned;