import React from 'react';
import Card from './card';
function Cards({allUsers , removeHandler}) {
    return ( <div className='flex gap-10 flex-wrap max-h-96 overflow-auto'>
    {allUsers.map((user , index) => <Card key={index} userInfo={user} index={index} removeHandler={removeHandler}/>)}
    </div> );
}

export default Cards;