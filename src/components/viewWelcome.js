import React from 'react'
import Crm from './crm';
// Import img
import haveNiceDay from '../img/haveNiceDay.svg';


function viewWelcome() {
    return (
        <Crm titulo="You Can Do It :)">
            <img src={haveNiceDay} className="haveNiceDay"  editRoute="/crm/welcome" />
        </Crm>
    )
}

export default viewWelcome
