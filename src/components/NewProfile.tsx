import React from 'react';

type Props = {};

export default function NewProfile({}: Props) {
    return (
        <div>
            <form>
                <label htmlFor=''>
                    Name:
                    <input type='text' />
                </label>
            </form>
        </div>
    );
}
