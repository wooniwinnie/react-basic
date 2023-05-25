import React from 'react';

type Props = {
    image: string;
    alt: string;
    name: string;
    title: string;
};

export default function Profile({ image, alt, name, title }: Props) {
    return (
        <div className='profile'>
            <img className='photo' src={image} alt={alt} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}
