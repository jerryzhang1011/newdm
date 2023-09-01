import React from 'react';
import Card from './big_five_card';
import Bigfive from './bigfive';
import Member from './member';

const Contact = () => {
    let a = "member remove_scr"
    return (
        <div className='contact'>
            <h1>MEMBER LISTS</h1>
            <div className='bigfive remove_scr'>
                <h2 id='big-five-text'>The Big Five Golden Members</h2>
                <Bigfive />
            </div>
            <Member/>
        </div>
    );
};
 
export default Contact;