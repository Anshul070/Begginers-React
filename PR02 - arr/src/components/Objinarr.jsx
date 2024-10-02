import {React , useState} from "react";

function Objinarr() {
    const [arr, Objstate] = useState([
        { id: 1, name: "Shreyans" },
        { id: 2, name: "Rajesh" },
        { id: 3, name: "Vijay" },
        { id: 4, name: "Ramesh" }
    ]);
  return <div className="m-2">
    {}
    {arr.map((val) => <div className="flex gap-5"><h5>{val.id}</h5> <h5>{val.name}</h5></div>)}

    {/* Change Button */}
    <button className="bg-yellow-700 p-2" onClick={
        () => {Objstate((val)=> val.map((val)=> val.id === Number(arr.length/2) ? {...val , name: "Anshul"} : {...val}))}
    }>change</button>

    {/* Add Button */}
    <button  className="bg-blue-500 p-2 m-2" onClick={
        () => Objstate([...arr , {id: arr.length+1 , name: "Rahul"}])
    }>add</button>

    {/* Add Button */}
    <button className="bg-blue-500 p-2" onClick={
        () => Objstate((val)=> val.filter((val, index)=> index !== arr.length-1))
    }>remove</button>

  </div>;
}

export default Objinarr;
