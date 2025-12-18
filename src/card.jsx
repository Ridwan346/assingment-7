import React, { use } from 'react';
import Carditem from './Carditem';
import Sidecard from './Sidecard';

const Card = ({tiket ,baytiket ,setbaytiket}) => {
    let hook = use(tiket)
    console.log(hook)
    return (
        <div className='flex gap-2.5'>
             <div className="grid grid-cols-2 w-2/3 gap-4">
      {
        hook.map(item => (
          <Carditem item={item} setbaytiket={setbaytiket} baytiket={baytiket}></Carditem>
        ))
      }   
    </div>
    <div><Sidecard baytiket={baytiket}></Sidecard></div>
        </div>
    );
};

export default Card;