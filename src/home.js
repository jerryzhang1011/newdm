
import React from 'react';
import logo from './logo.png'
const Home = () => {
    return (
        <div className='home'>
            <div className='home-container'>
                <h1>Welcome to DM's home</h1>
                <img src={logo}/>
                <div className='home-question'>
                    <div id='q1'>
                        <h2>Who Are we?</h2>
                        <p>"We originated in the summer of 2022. We are a friendly collective. All members are protected by the 'Three Men Agreement'."</p>
                    </div>
                    <div id='q2'>
                        <h2>Why choose us?</h2>
                        <p>"Everyone in the DM group has a reason, and no one is innocent."</p>
                    </div>
                </div>
                <h2 id='claim-sentence'>"We won't wrongly accuse any good person, nor will we let go of any DM."</h2>
            </div>
        </div>
    );
};
 
export default Home;
