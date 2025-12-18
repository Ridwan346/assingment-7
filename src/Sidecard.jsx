import React from 'react';
import Showhistory from './Showhistory';

const Sidecard = ({baytiket ,remove}) => {
    return (
       <div>
        {
            baytiket.map(element =><Showhistory element={element} remove={remove}></Showhistory>)
        }
       </div>
    );
};

export default Sidecard;