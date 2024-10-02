import React from 'react';
function Form({submitHandler, registerHandler ,userHandler}) {
    return (<div className='flex justify-center'>
        <form className='w-1/2 p-5 flex justify-between items-center' onSubmit={ submitHandler(data => {userHandler(prev => [...prev ,data]) , console.log(data)}) }>
            <input {...registerHandler("name")} className=' rounded-md px-2 py-1 font-semibold outline-none' type="text" placeholder="Name" />
            <input {...registerHandler("email")} className=' rounded-md px-2 py-1 font-semibold outline-none' type="email" placeholder="Email" />
            <input {...registerHandler("imgUrl")} className=' rounded-md px-2 py-1 font-semibold outline-none' type="text" placeholder="img url" />
            <input className='rounded-md bg-blue-500 px-3 py-1 text-zinc-100' type="submit" />
        </form>
    </div>);
}

export default Form;