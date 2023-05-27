import React from 'react';

type Props = {
    image: string;
    alt: string;
    name: string;
    title: string;
    isNew: boolean | string;
};

export default function Profile({ image, alt, name, title, isNew }: Props) {
    return (
        <div className='profile'>
            <img className='photo' src={image} alt={alt} />
            <h1>{name}</h1>
            <p>{title}</p>
            {isNew && <span className='new'>{isNew}</span>}
        </div>
    );
}
