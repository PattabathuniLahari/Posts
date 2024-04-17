import React from 'react';
import logo from './images/live-chat.png';
function Welcome(){
    return (
        <div className='welcome-container'>
            <img src={logo} alt='logo' className='welcome-logo' height="100" width="100"/>
            <p>View and text directly to people present in the chat rooms.</p>
            
        </div>
    )
}
export default Welcome;