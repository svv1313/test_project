import React from 'react'
import UpperShellImg from '../assets/Shell1.svg'
import ShellImg from '../assets/Shell2.svg'

const Shell = () => {


    return (
        <div className="shell_container">
            <img className='upper_shell' src={UpperShellImg} alt='upper shell'/>
            <img className='shell' src={ShellImg} alt='shell'/>
        </div>
    );
}

export default Shell;