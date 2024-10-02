import {React , useState} from "react";
function Array() {
    const [arr , setState] = useState([1, 2, 3, 4, 5, 6]);
  return <>
    <div className="m-2">
    {arr.map((val)=><h1 className="text-xl p-2 bg-green-500 inline-block mr-2">{val}</h1>)}
    <button className="bg-blue-500" onClick={
        () =>  {setState([...arr , arr.length+1])}
    }>add</button>
    <button className="bg-red-500 ml-2" onClick={
        () =>{setState((val) => val.filter((item, index)=> index !== val.length-1) )}
    }>remove</button>
    </div>
  </>;
}

export default Array;
