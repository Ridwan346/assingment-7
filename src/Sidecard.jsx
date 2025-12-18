import React from 'react';
import Showhistory from './Showhistory';

const Sidecard = ({baytiket}) => {
    return (
       <div>
        {
            baytiket.map(element =><Showhistory element={element}></Showhistory>)
        }
       </div>
    );
};

export default Sidecard;