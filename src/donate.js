import React from 'react'

import './vote.scss';

export default function Vote(){
    return<div className='container'>
        <div className='image'></div>
        <div className='blur'></div>

        <div className='text'>
            <div className='title'>Vote for Windia</div>
            <div className='subtitle'>You do not need to be logged off while voting for us!</div>
            <div className='subtitle2'>You can vote up to <span>3 times</span> per day.</div>
        </div>

        <div className='button'>Vote</div>
        </div>
}