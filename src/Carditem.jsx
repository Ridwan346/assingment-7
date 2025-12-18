import React from 'react';

const Carditem = ({item ,setbaytiket ,baytiket}) => {
    const statusColor =
    item.status === "In Progress"
      ? "bg-yellow-400"
      : "bg-green-500";

      const statuspriority =
  item.priority === "Low"
    ? "text-green-500"
    : item.priority === "High"
    ? "text-red-500"
    : "text-yellow-500";
    return (
        <div className='border p-2.5 mt-6 bg-white rounded-sm'>
           <div className='flex justify-between'>
             <h1 onClick={()=>setbaytiket([...baytiket,item])} className='text-xl font-bold'>{item.title}</h1>
             <button className={`${statusColor} px-2 rounded-xl`}>{item.status}</button>
           </div>
           <p>{item.description}</p>
          <div className='flex justify-between items-center'>
             <p className={`${statuspriority}`}>{item.priority}</p>
             <div><p>{item.customer}</p>
             <p>{item.createdAt}</p></div>
          </div>
        </div>
    );
};

export default Carditem;