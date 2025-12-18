import React from 'react';

const Showhistory = ({element}) => {
    return (
         <div className='flex flex-col border p-2.5 rounded-xl mt-2'>
           <h1>{element.title}</h1>
           <button className='border rounded-xl bg-green-600 text-white'>Complete</button>
        </div>
    );
};

export default Showhistory;