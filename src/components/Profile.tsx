import React from 'react';

type Props = {};

export default function Profile({}: Props) {
    return (
        <div className='profile'>
            <img
                src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60'
                alt=''
            />
            <h1>Peter</h1>
            <p>프론트엔드 개발자</p>
        </div>
    );
}
